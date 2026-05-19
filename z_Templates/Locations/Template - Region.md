---
tags:
  - Location
  - Region
art: "[[PlaceholderRegion.png]]"
mapSketch:
aliases:
regionType:
climate:
terrain:
government:
ruler:
capital:
organizations: []
currentLocation:
dominantSpecies: []
dominantLanguages: []
dominantReligions: []
population:
threatLevel:
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> # Info
> | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Type** | `VIEW[{regionType}][text]` |
> | **Climate** | `VIEW[{climate}][text]` |
> | **Terrain** | `VIEW[{terrain}][text]` |
> | **Dominion** | `VIEW[{organizations}][link]` |
> | **Location** | `VIEW[{currentLocation}][link]` |
>
> # Governance
> | |
> |---|---|
> | **Government** | `VIEW[{government}][text]` |
> | **Ruler** | `VIEW[{ruler}][link]` |
> | **Capital** | `VIEW[{capital}][link]` |
> | **Population** | `VIEW[{population}][text]` |
> | **Threat Level** | `VIEW[{threatLevel}][text]` |

# `=this.file.name`

> *<font color="#7f7f7f">Write a brief summary of the region, highlighting its defining features, climate, and overall significance.</font>*

## Database

![[z_Databases/Locations/Database - Region Note.base]]

## Maps

> [!metadata|map] Interactive Map
> ```leaflet
> id: {{VALUE}}
> image: [[PlaceholderImage.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> bounds: [[0,0], [5000, 5000]]
> lat: 0
> long: 0
> minZoom: -3.5
> maxZoom: 6.5
> defaultZoom: -3.5
> zoomDelta: 0.5
> unit: miles
> scale: 0.0404
> markerTag:
> - "#MapIt-TBD"
> ```

### Hand-Drawn Map

`VIEW[!{mapSketch}][text(renderMarkdown)]`

## Overview

### Government & Politics

> *<font color="#7f7f7f">Describe how the region is governed, who holds power, and any political tensions or alliances worth noting.</font>*

### Society & Culture

> *<font color="#7f7f7f">What are the common customs, values, and traditions of the peoples who live here?</font>*

### Economy & Trade

> *<font color="#7f7f7f">What are the region's major industries, resources, and trade relationships?</font>*

## Present

### Travel

| `dice: 1d4\|noform` (Result) | Event | Description |
| ----------------------------- | ----- | ----------- |
| 1 | Nothing | Nothing eventful happens on this leg of the journey. |
| 2 | Pass Traveling NPC | You cross paths with an NPC — either uninterested or willing to chat. |
| 3 | Interesting Sighting | You spot something interesting, perhaps a beautiful vista or a forgotten pouch of gold. |
| 4 | <font color="#ffff00">Encounter</font> | Use the Random Encounter table below. |

### Local Inhabitants (Random Encounter)

| `dice: 1d4\|noform` (Result) | Name | Description |
| ----------------------------- | ---- | ----------- |
| 1 | Bandit | A group of bandits roaming the area looking for gold. |
| 2 | Wolves | A hungry pack of wolves roam the treelines. |
| 3 | Troll | A troll has wandered too far from its cave. |
| 4 | Dragon | A dragon nests in the area, looking for a meal. |

### Current Events

- *<font color="#7f7f7f">Example Quest — summary of a quest the party can get involved in.</font>*
- *<font color="#7f7f7f">Example Event — summary of an ongoing event in this region.</font>*

## Settlements

```dataview
TABLE WITHOUT ID
  file.link as "Settlement",
  settlementType as "Type",
  population as "Population",
  wealthLevel as "Wealth",
  threatLevel as "Threat"
FROM "Campaign/Settlements"
WHERE econtains(tags,"Settlement") AND econtains(currentLocation, this.file.link)
SORT file.name ASC
```

## Points of Interest

```dataview
TABLE WITHOUT ID
  file.link as "Location",
  poiType as "Type",
  status as "Status",
  threatLevel as "Threat"
FROM "Campaign/POIs"
WHERE econtains(tags,"POI") AND econtains(currentLocation, this.file.link)
SORT file.name ASC
```

## Organizations Active Here

```dataview
TABLE WITHOUT ID
  file.link as "Organization",
  organizationTypes as "Type",
  alignment as "Alignment",
  influence as "Influence"
FROM "Campaign/Organizations"
WHERE econtains(tags,"Organization") AND econtains(currentLocation, this.file.link)
SORT file.name ASC
```

## Past

### History

> *<font color="#7f7f7f">Describe the history of the region, including its origin, important past events, and how those shaped its current identity.</font>*

### Secrets, Rumours & Legends

> *<font color="#7f7f7f">Describe the secrets, rumors, and legends tied to this region.</font>*

## Notes

