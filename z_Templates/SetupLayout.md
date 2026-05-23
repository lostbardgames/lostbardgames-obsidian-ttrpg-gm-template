<%*
// ── First-launch auto-reload ──────────────────────────────────────────────
// .obsidian/first-load is shipped in the vault zip. When it exists, this
// is the first run after the user trusted plugin authors. Delete the marker
// and reload so every plugin initialises cleanly with the correct layout.
const MARKER = ".obsidian/first-load";
if (await app.vault.adapter.exists(MARKER)) {
    await app.vault.adapter.remove(MARKER);
    app.commands.executeCommandById("app:reload");
    return;
}

// ── Default split layout ──────────────────────────────────────────────────
await new Promise(r => setTimeout(r, 600));

const buttonPath   = "1.Tools/Buttons.md";
const homepagePath = "1.Tools/Homepage.md";
const buttonFile   = app.vault.getAbstractFileByPath(buttonPath);
if (!buttonFile) return;

// ── Guard against the Homepage plugin opening a duplicate tab ─────────────
// The plugin fires at an unpredictable time during startup — sometimes
// before this template, sometimes after. Register a short-lived workspace
// listener that closes any extra Homepage.md copies as soon as they appear,
// covering both cases (already open now, or opened in the next 2 seconds).
function closeDuplicateHomepages() {
    const leaves = app.workspace.getLeavesOfType("markdown")
        .filter(l => l.view?.file?.path === homepagePath);
    for (const leaf of leaves.slice(1)) leaf.detach();
}
closeDuplicateHomepages(); // handle any that already exist
const layoutRef = app.workspace.on("layout-change", closeDuplicateHomepages);
setTimeout(() => app.workspace.offref(layoutRef), 2000); // stop watching after 2 s

// ── Ensure Buttons.md is pinned in the right sidebar ─────────────────────
// Helper: walk up parent chain to test if a leaf lives in the right sidebar.
function isInRightSidebar(leaf) {
    let node = leaf.parent;
    while (node) {
        if (node === app.workspace.rightSplit) return true;
        node = node.parent;
    }
    return false;
}

const homeLeaves = app.workspace.getLeavesOfType("markdown")
    .filter(l => l.view?.file?.path === homepagePath);
const activeLeaf = homeLeaves[0] ?? app.workspace.getMostRecentLeaf();

// Close any copies of Buttons.md that are in the main area (not the sidebar).
app.workspace.getLeavesOfType("markdown")
    .filter(l => l.view?.file?.path === buttonPath && !isInRightSidebar(l))
    .forEach(l => l.detach());

// If Buttons.md is not already in the right sidebar, open it there.
const inRightSidebar = app.workspace.getLeavesOfType("markdown")
    .some(l => l.view?.file?.path === buttonPath && isInRightSidebar(l));

if (!inRightSidebar) {
    const leaf = app.workspace.getRightLeaf(false);
    await leaf.openFile(buttonFile, { state: { mode: "preview" } });
}

// Expand the right sidebar if collapsed.
if (app.workspace.rightSplit.collapsed) {
    app.workspace.rightSplit.toggle();
}

if (activeLeaf) app.workspace.setActiveLeaf(activeLeaf, { focus: true });
%>
