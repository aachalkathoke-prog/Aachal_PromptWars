import type { Scenario, Persona, DebateMessage, ConsensusInsight, PolarCoordinate, ScenarioRecommendation, ScenarioRoadmapPhase } from '../types';
import { DEFAULT_PERSONAS } from '../data/scenarios';

export interface CustomAnalysisParams {
  prompt: string;
  category?: 'AI & Frontier Tech' | 'Corporate Strategy' | 'Bioethics & Health' | 'Public Policy & Society' | 'Macroeconomics';
  polarization?: 'High Polarization' | 'Moderate Debate' | 'Nuanced Consensus';
  selectedPersonaIds?: string[];
  customPersonas?: Persona[];
}

export function generateCustomScenario(params: CustomAnalysisParams): Scenario {
  const { prompt, category = 'AI & Frontier Tech', polarization = 'High Polarization', selectedPersonaIds = Object.keys(DEFAULT_PERSONAS), customPersonas = [] } = params;

  // Build active personas
  const activePersonas: Persona[] = [];

  const allAvailable = [...Object.values(DEFAULT_PERSONAS), ...customPersonas];

  allAvailable.forEach(p => {
    if (!selectedPersonaIds.includes(p.id)) return;

    let stance: Persona['stance'] = 'neutral_pragmatic';
    let stanceLabel = 'Balanced Pragmatic Evaluation';
    let confidence = 85;

    // Archetype-driven logic
    if (p.archetype === 'technologist') {
      stance = polarization === 'High Polarization' ? 'strongly_support' : 'support';
      stanceLabel = 'Aggressive Acceleration & Innovation Priority';
      confidence = 92;
    } else if (p.archetype === 'ethicist') {
      stance = polarization === 'High Polarization' ? 'strongly_oppose' : 'skeptical';
      stanceLabel = 'Precautionary Alignment & Strict Guardrails';
      confidence = 89;
    } else if (p.archetype === 'strategist') {
      stance = 'support';
      stanceLabel = 'Pragmatic Value Capture & Unit Economics';
      confidence = 83;
    } else if (p.archetype === 'humanist') {
      stance = polarization === 'High Polarization' ? 'skeptical' : 'support';
      stanceLabel = 'Human Agency, Labor Protection & Dignity';
      confidence = 86;
    } else if (p.archetype === 'skeptic') {
      stance = 'strongly_oppose';
      stanceLabel = 'Adversarial Red-Teaming & Cascading Risk';
      confidence = 94;
    } else if (p.archetype === 'philosopher') {
      stance = 'neutral_pragmatic';
      stanceLabel = 'First-Principles Ontological Reframing';
      confidence = 80;
    }

    activePersonas.push({
      ...p,
      stance,
      stanceLabel,
      confidenceScore: confidence,
      keyArguments: [
        `Addresses systemic bottlenecks by optimizing for core ${p.archetype} values and mitigating downstream friction.`,
        `Empirical models indicate high leverage if execution adheres to clear boundary conditions and verified benchmarks.`,
        `Failing to account for ${p.archetype === 'ethicist' ? 'moral liability' : p.archetype === 'strategist' ? 'capital efficiency' : 'foundational assumptions'} will lead to strategic failure.`
      ],
      vulnerabilities: [
        `Assumes static external environment during high-variance transition windows.`
      ],
      criticalTradeOff: `Trades near-term simplicity for robust long-term structural alignment.`,
      proposedSafeguard: `Deploy dual-key verification loops with independent third-party audit checkpoints.`
    });
  });

  const debateTranscript: DebateMessage[] = [
    {
      id: `live-deb-1`,
      roundNumber: 1,
      personaId: activePersonas[0]?.id || 'technologist',
      speakerName: activePersonas[0]?.name || 'Technologist',
      speakerRole: activePersonas[0]?.role || 'AI Architect',
      avatar: activePersonas[0]?.avatar || '',
      color: activePersonas[0]?.color || '#06b6d4',
      phase: 'Opening Thesis',
      content: `In analyzing "${prompt}", we must recognize that inaction or incrementalism carries massive hidden opportunity costs. Acceleration with iterative feedback loops is the only path to antifragility.`,
      sentiment: 'aggressive',
      timestamp: 'Round 1 · 00:00'
    },
    {
      id: `live-deb-2`,
      roundNumber: 1,
      personaId: activePersonas[1]?.id || 'ethicist',
      speakerName: activePersonas[1]?.name || 'Ethicist',
      speakerRole: activePersonas[1]?.role || 'Alignment Auditor',
      avatar: activePersonas[1]?.avatar || '',
      color: activePersonas[1]?.color || '#ec4899',
      phase: 'Cross-Examination',
      rebuttalTargetId: activePersonas[0]?.id,
      rebuttalTargetName: activePersonas[0]?.name,
      content: `We cannot optimize purely for velocity when the blast radius of a failure mode is irreversible. The ethical and governance framework must precede operational scaling, not follow it as an afterthought.`,
      sentiment: 'measured',
      timestamp: 'Round 1 · 00:45'
    },
    {
      id: `live-deb-3`,
      roundNumber: 2,
      personaId: activePersonas[2]?.id || 'strategist',
      speakerName: activePersonas[2]?.name || 'Strategist',
      speakerRole: activePersonas[2]?.role || 'Venture Strategist',
      avatar: activePersonas[2]?.avatar || '',
      color: activePersonas[2]?.color || '#10b981',
      phase: 'Rebuttal',
      rebuttalTargetId: activePersonas[1]?.id,
      rebuttalTargetName: activePersonas[1]?.name,
      content: `Both pure speed and infinite precaution fail if the economics do not clear. We must tie milestones directly to quantifiable value capture and risk-adjusted return on invested capital.`,
      sentiment: 'inquisitive',
      timestamp: 'Round 2 · 01:20'
    },
    {
      id: `live-deb-4`,
      roundNumber: 3,
      personaId: activePersonas[3]?.id || 'philosopher',
      speakerName: activePersonas[3]?.name || 'Philosopher',
      speakerRole: activePersonas[3]?.role || 'Moral Philosopher',
      avatar: activePersonas[3]?.avatar || '',
      color: activePersonas[3]?.color || '#6366f1',
      phase: 'Concession & Synthesis',
      content: `The resolution emerges when we stop viewing this as a binary choice. By designing modular safety envelopes and transparent accountability contracts, we satisfy both the need for bold execution and moral resilience.`,
      sentiment: 'diplomatic',
      timestamp: 'Round 3 · 02:10'
    }
  ];

  const consensusScore = polarization === 'High Polarization' ? 44 : polarization === 'Moderate Debate' ? 68 : 86;

  const consensusInsights: ConsensusInsight[] = [
    {
      id: 'c-ins-1',
      category: 'unanimous_ground',
      title: 'Shared Consensus on Phased Milestone Verification',
      description: 'All evaluating viewpoints agree that all-or-nothing execution is perilous; progressive sandboxed deployment stages minimize catastrophic downside.',
      impactLevel: 'Critical',
      partiesAligned: activePersonas.map(p => p.id),
      partiesConflicted: [],
      actionRecommendation: 'Structure implementation into gated phases with explicit quantitative verification gates before scaling.'
    },
    {
      id: 'c-ins-2',
      category: 'strategic_rift',
      title: 'Dispute Over Governance Overhead vs Execution Agility',
      description: 'Friction between rapid market execution versus exhaustive multi-stakeholder approval cycles.',
      impactLevel: 'High',
      partiesAligned: activePersonas.filter(p => p.archetype === 'technologist' || p.archetype === 'strategist').map(p => p.id),
      partiesConflicted: activePersonas.filter(p => p.archetype === 'ethicist' || p.archetype === 'skeptic').map(p => p.id),
      actionRecommendation: 'Implement automated continuous compliance telemetry rather than manual paper review queues.'
    },
    {
      id: 'c-ins-3',
      category: 'hidden_bias',
      title: 'Potential Optimism Bias in Downstream Friction Estimates',
      description: 'Early models frequently underestimate second-order regulatory backlash and user adoption inertia.',
      impactLevel: 'Medium',
      partiesAligned: activePersonas.filter(p => p.archetype === 'skeptic').map(p => p.id),
      partiesConflicted: [],
      actionRecommendation: 'Conduct adversarial pre-mortems targeting worst-case regulatory and economic assumptions.'
    }
  ];

  const polarCoordinates: PolarCoordinate[] = activePersonas.map((p, idx) => {
    const angle = (idx / activePersonas.length) * 2 * Math.PI;
    const radius = 65 + (idx % 3) * 15;
    return {
      personaId: p.id,
      x: Math.round(Math.cos(angle) * radius),
      y: Math.round(Math.sin(angle) * radius),
      label: `${p.name} (${p.title})`,
      color: p.color
    };
  });

  const recommendations: ScenarioRecommendation[] = [
    {
      pathName: 'The Adaptive Synthesis Framework',
      archetypeRecommendation: 'Recommended Balanced Path',
      description: `A hybrid strategy addressing "${prompt.slice(0, 60)}..." by uniting rapid sandbox iteration with automated compliance guardrails.`,
      riskFactor: 'Medium',
      expectedUpside: 'Maximizes forward velocity while preserving legal, ethical, and operational resilience.',
      primaryCondition: 'Continuous real-time telemetry and air-gapped kill-switches enabled.',
      actionChecklist: [
        'Establish automated compliance monitoring telemetry',
        'Deploy in limited sandbox before broad production roll-out',
        'Set up independent review council for edge-case resolutions',
        'Publish transparent impact reports to stakeholders'
      ]
    }
  ];

  const roadmap: ScenarioRoadmapPhase[] = [
    {
      phase: 'Phase 1 · Foundation & Sandboxing',
      timeframe: 'Months 1 - 2',
      title: 'Pre-Mortem Analysis & Safety Envelope Definition',
      milestones: [
        'Complete adversarial red-team stress test',
        'Define strict quantitative metric triggers',
        'Build isolated sandbox environment'
      ],
      riskMitigation: 'Zero unmonitored external dependencies during sandbox verification.'
    },
    {
      phase: 'Phase 2 · Controlled Actuation',
      timeframe: 'Months 3 - 6',
      title: 'Limited Deployment & Feedback Loop Calibration',
      milestones: [
        'Roll out to 10% of target operational scope',
        'Calibrate anomaly detection and circuit breakers',
        'Conduct monthly stakeholder alignment reviews'
      ],
      riskMitigation: 'Instant automatic fallback to legacy protocols upon anomalous threshold breach.'
    },
    {
      phase: 'Phase 3 · Scaled Resilience',
      timeframe: 'Months 7 - 12',
      title: 'Full Production Scale & Continuous Auditing',
      milestones: [
        'Scale across full enterprise footprint',
        'Establish automated continuous self-correction',
        'Publish annual perspective audit documentation'
      ],
      riskMitigation: 'Continuous third-party security and ethical auditing.'
    }
  ];

  return {
    id: `custom-${Date.now()}`,
    title: prompt.length > 75 ? `${prompt.slice(0, 75)}...` : prompt,
    category,
    dilemmaPrompt: prompt,
    summary: `Multi-perspective strategic deconstruction evaluating innovation velocity, systemic ethics, economic viability, and second-order failure modes.`,
    urgency: 'Immediate',
    consensusScore,
    polarizationLevel: polarization,
    tags: ['Custom Dilemma', category, 'Multi-Perspective AI', 'Strategic Analysis'],
    personas: activePersonas,
    debateTranscript,
    consensusInsights,
    polarCoordinates,
    recommendations,
    roadmap
  };
}

export function generateDebateChallengeResponse(
  persona: Persona,
  challengePrompt: string,
  scenario: Scenario
): { response: DebateMessage; counterRebuttal?: DebateMessage } {
  const timestamp = `Live Challenge · Just Now`;
  
  let responseText = '';
  if (persona.archetype === 'technologist') {
    responseText = `Regarding "${challengePrompt}": The core issue is that slowing down innovation out of fear of uncertainty guarantees technological obsolescence. If we build with modular architecture, any failure is an isolated, debuggable event rather than a systemic halt.`;
  } else if (persona.archetype === 'ethicist') {
    responseText = `On "${challengePrompt}": We cannot accept "acceptable collateral damage" when fundamental rights or systemic safety are at stake. A framework that cannot guarantee safety under stress is not an engineering achievement—it is an unacceptable gamble.`;
  } else if (persona.archetype === 'strategist') {
    responseText = `Addressing "${challengePrompt}": That is an execution challenge solved by clear unit economics and contractual risk allocation. If the risk is priced properly and bounded by insurance and capital reserves, it becomes an engine of enterprise advantage.`;
  } else if (persona.archetype === 'humanist') {
    responseText = `To "${challengePrompt}": We must always ask who bears the human cost. Efficiency metrics that ignore worker displacement, mental wellbeing, or algorithmic bias simply push the hidden social costs onto the most vulnerable.`;
  } else if (persona.archetype === 'skeptic') {
    responseText = `Let’s dismantle the optimism in "${challengePrompt}": Murphy’s Law in complex software states that any edge case not explicitly hardened will be exploited in production. Show me the proof of resilience under adversarial attack, not just peacetime benchmarks.`;
  } else {
    responseText = `Interrogating "${challengePrompt}" reveals an underlying assumption that must be questioned: we are treating the symptom rather than the systemic root cause. We must align the foundational axioms before deploying solutions.`;
  }

  const responseMsg: DebateMessage = {
    id: `challenge-resp-${Date.now()}`,
    roundNumber: 4,
    personaId: persona.id,
    speakerName: persona.name,
    speakerRole: persona.role,
    avatar: persona.avatar,
    color: persona.color,
    phase: 'User Challenge',
    content: responseText,
    sentiment: 'aggressive',
    timestamp
  };

  // Find opposing persona for quick counter
  const opposingPersona = scenario.personas.find(p => p.id !== persona.id && p.stance !== persona.stance) || scenario.personas.find(p => p.id !== persona.id);

  let counterMsg: DebateMessage | undefined;
  if (opposingPersona) {
    counterMsg = {
      id: `challenge-counter-${Date.now() + 1}`,
      roundNumber: 4,
      personaId: opposingPersona.id,
      speakerName: opposingPersona.name,
      speakerRole: opposingPersona.role,
      avatar: opposingPersona.avatar,
      color: opposingPersona.color,
      phase: 'Rebuttal',
      rebuttalTargetId: persona.id,
      rebuttalTargetName: persona.name,
      content: `I must counter ${persona.name}'s response: That answer avoids the immediate practical trade-off. We still have to establish who has the ultimate override authority when anomalies spike.`,
      sentiment: 'measured',
      timestamp: `Live Counter · Just Now`
    };
  }

  return { response: responseMsg, counterRebuttal: counterMsg };
}
