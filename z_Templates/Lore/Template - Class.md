---
tags:
  - Class
art: "[[PlaceholderHeritage.png]]"
aliases:
hitDie:
primaryAbility: []
savingThrows: []
isSpellcaster:
spellcastingAbility:
armorProficiencies: []
weaponProficiencies: []
toolProficiencies: []
skillChoices: []
skillCount: 2
subclassLevel: 3
subclassName:
rarity:
source:
sourcePage:
summary: ""
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> # Details
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Hit Die** | `VIEW[{hitDie}][text]` |
> | **Primary Ability** | `VIEW[{primaryAbility}][text]` |
> | **Saving Throws** | `VIEW[{savingThrows}][text]` |
> | **Spellcasting** | `VIEW[{spellcastingAbility}][text]` (`VIEW[{isSpellcaster}][text]`) |
> | **Subclass At** | Level `VIEW[{subclassLevel}]` (`VIEW[{subclassName}][text]`) |
> | **Rarity** | `VIEW[{rarity}][text]` |
> | **Source** | `VIEW[{source}][text]` p.`VIEW[{sourcePage}]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize what makes this class unique. Mention its core fantasy, playstyle, and what type of adventurer it represents.</font>*

## Proficiencies

| Category | Proficiencies |
| -------- | ------------- |
| **Armour** | `VIEW[{armorProficiencies}][text]` |
| **Weapons** | `VIEW[{weaponProficiencies}][text]` |
| **Tools** | `VIEW[{toolProficiencies}][text]` |
| **Skills** | Choose `VIEW[{skillCount}]` from `VIEW[{skillChoices}][text]` |

## Class Table

| Level | Prof. Bonus | Features | *Class-specific columns populated on import* |
| ----- | :---------: | -------- | -------------------------------------------- |
| 1 | +2 | | |
| 2 | +2 | | |
| 3 | +2 | Subclass | |
| 4 | +2 | ASI | |
| 5 | +3 | | |
| 6 | +3 | | |
| 7 | +3 | | |
| 8 | +3 | ASI | |
| 9 | +4 | | |
| 10 | +4 | | |
| 11 | +4 | | |
| 12 | +4 | ASI | |
| 13 | +5 | | |
| 14 | +5 | | |
| 15 | +5 | | |
| 16 | +5 | ASI | |
| 17 | +6 | | |
| 18 | +6 | | |
| 19 | +6 | ASI | |
| 20 | +6 | | |

## Overview

### Physical Traits

> *<font color="#7f7f7f">What noticeable physical features or trappings define members of this class? Include typical equipment, marks of training, or magical changes.</font>*

### Core Abilities

> *<font color="#7f7f7f">Describe the core features all members of this class share regardless of subclass.</font>*

### Culture & Society

> *<font color="#7f7f7f">How are members of this class perceived in the world? Are they common, rare, or feared? What organizations or guilds are associated with them?</font>*

### Beliefs

> *<font color="#7f7f7f">What philosophies, codes, or spiritual traditions are commonly associated with this class?</font>*

### History

> *<font color="#7f7f7f">How did this class come to exist in the world? Note any significant historical figures or events tied to the class.</font>*

## Subclasses

```dataview
LIST
FROM "Campaign/Lore/Classes/Subclasses"
WHERE econtains(tags,"Subclass") AND parentclass = this.file.link
SORT file.name ASC
```

## Party Members of This Class

```dataview
TABLE WITHOUT ID
  file.link as "Character",
  subclass as "Subclass",
  species as "Species",
  level as "Level",
  playedBy as "Player"
FROM "Campaign/Characters/Players"
WHERE econtains(tags,"Player") AND class = this.file.link
SORT level DESC
```

## Notes

