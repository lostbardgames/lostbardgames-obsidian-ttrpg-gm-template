---
tags:
  - Encounter
aliases:
encounterType:
difficulty:
currentLocation: []
xpReward: 0
completed: false
battleMap:
---

> [!column|3 no-t]
> **Type:** `VIEW[{encounterType}][text]`
>
> **Difficulty:** `VIEW[{difficulty}][text]`
>
> **Completed:** `INPUT[toggle:completed]`

# `=this.file.name`

> *<font color="#7f7f7f">Summarize this encounter — what is happening, where, and what the party needs to do.</font>*

## Battle Map

`VIEW[!{battleMap}][text(renderMarkdown)]`

## Setup

### Scene

> *<font color="#7f7f7f">Describe the scene when the encounter begins. What does the party see, hear, and sense? Read this aloud to set the scene.</font>*

### Terrain & Environment

> *<font color="#7f7f7f">Note any important terrain features, cover, hazards, or environmental elements that affect the encounter.</font>*

## Combatants

| Name | HP | AC | Initiative | CR | Notes |
| ---- | :-: | :-: | :--------: | :-: | ----- |
| | | | | | |
| | | | | | |
| | | | | | |

## Tactics

> *<font color="#7f7f7f">How do the enemies behave in combat? What are their priorities, focus targets, special abilities, and when do they retreat or surrender?</font>*

## Rewards

| Type | Amount / Item |
| ---- | ------------- |
| **XP** | `VIEW[{xpReward}]` |
| **Gold** | |
| **Items** | |
| **Story** | |

## Notes

