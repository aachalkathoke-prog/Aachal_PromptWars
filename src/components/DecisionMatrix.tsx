import React, { useState } from 'react';
import type { Scenario } from '../types';
import { 
  SlidersHorizontal, 
  CheckSquare, 
  Square, 
  ShieldCheck, 
  Calendar, 
  Sparkles, 
  FileText
} from 'lucide-react';

interface DecisionMatrixProps {
  scenario: Scenario;
  onOpenExportModal: () => void;
}

export const DecisionMatrix: React.FC<DecisionMatrixProps> = ({
  scenario,
  onOpenExportModal
}) => {
  // Decision Criteria weights
  const [weights, setWeights] = useState({
    innovation: 70,
    safety: 85,
    economics: 60,
    equity: 75
  });

  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({});

  const toggleAction = (key: string) => {
    setCompletedActions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Compute recommendation match score based on weights
  const innovationBias = weights.innovation / 100;
  const safetyBias = weights.safety / 100;

  return (
    <div className="decision-matrix-section">
      {/* Top Banner */}
      <div className="decision-header-row">
        <div>
          <h2>Strategic Decision Synthesis & Action Matrix</h2>
          <p>Weight organizational priorities to generate tailored, risk-hedged strategic roadmaps</p>
        </div>

        <button 
          type="button" 
          className="btn btn-primary"
          onClick={onOpenExportModal}
        >
          <FileText size={16} />
          <span>Export Executive Briefing</span>
        </button>
      </div>

      <div className="decision-grid">
        {/* Left Column: Weighted Criteria Sliders */}
        <div className="decision-controls-card glass-panel">
          <div className="controls-header">
            <SlidersHorizontal size={18} className="text-cyan" />
            <h3>Organizational Priority Weighting</h3>
          </div>
          <p className="controls-desc">
            Adjust the slider weights below to dynamically recalibrate your optimal strategic posture.
          </p>

          <div className="sliders-list">
            <div className="slider-group">
              <div className="slider-label-row">
                <span className="slider-title">🚀 Innovation Velocity & Frontier Capability</span>
                <span className="slider-val-badge">{weights.innovation}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={weights.innovation}
                onChange={(e) => setWeights({ ...weights, innovation: Number(e.target.value) })}
                className="range-input"
              />
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span className="slider-title">🛡️ Safety Rigor, Alignment & Risk Invariance</span>
                <span className="slider-val-badge">{weights.safety}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={weights.safety}
                onChange={(e) => setWeights({ ...weights, safety: Number(e.target.value) })}
                className="range-input"
              />
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span className="slider-title">💼 Capital Efficiency & Sustainable Moat</span>
                <span className="slider-val-badge">{weights.economics}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={weights.economics}
                onChange={(e) => setWeights({ ...weights, economics: Number(e.target.value) })}
                className="range-input"
              />
            </div>

            <div className="slider-group">
              <div className="slider-label-row">
                <span className="slider-title">🌍 Human Dignity, Trust & Public Welfare</span>
                <span className="slider-val-badge">{weights.equity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={weights.equity}
                onChange={(e) => setWeights({ ...weights, equity: Number(e.target.value) })}
                className="range-input"
              />
            </div>
          </div>

          {/* Calibrated Posture Output */}
          <div className="calibrated-posture-box glass-panel">
            <span className="posture-lbl">Calibrated Strategic Posture:</span>
            <span className="posture-result">
              {safetyBias > 0.75 && innovationBias > 0.65
                ? 'High-Assurance Frontier Acceleration (Recommended)'
                : safetyBias > 0.75
                ? 'Precautionary Constitutional Containment'
                : innovationBias > 0.75
                ? 'Radical Iterative Speed'
                : 'Balanced Pragmatic Execution'}
            </span>
          </div>
        </div>

        {/* Right Column: Strategic Recommendations */}
        <div className="recommendations-col">
          <h3 className="section-title">
            <Sparkles size={18} className="text-indigo" />
            Synthesized Strategic Frameworks
          </h3>

          <div className="recommendations-list">
            {scenario.recommendations.map((rec, idx) => (
              <div key={idx} className="rec-card glass-panel border-indigo">
                <div className="rec-card-header">
                  <div>
                    <span className="badge badge-indigo">{rec.archetypeRecommendation}</span>
                    <h4 className="rec-title mt-2">{rec.pathName}</h4>
                  </div>
                  <div className={`risk-badge risk-${rec.riskFactor.toLowerCase()}`}>
                    <span>Risk: {rec.riskFactor}</span>
                  </div>
                </div>

                <p className="rec-desc">{rec.description}</p>

                <div className="rec-key-details-grid">
                  <div className="rec-detail-item glass-panel">
                    <span className="detail-item-lbl text-emerald">Expected Upside:</span>
                    <span className="detail-item-val">{rec.expectedUpside}</span>
                  </div>
                  <div className="rec-detail-item glass-panel">
                    <span className="detail-item-lbl text-cyan">Prerequisite Condition:</span>
                    <span className="detail-item-val">{rec.primaryCondition}</span>
                  </div>
                </div>

                {/* Actionable Checklist */}
                <div className="rec-checklist-section">
                  <span className="checklist-heading">Implementation Action Checklist:</span>
                  <div className="checklist-items">
                    {rec.actionChecklist.map((item, itemIdx) => {
                      const itemKey = `${idx}-${itemIdx}`;
                      const isDone = !!completedActions[itemKey];
                      return (
                        <div 
                          key={itemIdx} 
                          className={`checklist-item ${isDone ? 'checked' : ''}`}
                          onClick={() => toggleAction(itemKey)}
                        >
                          {isDone ? (
                            <CheckSquare size={18} className="text-emerald check-icon" />
                          ) : (
                            <Square size={18} className="text-muted check-icon" />
                          )}
                          <span className="item-text">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phased Roadmap Timeline Section */}
      <div className="roadmap-section mt-8">
        <div className="roadmap-header">
          <Calendar size={18} className="text-cyan" />
          <h3>Phased Execution Roadmap & Risk Mitigation Gates</h3>
        </div>

        <div className="roadmap-cards-grid">
          {scenario.roadmap.map((phase, pIdx) => (
            <div key={pIdx} className="phase-card glass-panel">
              <div className="phase-card-top">
                <span className="phase-badge badge-cyan">{phase.phase}</span>
                <span className="phase-time">{phase.timeframe}</span>
              </div>
              <h4 className="phase-title">{phase.title}</h4>

              <div className="phase-milestones">
                <span className="milestones-lbl">Key Deliverables:</span>
                <ul>
                  {phase.milestones.map((m, mIdx) => (
                    <li key={mIdx}>
                      <span className="bullet-cyan" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="phase-mitigation glass-panel">
                <ShieldCheck size={14} className="text-emerald" />
                <span><strong>Mitigation Gate:</strong> {phase.riskMitigation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
