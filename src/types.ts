export type PersonaArchetype = 
  | 'technologist' 
  | 'ethicist' 
  | 'strategist' 
  | 'humanist' 
  | 'skeptic' 
  | 'philosopher'
  | 'custom';

export type StanceType = 
  | 'strongly_support' 
  | 'support' 
  | 'neutral_pragmatic' 
  | 'skeptical' 
  | 'strongly_oppose';

export interface PersonaTraits {
  innovationVsSafety: number; // 0 = Pure Safety, 100 = Radical Innovation
  shortVsLongTerm: number;    // 0 = Immediate execution, 100 = 50-year horizon
  marketVsEthics: number;     // 0 = Market ROI, 100 = Pure Moral/Humanist
  skepticism: number;         // 0 = Trusting/Optimistic, 100 = Red Team/Hyper-critical
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  title: string;
  archetype: PersonaArchetype;
  avatar: string;
  color: string;
  badgeBg: string;
  borderColor: string;
  quote: string;
  bio: string;
  stance: StanceType;
  stanceLabel: string;
  confidenceScore: number; // 0 - 100
  traits: PersonaTraits;
  keyArguments: string[];
  vulnerabilities: string[];
  criticalTradeOff: string;
  proposedSafeguard: string;
  isCustom?: boolean;
}

export interface DebateMessage {
  id: string;
  roundNumber: number;
  personaId: string;
  speakerName: string;
  speakerRole: string;
  avatar: string;
  color: string;
  phase: 'Opening Thesis' | 'Cross-Examination' | 'Rebuttal' | 'Concession & Synthesis' | 'User Challenge';
  content: string;
  rebuttalTargetId?: string;
  rebuttalTargetName?: string;
  sentiment: 'aggressive' | 'measured' | 'diplomatic' | 'inquisitive';
  timestamp: string;
  impactScore?: number;
}

export interface ConsensusInsight {
  id: string;
  category: 'unanimous_ground' | 'strategic_rift' | 'hidden_bias' | 'critical_pivot';
  title: string;
  description: string;
  impactLevel: 'High' | 'Medium' | 'Critical';
  partiesAligned: string[];
  partiesConflicted: string[];
  actionRecommendation: string;
}

export interface PolarCoordinate {
  personaId: string;
  x: number; // -100 to 100 (e.g. Risk Tolerance vs Risk Aversion)
  y: number; // -100 to 100 (e.g. Near-term ROI vs Long-term Humanity)
  label: string;
  color: string;
}

export interface DecisionCriterion {
  id: string;
  name: string;
  weight: number; // 0 - 100
  description: string;
}

export interface ScenarioRecommendation {
  pathName: string;
  archetypeRecommendation: string;
  description: string;
  riskFactor: 'Low' | 'Medium' | 'High' | 'Extreme';
  expectedUpside: string;
  primaryCondition: string;
  actionChecklist: string[];
}

export interface ScenarioRoadmapPhase {
  phase: string;
  timeframe: string;
  title: string;
  milestones: string[];
  riskMitigation: string;
}

export interface Scenario {
  id: string;
  title: string;
  category: 'AI & Frontier Tech' | 'Corporate Strategy' | 'Bioethics & Health' | 'Public Policy & Society' | 'Macroeconomics';
  dilemmaPrompt: string;
  summary: string;
  urgency: 'Immediate' | 'Strategic Horizon' | 'Exploratory';
  consensusScore: number; // 0 - 100
  polarizationLevel: 'High Polarization' | 'Moderate Debate' | 'Nuanced Consensus';
  tags: string[];
  personas: Persona[];
  debateTranscript: DebateMessage[];
  consensusInsights: ConsensusInsight[];
  polarCoordinates: PolarCoordinate[];
  recommendations: ScenarioRecommendation[];
  roadmap: ScenarioRoadmapPhase[];
}

export const PERSPECTIVE_AI_VERSION = '1.0.0';
