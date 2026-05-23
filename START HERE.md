---
tags:
  - Setup
cssclasses:
  - wide-page
---

# 🏰 TTRPG Vault — Setup Guide

Welcome to your new TTRPG campaign vault. This guide walks you through everything needed to get fully up and running. Follow each step in order.

---

> [!warning] ⏱️ Estimated Setup Time
> **5–10 minutes** for core setup · **15–30 minutes** if importing 5e.tools content

---

## Step 1 — Open the Vault in Obsidian

> [!info] Prerequisites
> You must have **Obsidian** installed. Download it free from [obsidian.md](https://obsidian.md) if you haven't already.

1. Open **Obsidian**
2. On the vault picker screen, click **"Open folder as vault"**
3. Navigate to and select the **TTRPG** folder you downloaded
4. Click **Open**

---

## Step 2 — Enable Community Plugins

All plugins are pre-installed inside the vault. You just need to turn them on.

> [!warning] You will see a Safe Mode warning
> Obsidian shows this for any vault containing community plugins. All plugins in this vault are open-source and widely used by the TTRPG community.

1. When prompted, click **"Turn on community plugins"**
   - If you don't see the prompt: go to **Settings → Community Plugins → Turn off Restricted Mode**
2. All 17 plugins will activate automatically — no manual enabling needed

**Plugins included:**

| Plugin | Purpose |
|--------|---------|
| Dataview | Powers all dynamic tables and lists |
| Meta Bind | Inline editable fields on notes |
| QuickAdd | One-click note creation with templates |
| Templater | Advanced template scripting |
| Supercharged Links | Colored icons on links in notes |
| File Color | Colored folder names in the explorer |
| Dice Roller | Inline dice rolls throughout the vault |
| Calendarium | In-world campaign calendar |
| 5e Statblocks | Monster/NPC stat block renderer |
| Leaflet | Interactive maps |
| Excalidraw | Freehand drawing and maps |
| Hover Editor | Pop-up note preview and editing |
| Editing Toolbar | Formatting toolbar in the editor |
| Homepage | Auto-opens Homepage on launch |
| Style Settings | Theme customization controls |
| Pretty Properties | Cleaner property display |
| Various Complements | Autocomplete for note links |

---

## Step 3 — Verify the Theme

The vault uses the **ITS Theme** which must be active for the layout and callouts to display correctly.

1. Go to **Settings → Appearance**
2. Under **Themes**, confirm **ITS Theme** is selected
3. If not: click **Manage**, search for `ITS Theme`, install it, then set it as active

---

## Step 4 — Enable CSS Snippets

The vault's icons and colors in the file explorer require two CSS snippets to be active.

1. Go to **Settings → Appearance → CSS Snippets** (scroll to the bottom)
2. Make sure both of these are toggled **ON**:
   - ✅ `TTRPG-Icons` — adds icons and colors to internal note links
   - ✅ `TTRPG-Folders` — adds icons and colors to folders and key files in the explorer

> [!tip] If you don't see them
> Click the **refresh icon** (⟳) next to "CSS Snippets" to reload the list.

---

## Step 5 — (Optional) Import 5e Content

The vault includes a one-click importer that downloads content from 5e.tools and creates notes automatically for spells, items, classes, races, feats, backgrounds, languages, deities, conditions, and optional features.

> [!warning] License Disclaimer
> You are responsible for ensuring you have a valid license or legal right to the content you import. Content from the **SRD 5.1** is freely available under the Creative Commons license. All other sourcebooks require a valid purchase from the publisher.

**Requirements:** Python 3 must be installed. The importer will detect it automatically and offer to install it if missing.

**To import:**
1. Open **1.Tools/Buttons.md**
2. Scroll to the **🗄️ Vault** section
3. Click **"Import 5e.tools Data"**
4. Follow the prompts:
   - Choose your **source** (WotC official / specific books / all sources)
   - Select **which books** (if using specific books mode)
   - Select **content types** to import
   - Confirm and wait — a notification appears when complete

> [!tip] Safe to re-run
> The importer never overwrites existing notes. You can run it multiple times to add new content types or books without affecting notes you've already edited.

---

## Step 6 — Start Your Campaign

> [!success] You're ready!

1. Open **1.Tools/Homepage.md**
2. Set your **Campaign Name** using the inline text field at the top
3. Click **New Party** in the Quick Create panel — the Active Party is set automatically
4. Start creating characters, locations, and sessions using the Quick Create buttons on the Homepage or the full **1.Tools/Buttons.md** page

---

## Feature Reference

### 🧰 Key Files

| File | Purpose |
|------|---------|
| **1.Tools/Homepage.md** | Campaign dashboard — party tracker, world overview, inspiration tables |
| **1.Tools/GM Screen.md** | Session tool — initiative tracker, rules reference, live notes |
| **1.Tools/Buttons.md** | All quick-create buttons organized by category |

### 📁 Folder Structure

```
Campaign/
├── Characters/       Players · NPCs · Deities
├── Organizations/    Guilds, factions, groups
├── Worlds/           Worlds · Planes · Regions
├── Settlements/      Cities, towns, villages
├── Districts/        Districts and neighborhoods
├── Areas/            Dungeons, forests, landmarks
├── POIs/             Points of Interest & Shops
├── Parties/          Adventures · Quests · Sessions · Encounters
├── Lore/             Classes · Races · Feats · Spells · Conditions
└── Possessions/      Items & Spells
```

### 🎨 Icon & Color System

Every note type has a matching color and emoji icon that appears on internal links and in the file explorer automatically based on the note's tags.

| Tag | Icon | Color |
|-----|------|-------|
| Player | ⚔️ | Gold |
| NPC | 👤 | Gray |
| Deity | ✨ | Purple |
| Organization | 🏛️ | Blue |
| Party | 🛡️ | Red |
| World | 🌍 | Green |
| Settlement | 🏰 | Orange |
| Quest | ⚡ | Yellow |
| SessionNote | 📝 | Mint |
| Encounter | 🗡️ | Coral |
| Spell | 🔮 | Lavender |
| Item | 🎒 | Teal |

### 🔄 Resetting the Vault

The **Reset Vault** button (in Buttons.md → 🗄️ Vault) lets you wipe campaign data when starting a new campaign.

- **Campaign Data Only** — deletes characters, sessions, quests, and locations while keeping imported 5e content
- **Full Reset** — permanently deletes everything

> [!danger] ⚠️ Permanent
> The reset permanently deletes files. There is no recovery. Triple confirmation is required before anything is deleted.

---

> [!abstract] 💬 Support & Feedback
> If you have questions or run into issues, refer to the documentation for each plugin linked in **Settings → Community Plugins**. The Obsidian community forum at [forum.obsidian.md](https://forum.obsidian.md) is also an excellent resource.
