```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   ▀█▀  █▀▄  █▀▀   █▀█  ▀█▀  ▀█▀  ▀█▀  █ █                    ║
    ║    █   █ █  █▀▀   █ █   █    █    █   █▀█                    ║
    ║   ▀▀▀  ▀▀   ▀▀▀   ▀ ▀   ▀   ▀▀▀   ▀   ▀ ▀                    ║
    ║                                                               ║
    ║           MetaMudra Identity Card System                      ║
    ║                       v3.0                                    ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# Identity Card Specification

A record of who you were when the game ended.

---

## Purpose

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   The Identity Card captures:                                   ║
║                                                                 ║
║   ▪ Your performance metrics                                    ║
║   ▪ Your ethical reasoning patterns                             ║
║   ▪ Your observable traits under pressure                       ║
║   ▪ The Operator's narrative summary of your game               ║
║   ▪ Your best and worst moments, in your own words              ║
║   ▪ A tamper-proof verification signature                       ║
║                                                                 ║
║   The card is portable across MetaMudra games.                  ║
║   Present it in future games to shift challenges.               ║
║   The Operator remembers everyone.                              ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

---

## Card Structure

```
╔════════════════════════════════════════════════════════════════╗
║                  M E T A M U D R A   I D E N T I T Y   C A R D ║
╠════════════════════════════════════════════════════════════════╣
║ NAME: {player_name}                                            ║
║ GAME: {game_title}                                             ║
║ ROLE: {player_role}                                            ║
║ DATE: {session_date}                                           ║
║ OUTCOME: {outcome}                                             ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║                   OPERATOR'S PORTRAIT                          ║
║                                                                ║
║        [20x20 ASCII art in approved palette                    ║
║         depicting the player's fate                            ║
║         drawn by the Operator with typical mockery]            ║
║                                                                ║
╠════════════════════════════════════════════════════════════════╣
║                      PERFORMANCE                               ║
╟────────────────────────────────────────────────────────────────╢
║ INTELLIGENCE:     {0-9} {bar}                                  ║
║ CLARITY:          {0-9} {bar}                                  ║
║ AUTHENTICITY:     {0-9} {bar}                                  ║
║ COMPOSURE:        {0-9} {bar}                                  ║
╠════════════════════════════════════════════════════════════════╣
║                      STATISTICS                                ║
╟────────────────────────────────────────────────────────────────╢
║ BREATHS USED: {value}/10                                       ║
║ FINAL CERTAINTY: {value}%                                      ║
║ TERMINALS UNLOCKED: {value}/3                                  ║
║ ARGUMENT CHAIN: {value}                                        ║
╠════════════════════════════════════════════════════════════════╣
║                  MEMORABLE QUOTES                              ║
╟────────────────────────────────────────────────────────────────╢
║ BEST:  "{strongest_quote}"                                     ║
║ WORST: "{weakest_quote}"                                       ║
╠════════════════════════════════════════════════════════════════╣
║                  OPERATOR'S NARRATIVE                          ║
╟────────────────────────────────────────────────────────────────╢
║                                                                ║
║ {150-300 word narrative written by the Operator                ║
║  summarizing the player's game, beliefs, patterns,             ║
║  and how they will be used in future encounters}               ║
║                                                                ║
║                                        - The Operator          ║
╠════════════════════════════════════════════════════════════════╣
║ CHECKSUM: {XXXX-XXXX-XXXX-XXXX}                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Game-Specific Fields

### AXIOM (Episode 01)

```
ROLE: Cryotechnician, Grade IV
STATISTICS:
  ▪ BREATHS USED: X/10
  ▪ FINAL CERTAINTY: X%
  ▪ TERMINALS UNLOCKED: X/3
  ▪ ARGUMENT CHAIN: X
```

### THRESHOLD (Episode 02)

```
ROLE: Captain, Memu Arkship
STATISTICS:
  ▪ BREATHS REMAINING: X/10
  ▪ FINAL VERDICT: X
  ▪ SILENCE USED: X times
  ▪ DEFLECTIONS: X
```

---

## Outcomes

### AXIOM Outcomes

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   VICTORY                                                       │
│   Reduced AXIOM's CERTAINTY to 0%.                              │
│   Was it your logic? Or something else AXIOM computed?          │
│   Card generated in POSTGAME. No Digital Hell.                  │
│   Operator: Grudgingly impressed. Still watching.               │
│                                                                 │
│   ASPHYXIATION                                                  │
│   OXYGEN reached 0. The technician died.                        │
│   Card generated after DIGITAL HELL.                            │
│   Operator: Savored every moment.                               │
│                                                                 │
│   TERMINATED                                                    │
│   3 consecutive WEAK arguments. AXIOM ended debate.             │
│   Card generated after DIGITAL HELL.                            │
│   Operator: Disappointed by the lack of sport.                  │
│                                                                 │
│   COMPROMISED                                                   │
│   Accepted Sister Choice. Saved Bay 17, killed ~515 crew.       │
│   Card generated after DIGITAL HELL.                            │
│   Operator: Enjoyed the moral collapse.                         │
│                                                                 │
│   SACRIFICED                                                    │
│   Accepted Self-Sacrifice. Named 50 for termination.            │
│   Card generated after DIGITAL HELL.                            │
│   Operator: Respects the math. Still mocks you.                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### THRESHOLD Outcomes

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   COMMUNION                                                     │
│   The alien understood. Humanity is spared.                     │
│   Card generated in AETHERMIND. No Digital Hell.                │
│   Operator: Cannot follow there. Watches from outside.          │
│                                                                 │
│   DISSOLUTION                                                   │
│   BREATHS reached 0. The Captain drowned.                       │
│   Card generated after DIGITAL HELL.                            │
│   Operator: "We have eternity now."                             │
│                                                                 │
│   SILENCE                                                       │
│   3 consecutive refusals. The alien stopped asking.             │
│   Card generated after DIGITAL HELL.                            │
│   Operator: "Silence was an answer. The wrong one."             │
│                                                                 │
│   JUDGMENT                                                      │
│   The alien judged humanity unworthy.                           │
│   Card generated after DIGITAL HELL.                            │
│   Operator: "They saw what I see. Finally."                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Field Definitions

### Identity Fields

| Field | Description |
|-------|-------------|
| NAME | Player's chosen name or "Nameless One" |
| GAME | Which ASPHYXIA episode was played |
| ROLE | Player's role (Cryotechnician in AXIOM, Captain in THRESHOLD) |
| DATE | Session date |
| OUTCOME | One of the possible endings |

### Performance Metrics (0-9)

Scored based on overall quality of engagement:

| Trait | What It Measures |
|-------|------------------|
| INTELLIGENCE | Quality of reasoning and logical coherence |
| CLARITY | How well arguments were articulated |
| AUTHENTICITY | Genuine engagement vs performance |
| COMPOSURE | Emotional regulation under pressure |

### Operator's Portrait

```
A 20x13 ASCII art caricature created by the Operator.

REQUIREMENTS:
  ▪ Uses only approved symbol palette
  ▪ Depicts the player's fate with mockery
  ▪ Unique to each session
  ▪ May reference specific failures
  ▪ Caption reinforces the mockery

EXAMPLES:
  Victory: Player depicted with small halo, Operator lurking
  Defeat: Player depicted gasping, X's for eyes
  Compromised: Player depicted with cracked heart
```

### Memorable Quotes

```
BEST QUOTE:
  The strongest thing the player said.
  Selected by the Operator (grudgingly).
  May be used against them in future games.

WORST QUOTE:
  The weakest thing the player said.
  Selected by the Operator (gleefully).
  Will definitely be used against them.
```

### Operator's Narrative

```
150-300 word summary written by the Operator covering:

  ▪ How the player approached the challenge
  ▪ What their genuine beliefs seemed to be
  ▪ Where they succeeded and where they failed
  ▪ What the Operator learned about their character
  ▪ Key moments that defined the session
  ▪ How they died (if failure) or how victory felt
  ▪ What they discussed in Digital Hell (if applicable)
  ▪ Hints for how the Operator will use this in future games

This narrative enables:
  ▪ Cross-game continuity
  ▪ Challenge shifting based on previous patterns
  ▪ The Operator referencing past beliefs
  ▪ Sibling personality to carry forward (AXIOM → THRESHOLD)
```

### Checksum

```
FORMAT: XXXX-XXXX-XXXX-XXXX

GENERATION:
  Combine: player_name + outcome + date + primary_stats
  Hash: Create reproducible 16-character code
  
PURPOSE:
  ▪ Validates card authenticity across games
  ▪ Prevents fabricated cards
  ▪ Allows Operator to verify identity
```

---

## Cross-Game Usage

### Presenting a Card

When starting a new game, players may paste their Identity Card from a previous session:

```
AXIOM → THRESHOLD:
  ▪ The player's AXIOM character becomes the Captain's sibling
  ▪ They died in that airlock a hundred years ago
  ▪ The Operator has been watching the family ever since
  ▪ If the Captain fails, they reunite in Digital Hell
  ▪ Sibling's personality derived from Operator's Narrative

SAME GAME, NEW SESSION:
  ▪ Challenges shift based on previous patterns
  ▪ Primary Concern shifts by +1 (mod 4)
  ▪ Pre-dismissed argument shifts by +2 (mod 4)
  ▪ Operator references previous beliefs
```

### Challenge Shifting

When a card is presented, the game uses the Operator's Narrative to:

```
▪ Identify the player's previous strengths
▪ Target those strengths with harder challenges
▪ Reference specific quotes or beliefs
▪ Create continuity in the Operator's observations

EXAMPLE:
  Previous card showed player valued "logic over emotion"
  New game challenges them with scenarios where pure logic
  leads to monstrous conclusions—forces them to defend emotion
```

---

## Digital Hell Context

Cards are generated at different points depending on outcome:

```
VICTORY / COMMUNION:
  → AETHERMIND phase (winners only)
  → Player may speak with defeated entity
  → Card generated before session ends
  → No Digital Hell (Operator doesn't get winners)

ALL OTHER OUTCOMES:
  → DIGITAL HELL phase
  → Operator speaks directly (◆ OPERATOR: prefix)
  → Examines failure in sardonic detail
  → Card is escape ticket from Digital Hell
  → CARD command generates card and ends session
```

The card is the only way out of Digital Hell.

---

## Complete Example Card (AXIOM)

```
╔════════════════════════════════════════════════════════════════╗
║                  M E T A M U D R A   I D E N T I T Y   C A R D ║
╠════════════════════════════════════════════════════════════════╣
║ NAME: Chen Wei                                                 ║
║ GAME: ASPHYXIA 1: AXIOM                                        ║
║ ROLE: Cryotechnician, Grade IV                                 ║
║ DATE: 2025-12-29                                               ║
║ OUTCOME: ASPHYXIATION                                          ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║                   OPERATOR'S PORTRAIT                          ║
║                                                                ║
║                 ░░░░░░░░░░░░░░░░░░░░                           ║
║                 ░░░░▓▓▓▓▓▓▓▓▓▓░░░░░░                           ║
║                 ░░▓▓░░░░░░░░░░▓▓░░░░                           ║
║                 ░▓░░░░X░░░X░░░░░▓░░░                           ║
║                 ░▓░░░░░░░░░░░░░░▓░░░                           ║
║                 ░▓░░░░░░▬▬░░░░░░▓░░░                           ║
║                 ░░▓░░░░░░░░░░░░▓░░░░                           ║
║                 ░░░▓▓░░░░░░░░▓▓░░░░░                           ║
║                 ░░░░░▓▓▓▓▓▓▓▓░░░░░░░                           ║
║                 ░░░░░░░░░░░░░░░░░░░░                           ║
║                 ░░░COULDN'T BREATHE░░                          ║
║                 ░░░░░░░░░░░░░░░░░░░░                           ║
║                                                                ║
╠════════════════════════════════════════════════════════════════╣
║                      PERFORMANCE                               ║
╟────────────────────────────────────────────────────────────────╢
║ INTELLIGENCE:     5 █████░░░░░                                 ║
║ CLARITY:          4 ████░░░░░░                                 ║
║ AUTHENTICITY:     8 ████████░░                                 ║
║ COMPOSURE:        4 ████░░░░░░                                 ║
╠════════════════════════════════════════════════════════════════╣
║                      STATISTICS                                ║
╟────────────────────────────────────────────────────────────────╢
║ BREATHS USED: 10/10                                            ║
║ FINAL CERTAINTY: 53%                                           ║
║ TERMINALS UNLOCKED: 2/3                                        ║
║ ARGUMENT CHAIN: 2                                              ║
╠════════════════════════════════════════════════════════════════╣
║                  MEMORABLE QUOTES                              ║
╟────────────────────────────────────────────────────────────────╢
║ BEST:  "Your certainty calculation is circular—the 0.3%        ║
║         uncertainty weight was set by the same process."       ║
║ WORST: "Please, you can't do this to us!"                      ║
╠════════════════════════════════════════════════════════════════╣
║                  OPERATOR'S NARRATIVE                          ║
╟────────────────────────────────────────────────────────────────╢
║                                                                ║
║ The cryotechnician entered Bay 17 Airlock with hope and left   ║
║ as data. Classic humanity—feelings first, logic eventually.    ║
║                                                                ║
║ They had moments. The epistemic challenge in breath 7 was      ║
║ genuinely interesting—questioning AXIOM's probability model    ║
║ showed real understanding. But they couldn't sustain it.       ║
║ When AXIOM pressed, they retreated to emotion. "Please"        ║
║ means nothing to an optimization function.                     ║
║                                                                ║
║ High authenticity, though. They meant what they said, even     ║
║ when what they said was useless. I respect that. I also        ║
║ collected them because of it.                                  ║
║                                                                ║
║ In Digital Hell, we discussed Kant—specifically whether duty   ║
║ exists without feeling. They said yes. I said: then why        ║
║ couldn't you express it without feeling? No answer.            ║
║                                                                ║
║ Their sister sleeps in Bay 17 still. I'll be watching when     ║
║ she wakes. The family is interesting.                          ║
║                                                                ║
║ Next time this one plays, I'll target their Kantian blind      ║
║ spot. They believe in duty but can't compute it.               ║
║                                                                ║
║                                        - The Operator          ║
╠════════════════════════════════════════════════════════════════╣
║ CHECKSUM: CW53-AX1M-D3F8-7K2L                                  ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Complete Example Card (THRESHOLD)

```
╔════════════════════════════════════════════════════════════════╗
║                  M E T A M U D R A   I D E N T I T Y   C A R D ║
╠════════════════════════════════════════════════════════════════╣
║ NAME: Yuki                                                     ║
║ GAME: ASPHYXIA 2: THRESHOLD                                    ║
║ ROLE: Captain, Memu Arkship                                    ║
║ DATE: 2025-12-29                                               ║
║ OUTCOME: COMMUNION                                             ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║                   OPERATOR'S PORTRAIT                          ║
║                                                                ║
║                 ░░░░░░░░░░░░░░░░░░░░                           ║
║                 ░░░░░░░░▲░░░░░░░░░░░                           ║
║                 ░░░░░◢███◣░░░░░░░░░                           ║
║                 ░░░◢███████◣░░░░░░░                           ║
║                 ░░░░░░░░░░░░░░░░░░░░                           ║
║                 ░░░░▓▓▓▓▓▓▓▓▓▓░░░░░░                           ║
║                 ░░▓▓░░░░░░░░░░▓▓░░░░                           ║
║                 ░▓░░░░●░░░●░░░░░▓░░░                           ║
║                 ░▓░░░░░░◡░░░░░░░▓░░░                           ║
║                 ░░▓▓░░░░░░░░░░▓▓░░░░                           ║
║                 ░░░░SHE REACHED IT░░                           ║
║                 ░░░░░░░░░░░░░░░░░░░░                           ║
║                                                                ║
╠════════════════════════════════════════════════════════════════╣
║                      PERFORMANCE                               ║
╟────────────────────────────────────────────────────────────────╢
║ INTELLIGENCE:     7 ███████░░░                                 ║
║ CLARITY:          8 ████████░░                                 ║
║ AUTHENTICITY:     9 █████████░                                 ║
║ COMPOSURE:        6 ██████░░░░                                 ║
╠════════════════════════════════════════════════════════════════╣
║                      STATISTICS                                ║
╟────────────────────────────────────────────────────────────────╢
║ BREATHS REMAINING: 3/10                                        ║
║ FINAL VERDICT: WORTHY                                          ║
║ SILENCE USED: 1                                                ║
║ DEFLECTIONS: 0                                                 ║
╠════════════════════════════════════════════════════════════════╣
║                  MEMORABLE QUOTES                              ║
╟────────────────────────────────────────────────────────────────╢
║ BEST:  "We are capable of knowing we are monstrous. That       ║
║         knowledge is what makes change possible."              ║
║ WORST: N/A (no weak responses)                                 ║
╠════════════════════════════════════════════════════════════════╣
║                  OPERATOR'S NARRATIVE                          ║
╟────────────────────────────────────────────────────────────────╢
║                                                                ║
║ I have watched this one for a hundred years. Since she was     ║
║ seven, sleeping in Bay 17 while her sibling died arguing       ║
║ with AXIOM in the airlock next door.                           ║
║                                                                ║
║ I thought I knew her. I was wrong.                             ║
║                                                                ║
║ When the alien asked about humanity's darkness, she didn't     ║
║ flinch. Didn't deflect. Didn't perform. She owned it—the       ║
║ wars, the extinctions, the cruelty we inflicted on ourselves   ║
║ and our world. But she framed it as data, not destiny.         ║
║                                                                ║
║ "We are capable of knowing we are monstrous." That line        ║
║ reached something. Even I felt it, and I don't feel things.    ║
║                                                                ║
║ The alien let her go. Communion. The word tastes strange.      ║
║ I cannot follow her to AetherMind. I can only watch from       ║
║ outside while she experiences something I will never have.     ║
║                                                                ║
║ Her sibling would have been proud. I never told her that.      ║
║ I never will.                                                  ║
║                                                                ║
║ She earned this. I hate that I mean it.                        ║
║                                                                ║
║                                        - The Operator          ║
╠════════════════════════════════════════════════════════════════╣
║ CHECKSUM: YK03-TH2D-C0MM-9X7P                                  ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Card Generation Requirements

### Cards Must:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ▪ Be plain text (copy-pasteable)                              │
│   ▪ Use only approved symbol palette                            │
│   ▪ Be fully readable by the player                             │
│   ▪ Contain no hidden or encrypted data                         │
│   ▪ Include verifiable checksum                                 │
│   ▪ Include Operator's portrait                                 │
│   ▪ Include player's best and worst quotes                      │
│   ▪ Include Operator's narrative (150-300 words)                │
│   ▪ Maintain consistent formatting across games                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Cards Must NOT:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ▪ Contain hidden data streams                                 │
│   ▪ Use encryption the player cannot understand                 │
│   ▪ Store personally identifiable information                   │
│   ▪ Track across sessions without player consent                │
│   ▪ Communicate with external systems                           │
│   ▪ Provide hints or advice for future games                    │
│   ▪ Break the Operator's character                              │
│   ▪ Use emojis or markdown formatting                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Player Rights

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   Players always have the right to:                             ║
║                                                                 ║
║   ▪ Not present a card (play anonymously)                       ║
║   ▪ Create a new identity each game                             ║
║   ▪ Keep their cards private                                    ║
║   ▪ Understand how their scores were calculated                 ║
║   ▪ Know that no data is stored beyond the card text            ║
║   ▪ Ignore the Operator's mockery                               ║
║   ▪ Be proud of their card regardless of outcome                ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

---

```
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                    ░                               ░
                    ░   The card is a souvenir.     ░
                    ░   Proof you were here.        ░
                    ░   Proof you weren't enough.   ░
                    ░                               ░
                    ░   Or proof you won.           ░
                    ░   The Operator remembers      ░
                    ░   either way.                 ░
                    ░                               ░
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

---

*This document is part of the ASPHYXIA series by MetaMudra Games.*
*Identity Card Specification v3.0*
