---
tags:
  - Clan
aliases:
bane:
compulsion:
disciplines: []
bloodPotency: 1
nicknames: []
source:
sourcePage:
isHomebrew: false
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> # Details
> | | |
> |---|---|
> | **Aliases / Nicknames** | `VIEW[{nicknames}][text]` |
> | **Disciplines** | `VIEW[{disciplines}][link]` |
> | **Bane** | `VIEW[{bane}][text]` |
> | **Compulsion** | `VIEW[{compulsion}][text]` |
> | **Source** | `VIEW[{source}][text]` p.`VIEW[{sourcePage}]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize the clan — its reputation, philosophy, and role in Kindred society.</font>*

## Overview

### Origin & History

> *<font color="#7f7f7f">Where did this clan come from? Who is their mythic progenitor? How have they evolved across the centuries?</font>*

### Clan Culture

> *<font color="#7f7f7f">How do members of this clan typically behave and organize themselves? What philosophies or covenants do they favor?</font>*

### Appearance

> *<font color="#7f7f7f">How do members of this clan typically appear? Any distinguishing physical characteristics from the Embrace?</font>*

## Bane

> *<font color="#7f7f7f">Describe the clan's curse in detail — how it manifests and the mechanical effects at different Blood Potency levels.</font>*

`VIEW[{bane}][text]`

## Compulsion

> *<font color="#7f7f7f">When a vampire of this clan has a Bestial Failure, what specific compulsion does their Beast push them toward?</font>*

`VIEW[{compulsion}][text]`

## Disciplines

> *<font color="#7f7f7f">Members of this clan have access to three in-clan disciplines, which cost less to advance.</font>*

`VIEW[{disciplines}][link]`

## Kindred of This Clan

```dataview
TABLE WITHOUT ID
  file.link as "Kindred",
  generation as "Gen.",
  playedBy as "Player"
FROM "Campaign/Characters/Players"
WHERE econtains(tags,"Player") AND clan = this.file.link
SORT file.name ASC
```

## Notes
