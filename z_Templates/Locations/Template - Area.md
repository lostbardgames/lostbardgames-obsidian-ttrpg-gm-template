---
tags:
  - Location
  - Area
art: "[[PlaceholderArea.png]]"
mapSketch:
aliases:
terrain:
climate:
threatLevel:
organizations: []
currentLocation:
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> # Info
> | | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Terrain** | `VIEW[{terrain}][text]` |
> | **Climate** | `VIEW[{climate}][text]` |
> | **Threat Level** | `VIEW[{threatLevel}][text]` |
> | **Dominion** | `VIEW[{organizations}][link]` |
> | **Location** | `VIEW[{currentLocation}][link]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize the area by noting its overall size, climate, major landmarks, and the role it plays in the surrounding world.</font>*

## Database

![[z_Databases/Locations/Database - Area Note.base]]

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

## Geography

### Flora & Fauna

> *<font color="#7f7f7f">Describe the plants and animals found in this area, noting how they adapt to the environment and what makes them unique or significant.</font>*

### Geographical Features

> *<font color="#7f7f7f">What are the defining physical traits of this area? Describe terrain, notable landmarks, natural resources, and environmental hazards.</font>*

## Present

### Travel

| `dice: 1d4\|noform` (Result) | Event | Description |
| ----------------------------- | ----- | ----------- |
| 1 | Nothing | Nothing eventful happens on this leg of the journey. |
| 2 | Pass Traveling NPC | You cross paths with an NPC — either uninterested or willing to chat. |
| 3 | Interesting Sighting | You spot something interesting — a beautiful vista or a forgotten pouch of gold. |
| 4 | <font color="#ffff00">Encounter</font> | Use the Random Encounter table below. |

### Local Inhabitants (Random Encounter)

| `dice: 1d4\|noform` (Result) | Name | Description |
| ----------------------------- | ---- | ----------- |
| 1 | Bandit | A group of bandits are roaming the area, looking to score some gold. |
| 2 | Wolves | A hungry pack of wolves roam the treelines. |
| 3 | Troll | A troll has wandered too far from its cave. |
| 4 | Dragon | A dragon nests in the area, looking for a meal for its hatchlings. |

### Current Events

- *<font color="#7f7f7f">Example Quest — summary of a quest the party can get involved in.</font>*
- *<font color="#7f7f7f">Example Event — summary of an ongoing event in this area.</font>*

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

## Past

### History

> *<font color="#7f7f7f">Describe the history of the area, including how it was formed, any past events that occurred there, and how they shaped its current state.</font>*

### Secrets, Rumours & Legends

> *<font color="#7f7f7f">Describe the secrets, rumors, and legends connected to this area.</font>*

## Notes

