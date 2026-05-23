---
tags:
  - Ancestry
  - Race
art: "[[PlaceholderAncestry.png]]"
aliases:
parentAncestry:
size:
  - Medium
speed: 25
hitPoints: 8
abilityBoosts: []
abilityFlaw:
languages: []
traits: []
vision:
rarity: Common
source:
sourcePage:
isHomebrew: false
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> # Details
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Size** | `VIEW[{size}][text]` |
> | **Speed** | `VIEW[{speed}]` ft |
> | **HP** | `VIEW[{hitPoints}]` |
> | **Vision** | `VIEW[{vision}][text]` |
> | **Rarity** | `VIEW[{rarity}][text]` |
> | **Source** | `VIEW[{source}][text]` p.`VIEW[{sourcePage}]` |
>
> # Ability Boosts & Flaw
> | Boosts | Flaw |
> |:------:|:----:|
> | `VIEW[{abilityBoosts}][text]` | `VIEW[{abilityFlaw}][text]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize what makes this ancestry unique — its origin, key traits, and role in the world.</font>*

## Database

![[z_Databases/Ancestries/Database - Ancestry Note.base]]

## Overview

### Physical Traits

> *<font color="#7f7f7f">What noticeable physical features define this ancestry? Include natural weapons, senses, and any distinctive biological traits.</font>*

### Innate Abilities

> *<font color="#7f7f7f">Describe ability boosts, flaws, hit points, languages, and any ancestry-wide special senses.</font>*

| Category | Details |
| -------- | ------- |
| **Languages** | `VIEW[{languages}][link]` |
| **Traits** | `VIEW[{traits}][text]` |

### Culture & Society

> *<font color="#7f7f7f">How does this ancestry typically live and interact with the world?</font>*

### Beliefs

> *<font color="#7f7f7f">What are common spiritual or philosophical beliefs among this ancestry?</font>*

### History

> *<font color="#7f7f7f">This ancestry's origin and key historical events.</font>*

## Heritages

```dataview
LIST
FROM "Campaign/Lore/Ancestries/Heritages"
WHERE econtains(tags,"Heritage") AND parentAncestry = this.file.link
SORT file.name ASC
```

## Ancestry Feats

```dataview
TABLE WITHOUT ID
  file.link as "Feat",
  level as "Level",
  traits as "Traits"
FROM "Campaign/Lore/Feats"
WHERE econtains(tags,"Feat") AND econtains(ancestry, this.file.link)
SORT level ASC
```

## Party Members of This Ancestry

```dataview
TABLE WITHOUT ID
  file.link as "Character",
  heritage as "Heritage",
  class as "Class",
  level as "Level",
  playedBy as "Player"
FROM "Campaign/Characters/Players"
WHERE econtains(tags,"Player") AND ancestry = this.file.link
SORT level DESC
```

## Notes
