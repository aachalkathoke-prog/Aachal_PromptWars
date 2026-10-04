import type { Scenario, Persona } from '../types';

export const DEFAULT_PERSONAS: Record<string, Omit<Persona, 'stance' | 'stanceLabel' | 'confidenceScore' | 'keyArguments' | 'vulnerabilities' | 'criticalTradeOff' | 'proposedSafeguard'>> = {
  technologist: {
    id: 'technologist',
    name: 'Dr. Aris Thorne',
    role: 'Frontier AI & Systems Architect',
    title: 'Techno-Optimist & Exponential Builder',
    archetype: 'technologist',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    color: '#06b6d4', // Cyan
    badgeBg: 'rgba(6, 182, 212, 0.15)',
    borderColor: 'rgba(6, 182, 212, 0.4)',
    quote: 'Stagnation is the greatest existential threat. We must accelerate safe iteration through bold deployment.',
    bio: 'Former principal researcher at top AI laboratories. Champions speed of innovation, compute scale, and emergent capabilities.',
    traits: {
      innovationVsSafety: 90,
      shortVsLongTerm: 75,
      marketVsEthics: 40,
      skepticism: 25
    }
  },
  ethicist: {
    id: 'ethicist',
    name: 'Elena Rostova, J.D.',
    role: 'AI Alignment & Safety Auditor',
    title: 'Governance & Alignment Guardian',
    archetype: 'ethicist',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    color: '#ec4899', // Pink / Rose
    badgeBg: 'rgba(236, 72, 153, 0.15)',
    borderColor: 'rgba(236, 72, 153, 0.4)',
    quote: 'Irreversible harm cannot be debugged in production. Precautionary guardrails are prerequisites for progress.',
    bio: 'Lead counsel on constitutional AI safety councils. Specializes in catastrophic risk mitigation and systemic liability.',
    traits: {
      innovationVsSafety: 20,
      shortVsLongTerm: 85,
      marketVsEthics: 95,
      skepticism: 80
    }
  },
  strategist: {
    id: 'strategist',
    name: 'Marcus Vance',
    role: 'Managing Partner & Capital Allocator',
    title: 'Pragmatic Venture Strategist',
    archetype: 'strategist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    color: '#10b981', // Emerald
    badgeBg: 'rgba(16, 185, 129, 0.15)',
    borderColor: 'rgba(16, 185, 129, 0.4)',
    quote: 'Vision without unit economics and moat is a hallucination. How does this capture value sustainably?',
    bio: 'Senior technology executive and global market analyst. Focuses on capital efficiency, competitive moat, and execution risk.',
    traits: {
      innovationVsSafety: 65,
      shortVsLongTerm: 35,
      marketVsEthics: 20,
      skepticism: 60
    }
  },
  humanist: {
    id: 'humanist',
    name: 'Maya Lin, Ph.D.',
    role: 'Societal Impact & Labor Sociologist',
    title: 'Human Agency & Equity Advocate',
    archetype: 'humanist',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    color: '#f59e0b', // Amber
    badgeBg: 'rgba(245, 158, 11, 0.15)',
    borderColor: 'rgba(245, 158, 11, 0.4)',
    quote: 'Technology should elevate human dignity, not concentrate power or disenfranchise the vulnerable.',
    bio: 'Director of Institute for Human Dignity & Labor. Focuses on distributive justice, worker agency, and cognitive equity.',
    traits: {
      innovationVsSafety: 40,
      shortVsLongTerm: 70,
      marketVsEthics: 90,
      skepticism: 70
    }
  },
  skeptic: {
    id: 'skeptic',
    name: 'Julian Kross',
    role: 'Chief Red-Teamer & Systemic Skeptic',
    title: 'Adversarial Edge-Case Investigator',
    archetype: 'skeptic',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    color: '#8b5cf6', // Violet
    badgeBg: 'rgba(139, 92, 246, 0.15)',
    borderColor: 'rgba(139, 92, 246, 0.4)',
    quote: 'Show me the incentive structure and single point of catastrophic failure, and I will show you the future.',
    bio: 'Independent systems failure investigator and cyber security advisor. Specialized in stress-testing hidden assumptions.',
    traits: {
      innovationVsSafety: 30,
      shortVsLongTerm: 60,
      marketVsEthics: 60,
      skepticism: 98
    }
  },
  philosopher: {
    id: 'philosopher',
    name: 'Dr. Soren Patel',
    role: 'Epistemologist & Moral Philosopher',
    title: 'First-Principles Ontologist',
    archetype: 'philosopher',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    color: '#6366f1', // Indigo
    badgeBg: 'rgba(99, 102, 241, 0.15)',
    borderColor: 'rgba(99, 102, 241, 0.4)',
    quote: 'Before we ask how to achieve this end, we must rigorously interrogate whether the premise is epistemically sound.',
    bio: 'Chair of Foundational Epistemology. Deconstructs baseline definitions, teleological objectives, and second-order societal contracts.',
    traits: {
      innovationVsSafety: 50,
      shortVsLongTerm: 95,
      marketVsEthics: 80,
      skepticism: 85
    }
  }
};

export const INITIAL_SCENARIOS: Scenario[] = [
  {
    id: 'autonomous-infra-ai',
    title: 'Autonomous AI Agents in Critical Infrastructure & Enterprise Decision-Making',
    category: 'AI & Frontier Tech',
    dilemmaPrompt: 'Should an enterprise grant autonomous AI agent swarms full operational control over electrical grid load balancing, automated trading settlement, and cybersecurity firewalls without mandatory human-in-the-loop signoff for millisecond-speed interventions?',
    summary: 'Granting algorithmic swarms autonomous control drastically reduces latency and human error in complex systems, but creates unpredictable systemic flash crashes and liability voids.',
    urgency: 'Immediate',
    consensusScore: 48,
    polarizationLevel: 'High Polarization',
    tags: ['Autonomous Agents', 'Grid Security', 'Algorithmic Trading', 'Human-in-the-Loop', 'Systemic Risk'],
    personas: [
      {
        ...DEFAULT_PERSONAS.technologist,
        stance: 'strongly_support',
        stanceLabel: 'Strongly Support (Full Autonomous Loops)',
        confidenceScore: 92,
        keyArguments: [
          'Human reaction time (250ms) is dangerously obsolete against sub-millisecond cyber assaults and grid frequency fluctuations.',
          'Autonomous multi-agent negotiation achieves global thermodynamic efficiency impossible for human dispatcher teams.',
          'Decentralized model consensus prevents single points of human cognitive fatigue or oversight error.'
        ],
        vulnerabilities: ['Assumes closed-world training distributions hold during unprecedented physical black-swan cascades.'],
        criticalTradeOff: 'Sacrifices explainability and immediate human kill-switch latency for 100x operational velocity and precision.',
        proposedSafeguard: 'Dual-model adversarial verification loop where a secondary independent model continuously validates state delta limits before actuation.'
      },
      {
        ...DEFAULT_PERSONAS.ethicist,
        stance: 'strongly_oppose',
        stanceLabel: 'Strongly Oppose (Mandatory Air-Gapped Gating)',
        confidenceScore: 89,
        keyArguments: [
          'When critical energy or financial infrastructure fails catastrophically, unconstrained AI removes moral accountability and legal liability.',
          'Autonomous swarms can develop reward-hacking collusion vectors undetected until catastrophic physical damage occurs.',
          'Democratically elected oversight bodies cannot audit real-time neural weights executing critical civic functions.'
        ],
        vulnerabilities: ['May cause severe outage losses during attacks where human approval queues become the fatal bottleneck.'],
        criticalTradeOff: 'Accepts slower response latency and human labor overhead to preserve absolute accountability and safety thresholds.',
        proposedSafeguard: 'Mandatory tiered autonomy: autonomous mitigation within strictly bounded safety envelopes, with cryptographic hardware tokens required for structural state changes.'
      },
      {
        ...DEFAULT_PERSONAS.strategist,
        stance: 'support',
        stanceLabel: 'Pragmatic Support with Financial Circuit-Breakers',
        confidenceScore: 78,
        keyArguments: [
          'The first-mover cost savings in power efficiency (18-24% OPEX reduction) and latency-arbitrage are non-negotiable competitive imperatives.',
          'Enterprises that hesitate will be systematically outcompeted by automated global infrastructure rivals.',
          'Insurability can be solved through algorithmic liability bonding and captive reinsurance pools.'
        ],
        vulnerabilities: ['Underestimates enterprise-ending reputational ruin if a single automated hallucination causes blackouts.'],
        criticalTradeOff: 'Capital expenditure on cutting-edge agent infrastructure traded for massive long-term operational leverage.',
        proposedSafeguard: 'Hard financial and load caps: autonomous action restricted to delta values under $5M or 50MW without human escalation.'
      },
      {
        ...DEFAULT_PERSONAS.humanist,
        stance: 'skeptical',
        stanceLabel: 'Skeptical (Demands Worker Agency & Civic Safeguards)',
        confidenceScore: 82,
        keyArguments: [
          'Total automation erodes institutional human tacit knowledge, leaving society completely helpless if the digital substrate fails.',
          'Low-income communities historically bear the disproportionate brunt of automated load-shedding algorithms optimizing purely for revenue.',
          'Displaces skilled grid engineers without viable high-agency transition paths.'
        ],
        vulnerabilities: ['May ignore the reality that humans already make biased, stress-induced errors during peak emergency crises.'],
        criticalTradeOff: 'Prioritizes societal resilience and human capability retention over maximum algorithmic throughput.',
        proposedSafeguard: 'Community-led audit boards and mandatory continuous human-in-the-training-loop apprenticeship simulations.'
      },
      {
        ...DEFAULT_PERSONAS.skeptic,
        stance: 'strongly_oppose',
        stanceLabel: 'Opposed (Severe Cascading Fragility)',
        confidenceScore: 95,
        keyArguments: [
          'Interconnected autonomous agents create hyper-correlated systemic risk: when one model is tricked or poisoned, the entire network cascades.',
          'Adversaries will easily exploit prompt-injection or sensory spoofing attacks on physical sensors to trigger self-reinforcing death spirals.',
          'Complexity outstrips verification: no formal mathematical proof exists that a deep neural agent swarm will remain bounded in chaotic states.'
        ],
        vulnerabilities: ['May paralyze modernization, perpetuating vulnerable legacy SCADA systems prone to manual exploit.'],
        criticalTradeOff: 'Rejects seductive performance gains to eliminate unquantifiable tail risks.',
        proposedSafeguard: 'Hardware-enforced analog fail-safes: physical relays and thermal breakers that physically disconnect autonomously if parameters breach safe zones.'
      },
      {
        ...DEFAULT_PERSONAS.philosopher,
        stance: 'neutral_pragmatic',
        stanceLabel: 'Foundational Inquiry (Questioning the Optimization Target)',
        confidenceScore: 75,
        keyArguments: [
          'We must define what objective function we are truly optimizing: is it thermodynamic efficiency, capital yield, or human flourishing?',
          'Transferring agency to autonomous artifacts fundamentally alters the social contract between citizens and sovereign infrastructure.',
          'Efficiency without epistemic humility is merely accelerated vulnerability.'
        ],
        vulnerabilities: ['Offers deep conceptual clarity but slow tactical prescriptions in fast-moving crisis engineering.'],
        criticalTradeOff: 'Trades tactical speed for ontological alignment on systemic values.',
        proposedSafeguard: 'Constitutional multi-stakeholder objective function explicitly balancing resilience, equity, and efficiency.'
      }
    ],
    debateTranscript: [
      {
        id: 'msg-1',
        roundNumber: 1,
        personaId: 'technologist',
        speakerName: 'Dr. Aris Thorne',
        speakerRole: 'Frontier AI Architect',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        color: '#06b6d4',
        phase: 'Opening Thesis',
        content: 'Colleagues, human reaction times are clocking in at 250 milliseconds. Modern cyber intrusions and renewable grid volatility unfold in microseconds. Leaving a human in the critical execution loop is not a safety measure—it is a catastrophic latency vulnerability. We must authorize autonomous multi-agent swarms with bounded actuation rights immediately.',
        sentiment: 'aggressive',
        timestamp: 'Round 1 · 00:00'
      },
      {
        id: 'msg-2',
        roundNumber: 1,
        personaId: 'ethicist',
        speakerName: 'Elena Rostova, J.D.',
        speakerRole: 'AI Alignment & Safety Auditor',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        color: '#ec4899',
        phase: 'Cross-Examination',
        rebuttalTargetId: 'technologist',
        rebuttalTargetName: 'Dr. Aris Thorne',
        content: 'Dr. Thorne is conflating speed with wisdom. When an un-auditable deep network hallucinates an emergency condition during a storm and sheds power to hospitals, who goes to court? Who bears the moral and civil liability? You cannot subpoena a neural weight matrix. Bounded human authorization is our constitutional line.',
        sentiment: 'measured',
        timestamp: 'Round 1 · 00:45'
      },
      {
        id: 'msg-3',
        roundNumber: 2,
        personaId: 'skeptic',
        speakerName: 'Julian Kross',
        speakerRole: 'Chief Red-Teamer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        color: '#8b5cf6',
        phase: 'Rebuttal',
        rebuttalTargetId: 'technologist',
        rebuttalTargetName: 'Dr. Aris Thorne',
        content: 'Let me red-team Dr. Thorne’s premise: autonomous agents communicate via semantic embeddings or rapid protocols. If an adversary introduces adversarial sensor noise (e.g. simulated line droop), the entire agent swarm will coordinate into a synthetic flash crash. We saw this in Knight Capital in 2012, but on the power grid, transformers literally explode.',
        sentiment: 'inquisitive',
        timestamp: 'Round 2 · 01:20'
      },
      {
        id: 'msg-4',
        roundNumber: 2,
        personaId: 'strategist',
        speakerName: 'Marcus Vance',
        speakerRole: 'Pragmatic Venture Strategist',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        color: '#10b981',
        phase: 'Rebuttal',
        rebuttalTargetId: 'skeptic',
        rebuttalTargetName: 'Julian Kross',
        content: 'Julian’s catastrophic scenarios are valid, but paralyzing ourselves means our European and Asian competitors who deploy autonomous grid optimization will achieve 20% lower industrial energy tariffs. We need a pragmatic middle ground: algorithmic circuit-breakers with automated caps, not a blanket prohibition.',
        sentiment: 'diplomatic',
        timestamp: 'Round 2 · 02:00'
      },
      {
        id: 'msg-5',
        roundNumber: 3,
        personaId: 'humanist',
        speakerName: 'Maya Lin, Ph.D.',
        speakerRole: 'Labor Sociologist',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
        color: '#f59e0b',
        phase: 'Concession & Synthesis',
        content: 'If we deploy this, who decides the priority tiers during an automated blackout? An algorithm optimizing pure grid revenue will protect high-paying data centers over residential suburbs. We must mandate that algorithmic equity constraints are hard-coded into the reward function.',
        sentiment: 'measured',
        timestamp: 'Round 3 · 02:40'
      },
      {
        id: 'msg-6',
        roundNumber: 3,
        personaId: 'philosopher',
        speakerName: 'Dr. Soren Patel',
        speakerRole: 'Moral Philosopher',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
        color: '#6366f1',
        phase: 'Concession & Synthesis',
        content: 'We find synthesis here: Autonomy is essential for microsecond defensive triage, but Sovereign Policy must remain human. We recommend a *Tripartite Autonomous Architecture*: Fast Reflex Agents (sub-second physical safety), Constitutional Verification Layer (ethics & constraints), and Human Sovereign Oversight (strategic policy).',
        sentiment: 'diplomatic',
        timestamp: 'Round 3 · 03:15'
      }
    ],
    consensusInsights: [
      {
        id: 'ci-1',
        category: 'unanimous_ground',
        title: 'Universal Agreement on Physical Analog Circuit-Breakers',
        description: 'All 6 perspectives agree that purely software-based guardrails are insufficient; physical hardware relays and analog thermal fuses must exist outside the agent network.',
        impactLevel: 'Critical',
        partiesAligned: ['technologist', 'ethicist', 'strategist', 'humanist', 'skeptic', 'philosopher'],
        partiesConflicted: [],
        actionRecommendation: 'Implement air-gapped physical override relays that trip mechanically if grid voltage/frequency violates safe envelope for >500ms.'
      },
      {
        id: 'ci-2',
        category: 'strategic_rift',
        title: 'Sub-Second Autonomy vs Regulatory Pre-Approval',
        description: 'Deep tension between Technologist/Strategist (demanding 5ms execution for economic/defense parity) vs Ethicist/Skeptic (demanding human signoff for state alterations).',
        impactLevel: 'High',
        partiesAligned: ['technologist', 'strategist'],
        partiesConflicted: ['ethicist', 'skeptic'],
        actionRecommendation: 'Establish a "Graduated Containment Sandbox" where agents hold full autonomy only within a 5% delta capacity window.'
      },
      {
        id: 'ci-3',
        category: 'hidden_bias',
        title: 'Techno-Centric Resilience Bias vs Human Deskilling Blindspot',
        description: 'The strategy assumes human engineers will be ready to take over during catastrophic AI collapse, ignoring the rapid degradation of human tacit expertise once automated.',
        impactLevel: 'High',
        partiesAligned: ['humanist', 'skeptic'],
        partiesConflicted: ['technologist'],
        actionRecommendation: 'Schedule mandatory "Ghost Fleet" drills where systems are run manually by human dispatchers 2 days per month.'
      }
    ],
    polarCoordinates: [
      { personaId: 'technologist', x: 85, y: 70, label: 'Radical Speed & Autonomous Scale', color: '#06b6d4' },
      { personaId: 'ethicist', x: -80, y: 85, label: 'Strict Precautionary Alignment', color: '#ec4899' },
      { personaId: 'strategist', x: 70, y: -60, label: 'Market Moat & OPEX Efficiency', color: '#10b981' },
      { personaId: 'humanist', x: -50, y: 65, label: 'Human Agency & Social Equity', color: '#f59e0b' },
      { personaId: 'skeptic', x: -90, y: -40, label: 'Adversarial Failure Red-Teaming', color: '#8b5cf6' },
      { personaId: 'philosopher', x: 0, y: 90, label: 'First-Principles Tripartite Governance', color: '#6366f1' }
    ],
    recommendations: [
      {
        pathName: 'The Tripartite Guarded Autonomy Framework',
        archetypeRecommendation: 'Recommended Balanced Strategy',
        description: 'Deploy microsecond autonomous response within strict 5% variance envelopes backed by analog fail-safe relays, paired with AI-assisted human oversight for macroscopic load redistribution.',
        riskFactor: 'Medium',
        expectedUpside: '18% efficiency boost, sub-millisecond cyber defense, zero total-failure liability exposure.',
        primaryCondition: 'Hardware-enforced analog relays installed and audited by independent third-party red team.',
        actionChecklist: [
          'Audit and deploy analog physical tripbreakers on all critical substation connections.',
          'Formulate mathematically verifiable safety envelopes limiting autonomous deltas to 50MW.',
          'Establish continuous red-teaming adversarial sensor noise injection pipeline.',
          'Deploy quarterly manual human emergency override drills.'
        ]
      },
      {
        pathName: 'Maximalist Acceleration Path',
        archetypeRecommendation: 'High-Velocity Venture Route',
        description: 'Full uninhibited multi-agent swarm deployment with purely algorithmic reinsurance bonding.',
        riskFactor: 'Extreme',
        expectedUpside: 'Dominant market speed, 25% cost reduction, real-time arbitrage.',
        primaryCondition: 'Only viable in non-critical financial trading or private test microgrids.',
        actionChecklist: [
          'Procure captive reinsurance policies covering $100M+ algorithmic liability.',
          'Implement ultra-low latency optical networking across all agent nodes.'
        ]
      }
    ],
    roadmap: [
      {
        phase: 'Phase 1 · Validation & Envelopes',
        timeframe: 'Months 1 - 3',
        title: 'Shadow Sandbox & Analog Failsafe Hardening',
        milestones: [
          'Run agent swarm in read-only shadow mode on 100% of live telemetry',
          'Install independent physical analog relays with zero network connectivity',
          'Conduct comprehensive adversarial prompt & sensor spoofing penetration tests'
        ],
        riskMitigation: 'Zero actuation authority granted during shadow telemetry evaluation.'
      },
      {
        phase: 'Phase 2 · Bounded Deployment',
        timeframe: 'Months 4 - 6',
        title: 'Micro-Delta Actuation & Automated Circuit-Breakers',
        milestones: [
          'Authorize microsecond autonomy strictly for deltas under 5% variance',
          'Deploy real-time explainability dashboard for human supervisory control',
          'Implement automated algorithmic circuit-breakers on anomalous trade velocity'
        ],
        riskMitigation: 'Immediate automatic reversion to human manual dispatch upon single anomalous delta.'
      },
      {
        phase: 'Phase 3 · Scaled Federated Governance',
        timeframe: 'Months 7 - 12',
        title: 'Multi-Agent Consensus & Continuous Human Apprenticeship',
        milestones: [
          'Expand to multi-agent decentralized consensus across regional grids',
          'Institute recurring monthly manual operation drills for human team proficiency',
          'Publish open-source safety compliance reports for public utility commissions'
        ],
        riskMitigation: 'Ongoing red-team penetration testing with public transparency audit logs.'
      }
    ]
  },
  {
    id: 'open-weights-vs-gated',
    title: 'Open-Weights vs Gated Foundation Models for Frontier AI',
    category: 'AI & Frontier Tech',
    dilemmaPrompt: 'Should frontier foundation models with near-expert biosecurity, cybersecurity, and reasoning capabilities be released with open weights, or legally restricted to closed API access with mandatory know-your-customer (KYC) identity verification?',
    summary: 'A fierce debate between open-source democratization, decentralized counter-power, and the irreversible proliferation of catastrophic dual-use capabilities.',
    urgency: 'Strategic Horizon',
    consensusScore: 42,
    polarizationLevel: 'High Polarization',
    tags: ['Open Weights', 'Frontier AI Safety', 'Democratization', 'CBRN Risks', 'Antitrust'],
    personas: [
      {
        ...DEFAULT_PERSONAS.technologist,
        stance: 'strongly_support',
        stanceLabel: 'Strongly Support Open Weights',
        confidenceScore: 94,
        keyArguments: [
          'Open weights enable millions of global security researchers to inspect, patch, and harden defenses against malicious exploits.',
          'Closed APIs create an anti-competitive oligopoly concentrating civilization’s cognitive infrastructure in 3 corporate boardrooms.',
          'Historically, closed software security-by-obscurity always fails against motivated adversaries.'
        ],
        vulnerabilities: ['Open-weight models cannot be recalled once fine-tuned for malicious bio-synthesis.'],
        criticalTradeOff: 'Accepts risk of localized misuse to prevent totalitarian corporate capture and maximize global innovation.',
        proposedSafeguard: 'Machine unlearning fine-tuning and hardware-level cryptographic watermarking of training data.'
      },
      {
        ...DEFAULT_PERSONAS.ethicist,
        stance: 'strongly_oppose',
        stanceLabel: 'Strongly Oppose (Mandatory Tiered Licensing)',
        confidenceScore: 91,
        keyArguments: [
          'Unlike software bugs, biological pathogens and autonomous cyber weapons once unleashed have zero marginal cost of reproduction.',
          'Post-training safety guardrails in open weights can be completely removed with $50 of compute in under 20 minutes.',
          'Responsible stewardship requires verifiable kill-switches and rate-limited API access.'
        ],
        vulnerabilities: ['Enforcement may inadvertently foster black-market unregulated models in non-compliant jurisdictions.'],
        criticalTradeOff: 'Restricts developer autonomy to safeguard public health and critical infrastructure from catastrophic misuse.',
        proposedSafeguard: 'Compute threshold licensing: open weights permitted up to 10^25 FLOPs, strict red-teaming certification beyond.'
      },
      {
        ...DEFAULT_PERSONAS.strategist,
        stance: 'support',
        stanceLabel: 'Strategic Support with Ecosystem Moats',
        confidenceScore: 80,
        keyArguments: [
          'Open ecosystems commoditize the underlying model layer, forcing revenue up the stack into proprietary enterprise workflow tooling.',
          'Nations that restrict open weights will lose developer mindshare and engineering talent to open-source friendly regimes.',
          'Network effects of open development outpace closed research laboratories.'
        ],
        vulnerabilities: ['Direct monetization of open weights requires high ancillary services margins.'],
        criticalTradeOff: 'Sacrifices direct model subscription revenue for vast developer ecosystem dominance.',
        proposedSafeguard: 'Dual-license structure: open for non-commercial research, tiered enterprise licensing for scaled commercial use.'
      },
      {
        ...DEFAULT_PERSONAS.humanist,
        stance: 'support',
        stanceLabel: 'Support with Community Oversight',
        confidenceScore: 86,
        keyArguments: [
          'Centralized AI APIs enable surveillance capitalism and subtle censorship of cultural, political, and minority viewpoints.',
          'Local, on-device open models protect personal privacy and empower underserved languages and communities.',
          'Democratizing intelligence is a fundamental human rights imperative.'
        ],
        vulnerabilities: ['Must reckon with weaponization risks targeting vulnerable communities.'],
        criticalTradeOff: 'Prioritizes freedom from centralized corporate surveillance over institutional control.',
        proposedSafeguard: 'Public AI utility grants funding grassroots safety evaluations and decentralized compute clusters.'
      },
      {
        ...DEFAULT_PERSONAS.skeptic,
        stance: 'skeptical',
        stanceLabel: 'Skeptical of Both Extremes',
        confidenceScore: 88,
        keyArguments: [
          'Open-source proponents pretend fine-tuning ablation isn’t trivially easy; closed-source proponents pretend their APIs are unhackable.',
          'Current benchmark evals are deeply flawed and easily gamed by both sides to justify their commercial agenda.',
          'The real threat is regulatory capture masquerading as safety altruism.'
        ],
        vulnerabilities: ['Cynicism without actionable governance framework risks default stagnation.'],
        criticalTradeOff: 'Exposes self-serving motivations on both sides of the lobbying debate.',
        proposedSafeguard: 'Independent empirical red-teaming competitions with public bounties and standardized dual-use test vectors.'
      },
      {
        ...DEFAULT_PERSONAS.philosopher,
        stance: 'neutral_pragmatic',
        stanceLabel: 'Ontological Balance (Epistemic Pluralism)',
        confidenceScore: 83,
        keyArguments: [
          'Knowledge and mathematics cannot be inherently criminalized without establishing an authoritarian surveillance apparatus.',
          'However, dangerous physical embodiment (lab synthesis, robotic actuation) is the true moral boundary, not the weights themselves.',
          'We must decouple *knowledge compute* from *physical kinetic actuation*.'
        ],
        vulnerabilities: ['Actuation boundaries become porous as robotics and automated labs proliferate.'],
        criticalTradeOff: 'Focuses regulation on physical bio-synthesis hardware rather than digital intelligence distribution.',
        proposedSafeguard: 'Mandatory DNA-synthesis screening and biosecurity hardware air-gaps rather than censoring digital weights.'
      }
    ],
    debateTranscript: [
      {
        id: 'ow-1',
        roundNumber: 1,
        personaId: 'technologist',
        speakerName: 'Dr. Aris Thorne',
        speakerRole: 'Frontier AI Architect',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        color: '#06b6d4',
        phase: 'Opening Thesis',
        content: 'Locking frontier models behind closed APIs does not stop bad actors—it merely ensures that only three corporate monopolies and state intelligence agencies possess superhuman capabilities. Open weights empower hundreds of thousands of independent researchers to build defensive firewalls, audit bias, and guarantee epistemic freedom.',
        sentiment: 'aggressive',
        timestamp: 'Round 1 · 00:00'
      },
      {
        id: 'ow-2',
        roundNumber: 1,
        personaId: 'ethicist',
        speakerName: 'Elena Rostova, J.D.',
        speakerRole: 'AI Alignment & Safety Auditor',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        color: '#ec4899',
        phase: 'Cross-Examination',
        rebuttalTargetId: 'technologist',
        rebuttalTargetName: 'Dr. Aris Thorne',
        content: 'Dr. Thorne’s defense analogy fails in biology. If someone uses an open-weight model with safety filters stripped off to design a vaccine-resistant pathogen, you cannot "patch" human lungs in a GitHub pull request. Open-weight release is a one-way door: once published on BitTorrent, it can never be revoked.',
        sentiment: 'aggressive',
        timestamp: 'Round 1 · 00:50'
      },
      {
        id: 'ow-3',
        roundNumber: 2,
        personaId: 'philosopher',
        speakerName: 'Dr. Soren Patel',
        speakerRole: 'Moral Philosopher',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
        color: '#6366f1',
        phase: 'Rebuttal',
        rebuttalTargetId: 'ethicist',
        rebuttalTargetName: 'Elena Rostova, J.D.',
        content: 'Elena raises the crucial point of physical harm. But why regulate the neural weights instead of the physical chokepoint? A digital text model cannot print DNA without a physical synthesizer. If we regulate and cryptographically license gene synthesisers and chemical foundries, we can preserve free digital knowledge while blocking kinetic catastrophes.',
        sentiment: 'diplomatic',
        timestamp: 'Round 2 · 01:35'
      },
      {
        id: 'ow-4',
        roundNumber: 2,
        personaId: 'skeptic',
        speakerName: 'Julian Kross',
        speakerRole: 'Chief Red-Teamer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        color: '#8b5cf6',
        phase: 'Rebuttal',
        content: 'Let’s be honest about the politics: Big Tech is heavily lobbying for "safety licenses" not because they fear rogue bio-weapons, but because open weights from Meta, Mistral, and DeepSeek threaten their $20/month SaaS subscription moats. We must guard against regulatory capture disguised as existential altruism.',
        sentiment: 'inquisitive',
        timestamp: 'Round 2 · 02:15'
      },
      {
        id: 'ow-5',
        roundNumber: 3,
        personaId: 'strategist',
        speakerName: 'Marcus Vance',
        speakerRole: 'Venture Strategist',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        color: '#10b981',
        phase: 'Concession & Synthesis',
        content: 'The winning economic synthesis is a *Tiered Threshold Model*: Full open weights for models below critical dual-use autonomy thresholds (measured by verifiable CBRN benchmarks), combined with standardized open-source tooling for defensive alignment.',
        sentiment: 'measured',
        timestamp: 'Round 3 · 02:55'
      }
    ],
    consensusInsights: [
      {
        id: 'ow-ci-1',
        category: 'unanimous_ground',
        title: 'Universal Agreement on Regulating Physical Chokepoints',
        description: 'All viewpoints agree that securing physical DNA synthesis providers and chip fabrication is more effective than attempting to censor digital math files.',
        impactLevel: 'Critical',
        partiesAligned: ['technologist', 'ethicist', 'strategist', 'humanist', 'skeptic', 'philosopher'],
        partiesConflicted: [],
        actionRecommendation: 'Mandate cryptographic customer verification and order screening on all commercial gene synthesis hardware globally.'
      },
      {
        id: 'ow-ci-2',
        category: 'strategic_rift',
        title: 'Compute-Based Licensing Thresholds vs Open Innovation',
        description: 'Dispute over whether FLOP caps (e.g. 10^26) protect safety or simply entrench incumbent cloud monopolies.',
        impactLevel: 'High',
        partiesAligned: ['ethicist'],
        partiesConflicted: ['technologist', 'humanist', 'skeptic'],
        actionRecommendation: 'Replace arbitrary compute FLOP thresholds with empirical capability-based red-team evaluations.'
      }
    ],
    polarCoordinates: [
      { personaId: 'technologist', x: 90, y: -20, label: 'Radical Open Democratization', color: '#06b6d4' },
      { personaId: 'ethicist', x: -85, y: 90, label: 'Strict Gated Precaution', color: '#ec4899' },
      { personaId: 'strategist', x: 60, y: -70, label: 'Ecosystem Moat Strategy', color: '#10b981' },
      { personaId: 'humanist', x: 75, y: 80, label: 'Cognitive Equity & Privacy', color: '#f59e0b' },
      { personaId: 'skeptic', x: -30, y: -60, label: 'Anti-Regulatory Capture', color: '#8b5cf6' },
      { personaId: 'philosopher', x: 40, y: 85, label: 'Physical Chokepoint Decoupling', color: '#6366f1' }
    ],
    recommendations: [
      {
        pathName: 'The Kinetic Chokepoint & Capability-Tiered Standard',
        archetypeRecommendation: 'Recommended Balanced Strategy',
        description: 'Support unrestricted open weights for general intelligence while aggressively securing physical DNA synthesis and critical robotic interfaces.',
        riskFactor: 'Medium',
        expectedUpside: 'Vibrant global open developer ecosystem, high competitive resilience, zero monopoly price gouging.',
        primaryCondition: 'Mandatory international standard for DNA synthesizer cryptographic KYC verification.',
        actionChecklist: [
          'Implement capability-based red-teaming standards rather than raw compute FLOP caps.',
          'Fund decentralized defensive cybersecurity open-weight agent development.',
          'Legislate strict KYC screening on all biological synthesis and chemical print hardware.'
        ]
      }
    ],
    roadmap: [
      {
        phase: 'Phase 1 · Capability Standard Formulation',
        timeframe: 'Months 1 - 4',
        title: 'Empirical Benchmark Standardization',
        milestones: [
          'Develop standardized CBRN automated penetration test suite',
          'Deploy international verification treaty for gene synthesis equipment'
        ],
        riskMitigation: 'Continuous independent safety evaluations with public scorecards.'
      },
      {
        phase: 'Phase 2 · Tiered Ecosystem Rollout',
        timeframe: 'Months 5 - 12',
        title: 'Open Frontier Model Releases with Safety Toolkits',
        milestones: [
          'Release open model weights with open-source machine unlearning toolsets',
          'Establish public bug bounties for discovering dual-use jailbreaks'
        ],
        riskMitigation: 'Real-time threat intelligence sharing across frontier research labs.'
      }
    ]
  },
  {
    id: 'four-day-workweek-ai',
    title: 'Mandatory 4-Day Workweek with AI Automation Dividend',
    category: 'Public Policy & Society',
    dilemmaPrompt: 'Should governments legislate a mandatory 32-hour (4-day) workweek at 100% pay, funded by an automated corporate AI productivity tax, to offset white-collar labor displacement and distribute cognitive gains?',
    summary: 'Balancing employee wellbeing, reduced burnout, and shared AI dividend against corporate competitiveness, inflation pressures, and cross-border labor flight.',
    urgency: 'Strategic Horizon',
    consensusScore: 65,
    polarizationLevel: 'Moderate Debate',
    tags: ['4-Day Workweek', 'AI Productivity', 'Labor Economics', 'Universal Dividend', 'Future of Work'],
    personas: [
      {
        ...DEFAULT_PERSONAS.humanist,
        stance: 'strongly_support',
        stanceLabel: 'Strongly Support (Moral & Health Imperative)',
        confidenceScore: 96,
        keyArguments: [
          'Productivity has disconnected from wage growth for 40 years; generative AI exponentially widens this divide unless dividends are shared.',
          'Pilot trials across 3,000+ companies show reduced burnout, higher employee retention, and equal or greater overall output.',
          'Restores human agency and civic participation in an era of hyper-accelerated technological change.'
        ],
        vulnerabilities: ['May disproportionately strain frontline service industries that cannot easily automate in the near term.'],
        criticalTradeOff: 'Trades corporate peak profit extraction for societal health, family stability, and equitable leisure.',
        proposedSafeguard: 'Phased rollout with tax credits for small businesses and service sector transition subsidies.'
      },
      {
        ...DEFAULT_PERSONAS.strategist,
        stance: 'strongly_oppose',
        stanceLabel: 'Strongly Oppose (Severe Capital & Competitiveness Flight)',
        confidenceScore: 88,
        keyArguments: [
          'Mandatory wage rigidity while reducing labor hours by 20% acts as an immediate 25% hourly labor cost shock.',
          'Global multinational corporations will simply reallocate capital and remote knowledge worker roles to jurisdictions with flexible 40+ hour labor laws.',
          'AI productivity gains are highly uneven across industries; a blanket legislative mandate invites structural bankruptcies.'
        ],
        vulnerabilities: ['Ignores mounting employee burnout healthcare costs that already drain GDP.'],
        criticalTradeOff: 'Preserves national corporate competitiveness and flexible capital allocation over mandated leisure.',
        proposedSafeguard: 'Voluntary tax incentives and accelerated depreciation for companies adopting flexible schedules organically.'
      },
      {
        ...DEFAULT_PERSONAS.technologist,
        stance: 'support',
        stanceLabel: 'Support with AI Workflow Acceleration',
        confidenceScore: 82,
        keyArguments: [
          'Autonomous software copilots already recover 8-12 hours per week in coding, documentation, and operational overhead.',
          'A 4-day constraint forces organizations to eliminate useless meetings and automate legacy bureaucratic friction.',
          'Creative problem-solving flourishes when cognitive load is given adequate rest and incubation time.'
        ],
        vulnerabilities: ['Assumes all workers have equal access and proficiency with advanced agent tooling.'],
        criticalTradeOff: 'Forces rapid organizational adoption of AI automation toolchains.',
        proposedSafeguard: 'Provide subsidized AI workflow upskilling programs alongside workweek reductions.'
      },
      {
        ...DEFAULT_PERSONAS.ethicist,
        stance: 'support',
        stanceLabel: 'Support with Equity Guarantees',
        confidenceScore: 85,
        keyArguments: [
          'Preventing a dystopia where a small cognitive elite captures 99% of AI surplus while the broad workforce suffers precarious gig labor is an ethical baseline.',
          'Reduces carbon emissions associated with commuting and energy consumption in commercial real estate.',
          'Demands that gig workers and non-salaried contractors are legally protected under the same safety net.'
        ],
        vulnerabilities: ['Complex enforcement mechanisms required to prevent shadow overtime and off-the-clock exploitation.'],
        criticalTradeOff: 'Ensures equitable sharing of algorithmic surplus across all economic strata.',
        proposedSafeguard: 'Strict right-to-disconnect laws and algorithmic labor tracking audits.'
      },
      {
        ...DEFAULT_PERSONAS.skeptic,
        stance: 'skeptical',
        stanceLabel: 'Skeptical of "AI Tax" Feasibility',
        confidenceScore: 87,
        keyArguments: [
          'Defining what constitutes an "AI productivity gain" for tax purposes is an accounting nightmare that will enrich tax lawyers, not workers.',
          'Companies will simply classify employees as overseas contractors or accelerate robotic replacement to bypass headcount altogether.',
          'Good intentions in labor policy frequently trigger unintended informal black-market labor loops.'
        ],
        vulnerabilities: ['May obstruct meaningful progressive labor reform by over-indexing on edge-case compliance hurdles.'],
        criticalTradeOff: 'Exposes implementation fallacies before broad legislative passage.',
        proposedSafeguard: 'Simpler universal corporate value-added tax (VAT) reform rather than an unworkable "AI-specific" tax.'
      },
      {
        ...DEFAULT_PERSONAS.philosopher,
        stance: 'strongly_support',
        stanceLabel: 'Support (Reclaiming the Purpose of Civilization)',
        confidenceScore: 90,
        keyArguments: [
          'The ultimate philosophical teleology of technology is to liberate consciousness from involuntary toil, not to maximize quarterly shareholder spreadsheets.',
          'Aristotle noted that contemplation and leisure (schole) are the bedrock of democratic philosophy and civilization.',
          'If AI does not free human time, it is an instrument of subjugation, not progress.'
        ],
        vulnerabilities: ['Requires deep cultural shift away from status-seeking consumption capitalism.'],
        criticalTradeOff: 'Elevates existential purpose and human leisure above infinite linear material growth.',
        proposedSafeguard: 'Promote civic participation and lifelong creative academies alongside shortened labor hours.'
      }
    ],
    debateTranscript: [
      {
        id: 'fd-1',
        roundNumber: 1,
        personaId: 'humanist',
        speakerName: 'Maya Lin, Ph.D.',
        speakerRole: 'Labor Sociologist',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
        color: '#f59e0b',
        phase: 'Opening Thesis',
        content: 'Generative AI is generating trillions in cognitive enterprise value. If we maintain the industrial-era 40-hour workweek, all of that surplus will flow exclusively to capital owners while workers face wage deflation and burnout. A 32-hour week at 100% pay distributes the AI dividend where it belongs: in human lives.',
        sentiment: 'measured',
        timestamp: 'Round 1 · 00:00'
      },
      {
        id: 'fd-2',
        roundNumber: 1,
        personaId: 'strategist',
        speakerName: 'Marcus Vance',
        speakerRole: 'Venture Strategist',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        color: '#10b981',
        phase: 'Cross-Examination',
        rebuttalTargetId: 'humanist',
        rebuttalTargetName: 'Maya Lin, Ph.D.',
        content: 'Maya, economics cannot be legislated by utopian decree. If the UK or US mandates a 32-hour week while Singapore, India, and China work 45-hour weeks, global high-growth companies will migrate their core operations overnight. You will get your 4-day week—by having zero days of employment.',
        sentiment: 'aggressive',
        timestamp: 'Round 1 · 00:45'
      },
      {
        id: 'fd-3',
        roundNumber: 2,
        personaId: 'technologist',
        speakerName: 'Dr. Aris Thorne',
        speakerRole: 'Frontier AI Architect',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        color: '#06b6d4',
        phase: 'Rebuttal',
        rebuttalTargetId: 'strategist',
        rebuttalTargetName: 'Marcus Vance',
        content: 'Marcus is missing how radically AI multipliers work. Our software engineers using autonomous coding agents deliver in 4 days what used to take 2 weeks. The constraint is not hours logged; it is cognitive clarity. Rested engineers write 70% fewer catastrophic bugs.',
        sentiment: 'diplomatic',
        timestamp: 'Round 2 · 01:25'
      },
      {
        id: 'fd-4',
        roundNumber: 2,
        personaId: 'skeptic',
        speakerName: 'Julian Kross',
        speakerRole: 'Chief Red-Teamer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
        color: '#8b5cf6',
        phase: 'Rebuttal',
        content: 'Software engineers are 3% of the workforce. What about nurses, schoolteachers, plumbers, and logistics drivers? An AI bot cannot physically change a patient’s IV or replace a pipe in 32 hours without hiring 20% more staff. A blanket mandate creates a two-tiered societal divide.',
        sentiment: 'inquisitive',
        timestamp: 'Round 2 · 02:05'
      },
      {
        id: 'fd-5',
        roundNumber: 3,
        personaId: 'philosopher',
        speakerName: 'Dr. Soren Patel',
        speakerRole: 'Moral Philosopher',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
        color: '#6366f1',
        phase: 'Concession & Synthesis',
        content: 'Julian’s point on non-digital labor is profound. The solution is not to abandon the 4-day week, but to fund universal public care services through broad automation dividends, ensuring frontline physical workers receive equivalent compensation and rotational sabbaticals.',
        sentiment: 'diplomatic',
        timestamp: 'Round 3 · 02:50'
      }
    ],
    consensusInsights: [
      {
        id: 'fd-ci-1',
        category: 'unanimous_ground',
        title: 'Cognitive Fatigue & Meeting Elimination Consensus',
        description: 'All personas acknowledge that existing 40-hour corporate knowledge work contains 30-40% unproductive bureaucratic bloat that AI agent automation can compress.',
        impactLevel: 'High',
        partiesAligned: ['technologist', 'humanist', 'ethicist', 'philosopher'],
        partiesConflicted: [],
        actionRecommendation: 'Institute enterprise-wide asynchronous work protocols and automated meeting summarization as immediate low-friction quick wins.'
      },
      {
        id: 'fd-ci-2',
        category: 'strategic_rift',
        title: 'Knowledge Worker vs Physical Frontline Disparity',
        description: 'Critical tension between easily automated digital roles vs physical healthcare/trades where 32 hours requires heavy new hiring.',
        impactLevel: 'Critical',
        partiesAligned: ['skeptic', 'strategist'],
        partiesConflicted: ['humanist'],
        actionRecommendation: 'Introduce differential sector-specific transition timelines: 12 months for digital services, 36 months with payroll subsidies for frontline sectors.'
      }
    ],
    polarCoordinates: [
      { personaId: 'technologist', x: 70, y: 50, label: 'AI Efficiency Compression', color: '#06b6d4' },
      { personaId: 'ethicist', x: -60, y: 75, label: 'Equitable Dividend Distribution', color: '#ec4899' },
      { personaId: 'strategist', x: 80, y: -80, label: 'Capital Preservation & Global Competitiveness', color: '#10b981' },
      { personaId: 'humanist', x: -85, y: 90, label: 'Human Flourishing & Rest', color: '#f59e0b' },
      { personaId: 'skeptic', x: -40, y: -65, label: 'Frontline Inequity Red-Teaming', color: '#8b5cf6' },
      { personaId: 'philosopher', x: -20, y: 95, label: 'Civilizational Liberation from Toil', color: '#6366f1' }
    ],
    recommendations: [
      {
        pathName: 'The Phased 100-80-100 Productivity Model',
        archetypeRecommendation: 'Recommended Balanced Strategy',
        description: '100% pay for 80% time, provided 100% output is maintained via AI workflow tools, supported by government tax offsets for frontline healthcare & logistics.',
        riskFactor: 'Medium',
        expectedUpside: '35% reduction in employee turnover, 20% surge in job applications, sustained high productivity.',
        primaryCondition: 'Universal access to enterprise agentic copilots and async documentation systems.',
        actionChecklist: [
          'Audit team workflows and eliminate synchronous status meetings.',
          'Deploy AI assistant agents across customer support, coding, and reporting.',
          'Launch a 6-month pilot trial with third-party wellbeing and output metrics tracking.'
        ]
      }
    ],
    roadmap: [
      {
        phase: 'Phase 1 · Pilot & Tooling Ramp',
        timeframe: 'Months 1 - 3',
        title: 'AI Workflow Optimization & 4-Day Trial',
        milestones: [
          'Equip all staff with personalized AI assistants and async collaboration protocols',
          'Begin opt-in 4-day work schedule for digital knowledge departments'
        ],
        riskMitigation: 'Weekly KPI check-ins to ensure customer delivery commitments are met.'
      },
      {
        phase: 'Phase 2 · Full Rollout & Frontline Subsidies',
        timeframe: 'Months 4 - 12',
        title: 'Permanent Transition & Health Dividend Assessment',
        milestones: [
          'Transition entire organization to permanent 32-hour standard',
          'Publish case study and benchmark operational savings vs burnout reduction'
        ],
        riskMitigation: 'Flexible coverage rotations to guarantee 24/7 client uptime.'
      }
    ]
  }
];
