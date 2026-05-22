module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const partyName = await selectFromFolder(app, qa, "Campaign/Parties/Party Dashboards", "Party", true);
  if (partyName === null) return;

  const adventureName = await selectFromFolder(app, qa, "Campaign/Parties/Adventures", "Adventure", true);
  if (adventureName === null) return;

  const name = await qa.inputPrompt("New Quest", "Enter quest name...");
  if (!name) return;

  const destPath = `Campaign/Parties/Quests/${name}.md`;
  if (app.vault.getAbstractFileByPath(destPath)) {
    new Notice(`"${name}" already exists!`);
    return;
  }

  const tpl = app.vault.getAbstractFileByPath("z_Templates/Story/Template - Quest.md");
  if (!tpl) { new Notice("Quest template not found!"); return; }

  let content = await app.vault.read(tpl);
  if (partyName) content = setListField(content, "whichParty", partyName);
  if (adventureName) content = setSingleField(content, "linkedAdventure", adventureName);

  const file = await app.vault.create(destPath, content);
  await getMainLeaf(app).openFile(file);
  new Notice(`"${name}" created!`);
};

async function selectFromFolder(app, qa, folderPath, label, allowSkip = false) {
  const folder = app.vault.getAbstractFileByPath(folderPath);
  const existing = (folder?.children || [])
    .filter(f => !("children" in f) && f.extension === "md")
    .map(f => f.basename);
  const SKIP = "[ None / Skip ]";
  const NEW = "＋ Enter New Name";
  const opts = [...existing];
  if (allowSkip) opts.push(SKIP);
  opts.push(NEW);
  const choice = await qa.suggester(opts, opts);
  if (!choice) return null;
  if (choice === SKIP) return "";
  if (choice === NEW) {
    const n = await qa.inputPrompt(`${label} Name`, "Enter name...");
    return n || null;
  }
  return choice;
}

function setListField(content, field, value) {
  return content.replace(new RegExp(`^${field}:.*$`, "m"), `${field}:\n  - "[[${value}]]"`);
}

function setSingleField(content, field, value) {
  return content.replace(new RegExp(`^(${field}):.*$`, "m"), `$1: "[[${value}]]"`);
}

// Opens a file in the main pane rather than the Buttons panel.
// Finds the first markdown leaf that isn't Buttons.md; falls back to
// whatever leaf Obsidian would pick by default.
function getMainLeaf(app) {
  return app.workspace.getLeavesOfType("markdown")
    .find(l => l.view?.file?.path !== "1.Tools/Buttons.md")
    ?? app.workspace.getLeaf();
}
