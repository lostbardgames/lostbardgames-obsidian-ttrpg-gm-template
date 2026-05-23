// ── Config ────────────────────────────────────────────────────────────────────

const PYTHON_SCRIPT = "import_pf2etools.py"; // relative to vault root

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Detect the correct Python 3 executable for the current OS.
 * Windows uses "python" (or "py"); macOS/Linux use "python3".
 * Returns null if no Python 3 is found.
 */
async function detectPython() {
    const candidates = process.platform === "win32"
        ? ["python", "py", "python3"]
        : ["python3", "python"];

    for (const cmd of candidates) {
        const found = await checkPython3(cmd);
        if (found) return cmd;
    }
    return null;
}

function checkPython3(cmd) {
    return new Promise(resolve => {
        const checker = process.platform === "win32" ? `where ${cmd}` : `which ${cmd}`;
        require("child_process").exec(checker, { timeout: 5000 }, err => {
            if (err) { resolve(false); return; }
            require("child_process").exec(`"${cmd}" -c "import sys; assert sys.version_info >= (3,8)"`, { timeout: 5000 }, e => resolve(!e));
        });
    });
}

async function offerPythonInstall(qa) {
    if (process.platform === "darwin") {
        const choice = await qa.suggester(
            ["Open Terminal to install via Homebrew", "Open python.org download page", "Cancel"],
            ["brew", "web", null]
        );
        if (choice === "brew") {
            require("child_process").exec(
                `osascript -e 'tell application "Terminal" to do script "brew install python3"'`
            );
            new Notice("Opening Terminal to install Python via Homebrew…", 5000);
        } else if (choice === "web") {
            require("child_process").exec("open https://www.python.org/downloads/");
        }
    } else if (process.platform === "win32") {
        const choice = await qa.suggester(
            ["Install via winget (recommended)", "Open python.org download page", "Cancel"],
            ["winget", "web", null]
        );
        if (choice === "winget") {
            const versions = ["3.13", "3.12", "3.11", "3.10"];
            let installed = false;
            for (const v of versions) {
                try {
                    require("child_process").execSync(
                        `winget install Python.Python.3.${v} --silent --accept-source-agreements --accept-package-agreements`,
                        { timeout: 120000 }
                    );
                    installed = true;
                    break;
                } catch (_) { /* try next version */ }
            }
            if (!installed) new Notice("❌ winget install failed. Try installing manually from python.org.", 10000);
        } else if (choice === "web") {
            require("child_process").exec("start https://www.python.org/downloads/");
        }
    }
}

// ── Content types ─────────────────────────────────────────────────────────────

const CONTENT_TYPES = [
    "spells", "items", "backgrounds", "classes", "classfeatures",
    "ancestries", "heritages", "feats", "deities", "conditions",
    "languages", "actions"
];

const TYPE_LABELS = {
    spells:         "Spells",
    items:          "Items",
    backgrounds:    "Backgrounds",
    classes:        "Classes",
    classfeatures:  "Class Features",
    ancestries:     "Ancestries",
    heritages:      "Heritages",
    feats:          "Feats",
    deities:        "Deities",
    conditions:     "Conditions",
    languages:      "Languages",
    actions:        "Actions",
};

// ── Source options ────────────────────────────────────────────────────────────

const SOURCE_OPTIONS = [
    { label: "Paizo Official Only (CRB, APG, GMG, SoM, etc.)",  value: "official" },
    { label: "All Sources (includes third-party & community)",    value: "all"      },
];

// ── Main ──────────────────────────────────────────────────────────────────────

module.exports = async (params) => {
    const { app, quickAddApi: qa } = params;

    // ── Step 1: Python check ───────────────────────────────────────────────────
    const python = await detectPython();
    if (!python) {
        const install = await qa.suggester(
            ["Yes, help me install Python 3", "Cancel"],
            [true, false]
        );
        if (!install) return;
        await offerPythonInstall(qa);
        new Notice("Re-run the importer once Python 3 is installed.", 8000);
        return;
    }

    // ── Step 2: Source filter ─────────────────────────────────────────────────
    const srcLabel = await qa.suggester(
        SOURCE_OPTIONS.map(o => o.label),
        SOURCE_OPTIONS.map(o => o.value)
    );
    if (!srcLabel) return;

    // ── Step 3: Content types ─────────────────────────────────────────────────
    const typeLabels = CONTENT_TYPES.map(t => TYPE_LABELS[t]);
    const selectedLabels = await qa.checkboxPrompt(typeLabels, typeLabels);
    if (!selectedLabels || selectedLabels.length === 0) {
        new Notice("No content types selected.", 4000);
        return;
    }
    const selectedTypes = CONTENT_TYPES.filter(t => selectedLabels.includes(TYPE_LABELS[t]));

    // ── Step 4: Confirm ───────────────────────────────────────────────────────
    const typesLabel = selectedTypes.map(t => TYPE_LABELS[t]).join(", ");
    const srcDisplay = SOURCE_OPTIONS.find(o => o.value === srcLabel)?.label ?? srcLabel;
    const confirm = await qa.yesNoPrompt(
        `Import ${typesLabel}\n\nSource: ${srcDisplay}\n\nThis may take a few minutes. Existing notes will not be overwritten. Continue?`
    );
    if (!confirm) return;

    // ── Step 5: Run Python script ─────────────────────────────────────────────
    const path       = require("path");
    const vaultPath  = app.vault.adapter.basePath;
    const scriptPath = path.join(vaultPath, PYTHON_SCRIPT);
    const shellQuote = a => `"${String(a).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;

    const typeArg   = selectedTypes.length < CONTENT_TYPES.length
        ? `--type ${selectedTypes.join(" ")}`
        : "";
    const sourceArg = `--source ${srcLabel}`;
    const command   = `${shellQuote(python)} ${shellQuote(scriptPath)} --vault ${shellQuote(vaultPath)} ${sourceArg} ${typeArg}`.trim();

    const startNotice = new Notice(
        `⏳ Importing ${typesLabel}… this may take a few minutes.`, 0
    );

    require("child_process").exec(command, { cwd: vaultPath, timeout: 900000 }, (error, stdout, stderr) => {
        startNotice.hide();
        if (error) {
            const detail = stderr?.trim() || error.message;
            new Notice(`❌ PF2e import failed:\n${detail}`, 12000);
            console.error("[RunPF2eImport] error:", error);
            console.error("[RunPF2eImport] stderr:", stderr);
            return;
        }
        const totalMatch = stdout.match(/Wrote (\d+) notes total/);
        const total = totalMatch ? totalMatch[1] : "?";
        new Notice(
            `✅ PF2e import complete — ${total} notes written. Reloading vault…`,
            5000
        );
        console.log("[RunPF2eImport] output:\n", stdout);
        if (stderr?.trim()) console.warn("[RunPF2eImport] stderr:\n", stderr);
        setTimeout(() => app.commands.executeCommandById("app:reload"), 2000);
    });
};
