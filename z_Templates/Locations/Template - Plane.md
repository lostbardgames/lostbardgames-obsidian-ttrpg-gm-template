---
tags:
  - Location
  - Plane
art: "[[PlaceholderPlane.png]]"
mapSketch:
aliases: []
planeType:
alignmentAxis:
dominantEnergy:
traitGravity: Normal
traitTime: Normal
traitSize: Infinite
traitMorphic: Divinely Morphic
organizations: []
currentLocation:
connectedPlanes: []
accessMethods: []
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> `VIEW[!{art}][text(renderMarkdown)]`
>
> # Info
> | |
> |---|---|
> | **Aliases** | `VIEW[{aliases}][text]` |
> | **Type** | `VIEW[{planeType}][text]` |
> | **Alignment** | `VIEW[{alignmentAxis}][text]` |
> | **Dominant Energy** | `VIEW[{dominantEnergy}][text]` |
> | **Dominion** | `VIEW[{organizations}][link]` |
> | **Location** | `VIEW[{currentLocation}][link]` |
>
> # Planar Traits
> | |
> |---|---|
> | **Gravity** | `VIEW[{traitGravity}][text]` |
> | **Time** | `VIEW[{traitTime}][text]` |
> | **Size** | `VIEW[{traitSize}][text]` |
> | **Morphic** | `VIEW[{traitMorphic}][text]` |

# `=this.file.name`

### Cosmography

> *<font color="#7f7f7f">Describe how this plane fits into the wider cosmology, including its position, connections, and relationships with other planes.</font>*

## Database

![[z_Databases/Locations/Database - Plane Note.base]]

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

### Geography & Layers

> *<font color="#7f7f7f">Describe the physical structure of this plane. Does it have distinct layers, regions, or domains? What are the most notable locations?</font>*

### Inhabitants

> *<font color="#7f7f7f">What creatures, beings, or factions call this plane home? Include any deities whose realm exists here.</font>*

### Access & Connections

**Connected Planes:** `VIEW[{connectedPlanes}][link]`

> *<font color="#7f7f7f">How does one travel to or from this plane? Note portals, spells, rituals, or other means.</font>*

### Survival & Hazards

> *<font color="#7f7f7f">What dangers does this plane pose to unprepared travellers? Note environmental hazards, planar effects, and any special rules that apply.</font>*

## Present

### Current Events

- *<font color="#7f7f7f">Example Quest — summary of a quest the party can get involved in.</font>*
- *<font color="#7f7f7f">Example Event — summary of an ongoing event on this plane.</font>*

## Past

### History

> *<font color="#7f7f7f">Describe the history of this plane, including its creation, major events, and how it has been shaped over time.</font>*

### Secrets, Rumours & Legends

> *<font color="#7f7f7f">Describe the secrets, rumors, and legends tied to this plane, including hidden truths and cosmic mysteries.</font>*

## Deities of This Plane

```dataview
TABLE WITHOUT ID
  file.link as "Deity",
  domain as "Domain",
  alignment as "Alignment",
  deityPower as "Power"
FROM "Campaign/Characters/Deities"
WHERE econtains(tags,"Deity") AND homeplane = this.file.link
SORT file.name ASC
```

## Notable Locations

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

## Notes

