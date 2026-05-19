---
tags:
  - Character
  - NPC
art: "[[PlaceholderCharacter.png]]"
sketch:
aliases:
species:
class:
subclass:
gender:
pronouns:
sexuality:
age:
birthday:
languages:
  - "[[Common]]"
occupation: []
organizations: []
religions: []
currentLocation:
condition:
  - Healthy
whichParty: []
party1Relation:
isQuestGiver: false
isMerchant: false
cr:
hp:
ac:
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> ![[PlaceholderAudio.webm]]
>
> # Bio
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Species** | `VIEW[{species}][link]` |
> | **Class** | `VIEW[{class}][link]` |
> | **Subclass** | `VIEW[{subclass}][link]` |
> | **Gender** | `VIEW[{gender}][text]` |
> | **Pronouns** | `VIEW[{pronouns}][text]` |
> | **Sexuality** | `VIEW[{sexuality}][text]` |
> | **Age** | `VIEW[{age}][text]` |
>
> # Info
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
> | **CR** | `VIEW[{cr}][text]` |
> | **HP** | `VIEW[{hp}][text]` |
> | **AC** | `VIEW[{ac}][text]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize who this NPC is, highlighting their role, personality, and what makes them stand out in the story or world.</font>*

## Database

![[z_Databases/Characters/Database - Character Note.base]]

## Sketch

`VIEW[!{sketch}][text(renderMarkdown)]`

## Overview

### Description

> *<font color="#7f7f7f">Describe the NPC's physical appearance, including build, features, clothing, and any distinctive marks or details.</font>*

### Personality & Mannerisms

> *<font color="#7f7f7f">Describe the NPC's personality and mannerisms, including their general demeanour, tone of voice, habits, and quirks.</font>*

### Motivations

> *<font color="#7f7f7f">Describe what drives this NPC, including their goals, desires, fears, or values that influence their choices and actions.</font>*

#### Goals

- [ ] *<font color="#7f7f7f">Example Goal — what are they trying to achieve?</font>*

## Present

### Relationship to Party

> *<font color="#7f7f7f">How does this NPC feel about the party? Note their attitude, any favours owed, and how the relationship has evolved.</font>*

**Party Relation:** `VIEW[{party1Relation}][text]`

### Current Events

- [ ] *<font color="#7f7f7f">Example Event — what is currently going on in their life?</font>*

### Secrets

- [ ] *<font color="#7f7f7f">Example Secret — what details are hidden?</font>*

### Acquaintances

- *<font color="#7f7f7f">Example Person | Relation — how do they know them?</font>*

## Past

### Birth

- **Birthday:** `VIEW[{birthday}][text]`
- **Birth Location:**
- **Mother:** | **Father:**

### History

#### Example Event

> *<font color="#7f7f7f">Describe an important event from this NPC's past and how it shaped who they are today.</font>*

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
LIMIT 5
```

## Notes

