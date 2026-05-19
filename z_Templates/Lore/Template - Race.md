---
tags:
  - Race
  - Species
art: "[[PlaceholderRace.png]]"
aliases:
parentRace:
raceType:
size:
  - Medium
speed: 30
speedFly: 0
speedSwim: 0
speedClimb: 0
darkvision: 0
asi_str: 0
asi_dex: 0
asi_con: 0
asi_int: 0
asi_wis: 0
asi_cha: 0
asiFree: 0
languages: []
proficiencies: []
resistances: []
immunities: []
lifespan:
avgHeight:
avgWeight:
hasSubraces: false
rarity:
source:
sourcePage:
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> # Details
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Type** | `VIEW[{raceType}][text]` |
> | **Size** | `VIEW[{size}][text]` |
> | **Speed** | `VIEW[{speed}]` ft |
> | **Darkvision** | `VIEW[{darkvision}]` ft |
> | **Lifespan** | `VIEW[{lifespan}][text]` |
> | **Avg. Height** | `VIEW[{avgHeight}][text]` |
> | **Avg. Weight** | `VIEW[{avgWeight}][text]` |
> | **Rarity** | `VIEW[{rarity}][text]` |
> | **Source** | `VIEW[{source}][text]` p.`VIEW[{sourcePage}]` |
>
> # Ability Scores
> | STR | DEX | CON | INT | WIS | CHA | Free |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | +`VIEW[{asi_str}]` | +`VIEW[{asi_dex}]` | +`VIEW[{asi_con}]` | +`VIEW[{asi_int}]` | +`VIEW[{asi_wis}]` | +`VIEW[{asi_cha}]` | +`VIEW[{asiFree}]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize what makes this race or species unique. Mention its origin, key defining traits, and its typical role in the world.</font>*

## Database

![[z_Databases/Ancestries/Database - Ancestry Note.base]]

## Overview

### Physical Traits

> *<font color="#7f7f7f">What noticeable physical features define this race? Include adaptations, natural weapons, senses, and any distinctive biological traits.</font>*

### Innate Abilities

> *<font color="#7f7f7f">Describe any natural abilities or resistances this race is born with, tied to their background or environment.</font>*

| Category | Details |
| -------- | ------- |
| **Proficiencies** | `VIEW[{proficiencies}][text]` |
| **Languages** | `VIEW[{languages}][link]` |
| **Resistances** | `VIEW[{resistances}][text]` |
| **Immunities** | `VIEW[{immunities}][text]` |

### Culture & Society

> *<font color="#7f7f7f">How does this race typically live or interact with the world? Mention social habits, structure, or unique customs.</font>*

### Beliefs

> *<font color="#7f7f7f">What are their common spiritual or cultural beliefs? Include gods, philosophies, or rituals if relevant.</font>*

### History

> *<font color="#7f7f7f">Briefly outline this race's origin or major historical events. Focus on what shaped their identity.</font>*

## Subraces

```dataview
LIST
FROM "Campaign/Lore/Races"
WHERE econtains(tags,"Race") AND parentRace = this.file.link
SORT file.name ASC
```

## Notes

