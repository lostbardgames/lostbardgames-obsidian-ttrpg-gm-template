module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const hqName = await selectLocation(app, qa);
  if (hqName === null) return;

  const name = await qa.inputPrompt("New Organization", "Enter organization name...");
  if (!name) return;

  const destPath = `Campaign/Organizations/${name}.md`;
  if (app.vault.getAbstractFileByPath(destPath)) {
    new Notice(`"${name}" already exists!`);
    return;
  }

  const tpl = app.vault.getAbstractFileByPath("z_Templates/Characters/Template - Organization.md");
  if (!tpl) { new Notice("Organization template not found!"); return; }

  let content = await app.vault.read(tpl);
  if (hqName) content = setSingleField(content, "hq", hqName);

  const file = await app.vault.create(destPath, content);
  await app.workspace.getLeaf().openFile(file);
  new Notice(`"${name}" created!`);
};

async function selectLocation(app, qa) {
  const locationFolders = [
    "Campaign/Settlements",
    "Campaign/Districts",
    "Campaign/Areas",
    "Campaign/POIs",
    "Campaign/Regions",
  ];
  const existing = [];
  for (const fp of locationFolders) {
    const folder = app.vault.getAbstractFileByPath(fp);
    if (folder?.children) {
      folder.children
        .filter(f => !("children" in f) && f.extension === "md")
        .forEach(f => existing.push(f.basename));
    }
  }
  existing.sort();
  const SKIP = "[ None / Skip ]";
  const NEW = "＋ Enter New Name";
  const opts = [...existing, SKIP, NEW];
  const choice = await qa.suggester(opts, opts);
  if (!choice) return null;
  if (choice === SKIP) return "";
  if (choice === NEW) {
    const n = await qa.inputPrompt("HQ Location Name", "Enter location name...");
    return n || null;
  }
  return choice;
}

function setSingleField(content, field, value) {
  return content.replace(new RegExp(`^(${field}):.*$`, "m"), `$1: "[[${value}]]"`);
}
