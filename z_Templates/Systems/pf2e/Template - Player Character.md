---
tags:
  - Character
  - Player
art: "[[PlaceholderCharacter.png]]"
sketch:
playedBy:
aliases:
ancestry:
heritage:
class:
subclass:
background:
keyAbility:
gender:
pronouns:
sexuality:
age:
birthday:
languages: []
organizations: []
religions: []
condition:
  - Healthy
currentLocation: []
whichParty: []
level: 1
experience: 0
heroPoints: 1
str: 10
dex: 10
con: 10
int: 10
wis: 10
cha: 10
hp_ancestry: 8
hp_max: 0
hp_current: 0
hp_temp: 0
ac: 10
classdc: 10
speed: 25
# Proficiency ranks: untrained / trained / expert / master / legendary
perception_rank: trained
fort_rank: trained
ref_rank: trained
will_rank: expert
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> ###### **Played By:** <font color="#ffc000">`VIEW[{playedBy}][text]`</font>
>
> # Bio
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Ancestry** | `VIEW[{ancestry}][link]` |
> | **Heritage** | `VIEW[{heritage}][link]` |
> | **Class** | `VIEW[{class}][link]` |
> | **Subclass** | `VIEW[{subclass}][link]` |
> | **Background** | `VIEW[{background}][link]` |
> | **Key Ability** | `VIEW[{keyAbility}][text]` |
> | **Gender** | `VIEW[{gender}][text]` |
> | **Pronouns** | `VIEW[{pronouns}][text]` |
> | **Sexuality** | `VIEW[{sexuality}][text]` |
> | **Age** | `VIEW[{age}][text]` |
>
> # Details
> | | |
> |---|---|
> | **Languages** | `VIEW[{languages}][link]` |
> | **Organizations** | `VIEW[{organizations}][link]` |
> | **Religions** | `VIEW[{religions}][link]` |
> | **Condition** | `VIEW[{condition}]` |
> | **Location** | `VIEW[{currentLocation}][link]` |
>
> # Combat
> | | |
> |---|---|
> | **Level** | `VIEW[{level}]` |
> | **Hero Points** | `VIEW[{heroPoints}]` / 3 |
> | **HP** | `VIEW[{hp_current}]` / `VIEW[{hp_max}]` (Temp: `VIEW[{hp_temp}]`) |
> | **AC** | `VIEW[{ac}]` |
> | **Class DC** | `VIEW[{classdc}]` |
> | **Speed** | `VIEW[{speed}]` ft |
> | **Perception** | `VIEW[{perception_rank}][text]` |
>
> # Saves
> | Fort | Ref | Will |
> |:---:|:---:|:---:|
> | `VIEW[{fort_rank}][text]` | `VIEW[{ref_rank}][text]` | `VIEW[{will_rank}][text]` |

# `=this.file.name`

## Database

![[z_Databases/Characters/Database - Character Note.base]]

## Sketch

`VIEW[!{sketch}][text(renderMarkdown)]`

## Ability Scores

| STR | DEX | CON | INT | WIS | CHA |
|:---:|:---:|:---:|:---:|:---:|:---:|
| `INPUT[number:str]` | `INPUT[number:dex]` | `INPUT[number:con]` | `INPUT[number:int]` | `INPUT[number:wis]` | `INPUT[number:cha]` |

> *<font color="#646a73">Record final boosted values. Each boost adds +2 (or +1 if already 18+). At creation: 4 free ancestry boosts + background boosts + class key ability boost + 4 free initial boosts.</font>*

## Proficiencies & Skills

| Skill | Proficiency Rank |
| ----- | :--------------: |
| Acrobatics (DEX) | Untrained |
| Arcana (INT) | Untrained |
| Athletics (STR) | Untrained |
| Crafting (INT) | Untrained |
| Deception (CHA) | Untrained |
| Diplomacy (CHA) | Untrained |
| Intimidation (CHA) | Untrained |
| Medicine (WIS) | Untrained |
| Nature (WIS) | Untrained |
| Occultism (INT) | Untrained |
| Performance (CHA) | Untrained |
| Religion (WIS) | Untrained |
| Society (INT) | Untrained |
| Stealth (DEX) | Untrained |
| Survival (WIS) | Untrained |
| Thievery (DEX) | Untrained |
| Lore — *(specify)* | Untrained |

> *<font color="#646a73">Proficiency ranks: Untrained (+0), Trained (Level + 2), Expert (Level + 4), Master (Level + 6), Legendary (Level + 8).</font>*

## Actions & Activities

> *<font color="#646a73">Each turn you have **3 Actions** (🔵🔵🔵) and **1 Reaction** (🔁). List your key actions, spells, and special activities below.</font>*

| Name | Cost | Traits | Effect |
| ---- | :--: | ------ | ------ |
| Strike | 🔵 | Attack | Make a melee or ranged attack |
| Step | 🔵 | Move | Move 5 ft without triggering reactions |
| Stride | 🔵 | Move | Move up to Speed |
| | | | |

## Feats

### Ancestry Feats
> *<font color="#646a73">Gained at levels 1, 5, 9, 13, 17.</font>*

### Class Feats
> *<font color="#646a73">Gained every even level (2, 4, 6…). List feat name and level gained.</font>*

### Skill Feats
> *<font color="#646a73">Gained every even level. List feat and the skill it requires.</font>*

### General Feats
> *<font color="#646a73">Gained at levels 3, 7, 11, 15, 19.</font>*

### Bonus Feats
> *<font color="#646a73">Any extra feats from background, archetypes, or class features.</font>*

## Spellcasting

> *<font color="#646a73">Fill if this character casts spells. Note tradition (arcane/divine/occult/primal), spell slots per level, and cantrips.</font>*

| Rank | Slots | Spells Prepared / Known |
| :--: | :---: | ----------------------- |
| Cantrips | ∞ | |
| 1 | | |
| 2 | | |
| 3 | | |

## Equipment & Bulk

> *<font color="#646a73">Bulk limit = STR mod + 5. Encumbered at limit – 5. Each item's Bulk listed in parentheses.</font>*

| Name | Bulk | Notes |
| ---- | :--: | ----- |
| | | |

## Personality Traits

> *<font color="#646a73">Insert Personality Traits that shape this character.</font>*

## Ideals

> *<font color="#646a73">Insert Ideals that affect this character.</font>*

## Flaws

> *<font color="#646a73">Insert Flaws that affect this character.</font>*

## Bonds

> *<font color="#646a73">Insert Bonds that affect this character.</font>*

## Secrets

- [ ] *<font color="#646a73">Secret 1</font>*

## Goals

> [!column | 2 no-t]
> > [!metadata|shortterm] Short Term
> > - *<font color="#646a73">What does this character want to accomplish in the near future?</font>*
>
> > [!metadata|longterm] Long Term
> > - *<font color="#646a73">What is this character's ultimate ambition?</font>*

## Past

### Birth

- **Birthday:** `VIEW[{birthday}][text]`
- **Birth Location:**
- **Mother:** | **Father:**

### Childhood

> *<font color="#646a73">What was this character's childhood like?</font>*

### Journey

> *<font color="#646a73">What brought this character to where they are now?</font>*

### Worship

> *<font color="#646a73">Is there any deity or faith this character follows?</font>*

## Session History

```dataview
TABLE WITHOUT ID
  file.link as "Session",
  sessionNumber as "#",
  sessionDate as "Date",
  summary as "Summary"
FROM "Campaign/Parties/Session Notes"
WHERE econtains(tags,"SessionNote") AND contains(file.outlinks, this.file.link)
SORT sessionNumber DESC
```

## Notes
