import React, { useState } from 'react';
import type { Persona } from '../types';
import { 
  ArrowRight, 
  AlertTriangle, 
  Eye, 
  Quote
} from 'lucide-react';
import { PersonaDetailModal } from './PersonaDetailModal';

interface PersonaLensGridProps {
  personas: Persona[];
  onOpenDebateWithSpeaker?: (personaId: string) => void;
}

export const PersonaLensGrid: React.FC<PersonaLensGridProps> = ({
  personas,
  onOpenDebateWithSpeaker
}) => {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [filterStance, setFilterStance] = useState<string>('all');

  const filteredPersonas = personas.filter(p => {
    if (filterStance === 'all') return true;
    if (filterStance === 'support') return p.stance.includes('support');
    if (filterStance === 'oppose') return p.stance.includes('oppose');
    if (filterStance === 'skeptical') return p.stance === 'skeptical';
    if (filterStance === 'neutral') return p.stance === 'neutral_pragmatic';
    return true;
  });

  return (
    <div className="persona-lens-section">
      {/* Filter bar */}
      <div className="lens-controls-row">
        <div className="lens-header-text">
          <h2>Cognitive Multi-Lens Perspectives</h2>
          <p>Explore how divergent intellectual archetypes deconstruct the core dilemma</p>
        </div>

        <div className="lens-filter-pills">
          <button
            type="button"
            className={`filter-pill ${filterStance === 'all' ? 'active' : ''}`}
            onClick={() => setFilterStance('all')}
          >
            All Perspectives ({personas.length})
          </button>
          <button
            type="button"
            className={`filter-pill ${filterStance === 'support' ? 'active' : ''}`}
            onClick={() => setFilterStance('support')}
          >
            Proponents
          </button>
          <button
            type="button"
            className={`filter-pill ${filterStance === 'oppose' ? 'active' : ''}`}
            onClick={() => setFilterStance('oppose')}
          >
            Opponents
          </button>
          <button
            type="button"
            className={`filter-pill ${filterStance === 'skeptical' ? 'active' : ''}`}
            onClick={() => setFilterStance('skeptical')}
          >
            Skeptics & Red Team
          </button>
        </div>
      </div>

      {/* Grid of Personas */}
      <div className="persona-grid">
        {filteredPersonas.map((persona) => {
          return (
            <div 
              key={persona.id} 
              className="persona-card glass-panel"
              style={{
                '--persona-color': persona.color,
                '--persona-border': persona.borderColor
              } as React.CSSProperties}
            >
              {/* Card Header with Avatar & Stance */}
              <div className="persona-card-header">
                <div className="persona-avatar-wrapper">
                  <img src={persona.avatar} alt={persona.name} className="persona-avatar" />
                  <div 
                    className="avatar-glow-ring" 
                    style={{ borderColor: persona.color }}
                  />
                </div>
                <div className="persona-title-group">
                  <div className="persona-name-row">
                    <h3 className="persona-name">{persona.name}</h3>
                  </div>
                  <span className="persona-role" style={{ color: persona.color }}>{persona.title}</span>
                  <span className="persona-archetype-badge" style={{ backgroundColor: persona.badgeBg, color: persona.color }}>
                    {persona.archetype.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Stance Indicator */}
              <div className={`persona-stance-pill stance-${persona.stance}`}>
                <span className="stance-dot" />
                <span className="stance-label-text">{persona.stanceLabel}</span>
                <span className="stance-confidence">{persona.confidenceScore}% Conf</span>
              </div>

              {/* Direct Quote Box */}
              <div className="persona-quote-box">
                <Quote size={14} className="quote-icon" style={{ color: persona.color }} />
                <p className="quote-text">"{persona.quote}"</p>
              </div>

              {/* Key Argument Preview */}
              <div className="persona-arguments-section">
                <span className="section-mini-heading">Core Thesis & Logic</span>
                <ul className="arguments-list">
                  {persona.keyArguments.slice(0, 2).map((arg, idx) => (
                    <li key={idx} className="argument-item">
                      <span className="argument-bullet" style={{ backgroundColor: persona.color }} />
                      <span className="argument-text">{arg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cognitive Traits Mini-Radar / Sliders */}
              <div className="persona-traits-mini">
                <div className="trait-row">
                  <span className="trait-name">Innovation vs Safety</span>
                  <div className="trait-bar-bg">
                    <div 
                      className="trait-bar-fill" 
                      style={{ width: `${persona.traits.innovationVsSafety}%`, backgroundColor: persona.color }}
                    />
                  </div>
                  <span className="trait-val">{persona.traits.innovationVsSafety}%</span>
                </div>
                <div className="trait-row">
                  <span className="trait-name">Skepticism / Red-Team</span>
                  <div className="trait-bar-bg">
                    <div 
                      className="trait-bar-fill" 
                      style={{ width: `${persona.traits.skepticism}%`, backgroundColor: '#8b5cf6' }}
                    />
                  </div>
                  <span className="trait-val">{persona.traits.skepticism}%</span>
                </div>
              </div>

              {/* Critical Trade-Off Banner */}
              <div className="tradeoff-mini-banner">
                <AlertTriangle size={14} className="text-amber" />
                <div className="tradeoff-text">
                  <strong>Trade-off:</strong> {persona.criticalTradeOff}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="persona-card-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setSelectedPersona(persona)}
                >
                  <Eye size={14} />
                  <span>Deep Dive Analysis</span>
                </button>

                {onOpenDebateWithSpeaker && (
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onOpenDebateWithSpeaker(persona.id)}
                    title={`View ${persona.name}'s Debate Discourse`}
                  >
                    <span>Debate Rebuttals</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Detail Modal */}
      {selectedPersona && (
        <PersonaDetailModal
          persona={selectedPersona}
          onClose={() => setSelectedPersona(null)}
          onViewDebate={() => {
            if (onOpenDebateWithSpeaker) {
              onOpenDebateWithSpeaker(selectedPersona.id);
            }
            setSelectedPersona(null);
          }}
        />
      )}
    </div>
  );
};
