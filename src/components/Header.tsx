import React from 'react';
import type { Scenario } from '../types';
import { 
  PlusCircle, 
  FileText, 
  Volume2, 
  VolumeX, 
  Compass, 
  ChevronDown,
  BrainCircuit
} from 'lucide-react';

interface HeaderProps {
  scenarios: Scenario[];
  activeScenario: Scenario;
  onSelectScenario: (scenario: Scenario) => void;
  onOpenNewDilemma: () => void;
  onOpenExportModal: () => void;
  audioSynthEnabled: boolean;
  onToggleAudioSynth: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  scenarios,
  activeScenario,
  onSelectScenario,
  onOpenNewDilemma,
  onOpenExportModal,
  audioSynthEnabled,
  onToggleAudioSynth,
}) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <header className="header-root">
      <div className="container header-container">
        {/* Brand & Logo */}
        <div className="brand-group">
          <div className="brand-logo-glow">
            <div className="logo-icon-wrapper">
              <BrainCircuit className="logo-icon text-indigo-400" size={26} />
              <div className="logo-pulse-ring" />
            </div>
          </div>
          <div>
            <div className="brand-title-row">
              <span className="brand-title">Perspective</span>
              <span className="brand-badge-ai">AI</span>
            </div>
            <p className="brand-subtitle">Multi-Perspective Decision & Debate Intelligence</p>
          </div>
        </div>

        {/* Scenario Switcher Dropdown */}
        <div className="scenario-dropdown-wrapper">
          <button 
            type="button" 
            className="scenario-select-btn glass-panel"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            <Compass size={18} className="text-cyan" />
            <div className="scenario-select-text">
              <span className="scenario-select-label">Active Dilemma</span>
              <span className="scenario-select-title">{activeScenario.title}</span>
            </div>
            <ChevronDown size={16} className={`dropdown-chevron ${dropdownOpen ? 'open' : ''}`} />
          </button>

          {dropdownOpen && (
            <>
              <div className="dropdown-backdrop" onClick={() => setDropdownOpen(false)} />
              <div className="scenario-menu glass-panel">
                <div className="scenario-menu-header">
                  <span>Pre-analyzed Scenarios & Custom Dilemmas</span>
                  <span className="badge badge-indigo">{scenarios.length} Scenarios</span>
                </div>
                <div className="scenario-list">
                  {scenarios.map((sc) => (
                    <button
                      key={sc.id}
                      type="button"
                      className={`scenario-item ${sc.id === activeScenario.id ? 'active' : ''}`}
                      onClick={() => {
                        onSelectScenario(sc);
                        setDropdownOpen(false);
                      }}
                    >
                      <div className="scenario-item-info">
                        <div className="scenario-item-meta">
                          <span className="badge badge-cyan">{sc.category}</span>
                          <span className="scenario-urgency">{sc.urgency}</span>
                        </div>
                        <h4 className="scenario-item-title">{sc.title}</h4>
                      </div>
                      <div className="scenario-item-score">
                        <span className="score-val">{sc.consensusScore}%</span>
                        <span className="score-lbl">Consensus</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Action Controls */}
        <div className="header-actions">
          <button
            type="button"
            className={`btn-action-icon ${audioSynthEnabled ? 'active' : ''}`}
            onClick={onToggleAudioSynth}
            title={audioSynthEnabled ? 'AI Voice Synthesis: ON' : 'AI Voice Synthesis: Muted'}
          >
            {audioSynthEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <span className="action-text-sm">{audioSynthEnabled ? 'Voice ON' : 'Voice Off'}</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={onOpenExportModal}
            title="Generate & Export Executive Briefing"
          >
            <FileText size={16} />
            <span>Export Briefing</span>
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenNewDilemma}
            title="Analyze a new query or decision"
          >
            <PlusCircle size={16} />
            <span>New Dilemma</span>
          </button>
        </div>
      </div>
    </header>
  );
};
