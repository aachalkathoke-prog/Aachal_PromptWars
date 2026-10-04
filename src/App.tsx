import { useState } from 'react';
import './index.css';
import './App.css';
import type { Scenario, Persona } from './types';
import { INITIAL_SCENARIOS, DEFAULT_PERSONAS } from './data/scenarios';
import { Header } from './components/Header';
import { ScenarioHero } from './components/ScenarioHero';
import { TabNavigation } from './components/TabNavigation';
import type { ActiveTab } from './components/TabNavigation';
import { PersonaLensGrid } from './components/PersonaLensGrid';
import { DebateArena } from './components/DebateArena';
import { ConsensusMatrix } from './components/ConsensusMatrix';
import { DecisionMatrix } from './components/DecisionMatrix';
import { PersonaStudio } from './components/PersonaStudio';
import { NewDilemmaModal } from './components/NewDilemmaModal';
import { ExportReportModal } from './components/ExportReportModal';
import { triggerConfetti } from './utils/confetti';

export function App() {
  const [scenarios, setScenarios] = useState<Scenario[]>(INITIAL_SCENARIOS);
  const [activeScenarioId, setActiveScenarioId] = useState<string>(INITIAL_SCENARIOS[0].id);
  const [activeTab, setActiveTab] = useState<ActiveTab>('lens');
  const [audioSynthEnabled, setAudioSynthEnabled] = useState(false);
  
  // Modals & Navigation state
  const [isNewDilemmaOpen, setIsNewDilemmaOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [targetDebateSpeakerId, setTargetDebateSpeakerId] = useState<string | null>(null);

  // Custom personas in Studio
  const [allPersonas, setAllPersonas] = useState<Persona[]>(
    Object.values(DEFAULT_PERSONAS).map(p => ({
      ...p,
      stance: 'neutral_pragmatic',
      stanceLabel: 'Pragmatic Evaluation',
      confidenceScore: 85,
      keyArguments: ['Ground truth evaluation from archetype domain.'],
      vulnerabilities: ['Assumes static boundary parameters.'],
      criticalTradeOff: 'Trades speed for systemic resilience.',
      proposedSafeguard: 'Dual verification loops.'
    }))
  );

  const activeScenario = scenarios.find((s: Scenario) => s.id === activeScenarioId) || scenarios[0];

  const handleScenarioCreated = (newScenario: Scenario) => {
    setScenarios([newScenario, ...scenarios]);
    setActiveScenarioId(newScenario.id);
    setActiveTab('lens');
    
    // Celebration confetti
    try {
      triggerConfetti();
    } catch {
      // safe fallback
    }
  };

  const handleUpdateScenario = (updated: Scenario) => {
    setScenarios(scenarios.map((s: Scenario) => s.id === updated.id ? updated : s));
  };

  const handleAddCustomPersona = (newPersona: Persona) => {
    setAllPersonas((prev: Persona[]) => [...prev, newPersona]);
    // Also attach to active scenario
    const updated = {
      ...activeScenario,
      personas: [...activeScenario.personas, newPersona]
    };
    handleUpdateScenario(updated);
  };

  const handleDeleteCustomPersona = (personaId: string) => {
    setAllPersonas((prev: Persona[]) => prev.filter((p: Persona) => p.id !== personaId));
    const updated = {
      ...activeScenario,
      personas: activeScenario.personas.filter((p: Persona) => p.id !== personaId)
    };
    handleUpdateScenario(updated);
  };

  const handleOpenDebateWithSpeaker = (speakerId: string) => {
    setTargetDebateSpeakerId(speakerId);
    setActiveTab('debate');
  };

  return (
    <div className="app-root">
      {/* Background Ambient Glow Orbs */}
      <div className="ambient-glow-orb-1" />
      <div className="ambient-glow-orb-2" />

      {/* Top Header */}
      <Header
        scenarios={scenarios}
        activeScenario={activeScenario}
        onSelectScenario={(sc) => setActiveScenarioId(sc.id)}
        onOpenNewDilemma={() => setIsNewDilemmaOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        audioSynthEnabled={audioSynthEnabled}
        onToggleAudioSynth={() => setAudioSynthEnabled(!audioSynthEnabled)}
      />

      {/* Hero Dilemma Overview & Consensus Gauge */}
      <ScenarioHero
        scenario={activeScenario}
        onNavigateToDebate={() => setActiveTab('debate')}
        onNavigateToDecision={() => setActiveTab('decision')}
      />

      {/* Tab Navigation */}
      <TabNavigation
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab !== 'debate') setTargetDebateSpeakerId(null);
        }}
        debateCount={activeScenario.debateTranscript.length}
        personaCount={activeScenario.personas.length}
      />

      {/* Main Tab Content Views */}
      <main className="main-content-view">
        <div className="container">
          {activeTab === 'lens' && (
            <PersonaLensGrid
              personas={activeScenario.personas}
              onOpenDebateWithSpeaker={handleOpenDebateWithSpeaker}
            />
          )}

          {activeTab === 'debate' && (
            <DebateArena
              scenario={activeScenario}
              onUpdateScenario={handleUpdateScenario}
              audioSynthEnabled={audioSynthEnabled}
              targetSpeakerId={targetDebateSpeakerId}
            />
          )}

          {activeTab === 'consensus' && (
            <ConsensusMatrix
              scenario={activeScenario}
            />
          )}

          {activeTab === 'decision' && (
            <DecisionMatrix
              scenario={activeScenario}
              onOpenExportModal={() => setIsExportModalOpen(true)}
            />
          )}

          {activeTab === 'studio' && (
            <PersonaStudio
              personas={allPersonas}
              onAddCustomPersona={handleAddCustomPersona}
              onDeleteCustomPersona={handleDeleteCustomPersona}
            />
          )}
        </div>
      </main>

      {/* Modals */}
      {isNewDilemmaOpen && (
        <NewDilemmaModal
          onClose={() => setIsNewDilemmaOpen(false)}
          onScenarioCreated={handleScenarioCreated}
          availablePersonas={allPersonas}
        />
      )}

      {isExportModalOpen && (
        <ExportReportModal
          scenario={activeScenario}
          onClose={() => setIsExportModalOpen(false)}
        />
      )}

      {/* Footer */}
      <footer className="app-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <strong>Perspective AI</strong> · Multi-Perspective Decision & Debate Intelligence
          </div>
          <div className="footer-powered">
            <span>Powered by Synthetic Multi-Agent Epistemic Architecture</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
