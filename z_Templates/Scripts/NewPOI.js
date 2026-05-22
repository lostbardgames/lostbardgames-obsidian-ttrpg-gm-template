module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const locationName = await selectParentLocation(app, qa);
  if (locationName === null) return;

  const name = await qa.inputPrompt("New Point of Interest", "Enter POI name...");
  if (!name) return;

  const destPath = `Campaign/POIs/${name}.md`;
  if (app.vault.getAbstractFileByPath(destPath)) {
    new Notice(`"${name}" already exists!`);
    return;
  }

  const tpl = app.vault.getAbstractFileByPath("z_Templates/Locations/Template - Point of Interest.md");
  if (!tpl) { new Notice("POI template not found!"); return; }

  let content = await app.vault.read(tpl);
  if (locationName) {
    content = setSingleField(content, "location", locationName);
    content = setListField(content, "currentLocation", locationName);
  }

  const file = await app.vault.create(destPath, content);
  await getMainLeaf(app).openFile(file);
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
  const NEW = "＋ Create New Location";
  const opts = [...existing, SKIP, NEW];
  const choice = await qa.suggester(opts, opts);
  if (!choice) return null;
  if (choice === SKIP) return "";
  if (choice === NEW) {
    const n = await qa.inputPrompt("New Location Name", "Enter location name...");
    if (!n) return null;

    // Ask what type of location to create
    const typeOpts = ["Settlement", "District", "Area"];
    const type = await qa.suggester(typeOpts, typeOpts);
    if (!type) return null;

    const templateMap = {
      "Settlement": "z_Templates/Locations/Template - Settlement.md",
      "District":   "z_Templates/Locations/Template - District.md",
      "Area":       "z_Templates/Locations/Template - Area.md",
    };
    const folderMap = {
      "Settlement": "Campaign/Settlements",
      "District":   "Campaign/Districts",
      "Area":       "Campaign/Areas",
    };

    const destPath = `${folderMap[type]}/${n}.md`;
    if (!app.vault.getAbstractFileByPath(destPath)) {
      const tpl = app.vault.getAbstractFileByPath(templateMap[type]);
      const content = tpl ? await app.vault.read(tpl) : `---\ntags:\n  - ${type}\n---\n\n# ${n}\n\n`;
      await app.vault.create(destPath, content);
      new Notice(`${type} "${n}" created!`);
    }

    return n;
  }
  return choice;
}

function setSingleField(content, field, value) {
  return content.replace(new RegExp(`^(${field}):.*$`, "m"), `$1: "[[${value}]]"`);
}

function setListField(content, field, value) {
  return content.replace(new RegExp(`^${field}:.*$`, "m"), `${field}:\n  - "[[${value}]]"`);
}

// Opens a file in the main pane rather than the Buttons panel.
// Finds the first markdown leaf that isn't Buttons.md; falls back to
// whatever leaf Obsidian would pick by default.
function getMainLeaf(app) {
  return app.workspace.getLeavesOfType("markdown")
    .find(l => l.view?.file?.path !== "1.Tools/Buttons.md")
    ?? app.workspace.getLeaf();
}
