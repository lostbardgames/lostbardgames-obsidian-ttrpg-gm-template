---
tags:
  - Character
  - Player
art: "[[PlaceholderCharacter.png]]"
sketch:
playedBy:
aliases:
species:
class:
subclass:
background:
alignment:
gender:
pronouns:
sexuality:
age:
birthday:
languages: []
occupation: []
organizations: []
religions: []
condition:
  - Healthy
currentLocation: []
whichParty: []
level: 1
experience: 0
experience_next: 300
proficiencyBonus: 2
passivePerception: 10
passiveInsight: 10
passiveInvestigation: 10
str: 10
dex: 10
con: 10
int: 10
wis: 10
cha: 10
hp_max: 0
hp_current: 0
hp_temp: 0
ac: 10
speed: 30
hitDie:
isSpellcaster: false
spellcastingAbility:
spell_save_dc: 0
spell_attack_bonus: 0
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
> | **Species** | `VIEW[{species}][link]` |
> | **Class** | `VIEW[{class}][link]` |
> | **Subclass** | `VIEW[{subclass}][link]` |
> | **Background** | `VIEW[{background}][link]` |
> | **Alignment** | `VIEW[{alignment}][text]` |
> | **Gender** | `VIEW[{gender}][text]` |
> | **Pronouns** | `VIEW[{pronouns}][text]` |
> | **Sexuality** | `VIEW[{sexuality}][text]` |
> | **Age** | `VIEW[{age}][text]` |
>
> # Details
> | | |
> |---|---|
> | **Languages** | `VIEW[{languages}][link]` |
> | **Occupations** | `VIEW[{occupation}][text]` |
> | **Organizations** | `VIEW[{organizations}][link]` |
> | **Religions** | `VIEW[{religions}][link]` |
> | **Condition** | `VIEW[{condition}]` |
> | **Location** | `VIEW[{currentLocation}][link]` |
>
> # Combat
> | | |
> |---|---|
> | **Level** | `VIEW[{level}]` |
> | **XP** | `VIEW[{experience}]` / `VIEW[{experience_next}]` |
> | **HP** | `VIEW[{hp_current}]` / `VIEW[{hp_max}]` (Temp: `VIEW[{hp_temp}]`) |
> | **AC** | `VIEW[{ac}]` |
> | **Speed** | `VIEW[{speed}]` ft |
> | **Prof. Bonus** | +`VIEW[{proficiencyBonus}]` |
> | **Hit Die** | `VIEW[{hitDie}][text]` |

# `=this.file.name`

## Database

![[z_Databases/Characters/Database - Character Note.base]]

## Sketch

`VIEW[!{sketch}][text(renderMarkdown)]`

## Ability Scores

| STR | DEX | CON | INT | WIS | CHA |
|:---:|:---:|:---:|:---:|:---:|:---:|
| `INPUT[number:str]` | `INPUT[number:dex]` | `INPUT[number:con]` | `INPUT[number:int]` | `INPUT[number:wis]` | `INPUT[number:cha]` |

## Skills & Saving Throws

| Skill | Proficient | Expertise |
| ----- | :-------: | :-------: |
| Acrobatics (DEX) | | |
| Animal Handling (WIS) | | |
| Arcana (INT) | | |
| Athletics (STR) | | |
| Deception (CHA) | | |
| History (INT) | | |
| Insight (WIS) | | |
| Intimidation (CHA) | | |
| Investigation (INT) | | |
| Medicine (WIS) | | |
| Nature (INT) | | |
| Perception (WIS) | | |
| Performance (CHA) | | |
| Persuasion (CHA) | | |
| Religion (INT) | | |
| Sleight of Hand (DEX) | | |
| Stealth (DEX) | | |
| Survival (WIS) | | |

## Spellcasting

> *<font color="#646a73">Fill if this character can cast spells. Spell save DC: `VIEW[{spell_save_dc}]` | Spell attack bonus: +`VIEW[{spell_attack_bonus}]` | Ability: `VIEW[{spellcastingAbility}][text]`</font>*

## Features, Traits & Proficiencies

### Class Features & Traits

> *<font color="#646a73">List key class features, subclass features, racial traits, and background features by level.</font>*

### Feats

> *<font color="#646a73">List any feats this character has taken.</font>*

### Proficiencies

> *<font color="#646a73">Armour, weapons, tools, and any special skill proficiencies or expertise.</font>*

## Equipment & Inventory

| Name | Type | Notes |
| ---- | ---- | ----- |
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
> > - *<font color="#646a73">What does this character want to accomplish in the next month to six months?</font>*
>
> > [!metadata|longterm] Long Term
> > - *<font color="#646a73">What does this character want to accomplish in the next 5-10 years?</font>*

## Past

### Birth

- **Birthday:** `VIEW[{birthday}][text]`
- **Birth Location:**
- **Mother:** | **Father:**

### Childhood

> *<font color="#646a73">What was this character's childhood like? What events shaped who they are today?</font>*

### Journey

> *<font color="#646a73">What brought this character to where they are now? What set them on the path of adventure?</font>*

### Worship

> *<font color="#646a73">Is there any deity or group this character holds loyalty to or worships?</font>*

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

