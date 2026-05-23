---
tags:
  - Character
  - Player
art: "[[PlaceholderCharacter.png]]"
sketch:
playedBy:
aliases:
characterType:
background:
alignment:
gender:
pronouns:
sexuality:
age:
birthday:
languages: []
occupation: []
organizations: []
religions: []
condition:
  - Healthy
currentLocation: []
whichParty: []
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> ###### **Played By:** <font color="#ffc000">`VIEW[{playedBy}][text]`</font>
>
> # Bio
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Type** | `VIEW[{characterType}][text]` |
> | **Background** | `VIEW[{background}][link]` |
> | **Alignment** | `VIEW[{alignment}][text]` |
> | **Gender** | `VIEW[{gender}][text]` |
> | **Pronouns** | `VIEW[{pronouns}][text]` |
> | **Sexuality** | `VIEW[{sexuality}][text]` |
> | **Age** | `VIEW[{age}][text]` |
>
> # Details
> | | |
> |---|---|
> | **Languages** | `VIEW[{languages}][link]` |
> | **Occupations** | `VIEW[{occupation}][text]` |
> | **Organizations** | `VIEW[{organizations}][link]` |
> | **Religions** | `VIEW[{religions}][link]` |
> | **Condition** | `VIEW[{condition}]` |
> | **Location** | `VIEW[{currentLocation}][link]` |

# `=this.file.name`

## Description

> *<font color="#646a73">Who is this character? Give a brief summary of their appearance, personality, and role in the story.</font>*

## Abilities & Skills

> *<font color="#646a73">What is this character capable of? List their notable skills, talents, and special abilities in free-form — no system rules needed.</font>*

## Equipment & Inventory

| Name | Type | Notes |
| ---- | ---- | ----- |
| | | |

## Personality Traits

> *<font color="#646a73">Insert Personality Traits that shape this character.</font>*

## Ideals

> *<font color="#646a73">Insert Ideals that affect this character.</font>*

## Flaws

> *<font color="#646a73">Insert Flaws that affect this character.</font>*

## Bonds

> *<font color="#646a73">Insert Bonds that affect this character.</font>*

## Secrets

- [ ] *<font color="#646a73">Secret 1</font>*

## Goals

> [!column | 2 no-t]
> > [!metadata|shortterm] Short Term
> > - *<font color="#646a73">What does this character want to accomplish in the near future?</font>*
>
> > [!metadata|longterm] Long Term
> > - *<font color="#646a73">What is this character's ultimate ambition?</font>*

## Past

### Birth

- **Birthday:** `VIEW[{birthday}][text]`
- **Birth Location:**
- **Mother:** | **Father:**

### Childhood

> *<font color="#646a73">What was this character's childhood like?</font>*

### Journey

> *<font color="#646a73">What brought this character to where they are now?</font>*

### Worship

> *<font color="#646a73">Is there any deity or group this character holds loyalty to?</font>*

## Session History

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
