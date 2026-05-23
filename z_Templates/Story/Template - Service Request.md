---
tags:
  - Service
aliases: []
provider:
customer:
serviceType:
serviceCost: 0
hasPaid: false
completed: false
downtimeDays: 0
materialsRequired: []
relatedItem:
relatedQuest:
summary: ""
fc-calendar: ""
fc-category: "Downtime"
fc-date: ""
fc-end: ""
---

> [!infobox | no-blending black]+ <font color="#ffffff">Infobox</font>
>
> # Details
> | |
> |---|---|
> | **Type** | `VIEW[{serviceType}][text]` |
> | **Provider** | `VIEW[{provider}][link]` |
> | **Customer** | `VIEW[{customer}][link]` |
> | **Due Date** | `VIEW[{fc-date}][text]` |
> | **Cost** | `VIEW[{serviceCost}]` gp |
> | **Downtime Days** | `VIEW[{downtimeDays}]` |
> | **Has Paid** | `INPUT[toggle:hasPaid]` |
> | **Completed** | `INPUT[toggle:completed]` |

# `=this.file.name`

> *<font color="#7f7f7f">Summarize the service requested, describing what it is, who is providing it, and the outcome the party expects.</font>*

## Order Details

### What is Being Requested

> *<font color="#7f7f7f">List the specific details of the order, including what is being requested, any special instructions, or custom requirements.</font>*

- 

### Materials Required

`VIEW[{materialsRequired}][link]`

- [ ] *<font color="#7f7f7f">Material 1</font>*
- [ ] *<font color="#7f7f7f">Material 2</font>*

### Terms & Conditions

> *<font color="#7f7f7f">What has been agreed upon? Note any special conditions, deadlines, or penalties for non-delivery.</font>*

## Related

> [!column|2 no-t]
> **Related Item:** `VIEW[{relatedItem}][link]`
>
> **Related Quest:** `VIEW[{relatedQuest}][link]`

## Completion Notes

> *<font color="#7f7f7f">What was delivered? Were there any deviations from the original order? Note the outcome when the service is complete.</font>*

## Notes

