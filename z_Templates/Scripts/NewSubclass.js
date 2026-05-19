module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const className = await selectFromFolder(app, qa, "Campaign/Lore/Classes", "Class", false);
  if (className === null) return;

  const name = await qa.inputPrompt("New Subclass", "Enter subclass name...");
  if (!name) return;

  const destPath = `Campaign/Lore/Classes/Subclasses/${name}.md`;
  if (app.vault.getAbstractFileByPath(destPath)) {
    new Notice(`"${name}" already exists!`);
    return;
  }

  const tpl = app.vault.getAbstractFileByPath("z_Templates/Lore/Template - Subclass.md");
  if (!tpl) { new Notice("Subclass template not found!"); return; }

  let content = await app.vault.read(tpl);
  if (className) content = setSingleField(content, "parentclass", className);

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
