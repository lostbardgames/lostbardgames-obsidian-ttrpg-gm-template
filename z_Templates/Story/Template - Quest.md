---
tags:
  - Quest
aliases:
whichParty:
linkedAdventure:
questType:
questGiver:
questGiverLocation:
completed: false
summary:
reward_gp: 0
reward_items: []
reward_xp: 0
reward_other:
fc-calendar: ""
fc-category: "Quest"
fc-date: ""
fc-end: ""
---

# `=this.file.name`

> [!column|3 no-t]
> **Assigned Party:** `VIEW[{whichParty}][link]`
>
> **Linked Adventure:** `VIEW[{linkedAdventure}][link]`
>
> **Status:** `INPUT[toggle:completed]`

> [!column|2 no-t]
> **Quest Giver:** `VIEW[{questGiver}][link]` (`VIEW[{questGiverLocation}][link]`)
>
> **Type:** `VIEW[{questType}][text]`

## Overview

### Summary

> *<font color="#7f7f7f">What is the core idea of the quest? Briefly describe the situation, who's involved, and what the party is expected to do.</font>*

### Storyline

> *<font color="#7f7f7f">How do you roughly plan the sequence of events from beginning to end? Outline the key beats, twists, and progression the party will experience.</font>*

### Inciting Action

> *<font color="#7f7f7f">What event kicks off the quest? What unexpected moment, discovery, or disruption forces the party to act?</font>*

### Possible Resolutions

> *<font color="#7f7f7f">How might the quest end? What are the different outcomes based on party choices or success/failure?</font>*

## Objectives

- [ ] *<font color="#7f7f7f">Primary objective</font>*
- [ ] *<font color="#7f7f7f">Secondary objective</font>*
- [ ] *<font color="#7f7f7f">Optional objective</font>*

## Rewards

| Type | Reward |
| ---- | ------ |
| **Gold** | `VIEW[{reward_gp}]` gp |
| **Items** | `VIEW[{reward_items}][link]` |
| **XP** | `VIEW[{reward_xp}]` |
| **Other** | `VIEW[{reward_other}][text]` |

## Scenes & Actors

### Characters

> *<font color="#7f7f7f">Who are the key NPCs involved? Include their roles, goals, and how they relate to the quest.</font>*

### Encounters

> *<font color="#7f7f7f">What encounters appear in this quest? Include any notable creatures, factions, or individuals the party may fight, evade, or negotiate with.</font>*

### Locations

> *<font color="#7f7f7f">What key places are involved? List important towns, dungeons, ruins, or regions the party will visit or hear about.</font>*

### Random Encounters

> *<font color="#7f7f7f">What unexpected events, creatures, or challenges might the party run into during this quest?</font>*

## Clues & Information

| # | Clue / Discovery | Source | Found |
| :-: | ---------------- | ------ | :---: |
| 1 | | | ☐ |
| 2 | | | ☐ |
| 3 | | | ☐ |

## NPCs Involved

```dataview
TABLE WITHOUT ID
  file.link as "NPC",
  occupation as "Role",
  condition as "Condition",
  currentLocation as "Location"
FROM "Campaign/Characters/NPCs"
WHERE econtains(tags,"NPC") AND contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Session Appearances

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

