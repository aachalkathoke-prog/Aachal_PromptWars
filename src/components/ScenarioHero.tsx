import React from 'react';
import type { Scenario } from '../types';
import { 
  HelpCircle, 
  Flame, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Swords
} from 'lucide-react';

interface ScenarioHeroProps {
  scenario: Scenario;
  onNavigateToDebate: () => void;
  onNavigateToDecision: () => void;
}

export const ScenarioHero: React.FC<ScenarioHeroProps> = ({
  scenario,
  onNavigateToDebate,
  onNavigateToDecision,
}) => {
  const score = scenario.consensusScore;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getScoreColor = (val: number) => {
    if (val >= 70) return '#10b981'; // Green
    if (val >= 50) return '#f59e0b'; // Amber
    return '#f43f5e'; // Red
  };

  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-card glass-panel">
          <div className="hero-content-col">
            {/* Meta Tags Row */}
            <div className="hero-meta-row">
              <span className="badge badge-indigo">
                <Layers size={13} />
                {scenario.category}
              </span>
              <span className={`badge ${scenario.polarizationLevel === 'High Polarization' ? 'badge-rose' : 'badge-amber'}`}>
                <Flame size={13} />
                {scenario.polarizationLevel}
              </span>
              <span className="badge badge-cyan">
                <ShieldCheck size={13} />
                {scenario.urgency} Horizon
              </span>
            </div>

            {/* Dilemma Prompt & Title */}
            <h1 className="hero-title">{scenario.title}</h1>
            <p className="hero-dilemma-box">
              <span className="dilemma-prefix">Dilemma Question:</span> {scenario.dilemmaPrompt}
            </p>

            {/* Tags list */}
            <div className="hero-tags-list">
              {scenario.tags.map((tag, i) => (
                <span key={i} className="hero-tag-pill">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Quick stats & action triggers */}
            <div className="hero-actions-row">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onNavigateToDebate}
              >
                <Swords size={18} />
                <span>Enter Live Synthetic Debate ({scenario.debateTranscript.length} Messages)</span>
              </button>

              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={onNavigateToDecision}
              >
                <TrendingUp size={18} />
                <span>Explore Decision Matrix</span>
              </button>
            </div>
          </div>

          {/* Consensus Gauge & Breakdown */}
          <div className="hero-gauge-col">
            <div className="gauge-box glass-panel">
              <div className="gauge-header">
                <span className="gauge-title">Consensus Index</span>
                <span className="info-tooltip" title="Calculated aggregate agreement score across all opposing AI personas">
                  <HelpCircle size={14} />
                </span>
              </div>

              <div className="circular-gauge-wrapper">
                <svg className="gauge-svg" width="120" height="120" viewBox="0 0 100 100">
                  <circle
                    className="gauge-bg-circle"
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    className="gauge-progress-circle"
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={getScoreColor(score)}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="none"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="gauge-center-content">
                  <span className="gauge-number" style={{ color: getScoreColor(score) }}>{score}%</span>
                  <span className="gauge-label">{score >= 65 ? 'High Alignment' : score >= 50 ? 'Contested' : 'Polarized'}</span>
                </div>
              </div>

              <div className="gauge-stats-grid">
                <div className="gauge-stat-item">
                  <span className="stat-val">{scenario.personas.length}</span>
                  <span className="stat-lbl">Expert Lens</span>
                </div>
                <div className="gauge-stat-item">
                  <span className="stat-val">{scenario.consensusInsights.length}</span>
                  <span className="stat-lbl">Key Insights</span>
                </div>
                <div className="gauge-stat-item">
                  <span className="stat-val">{scenario.recommendations.length}</span>
                  <span className="stat-lbl">Action Paths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
