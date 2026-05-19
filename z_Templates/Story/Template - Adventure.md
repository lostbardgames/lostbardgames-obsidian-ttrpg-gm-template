---
tags:
  - Adventure
aliases:
whichParty:
completed: false
summary:
tone:
startingLevel:
endingLevel:
antagonist:
factionsInvolved: []
fc-calendar: ""
fc-category: "Adventure"
fc-date: ""
fc-end: ""
---

# `=this.file.name`

> [!column|2 no-t]
> **Assigned Party:** `VIEW[{whichParty}][link]`
>
> **Status:** `INPUT[toggle:completed]`

> [!column|3 no-t]
> **Tone:** `VIEW[{tone}][text]`
>
> **Starting Level:** `VIEW[{startingLevel}]`
>
> **Ending Level:** `VIEW[{endingLevel}]`

> *<font color="#7f7f7f">Summarize the overarching adventure, outlining its main premise, goals, and the central conflicts or journey that drives it.</font>*

## Database

![[z_Databases/Party/Party 1/Database - Adventure Note.base]]

## Overview

### Quick References

> [!column|3 no-t]
>> **Characters**
>> ```dataview
>> LIST
>> FROM outgoing([[]])
>> WHERE econtains(tags,"Character")
>> SORT file.name ASC
>> ```
>
>> **Locations**
>> ```dataview
>> LIST
>> FROM outgoing([[]])
>> WHERE econtains(tags,"Location")
>> SORT file.name ASC
>> ```
>
>> **Organizations**
>> ```dataview
>> LIST
>> FROM outgoing([[]])
>> WHERE econtains(tags,"Organization")
>> SORT file.name ASC
>> ```

### Plot

> *<font color="#7f7f7f">Describe the main plot of the adventure, detailing the central storyline, major conflicts, and the path the party is expected to follow.</font>*

### Antagonist

**Antagonist:** `VIEW[{antagonist}][link]`

> *<font color="#7f7f7f">Who or what opposes the party? Describe the antagonist's motivations, methods, and what makes them a compelling threat.</font>*

## Acts

### [[Quest Name]]

#### Summary

> *<font color="#7f7f7f">Summarize the key events that occurred during this quest or major story beat.</font>*

#### Outcomes

> *<font color="#7f7f7f">Summarize the outcomes of this quest, noting how it advances or resolves this adventure.</font>*

### [[Quest Name]]

#### Summary

> *<font color="#7f7f7f">Summarize the key events that occurred during this quest or major story beat.</font>*

#### Outcomes

> *<font color="#7f7f7f">Summarize the outcomes of this quest, noting how it advances or resolves this adventure.</font>*

## DM Prep

### Possible Player Decisions & Consequences

| Decision | Consequence |
| -------- | ----------- |
| | |
| | |

### Backup Plans

> *<font color="#7f7f7f">What do you do if the party goes completely off-script? Note flexible plot hooks and alternate paths.</font>*

## Session Log

```dataview
TABLE WITHOUT ID
  file.link as "Session",
  sessionNumber as "#",
  sessionDate as "Date",
  summary as "Summary"
FROM "Campaign/Parties/Session Notes"
WHERE econtains(tags,"SessionNote") AND contains(file.outlinks, this.file.link)
SORT sessionNumber ASC
```

## Notes

