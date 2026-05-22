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
// After reload (or on any subsequent open), ensure Buttons.md is visible
// in a split pane beside Homepage. Skip silently if it is already open.
// Wait long enough for all startup plugins (including Homepage) to finish.
await new Promise(r => setTimeout(r, 800));

const buttonPath   = "1.Tools/Buttons.md";
const homepagePath = "1.Tools/Homepage.md";
const buttonFile   = app.vault.getAbstractFileByPath(buttonPath);
if (!buttonFile) return;

// ── Deduplicate Homepage.md ───────────────────────────────────────────────
// The Homepage plugin opens a fresh copy on every reload. After an update-
// triggered reload the workspace already has the previous session's leaves,
// so the plugin creates a second Homepage.md tab in the main pane.
// Always close any extras so only one copy remains.
const homeLeaves = app.workspace.getLeavesOfType("markdown")
    .filter(l => l.view?.file?.path === homepagePath);
for (const leaf of homeLeaves.slice(1)) {
    leaf.detach();
}

// ── Open Buttons.md in a split if not already visible ────────────────────
const alreadyOpen = app.workspace.getLeavesOfType("markdown")
    .some(l => l.view?.file?.path === buttonPath);
if (alreadyOpen) return;

// Remember the active leaf before splitting so we can restore focus.
const activeLeaf = homeLeaves[0] ?? app.workspace.getMostRecentLeaf();

const leaf = app.workspace.getLeaf("split", "vertical");
await leaf.openFile(buttonFile, { state: { mode: "preview" } });

// Restore focus to the left pane so the Homepage plugin (if it fires
// after this template) places Homepage.md on the left, not the right.
if (activeLeaf) app.workspace.setActiveLeaf(activeLeaf, { focus: true });
%>
