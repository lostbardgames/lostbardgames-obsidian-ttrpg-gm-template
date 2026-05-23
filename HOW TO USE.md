---
tags:
  - Guide
cssclasses:
  - wide-page
---

# 📖 How to Use This Vault

This guide covers every note type in the vault — what each one is for, every field explained, and how notes connect to each other. If you're new to Obsidian, start at the top. If you know your way around, jump to the section you need.

> [!tip] New to Obsidian?
> In Obsidian, **notes** are just files. **Properties** (also called frontmatter) are the structured fields at the top of a note — they power all the automatic lists and dashboards. **Internal links** look like `[[Note Name]]` and connect notes together. The dashboards work because of those connections.

---

## Table of Contents

1. [[#The Golden Rules]]
2. [[#Key Tools]]
3. [[#Characters]]
   - [[#Player Characters]]
   - [[#NPCs]]
   - [[#Deities]]
   - [[#Organizations]]
4. [[#Locations]]
   - [[#Worlds]]
   - [[#Planes]]
   - [[#Regions]]
   - [[#Settlements]]
   - [[#Districts]]
   - [[#Areas]]
   - [[#Points of Interest]]
   - [[#Shops]]
5. [[#Parties & Story]]
   - [[#The Party Dashboard]]
   - [[#Adventures]]
   - [[#Quests]]
   - [[#Session Notes]]
   - [[#Encounters]]
   - [[#Service Requests]]
   - [[#Events]]
6. [[#Lore Reference]]
   - [[#Classes]]
   - [[#Subclasses]]
   - [[#Races & Species]]
   - [[#Backgrounds]]
   - [[#Feats]]
   - [[#Conditions]]
   - [[#Languages]]
   - [[#Optional Features]]
7. [[#Possessions]]
   - [[#Items]]
   - [[#Spells]]
8. [[#Running a Session]]
   - [[#The GM Screen]]
9. [[#Importing 5e Content]]

---

## The Golden Rules

**1. Never create notes manually.** Always use the Quick Create buttons on the [[1.Tools/Homepage|Homepage]] or the full button list on [[1.Tools/Buttons|Buttons]]. The buttons apply the right template, place the file in the right folder, and tag it correctly so it appears on dashboards automatically.

**2. Links power everything.** When you link a character to a party, a quest to an adventure, or an NPC to a session, those connections drive the automatic lists you see on dashboards. If something isn't appearing where you expect it, check that the relevant link field is filled in.

**3. Fill in fields as you go.** You don't have to fill in every property immediately. Start with the essentials — especially **witchParty** on characters, quests, sessions, and adventures — and fill in the rest as your campaign develops.

**4. Properties are clickable.** In Reading mode, most property fields are clickable inline. You can edit them without opening the note's raw editor. Toggle on **Live Preview** mode for the best experience.

---

## Key Tools

### Homepage — `1.Tools/Homepage`

Your campaign dashboard. Opens automatically when you launch Obsidian. It shows your active party's members and HP, open quests, world overview, settlements, and session spark tables. Use the Quick Create buttons here for the most common note types.

### Buttons — `1.Tools/Buttons`

Every note type has a creation button here, organized by category: Characters, Locations, Story, Lore, Possessions, and Vault tools. When you need to create something that isn't on the Homepage Quick Create panel, come here.

### GM Screen — `1.Tools/GM Screen`

Your live session tool. Keep it open during play for initiative tracking, live notes, quick rules references, and encounter seeds. See [[#The GM Screen]] for full details.

---

## Characters

### Player Characters

**What it is:** The character sheet for each player in your campaign.

**Create it:** Homepage → Quick Create → **New Player Character**, or Buttons → Characters → **New Player Character**.

**Where it's stored:** `Campaign/Characters/Players/{Party Name}/`

#### Key Fields

| Field                                 | What to put here                                                                                                                                                                          |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Played By**                         | The player's real name. Shows on dashboards so you know who's who.                                                                                                                        |
| **Species**                           | Link to a Race note — e.g. `[[Half-Elf]]`. If you've imported 5e content, these notes exist already.                                                                                      |
| **Class**                             | Link to a Class note — e.g. `[[Fighter]]`.                                                                                                                                                |
| **Subclass**                          | Link to a Subclass note — e.g. `[[Battle Master]]`.                                                                                                                                       |
| **Background**                        | Link to a Background note — e.g. `[[Soldier]]`.                                                                                                                                           |
| **Which Party**                       | **Most important field.** Link to the Party Dashboard — e.g. `[[The Iron Fellowship]]`. This is what makes the character appear in the party tracker on the Homepage and Party Dashboard. |
| **Condition**                         | Current status. Default is `Healthy`. Change to `Poisoned`, `Unconscious`, `Dead`, etc. during play. Shown on the Homepage party panel.                                                   |
| **Level**                             | Current character level. Update when they level up.                                                                                                                                       |
| **Experience**                        | Current XP total.                                                                                                                                                                         |
| **HP (Max)**                          | Maximum hit points.                                                                                                                                                                       |
| **HP (Current)**                      | Current hit points. **Update this during play** — it feeds the HP bars on the Homepage.                                                                                                   |
| **AC**                                | Armor Class. Shown on the Homepage party panel.                                                                                                                                           |
| **Speed**                             | Movement speed in feet.                                                                                                                                                                   |
| **STR / DEX / CON / INT / WIS / CHA** | Ability scores (8–20 for most characters).                                                                                                                                                |
| **Languages**                         | Link to Language notes for each language the character speaks.                                                                                                                            |
| **Religions**                         | Link to Deity notes. Tracks who the character worships.                                                                                                                                   |
| **Organizations**                     | Link to any Organization notes the character belongs to.                                                                                                                                  |

#### Sections in the Note

- **Stats** — ability scores, saving throws, HP, AC, speed
- **Skills & Saves** — proficiency toggles for each skill
- **Features & Traits** — class features, racial traits, feats. Link to the relevant Feat or Class notes.
- **Equipment** — items the character carries. Link to Item notes for magic items.
- **Spells** — spell slots and prepared spells. Link to Spell notes.
- **Backstory** — free-form history and character description

> [!tip] HP During Play
> The **HP (Current)** field (`hp_current`) feeds the health bars on the Homepage party panel. Get into the habit of updating it between combats — or even live using the inline field.

---

### NPCs

**What it is:** A non-player character — anyone in your world who isn't a player character.

**Create it:** Buttons → Characters → **New NPC**.

**Where it's stored:** `Campaign/Characters/NPCs/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Occupation** | What the NPC does — `Innkeeper`, `City Guard Captain`, `Assassin`. |
| **Organizations** | Link to any factions, guilds, or groups they belong to. |
| **Current Location** | Link to a Settlement, District, or POI note. Tracks where the NPC currently is. |
| **Condition** | Their current state — `Alive`, `Dead`, `Missing`, `Captured`. The Party Dashboard hides dead NPCs from most relation views. |
| **CR** | Challenge Rating (for combat-relevant NPCs). |
| **HP / AC** | Combat stats if needed. |
| **Is Quest Giver** | Toggle on if this NPC gives quests. Appears in quest giver dropdowns. |
| **Is Merchant** | Toggle on if they run a shop. |
| **Party Relation** | How this NPC relates to your active party — `Ally`, `Enemy`, `Friend`, `Family`, `Neutral`. This is what populates the **Relations** section on the Party Dashboard. |

#### Sections in the Note

- **Bio** — age, appearance, personality summary
- **Personality** — traits, ideals, bonds, flaws (the D&D personality pillars)
- **Roleplaying Notes** — voice, mannerisms, secrets — your private GM notes
- **Combat Stats** — HP, AC, attacks, abilities if you need them
- **Connections** — link to related NPCs, organizations, locations

> [!tip] Tracking NPC Locations
> Fill in **Current Location** and update it as the story moves NPCs around. The Homepage "Worlds & Regions" column can show which NPCs are in which settlements.

---

### Deities

**What it is:** A god, demigod, or divine being in your world.

**Create it:** Buttons → Characters → **New Deity**.

**Where it's stored:** `Campaign/Characters/Deities/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Deity Power** | `Greater Deity`, `Lesser Deity`, `Demigod`, `Quasi-Deity`, etc. |
| **Domain** | Thematic domain — `Death`, `War`, `Nature`, `Trickery`. |
| **Cleric Domains** | Which D&D cleric subclass domains are associated. Link to Subclass notes. |
| **Favored Weapon** | The deity's traditional weapon. |
| **Holy Symbol** | Description of the holy symbol. |
| **Allied Deities** | Link to other Deity notes this deity is allied with. |
| **Enemy Deities** | Link to opposing Deity notes. |
| **Alignment** | The deity's alignment. |
| **Pantheon** | Which pantheon they belong to — `Norse`, `Greek`, `Homebrew`, etc. |
| **Worshipers** | Link to Character notes of prominent worshipers. |

> [!tip] Connecting to Characters
> When a player character worships a deity, link to that Deity note from the character's **Religions** field. This lets you query which characters follow which gods.

---

### Organizations

**What it is:** A faction, guild, cult, government, or any group of people with a shared purpose.

**Create it:** Buttons → Characters → **New Organization**.

**Where it's stored:** `Campaign/Organizations/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Organization Types** | `Guild`, `Government`, `Criminal`, `Military`, `Religious`, `Mercantile`, etc. |
| **Worship** | Link to a Deity note if the organization is religious. |
| **Size** | `Tiny` (2–5), `Small` (6–30), `Medium` (31–100), `Large` (101–1000), `Massive` (1000+). |
| **Influence** | How far their reach extends — `Local`, `Regional`, `National`, `Continental`, `Global`. |
| **Headquarters** | Link to a Settlement or POI note. |
| **Hierarchy** | Description of the power structure. |
| **Heads** | Link to NPC notes for the leaders. |
| **Stewards** | Link to NPC notes for lieutenants and key members. |

> [!tip] The Web of Connections
> Organizations work best when you link NPCs to them (via the NPC's **Organizations** field) and link them to locations (via **Headquarters**). This lets the Homepage show "Organizations in this Settlement" automatically.

---

## Locations

Locations are structured as a hierarchy from largest to smallest:

**World → Plane → Region → Settlement → District → Area → POI**

Each level can link to the one above it. You don't have to use every level — use as many layers as your campaign needs.

---

### Worlds

**What it is:** A planet, dimension, or entire material world.

**Create it:** Buttons → Locations → **New World**.

**Where it's stored:** `Campaign/Worlds/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **World Type** | `Material Plane`, `Demiplane`, `Pocket Dimension`, etc. |
| **Climate** | General climate character — `Temperate`, `Arctic`, `Tropical`, `Desert`. |
| **Magic Level** | How prevalent magic is — `Low`, `Medium`, `High`, `Wild`. |
| **Technology Level** | `Primitive`, `Medieval`, `Renaissance`, `Magitek`, etc. |
| **Dominant Species** | The primary races inhabiting this world. Link to Race notes. |
| **Current World Date** | The in-game date, written however your calendar works. |

---

### Planes

**What it is:** A plane of existence — the Astral Sea, the Nine Hells, a custom elemental plane.

**Create it:** Buttons → Locations → **New Plane**.

**Where it's stored:** `Campaign/Planes/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Plane Type** | `Outer Plane`, `Inner Plane`, `Transitive Plane`, `Demiplane`. |
| **Alignment Axis** | The dominant alignment of the plane — `Lawful Good`, `Chaotic Evil`, etc. |
| **Dominant Energy** | `Positive`, `Negative`, `Fire`, `Void`, etc. |
| **Trait: Gravity** | How gravity behaves — `Normal`, `Heavy`, `Light`, `Objective Directional`, `Subjective Directional`. |
| **Trait: Time** | How time flows — `Normal`, `Flowing` (faster), `Erratic`, `Timeless`. |
| **Trait: Size** | `Infinite`, `Finite`, `Self-Contained`. |
| **Trait: Morphic** | How mutable the plane is — `Divinely Morphic`, `Highly Morphic`, `Magically Morphic`, `Static`. |
| **Connected Planes** | Link to other Plane notes that border or connect to this one. |
| **Access Methods** | How one travels here — `Astral Projection`, `Portal`, `Plane Shift`, `Native Gate`. |

#### Sections in the Note

- **Cosmography** — how this plane fits in the broader cosmology
- **Geography & Layers** — the physical layout, layers if it has them (Nine Hells, Arborea, etc.)
- **Inhabitants** — dominant creatures and societies
- **Access & Connections** — how to get in and out
- **Survival & Hazards** — environmental dangers (fire damage on the Plane of Fire, etc.)
- **Deities of This Plane** — powered automatically from linked Deity notes

---

### Regions

**What it is:** A large geographic area within a world — a continent, kingdom, wilderness, or sea.

**Create it:** Buttons → Locations → **New Region**.

**Where it's stored:** `Campaign/Regions/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Region Type** | `Kingdom`, `Empire`, `Wilderness`, `Archipelago`, `Desert`, `Forest`, `Ocean`. |
| **Terrain** | The dominant landscape — `Mountains`, `Plains`, `Dense Forest`, `Tundra`. |
| **Government** | How it's ruled — `Monarchy`, `Republic`, `Theocracy`, `Anarchy`. |
| **Ruler** | Link to an NPC note for the current ruler. |
| **Capital** | Link to the Settlement note of the capital city. |
| **Threat Level** | `Safe`, `Moderate`, `Dangerous`, `Deadly`. Affects travel tone. |

#### Sections in the Note

- **Travel** — travel times, road conditions, common hazards
- **Local Inhabitants / Random Encounter** — a random encounter table for wilderness travel through this region
- **Settlements** — auto-populated list of settlements linked to this region

---

### Settlements

**What it is:** Any inhabited place — a city, town, village, hamlet, or outpost.

**Create it:** Homepage → Quick Create → **New Settlement**, or Buttons → Locations → **New Settlement**.

**Where it's stored:** `Campaign/Settlements/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Settlement Type** | `Metropolis`, `City`, `Town`, `Village`, `Hamlet`, `Outpost`, `Fort`. |
| **Location** | Link to the Region this settlement is in. This is what places it on the Homepage world overview. |
| **Defence** | `Walled`, `Fortified`, `Palisade`, `Undefended`. |
| **Rulers** | Link to NPC notes for the governing figures. |
| **Population** | Approximate population number. |
| **Wealth Level** | `Destitute`, `Poor`, `Modest`, `Comfortable`, `Wealthy`, `Affluent`. |
| **Imports** | What goods come into this settlement. |
| **Exports** | What this settlement produces or sells. |

#### Sections in the Note

- **Description** — what the settlement looks, smells, and feels like on arrival
- **Society & Culture** — who lives here, what they believe, how they treat strangers
- **Government & Law** — who's in charge, how laws are enforced, common crimes
- **Districts** — auto-populated from District notes linked here
- **Points of Interest** — auto-populated from POI notes linked here
- **Shops & Services** — auto-populated from Shop notes linked here
- **Notable NPCs** — auto-populated from NPC notes whose Current Location is this settlement

---

### Districts

**What it is:** A neighbourhood or quarter within a larger settlement — the Docks, the Merchant Quarter, the Slums, the Noble Ward.

**Create it:** Buttons → Locations → **New District**.

**Where it's stored:** `Campaign/Districts/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **District Type** | `Residential`, `Commercial`, `Industrial`, `Noble`, `Slum`, `Docks`, `Temple Quarter`, `Military`. |
| **Parent Settlement** | Link to the Settlement note this district is part of. |
| **Rulers** | Link to NPC notes for whoever controls this district. |
| **Leaders** | Link to NPCs who lead institutions here. |
| **Organizations** | Link to any factions or guilds operating in this district. |
| **Population** | Rough population count. |
| **Wealth Level** | Relative wealth — `Destitute` through `Affluent`. |
| **Threat Level** | Safety at night — `Safe`, `Moderate`, `Dangerous`, `Deadly`. |
| **Condition** | Current state — `Active`, `Abandoned`, `Ruined`, `Under Siege`. |
| **Known For** | A one-line summary — "the best smiths in the city", "gambling dens", "half the city's thieves". |

#### Sections in the Note

- **Description** — visual description and atmosphere
- **Society & Culture** — who lives here, social dynamics
- **Government & Law** — district-level governance and enforcement
- **Points of Interest** — specific locations within the district
- **Shops & Services** — businesses here
- **Notable NPCs** — key people in this district

---

### Areas

**What it is:** A specific geographic feature or dungeon that the party can explore — a dungeon complex, forest, ruins, cavern system, tower, ship, or landmark.

**Create it:** Buttons → Locations → **New Area**.

**Where it's stored:** `Campaign/Areas/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Terrain** | `Dungeon`, `Forest`, `Cave`, `Ruins`, `Underwater`, `Mountain`, `Swamp`. |
| **Climate** | Environmental conditions — `Frozen`, `Tropical`, `Arid`, `Temperate`. |
| **Threat Level** | `Safe`, `Moderate`, `Dangerous`, `Deadly`. |
| **Organizations** | Any factions that control or use this area. |
| **Current Location** | Link to the Region or Settlement this area is near or within. |

#### Sections in the Note

- **Geography** — layout, size, notable features
- **Flora & Fauna** — what plants and creatures live here
- **Geographical Features** — rivers, cliffs, ruins, magical phenomena
- **Travel** — how long to cross, hazards
- **Local Inhabitants / Random Encounter** — an encounter table specific to this area
- **Current Events** — what's happening here right now (enemies moving in, a monster lair, a ritual underway)
- **Points of Interest** — specific rooms, clearings, chambers within the area
- **History** — what this place used to be
- **Secrets / Rumours & Legends** — things the players might discover

---

### Points of Interest

**What it is:** A specific named location the party can visit — a tavern, temple, library, nobleman's manor, dungeon entrance, wizard's tower.

**Create it:** Buttons → Locations → **New Point of Interest**.

**Where it's stored:** `Campaign/POIs/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **POI Type** | `Tavern`, `Temple`, `Library`, `Manor`, `Dungeon`, `Shop`, `Guild Hall`, `Barracks`. |
| **Location** | Link to the Settlement, District, or Area this POI is in. |
| **Status** | `Unexplored`, `Explored`, `Active`, `Abandoned`, `Destroyed`. Update as the party visits. |
| **Threat Level** | Safety level inside — `Safe`, `Moderate`, `Dangerous`, `Deadly`. |
| **Dominion** | Who controls this location. Link to NPC or Organization notes. |
| **Owners** | Link to NPC notes of the owner(s). |
| **Organizations** | Link to any groups operating here. |
| **Associated Quest** | Link to a Quest note if this location is tied to a specific quest. |
| **Associated Adventure** | Link to an Adventure note if relevant. |

#### Sections in the Note

- **Scene Introduction** — a boxed quote you can read aloud when the party arrives
- **Layout & Structure** — rooms, floors, key areas described
- **Inhabitants** — who's here and what they're doing
- **Key Encounters** — notable events that happen here
- **Traps & Hazards** — specific dangers
- **Treasure & Loot** — what can be found
- **Current Events** — what's happening here right now
- **Session Visits** — auto-populated list of sessions where this POI was visited

---

### Shops

**What it is:** A business the party can buy from — a blacksmith, alchemist, general store, magic item dealer. A specialized variant of a POI with inventory tracking.

**Create it:** Buttons → Locations → **New Shop**.

**Where it's stored:** `Campaign/POIs/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Shop Type** | `Blacksmith`, `Alchemist`, `General Store`, `Magic Shop`, `Tavern`, `Apothecary`. |
| **Location** | Link to the Settlement or District. |
| **Owners** | Link to NPC notes. The shopkeeper(s). |
| **Assistants** | Link to other NPCs who work here. |
| **Trade Partners** | Other settlements or organizations they source goods from. |
| **Price Modifier** | How prices compare to standard — `1x (Standard)`, `0.75x (Cheap)`, `1.5x (Expensive)`, `2x (Luxury)`. |

#### Sections in the Note

- **Scene Introduction** — read-aloud description
- **Goods** — itemized list of what's for sale. Link to Item notes.
- **Services** — what the shop provides beyond selling — crafting, repair, appraisal
- **Trade Deals** — active contracts or special orders
- **Current Events** — if something interesting is happening at this shop

---

## Parties & Story

### The Party Dashboard

**What it is:** The hub for a single adventuring party. Every adventure, quest, session, encounter, and player character links to it.

**Create it:** Homepage → Quick Create → **New Party**, or Buttons → **New Party**.

**Where it's stored:** `Campaign/Parties/Party Dashboards/`

> [!info] Created Automatically
> Creating a new party also creates the Party Dashboard, and sets up a Players folder at `Campaign/Characters/Players/{Party Name}/` for that party's characters.

#### The Party Dashboard Sections

| Section | What it shows |
|---------|--------------|
| **Current Party** | All player characters linked to this party — card and table view |
| **Party Treasury** | Inline-editable fields for PP, GP, EP, SP, CP |
| **Relations** | NPCs grouped by relationship type (Ally, Enemy, Friend, Family) — pulls from NPC's **Party Relation** field |
| **Active Quests** | All quests where `completed` is false and `whichParty` links to this party |
| **Active Services** | Outstanding service requests linked to this party |
| **Story** | Adventures linked to this party |
| **Session Log** | The last 5 sessions, most recent first |

---

### Adventures

**What it is:** A major story arc — a full campaign chapter, a published module, or a self-contained storyline. Adventures contain multiple quests.

**Create it:** Buttons → Story → **New Adventure**.

**Where it's stored:** `Campaign/Parties/Adventures/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Which Party** | Link to the Party Dashboard. Makes this adventure appear in the Party Dashboard's Story section. |
| **Tone** | `Dark`, `Heroic`, `Mystery`, `Political`, `Horror`, `Comedy`. |
| **Starting Level** | The character level when this adventure begins. |
| **Ending Level** | The expected level at the end. |
| **Antagonist** | Link to an NPC or Organization note — the main villain or opposing force. |
| **Completed** | Toggle this on when the adventure concludes. Moves it to the completed section. |

#### Sections in the Note

- **Premise** — the hook that draws the party in; what's at stake
- **Acts** — outline the adventure's structure. List quests as chapters.
- **Themes** — the underlying ideas you want to explore
- **Session Log** — auto-populated with every session that links to this adventure

---

### Quests

**What it is:** A specific mission the party undertakes. Quests live inside adventures.

**Create it:** Homepage → Quick Create → **New Quest**, or Buttons → Story → **New Quest**.

**Where it's stored:** `Campaign/Parties/Quests/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Which Party** | Link to the Party Dashboard. Makes this quest appear in the Active Quests panel. |
| **Linked Adventure** | Link to the parent Adventure note. |
| **Quest Type** | `Main`, `Side`, `Bounty`, `Personal`, `Exploration`. |
| **Quest Giver** | Link to the NPC who gave the quest. |
| **Completed** | **Toggle this on when the quest is done.** This removes it from the Active Quests list on the Homepage and Party Dashboard. |

#### Sections in the Note

- **Objectives** — checkboxes for each goal. Tick them off as the party completes them.
- **Clues & Information** — discoveries the party makes. Add rows as they investigate.
- **NPCs Involved** — auto-populated from NPC notes linked in the quest body
- **Session Appearances** — auto-populated from Session Notes that reference this quest

> [!tip] Keeping Quests Active
> A quest appears in the Active Quests panel as long as `completed` is false and `whichParty` matches the active party. Toggle `completed` when the quest resolves.

---

### Session Notes

**What it is:** The note for a single game session — planning before, live notes during, and the record after.

**Create it:** Homepage → Quick Create → **New Session Notes**, or Buttons → Story → **New Session Notes**.

**Where it's stored:** `Campaign/Parties/Session Notes/`

#### Naming Convention

Use a consistent format: `Session 01 — The Road to Millhaven`. The session number is used for sorting in the Session Log.

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Which Party** | Link to the Party Dashboard. Makes this session appear in the Session Log. |
| **Session Number** | A number (01, 02, 03...) used for chronological sorting. |
| **Session Date** | The real-world date the session was played. |
| **Linked Adventure** | Link to the Adventure this session is part of. |
| **XP Gained** | XP awarded this session. |
| **Gold Gained** | Gold (or other currency) awarded. |
| **Recap Player** | Link to the Player Character whose player delivers the recap next session. Rotate this. |

#### Sections in the Note

- **Session Planning** — your prep before the session: beats you want to hit, encounters planned, NPCs ready
- **Previous Session Recap** — a short "previously on..." paragraph written from the party's perspective
- **Live Notes** — a free-form area for notes during play. Link NPC names, locations, and items as you go.
- **Session Record** — clean the live notes into a permanent readable record after the session
- **Rewards** — XP, gold, items found. Link to Item notes for magic items.
- **Next Session Reminders** — loose threads, player intentions, plot moments to carry forward
- **NPCs Involved** — auto-populated from NPC links in the note body
- **Encounters** — auto-populated from Encounter notes linked to this session

---

### Encounters

**What it is:** A specific combat or dramatic scene — a fight, a chase, a heist, a social confrontation with stakes.

**Create it:** Buttons → Story → **New Encounter**.

**Where it's stored:** `Campaign/Parties/Encounters/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Encounter Type** | `Combat`, `Social`, `Exploration`, `Chase`, `Trap`, `Puzzle`. |
| **Difficulty** | `Trivial`, `Easy`, `Medium`, `Hard`, `Deadly`. |
| **Current Location** | Link to the POI, Area, or Settlement where this takes place. |
| **XP Reward** | Total XP for the encounter. |
| **Completed** | Toggle when the encounter is resolved. |
| **Battle Map** | Attach or link to an Excalidraw map for this encounter. |

#### Sections in the Note

- **Scene** — read-aloud introduction to the encounter
- **Terrain & Environment** — features that matter in combat: difficult terrain, cover, hazards
- **Combatants** — stat blocks or links to NPC notes for each enemy
- **Tactics** — how enemies behave, their goals, when they flee or surrender
- **Rewards** — loot, XP, story consequences

---

### Service Requests

**What it is:** A job the party has taken on with a deadline — a courier contract, an escort, a crafting commission, a bounty.

**Create it:** Buttons → Story → **New Service Request**.

**Where it's stored:** `Campaign/Parties/Service Requests/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Provider** | Link to the NPC or Organization offering the job. |
| **Customer** | Link to the NPC or Organization the party is doing the job for (if different). |
| **Service Type** | `Escort`, `Courier`, `Crafting`, `Bounty`, `Guard Duty`, `Investigation`. |
| **Service Cost** | The gold amount — either the fee the party pays or receives. |
| **Has Paid** | Toggle on when payment changes hands. |
| **Completed** | Toggle when the job is done. Removes it from the Active Services list. |
| **Downtime Days** | How many downtime days this activity takes (for crafting, research, etc.). |
| **Materials Required** | Link to Item notes for any materials needed. |
| **Related Quest** | Link to a Quest note if this service is quest-related. |
| **Due Date** | Set the calendar date this must be completed by. |

#### Sections in the Note

- **What is Being Requested** — clear description of the job
- **Materials Required** — components needed
- **Terms & Conditions** — agreed upon rules, deadlines, consequences of failure
- **Completion Notes** — what actually happened when the job was done

---

### Events

**What it is:** A historical or in-world event — a battle, a coronation, a disaster, a festival, a prophecy fulfilled.

**Create it:** Buttons → Lore → **New Event**.

**Where it's stored:** `Campaign/Lore/Events/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Event Type** | `Battle`, `Political`, `Natural Disaster`, `Religious`, `Cultural`, `Magical`. |
| **Significance** | `Minor`, `Notable`, `Major`, `Legendary`. |
| **Status** | `Historical` (happened in the past), `Ongoing`, `Upcoming`. |
| **Location** | Link to a Settlement or Region where it occurred. |
| **World / Region** | Link to World/Region notes for context. |
| **Factions Involved** | Link to Organization notes. |
| **Key Figures** | Link to NPC and PC notes who played a role. |
| **Party Involved** | Toggle on if the players' party participated. |
| **Associated Quest / Adventure** | Link to related notes. |
| **Outcome** | Brief summary of what happened. |
| **Calendar Fields** | `fc-calendar`, `fc-date`, `fc-end` — connect this event to your Calendarium in-world calendar. |

#### Sections in the Note

- **Full Account** — the detailed record of what happened
- **Key Figures** — the people who drove or were shaped by the event
- **Factions Involved** — groups with a stake in the outcome
- **Short-Term Effects** — immediate consequences
- **Long-Term Effects** — how this shaped the world going forward

---

## Lore Reference

Lore notes are primarily reference material — either imported from 5e.tools or written for your homebrew world. Link to them from character sheets, session notes, and other notes to build your world's web of information.

---

### Classes

**What it is:** A D&D character class — Fighter, Wizard, Cleric, etc.

**Create it:** Buttons → Lore → **New Class** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Lore/Classes/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Hit Die** | `d6`, `d8`, `d10`, `d12`. |
| **Primary Ability** | The main ability score(s) — e.g. `Strength` or `Intelligence`. |
| **Saving Throws** | The two saving throw proficiencies. |
| **Is Spellcaster** | Toggle if this class casts spells. |
| **Spellcasting Ability** | `Intelligence`, `Wisdom`, or `Charisma`. |
| **Armor Proficiencies** | What armor the class can wear. |
| **Weapon Proficiencies** | What weapons they're trained with. |
| **Tool Proficiencies** | Any tool proficiencies. |
| **Skill Choices** | Which skills they can choose from at character creation. |
| **Skill Count** | How many skills they pick (usually 2). |
| **Subclass Level** | The level when the player chooses a subclass (usually 3). |
| **Subclass Name** | What the subclass is called in this class — "Arcane Tradition", "Martial Archetype", "Primal Path". |
| **Source** | Which book this is from — `PHB`, `XGE`, `TCE`. |

#### Sections

- **Overview** — how the class plays, its role in a party
- **Proficiencies** — detailed proficiency table
- **Class Table** — level progression: proficiency bonus, features, spell slots
- **Subclasses** — auto-populated from linked Subclass notes
- **Party Members of This Class** — auto-populated from Character notes

---

### Subclasses

**What it is:** A class specialization — Battle Master (Fighter), School of Evocation (Wizard), Circle of the Moon (Druid).

**Create it:** Buttons → Lore → **New Subclass** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Lore/Classes/Subclasses/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Parent Class** | Link to the Class note this subclass belongs to. |
| **Subclass Type** | The name the parent class uses — `Arcane Tradition`, `Martial Archetype`, etc. |
| **Subclass Level** | The level it's chosen. |
| **Additional Spellcasting** | Toggle on if this subclass grants extra spells. |
| **Source** | Source book. |

---

### Races & Species

**What it is:** A playable or world-native species — Elf, Dwarf, Tiefling, or homebrew.

**Create it:** Buttons → Lore → **New Race** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Lore/Races/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Parent Race** | Link to the base Race if this is a subrace — e.g. High Elf's parent is Elf. |
| **Race Type** | `Humanoid`, `Fey`, `Construct`, `Undead`, `Dragon`, `Celestial`. |
| **Size** | `Small`, `Medium`, `Large`. |
| **Speed** | Base walking speed in feet (usually 30). |
| **Speed (Fly / Swim / Climb)** | Additional movement modes. |
| **Darkvision** | Range in feet (0 if none). |
| **ASI (STR/DEX/CON/INT/WIS/CHA)** | Ability score increases. +2 to primary, +1 to secondary for standard races. |
| **Free ASI** | Any additional flexible ASI points. |
| **Languages** | Link to Language notes. |
| **Proficiencies** | Any weapon, armor, or tool proficiencies granted by the race. |
| **Resistances** | Damage types they resist — `Fire`, `Psychic`, etc. |
| **Immunities** | Damage types they're immune to. |
| **Lifespan** | Typical age range. |
| **Avg Height / Weight** | Physical size data. |
| **Has Subraces** | Toggle on if this race has subraces. |

---

### Backgrounds

**What it is:** A character background — Soldier, Acolyte, Criminal, Sage. Defines what a character did before adventuring.

**Create it:** Buttons → Lore → **New Background** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Lore/Backgrounds/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Skill Proficiencies** | The two skills this background grants. |
| **Tool Proficiencies** | Any tool proficiency included. |
| **Language Proficiencies** | Number of additional languages granted. |
| **Starting Equipment** | The gear package. |
| **Feats** | Any feat granted (newer 2024 backgrounds). |
| **Ability Score Increase** | Any ASI (newer 2024 backgrounds). |
| **Is Homebrew** | Toggle on for homebrew backgrounds. |

---

### Feats

**What it is:** A special ability a character can take instead of (or in addition to) an Ability Score Improvement.

**Create it:** Buttons → Lore → **New Feat** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Lore/Feats/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Category** | `General`, `Origin`, `Fighting Style`, `Epic Boon`. |
| **Prerequisite** | Any requirement — level, ability score, class, race. |
| **Ability Score Increase** | If the feat grants an ASI. |
| **Repeatable** | Toggle on if a character can take this feat multiple times. |
| **Source** | Source book. |

---

### Conditions

**What it is:** A game condition — Blinded, Charmed, Frightened, Poisoned, Unconscious.

**Create it:** Buttons → Lore → **New Condition** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Lore/Conditions/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Source** | Source book (usually `PHB`). |

#### Sections

- **Effects** — what the condition does mechanically
- **Notes** — any rulings or house rules you use at your table

> [!tip] Quick Reference
> Import all conditions from the 5e.tools importer so you have them all as searchable notes. Link to them from the GM Screen's Quick Rules Reference.

---

### Languages

**What it is:** A language spoken in your world — Common, Elvish, Dwarvish, or a homebrew tongue.

**Create it:** Buttons → Lore → **New Language** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Lore/Languages/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Language Type** | `Standard`, `Exotic`, `Secret`, `Dead`. |
| **Script** | The writing system — `Common Script`, `Elvish Script`, `Infernal`, `None`. |
| **Typical Speakers** | Link to Race notes that commonly speak this language. |
| **Rarity** | How common it is — `Common`, `Uncommon`, `Rare`, `Secret`. |
| **Is Playable** | Toggle on if player characters can learn this language. |
| **Related Languages** | Link to linguistically related Language notes. |
| **Dialects** | Any regional variants. |

---

### Optional Features

**What it is:** Class-specific optional abilities — Eldritch Invocations, Fighting Styles, Metamagic, Maneuvers, Infusions.

**Create it:** Buttons → Lore → **New Optional Feature** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Lore/Optional Features/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Feature Type** | `Eldritch Invocation`, `Fighting Style`, `Metamagic`, `Maneuver`, `Infusion`, etc. |
| **Parent Class** | Link to the Class note(s) that can take this feature. |
| **Prerequisite** | Any requirement — level, spell, class feature. |

---

## Possessions

### Items

**What it is:** Any physical object — a weapon, piece of armor, tool, adventuring gear, or magic item.

**Create it:** Buttons → Possessions → **New Item** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Possessions/Items/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Item Type** | `Weapon`, `Armor`, `Wondrous Item`, `Ring`, `Wand`, `Rod`, `Staff`, `Consumable`, `Adventuring Gear`. |
| **Rarity** | `Common`, `Uncommon`, `Rare`, `Very Rare`, `Legendary`, `Artifact`. |
| **Is Magical** | Toggle on for magic items. |
| **Attunement** | `None`, `Required`, `Required (Spellcaster)`, `Required (Specific Class)`. |
| **Attuned** | Link to the Character note currently attuned to this item. |
| **Weight** | In pounds. |
| **Cost / Cost Unit** | Price and currency — `500 gp`, `25 sp`. |
| **Damage / Damage Type** | For weapons — `2d6`, `Slashing`. |
| **Weapon Type** | `Melee`, `Ranged`, `Thrown`. |
| **Weapon Properties** | `Finesse`, `Light`, `Heavy`, `Versatile`, `Two-Handed`, `Thrown`, `Reach`. |
| **Armor Type** | `Light`, `Medium`, `Heavy`, `Shield`. |
| **Armor Class** | The AC this armor provides. |
| **Armor Class Bonus** | Any AC bonus beyond the base (for magic armor). |
| **Min Strength** | Minimum STR to use without penalty (heavy armor). |
| **Stealth Disadvantage** | Toggle on if wearing this gives disadvantage on Stealth. |
| **Charges / Charges Max** | For magic items with charges. |
| **Recharge** | When charges refresh — `Dawn`, `Dusk`, `1d6+1 at dawn`, etc. |
| **Owner** | Link to the Character note who currently has this item. |
| **Found At** | Link to the POI or Settlement where it was found. |
| **Vendor** | Link to the Shop where it was purchased. |

#### Sections

- **Properties** — weapon/armor/charge stats in structured tables
- **Magical Properties & Abilities** — what the item does
- **Lore & History** — the story behind the item, previous owners

---

### Spells

**What it is:** A single spell — Fireball, Cure Wounds, Detect Magic.

**Create it:** Buttons → Possessions → **New Spell** (or import via 5e.tools importer).

**Where it's stored:** `Campaign/Possessions/Spells/`

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Spell Level** | 0 (cantrip) through 9. |
| **School** | `Abjuration`, `Conjuration`, `Divination`, `Enchantment`, `Evocation`, `Illusion`, `Necromancy`, `Transmutation`. |
| **Casting Time** | `1 action`, `1 bonus action`, `1 reaction`, `1 minute`, etc. |
| **Range** | `Self`, `Touch`, `30 feet`, `60 feet`, etc. |
| **Components (V/S/M)** | Toggle each component on or off. |
| **Material Description** | What the material component is. |
| **Material Cost** | Gold value if it's expensive. |
| **Material Consumed** | Toggle on if casting consumes the component. |
| **Duration** | `Instantaneous`, `1 round`, `1 minute`, `Concentration, up to 1 hour`, etc. |
| **Concentration** | Toggle on for concentration spells. |
| **Ritual** | Toggle on if it can be cast as a ritual. |
| **Damage Type** | If it deals damage — `Fire`, `Radiant`, `Necrotic`, etc. |
| **Damage Dice** | e.g. `8d6`. |
| **Save Type** | `DEX`, `CON`, `WIS` — if it requires a saving throw. |
| **Attack Type** | `Melee Spell Attack`, `Ranged Spell Attack`. |
| **Classes** | Link to Class notes that have this spell. |
| **Subclasses** | Link to Subclasses that get this spell as an expanded spell. |
| **Known By** | Link to Character notes who know or have prepared this spell. |

#### Sections

- **Components** — a formatted table of components
- **Description** — how the spell works
- **At Higher Levels** — the upcast scaling
- **Available To** — auto-populated from class and subclass links

---

## Running a Session

### The GM Screen

**What it is:** Your live session tool. Open it at the start of every session in the right panel alongside your Session Notes.

**Open it:** Click the file at `1.Tools/GM Screen`, or from the Homepage.

#### Key Fields

| Field | What to put here |
|-------|-----------------|
| **Campaign Name** | Your campaign name. Auto-synced from the Homepage. |
| **Active Party** | Link to the Party Dashboard. |
| **Current Session** | Link to the active Session Notes note. Update this each session. |

#### GM Screen Sections

**Party Tracker** — Shows all player characters in the active party with their current HP, AC, and condition. Updates live from your character notes.

**Initiative Tracker** — Enter combatants and their initiative rolls at the start of each combat. Click the inline fields to type in values. Track HP live as damage is dealt.

**Session Notes** — Quick buttons to create a New Session, New Encounter, or New NPC without leaving the GM Screen. The **Current Session** link keeps you one click away from your Session Notes note.

**Live Notes** — A free-form scratchpad for mid-session notes. Write names, clues, player decisions, anything. At the end of the session, copy the important parts into your Session Notes.

**Quick Rules Reference** — Conditions, action economy, key DCs, and common rules. All in one place without leaving Obsidian. Link the Condition notes here to make them clickable.

**Encounter Tools:**
- **XP Thresholds** — the Easy/Medium/Hard/Deadly XP values for your party's level
- **Quick Rolls** — pre-rolled or inline dice for common checks
- **Encounter Seeds** — quick scenario prompts to spark improvised scenes

> [!tip] Two-Panel Setup
> Open the GM Screen in the right panel and your Session Notes in the center panel. Use the GM Screen for live tracking, and dump everything important into Session Notes for the permanent record after the session.

---

## Importing 5e Content

The vault includes a one-click importer that downloads content from 5e.tools and creates individual notes for spells, items, classes, races, feats, backgrounds, languages, deities, conditions, and optional features.

> [!warning] License Disclaimer
> You are responsible for ensuring you have a valid license or legal right to the content you import. **SRD 5.1** content is freely available under the Creative Commons license. All other sourcebooks require a valid purchase from the publisher.

### Running the Importer

1. Open [[1.Tools/Buttons|Buttons]]
2. Scroll to the **Vault** section
3. Click **Import 5e.tools Data**
4. Follow the prompts:

**Step 1 — Choose your source:**
- **WotC Official** — imports from all official Wizards of the Coast books you own
- **Specific Books** — opens a multi-select list so you can choose exactly which books to import from
- **All Sources** — includes third-party and community content

**Step 2 — Select books** *(Specific Books mode only):*
- A scrollable list appears with all available source codes
- Use **Select All** or **Clear All** for bulk selection
- Toggle individual books on/off
- Select **Done** when finished

**Step 3 — Choose content types:**
Select any combination of: Spells, Items, Classes, Races, Feats, Backgrounds, Languages, Deities, Conditions, Optional Features

**Step 4 — Confirm and wait:**
- A summary shows what will be imported
- Confirm to begin — a notification appears when complete
- Large imports (all spells, all items) may take a few minutes

> [!tip] Safe to Re-run
> The importer never overwrites notes you've already edited. Run it again any time to add new content types or books without affecting existing notes.

> [!info] Python Required
> The importer requires Python 3. If it isn't installed, the button will detect this and offer to install it automatically.

### Where Imported Content Lives

| Content Type | Folder |
|---|---|
| Spells | `Campaign/Possessions/Spells/` |
| Items | `Campaign/Possessions/Items/` |
| Classes | `Campaign/Lore/Classes/` |
| Subclasses | `Campaign/Lore/Classes/Subclasses/` |
| Races | `Campaign/Lore/Races/` |
| Feats | `Campaign/Lore/Feats/` |
| Backgrounds | `Campaign/Lore/Backgrounds/` |
| Languages | `Campaign/Lore/Languages/` |
| Deities | `Campaign/Characters/Deities/` |
| Conditions | `Campaign/Lore/Conditions/` |
| Optional Features | `Campaign/Lore/Optional Features/` |

Once imported, link to these notes from character sheets, session notes, and quest notes — they'll appear as colored, icon-tagged links automatically.

---

> [!abstract] Need Help?
> For plugin-specific questions, check **Settings → Community Plugins** and click the plugin name for its documentation. The [Obsidian community forum](https://forum.obsidian.md) is also an excellent resource.
