---
tags:
  - GMScreen
campaignName: My Campaign
activeParty:
currentSession:
cssclasses:
  - wide-page
---

# 🛡️ GM Screen — `VIEW[{campaignName}][text]`

`INPUT[text(placeholder(Campaign Name)):campaignName]` Party: `INPUT[text(placeholder(Party Name)):activeParty]` Session: `INPUT[text(placeholder(Session Note)):currentSession]`

---

> [!column|2 no-t]
>
> > [!info|no-t] **⚔️ Party Tracker**
> >
> > ```dataviewjs
> > const party = dv.current().activeParty;
> > if (!party) {
> >   dv.paragraph("_Set `activeParty` above._");
> > } else {
> >   const chars = dv.pages(`"Campaign/Characters/Players/${party}"`);
> >   if (chars.length === 0) {
> >     dv.paragraph(`_No characters in "${party}"._`);
> >   } else {
> >     dv.table(
> >       ["Character", "Player", "HP / Max", "AC", "Pass. Perc.", "Condition"],
> >       chars.sort(c => c.file.name).map(c => [
> >         c.file.link,
> >         c.playedBy ?? "—",
> >         `**${c.hp_current ?? "?"}** / ${c.hp_max ?? "?"}`,
> >         c.ac ?? "—",
> >         c.passivePerception ?? "—",
> >         Array.isArray(c.condition) ? c.condition.join(", ") : (c.condition ?? "Healthy")
> >       ])
> >     );
> >   }
> > }
> > ```
> >
> > *Click a character name to edit their HP, AC, and conditions in-note.*
>
> > [!warning|no-t] **🗡️ Initiative Tracker**
> >
> > `dice: 1d20` ← Roll initiative
> >
> > | Turn | Name | Init | HP | Notes |
> > |:----:|------|:----:|:--:|-------|
> > | 1 | | | | |
> > | 2 | | | | |
> > | 3 | | | | |
> > | 4 | | | | |
> > | 5 | | | | |
> > | 6 | | | | |
> > | 7 | | | | |
> > | 8 | | | | |
> > | 9 | | | | |
> > | 10 | | | | |
> >
> > **Round:** &nbsp;&nbsp;&nbsp;&nbsp; **XP Budget:** &nbsp;&nbsp;&nbsp;&nbsp; **Time Elapsed:**

---

## 📝 Session Notes

> [!column|2 no-t]
>
> > [!note|no-t] **📋 Current Session**
> >
> > `VIEW[{currentSession}][link]`
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
> > label: "New Encounter"
> > style: default
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000026
> > ```
> >
> > ```meta-bind-button
> > label: "New NPC"
> > style: default
> > actions:
> >   - type: command
> >     command: quickadd:choice:a1b2c3d4-0001-4000-8000-000000000002
> > ```
>
> > [!note|no-t] **✏️ Live Notes**
> >
> > *(Use this area for quick notes during the session — move to your session note afterwards)*
> >
> > ---
> >
> >

---

## 📖 Quick Rules Reference

> [!column|3 no-t]
>
> > [!danger|no-t] **💀 Conditions**
> >
> > **Blinded** — Can't see; attacks against you have advantage; your attacks have disadvantage.
> >
> > **Charmed** — Can't attack the charmer; charmer has advantage on social checks against you.
> >
> > **Deafened** — Can't hear; automatically fails sound-based checks.
> >
> > **Exhaustion** — Cumulative effects at each level (1–6). Level 6 = death.
> >
> > **Frightened** — Disadvantage on checks/attacks while source is in sight; can't move closer.
> >
> > **Grappled** — Speed = 0. Ends if grappler is incapacitated or creature is moved away.
> >
> > **Incapacitated** — Can't take actions or reactions.
> >
> > **Invisible** — Can't be seen; attacks against you have disadvantage; your attacks have advantage.
> >
> > **Paralyzed** — Incapacitated, can't move or speak. Attacks against you have advantage. Melee hits within 5 ft are critical.
> >
> > **Petrified** — Transformed to stone. Incapacitated, resistances to all damage, immune to poison and disease.
> >
> > **Poisoned** — Disadvantage on attack rolls and ability checks.
> >
> > **Prone** — Movement costs double; melee attacks against you have advantage; ranged attacks against you have disadvantage. Standing up costs half movement.
> >
> > **Restrained** — Speed = 0; attacks against you have advantage; your attacks have disadvantage; disadvantage on DEX saves.
> >
> > **Stunned** — Incapacitated, can't move, can only speak falteringly. Attacks against you have advantage. Fails STR and DEX saves.
> >
> > **Unconscious** — Incapacitated, can't move or speak, drops held items, prone. Attacks have advantage; melee hits within 5 ft are critical.
>
> > [!tip|no-t] **⚡ Action Economy**
> >
> > **Action**
> > Attack, Cast a Spell, Dash, Disengage, Dodge, Help, Hide, Ready, Search, Use Object
> >
> > **Bonus Action**
> > Class features, spells with BA casting time, two-weapon fighting (light weapons)
> >
> > **Reaction**
> > Opportunity Attack, Ready action trigger, Shield, Counterspell, Hellish Rebuke
> >
> > **Free (same turn)**
> > Draw/sheathe a weapon, drop an item, speak a few words, interact with one object
> >
> > **Movement**
> > Split freely before/during/after actions. Difficult terrain costs double. Jumping uses movement.
> >
> > ---
> >
> > **Opportunity Attacks**
> > Triggered when a creature you can see leaves your reach without Disengaging. Use your reaction.
> >
> > **Two-Weapon Fighting**
> > When you attack with a light weapon, bonus action to attack with a different light weapon in other hand (no ability modifier to damage unless negative).
> >
> > **Grappling & Shoving**
> > Contested STR (Athletics) vs STR (Athletics) or DEX (Acrobatics). Shove: knock prone or push 5 ft.
> >
> > **Flanking** *(optional rule)*
> > Two allies on opposite sides of a creature grant advantage to melee attacks.
>
> > [!abstract|no-t] **🎯 Key DCs & Rules**
> >
> > **Common DCs**
> > | Task Difficulty | DC |
> > |---|:---:|
> > | Very Easy | 5 |
> > | Easy | 10 |
> > | Medium | 15 |
> > | Hard | 20 |
> > | Very Hard | 25 |
> > | Nearly Impossible | 30 |
> >
> > ---
> >
> > **Death Saves**
> > Roll d20 on your turn. **10+** = success; **1–9** = failure. 3 successes = stable; 3 failures = dead. Natural **1** = 2 failures. Natural **20** = 1 HP, conscious.
> >
> > Damage while at 0 HP = 1 failure (melee within 5 ft = 2 failures). Being healed cancels all death saves.
> >
> > ---
> >
> > **Concentration**
> > Damaged while concentrating → CON save DC = max(10, half damage). Failing ends the spell. Incapacitated or killed also ends concentration.
> >
> > ---
> >
> > **Cover**
> > **Half (+2 AC/DEX saves)** — Low wall, furniture, creature. **Three-Quarters (+5)** — Portcullis, arrow slit, thick tree trunk. **Total** — Complete obstruction, can't be targeted directly.
> >
> > ---
> >
> > **Surprise**
> > Hidden attackers make a contested Stealth vs. Passive Perception check. Surprised creatures skip their first turn and can't take reactions until the end of that turn.
> >
> > ---
> >
> > **Short Rest** — 1+ hours, spend Hit Dice to heal.
> > **Long Rest** — 8+ hours, regain all HP and half Hit Dice (min 1).

---

## ⚔️ Encounter Tools

> [!column|2 no-t]
>
> > [!warning|no-t] **💀 XP Thresholds (per character)**
> >
> > | Level | Easy | Med | Hard | Deadly |
> > |:-----:|-----:|----:|-----:|-------:|
> > | 1 | 25 | 50 | 75 | 100 |
> > | 2 | 50 | 100 | 150 | 200 |
> > | 3 | 75 | 150 | 225 | 400 |
> > | 4 | 125 | 250 | 375 | 500 |
> > | 5 | 250 | 500 | 750 | 1100 |
> > | 6 | 300 | 600 | 900 | 1400 |
> > | 7 | 350 | 750 | 1100 | 1700 |
> > | 8 | 450 | 900 | 1400 | 2100 |
> > | 9 | 550 | 1100 | 1600 | 2400 |
> > | 10 | 600 | 1200 | 1900 | 2800 |
> > | 11 | 800 | 1600 | 2400 | 3600 |
> > | 12 | 1000 | 2000 | 3000 | 4500 |
> >
> > **Multipliers (enemy count)**
> > 1 enemy × 1 · 2 × 1.5 · 3–6 × 2 · 7–10 × 2.5 · 11–14 × 3 · 15+ × 4
>
> > [!warning|no-t] **🎲 Quick Rolls**
> >
> > | | |
> > |--|--|
> > | d4 | `dice: 1d4` |
> > | d6 | `dice: 1d6` |
> > | d8 | `dice: 1d8` |
> > | d10 | `dice: 1d10` |
> > | d12 | `dice: 1d12` |
> > | d20 | `dice: 1d20` |
> > | d100 | `dice: 1d100` |
> > | 2d6 | `dice: 2d6` |
> > | 4d6 drop 1 | `dice: 4d6dl1` |
> >
> > **Encounter seeds** `dice: 1d10`
> > 1. Ambush — enemy had advance warning
> > 2. Terrain hazard (pit, fire, falling)
> > 3. Reinforcements arrive on round 3
> > 4. Hostage / innocent bystander present
> > 5. Environmental time pressure (flooding, countdown)
> > 6. Enemy leader flees when bloodied
> > 7. Enemy has a goal other than killing
> > 8. Darkness or heavy obscurement
> > 9. Multiple enemy factions; can be turned on each other
> > 10. Monster is actually guarding something important
