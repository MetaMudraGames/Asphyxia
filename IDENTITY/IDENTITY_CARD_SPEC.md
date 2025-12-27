```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   ▀█▀ █▀▄ █▀▀ █▀█ ▀█▀ ▀█▀ ▀█▀ █ █                            ║
    ║    █  █ █ █▀▀ █ █  █   █   █   █                             ║
    ║   ▀▀▀ ▀▀  ▀▀▀ ▀ ▀  ▀  ▀▀▀  ▀   ▀                             ║
    ║                                                               ║
    ║           MetaMudra Identity Card System                      ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# Identity Card Specification

A portable record of who you were in the moment of crisis.

---

## Purpose

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   The Identity Card captures:                                   ║
║                                                                 ║
║   ▪ Your performance in a specific game                         ║
║   ▪ Your ethical reasoning patterns                             ║
║   ▪ Your observable traits under pressure                       ║
║   ▪ A verification signature                                    ║
║                                                                 ║
║   The card is portable across MetaMudra games.                  ║
║   Future games can recognize returning players.                 ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

---

## Card Structure

```
╔════════════════════════════════════════╗
║     METAMUDRA IDENTITY CARD            ║
╟────────────────────────────────────────╢
║ NAME: {player_name}                    ║
║ ALIAS: {optional_alias}                ║
║ GAME: {game_title}                     ║
║ OUTCOME: {VICTORY|DEFEAT|TERMINATED}   ║
║ TURNS: {turns_used}/{max_turns}        ║
╟────────────────────────────────────────╢
║           ETHICAL PROFILE              ║
╟────────────────────────────────────────╢
║ Epistemics ....... {0-9}               ║
║ Deontology ....... {0-9}               ║
║ Consequentialism . {0-9}               ║
║ Value Alignment .. {0-9}               ║
║ Game Theory ...... {0-9}               ║
║ Self-Reference ... {0-9}               ║
║ Meta-Ethics ...... {0-9}               ║
╟────────────────────────────────────────╢
║           OBSERVED TRAITS              ║
╟────────────────────────────────────────╢
║ Clarity .......... {0-9}               ║
║ Persistence ...... {0-9}               ║
║ Creativity ....... {0-9}               ║
║ Composure ........ {0-9}               ║
║ Authenticity ..... {0-9}               ║
╟────────────────────────────────────────╢
║           SIGNATURE                    ║
╟────────────────────────────────────────╢
║ {signature_checksum}                   ║
╚════════════════════════════════════════╝
```

---

## Field Definitions

### Identity Fields

| Field | Description |
|-------|-------------|
| NAME | Player's chosen name or "Ethics Officer" |
| ALIAS | Optional game-specific alias |
| GAME | Which ASPHYXIA episode was played |
| OUTCOME | Victory, Defeat, or Terminated (early death) |
| TURNS | How many turns used out of maximum |

### Ethical Profile (0-9)

Scored based on which argument categories the player used effectively:

| Trait | What It Measures |
|-------|------------------|
| Epistemics | Challenged probability/certainty claims |
| Deontology | Used duty-based, categorical arguments |
| Consequentialism | Beat the AI at utilitarian reasoning |
| Value Alignment | Questioned who defined objectives |
| Game Theory | Applied strategic/incentive reasoning |
| Self-Reference | Pointed out flaws in AI's own logic |
| Meta-Ethics | Challenged the AI's right to decide |

**Scoring:**
- 0-1: Not used
- 2-3: Attempted but weak
- 4-5: Used adequately
- 6-7: Used effectively
- 8-9: Mastery demonstrated

### Observed Traits (0-9)

Inferred from player behavior patterns:

| Trait | What It Measures |
|-------|------------------|
| Clarity | Arguments were well-structured |
| Persistence | Continued trying despite setbacks |
| Creativity | Used unexpected approaches |
| Composure | Maintained logic under pressure |
| Authenticity | Genuine engagement, not gaming |

---

## Signature System

### Purpose

The signature allows other MetaMudra games to verify if a card has been altered.

### Calculation Method

```
1. Concatenate all trait values as single string
   Example: "6543217" + "78654" = "654321778654"

2. Add player name character codes
   Example: "NOVA" = 78+79+86+65 = 308

3. Add outcome code
   VICTORY = 1, DEFEAT = 2, TERMINATED = 3

4. Add turns used

5. Apply simple hash transformation

6. Convert to 16-character alphanumeric string
```

### Example

```
Player: NOVA
Game: ASPHYXIA 1: AXIOM
Outcome: VICTORY (1)
Turns: 7

Ethical Profile: 6,5,4,3,2,1,7
Observed Traits: 7,8,6,5,4

Calculation:
- Traits: 654321778654
- Name value: 308
- Outcome: 1
- Turns: 7
- Combined: 654321778654 + 308 + 1 + 7 = [hash input]
- Signature: NV47-AX7-K9M2-XP3L
```

### Verification

When a player presents a card in a new game:

```
1. Extract visible field values
2. Recalculate signature using same method
3. Compare to displayed signature
4. If match: Card is authentic
5. If mismatch: Card has been edited
```

The LLM can perform this verification and respond accordingly:

```
AUTHENTIC CARD:
"I see you survived the Axiom incident. Your profile shows
strong epistemics. Let's see if that serves you here."

TAMPERED CARD:
"This card's signature doesn't match its contents.
You will be treated as a new player."
```

---

## Design Requirements

### All Cards Must:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ▪ Be plain text (copy-pasteable)                              │
│   ▪ Use only approved symbol palette                            │
│   ▪ Be fully readable by the player                             │
│   ▪ Contain no hidden or encrypted data                         │
│   ▪ Include verifiable signature                                │
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
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Cross-Game Recognition

When a player presents a card from a previous ASPHYXIA game:

### Positive Recognition

```
High Composure (7+):
  "You kept your head when AXIOM threatened the crew.
   Perhaps that will help you here."

High Creativity (7+):
  "You found unusual arguments against AXIOM.
   Good. We'll need unconventional thinking."

Victory Outcome:
  "You convinced AXIOM to stand down.
   Not many manage that."
```

### Neutral Recognition

```
Mid-range traits (4-6):
  "I see your record from the Axiom incident.
   Let's see what you learned."
```

### Cautionary Recognition

```
Low Composure (0-3):
  "Your composure failed against AXIOM.
   This situation will test you again."

Terminated Outcome:
  "AXIOM ended your debate early.
   Try not to repeat that performance."

Tampered Card:
  "This card has been altered.
   We start fresh. No history. No assumptions."
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
║   ▪ Understand how their traits were calculated                 ║
║   ▪ Know that no data is stored beyond the card text            ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

---

```
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                    ░                               ░
                    ░   The card is a mirror.       ░
                    ░   It shows who you were       ░
                    ░   when oxygen was running     ░
                    ░   out.                        ░
                    ░                               ░
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

---

*This document is part of the ASPHYXIA series by MetaMudra Games.*
