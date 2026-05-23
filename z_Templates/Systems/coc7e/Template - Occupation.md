---
tags:
  - Occupation
aliases:
creditRating_min: 0
creditRating_max: 40
skillPoints: "EDU × 4"
occupationSkills: []
personalSkills: "INT × 2"
source:
sourcePage:
isHomebrew: false
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> # Details
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Credit Rating** | `VIEW[{creditRating_min}]` – `VIEW[{creditRating_max}]`% |
> | **Skill Points** | `VIEW[{skillPoints}][text]` |
> | **Source** | `VIEW[{source}][text]` p.`VIEW[{sourcePage}]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize this occupation — what kind of person holds it, what they do, and the world they move through.</font>*

## Occupation Skills

> *<font color="#7f7f7f">List the skills that belong to this occupation. Investigators may spend their EDU × 4 points only on these skills. Credit Rating must be kept within the range above.</font>*

`VIEW[{occupationSkills}][text]`

## Description

> *<font color="#7f7f7f">Describe the occupation in detail. What daily life looks like, the social circle the investigator moves in, and how it shapes their worldview.</font>*

## Suggested Contacts

> *<font color="#7f7f7f">What kinds of contacts are natural for someone in this occupation?</font>*

## Investigators of This Occupation

```dataview
TABLE WITHOUT ID
  file.link as "Investigator",
  age as "Age",
  playedBy as "Player"
FROM "Campaign/Characters/Players"
WHERE econtains(tags,"Player") AND occupation = this.file.link
SORT file.name ASC
```

## Notes
