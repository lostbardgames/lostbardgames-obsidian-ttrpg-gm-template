---
tags:
  - Character
  - Player
art: "[[PlaceholderCharacter.png]]"
sketch:
playedBy:
aliases:
occupation:
residence:
birthplace:
gender:
pronouns:
age:
birthday:
languages: []
organizations: []
condition:
  - Healthy
currentLocation: []
whichParty: []
# Characteristics (base values, 15-90 for most; roll 3d6×5 or 2d6+6×5)
str: 50
con: 50
siz: 50
dex: 50
app: 50
int: 60
pow: 50
edu: 60
luk: 50
# Derived (calculated from characteristics)
hp_max: 0
hp_current: 0
mp_max: 0
mp_current: 0
san_start: 0
san_current: 0
san_max: 99
move: 8
build: 0
damage_bonus: "0"
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
> | **Occupation** | `VIEW[{occupation}][link]` |
> | **Residence** | `VIEW[{residence}][text]` |
> | **Birthplace** | `VIEW[{birthplace}][text]` |
> | **Gender** | `VIEW[{gender}][text]` |
> | **Pronouns** | `VIEW[{pronouns}][text]` |
> | **Age** | `VIEW[{age}][text]` |
>
> # Vitals
> | | |
> |---|---|
> | **HP** | `VIEW[{hp_current}]` / `VIEW[{hp_max}]` |
> | **MP** | `VIEW[{mp_current}]` / `VIEW[{mp_max}]` |
> | **Sanity** | `VIEW[{san_current}]` / `VIEW[{san_max}]` (Start: `VIEW[{san_start}]`) |
> | **Luck** | `VIEW[{luk}]` |
> | **Move** | `VIEW[{move}]` |
> | **Build** | `VIEW[{build}]` |
> | **Damage Bonus** | `VIEW[{damage_bonus}][text]` |
>
> # Characteristics
> | STR | CON | SIZ | DEX | APP | INT | POW | EDU |
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | `VIEW[{str}]` | `VIEW[{con}]` | `VIEW[{siz}]` | `VIEW[{dex}]` | `VIEW[{app}]` | `VIEW[{int}]` | `VIEW[{pow}]` | `VIEW[{edu}]` |

# `=this.file.name`

## Sketch

`VIEW[!{sketch}][text(renderMarkdown)]`

## Characteristics

> *<font color="#646a73">Each characteristic also has a Half value (÷2, round down) and a Fifth value (÷5, round down) used for harder rolls. Luck is rolled separately (3d6×5) and is not derived.</font>*

| | Full | Half | Fifth |
| --------- | :--: | :--: | :---: |
| STR | `INPUT[number:str]` | | |
| CON | `INPUT[number:con]` | | |
| SIZ | `INPUT[number:siz]` | | |
| DEX | `INPUT[number:dex]` | | |
| APP | `INPUT[number:app]` | | |
| INT | `INPUT[number:int]` | | |
| POW | `INPUT[number:pow]` | | |
| EDU | `INPUT[number:edu]` | | |
| LUK | `INPUT[number:luk]` | | |

> **Derived Values:** HP = (CON + SIZ) ÷ 10 (round up) · MP = POW ÷ 5 · Sanity = POW × 5 · Move: 8 base (9 if DEX or STR > SIZ, 7 if both < SIZ)

## Occupation & Skills

> *<font color="#646a73">Your occupation determines your Credit Rating range and which skills count as occupation skills (marked ✦). You get EDU × 4 points for occupation skills and INT × 2 for personal interest skills. Credit Rating is **not** boosted with personal interest points.</font>*

### Occupation Skills (EDU × 4 = `=number(this.edu) * 4` pts)

| Skill | Base | Points Spent | Total |
| ----- | :--: | :----------: | :---: |
| Credit Rating | 0% | | |
| | | | |
| | | | |

### Personal Interest Skills (INT × 2 = `=number(this.int) * 2` pts)

| Skill | Base | Points Spent | Total |
| ----- | :--: | :----------: | :---: |
| | | | |

### Full Skill List

> *<font color="#646a73">All investigators share these base values. Any skill pushed above 90% is capped at 90%. Mark occupation skills ✦ and personal interest skills ★.</font>*

| Skill | Base | Total | Notes |
| ----- | :--: | :---: | ----- |
| Accounting | 05% | | |
| Anthropology | 01% | | |
| Appraise | 05% | | |
| Archaeology | 01% | | |
| Art/Craft *(specify)* | 05% | | |
| Charm | 15% | | |
| Climb | 20% | | |
| Computer Use | 05% | | *(Modern only)* |
| Credit Rating | 00% | | |
| Cthulhu Mythos | 00% | | *(Never spend points here)* |
| Disguise | 05% | | |
| Dodge | `=number(this.dex) / 2`% | | *(DEX ÷ 2)* |
| Drive Auto | 20% | | |
| Elec. Repair | 10% | | |
| Fast Talk | 05% | | |
| Fighting (Brawl) | 25% | | |
| Firearms (Handgun) | 20% | | |
| Firearms (Rifle/Shotgun) | 25% | | |
| First Aid | 30% | | |
| History | 05% | | |
| Intimidate | 15% | | |
| Jump | 20% | | |
| Language (Own) | `=number(this.edu)`% | | *(EDU value)* |
| Language *(Other)* | 01% | | |
| Law | 05% | | |
| Library Use | 20% | | |
| Listen | 20% | | |
| Locksmith | 01% | | |
| Mech. Repair | 10% | | |
| Medicine | 01% | | |
| Natural World | 10% | | |
| Navigate | 10% | | |
| Occult | 05% | | |
| Persuade | 10% | | |
| Psychology | 10% | | |
| Psychoanalysis | 01% | | |
| Ride | 05% | | |
| Science *(specify)* | 01% | | |
| Sleight of Hand | 10% | | |
| Spot Hidden | 25% | | |
| Stealth | 20% | | |
| Survival | 10% | | |
| Swim | 20% | | |
| Throw | 20% | | |
| Track | 10% | | |

## Weapons

| Weapon | Skill | Damage | Range | Ammo | Notes |
| ------ | :---: | :----: | :---: | :--: | ----- |
| Unarmed | Fighting (Brawl) | 1d3 + DB | — | — | |

## Equipment & Possessions

| Item | Notes |
| ---- | ----- |
| | |

## Backstory

### Personal Description

> *<font color="#646a73">How does this investigator look? What makes them memorable?</font>*

### Ideology & Beliefs

> *<font color="#646a73">What does this investigator believe in? Religion, politics, personal philosophy?</font>*

### Significant People

> *<font color="#646a73">Who matters most to this investigator? List 1-3 key relationships.</font>*

### Meaningful Locations

> *<font color="#646a73">Places that hold deep meaning for this investigator.</font>*

### Treasured Possessions

> *<font color="#646a73">Objects of personal significance — not just valuable, but meaningful.</font>*

### Traits

> *<font color="#646a73">Physical traits, mannerisms, or quirks that define this investigator.</font>*

### Phobias & Manias

> *<font color="#646a73">Known fears or mental conditions, especially those discovered during play.</font>*

### Wounds & Scars

> *<font color="#646a73">Physical and psychological injuries. Sanity losses are tracked here.</font>*

## Cthulhu Mythos

> *<font color="#646a73">Record mythos knowledge gained. Each point of Cthulhu Mythos lowers maximum Sanity by 1. Knowledge once gained cannot be forgotten.</font>*

- **Mythos Score:** `VIEW[{cthulhu_mythos}]`%
- **Max Sanity:** `=99 - number(this.cthulhu_mythos)`

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
