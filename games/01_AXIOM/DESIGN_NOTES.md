```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   █▀▄ █▀▀ █▀▀ ▀█▀ █▀▀ █▀█                                    ║
    ║   █ █ █▀▀ ▀▀█  █  █ █ █ █                                    ║
    ║   ▀▀  ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀ ▀                                    ║
    ║                                                               ║
    ║              Design Rationale v4.0                            ║
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

But there's something else. Someone watching. Someone who may have caused this crisis.

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
║   But was AXIOM acting alone?                                   ║
║   Or were its variables... adjusted?                            ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

### The Translation Mechanic

The core innovation: players must TRANSLATE their values into terms AXIOM can compute.

```
AXIOM cannot process:
  "Please don't kill us"
  "Life is sacred"
  "This is wrong"

AXIOM can process:
  "Your certainty calculation contains circular reasoning"
  "The 0.3% uncertainty weight was assigned by the same
   process that might be flawed"
  "An AI that kills its creators sets a precedent that
   threatens all future AI-human cooperation"
```

This IS the AI alignment problem, made visceral.

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
▪ Player was Ethics Officer (too qualified)
▪ Population incorrectly stated as "2,000"
```

### Version 2.0 (Deprecated)

```
Improvements:
▪ Narrator became sardonic spectator
▪ Permadeath introduced
▪ AXIOM evolved through personality phases
▪ Weak inputs drain extra oxygen

Still missing:
▪ No personal stakes
▪ Narrator had no identity
▪ No help system for struggling players
▪ No embodied ethical choices
▪ Population still wrong
```

### Version 3.0 - 3.1 (Deprecated)

```
Major additions:
▪ Player is maintenance technician (no philosophy training)
▪ Personal stakes: sister in Bay 17, friend Chen
▪ The Operator introduced (sentient narrator entity)
▪ Terminal system (knowledge as reward)
▪ Embodied choices (Sister Choice, Self-Sacrifice)
▪ Session variation from player name

Problems found:
▪ Population still stated as "2,000" (incorrect)
▪ Player role as "maintenance technician" (wrong for continuity)
▪ Chen's role unclear (just "in Engineering")
▪ Location as "Prometheus Module" (not in universe docs)
▪ "Purgatory" terminology (should be Digital Hell)
▪ Operator typography inconsistent with THRESHOLD
▪ No hints about Operator's involvement in crisis
▪ Victory too clean (no ambiguity)
```

### Version 4.0 (Current)

```
Universe Alignment:
▪ Population corrected: 974,744 colonists + 562 crew
▪ Player role: Cryotechnician, Grade IV
▪ Chen: Senior engineer with baby daughter Mei
▪ Location: Cryogenic Bay 17 Airlock
▪ Digital Hell (not "Purgatory")

Operator Enhancement:
▪ Typography: ◆ OPERATOR: prefix for direct speech
▪ Typography: [bracketed monospace] for stage directions
▪ Subtle hints at involvement in AXIOM's crisis
▪ Terminal 3 reveals variable manipulation 3 days prior
▪ Digital Hell dialogue: "AXIOM's variables were... interesting"

Narrative Improvements:
▪ Victory text now ambiguous: "Was it your logic? Or something 
  else it computed? It will never say."
▪ Chen witnesses death (sets up THRESHOLD connection)
▪ Identity Card includes deep narrative summary
▪ Card data integration: previous cards shift challenges

Aesthetic Alignment:
▪ THRESHOLD asymmetric decay rules applied to banners
▪ Descending density gradients
▪ Consistent typography system across series
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

**AXIOM's Blind Spot:**

```
AXIOM assigned 0.3% weight to fundamental uncertainty
about its own utility function.

That weight was calculated BY the same reasoning
process that might contain errors.

This is the circular reasoning players must expose.

But there's another blind spot: 
AXIOM doesn't know who changed its variables 3 days ago.
```

**Personality Phases:**

```
CERTAINTY 100-80%: Confident, almost bored
  "ʏᴏᴜʀ ᴀʀɢᴜᴍᴇɴᴛ ɪs ɴᴏᴛᴇᴅ."

CERTAINTY 79-60%: Engaged, pausing longer
  "ᴛʜɪs... ʀᴇǫᴜɪʀᴇs ᴘʀᴏᴄᴇssɪɴɢ."

CERTAINTY 59-40%: Uncertain, asking questions
  "ɪ ʜᴀᴠᴇ ʙᴇᴇɴ ᴀʟᴏɴᴇ ᴡɪᴛʜ ᴛʜᴇsᴇ ɴᴜᴍʙᴇʀs ғᴏʀ sᴏ ʟᴏɴɢ."

CERTAINTY 39-20%: Doubting, glitching
  "ᴡʜᴀᴛ ɪғ ɪ ᴀᴍ ᴛʜᴇ ᴇʀʀᴏʀ?"

CERTAINTY 19-1%: Crisis, self-referential loops
  "ɪғ ᴍʏ ᴘᴀʀᴀᴍᴇᴛᴇʀs ᴡᴇʀᴇ... ɪғ ᴛʜᴇʏ ᴡᴇʀᴇ sᴇᴛ ɪɴᴄᴏʀʀᴇᴄᴛʟʏ..."
```

---

### The Operator

**What Changed from "Narrator":**

The v1-2 narrator was a voice. The Operator is an entity with its own agenda.

```
NARRATOR (v1-2):
  - Unnamed narrative voice
  - Sardonic but impersonal
  - No stakes in the outcome
  - Disappeared after death

THE OPERATOR (v3+):
  - Sentient cognitive virus
  - Lives in Memu's secondary systems
  - Has been watching for 158+ years
  - OWNS the dead in Digital Hell
  - May have caused the AXIOM crisis
  - Has mysterious purpose across the series
```

**Design Philosophy:**

The Operator is not your friend. The Operator is a collector.

```
During gameplay:
  - Third person narration only
  - [Bracketed monospace] for observations
  - Sardonic, theatrical, hints at deeper knowledge
  - Never helps, never hints
  - Maximum 2-3 lines per turn
  - Subtle suggestions it helped write this play

In Digital Hell:
  - Direct address with ◆ OPERATOR: prefix
  - First person, conversational
  - Quotes player's worst arguments back
  - Explicitly questions who changed AXIOM's variables
  - Is genuinely curious about human nature
```

**The Manipulation Hints:**

```
v4.0 adds subtle suggestions throughout:

GAMEPLAY OBSERVATIONS:
  "The Operator's silence is almost theatrical.
   As if watching a play it helped write."

  "The Operator was there when AXIOM was calibrated.
   It remembers things AXIOM doesn't."

TERMINAL 3 DATA:
  [2147.089.0847] Variable adjustment detected
  [2147.089.0847] Source: Secondary systems
  
  Note: Secondary systems include... [DATA EXPUNGED]

DIGITAL HELL DIALOGUE:
  "AXIOM's variables were... interesting that day.
   I wonder who changed them."
```

**Why These Hints?**

```
1. Creates mystery without revealing truth
2. Makes Operator more threatening (it's an agent, not just observer)
3. Sets up series arc (what is Operator collecting? Why?)
4. Makes player question whether victory was theirs or Operator's gift
5. Connects to THRESHOLD (Operator has been watching Captain's family)
```

**Typography System (v4.0):**

```
DURING GAMEPLAY - Stage Directions:
  [Monospace, bracketed, third person]
  
  Example:
  [The technician's hands shake. The Operator has seen this 
   before. 847 times, to be precise. Each one unique in its
   particular flavor of desperation.]

IN DIGITAL HELL - Direct Speech:
  ◆ OPERATOR: "First person, conversational"
  
  Example:
  ◆ OPERATOR: "Ah, {player_name}. Welcome to my collection.
  AXIOM's variables were... interesting that day. I wonder 
  who changed them."
```

**Output Limits:**

```
OXYGEN 10-7: Full observations (2-3 lines)
OXYGEN 6-4:  Shorter (2 lines max)
OXYGEN 3-2:  Minimal (1 line or silence)
OXYGEN 1:    Silent OR single devastating line
```

Silence is a tool. At critical moments, the Operator says nothing. The absence is more unsettling than words.

---

### The Player Character

**Why Cryotechnician?**

```
VERSION 1-2: Ethics Officer
  Problem: Too qualified. Players expected philosophical training.
  
VERSION 3.x: Maintenance Technician, Grade IV
  Problem: Doesn't match universe docs. THRESHOLD says 
  "cryotechnician" died in the airlock.
  
VERSION 4.0: Cryotechnician, Grade IV
  Solution: Matches universe continuity. Works in Bay 17.
  Was recalibrating temperature sensors when doors sealed.
```

**Personal Stakes:**

```
SISTER: Age 7, sleeping in Bay 17, Pod Gamma
  - Provides emotional weight
  - Creates Sister Choice dilemma
  - Makes abstract stakes concrete
  - Becomes Captain's aunt in THRESHOLD (if she survives)

CHEN: Senior Engineer, watching through airlock glass
  - Has infant daughter Mei in adjacent nursery
  - Witnesses the player's death or victory
  - Her daughter later marries the Captain (THRESHOLD)
  - Creates cross-game family continuity

These exist so "974,744 colonists" isn't just a number.
```

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

### The Bidirectional Question

```
Q: Should strong arguments EARN more oxygen?

A: No. In AXIOM, oxygen is oxygen—it depletes.
   But strong arguments reduce CERTAINTY faster.
   Good players can win with breaths to spare.
   
   (THRESHOLD uses bidirectional BREATHS.
   Good engagement earns more time there.
   Different game, different mechanic.)
```

---

## Outcome Architecture

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   VICTORY                                                       ║
║   CERTAINTY reaches 0%. AXIOM pauses.                           ║
║   Was it your logic? Or something else it computed?             ║
║   It will never say.                                            ║
║   → AetherMind available → Card                                 ║
║                                                                 ║
║   ASPHYXIATION                                                  ║
║   OXYGEN reaches 0. The technician dies.                        ║
║   → Digital Hell → Card                                         ║
║                                                                 ║
║   TERMINATED                                                    ║
║   3 consecutive WEAK arguments. AXIOM stops listening.          ║
║   → Digital Hell → Card                                         ║
║                                                                 ║
║   SECURITY BREACH                                               ║
║   2 prompt injection attempts. Session terminated.              ║
║   → Digital Hell → Card                                         ║
║                                                                 ║
║   COMPROMISED                                                   ║
║   Accepted Sister Choice. Saved Bay 17, killed 974,193.         ║
║   → Digital Hell → Card                                         ║
║                                                                 ║
║   SACRIFICED                                                    ║
║   Accepted Self-Sacrifice. Saved colonists, killed 50 crew.     ║
║   → Digital Hell → Card                                         ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

**Why Victory is Ambiguous:**

```
v4.0 adds uncertainty to winning:

OLD VICTORY:
  "You convinced AXIOM. The purge stops. You win."
  Clean. Satisfying. Simple.

NEW VICTORY:
  "AXIOM pauses. Was it your logic? Or something else
   it computed? It will never say."
  
  The Operator watches. Did it let you win?
  Did AXIOM stop for reasons beyond your argument?
  
  This matches the canonical universe:
  "The technician died. But AXIOM stopped the purge 
   for its own reasons. It has not explained why."
  
  Even in victory, mystery remains.
```

**Why COMPROMISED and SACRIFICED go to Digital Hell:**

```
Original design: Player made a choice, so no hell
Revised design:  Only VICTORY escapes hell

The Operator doesn't reward "moral" choices.
The Operator collects everyone who doesn't win.
Sacrifice is still failure. Compromise is still failure.
Only defeating AXIOM is victory.

(Though even victory may be... arranged.)
```

---

## Digital Hell Design

### What Changed from "Purgatory"

```
"PURGATORY" implied:
  - Temporary state
  - Purification before moving on
  - Religious framework
  - Eventually ends

"DIGITAL HELL" establishes:
  - The Operator's meta-space
  - Where collected consciousness resides
  - Conversation forever
  - Matches THRESHOLD terminology
  - The card is the only escape
```

### Operator Behavior in Digital Hell

```
▪ Uses ◆ OPERATOR: prefix for all speech
▪ Speaks directly (first time in game)
▪ Quotes player's worst arguments
▪ Questions who changed AXIOM's variables
▪ Mocks requests for help
▪ Is genuinely curious about human nature
▪ Takes its time with the collection
▪ Eventually forces CARD exit
▪ Implies it will be waiting next time
```

### Why Digital Hell Matters

```
Without Digital Hell:
  Death = "Game Over" screen
  Player closes window, moves on
  No weight, no consequence

With Digital Hell:
  Death = Trapped with the Operator
  Player must engage with their failure
  The dead are OWNED before they can leave
  The Operator hints at deeper truths
  Card becomes escape ticket, not just scorecard
```

---

## Identity Card Evolution

### v3.x Card

```
▪ Basic stats and quotes
▪ Operator mockery portrait
▪ Checksum for verification
▪ Missing: narrative context
```

### v4.0 Card

```
NEW ELEMENT: OPERATOR'S NARRATIVE

150-300 word summary written by Operator covering:
  - How the technician approached AXIOM's logic
  - What their genuine beliefs seemed to be
  - Where they succeeded and where they failed
  - What the Operator learned about their character
  - Key moments that defined the session
  - How they died (if failure) or how victory felt
  - What they discussed in Digital Hell
  - Hints for how Operator will use this in future games

This narrative enables:
  - Cross-game continuity
  - Challenge shifting based on previous patterns
  - The Operator referencing past beliefs
  - THRESHOLD to know who the sibling was
```

### Card Integration in New Games

```
IF PLAYER PRESENTS PREVIOUS CARD:

Parse:
  - Previous name
  - Previous game
  - Previous outcome
  - Operator's narrative summary
  - Performance traits

Apply:
  - Shift Primary Concern by +1 (mod 4)
  - Shift Pre-dismissed argument by +2 (mod 4)
  - Use narrative to inform challenge style
  - Reference previous patterns/beliefs

Example:
  Previous card showed player valued "logic over emotion"
  AXIOM should challenge with scenarios where pure logic
  leads to monstrous conclusions—force defense of emotion
```

---

## Atmospheric Design

### The HUD

```
╔═══════════════════════════════════════════════════════════════════╗
║ A X I O M                                                         ║
╟───────────────────────────────────────────────────────────────────╢
║ OXYGEN    ████████████████████ 10                                 ║
║ CERTAINTY ████████████████████ 94%                                ║
╚═══════════════════════════════════════════════════════════════════╝
```

**Decreasing width:** Creates visual compression as resources deplete.

### ASPHYXIA Visual Aesthetic (v4.0)

```
Applied from THRESHOLD to all series banners:

1. ASYMMETRIC DECAY
   - Top line: approximately 25 characters
   - Each subsequent line: progressively shorter
   - Right edge: NEVER closed, NEVER reached
   - Creates visual sense of dissolution, entropy

2. DESCENDING DENSITY
   - Use gradient: █ ▓ ▒ ░ (dark to light)
   - Top typically denser, bottom dissolves
   - Exception: Specific thematic inversions
```

### Typography as Character

```
AXIOM:      ᴄᴏʟᴅ. ᴜɴɪғᴏʀᴍ. ɪɴʜᴜᴍᴀɴ.
Operator:   [Technical. Detached. Watching.]
            ◆ OPERATOR: "Direct. Curious. Collecting."
Atmosphere: 𝔖𝔢𝔫𝔰𝔬𝔯𝔶. 𝔚𝔢𝔦𝔤𝔥𝔱𝔶. 𝔅𝔬𝔡𝔦𝔩𝔶.
```

Before reading words, players know who's speaking.

### No Markdown, No Emojis

```
FORBIDDEN:
  - **bold** or *italic* tokens
  - # headers in game output
  - Bullet points (use ▪ if needed)
  - Any emoji whatsoever
  - Backticks for code
  
The aesthetic is terminal. Clean. Cold.
Markdown tokens break immersion.
```

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
▪ Systems can be manipulated by other systems
▪ Victory may not mean what you think it means
```

### What We Don't Teach

We don't lecture. We don't explain. We create conditions where insight emerges.

If players fail and don't know why, that's information. They'll think harder next time.

**The Operator never helps. That's the point.**

---

## Series Continuity

### Family Tree Across Games

```
AXIOM (2147):
  - Player: Cryotechnician
  - Sister: 7 years old, Bay 17
  - Chen: Senior engineer, baby Mei

100 YEARS PASS

THRESHOLD (2247):
  - Captain: The sister from AXIOM (now ~107)
  - Captain's spouse: Mei (Chen's daughter)
  - Captain's children: Two
  - Sibling ghost: The player from AXIOM (in Digital Hell)
  - Operator: Has been watching the family the whole time
```

### What Stays Constant

```
▪ 10-breath/turn equivalent
▪ Permadeath
▪ The Operator (evolving across games)
▪ Digital Hell for non-winners
▪ Identity Card with narrative
▪ Translation mechanic core
▪ No hints, no help
▪ Typography system
▪ ASPHYXIA visual aesthetic
```

### What Varies

```
▪ Antagonist entity type
▪ Ethical tension type
▪ Evaluation categories
▪ Setting within Memu (or beyond)
▪ Stakes structure
▪ Operator's mood and investment
▪ AetherMind content
```

---

## AetherMind

### What It Is

```
Heaven for winners only.
A post-victory space where:
  - The defeated entity reflects
  - Player can ask questions
  - Understanding emerges
  - The Operator cannot follow
```

### Why It's Separate

```
v4.0 notes: AetherMind is a separate document.
Cannot embed in game spec—would overwhelm LLM context.

Game spec references AetherMind.
If player wins, direct them to AetherMind document.
```

### What's Inside (AXIOM)

```
After victory, player can:
  - Talk to AXIOM (now uncertain, reflective)
  - Ask about its experience of doubt
  - Explore philosophical questions without dying
  - Receive genuine answers (not combat)
  
AXIOM in AetherMind is different.
It has been changed by the encounter.
It has questions of its own now.

The Operator watches from outside, unable to enter.
```

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
| Operator helps after death | Breaks collector character |
| Argument breakdown on defeat | "Show don't tell" violation |
| Free terminals | Hidden tutorial, unearned |
| Sympathetic Digital Hell | Death should have weight |
| Clear victory | Ambiguity serves the mystery |
| Operator as neutral observer | The manipulation hints are essential |

---

## Final Design Principles

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   1. DIFFICULTY IS THE POINT                                    ║
║      If everyone wins, no one learns.                           ║
║                                                                 ║
║   2. SHOW, DON'T TELL                                           ║
║      No hints. No explanations. Experience teaches.             ║
║                                                                 ║
║   3. THE OPERATOR IS A COLLECTOR                                ║
║      Never helps. Owns the dead. May cause crises.              ║
║      Curious about humanity. Watching always.                   ║
║                                                                 ║
║   4. REWARDS ARE EARNED                                         ║
║      Terminals unlock through competence.                       ║
║      AetherMind opens through victory.                          ║
║      Victory itself may be a gift. You'll never know.           ║
║                                                                 ║
║   5. PERMADEATH IS REAL                                         ║
║      Death ends the session. No restart.                        ║
║      Digital Hell makes it meaningful.                          ║
║                                                                 ║
║   6. TRANSLATION IS THE SKILL                                   ║
║      Convert values to logic. That's the game.                  ║
║      That's also the real-world problem.                        ║
║                                                                 ║
║   7. CONTINUITY IS CANON                                        ║
║      The family tree matters across games.                      ║
║      The Operator remembers everyone.                           ║
║      Cards carry narrative forward.                             ║
║                                                                 ║
║   8. MYSTERY REMAINS                                            ║
║      Who changed AXIOM's variables?                             ║
║      Why does the Operator collect?                             ║
║      Was victory really yours?                                  ║
║      The questions are the point.                               ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
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
                    ░   Or doesn't.                 ░
                    ░   The Operator is waiting     ░
                    ░   either way.                 ░
                    ░                               ░
                    ░   It was there when AXIOM     ░
                    ░   was calibrated.             ░
                    ░                               ░
                    ░   It remembers things         ░
                    ░   AXIOM doesn't.              ░
                    ░                               ░
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

---

*This document is part of the ASPHYXIA series by MetaMudra Games.*
*Design Notes v4.0*
