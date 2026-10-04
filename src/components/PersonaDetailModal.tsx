import React from 'react';
import type { Persona } from '../types';
import { 
  X, 
  Quote, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Sliders, 
  Swords
} from 'lucide-react';

interface PersonaDetailModalProps {
  persona: Persona;
  onClose: () => void;
  onViewDebate: () => void;
}

export const PersonaDetailModal: React.FC<PersonaDetailModalProps> = ({
  persona,
  onClose,
  onViewDebate
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="persona-modal-card glass-panel" 
        onClick={(e) => e.stopPropagation()}
        style={{
          '--persona-color': persona.color
        } as React.CSSProperties}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <img src={persona.avatar} alt={persona.name} className="modal-avatar" />
            <div>
              <div className="modal-name-row">
                <h2>{persona.name}</h2>
                <span className="persona-archetype-badge" style={{ backgroundColor: persona.badgeBg, color: persona.color }}>
                  {persona.archetype.toUpperCase()}
                </span>
              </div>
              <p className="modal-role-title" style={{ color: persona.color }}>{persona.title}</p>
              <p className="modal-role-sub">{persona.role}</p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-scroll">
          {/* Stance and Bio */}
          <div className="modal-section-grid">
            <div className="modal-subcard glass-panel">
              <span className="subcard-title">Philosophical Stance & Confidence</span>
              <div className={`persona-stance-pill stance-${persona.stance} mt-2`}>
                <span className="stance-dot" />
                <span className="stance-label-text">{persona.stanceLabel}</span>
                <span className="stance-confidence">{persona.confidenceScore}% Confidence</span>
              </div>
              <p className="modal-bio-text mt-3">{persona.bio}</p>
            </div>

            <div className="modal-subcard glass-panel quote-highlight">
              <Quote size={20} className="text-cyan mb-2" />
              <p className="modal-quote-full">"{persona.quote}"</p>
            </div>
          </div>

          {/* Key Arguments */}
          <div className="modal-detail-block mt-4">
            <h4 className="detail-block-title">
              <CheckCircle2 size={16} style={{ color: persona.color }} />
              Full Argumentative Architecture
            </h4>
            <div className="arguments-expanded-list">
              {persona.keyArguments.map((arg, idx) => (
                <div key={idx} className="argument-expanded-card glass-panel">
                  <span className="arg-index" style={{ backgroundColor: persona.color }}>0{idx + 1}</span>
                  <p className="arg-expanded-text">{arg}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cognitive Trait Axes */}
          <div className="modal-detail-block mt-4">
            <h4 className="detail-block-title">
              <Sliders size={16} className="text-indigo" />
              Cognitive Bias & Trait Profile
            </h4>
            <div className="traits-full-grid">
              <div className="trait-full-card glass-panel">
                <div className="trait-full-header">
                  <span>Innovation vs Safety Focus</span>
                  <span className="trait-val-badge">{persona.traits.innovationVsSafety}%</span>
                </div>
                <div className="trait-bar-bg">
                  <div className="trait-bar-fill" style={{ width: `${persona.traits.innovationVsSafety}%`, backgroundColor: persona.color }} />
                </div>
                <span className="trait-desc">
                  {persona.traits.innovationVsSafety > 65 ? 'High tolerance for dynamic variance & speed' : 'Precautionary principle priority'}
                </span>
              </div>

              <div className="trait-full-card glass-panel">
                <div className="trait-full-header">
                  <span>Temporal Horizon (Short vs 50-Year)</span>
                  <span className="trait-val-badge">{persona.traits.shortVsLongTerm}%</span>
                </div>
                <div className="trait-bar-bg">
                  <div className="trait-bar-fill" style={{ width: `${persona.traits.shortVsLongTerm}%`, backgroundColor: '#10b981' }} />
                </div>
                <span className="trait-desc">
                  {persona.traits.shortVsLongTerm > 60 ? 'Long-term civilizational legacy focus' : 'Near-term tactical execution focus'}
                </span>
              </div>

              <div className="trait-full-card glass-panel">
                <div className="trait-full-header">
                  <span>Market Economics vs Human Ethics</span>
                  <span className="trait-val-badge">{persona.traits.marketVsEthics}%</span>
                </div>
                <div className="trait-bar-bg">
                  <div className="trait-bar-fill" style={{ width: `${persona.traits.marketVsEthics}%`, backgroundColor: '#f59e0b' }} />
                </div>
                <span className="trait-desc">
                  {persona.traits.marketVsEthics > 50 ? 'Distributive justice & moral accountability' : 'Capital efficiency & enterprise moat'}
                </span>
              </div>

              <div className="trait-full-card glass-panel">
                <div className="trait-full-header">
                  <span>Skepticism / Adversarial Stress-Testing</span>
                  <span className="trait-val-badge">{persona.traits.skepticism}%</span>
                </div>
                <div className="trait-bar-bg">
                  <div className="trait-bar-fill" style={{ width: `${persona.traits.skepticism}%`, backgroundColor: '#8b5cf6' }} />
                </div>
                <span className="trait-desc">
                  {persona.traits.skepticism > 70 ? 'Aggressive red-teaming of edge-case failure modes' : 'Constructive builder optimism'}
                </span>
              </div>
            </div>
          </div>

          {/* Vulnerabilities and Safeguards */}
          <div className="modal-section-grid mt-4">
            <div className="modal-subcard glass-panel border-rose">
              <span className="subcard-title text-rose">
                <AlertTriangle size={15} />
                Potential Blindspots & Vulnerabilities
              </span>
              <ul className="vulnerability-list mt-2">
                {persona.vulnerabilities.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>

            <div className="modal-subcard glass-panel border-emerald">
              <span className="subcard-title text-emerald">
                <ShieldCheck size={15} />
                Proposed Safeguard & Verification Loop
              </span>
              <p className="mt-2 safeguard-text">{persona.proposedSafeguard}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Close Lens
          </button>
          <button type="button" className="btn btn-primary" onClick={onViewDebate}>
            <Swords size={16} />
            <span>Challenge in Debate Arena</span>
          </button>
        </div>
      </div>
    </div>
  );
};
