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
archetype:
theme:
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
str: 10
dex: 10
con: 10
int: 10
wis: 10
cha: 10
sp_max: 0
sp_current: 0
hp_max: 0
hp_current: 0
rp_max: 0
rp_current: 0
eac: 10
kac: 10
cmd: 0
speed: 30
bab: 0
fort: 0
ref: 0
will: 0
keyAbility:
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
> | **Archetype** | `VIEW[{archetype}][link]` |
> | **Theme** | `VIEW[{theme}][link]` |
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
> | **Organizations** | `VIEW[{organizations}][link]` |
> | **Condition** | `VIEW[{condition}]` |
> | **Location** | `VIEW[{currentLocation}][link]` |
>
> # Combat
> | | |
> |---|---|
> | **Level** | `VIEW[{level}]` |
> | **XP** | `VIEW[{experience}]` |
> | **Stamina** | `VIEW[{sp_current}]` / `VIEW[{sp_max}]` |
> | **HP** | `VIEW[{hp_current}]` / `VIEW[{hp_max}]` |
> | **Resolve** | `VIEW[{rp_current}]` / `VIEW[{rp_max}]` |
> | **EAC** | `VIEW[{eac}]` |
> | **KAC** | `VIEW[{kac}]` |
> | **CMD** | `VIEW[{cmd}]` |
> | **Speed** | `VIEW[{speed}]` ft |
> | **BAB** | +`VIEW[{bab}]` |
>
> # Saves
> | Fort | Ref | Will |
> |:---:|:---:|:---:|
> | `VIEW[{fort}]` | `VIEW[{ref}]` | `VIEW[{will}]` |

# `=this.file.name`

## Database

![[z_Databases/Characters/Database - Character Note.base]]

## Sketch

`VIEW[!{sketch}][text(renderMarkdown)]`

## Ability Scores

| STR | DEX | CON | INT | WIS | CHA |
|:---:|:---:|:---:|:---:|:---:|:---:|
| `INPUT[number:str]` | `INPUT[number:dex]` | `INPUT[number:con]` | `INPUT[number:int]` | `INPUT[number:wis]` | `INPUT[number:cha]` |

> *<font color="#646a73">Key Ability for class: `VIEW[{keyAbility}][text]`. Stamina Points (SP) restore with 10 min rest using 1 Resolve Point. Hit Points (HP) restore with full rest. Resolve Points (RP) restore with full rest.</font>*

## Skills

> *<font color="#646a73">Total = Ranks + Ability mod + Class skill bonus (3 if class skill with 1+ rank) + misc. Class skills marked ✦. Max ranks = level.</font>*

| Skill | Ability | Trained? | Total |
| ----- | :-----: | :------: | :---: |
| Acrobatics | DEX | | |
| Athletics | STR | | |
| Bluff | CHA | | |
| Computers | INT | | |
| Culture | INT | | |
| Diplomacy | CHA | | |
| Disguise | CHA | | |
| Engineering | INT | | |
| Intimidate | CHA | | |
| Life Science | INT | | |
| Medicine | INT | | |
| Mysticism | WIS | | |
| Perception | WIS | | |
| Physical Science | INT | | |
| Pilot | DEX | | |
| Profession *(specify)* | — | | |
| Sense Motive | WIS | | |
| Sleight of Hand | DEX | | |
| Stealth | DEX | | |
| Survival | WIS | | |

## Spells & Magic

> *<font color="#646a73">Fill if applicable. Note spell slots, spells known, and spellcasting ability.</font>*

## Feats & Class Features

### Feats

| Feat | Level | Notes |
| ---- | :---: | ----- |
| | | |

### Class Features

> *<font color="#646a73">List class features and archetype modifications by level.</font>*

### Theme Knowledge

> *<font color="#646a73">Record the 1st-level theme knowledge benefit from your selected theme.</font>*

## Equipment & Credits

> *<font color="#646a73">Bulk limit = STR mod + 10. Credits: starting budget varies by class.</font>*

| Name | Level | Bulk | Credits | Notes |
| ---- | :---: | :--: | :-----: | ----- |
| | | | | |

## Personality Traits

> *<font color="#646a73">Insert Personality Traits that shape this character.</font>*

## Goals

> [!column | 2 no-t]
> > [!metadata|shortterm] Short Term
> > - *<font color="#646a73">Short-term goal.</font>*
>
> > [!metadata|longterm] Long Term
> > - *<font color="#646a73">Long-term ambition.</font>*

## Past

- **Birthday:** `VIEW[{birthday}][text]`
- **Home World / System:**

> *<font color="#646a73">Where did this character come from? What drew them to the Starfinder Society or a life of adventure?</font>*

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
