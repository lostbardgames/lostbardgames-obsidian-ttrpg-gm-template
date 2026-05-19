---
tags:
  - Character
  - NPC
  - Deity
art: "[[PlaceholderDeity.png]]"
sketch:
aliases:
pronouns:
deityPower:
alignment:
domain: []
clericDomains: []
favoredWeapon:
holySymbol:
holyDay:
homeplane:
languages:
  - "[[Common]]"
organizations: []
worshippers: []
alliedDeities: []
enemyDeities: []
condition:
  - Active
currentLocation: []
whichParty: []
party1Relation:
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> ![[PlaceholderAudio.webm]]
>
> # Bio
> | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Pronouns** | `VIEW[{pronouns}][text]` |
> | **Power** | `VIEW[{deityPower}][text]` |
> | **Alignment** | `VIEW[{alignment}][text]` |
> | **Holy Symbol** | `VIEW[{holySymbol}][text]` |
> | **Holy Day** | `VIEW[{holyDay}][text]` |
> | **Favored Weapon** | `VIEW[{favoredWeapon}][link]` |
> | **Home Plane** | `VIEW[{homeplane}][link]` |
>
> # Divine Info
> | |
> |---|---|
> | **Domain** | `VIEW[{domain}][text]` |
> | **Cleric Domains** | `VIEW[{clericDomains}][text]` |
> | **Organizations** | `VIEW[{organizations}][link]` |
> | **Worshippers** | `VIEW[{worshippers}][link]` |
> | **Allied Deities** | `VIEW[{alliedDeities}][link]` |
> | **Enemy Deities** | `VIEW[{enemyDeities}][link]` |
> | **Condition** | `VIEW[{condition}]` |
> | **Location** | `VIEW[{currentLocation}][link]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize who this Deity is, highlighting their divine portfolio, personality, and significance in the cosmology.</font>*

## Database

![[z_Databases/Characters/Database - Deity Note.base]]

## Sketch

`VIEW[!{sketch}][text(renderMarkdown)]`

## Overview

### Description

> *<font color="#7f7f7f">Describe the Deity's appearance or common depictions, including distinctive marks, symbols, or divine manifestations.</font>*

### Personality & Mannerisms

> *<font color="#7f7f7f">Describe the Deity's personality and how they interact with mortals, other deities, and their chosen.</font>*

### Motivations

> *<font color="#7f7f7f">Describe what drives this Deity — their goals, desires, and values that influence their actions in the mortal and divine world.</font>*

#### Goals

- [ ] *<font color="#7f7f7f">Example Divine Goal — what is this deity trying to achieve or maintain?</font>*

## Worship

### Clergy & Hierarchy

> *<font color="#7f7f7f">How is the church or following structured? Who leads it? What are the ranks and roles?</font>*

### Rites & Ceremonies

> *<font color="#7f7f7f">What rituals, holy days, and ceremonies do worshippers observe? What prayers or offerings are expected?</font>*

### Temples & Sacred Sites

> *<font color="#7f7f7f">Where are the major temples or holy sites dedicated to this deity? What makes them significant?</font>*

## Present

### Current Events

- [ ] *<font color="#7f7f7f">Example Event — what is this deity currently doing or influencing?</font>*

### Secrets

- [ ] *<font color="#7f7f7f">Example Secret — what hidden truth about this deity is known only to a few?</font>*

### Acquaintances

- *<font color="#7f7f7f">Example Person | Relation — how do they know this person or deity?</font>*

## Organizations

```dataview
TABLE WITHOUT ID
  file.link as "Organization",
  organizationTypes as "Type",
  alignment as "Alignment",
  influence as "Influence"
FROM "Campaign/Organizations"
WHERE econtains(tags,"Organization") AND econtains(worship, this.file.link)
SORT file.name ASC
```

## Temples & Sacred Sites

```dataview
TABLE WITHOUT ID
  file.link as "Location",
  poiType as "Type",
  currentLocation as "Settlement",
  status as "Status"
FROM "Campaign/POIs"
WHERE econtains(tags,"POI") AND econtains(dominion, this.file.link)
SORT file.name ASC
```

## Past

### History

#### Example Event

> *<font color="#7f7f7f">Describe an important event from this Deity's past, such as their ascension, a great war, or a divine tragedy.</font>*

## Notes

