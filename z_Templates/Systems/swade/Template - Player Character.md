---
tags:
  - Character
  - Player
art: "[[PlaceholderCharacter.png]]"
sketch:
playedBy:
aliases:
race:
archetype:
concept:
gender:
pronouns:
sexuality:
age:
birthday:
languages: []
organizations: []
religions: []
condition:
  - Healthy
currentLocation: []
whichParty: []
# Attributes (die size: 4 / 6 / 8 / 10 / 12)
agility: d6
smarts: d6
spirit: d6
strength: d6
vigor: d6
# Derived stats
charisma: 0
pace: 6
pace_run_die: d6
parry: 0
toughness: 0
# Resources
bennies: 3
wounds: 0
fatigue: 0
powerPoints: 0
powerPoints_max: 0
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
> | **Race** | `VIEW[{race}][link]` |
> | **Archetype** | `VIEW[{archetype}][text]` |
> | **Concept** | `VIEW[{concept}][text]` |
> | **Gender** | `VIEW[{gender}][text]` |
> | **Pronouns** | `VIEW[{pronouns}][text]` |
> | **Sexuality** | `VIEW[{sexuality}][text]` |
> | **Age** | `VIEW[{age}][text]` |
>
> # Stats
> | | |
> |---|---|
> | **Pace** | `VIEW[{pace}]` (Run: +`VIEW[{pace_run_die}][text]`) |
> | **Parry** | `VIEW[{parry}]` |
> | **Toughness** | `VIEW[{toughness}]` |
> | **Charisma** | `VIEW[{charisma}]` |
> | **Wounds** | `VIEW[{wounds}]` / 3 |
> | **Fatigue** | `VIEW[{fatigue}]` / 2 |
> | **Bennies** | `VIEW[{bennies}]` |
> | **Power Points** | `VIEW[{powerPoints}]` / `VIEW[{powerPoints_max}]` |
>
> # Attributes
> | AGI | SMA | SPI | STR | VIG |
> |:---:|:---:|:---:|:---:|:---:|
> | `VIEW[{agility}][text]` | `VIEW[{smarts}][text]` | `VIEW[{spirit}][text]` | `VIEW[{strength}][text]` | `VIEW[{vigor}][text]` |

# `=this.file.name`

## Sketch

`VIEW[!{sketch}][text(renderMarkdown)]`

## Attributes

> *<font color="#646a73">Attributes start at d4. Each raise costs 1 Advance. Humans get one free die type raise at creation. Maximum d12. Parry = 2 + half Fighting skill die (round down). Toughness = 2 + half Vigor die (round down) + armour bonus.</font>*

| Attribute | Die | Notes |
| --------- | :-: | ----- |
| Agility | `INPUT[text:agility]` | |
| Smarts | `INPUT[text:smarts]` | |
| Spirit | `INPUT[text:spirit]` | |
| Strength | `INPUT[text:strength]` | |
| Vigor | `INPUT[text:vigor]` | |

## Skills

> *<font color="#646a73">Each skill is linked to an attribute. Skills start at d4 and go up to d12+. Raising a skill costs 1 point up to its linked attribute, 2 points above. Core skills (Athletics, Common Knowledge, Notice, Persuasion, Stealth) are free at d4.</font>*

| Skill | Attribute | Die | Notes |
| ----- | :-------: | :-: | ----- |
| Athletics | AGI | d4 | *(Core — free)* |
| Common Knowledge | SMA | d4 | *(Core — free)* |
| Notice | SMA | d4 | *(Core — free)* |
| Persuasion | SPI | d4 | *(Core — free)* |
| Stealth | AGI | d4 | *(Core — free)* |
| Fighting | AGI | | |
| Shooting | AGI | | |
| *(add skills)* | | | |

## Edges

> *<font color="#646a73">Edges are special abilities with prerequisites. List each edge, the advance when taken, and requirements met.</font>*

| Edge | Advance | Requirements | Effect |
| ---- | :-----: | ------------ | ------ |
| | | | |

## Hindrances

> *<font color="#646a73">Hindrances are drawbacks. Minor (1 pt) or Major (2 pts). Points spent on extra attribute die (+2 pts each) or extra edge (+2 pts) or extra skill points (+1 pt each).</font>*

| Hindrance | Type | Notes |
| --------- | :--: | ----- |
| | | |

## Powers

> *<font color="#646a73">Fill if this character uses powers. Note the arcane background, trappings, and power effects.</font>*

| Power | PP Cost | Range | Duration | Effect |
| ----- | :-----: | :---: | :------: | ------ |
| | | | | |

## Gear & Weapons

> *<font color="#646a73">Encumbrance: characters can carry STR die × 20 lbs without penalty.</font>*

| Name | Damage | Range | Weight | Notes |
| ---- | :----: | :---: | :----: | ----- |
| Unarmed | STR | — | — | |

## Advances

> *<font color="#646a73">Characters advance every 5 XP. Record each advance and what was improved.</font>*

| # | XP | Choice | Notes |
| :-: | :--: | ------ | ----- |
| 1 | 5 | | |

## Personality & Description

> *<font color="#646a73">Who is this character? Physical description, personality, mannerisms, and backstory.</font>*

## Goals

> [!column | 2 no-t]
> > [!metadata|shortterm] Short Term
> > - *<font color="#646a73">Short-term goal.</font>*
>
> > [!metadata|longterm] Long Term
> > - *<font color="#646a73">Long-term ambition.</font>*

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
