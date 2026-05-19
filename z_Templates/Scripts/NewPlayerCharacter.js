const CREATE_NEW = "＋ Create New Party";

module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const playersFolder = app.vault.getAbstractFileByPath("Campaign/Characters/Players");
  if (!playersFolder) {
    new Notice("Players folder not found!");
    return;
  }

  const partyFolders = playersFolder.children.filter((f) => "children" in f);
  let selectedParty;

  if (partyFolders.length === 0) {
    // No parties at all — must create one first
    const createNew = await qa.yesNoPrompt(
      "No parties found",
      "No parties exist yet. Create a new party now?"
    );
    if (!createNew) return;

    const newPartyName = await qa.inputPrompt("New Party Name", "Enter party name...");
    if (!newPartyName) return;

    await createParty(app, newPartyName);
    selectedParty = newPartyName;
  } else {
    // Show existing parties + option to create a new one
    const partyNames = partyFolders.map((f) => f.name);
    const options = [...partyNames, CREATE_NEW];
    const choice = await qa.suggester(options, options);
    if (!choice) return;

    if (choice === CREATE_NEW) {
      const newPartyName = await qa.inputPrompt("New Party Name", "Enter party name...");
      if (!newPartyName) return;
      await createParty(app, newPartyName);
      selectedParty = newPartyName;
    } else {
      selectedParty = choice;
    }
  }

  const characterName = await qa.inputPrompt(
    `New Player Character — ${selectedParty}`,
    "Enter character name..."
  );
  if (!characterName) return;

  const pcPath = `Campaign/Characters/Players/${selectedParty}/${characterName}.md`;
  const existing = app.vault.getAbstractFileByPath(pcPath);
  if (existing) {
    new Notice(`"${characterName}" already exists in ${selectedParty}!`);
    await app.workspace.getLeaf().openFile(existing);
    return;
  }

  const pcTemplate = app.vault.getAbstractFileByPath(
    "z_Templates/Characters/Template - Player Character.md"
  );
  if (!pcTemplate) {
    new Notice("Player Character template not found!");
    return;
  }

  // Set whichParty in the frontmatter before creating the file
  let content = await app.vault.read(pcTemplate);
  content = content.replace(
    /^whichParty: \[\]$/m,
    `whichParty:\n  - "[[${selectedParty}]]"`
  );

  const pcFile = await app.vault.create(pcPath, content);
  await app.workspace.getLeaf().openFile(pcFile);
  new Notice(`"${characterName}" added to ${selectedParty}!`);
};

// ── party creation ────────────────────────────────────────────────────────────

async function createParty(app, partyName) {
  const dashboardPath = `Campaign/Parties/Party Dashboards/${partyName}.md`;
  const partyN = getNextPartyNumber(app);
  const dbFolderPath = `z_Databases/Party/${partyName}`;

  await createFolderSafe(app, `Campaign/Characters/Players/${partyName}`);
  await createFolderSafe(app, dbFolderPath);

  await copyBase(app, "z_Databases/Party/Database - Party Members.base", `${dbFolderPath}/Database - Party Members.base`);
  await copyBase(app, "z_Databases/Party/Database - Story.base", `${dbFolderPath}/Database - Story.base`);

  const relationsContent = buildRelationsBase(`party${partyN}Relation`);
  await app.vault.create(`${dbFolderPath}/Database - ${partyName} Relations.base`, relationsContent);

  const templateFile = app.vault.getAbstractFileByPath(
    "z_Templates/Characters/Template - Party Dashboard.md"
  );
  if (!templateFile) { new Notice("Party Dashboard template not found!"); return; }

  let content = await app.vault.read(templateFile);
  content = content.replaceAll("Party 1", partyName);
  content = content.replace(/^partyID:\s*$/m, `partyID: ${partyN}`);

  const dashFile = await app.vault.create(dashboardPath, content);
  await app.workspace.getLeaf().openFile(dashFile);
  new Notice(`Party "${partyName}" created (ID: ${partyN})! Now add your character.`);
}

// ── helpers ───────────────────────────────────────────────────────────────────

function getNextPartyNumber(app) {
  const folder = app.vault.getAbstractFileByPath("Campaign/Parties/Party Dashboards");
  if (!folder || !folder.children) return 1;
  const count = folder.children.filter(
    (f) => !("children" in f) && f.extension === "md"
  ).length;
  return count + 1;
}

async function createFolderSafe(app, path) {
  try { await app.vault.createFolder(path); } catch (_) {}
}

async function copyBase(app, srcPath, destPath) {
  const src = app.vault.getAbstractFileByPath(srcPath);
  if (!src) { new Notice(`Base template not found: ${srcPath}`); return; }
  const content = await app.vault.read(src);
  await app.vault.create(destPath, content);
}

function buildRelationsBase(relationField) {
  return `properties:
  file.name:
    displayName: Name
  property.aliases:
    displayName: Aliases
  property.organization:
    displayName: Organizations
  property.religions:
    displayName: Religions
  property.currentLocation:
    displayName: Location
  property.occupation:
    displayName: Occupations
views:
  - type: cards
    name: Family
    filters:
      and:
        - file.inFolder("Campaign/Characters")
        - ${relationField}.contains("Family")
        - or:
            - '!condition.contains("Dead")'
            - condition.isEmpty()
    order:
      - file.name
      - aliases
      - currentLocation
    columnSize:
      file.name: 140
      property.aliases: 190
      property.organization: 234
      property.religions: 147
      property.currentLocation: 203
    image: note.art
    cardSize: 100
  - type: cards
    name: Allies
    filters:
      and:
        - file.inFolder("Campaign/Characters")
        - ${relationField}.contains("Ally")
        - or:
            - '!condition.contains("Dead")'
            - condition.isEmpty()
    order:
      - file.name
      - aliases
      - currentLocation
    columnSize:
      file.name: 140
      property.aliases: 190
      property.organization: 234
      property.religions: 147
      property.currentLocation: 203
    image: note.art
    cardSize: 100
  - type: cards
    name: Friends
    filters:
      and:
        - file.inFolder("Campaign/Characters")
        - ${relationField}.contains("Friend")
        - or:
            - '!condition.contains("Dead")'
            - condition.isEmpty()
    order:
      - file.name
      - aliases
      - currentLocation
    columnSize:
      file.name: 140
      property.aliases: 190
      property.organization: 234
      property.religions: 147
      property.currentLocation: 203
    image: note.art
    cardSize: 100
  - type: cards
    name: Enemy
    filters:
      and:
        - file.inFolder("Campaign/Characters")
        - ${relationField}.contains("Enemy")
        - or:
            - '!condition.contains("Dead")'
            - condition.isEmpty()
    order:
      - file.name
      - aliases
      - currentLocation
    columnSize:
      file.name: 140
      property.aliases: 190
      property.organization: 234
      property.religions: 147
      property.currentLocation: 203
    image: note.art
    cardSize: 100
  - type: cards
    name: All
    filters:
      and:
        - file.inFolder("Campaign/Characters")
        - or:
            - '!condition.contains("Dead")'
            - condition.isEmpty()
        - '!file.tags.contains("Player")'
    order:
      - file.name
      - aliases
      - currentLocation
    columnSize:
      file.name: 140
      property.aliases: 190
      property.organization: 234
      property.religions: 147
      property.currentLocation: 203
    image: note.art
    cardSize: 100
`;
}
