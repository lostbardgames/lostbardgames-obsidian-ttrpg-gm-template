module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const planeName = await selectFromFolder(app, qa, "Campaign/Planes", "Plane", true);
  if (planeName === null) return;

  const partyName = await selectFromFolder(app, qa, "Campaign/Parties/Party Dashboards", "Party", true);
  if (partyName === null) return;

  const name = await qa.inputPrompt("New Deity", "Enter deity name...");
  if (!name) return;

  const destPath = `Campaign/Characters/Deities/${name}.md`;
  if (app.vault.getAbstractFileByPath(destPath)) {
    new Notice(`"${name}" already exists!`);
    return;
  }

  const tpl = app.vault.getAbstractFileByPath("z_Templates/Characters/Template - Deity.md");
  if (!tpl) { new Notice("Deity template not found!"); return; }

  let content = await app.vault.read(tpl);
  if (planeName) content = setSingleField(content, "homeplane", planeName);
  if (partyName) content = setListField(content, "whichParty", partyName);

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

function setListField(content, field, value) {
  return content.replace(new RegExp(`^${field}:.*$`, "m"), `${field}:\n  - "[[${value}]]"`);
}

function setSingleField(content, field, value) {
  return content.replace(new RegExp(`^(${field}):.*$`, "m"), `$1: "[[${value}]]"`);
}
