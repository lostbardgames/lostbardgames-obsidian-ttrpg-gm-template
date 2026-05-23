---
tags:
  - Heritage
art: "[[PlaceholderHeritage.png]]"
aliases:
parentAncestry:
traits: []
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
> | **Ancestry** | `VIEW[{parentAncestry}][link]` |
> | **Traits** | `VIEW[{traits}][text]` |
> | **Rarity** | `VIEW[{rarity}][text]` |
> | **Source** | `VIEW[{source}][text]` p.`VIEW[{sourcePage}]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize this heritage — what variant of the ancestry it represents and what makes it mechanically and narratively distinct.</font>*

## Description

> *<font color="#7f7f7f">Describe the heritage's physical or cultural origin. Where does this lineage come from? What sets these individuals apart from others of the same ancestry?</font>*

## Ability

> *<font color="#7f7f7f">Describe the mechanical ability this heritage grants at 1st level.</font>*

## Party Members with This Heritage

```dataview
TABLE WITHOUT ID
  file.link as "Character",
  ancestry as "Ancestry",
  class as "Class",
  level as "Level",
  playedBy as "Player"
FROM "Campaign/Characters/Players"
WHERE econtains(tags,"Player") AND heritage = this.file.link
SORT level DESC
```

## Notes
