---
tags:
  - Homepage
campaignName: My Campaign
activeParty:
cssclasses:
  - wide-page
---

# 🏰 `VIEW[{campaignName}][text]`

`INPUT[text(placeholder(Campaign Name)):campaignName]` Active Party: `INPUT[text(placeholder(Party Name)):activeParty]`

---

> [!column|3 no-t]
>
> > [!tip] ⚡ Quick Create
> >
> > ```meta-bind-button
> > label: "New Party"
> > style: primary
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000005
> > ```
> >
> > ```meta-bind-button
> > label: "New Session Notes"
> > style: primary
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000025
> > ```
> >
> > ```meta-bind-button
> > label: "New Quest"
> > style: primary
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000024
> > ```
> >
> > ```meta-bind-button
> > label: "New Encounter"
> > style: primary
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000026
> > ```
> >
> > ```meta-bind-button
> > label: "New NPC"
> > style: primary
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000002
> > ```
> >
> > ```meta-bind-button
> > label: "New Adventure"
> > style: primary
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000023
> > ```
> >
> > ```meta-bind-button
> > label: "New Settlement"
> > style: primary
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000008
> > ```
> >
> > → [[Buttons|All Buttons]]
>
> > [!info] 🛡️ Active Party
> >
> > ```dataviewjs
> > const party = dv.current().activeParty;
> > if (!party) {
> >   dv.paragraph("_Set `activeParty` above to load your party._");
> > } else {
> >   const chars = dv.pages(`"Campaign/Characters/Players/${party}"`);
> >   if (chars.length === 0) {
> >     dv.paragraph(`_No characters found in "${party}"._`);
> >   } else {
> >     dv.table(
> >       ["Character", "Class", "HP", "AC", "Condition"],
> >       chars.sort(c => c.file.name).map(c => [
> >         c.file.link,
> >         c.class ? `${c.class}${c.level ? ` ${c.level}` : ""}` : "—",
> >         `${c.hp_current ?? "?"}/${c.hp_max ?? "?"}`,
> >         c.ac ?? "—",
> >         Array.isArray(c.condition) ? c.condition.join(", ") : (c.condition ?? "—")
> >       ])
> >     );
> >   }
> > }
> > ```
>
> > [!abstract] 👁️ At a Glance
> >
> > **📝 Recent Sessions**
> >
> > ```dataview
> > TABLE WITHOUT ID
> >   file.link as "Session",
> >   sessionNumber as "#",
> >   sessionDate as "Date"
> > FROM "Campaign/Parties/Session Notes"
> > WHERE econtains(tags, "SessionNote")
> > SORT sessionDate DESC
> > LIMIT 5
> > ```
> >
> > **⚡ Open Quests**
> >
> > ```dataview
> > LIST FROM "Campaign/Parties/Quests"
> > WHERE completed = false OR completed = null
> > SORT file.mtime DESC
> > LIMIT 6
> > ```

---

## 🌍 World Overview

> [!column|2 no-t]
>
> > [!map] 🌍 Worlds & Regions
> >
> > ```dataviewjs
> > const worlds = dv.pages('"Campaign/Worlds"');
> > const regions = dv.pages('"Campaign/Regions"');
> > const settlements = dv.pages('"Campaign/Settlements"');
> > const planes = dv.pages('"Campaign/Planes"');
> >
> > dv.paragraph(
> >   `**🌍 Worlds:** ${worlds.length}  ·  **🗺 Regions:** ${regions.length}  ·  **🏙 Settlements:** ${settlements.length}  ·  **✨ Planes:** ${planes.length}`
> > );
> >
> > if (worlds.length > 0) {
> >   dv.header(4, "Worlds");
> >   dv.list(worlds.sort(w => w.file.name).map(w => w.file.link));
> > }
> > if (regions.length > 0) {
> >   dv.header(4, "Regions");
> >   dv.list(regions.sort(r => r.file.name).map(r => r.file.link));
> > }
> > ```
>
> > [!map] 🏙️ Settlements & Organizations
> >
> > ```dataviewjs
> > const settlements = dv.pages('"Campaign/Settlements"');
> > const pois = dv.pages('"Campaign/POIs"');
> > const orgs = dv.pages('"Campaign/Organizations"');
> > const npcs = dv.pages('"Campaign/Characters/NPCs"');
> >
> > if (settlements.length > 0) {
> >   dv.header(4, "Settlements");
> >   dv.list(settlements.sort(s => s.file.name).map(s => {
> >     const loc = s.location ? ` *(${Array.isArray(s.location) ? s.location[0] : s.location})*` : "";
> >     return `${s.file.link}${loc}`;
> >   }));
> > }
> > if (orgs.length > 0) {
> >   dv.header(4, "Organizations");
> >   dv.list(orgs.sort(o => o.file.name).map(o => o.file.link));
> > }
> > dv.paragraph(`**NPCs:** ${npcs.length}  ·  **POIs:** ${pois.length}`);
> > ```

---

## 🎲 Inspiration

> [!column|3 no-t]
>
> > [!dice] 🎲 Dice
> >
> > | Die | Roll |
> > |-----|------|
> > | d4 | `dice: 1d4` |
> > | d6 | `dice: 1d6` |
> > | d8 | `dice: 1d8` |
> > | d10 | `dice: 1d10` |
> > | d12 | `dice: 1d12` |
> > | d20 | `dice: 1d20` |
> > | d100 | `dice: 1d100` |
>
> > [!question] 💡 Session Sparks
> >
> > **NPC Motivation** `dice: 1d12`
> > 1. Survival / Safety
> > 2. Love / Loyalty
> > 3. Greed / Wealth
> > 4. Power / Control
> > 5. Revenge / Justice
> > 6. Faith / Devotion
> > 7. Knowledge / Truth
> > 8. Freedom / Escape
> > 9. Legacy / Fame
> > 10. Fear / Coercion
> > 11. Duty / Obligation
> > 12. Curiosity / Wonder
>
> > [!question] 🪝 Plot Hooks
> >
> > **Hook Type** `dice: 1d8`
> > 1. A stranger arrives with urgent news
> > 2. Something valuable goes missing
> > 3. An old enemy resurfaces
> > 4. A natural disaster disrupts the area
> > 5. Two factions clash — the party is caught between
> > 6. A dying NPC reveals a secret
> > 7. The party is wrongly accused
> > 8. A map / letter / object leads somewhere dangerous

---

## 🛡️ Parties

```dataviewjs
const dashboards = dv.pages('"Campaign/Parties/Party Dashboards"');
if (dashboards.length === 0) {
  dv.paragraph("_No parties yet. Use **New Party** above to get started._");
} else {
  for (const party of dashboards.sort(p => p.file.name)) {
    const members = dv.pages(`"Campaign/Characters/Players/${party.file.name}"`);
    dv.header(4, party.file.link + ` *(${members.length} members)*`);
    if (members.length > 0) {
      dv.list(members.map(m => `${m.file.link}${m.playedBy ? ` — *${m.playedBy}*` : ""}`));
    }
  }
}
```
