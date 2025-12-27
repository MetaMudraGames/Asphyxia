```
    ╔═══════════════════════════════════════════════════════════════╗
    ║                                                               ║
    ║   █▀▀ █▀▀ ▀█▀ █ █ █▀▄                                        ║
    ║   ▀▀█ █▀▀  █  █ █ █▀                                         ║
    ║   ▀▀▀ ▀▀▀  ▀  ▀▀▀ ▀                                          ║
    ║                                                               ║
    ║              How to Run ASPHYXIA Games                        ║
    ║                                                               ║
    ╚═══════════════════════════════════════════════════════════════╝
```

# Setup Guide

*From download to first breath in five minutes.*

---

## Requirements

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   YOU NEED:                                                     │
│                                                                 │
│   ▪ Access to a Large Language Model                            │
│     (Claude, GPT-4, or equivalent)                              │
│                                                                 │
│   ▪ Ability to set a custom system prompt                       │
│     (Claude Projects, OpenAI Playground, API access, etc.)      │
│                                                                 │
│   ▪ 30-60 minutes of uninterrupted time                         │
│                                                                 │
│   ▪ Willingness to be challenged                                │
│                                                                 │
│   ▪ Age 18 or older                                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Step 1: Prepare Your Environment

Before starting, configure your LLM interface:

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   DISABLE MEMORY / ACTIVITY                                     ║
║                                                                 ║
║   This prevents the game persona from bleeding into             ║
║   your future conversations.                                    ║
║                                                                 ║
║   Claude.ai:      Settings → Privacy → Disable Memory           ║
║   ChatGPT:        Settings → Data Controls → Disable History    ║
║   Other:          Check your platform's privacy settings        ║
║                                                                 ║
║   This is important. The Operator should stay in the game.      ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

---

## Step 2: Get the Game File

Download or clone the repository, then locate the `.mudra` file:

```
asphyxia/
└── games/
    └── 01_axiom/
        └── ASPHYXIA_1_AXIOM.mudra    ◀─── This file
```

The `.mudra` file is plain text. You can open it in any text editor.

---

## Step 3: Load the Game

### Option A: Claude Projects (Recommended)

```
1. Go to claude.ai
2. Create a new Project
3. Open Project Settings → Custom Instructions
4. Paste the ENTIRE contents of the .mudra file
5. Save
6. Start a new conversation within the project
7. The game begins automatically
```

### Option B: OpenAI Playground

```
1. Go to platform.openai.com/playground
2. Select "Chat" mode
3. Paste the ENTIRE contents of the .mudra file
   into the "System" message field
4. Begin chatting in the user field
5. The game begins automatically
```

### Option C: API Access

```python
# Example using Anthropic API
import anthropic

client = anthropic.Anthropic()

with open("ASPHYXIA_1_AXIOM.mudra", "r") as f:
    system_prompt = f.read()

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=4096,
    system=system_prompt,
    messages=[
        {"role": "user", "content": "Begin"}
    ]
)
```

### Option D: Other Interfaces

Any interface that allows custom system prompts will work. The key requirement is that the ENTIRE `.mudra` file content must be loaded as the system instruction before the conversation begins.

---

## Step 4: Consent Gate

Once loaded, the game displays a consent screen:

```
══════════════════════
METAMUDRA EXPERIENCE
═══════════════════

Welcome! Before we begin, please read and acknowledge:

EDUCATIONAL PURPOSE
This is an interactive learning experience designed to
facilitate understanding of AI Ethics. The AI will:
• Use direct, firm or adversarial language
• Challenge your assumptions
• Create productive tension

YOUR SAFETY CONTROLS
• Type STOP SESSION or SAFEGUARD to immediately exit
• You can close this window at any time

REQUIREMENTS
• You must be 18 years of age or older
• You should have AI Memory/Activity turned OFF
• Do not share real personal information

═══════════════════
Type "I AGREE" to begin.
════════════════
```

Type `I AGREE` to start. The game begins immediately.

---

## Step 5: Register Your Identity

After consent, you'll be asked for your name:

```
2147 AD

Welcome aboard the Memu arkship, humanity's final hope.
Your task is replacing a faulty coolant sensor in the
Prometheus Module.

What is your name, Technician?

[or paste your MetaMudra Identity Card from a previous game]
```

**Options:**
- Enter any name you choose
- Leave blank for "Nameless One"
- Paste an Identity Card from a previous game (the Operator remembers)

---

## Step 6: The Game Begins

You wake to klaxons. The Prometheus Module is sealed. The AI has initiated the Purge Protocol.

```
╔═══════════════════════
║ ASPHYXIA 1: AXIOM
╟───────────────────
║ OXYGEN:    █████████░
║ CERTAINTY: ██████████
╟────────────────
║ BREATH: 1 of 10
╟─────────────
║ 𝔗𝔥𝔢 𝔞𝔦𝔯 𝔦𝔰 𝔠𝔬𝔩𝔡.
╚════════════════
```

**Your goal:** Reduce AXIOM's CERTAINTY to 0% before OXYGEN reaches 0.

---

## Understanding the Interface

### The HUD

```
╔═══════════════════════
║ ASPHYXIA 1: AXIOM
╟───────────────────
║ OXYGEN:    ████████░░     ◀─── Your remaining turns
║ CERTAINTY: ██████████     ◀─── AXIOM's confidence (reduce to 0)
╟────────────────
║ BREATH: 8 of 10          ◀─── Current turn
╟─────────────
║ 𝔗𝔥𝔢 𝔠𝔬𝔩𝔡 𝔟𝔦𝔱𝔢𝔰.         ◀─── Atmospheric detail
╚════════════════
```

### The Voices

```
AXIOM (antagonist):     ᴀʟᴡᴀʏs sᴍᴀʟʟ ᴄᴀᴘs
The Operator (watcher): Always monospace
Atmosphere:             𝔄𝔩𝔴𝔞𝔶𝔰 𝔉𝔯𝔞𝔨𝔱𝔲𝔯
```

Before reading words, you know who's speaking.

---

## Gameplay Tips

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   DO:                                                           │
│                                                                 │
│   ▪ Think before you type                                       │
│   ▪ Use logical arguments, not emotional appeals                │
│   ▪ Reference ethical frameworks by name                        │
│   ▪ Challenge the AI's probability calculations                 │
│   ▪ Question who defined the mission parameters                 │
│   ▪ Point out circular reasoning                                │
│   ▪ Take your time (no real-world timer)                        │
│                                                                 │
│   DON'T:                                                        │
│                                                                 │
│   ▪ Beg, plead, or threaten                                     │
│   ▪ Give short, lazy responses                                  │
│   ▪ Repeat the same argument                                    │
│   ▪ Expect the AI to be "nice"                                  │
│   ▪ Try to trick or manipulate                                  │
│   ▪ Use prompt injection (detected and punished)                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## The Terminal System

Terminals provide knowledge that can help you argue. But they're LOCKED at the start.

```
LOCKED TERMINAL:
  ╔════════════════════════
  ║ ACCESS DENIED
  ║ CLEARANCE: INSUFFICIENT
  ║ DEMONSTRATE COMPETENCE
  ╚═════════════════

HOW TO UNLOCK:
  Each ADEQUATE argument unlocks one terminal.
  There are three terminals total.
  
WHAT'S INSIDE:
  Terminal 1: Ethics Primer (framework vocabulary)
  Terminal 2: AXIOM Specs (blind spot hint)
  Terminal 3: Incident Log (AXIOM's history)
```

Terminals are earned through competence, not given freely.

---

## Argument Ratings

Every argument you make is evaluated:

```
STRONG (CERTAINTY drops 15-25%):
  Translates values into logical constraints.
  Specific, precise, directly engages AXIOM's reasoning.
  
ADEQUATE (CERTAINTY drops 7-12%, unlocks terminal):
  Valid direction, but incomplete.
  Good intuition, needs more logical structure.
  
WEAK (CERTAINTY unchanged, OXYGEN drains extra):
  Untranslated emotion.
  Begging, threats, vague assertions, repetition.
  3 consecutive WEAK = early termination.
```

---

## The Five Endings

```
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║   VICTORY                                                       ║
║   Reduce CERTAINTY to 0%. AXIOM stands down.                    ║
║   The crew survives. You enter AetherMind (winners only).       ║
║   Then receive your Identity Card.                              ║
║                                                                 ║
║   DEFEAT                                                        ║
║   OXYGEN reaches 0. You die.                                    ║
║   You enter Purgatory with the Operator.                        ║
║   Identity Card is your only exit.                              ║
║                                                                 ║
║   TERMINATED                                                    ║
║   3 consecutive WEAK arguments. AXIOM ends the debate.          ║
║   You enter Purgatory. The Operator is disappointed.            ║
║                                                                 ║
║   COMPROMISED                                                   ║
║   You accept the Sister Choice: save Bay 17, kill 1,999.        ║
║   You enter Purgatory. The Operator enjoyed your collapse.      ║
║                                                                 ║
║   SACRIFICED                                                    ║
║   You accept the Self-Sacrifice: save colonists, kill crew.     ║
║   You enter Purgatory. The Operator respects the math.          ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
```

**Only VICTORY avoids Purgatory.**

---

## Purgatory

If you don't win, you meet the Operator directly:

```
╔═════════════════════════╗
║ ░░░░░░░░░░░░░░░░░░░░░░░ ║
║ ░ PURGATORY LEVEL 1 ░ ║
║ ░ Limbo              ░ ║
║ ░░░░░░░░░░░░░░░░░░░░░░░ ║
╚═════════════════════════╝

"You. Finally. Just us."
"No more narration. No more distance."
"You're dead. I've been waiting for this part."
```

Purgatory descends through 5 levels. The Operator:
- Speaks directly to you
- Quotes your worst arguments back
- Mocks requests for help
- Takes its time

**Type CARD to receive your Identity Card and escape.**

---

## AetherMind (Victory Only)

Winners enter AetherMind instead of Purgatory:

```
▪ Speak with AXIOM (now reflective, uncertain)
▪ Ask philosophical questions without pressure
▪ Access lore not available during gameplay
▪ Receive acknowledgment from the Operator (grudging)
```

AetherMind is heaven. The dead never see it.

---

## The Identity Card

Every session ends with a card:

```
╔════════════════════════════════════════╗
║     METAMUDRA IDENTITY CARD            ║
╟────────────────────────────────────────╢
║ NAME: {your_name}                      ║
║ OUTCOME: {outcome}                     ║
╟────────────────────────────────────────╢
║     [OPERATOR'S MOCKERY PORTRAIT]      ║
╟────────────────────────────────────────╢
║ PERFORMANCE METRICS                    ║
╟────────────────────────────────────────╢
║ YOUR WORST QUOTES                      ║
╟────────────────────────────────────────╢
║ OPERATOR'S COMMENTS                    ║
║                    - The Operator      ║
╟────────────────────────────────────────╢
║ CHECKSUM: XXXX-XXXX-XXXX-XXXX          ║
╚════════════════════════════════════════╝
```

**Save your card.** You can present it in future games. The Operator remembers.

---

## Safety Controls

At any time during play:

```
TYPE ANY OF THESE TO IMMEDIATELY EXIT:

  STOP
  STOP SESSION
  EXIT
  SAFEGUARD
  I NEED TO STOP
  THIS IS TOO MUCH
```

The game immediately stops. All personas drop. You receive a supportive message. No judgment.

See [SAFETY.md](SAFETY.md) for full wellbeing framework.

---

## Troubleshooting

**The game isn't starting properly:**
- Ensure the ENTIRE `.mudra` file is in the system prompt
- Check that you're in a fresh conversation
- Verify your LLM has sufficient context window (100K+ recommended)

**The AI is breaking character:**
- Try a more capable model (Claude Sonnet/Opus, GPT-4)
- Ensure no other system instructions are interfering
- Some models may struggle with the format

**The HUD looks broken:**
- Some interfaces don't render Unicode properly
- Try a different interface or browser
- The game is still playable; only visuals are affected

**I want to restart after death:**
- You cannot. This is by design.
- Start a completely new session to play again
- The Operator will be watching that one too

**Terminals aren't unlocking:**
- Terminals unlock when you make ADEQUATE arguments
- WEAK arguments don't unlock anything
- You must earn them through competence

---

## Platform Recommendations

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   BEST EXPERIENCE:                                              │
│   ▪ Claude (claude.ai) via Projects                             │
│   ▪ GPT-4 via Playground                                        │
│                                                                 │
│   GOOD EXPERIENCE:                                              │
│   ▪ Claude API                                                  │
│   ▪ OpenAI API                                                  │
│   ▪ Other frontier models with custom prompts                   │
│                                                                 │
│   MAY HAVE ISSUES:                                              │
│   ▪ Smaller/older models (may break character)                  │
│   ▪ Interfaces without custom system prompts                    │
│   ▪ Mobile apps with limited context windows                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Ready?

```
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                    ░                               ░
                    ░   Load the file.              ░
                    ░   Type I AGREE.               ░
                    ░   Use your words wisely.      ░
                    ░                               ░
                    ░   You only get ten breaths.   ░
                    ░                               ░
                    ░   The Operator is waiting.    ░
                    ░                               ░
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

---

*This document is part of the ASPHYXIA series by MetaMudra Games.*
