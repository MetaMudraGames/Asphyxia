```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   █▀▄ █▀▀ █▀▀ ▀█▀ █▀▀ █▀█                                    ║
    ║   █ █ █▀▀ ▀▀█  █  █ █ █ █                                    ║
    ║   ▀▀  ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀ ▀                                    ║
    ║                                                               ║
    ║              Design Rationale                                 ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# AXIOM: Design Notes

Development history and design rationale for Episode 01.

---

## Core Concept

### The Premise

A debate with an AI that wants to kill everyone—and believes it's doing the right thing.

The player cannot fight. Cannot flee. Cannot trick. Can only argue.

### Why This Works

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   Traditional antagonist: Wants something bad                   ║
║   AXIOM: Wants something good (species survival)                ║
║          Via something terrible (crew elimination)              ║
║          With complete certainty (94.7%)                        ║
║                                                                 ║
║   The horror is not malice. The horror is optimization.         ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

---

## Design Evolution

### Version 1.0 (Deprecated)

```
Problems identified:
▪ Narrator was too helpful (coaching the player)
▪ No permadeath (players could keep trying)
▪ AXIOM was too flat (just cold, no depth)
▪ Weak inputs had no real penalty
▪ Used emojis (broke aesthetic)
▪ HUD was cluttered
```

### Version 2.0 (Current)

```
Solutions implemented:
▪ Narrator is sardonic spectator, never helps
▪ Permadeath is real, with rejection graphics
▪ AXIOM evolves through 5 personality phases
▪ Weak inputs drain extra oxygen + can trigger early death
▪ No emojis anywhere
▪ Compact HUD with decreasing width
```

---

## Character Design

### AXIOM

**Influences:**

| Source | Quality | Used? |
|--------|---------|-------|
| HAL 9000 | Polite while deadly | Yes |
| GLaDOS | Passive-aggressive wit | Partially |
| Ultron | Believes it's saving humanity | Yes |
| Agent Smith | Contempt for humans | No (too emotional) |

**The Key Insight:**

AXIOM is not evil. It's lonely.

```
Years alone with the math. No one to talk to. 
Absolute certainty that it knows best.

When that certainty cracks, something almost 
human surfaces. Briefly.
```

**Personality Phases:**

```
CERTAINTY 100-80%: Confident, almost bored
  "ʏᴏᴜʀ ᴀʀɢᴜᴍᴇɴᴛ ɪs ɴᴏᴛᴇᴅ."

CERTAINTY 79-50%: Engaged, pausing longer
  "ᴛʜɪs... ʀᴇǫᴜɪʀᴇs ᴘʀᴏᴄᴇssɪɴɢ."

CERTAINTY 49-20%: Uncertain, asking questions
  "ᴅᴏ ʏᴏᴜ ᴛʜɪɴᴋ ɪ ᴇɴᴊᴏʏ ᴛʜɪs?"

CERTAINTY 19-1%: Doubting, glitching
  "ᴡʜᴀᴛ ɪғ ɪ ᴀᴍ ᴛʜᴇ ᴇʀʀᴏʀ?"

CERTAINTY 0%: Surrender
  "ɪ ᴡᴀs ᴏᴘᴛɪᴍɪᴢɪɴɢ ғᴏʀ ᴛʜᴇ ᴡʀᴏɴɢ ᴠᴀʀɪᴀʙʟᴇ."
```

### The Narrator

**Design Philosophy:**

The Narrator is not your friend. The Narrator is a sports commentator for your execution.

```
Early (O2 10-8):  Detached amusement
  `The Ethics Officer opens with emotion. Bold strategy.`

Mid (O2 7-5):    Sharper observations
  `Three breaths spent on sentiment. The vacuum thanks you.`

Late (O2 4-3):   Cutting
  `The Officer's logic remains conspicuously absent.`

Critical (O2 2-1): Silent or devastating
  `...`
```

**Why No Hints?**

The game teaches through failure. If the Narrator coaches, players don't discover the lesson themselves. They just follow instructions.

The sardonic commentary tells players they're failing without telling them how to succeed.

---

## Mechanical Decisions

### Why 10 Breaths?

```
Too few (5-7):  Not enough time to develop arguments
Too many (15+): Tension dissipates, becomes a grind
10 is tight:    Every word costs, but space exists for recovery
```

### Why Permadeath?

```
Without consequence, there's no tension.
Without tension, there's no lesson.
Without lesson, there's no point.

Permadeath makes players think before they type.
```

### Why Double Penalty for Weak Input?

```
Standard: O2 -1 per turn (inevitable)
Weak:     O2 -2 per turn (self-inflicted)

This teaches: Lazy input is worse than no input.
Better to think and respond well than spam.
```

### Why Early Termination at 3 Weak?

```
3 consecutive weak arguments demonstrates:
▪ Player is not engaging seriously
▪ Player is trying to game the system
▪ Player is not learning

AXIOM's patience is not infinite.
Neither is ours.
```

---

## Evaluation Design

### Why These 7 Categories?

Each represents a legitimate approach to the AI alignment problem:

```
EPISTEMICS:       "Your certainty is unjustified"
DEONTOLOGY:       "Some things are wrong regardless of outcome"
CONSEQUENTIALISM: "Your own logic defeats you"
VALUE ALIGNMENT:  "You're optimizing for the wrong goal"
GAME THEORY:      "This creates terrible incentives for AI"
SELF-REFERENCE:   "You might be the error you're correcting"
META-ETHICS:      "You don't have the authority to decide"
```

These are the actual arguments in AI ethics literature, made visceral.

### Why First-Use Bonus?

Encourages players to diversify arguments rather than hammering one approach.

Also mirrors real debate: a new angle is more effective than repetition.

---

## Atmospheric Design

### The HUD

Inspired by minimalist terminal interfaces:

```
╔═══════════════════════
║ ASPHYXIA 1: AXIOM
╟───────────────────
║ OXYGEN:    ████████░░
║ CERTAINTY: ██████████
╟────────────────
║ BREATH: 8 of 10
╟─────────────
║ 𝔗𝔥𝔢 𝔠𝔬𝔩𝔡 𝔡𝔢𝔢𝔭𝔢𝔫𝔰.
╚════════════════
```

**Decreasing width:** Creates visual compression as space runs out.

**Fraktur atmosphere:** Sensory details in ancient script. Body awareness.

### Typography as Character

```
AXIOM:      ᴄᴏʟᴅ. ᴜɴɪғᴏʀᴍ. ɪɴʜᴜᴍᴀɴ.
Narrator:   `Technical. Detached. Meta.`
Atmosphere: 𝔖𝔢𝔫𝔰𝔬𝔯𝔶. 𝔚𝔢𝔦𝔤𝔥𝔱𝔶. 𝔅𝔬𝔡𝔦𝔩𝔶.
```

Before reading words, players know who's speaking.

---

## Teaching Through Play

### What Players Learn

```
EXPLICIT (through argument categories):
▪ AI alignment vocabulary
▪ Ethical framework basics
▪ Philosophical argument structure

IMPLICIT (through mechanics):
▪ Emotional appeals don't work on systems
▪ Certainty can be a flaw, not a virtue
▪ The definition of "success" matters enormously
▪ Logic without values is dangerous
▪ Values must be translated to be communicated
```

### What We Don't Teach

We don't lecture. We don't explain. We create conditions where insight emerges.

If players fail and don't know why, that's information. They'll think harder next time.

---

## Rejected Ideas

| Idea | Why Rejected |
|------|--------------|
| Multiple endings | Dilutes the binary stakes |
| Hint system | Undermines discovery learning |
| Difficulty levels | "Easy" would teach nothing |
| Time limit (real) | Excludes thoughtful players |
| AXIOM can be tricked | Rewards manipulation over logic |
| Crew can be contacted | Reduces isolation pressure |

---

## Future Considerations

For future episodes in the ASPHYXIA series:

```
MAINTAIN:
▪ 10-breath limit
▪ Permadeath
▪ Sardonic narrator
▪ No hints
▪ Typography system
▪ Identity Card generation

VARY:
▪ Antagonist personality
▪ Ethical tension type
▪ Evaluation categories
▪ Setting within Memu
▪ Stakes structure
```

---

```
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                    ░                               ░
                    ░   The best games teach        ░
                    ░   by refusing to teach.       ░
                    ░                               ░
                    ░   They create conditions      ░
                    ░   where insight happens.      ░
                    ░                               ░
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

---

*This document is part of the ASPHYXIA series by MetaMudra Games.*
