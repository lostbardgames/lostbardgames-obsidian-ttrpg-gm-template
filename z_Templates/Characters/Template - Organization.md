---
tags:
  - Organization
art: "[[PlaceholderOrg.png]]"
orgChart:
aliases:
organizationTypes: []
worship: []
alignment:
size:
influence:
hq:
hierarchy:
heads: []
stewards: []
organizations: []
currentLocation: []
tradePartners:
status:
  - Active
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> # Details
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Type** | `VIEW[{organizationTypes}][text]` |
> | **Alignment** | `VIEW[{alignment}][text]` |
> | **Size** | `VIEW[{size}][text]` |
> | **Influence** | `VIEW[{influence}][text]` |
> | **Worship** | `VIEW[{worship}][link]` |
> | **HQ** | `VIEW[{hq}][link]` |
> | **Status** | `VIEW[{status}][text]` |
>
> # Structure
> | | |
> |---|---|
> | **Hierarchy** | `VIEW[{hierarchy}][link]` |
> | **Heads** | `VIEW[{heads}][link]` |
> | **Stewards** | `VIEW[{stewards}][link]` |
> | **Parent Organizations** | `VIEW[{organizations}][link]` |

# `=this.file.name`

> *<font color="#7f7f7f">A brief description that captures what this organization does, how it's seen, and what makes it stand out.</font>*

## Database

![[z_Databases/Characters/Database - Organization Note.base]]

## Org Chart

`VIEW[!{orgChart}][text(renderMarkdown)]`

## Overview

### Mission

> *<font color="#7f7f7f">What is the organization's core purpose? What are they trying to achieve, protect, control, or change?</font>*

### Public Goal vs. Secret Goal

> *<font color="#7f7f7f">What does the organization claim to want publicly? What do they actually want? Who knows the true goal?</font>*

### Code of Conduct

> *<font color="#7f7f7f">What rules, behaviours, or expectations do members follow? What actions are rewarded or punished?</font>*

### Recruitment

> *<font color="#7f7f7f">How does someone join, and what happens once they do? Any specific entry requirements, trials, or initiations?</font>*

### Ranks

> *<font color="#7f7f7f">Are there distinct titles, roles, or levels of authority? How does someone rise through the ranks?</font>*

### Uniforms & Symbols

> *<font color="#7f7f7f">Do members wear specific clothing, armour, or symbols? What does it look like and what does it represent?</font>*

## Present

### Acquaintances

> *<font color="#7f7f7f">Go over allies, rivals, or neutral parties this organization has relationships with.</font>*

### Trade Deals

<font color="#ffc000">**Trade Partners:**</font> `VIEW[{tradePartners}][link]`

> *<font color="#7f7f7f">Detail any significant trade deals this organization is currently engaging in.</font>*

### Current Events

> *<font color="#7f7f7f">What is happening with the organization right now? Internal struggles, major missions, or political shifts?</font>*

### Secrets

- [ ] *<font color="#7f7f7f">Example Secret — what hidden truth does this organization hold?</font>*

## Members

```dataview
TABLE WITHOUT ID
  file.link as "Character",
  occupation as "Role",
  condition as "Condition",
  currentLocation as "Location"
FROM "Campaign/Characters"
WHERE econtains(tags,"Character") AND econtains(organizations, this.file.link)
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
LIMIT 5
```

## Past

### History

> *<font color="#7f7f7f">How did the organization begin? What key events, founders, or turning points shaped its development?</font>*

## Notes

