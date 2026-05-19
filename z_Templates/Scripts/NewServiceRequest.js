module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const questName = await selectFromFolder(app, qa, "Campaign/Parties/Quests", "Quest", true);
  if (questName === null) return;

  const name = await qa.inputPrompt("New Service Request", "Enter service request title...");
  if (!name) return;

  const destPath = `Campaign/Parties/Service Requests/${name}.md`;
  if (app.vault.getAbstractFileByPath(destPath)) {
    new Notice(`"${name}" already exists!`);
    return;
  }

  const tpl = app.vault.getAbstractFileByPath("z_Templates/Story/Template - Service Request.md");
  if (!tpl) { new Notice("Service Request template not found!"); return; }

  let content = await app.vault.read(tpl);
  if (questName) content = setSingleField(content, "relatedQuest", questName);

  const file = await app.vault.create(destPath, content);
  await app.workspace.getLeaf().openFile(file);
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

function setSingleField(content, field, value) {
  return content.replace(new RegExp(`^(${field}):.*$`, "m"), `$1: "[[${value}]]"`);
}
