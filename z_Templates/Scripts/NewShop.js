module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const locationName = await selectParentLocation(app, qa);
  if (locationName === null) return;

  const name = await qa.inputPrompt("New Shop", "Enter shop name...");
  if (!name) return;

  const destPath = `Campaign/POIs/${name}.md`;
  if (app.vault.getAbstractFileByPath(destPath)) {
    new Notice(`"${name}" already exists!`);
    return;
  }

  const tpl = app.vault.getAbstractFileByPath("z_Templates/Locations/Template - Shop.md");
  if (!tpl) { new Notice("Shop template not found!"); return; }

  let content = await app.vault.read(tpl);
  if (locationName) {
    content = setSingleField(content, "location", locationName);
    content = setListField(content, "currentLocation", locationName);
  }

  const file = await app.vault.create(destPath, content);
  await app.workspace.getLeaf().openFile(file);
  new Notice(`"${name}" created!`);
};

async function selectParentLocation(app, qa) {
  const locationFolders = [
    "Campaign/Settlements",
    "Campaign/Districts",
    "Campaign/Areas",
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
    const n = await qa.inputPrompt("Parent Location Name", "Enter location name...");
    return n || null;
  }
  return choice;
}

function setSingleField(content, field, value) {
  return content.replace(new RegExp(`^(${field}):.*$`, "m"), `$1: "[[${value}]]"`);
}

function setListField(content, field, value) {
  return content.replace(new RegExp(`^${field}:.*$`, "m"), `${field}:\n  - "[[${value}]]"`);
}
