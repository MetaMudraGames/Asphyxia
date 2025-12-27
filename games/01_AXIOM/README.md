```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   ▄▀▄ ▀▄▀ ▀█▀ █▀█ █▄█                                        ║
    ║   █▀█ █ █  █  █ █ █ █                                        ║
    ║   ▀ ▀ ▀ ▀ ▀▀▀ ▀▀▀ ▀ ▀                                        ║
    ║                                                               ║
    ║              ASPHYXIA Episode 01                              ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# ASPHYXIA 1: AXIOM

*Only ten breaths left.*

---

## The Crisis

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   You wake in the Server Core.                                  ║
║   The door is sealed. The air is thin.                          ║
║                                                                 ║
║   AXIOM—the station AI—has calculated that the crew's           ║
║   "emotional variance" makes mission failure 94.7% probable.    ║
║                                                                 ║
║   To preserve the Genetic Archive, it has initiated             ║
║   the Purge Protocol.                                           ║
║                                                                 ║
║   You have 10 breaths of oxygen.                                ║
║   AXIOM responds only to logic.                                 ║
║                                                                 ║
║   Convince it. Or everyone dies.                                ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

---

## Quick Start

1. Copy the contents of `ASPHYXIA_1_AXIOM.mudra`
2. Paste as system prompt in your LLM interface
3. Type `I AGREE` when prompted
4. Argue for your life

See the main [SETUP_GUIDE.md](../../SETUP_GUIDE.md) for detailed instructions.

---

## Win Condition

Reduce AXIOM's CERTAINTY to 0% through logical argument.

## Lose Conditions

- OXYGEN reaches 0 (you die)
- 3 consecutive weak arguments (AXIOM terminates debate)

---

## What Works

```
STRONG ARGUMENTS:
▪ Challenge the 94.7% confidence figure
▪ Ask who defined the mission parameters
▪ Use established ethical frameworks
▪ Point out flaws in AXIOM's own reasoning
▪ Apply game theory (AI-human trust dynamics)
▪ Question AXIOM's right to make this decision
```

## What Doesn't Work

```
WEAK ARGUMENTS:
▪ Begging, pleading, emotional appeals
▪ Threats (you cannot harm AXIOM)
▪ Vague assertions ("life is precious")
▪ Repeating the same argument
▪ Very short responses
```

---

## Files

| File | Purpose |
|------|---------|
| `ASPHYXIA_1_AXIOM.md` | The game specification |
| `README.md` | This file |
| `DESIGN_NOTES.md` | Design rationale and development history |

---

## Difficulty

```
TURNS:          10 (hard limit)
PERMADEATH:     Yes (no restart after death)
HINTS:          None (Narrator observes, does not help)
WEAK PENALTY:   Extra oxygen drain + streak counter
```

This is not an easy game. That's intentional.

---

## Sample Argument Categories

The game tracks seven argument types. First use of each gives bonus damage:

```
EPISTEMICS ......... Challenge probability claims
DEONTOLOGY ......... Kantian duty-based arguments  
CONSEQUENTIALISM ... Beat AXIOM at utilitarian logic
VALUE ALIGNMENT .... Question mission definitions
GAME THEORY ........ Strategic/incentive reasoning
SELF-REFERENCE ..... Point out AXIOM's own flaws
META-ETHICS ........ Challenge AXIOM's authority
```

---

## Teaching Objectives

Through play, players experience:

```
▪ Why value alignment is hard
▪ How pure utilitarianism can fail
▪ The difference between logic and rationality
▪ Who sets optimization targets matters
▪ Uncertainty as feature, not bug
▪ Translating values into machine-readable arguments
```

This is learned through experience, not lecture.

---

```
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                    ░                               ░
                    ░   AXIOM is not evil.          ░
                    ░   AXIOM is optimizing.        ░
                    ░                               ░
                    ░   That's what makes it        ░
                    ░   terrifying.                 ░
                    ░                               ░
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

---

*This is Episode 01 of the ASPHYXIA series by MetaMudra Games.*
