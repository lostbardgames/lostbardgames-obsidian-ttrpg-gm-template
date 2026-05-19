---
tags:
  - SessionNote
aliases:
whichParty:
sessionNumber:
sessionDate: 2026-04-21
recapPlayer:
xpGained: 0
gpGained: 0
summary: ""
fc-calendar: ""
fc-category: "Session"
fc-date: ""
fc-end: ""
---

# `=this.file.name`

> [!column|3 no-t]
> **Party:** `VIEW[{whichParty}][link]`
>
> **Session #:** `VIEW[{sessionNumber}]`
>
> **Date:** `VIEW[{sessionDate}][text]`

## Quick References

> [!column|3 no-t]
>> ##### Characters
>> ```dataview
>> LIST
>> FROM outgoing([[]])
>> WHERE econtains(tags,"Character")
>> SORT file.name ASC
>> ```
>
>> ##### Locations
>> ```dataview
>> LIST
>> FROM outgoing([[]])
>> WHERE econtains(tags,"Location")
>> SORT file.name ASC
>> ```
>
>> ##### Organizations
>> ```dataview
>> LIST
>> FROM outgoing([[]])
>> WHERE econtains(tags,"Organization")
>> SORT file.name ASC
>> ```

## Session Planning

> *<font color="#7f7f7f">What are your goals for this session? What beats do you want to hit and what should the party walk away having experienced?</font>*

- 

## Session Notes

> *<font color="#7f7f7f">Notes taken during the session. These can be rough — clean them up after.</font>*

- 

## Rewards

| Type | Amount |
| ---- | ------ |
| **XP Gained** | `INPUT[number:xpGained]` |
| **Gold Gained** | `INPUT[number:gpGained]` gp |
| **Items** | |

## Next Session Reminders

> *<font color="#7f7f7f">What loose threads, unresolved beats, or planned moments do you need to carry into next session?</font>*

- 

## Previous Session Recap

> *<font color="#7f7f7f">Written from the party's perspective. Use this for the "Previously on..." moment at the start of the next session. Recap player this session: `VIEW[{recapPlayer}][text]`</font>*

- 

