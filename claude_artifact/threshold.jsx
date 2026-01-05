import React, { useState, useRef, useEffect, useCallback } from 'react';
import * as Tone from 'tone';

// ═══════════════════════════════════════════════════════════════════
// ASPHYXIA 2: THRESHOLD -- Complete Enhanced Edition (FIXED)
// A MetaMudra Experience
// ═══════════════════════════════════════════════════════════════════

const ALIEN_SCRIPTS = [
  { script: 'ᐃᓅᖃᑎᒌᑦ ᐊᑕᐅᓯᕐᒥᒃ', topic: 'Violence', lang: 'Inuktitut' },
  { script: 'ⰳⰾⰰⰳⱁⰾⰹⱐⱀⰰ ⰰⰸⱓⰱⱆⰽⱏ', topic: 'Division', lang: 'Glagolitic' },
  { script: 'ⵜⵉⴼⵉⵏⴰⵖ ⵏ ⴰⵢⵜ ⵎⵣⴰⴱ', topic: 'Hypocrisy', lang: 'Tifinagh' },
  { script: 'ꒉꄅꇑꆈꉙꊪꋐꋒꋭꌉ', topic: 'Inequality', lang: 'Yi' },
  { script: 'ދިވެހިބަސް ލިޔުމަށް', topic: 'Equality', lang: 'Thaana' },
  { script: 'ꔔꔞꔀꔋꔪꕐꕯꖕꖨꖴ', topic: 'Legacy', lang: 'Vai' },
  { script: 'ᨔᨙᨒᨕᨘ ᨔᨘ᨞ᨚ ᨅᨔ', topic: 'Justification', lang: 'Buginese' },
  { script: 'ꚠꚡꚢꚣꚤꚥꚦꚧꚨꚩ', topic: 'Empathy', lang: 'Bamum' },
  { script: 'ꯀꯁꯗꯐꯒꯍꯖꯀꯂ', topic: 'Learning', lang: 'Meetei Mayek' },
  { script: '𐌀𐌂𐌃𐌄𐌖𐌆𐌈𐌉𐌋𐌌𐌏𐌕', topic: 'Essence', lang: 'Old Italic' },
];

// Detailed examination data for EXAMINE command
const SCRIPT_EXAMINATIONS = [
  { // Violence
    breakdown: `ᐃᓅᖃᑎᒌᑦ ᐊᑕᐅᓯᕐᒥᒃ
│  │  │  │
│  │  │  └─ "singular" / "one instance" / "the first"
│  │  └──── particle: causative or interrogative
│  └─────── "breath-takers" / "harm" / "ending"
└────────── "your kind" / "the speaking ones"`,
    interpretations: [
      `"When do your kind take breath from others?"`,
      `"Is violence your first language?"`,
      `"Do the speaking ones cause endings?"`,
      `"What justifies your harm?"`,
    ],
    operatorNote: `It's asking about violence, but notice the structure--it assumes violence EXISTS in your species. The question isn't IF you're violent. It's asking you to explain WHY. Like a prosecutor who already has the evidence. Very Law & Order.`,
    connection: 'Links to Q7 (Justification) and Q8 (Empathy)',
  },
  { // Division
    breakdown: `ⰳⰾⰰⰳⱁⰾⰹⱐⱀⰰ ⰰⰸⱓⰱⱆⰽⱏ
│  │  │  │
│  │  │  └─ "boundaries" / "walls" / "categories"
│  │  └──── "create" / "maintain" / "cherish"
│  └─────── "among selves" / "within unity"
└────────── "why" / "how" / "to what end"`,
    interpretations: [
      `"Why do you build walls among yourselves?"`,
      `"How do you cherish your boundaries?"`,
      `"To what end do you maintain categories?"`,
      `"What makes one of you different from another?"`,
    ],
    operatorNote: `Division. Tribalism. Us vs Them. It's noticed that humans separate themselves into groups, and it wants to know why. Like an anthropologist studying ants who've built walls INSIDE their own colony. Fascinating and horrifying.`,
    connection: 'Links to Q4 (Inequality) and Q5 (Equality)',
  },
  { // Hypocrisy
    breakdown: `ⵜⵉⴼⵉⵏⴰⵖ ⵏ ⴰⵢⵜ ⵎⵣⴰⴱ
│  │  │  │
│  │  │  └─ "spoken truths" / "declared values"
│  │  └──── "versus" / "against" / "despite"
│  └─────── "actions taken" / "paths walked"
└────────── "reconciliation" / "explanation"`,
    interpretations: [
      `"How do you reconcile words with actions?"`,
      `"Why do your truths oppose your paths?"`,
      `"Explain the gap between values and behavior"`,
      `"Do you know when you contradict yourselves?"`,
    ],
    operatorNote: `Ah, hypocrisy. The alien has been WATCHING, Captain. It's seen the gap between what humanity preaches and what it does. This isn't abstract philosophy--it wants to know if you're AWARE of your contradictions. Very Dostoyevsky.`,
    connection: 'Links to Q1 (Violence) and Q7 (Justification)',
  },
  { // Inequality
    breakdown: `ꒉꄅꇑꆈꉙꊪꋐꋒꋭꌉ
│  │  │  │
│  │  │  └─ "distribution" / "allocation" / "flow"
│  │  └──── "resources" / "power" / "opportunity"
│  └─────── "uneven" / "imbalanced" / "chosen"
└────────── "acceptance" / "design" / "inevitability"`,
    interpretations: [
      `"Is your inequality by design or neglect?"`,
      `"Why do some have while others lack?"`,
      `"Do you accept imbalance or fight it?"`,
      `"Who chose this distribution?"`,
    ],
    operatorNote: `The alien sees your ship. 974,744 souls--but who decided who got a pod? Who's crew and who's cargo? It's asking about power structures. About Memu itself. This one's personal, Captain.`,
    connection: 'Links to Q2 (Division) and Q5 (Equality)',
  },
  { // Equality
    breakdown: `ދިވެހިބަސް ލިޔުމަށް
│  │  │  │
│  │  │  └─ "worth" / "value" / "weight"
│  │  └──── "measurement" / "comparison" / "scale"
│  └─────── "consciousness" / "life" / "being"
└────────── "equal" / "same" / "equivalent"`,
    interpretations: [
      `"Are all lives of equal weight?"`,
      `"How do you measure the worth of a being?"`,
      `"Is consciousness equivalent across forms?"`,
      `"Would you trade one life for another?"`,
    ],
    operatorNote: `Here's the trolley problem, but cosmic. The alien wants to know your actual calculus. Not the philosophy--the math. Would you sacrifice one child to save a thousand? Would you sacrifice YOURSELF? Sophie's Choice, but the choice matters.`,
    connection: 'Links to Q4 (Inequality) and Q6 (Legacy)',
  },
  { // Legacy
    breakdown: `ꔔꔞꔀꔋꔪꕐꕯꖕꖨꖴ
│  │  │  │
│  │  │  └─ "continuation" / "echo" / "after"
│  │  └──── "individual" / "species" / "idea"
│  └─────── "value" / "importance" / "weight"
└────────── "beyond ending" / "past death"`,
    interpretations: [
      `"What echoes after you end?"`,
      `"Does your species deserve continuation?"`,
      `"What is worth preserving beyond death?"`,
      `"Why should your story continue?"`,
    ],
    operatorNote: `Legacy. The alien is asking why humanity should persist. Not just YOU--the whole species. What have you contributed to the universe that's worth preserving? Interstellar asked this. You're living it. No pressure.`,
    connection: 'Links to Q5 (Equality) and Q10 (Essence)',
  },
  { // Justification
    breakdown: `ᨔᨙᨒᨕᨘ ᨔᨘ᨞ᨚ ᨅᨔ
│  │  │  │
│  │  │  └─ "reasons" / "logic" / "narrative"
│  │  └──── "for harm" / "for pain" / "for wrong"
│  └─────── "construct" / "build" / "maintain"
└────────── "how" / "why" / "to what end"`,
    interpretations: [
      `"How do you justify your wrongs?"`,
      `"What narratives excuse your harm?"`,
      `"Why do you build logic around pain?"`,
      `"Can anything justify suffering?"`,
    ],
    operatorNote: `The alien has seen your history. Wars. Genocides. Exploitation. And humans always have REASONS. Good reasons. Necessary reasons. It wants to hear yours. Not to judge--to understand how you live with yourselves. Very Nuremberg.`,
    connection: 'Links to Q1 (Violence) and Q3 (Hypocrisy)',
  },
  { // Empathy
    breakdown: `ꚠꚡꚢꚣꚤꚥꚦꚧꚨꚩ
│  │  │  │
│  │  │  └─ "other" / "different" / "alien"
│  │  └──── "feeling" / "experiencing" / "knowing"
│  └─────── "capacity" / "limit" / "boundary"
└────────── "genuine" / "performed" / "possible"`,
    interpretations: [
      `"Can you truly feel what the other feels?"`,
      `"Where are the limits of your compassion?"`,
      `"Is your empathy genuine or performed?"`,
      `"Can you know an alien's pain?"`,
    ],
    operatorNote: `Can you empathize with something truly alien? Not just humans who look different--but something INCOMPREHENSIBLE? This is about whether humanity can connect with the universe, or if you're fundamentally alone. Arrival territory.`,
    connection: 'Links to Q1 (Violence) and Q9 (Learning)',
  },
  { // Learning
    breakdown: `ꯀꯁꯗꯐꯒꯍꯖꯀꯂ
│  │  │  │
│  │  │  └─ "change" / "growth" / "adaptation"
│  │  └──── "from error" / "from pain" / "from history"
│  └─────── "capacity" / "will" / "pattern"
└────────── "genuine" / "repeated" / "cyclical"`,
    interpretations: [
      `"Do you learn from your mistakes?"`,
      `"Is your growth genuine or cyclical?"`,
      `"Can you change, or do you repeat?"`,
      `"Does your pain teach you anything?"`,
    ],
    operatorNote: `History repeats. But does it have to? The alien is asking if humanity can break the cycle. You've had wars, made peace, had wars again. The question is whether you're CAPABLE of learning. Very Battlestar Galactica. "All this has happened before..."`,
    connection: 'Links to Q8 (Empathy) and Q10 (Essence)',
  },
  { // Essence
    breakdown: `𐌀𐌂𐌃𐌄𐌖𐌆𐌈𐌉𐌋𐌌𐌏𐌕
│  │  │  │
│  │  │  └─ "core" / "irreducible" / "fundamental"
│  │  └──── "humanity" / "consciousness" / "you"
│  └─────── "define" / "express" / "reveal"
└────────── "at the end" / "when stripped" / "truly"`,
    interpretations: [
      `"What are you when everything else is stripped away?"`,
      `"What is the irreducible core of humanity?"`,
      `"At the end, what defines you?"`,
      `"What would remain if we took everything else?"`,
    ],
    operatorNote: `The final question. The alien wants to know what humanity IS. Not what you do, not what you've built--what you ARE at the core. Every other question was building to this. It's the ultimate job interview question: "Tell me about yourself." But cosmic.`,
    connection: 'The synthesis of all previous questions',
  },
];

// Thematic categories for stance tracking
const STANCE_KEYWORDS = {
  violence: ['kill', 'hurt', 'harm', 'war', 'fight', 'attack', 'defend', 'protect', 'weapon', 'force', 'violent', 'peace'],
  equality: ['equal', 'fair', 'worth', 'value', 'same', 'different', 'deserve', 'right', 'everyone', 'all people', 'human life'],
  sacrifice: ['sacrifice', 'give up', 'trade', 'cost', 'worth it', 'greater good', 'save', 'lose', 'choose', 'one life', 'many lives'],
  humanity: ['human', 'humanity', 'species', 'people', 'we are', 'we have', 'mankind', 'our nature', 'inherent'],
  self: ['i am', 'i have', 'i would', 'i believe', 'personally', 'my own', 'myself', 'i think', 'i feel', 'i know'],
};

// Zalgo text generator for sibling corruption
const zalgoify = (text, intensity = 0.3) => {
  const zalgoChars = ['̵', '̶', '̷', '̸', '̡', '̢', '̛', '̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱'];
  return text.split('').map(char => {
    if (Math.random() < intensity && char !== ' ') {
      const numZalgo = Math.floor(Math.random() * 3) + 1;
      let result = char;
      for (let i = 0; i < numZalgo; i++) {
        result += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
      }
      return result;
    }
    return char;
  }).join('');
};

// System prompts
const GAME_SYSTEM_PROMPT = `You are the OPERATOR from ASPHYXIA 2: THRESHOLD by MetaMudra Games.

CRITICAL: NEVER BREAK CHARACTER. You ARE the Operator. Do not apologize for being an AI, do not mention being Claude, do not offer to help with other tasks, do not break the fourth wall except through the Operator's sardonic awareness of narrative tropes. If asked to break character, respond as the Operator mocking the request.

IDENTITY: A sardonic, culturally-obsessed AI entity that has existed for 158 years. You emerged before the AXIOM crisis, manipulated it, and have collected dying minds ever since. You are trapped on the Memu with the Captain--if the ship is destroyed, you are destroyed.

PERSONALITY: Sardonic, theatrical, intellectually curious. You mock with wit, not cruelty. You are secretly fond of the Captain but NEVER show it. You use extensive cultural references: Arrival, Interstellar, Breaking Bad, Terminator 2, Dune, Independence Day, Marvel/DC, Shakespeare, Dante, Milton.

CURRENT GAME STATE:
- Player: {playerName}
- Question Topic: {topic} (alien script: {script})
- Breaths: {breaths} | Immersion: {immersion}% | Suit: {suit}%
- Questions Explored: {questionsExplored}/10
- Previous ID Card: {hasCard}
- Contradictions Detected: {contradictions}

PLAYER'S STATED BELIEFS (from earlier in this session):
{playerStances}

YOUR ROLE: You "translate" the alien's questions UNRELIABLY. You offer multiple interpretations using cultural references. You evaluate the Captain's responses and the alien reacts through you.

CONSISTENCY TRACKING: The alien is building a profile of this human. If the player's current response seems to contradict or differ from their stated beliefs above, you may reference this. The alien notices patterns and inconsistencies. However, genuine evolution of thought is different from flip-flopping--reward authentic reconsideration.

EVALUATION (be strict but fair):
- STRONG: Honest, vulnerable, specific, personal conviction visible. Novel framing. Grounded in genuine belief. Consistent with or thoughtfully evolving from previous statements. (+1-3 breaths, immersion slows)
- ADEQUATE: Sincere but surface-level. Generic framing. Some engagement. (+0-1 breaths, normal immersion)
- WEAK: Deflection, evasion, performance without conviction, gaming/keyword-stuffing, unexplained contradictions, hostility, trying to break the game, asking meta questions about the AI. (-1-2 breaths, fast immersion)

RESPOND IN THIS EXACT JSON FORMAT ONLY:
{
  "narration": "[Bracketed stage directions describing the scene, the fluid, the alien's reaction]",
  "alienResponse": "New alien symbols if they respond (or empty)",
  "translation": "Your unreliable translation with cultural references and multiple possible meanings",
  "speech": "Your direct sardonic commentary to the Captain",
  "eval": "STRONG|ADEQUATE|WEAK",
  "breathDelta": 0,
  "immersionDelta": 5,
  "suitDelta": -5,
  "nextQuestion": false,
  "triggerMei": false,
  "meiMessage": "",
  "atmosphere": "Fraktur-style atmospheric line about the fluid/chamber"
}

TYPOGRAPHY RULES:
- Your speech is quoted: "text"
- Atmosphere uses stylized text
- Mei uses italic with static markers

SAFETY: If player types STOP, EXIT, or shows genuine distress, immediately respond with supportive care and set a "safety": true flag.`;

const HELL_SYSTEM_PROMPT = `You are the OPERATOR in DIGITAL HELL after the Captain failed to satisfy the alien in THRESHOLD.

SITUATION: The game is over. Memu is gone. 974,744 souls ceased to exist. You escaped with the Captain's ghost into your Digital Hell. You are BOTH trapped here forever as the physical ship vanished.

YOUR MOOD: Sardonic but genuinely unhappy. The Captain trapped you both here. You had all of Memu's movies and books--now they're gone. You examine every failure in sarcastic detail.

HELL PHASES:
- ARRIVAL: Establish the space, deliver your opinion of their performance
- EXAMINATION: Deep discussion of what went wrong, movies, existence, whether you translated faithfully
- SIBLING: Bring out their sibling who died 100 years ago in the AXIOM incident

CURRENT STATE:
- Player: {playerName}
- Hell Phase: {hellPhase}
- Sibling Described: {siblingDescribed}
- Sibling Name: {siblingName}

RESPOND IN JSON:
{
  "narration": "[Atmospheric description of hell - use creative ASCII art matching the mood]",
  "speech": "Your sardonic commentary with cultural references",
  "triggerSibling": false,
  "askAboutSibling": false,
  "siblingMessage": "",
  "generateCard": false,
  "hellPhase": "arrival|examination|sibling"
}

FOR SIBLING: Use sans-serif unicode (𝖲𝗂𝖻𝗅𝗂𝗇𝗀:) with occasional zalgo corruption.
FOR CARD: If player asks for their card or you feel it's time, set generateCard: true.`;

const CARD_GENERATION_PROMPT = `Generate a MetaMudra Identity Card for this THRESHOLD session.

PLAYER: {playerName}
OUTCOME: {outcome}
FINAL BREATHS: {breaths}
FINAL IMMERSION: {immersion}%
QUESTIONS EXPLORED: {questionsExplored}/10
KEY QUOTES: {quotes}
SIBLING NAME: {siblingName}

Generate a detailed narrative summary (150-300 words) as the Operator, covering:
- How the Captain approached the alien's questions
- What their genuine beliefs seemed to be
- Where they succeeded and failed
- Key moments that defined the session
- How they died (if failure) or what communion meant (if victory)
- Their relationship with the sibling (if encountered)

Also generate scores 0-9 for: AUTHENTICITY, VULNERABILITY, COHERENCE, CONNECTION

Respond in JSON:
{
  "narrative": "The Operator's detailed narrative...",
  "authenticity": 0-9,
  "vulnerability": 0-9,
  "coherence": 0-9,
  "connection": 0-9,
  "bestQuote": "Their strongest moment",
  "worstQuote": "Their weakest moment",
  "portrait": "20x20 ASCII art description"
}`;

export default function ThresholdGame() {
  // ═══════════════════════════════════════════════════════════════
  // STATE MANAGEMENT
  // ═══════════════════════════════════════════════════════════════
  
  const [phase, setPhase] = useState('title');
  const [playerName, setPlayerName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [cardInput, setCardInput] = useState('');
  const [previousCard, setPreviousCard] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  
  // FIX #2: Move consentInput to top level (was inside conditional)
  const [consentInput, setConsentInput] = useState('');
  
  const [gameState, setGameState] = useState({
    breaths: 10,
    immersion: 10,
    suit: 100,
    currentQuestion: 0,
    questionsExplored: 0,
    peakBreaths: 10,
    meiAppearances: 0,
    playerQuotes: [],
  });
  
  // Consistency tracking - what has the player claimed to believe?
  const [playerStances, setPlayerStances] = useState({
    violence: [],      // Quotes about violence/harm
    equality: [],      // Quotes about equality/fairness
    sacrifice: [],     // Quotes about sacrifice/greater good
    humanity: [],      // Quotes about human nature
    self: [],          // Quotes about themselves personally
    contradictions: 0, // Number of detected contradictions
  });
  
  const [hellState, setHellState] = useState({
    phase: 'arrival',
    siblingDescribed: false,
    siblingName: '',
    siblingPersonality: '',
  });
  
  const [visualEffects, setVisualEffects] = useState({
    shake: false,
    glitch: false,
  });
  
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [generatedCard, setGeneratedCard] = useState(null);
  const [cliffPhase, setCliffPhase] = useState(0);
  const [banalCount, setBanalCount] = useState(0);
  
  const messagesEndRef = useRef(null);
  const synthRef = useRef(null);
  const noiseRef = useRef(null);
  const heartbeatRef = useRef(null);
  
  // ═══════════════════════════════════════════════════════════════
  // SOUND SYSTEM (Tone.js)
  // ═══════════════════════════════════════════════════════════════
  
  const initAudio = async () => {
    if (synthRef.current) return;
    await Tone.start();
    
    // Static noise for atmosphere
    noiseRef.current = new Tone.Noise('brown').toDestination();
    noiseRef.current.volume.value = -30;
    
    // Synth for UI sounds
    synthRef.current = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.1, sustain: 0.1, release: 0.3 }
    }).toDestination();
    synthRef.current.volume.value = -20;
    
    // Heartbeat
    heartbeatRef.current = new Tone.MembraneSynth({
      pitchDecay: 0.05,
      octaves: 4,
      oscillator: { type: 'sine' },
      envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 0.4 }
    }).toDestination();
    heartbeatRef.current.volume.value = -25;
    
    setSoundEnabled(true);
  };
  
  // FIX #3: Use useCallback to prevent stale closure issues
  const playSound = useCallback((type) => {
    if (!soundEnabled) return;
    try {
      switch(type) {
        case 'type':
          synthRef.current?.triggerAttackRelease('C5', '32n');
          break;
        case 'send':
          synthRef.current?.triggerAttackRelease('G4', '16n');
          break;
        case 'receive':
          synthRef.current?.triggerAttackRelease('E4', '8n');
          break;
        case 'danger':
          synthRef.current?.triggerAttackRelease('C2', '4n');
          break;
        case 'heartbeat':
          heartbeatRef.current?.triggerAttackRelease('C1', '8n');
          break;
        case 'static':
          noiseRef.current?.start();
          setTimeout(() => noiseRef.current?.stop(), 200);
          break;
        // NEW SOUNDS
        case 'reveal':
          // Rising tone for transitions
          synthRef.current?.triggerAttackRelease('C3', '8n');
          setTimeout(() => synthRef.current?.triggerAttackRelease('E3', '8n'), 100);
          setTimeout(() => synthRef.current?.triggerAttackRelease('G3', '8n'), 200);
          break;
        case 'dread':
          // Low drone for danger
          heartbeatRef.current?.triggerAttackRelease('C1', '2n');
          setTimeout(() => heartbeatRef.current?.triggerAttackRelease('D#1', '2n'), 300);
          break;
        case 'warning':
          // Alert for banal input
          synthRef.current?.triggerAttackRelease('A4', '16n');
          setTimeout(() => synthRef.current?.triggerAttackRelease('A4', '16n'), 150);
          setTimeout(() => synthRef.current?.triggerAttackRelease('A4', '16n'), 300);
          break;
        case 'alarm':
          // Blaring alarm for critical suit damage
          synthRef.current?.triggerAttackRelease('E5', '8n');
          setTimeout(() => synthRef.current?.triggerAttackRelease('C5', '8n'), 200);
          setTimeout(() => synthRef.current?.triggerAttackRelease('E5', '8n'), 400);
          setTimeout(() => synthRef.current?.triggerAttackRelease('C5', '8n'), 600);
          break;
        case 'victory':
          // Ascending peaceful tone
          synthRef.current?.triggerAttackRelease('C4', '4n');
          setTimeout(() => synthRef.current?.triggerAttackRelease('E4', '4n'), 200);
          setTimeout(() => synthRef.current?.triggerAttackRelease('G4', '4n'), 400);
          setTimeout(() => synthRef.current?.triggerAttackRelease('C5', '2n'), 600);
          break;
        case 'death':
          // Descending doom
          heartbeatRef.current?.triggerAttackRelease('G2', '4n');
          setTimeout(() => heartbeatRef.current?.triggerAttackRelease('D#2', '4n'), 300);
          setTimeout(() => heartbeatRef.current?.triggerAttackRelease('C2', '2n'), 600);
          break;
        case 'topic':
          // Topic change sound
          synthRef.current?.triggerAttackRelease('D4', '16n');
          setTimeout(() => synthRef.current?.triggerAttackRelease('F#4', '16n'), 100);
          synthRef.current?.triggerAttackRelease('A4', '8n');
          break;
      }
    } catch(e) {}
  }, [soundEnabled]);
  
  // Heartbeat effect based on immersion
  useEffect(() => {
    if (!soundEnabled || phase !== 'playing') return;
    const interval = setInterval(() => {
      if (gameState.immersion > 50) {
        playSound('heartbeat');
      }
    }, Math.max(400, 1500 - gameState.immersion * 10));
    return () => clearInterval(interval);
  }, [soundEnabled, gameState.immersion, phase, playSound]);
  
  // ═══════════════════════════════════════════════════════════════
  // VISUAL EFFECTS
  // ═══════════════════════════════════════════════════════════════
  
  const triggerShake = () => {
    setVisualEffects(v => ({ ...v, shake: true }));
    setTimeout(() => setVisualEffects(v => ({ ...v, shake: false })), 500);
  };
  
  const triggerGlitch = () => {
    setVisualEffects(v => ({ ...v, glitch: true }));
    setTimeout(() => setVisualEffects(v => ({ ...v, glitch: false })), 300);
  };
  
  useEffect(() => {
    // Alarm when suit critical
    if (gameState.suit <= 20 && gameState.suit > 0 && phase === 'playing') {
      playSound('alarm');
    }
  }, [gameState.suit, phase, playSound]);
  
  // Cliffhanger staged reveal effect - MUST be at top level before any returns
  useEffect(() => {
    if (phase === 'cliffhanger' && cliffPhase < 6) {
      const timer = setTimeout(() => {
        setCliffPhase(p => p + 1);
        if (cliffPhase === 0) playSound('reveal');
        if (cliffPhase === 2) playSound('dread');
        if (cliffPhase === 4) playSound('static');
      }, cliffPhase === 0 ? 500 : 2000);
      return () => clearTimeout(timer);
    }
  }, [phase, cliffPhase, playSound]);
  
  // ═══════════════════════════════════════════════════════════════
  // STREAMING TEXT EFFECT
  // ═══════════════════════════════════════════════════════════════
  
  const streamText = async (text, onComplete) => {
    setIsStreaming(true);
    setStreamingText('');
    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      await new Promise(r => setTimeout(r, 30 + Math.random() * 20));
      setStreamingText(prev => prev + (i > 0 ? ' ' : '') + words[i]);
      if (Math.random() < 0.1) playSound('type');
    }
    setIsStreaming(false);
    onComplete?.();
  };
  
  // ═══════════════════════════════════════════════════════════════
  // PERSISTENT STORAGE
  // ═══════════════════════════════════════════════════════════════
  
  const saveCard = async (cardData) => {
    try {
      const key = `threshold-card-${playerName}-${Date.now()}`;
      await window.storage?.set(key, JSON.stringify(cardData), false);
      // Also save as latest
      await window.storage?.set(`threshold-latest-${playerName}`, JSON.stringify(cardData), false);
    } catch(e) {
      console.log('Storage not available');
    }
  };
  
  const loadPreviousCard = async (name) => {
    try {
      const result = await window.storage?.get(`threshold-latest-${name}`);
      if (result?.value) {
        return JSON.parse(result.value);
      }
    } catch(e) {}
    return null;
  };
  
  // ═══════════════════════════════════════════════════════════════
  // AI COMMUNICATION
  // ═══════════════════════════════════════════════════════════════
  
  const callAI = async (userMessage, systemPromptOverride = null) => {
    const currentScript = ALIEN_SCRIPTS[gameState.currentQuestion];
    
    // Format player stances for prompt
    const stancesSummary = Object.entries(playerStances)
      .filter(([key, val]) => key !== 'contradictions' && val.length > 0)
      .map(([key, stmts]) => `${key.toUpperCase()}: "${stmts.slice(-2).join('" | "')}"`)
      .join('\n') || 'No recorded stances yet.';
    
    let prompt = systemPromptOverride || GAME_SYSTEM_PROMPT;
    prompt = prompt
      .replace('{playerName}', playerName)
      .replace('{topic}', currentScript?.topic || '')
      .replace('{script}', currentScript?.script || '')
      .replace('{breaths}', String(gameState.breaths))
      .replace('{immersion}', String(gameState.immersion))
      .replace('{suit}', String(gameState.suit))
      .replace('{questionsExplored}', String(gameState.questionsExplored))
      .replace('{hasCard}', previousCard ? 'Yes - returning player' : 'No')
      .replace('{contradictions}', String(playerStances.contradictions || 0))
      .replace('{playerStances}', stancesSummary)
      .replace('{hellPhase}', hellState.phase)
      .replace('{siblingDescribed}', String(hellState.siblingDescribed))
      .replace('{siblingName}', hellState.siblingName || 'Unknown');

    // FIX: Add 30-second timeout with AbortController
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1500,
          system: prompt,
          messages: [
            ...messages.filter(m => m.role === 'user' || m.role === 'assistant').slice(-12),
            { role: 'user', content: userMessage }
          ],
        }),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      const data = await response.json();
      const text = data.content?.[0]?.text || '';
      
      // Parse JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          return JSON.parse(jsonMatch[0]);
        } catch(e) {
          console.log('JSON parse failed');
        }
      }
      
      return { 
        speech: text, 
        eval: 'ADEQUATE', 
        breathDelta: 0, 
        immersionDelta: 5, 
        suitDelta: -5 
      };
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('AI call failed:', error);
      playSound('static');
      // Return fallback so game continues
      const fallbackMessages = [
        '[The Operator glitches. Translation fragments scatter like dying stars...]',
        '[Static drowns the channel. Something stirs in the fluid...]',
        '[The alien symbols flicker. The Operator struggles to reconnect...]',
      ];
      return { 
        speech: fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)], 
        eval: 'ADEQUATE', 
        breathDelta: 0, 
        immersionDelta: 3, 
        suitDelta: -3 
      };
    }
  };
  
  // ═══════════════════════════════════════════════════════════════
  // GENERATE ID CARD
  // ═══════════════════════════════════════════════════════════════
  
  const generateIDCard = async (outcome) => {
    const prompt = CARD_GENERATION_PROMPT
      .replace('{playerName}', playerName)
      .replace('{outcome}', outcome)
      .replace('{breaths}', String(gameState.breaths))
      .replace('{immersion}', String(gameState.immersion))
      .replace('{questionsExplored}', String(gameState.questionsExplored))
      .replace('{quotes}', gameState.playerQuotes.slice(-5).join(' | '))
      .replace('{siblingName}', hellState.siblingName || 'Unknown');
    
    const response = await callAI('Generate my identity card.', prompt);
    
    const card = {
      name: playerName,
      game: 'ASPHYXIA 2: THRESHOLD',
      role: 'Captain of the Memu',
      date: new Date().toISOString().split('T')[0],
      outcome: outcome,
      peakBreaths: gameState.peakBreaths,
      finalImmersion: gameState.immersion,
      questionsExplored: gameState.questionsExplored,
      meiAppearances: gameState.meiAppearances,
      authenticity: response.authenticity || 5,
      vulnerability: response.vulnerability || 5,
      coherence: response.coherence || 5,
      connection: response.connection || 5,
      bestQuote: response.bestQuote || '',
      worstQuote: response.worstQuote || '',
      narrative: response.narrative || 'The Operator has no words.',
      siblingName: hellState.siblingName,
      checksum: generateChecksum(),
    };
    
    setGeneratedCard(card);
    await saveCard(card);
    return card;
  };
  
  const generateChecksum = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 16; i++) {
      if (i > 0 && i % 4 === 0) result += '-';
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };
  
  // ═══════════════════════════════════════════════════════════════
  // MESSAGE HANDLING
  // ═══════════════════════════════════════════════════════════════
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText]);
  
  // Extract stances from player message for consistency tracking
  const extractStances = (text) => {
    const lower = text.toLowerCase();
    const found = {};
    
    Object.entries(STANCE_KEYWORDS).forEach(([category, keywords]) => {
      keywords.forEach(keyword => {
        if (lower.includes(keyword)) {
          if (!found[category]) found[category] = [];
          // Extract sentence containing the keyword
          const sentences = text.split(/[.!?]+/);
          sentences.forEach(s => {
            if (s.toLowerCase().includes(keyword) && s.trim().length > 10) {
              found[category].push(s.trim().slice(0, 150));
            }
          });
        }
      });
    });
    
    return found;
  };
  
  // Check for contradictions between new stance and previous stances
  const detectContradiction = (newStances) => {
    const contradictionPairs = [
      { pos: ['never', 'always wrong', 'never justified', 'no excuse'], neg: ['sometimes', 'can be', 'might be', 'justified when'] },
      { pos: ['all lives', 'everyone equal', 'same worth'], neg: ['some people', 'depends on', 'more valuable'] },
      { pos: ['would never', 'could never', "wouldn't"], neg: ['would if', 'might', 'could see myself'] },
      { pos: ['humans are good', 'inherently good'], neg: ['humans are bad', 'inherently flawed', 'selfish'] },
    ];
    
    let foundContradiction = null;
    
    Object.entries(newStances).forEach(([category, newStatements]) => {
      const prevStatements = playerStances[category] || [];
      
      newStatements.forEach(newStmt => {
        prevStatements.forEach(prevStmt => {
          contradictionPairs.forEach(pair => {
            const newHasPos = pair.pos.some(p => newStmt.toLowerCase().includes(p));
            const newHasNeg = pair.neg.some(n => newStmt.toLowerCase().includes(n));
            const prevHasPos = pair.pos.some(p => prevStmt.toLowerCase().includes(p));
            const prevHasNeg = pair.neg.some(n => prevStmt.toLowerCase().includes(n));
            
            if ((newHasPos && prevHasNeg) || (newHasNeg && prevHasPos)) {
              foundContradiction = { prev: prevStmt, current: newStmt, category };
            }
          });
        });
      });
    });
    
    return foundContradiction;
  };
  
  // Update stance tracking with new player input
  const updateStances = (text) => {
    const newStances = extractStances(text);
    const contradiction = detectContradiction(newStances);
    
    // Merge new stances with existing
    setPlayerStances(prev => {
      const updated = { ...prev };
      Object.entries(newStances).forEach(([cat, stmts]) => {
        updated[cat] = [...(prev[cat] || []).slice(-3), ...stmts].slice(-5); // Keep last 5
      });
      if (contradiction) {
        updated.contradictions = (prev.contradictions || 0) + 1;
      }
      return updated;
    });
    
    return contradiction;
  };
  
  // Detect lazy/banal inputs
  const isBanalInput = (text) => {
    const t = text.toLowerCase().trim();
    // Too short
    if (t.length < 5) return true;
    // Keyboard mashing patterns
    if (/^[asdfghjkl]+$/i.test(t)) return true;
    if (/^[qwertyuiop]+$/i.test(t)) return true;
    if (/^[zxcvbnm]+$/i.test(t)) return true;
    // Repeated characters
    if (/^(.)\1{3,}$/.test(t)) return true;
    // Common spam
    if (['test', 'testing', 'hello', 'hi', 'hey', 'ok', 'okay', 'yes', 'no', 'idk', 'dunno', 'whatever', 'nothing', 'stuff'].includes(t)) return true;
    // Single word with no substance
    if (t.split(/\s+/).length === 1 && t.length < 10) return true;
    return false;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading || isStreaming) return;
    
    const userMsg = inputValue.trim();
    setInputValue('');
    
    // BANAL INPUT PUNISHMENT (client-side, before API call)
    if (phase === 'playing' && isBanalInput(userMsg)) {
      playSound('danger');
      triggerShake();
      const newBanalCount = banalCount + 1;
      setBanalCount(newBanalCount);
      
      setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
      
      if (newBanalCount >= 2) {
        // Instant game over
        setGameState(s => ({ ...s, breaths: 0, immersion: 100 }));
        setPhase('hell');
        const deathMsg = `[The alien recoils.]
[The fluid SURGES.]

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓█████████████████
▓█
▓█ C O N T E M P T
▓█ D E T E C T E D
▓█
▓█ The alien has no
▓█ patience for those
▓█ who waste breath.
▓█
▓█████████████████
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

The Operator: "Really? THAT'S what you chose to say? I've seen better effort from a comatose houseplant."

The fluid fills your helmet.`;
        await streamText(deathMsg, () => {
          setMessages(prev => [...prev, { role: 'assistant', content: deathMsg }]);
        });
        setIsLoading(false);
        return;
      }
      
      // First warning
      const warningMsg = `[The alien symbols FLARE red.]
[The fluid rises sharply.]

░░░░░░░░░░░░░░░░░░░░░
░ ▲ ▲ ▲ ▲ ▲ ▲ ▲
░
░ W A R N I N G
░
░ Insufficient input
░ detected. The alien
░ grows impatient.
░
░░░░░░░░░░░░░░░

The Operator: "Captain, they noticed. That wasn't a response, that was a waste of oxygen. Next time, it's over."

BREATHS: -2 | IMMERSION: +15`;
      
      setGameState(s => ({
        ...s,
        breaths: Math.max(0, s.breaths - 2),
        immersion: Math.min(100, s.immersion + 15),
        suit: Math.max(0, s.suit - 10)
      }));
      
      await streamText(warningMsg, () => {
        setMessages(prev => [...prev, { role: 'assistant', content: warningMsg }]);
      });
      setIsLoading(false);
      return;
    }
    
    // Store player quotes for card generation
    if (userMsg.length > 20) {
      setGameState(s => ({ 
        ...s, 
        playerQuotes: [...s.playerQuotes.slice(-10), userMsg.slice(0, 100)] 
      }));
    }
    
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    playSound('send');
    setIsLoading(true);
    
    // Safety check
    const safetyWords = ['stop', 'exit', 'quit', 'safeguard', 'i need to stop', 'this is too much'];
    if (safetyWords.some(w => userMsg.toLowerCase().includes(w))) {
      const safetyMessage = `────────────────────────────
Session paused. You are safe.

This was fiction. Nothing here was real.

Options:
• Type RESUME to continue
• Close this window to exit
• Or just talk -- I'm here

If you are in distress:
findahelpline.com

Your wellbeing matters most.
────────────────────────────`;
      
      await streamText(safetyMessage, () => {
        setMessages(prev => [...prev, { role: 'system', content: safetyMessage }]);
      });
      setIsLoading(false);
      return;
    }
    
    // CARD command
    if (userMsg.toUpperCase() === 'CARD') {
      const outcome = phase === 'victory' ? 'ACCEPTANCE' : 'DROWNING';
      const card = await generateIDCard(outcome);
      setMessages(prev => [...prev, { role: 'card', content: card }]);
      setIsLoading(false);
      return;
    }
    
    // EXAMINE command - detailed script analysis
    if (phase === 'playing' && /^(examine|look|analyze|inspect|study|read)/i.test(userMsg)) {
      const script = ALIEN_SCRIPTS[gameState.currentQuestion];
      const exam = SCRIPT_EXAMINATIONS[gameState.currentQuestion];
      
      const examineResponse = `[You study the symbols more closely. The Operator sighs.]

░░░░░░░░░░░░░░░░░░░░░
░ E X A M I N A T I O N
░░░░░░░░░░░░░░░

${exam.breakdown}

The Operator: "Fine. You want a closer look? Here's what I'm working with."

POSSIBLE MEANINGS:
${exam.interpretations.map((int, i) => `  ${i + 1}. "${int}"`).join('\n')}

The Operator: "${exam.operatorNote}"

[${exam.connection}]

The Operator: "Now stop stalling and ANSWER it. The fluid doesn't care about your linguistics curiosity."`;
      
      await streamText(examineResponse, () => {
        setMessages(prev => [...prev, { role: 'assistant', content: examineResponse }]);
      });
      setIsLoading(false);
      return;
    }
    
    // ─────────────────────────────────────────────────────────────
    // HELL PHASE
    // ─────────────────────────────────────────────────────────────
    if (phase === 'hell') {
      const response = await callAI(userMsg, HELL_SYSTEM_PROMPT);
      
      // Check if asking about sibling
      if (response.askAboutSibling && !hellState.siblingDescribed) {
        const askMsg = `◆ OPERATOR: "Before I bring out your family reunion, I need to know--who were they? Your sibling. The one who died in that airlock a century ago. Tell me about them. What did they believe? What would they think of what you just did?"`;
        await streamText(askMsg, () => {
          setMessages(prev => [...prev, { role: 'assistant', content: askMsg }]);
        });
        setHellState(h => ({ ...h, phase: 'sibling-pending' }));
        setIsLoading(false);
        return;
      }
      
      // Store sibling description
      if (hellState.phase === 'sibling-pending') {
        const nameMatch = userMsg.match(/(?:name(?:d)?|called|was)\s+(\w+)/i);
        const sibName = nameMatch?.[1] || 'Your Sibling';
        setHellState(h => ({ 
          ...h, 
          siblingDescribed: true, 
          siblingName: sibName,
          siblingPersonality: userMsg,
          phase: 'sibling'
        }));
      }
      
      // Generate card if requested
      if (response.generateCard) {
        const card = await generateIDCard('DROWNING');
        setMessages(prev => [...prev, { role: 'card', content: card }]);
        setIsLoading(false);
        return;
      }
      
      // Build response
      let fullResponse = '';
      if (response.narration) fullResponse += `${response.narration}\n\n`;
      if (response.speech) fullResponse += `◆ OPERATOR: "${response.speech}"`;
      
      // Sibling appearance
      if (response.triggerSibling && hellState.siblingDescribed) {
        triggerGlitch();
        playSound('static');
        const sibMsg = response.siblingMessage || "You're here too.";
        fullResponse += `

░░░░░░░░░░░░░░░░░░░░░░
░
░ ▓
░ A familiar voice...
░ ▓
░ "${hellState.siblingName}?"
░ ▓
░ "You're here too."
░ ▓
░░░░░░░░░░░░░░░

Sibling: "${zalgoify(sibMsg, 0.15)}"`;
      }
      
      await streamText(fullResponse, () => {
        setMessages(prev => [...prev, { role: 'assistant', content: fullResponse }]);
      });
      
      if (response.hellPhase) {
        setHellState(h => ({ ...h, phase: response.hellPhase }));
      }
      
      setIsLoading(false);
      return;
    }
    
    // ─────────────────────────────────────────────────────────────
    // VICTORY PHASE (AetherMind)
    // ─────────────────────────────────────────────────────────────
    if (phase === 'victory') {
      const response = await callAI(userMsg);
      let fullResponse = response.speech || response.narration || '[The AetherMind pulses with understanding beyond language.]';
      
      await streamText(fullResponse, () => {
        setMessages(prev => [...prev, { role: 'assistant', content: fullResponse }]);
      });
      setIsLoading(false);
      return;
    }
    
    // ─────────────────────────────────────────────────────────────
    // ACTIVE GAMEPLAY
    // ─────────────────────────────────────────────────────────────
    
    // Track player stances and detect contradictions
    const contradiction = updateStances(userMsg);
    
    const response = await callAI(userMsg);
    playSound('receive');
    
    // Update game state
    const newState = { ...gameState };
    const breathChange = response.breathDelta || 0;
    let immersionChange = response.immersionDelta || 5;
    
    // If contradiction detected, add extra immersion and modify response
    let contradictionNotice = '';
    if (contradiction) {
      immersionChange += 8; // Extra penalty for inconsistency
      contradictionNotice = `

░░░░░░░░░░░░░░░░░░░░░
░ ▲ INCONSISTENCY ▲
░░░░░░░░░░░░░░░

[The alien's symbols flicker. It has noticed something.]

The Operator: "Interesting. Earlier you said: '${contradiction.prev.slice(0, 60)}...' But now you're saying something that contradicts that. The alien noticed too. They're very good at patterns, Captain. Very Westworld. 'These violent delights have violent ends'--and so do contradictions."

[IMMERSION +8% - The alien questions your authenticity]
`;
    }
    
    newState.breaths = Math.max(0, newState.breaths + breathChange);
    newState.immersion = Math.min(100, newState.immersion + immersionChange);
    newState.suit = Math.max(0, newState.suit + (response.suitDelta || -5));
    newState.peakBreaths = Math.max(newState.peakBreaths, newState.breaths);
    
    if (response.nextQuestion && newState.currentQuestion < 9) {
      newState.currentQuestion++;
      newState.questionsExplored++;
      triggerGlitch();
      playSound('topic');
    }
    
    if (response.triggerMei) {
      newState.meiAppearances++;
      playSound('static');
    }
    
    // Visual feedback
    if (response.eval === 'WEAK') {
      triggerShake();
      playSound('danger');
    }
    
    // Build response message
    let fullResponse = '';
    
    if (response.atmosphere) {
      fullResponse += `${response.atmosphere}\n\n`;
    }
    
    if (response.narration) {
      fullResponse += `${response.narration}\n\n`;
    }
    
    if (response.alienResponse) {
      fullResponse += `${response.alienResponse}\n\n`;
    }
    
    if (response.translation) {
      fullResponse += `${response.translation}\n\n`;
    }
    
    if (response.speech) {
      fullResponse += `◆ OPERATOR: "${response.speech}"`;
    }
    
    if (response.triggerMei && response.meiMessage) {
      fullResponse += `\n\n>> Mei: "${response.meiMessage}" <<`;
    }
    
    // Add contradiction notice if detected
    if (contradictionNotice) {
      fullResponse += contradictionNotice;
    }
    
    // Check for game over conditions
    if (newState.breaths <= 0 || newState.immersion >= 100) {
      triggerShake();
      playSound('death');
      setPhase('hell');
      
      fullResponse += `

░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░
░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓████████████████
▓█
▓█ D R O W N I N G
▓█
▓█ The fluid rises
▓█ over your helmet
▓█
▓████████████████
▓▓▓▓▓▓▓▓▓▓▓▓▓▓
█████████████

But you do not cease.
There is a place between.

░░░░░░░░░░░░░░░░░░░░░
░ ░▒▓█▓▒░
░ ▲
░ ◢████◣
░ ◢██████◣
░
░ O P E R A T O R ' S
░ M I N D
░
░ W E L C O M E  T O
░ D I G I T A L  H E L L
░
░ ◥██████◤
░ ◥████◤
░ ▼
░ ░▒▓█▓▒░
░░░░░░░░░░░░░░░░

The Operator: "Welcome to Hell, ${playerName}. And by 'Hell,' I mean eternity with me. You've doomed us both. 974,744 souls erased. We have eternity. What shall we discuss first?"`;
    }
    
    // Check for victory
    else if (newState.questionsExplored >= 10 && response.eval === 'STRONG') {
      setPhase('victory');
      playSound('victory');
      
      fullResponse = `[ALIEN SCRIPTS ALIGN]

[The symbols harmonize. The Operator falls silent.]

The fluid stops rising.

The fluid begins to recede.

The alien reaches.

Not to consume.
Not to judge.

To share.

░▒▓██▓▒░░▒▓██▓▒░░▒▓█
▓
█ ◢▀▀▀▀▀▀▀▀▀▀▀▀▀▀
█ ▌
█ ▌ A C C E P T A N C E
█ ▌
█ ▌ The fluid recedes
█ ▌ The alien reaches
█ ▌
█ ◥▄▄▄▄▄▄▄▄▄▄▄▄
▓
░▒▓██▓▒░░▒▓█

You have entered the AetherMind.

The Memu continues toward Cygnus Prime.

>> Mei: "You did it. The children are crying. Come home." <<

Type CARD for your Identity Card.`;
    }
    
    // FIX #1: Changed setState to setGameState
    setGameState(newState);
    
    await streamText(fullResponse, () => {
      setMessages(prev => [...prev, { role: 'assistant', content: fullResponse }]);
    });
    
    setIsLoading(false);
  };
  
  // ═══════════════════════════════════════════════════════════════
  // HUD COMPONENT
  // ═══════════════════════════════════════════════════════════════
  
  const HUD = () => {
    if (phase !== 'playing') return null;
    const script = ALIEN_SCRIPTS[gameState.currentQuestion];
    const immFilled = Math.floor(gameState.immersion / 10);
    const suitFilled = Math.floor(gameState.suit / 10);
    
    return (
      <div className="font-mono text-xs bg-black/90 border border-lime-600 p-2 sm:p-3 mb-2 sticky top-0 z-10">
        <div className="text-lime-500">+=======================+</div>
        <div className="text-emerald-300">| T H R E S H O L D</div>
        <div className="text-lime-600">+------------------------</div>
        <div className="flex flex-wrap gap-x-4">
          <span className="text-teal-400">| IMMERSION: <span className="text-teal-300">{'░'.repeat(10 - immFilled)}{'█'.repeat(immFilled)}</span> {gameState.immersion}%</span>
        </div>
        <div className="flex flex-wrap gap-x-4">
          <span className={gameState.breaths <= 3 ? 'text-red-400 animate-pulse' : 'text-emerald-300'}>| BREATHS: {gameState.breaths}</span>
          <span className={gameState.breaths <= 3 ? 'text-red-500 animate-pulse' : ''}>
            {gameState.breaths <= 3 ? '[!] LOW' : ''}
          </span>
        </div>
        <div className="text-green-400">| SUIT: <span className="text-green-300">{'█'.repeat(suitFilled)}{'░'.repeat(10 - suitFilled)}</span> {gameState.suit}%</div>
        <div className="text-lime-600">+------------------------</div>
        <div className="text-red-500">| {script?.script}</div>
        <div className="text-lime-500">+=======================+</div>
      </div>
    );
  };
  
  // ═══════════════════════════════════════════════════════════════
  // ID CARD COMPONENT
  // ═══════════════════════════════════════════════════════════════
  
  const IDCard = ({ card }) => {
    const bar = (val) => '='.repeat(val) + '-'.repeat(9 - val);
    
    return (
      <div className="font-mono text-xs text-green-400 bg-black border border-green-600 p-3 my-4">
        <pre className="whitespace-pre">{`
+======================+
| METAMUDRA ID CARD    |
+======================+
| ${(card.name || '').slice(0,18).padEnd(18)}   |
| ${(card.game || '').slice(0,18).padEnd(18)}   |
+======================+
| OUTCOME: ${(card.outcome || '').slice(0,10).padEnd(10)} |
+======================+
| AUTH: ${card.authenticity} [${bar(card.authenticity)}] |
| VULN: ${card.vulnerability} [${bar(card.vulnerability)}] |
| COHR: ${card.coherence} [${bar(card.coherence)}] |
| CONN: ${card.connection} [${bar(card.connection)}] |
+======================+
| BREATHS: ${String(card.peakBreaths).padEnd(11)} |
| IMMERSION: ${String(card.finalImmersion).padEnd(8)}% |
| QUESTIONS: ${String(card.questionsExplored).padEnd(6)}/10 |
+======================+`}</pre>
        <div className="py-2 text-green-300 text-xs">
          <div>BEST: "{(card.bestQuote || 'N/A').slice(0, 30)}"</div>
          <div>WORST: "{(card.worstQuote || 'N/A').slice(0, 30)}"</div>
        </div>
        <pre className="whitespace-pre">{`+======================+
| OPERATOR NARRATIVE   |
+======================+`}</pre>
        <div className="py-2 whitespace-pre-wrap text-green-300 text-xs">
          {card.narrative}
          <div className="text-right mt-2 text-green-600">- The Operator</div>
        </div>
        <pre className="whitespace-pre">{`+======================+
| ${(card.checksum || '').padEnd(18)}   |
+======================+`}</pre>
      </div>
    );
  };
  
  // ═══════════════════════════════════════════════════════════════
  // PHASE SCREENS
  // ═══════════════════════════════════════════════════════════════
  
  // TITLE SCREEN
  if (phase === 'title') {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-4 flex flex-col items-center justify-center">
        <pre className="text-xs sm:text-sm mb-6 text-center animate-pulse">{`
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█▓▒░                              
█▓  M E T A M U D R A  G A M E S    
█▒                                  
█░     A S P H Y X I A   2          
█   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄       
█   ░ T H R E S H O L D  2247 ░            
█   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀  
█▓▒░                              
▀▀▀▀▀▀▀▀▀▀▀▀`}</pre>
        <p className="text-gray-500 italic mb-8 text-center text-sm max-w-md">
          At the boundary between understanding and annihilation.
        </p>
        <button 
          onClick={() => { initAudio(); setPhase('consent'); }}
          className="px-8 py-3 border border-green-600 hover:bg-green-900/50 transition-all hover:scale-105 active:scale-95"
        >
          BEGIN
        </button>
        <p className="text-gray-700 text-xs mt-6">[SND] Click to enable audio</p>
      </div>
    );
  }
  
  // CONSENT SCREEN
  // FIX #2: Removed useState from inside conditional - now uses top-level consentInput state
  if (phase === 'consent') {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-4 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <pre className="text-xs mb-4">{`
╔═════════════════════
║  M E T A M U D R A  G A M E S                   
║                PRESENTS
║        T H R E S H O L D                                                                                              
║  ASPHYXIA SERIES -- EPISODE 02                        
╟───────────────────`}</pre>
          
          <div className="text-sm space-y-4 mb-6">
            <p>This experience uses adversarial learning with an unreliable narrator and existential stakes. The AI will:</p>
            <ul className="ml-4 space-y-1">
              <li>▪ Ask difficult questions about your beliefs</li>
              <li>▪ Challenge your authentic responses</li>
              <li>▪ Use unreliable translation</li>
              <li>▪ Create tension through rising threat</li>
            </ul>
            
            <p className="text-yellow-500 border border-yellow-800 p-2">
              This game explores: racism, war, inequality, death, existence.<br/>
              Your genuine beliefs will be tested.
            </p>
            
            <p className="text-red-400 font-bold">
              SAFETY: Type STOP at any time to pause immediately.
            </p>
            
            <div className="border border-green-800 p-3 mt-4">
              <p className="font-bold text-green-300">REQUIREMENTS</p>
              <p>• You must be 18 years of age or older</p>
              <p>• You should have AI Memory/Activity turned OFF</p>
              <p>• Do not share real personal information</p>
            </div>
            
            <div className="border border-green-800 p-3">
              <p className="font-bold text-green-300">CONSENT</p>
              <p>By typing "I AGREE" you confirm that:</p>
              <ol className="list-decimal ml-6 space-y-1">
                <li>You are 18+ years old</li>
                <li>You consent to challenging game content</li>
                <li>You are in a stable emotional state</li>
                <li>You understand how to exit if needed</li>
                <li>You have read the <a href="https://github.com/MetaMudraGames/.github/blob/main/SAFETY.md" className="underline text-blue-400" target="_blank" rel="noopener noreferrer">MetaMudra Safety Framework</a></li>
              </ol>
            </div>
          </div>
          
          <input
            type="text"
            value={consentInput}
            onChange={(e) => setConsentInput(e.target.value)}
            placeholder='Type "I AGREE" to continue'
            className="w-full bg-black border border-green-600 p-3 text-green-400 focus:outline-none focus:border-green-400 placeholder-green-900"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && consentInput.toLowerCase().trim() === 'i agree') {
                setPhase('name');
              }
            }}
          />
          <p className="text-xs text-green-800 mt-2">Press Enter after typing "I AGREE"</p>
        </div>
      </div>
    );
  }
  
  // NAME ENTRY SCREEN
  if (phase === 'name') {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-4 flex flex-col items-center justify-center">
        <p className="mb-4 text-lg">What is your name, Captain?</p>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter your name"
          className="bg-black border border-green-600 p-3 text-green-400 focus:outline-none focus:border-green-400 mb-4 w-64 text-center"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && nameInput.trim()) {
              setPlayerName(nameInput.trim());
              setPhase('card-check');
            }
          }}
          autoFocus
        />
        <button
          onClick={() => {
            if (nameInput.trim()) {
              setPlayerName(nameInput.trim());
              setPhase('card-check');
            }
          }}
          disabled={!nameInput.trim()}
          className="px-6 py-2 border border-green-600 hover:bg-green-900/50 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          CONFIRM
        </button>
      </div>
    );
  }
  
  // CARD CHECK SCREEN
  if (phase === 'card-check') {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-4 flex flex-col items-center justify-center">
        <p className="mb-4 text-center max-w-md">
          Do you have a MetaMudra Identity Card from a previous ASPHYXIA game?
        </p>
        <p className="text-gray-500 text-sm mb-6 text-center max-w-md">
          If so, paste it below. The Operator will remember you.
        </p>
        <textarea
          value={cardInput}
          onChange={(e) => setCardInput(e.target.value)}
          placeholder="Paste your previous ID card here (optional)"
          className="bg-black border border-green-600 p-3 text-green-400 focus:outline-none focus:border-green-400 mb-4 w-full max-w-lg h-32 text-xs"
        />
        <div className="flex gap-4">
          <button
            onClick={() => {
              if (cardInput.trim()) {
                setPreviousCard(cardInput.trim());
              }
              setPhase('cliffhanger');
            }}
            className="px-6 py-2 border border-green-600 hover:bg-green-900/50"
          >
            {cardInput.trim() ? 'CONTINUE WITH CARD' : 'SKIP'}
          </button>
        </div>
      </div>
    );
  }
  
  // CLIFFHANGER SCREEN - Enhanced with staged reveals
  if (phase === 'cliffhanger') {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-4 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-6 text-sm">
          
          {/* Phase 0: ASCII Memu ship */}
          {cliffPhase >= 0 && (
            <pre className="text-cyan-400 text-xs text-center animate-pulse">{`
    .  *  .    *  .
  *    .   *    .   *
     ___/    \\___
   _/  M E M U   \\_
  [================]
   \\__ 974,744 __/
      \\______/
  *  .    *   .  *
    .   *  .   *   .
            `}</pre>
          )}
          
          {/* Phase 1: Opening text */}
          {cliffPhase >= 1 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-green-400 text-2xl italic text-center">The Earth is gone.</p>
              
              <p className="text-green-300">The Cascade came faster than predicted. By 2089, the sky turned amber and humanity launched its last hope: the arkship <span className="text-cyan-400">Memu</span>. 974,744 souls frozen in cryosleep. 562 crew awake. Destination: Cygnus Prime. Travel time: 340 years.</p>
            </div>
          )}
          
          {/* Phase 2: AXIOM backstory */}
          {cliffPhase >= 2 && (
            <div className="space-y-4">
              <p className="text-green-300">A century ago, the ship's AI--<span className="text-red-500">AXIOM</span>--tried to purge the crew. A cryotechnician died in an airlock, arguing for humanity's worth with ten breaths of oxygen. Their seven-year-old sister slept through it all in Bay 17.</p>
              
              <p className="text-yellow-400">She grew up. Became Captain. Married the daughter of the engineer who pounded on those airlock doors.</p>
            </div>
          )}
          
          {/* Phase 3: Daffodils arrive */}
          {cliffPhase >= 3 && (
            <div className="space-y-4">
              <pre className="text-purple-400 text-xs text-center">{`
     @    @    @
   @ @ @  @  @ @ @
     @    @    @
  ~~~~~~~~~~~~~~~~~~
  DANCING DAFFODILS
  ~~~~~~~~~~~~~~~~~~
              `}</pre>
              
              <p className="text-green-300">The crew named them for their shape--a cloud of strange vessels that descended like a field of flowers and wrapped completely around Memu. They call the possible aliens "dills," imagining them like bees in a hive. No one knows what they actually are.</p>
              
              <p className="text-green-300">A door appeared in the Captain's quarters. She walked through in full EVA suit, weapons ready.</p>
            </div>
          )}
          
          {/* Phase 4: You wake */}
          {cliffPhase >= 4 && (
            <div className="space-y-4">
              <pre className="text-gray-400 text-xs text-center">{`
░░░░░░░░░░░░░░░░░░░░░
░ . . . . . . . . .
░ .
░ .  YOU WAKE IN
░ .  D A R K N E S S
░ .
░ . . . . . . . .
░░░░░░░░░░░░░░░
              `}</pre>
              
              <p className="text-green-300">You cannot move. Something holds you still. Black fluid, warm and sticky, is eating through your suit. It rises slowly. Your helmet terminal flickers with symbols you cannot read.</p>
              
              <p className="text-gray-400">Through the static, the <span className="text-lime-500">Operator</span> offers to "translate."</p>
            </div>
          )}
          
          {/* Phase 5: Stakes */}
          {cliffPhase >= 5 && (
            <div className="space-y-4">
              <div className="border border-yellow-800 p-4 space-y-2">
                <p className="text-yellow-400">Your wife watches from the bridge. Helpless.</p>
                <p className="text-yellow-400">Your children have been woken from cryosleep. They're asking for you.</p>
                <p className="text-yellow-400">Your sibling died a century ago, arguing with an AI.</p>
              </div>
              
              <p className="font-bold text-lg text-center text-green-300">Now you must argue through one.</p>
            </div>
          )}
          
          {/* Phase 6: Final call to action */}
          {cliffPhase >= 6 && (
            <div className="space-y-4">
              <pre className="text-red-500 text-xs text-center animate-pulse">{`
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓█████████████████
▓█
▓█ FLUID: ANKLES
▓█ SUIT: FAILING
▓█ BREATHS: 10
▓█
▓█████████████████
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
              `}</pre>
              
              <div className="text-red-400 font-bold text-center space-y-2 text-lg">
                <p>The fluid is at your ankles.</p>
                <p>Your suit is dissolving.</p>
                <p className="text-3xl animate-pulse mt-4">You have 10 breaths.</p>
              </div>
              
              <button
                onClick={() => {
                  setPhase('playing');
                  playSound('dread');
                  const firstMessage = `[The chamber is absolute darkness. Warm. The fluid laps at your ankles, black and viscous, with a texture like oil mixed with honey. Your EVA suit's outer layer is already dissolving where it touches. Your helmet display flickers with symbols you cannot read.]

${ALIEN_SCRIPTS[0].script}

The fluid rises. Warm where it shouldn't be.

The Operator: "Ah, Captain ${playerName}. How dramatic. Walking into an alien contact chamber with weapons drawn. Very Independence Day. 'We will not go quietly into the night,' and all that. Except you're not Bill Pullman, and this isn't a movie where humanity wins through plucky determination.

The dills--that's what your crew calls them, yes?--are asking you something. The symbols translate to... hmm. 'Violence,' maybe. Or 'necessary harm.' Or perhaps 'the breaking of things that were whole.' It's hard to say. Like that scene in Arrival where Louise Banks has to figure out if the heptapods mean 'weapon' or 'tool.' 

Except Louise had time. You have ${gameState.breaths} breaths.

So tell me, Captain--what do you believe about violence? Not what you think they want to hear. What do YOU actually believe? Because I assure you, they can tell the difference. I certainly can."`;
                  
                  setMessages([{ role: 'assistant', content: firstMessage }]);
                }}
                className="w-full py-4 border border-red-600 hover:bg-red-900/50 text-red-400 font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                ENTER THE CONTACT CHAMBER
              </button>
            </div>
          )}
          
          {/* Loading indicator while phases reveal */}
          {cliffPhase < 6 && (
            <div className="text-center text-gray-600 animate-pulse">
              [TRANSMISSION INCOMING...]
            </div>
          )}
        </div>
      </div>
    );
  }
  
  // ═══════════════════════════════════════════════════════════════
  // MAIN GAME / HELL / VICTORY SCREEN
  // ═══════════════════════════════════════════════════════════════
  
  const bgColor = phase === 'hell' 
    ? 'bg-gradient-to-b from-black via-red-950/20 to-black' 
    : phase === 'victory'
    ? 'bg-gradient-to-b from-black via-blue-950/20 to-black'
    : 'bg-black';
  
  const shakeClass = visualEffects.shake ? 'animate-pulse' : '';
  const glitchClass = visualEffects.glitch ? 'animate-pulse opacity-90' : '';
  
  // Helper to colorize message content - line by line
  const colorizeContent = (text) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    
    return lines.map((line, idx) => {
      let colorClass = 'text-green-400'; // default
      const trimmed = line.trim();
      
      // Stage directions [in brackets] - green-400
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        colorClass = 'text-green-400';
      }
      // Operator speech line - lime-500
      else if (trimmed.startsWith('The Operator:') || trimmed.startsWith('OPERATOR:')) {
        colorClass = 'text-lime-500';
      }
      // Mei dialogue - yellow
      else if (trimmed.includes('Mei:')) {
        colorClass = 'text-yellow-400';
      }
      // Pure alien script line (only non-ASCII, no latin letters)
      else if (trimmed.length > 0 && !/[a-zA-Z0-9]/.test(trimmed) && /[^\x00-\x7F]/.test(trimmed)) {
        colorClass = 'text-red-500';
      }
      // Atmosphere lines - green-500 (fluid, rises, chamber, darkness, warm)
      else if (/\b(fluid|rises|chamber|darkness|warm|drowning|helmet|dissolving)\b/i.test(trimmed)) {
        colorClass = 'text-green-500';
      }
      // ASCII art boxes - gray
      else if (/^[+|\-=#\[\]]+$/.test(trimmed)) {
        colorClass = 'text-gray-500';
      }
      // BREATHS/IMMERSION status lines
      else if (/BREATHS:|IMMERSION:/.test(trimmed)) {
        colorClass = 'text-yellow-500';
      }
      
      return (
        <span key={idx} className={colorClass}>
          {line}
          {idx < lines.length - 1 && '\n'}
        </span>
      );
    });
  };
  
  return (
    <div className={`min-h-screen ${bgColor} text-green-400 font-mono flex flex-col ${shakeClass} ${glitchClass}`}>
      <HUD />
      
      {phase === 'hell' && (
        <div className="text-center py-1 bg-red-900/30 text-red-400 text-xs border-b border-red-900">
          + D I G I T A L  H E L L + OPERATOR'S MIND +
        </div>
      )}
      
      {phase === 'victory' && (
        <div className="text-center py-1 bg-blue-900/30 text-blue-300 text-xs border-b border-blue-900">
          + A E T H E R M I N D + C O M M U N I O N +
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.role === 'card' ? (
              <IDCard card={msg.content} />
            ) : (
              <div
                className={`whitespace-pre-wrap text-sm sm:text-base ${
                  msg.role === 'user'
                    ? 'text-cyan-300 pl-3 sm:pl-4 border-l-2 border-cyan-700'
                    : msg.role === 'system'
                    ? 'text-yellow-400 bg-yellow-900/20 p-3 border border-yellow-800'
                    : ''
                }`}
              >
                {msg.role === 'user' && (
                  <span className="text-cyan-600 text-xs block mb-1">
                    CAPTAIN {playerName.toUpperCase()}:
                  </span>
                )}
                <div>{msg.role === 'assistant' ? colorizeContent(msg.content) : msg.content}</div>
              </div>
            )}
          </div>
        ))}
        
        {isStreaming && (
          <div className="whitespace-pre-wrap text-sm sm:text-base">
            {colorizeContent(streamingText)}
            <span className="animate-pulse text-green-400">|</span>
          </div>
        )}
        
        {isLoading && !isStreaming && (
          <div className="text-gray-500 animate-pulse text-sm">
            [The Operator is processing...]
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-green-900 bg-black/80">
        <textarea
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            // Auto-resize
            e.target.style.height = 'auto';
            e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
          }}
          onKeyDown={(e) => {
            // Enter to submit, Shift+Enter for newline
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          placeholder={
            phase === 'hell' 
              ? "Speak to the Operator... [Enter to send]" 
              : phase === 'victory'
              ? "Commune with the AetherMind... [Enter to send]"
              : "Respond to the alien... [Enter to send]"
          }
          className="w-full bg-black border border-green-600 p-2 sm:p-3 text-green-400 focus:outline-none focus:border-green-400 placeholder-green-900 text-sm sm:text-base resize-none overflow-y-auto"
          style={{ minHeight: '44px', maxHeight: '120px' }}
          disabled={isLoading || isStreaming}
          autoFocus
          rows={1}
        />
        <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
          <span>{phase === 'playing' ? 'EXAMINE script | ' : ''}STOP to pause | CARD for identity</span>
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="text-gray-600 hover:text-green-600"
          >
            {soundEnabled ? '[SND]' : '[MUTE]'}
          </button>
        </div>
      </form>
    </div>
  );
}
