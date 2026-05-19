const CAMPAIGN_ONLY = "Campaign Data Only — preserve 5e.tools imports";
const FULL_RESET    = "Full Reset — delete everything including 5e.tools imports";

const CAMPAIGN_FOLDERS = [
  "Campaign/Characters/Players",
  "Campaign/Characters/NPCs",
  "Campaign/Organizations",
  "Campaign/Worlds",
  "Campaign/Regions",
  "Campaign/Settlements",
  "Campaign/Districts",
  "Campaign/Areas",
  "Campaign/POIs",
  "Campaign/Planes",
  "Campaign/Parties/Adventures",
  "Campaign/Parties/Quests",
  "Campaign/Parties/Session Notes",
  "Campaign/Parties/Encounters",
  "Campaign/Parties/Service Requests",
  "Campaign/Parties/Party Dashboards",
  "Campaign/Parties/Journey Boards",
  "Campaign/Lore/Events",
];

const IMPORT_FOLDERS = [
  "Campaign/Characters/Deities",
  "Campaign/Lore/Classes",
  "Campaign/Lore/Feats",
  "Campaign/Lore/Races",
  "Campaign/Lore/Backgrounds",
  "Campaign/Lore/Conditions",
  "Campaign/Lore/Languages",
  "Campaign/Lore/Optional Features",
  "Campaign/Possessions/Spells",
  "Campaign/Possessions/Items",
];

module.exports = async (params) => {
  const { app, quickAddApi: qa } = params;

  const mode = await qa.suggester(
    [CAMPAIGN_ONLY, FULL_RESET],
    [CAMPAIGN_ONLY, FULL_RESET]
  );
  if (!mode) return;

  const isFull = mode === FULL_RESET;

  const warning = isFull
    ? "This will delete ALL notes in the vault — campaign data AND all 5e.tools imports (spells, items, classes, feats, races, deities, etc.). The vault will be completely empty."
    : "This will delete all campaign data: parties, characters, sessions, quests, locations, organizations, and encounters. 5e.tools imported data will be preserved.";

  const confirm1 = await qa.yesNoPrompt("⚠️ Reset Vault — Are you sure?", warning);
  if (!confirm1) return;

  const confirm2 = await qa.yesNoPrompt(
    "⚠️ Final Confirmation",
    `${isFull ? "ALL vault data" : "All campaign notes"} will be PERMANENTLY deleted and cannot be recovered. Type RESET in the next prompt to proceed.`
  );
  if (!confirm2) return;

  const typed = await qa.inputPrompt("Type RESET to confirm", "");
  if (typed?.trim().toUpperCase() !== "RESET") {
    new Notice("Reset cancelled.");
    return;
  }

  let deleted = 0;

  for (const folderPath of CAMPAIGN_FOLDERS) {
    deleted += await emptyFolder(app, folderPath);
  }

  if (isFull) {
    for (const folderPath of IMPORT_FOLDERS) {
      deleted += await emptyFolder(app, folderPath);
    }
  }

  deleted += await clearPartyDatabases(app, isFull);

  await resetPageProperties(app, "1.Tools/Homepage.md");
  await resetPageProperties(app, "1.Tools/GM Screen.md");

  const label = isFull ? "Full vault reset" : "Campaign reset";
  new Notice(`✅ ${label} complete. ${deleted} file(s) permanently deleted. Reloading...`);

  setTimeout(() => app.commands.executeCommandById("app:reload"), 1500);
};

async function emptyFolder(app, folderPath) {
  const folder = app.vault.getAbstractFileByPath(folderPath);
  if (!folder || !("children" in folder)) return 0;
  let count = 0;
  for (const child of [...folder.children]) {
    try {
      await app.vault.delete(child, true);
      count++;
    } catch (e) {
      console.warn(`ResetVault: could not delete ${child.path}`, e);
    }
  }
  return count;
}

async function clearPartyDatabases(app, deleteAll = false) {
  const folder = app.vault.getAbstractFileByPath("z_Databases/Party");
  if (!folder?.children) return 0;
  let count = 0;
  for (const child of [...folder.children]) {
    if ("children" in child) {
      // Party-specific subfolders — always remove
      try {
        await app.vault.delete(child, true);
        count++;
      } catch (e) {
        console.warn(`ResetVault: could not delete ${child.path}`, e);
      }
    } else if (deleteAll) {
      // Full reset also removes the root template .base files
      try {
        await app.vault.delete(child, true);
        count++;
      } catch (e) {
        console.warn(`ResetVault: could not delete ${child.path}`, e);
      }
    }
  }
  return count;
}

async function resetPageProperties(app, filePath) {
  const file = app.vault.getAbstractFileByPath(filePath);
  if (!file || "children" in file) return;
  try {
    let content = await app.vault.read(file);
    content = content.replace(/^campaignName:.*$/m, "campaignName: My Campaign");
    content = content.replace(/^activeParty:.*$/m, "activeParty:");
    content = content.replace(/^currentSession:.*$/m, "currentSession:");
    await app.vault.modify(file, content);
  } catch (e) {
    console.warn(`ResetVault: could not reset properties in ${filePath}`, e);
  }
}
