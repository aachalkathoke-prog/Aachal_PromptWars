import React, { useState } from 'react';
import type { Persona, PersonaArchetype } from '../types';
import { 
  Cpu, 
  PlusCircle, 
  Trash2, 
  Sliders, 
  Sparkles, 
  Check
} from 'lucide-react';

interface PersonaStudioProps {
  personas: Persona[];
  onAddCustomPersona: (newPersona: Persona) => void;
  onDeleteCustomPersona: (personaId: string) => void;
}

const PRESET_COLORS = [
  '#06b6d4', // Cyan
  '#ec4899', // Pink
  '#10b981', // Emerald
  '#f59e0b', // Amber
  '#8b5cf6', // Violet
  '#6366f1', // Indigo
  '#3b82f6', // Blue
  '#f43f5e'  // Rose
];

export const PersonaStudio: React.FC<PersonaStudioProps> = ({
  personas,
  onAddCustomPersona,
  onDeleteCustomPersona
}) => {
  const [isCreating, setIsCreating] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  const [archetype, setArchetype] = useState<PersonaArchetype>('custom');
  const [quote, setQuote] = useState('');
  const [bio, setBio] = useState('');
  const [selectedColor, setSelectedColor] = useState('#8b5cf6');
  const [traits, setTraits] = useState({
    innovationVsSafety: 60,
    shortVsLongTerm: 60,
    marketVsEthics: 50,
    skepticism: 70
  });

  const handleCreatePersona = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !title.trim()) return;

    const newPersona: Persona = {
      id: `custom-persona-${Date.now()}`,
      name: name.trim(),
      title: title.trim(),
      role: role.trim() || 'Domain Expert Advisor',
      archetype,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      color: selectedColor,
      badgeBg: `${selectedColor}22`,
      borderColor: `${selectedColor}66`,
      quote: quote.trim() || 'Rigorous multi-perspective analysis requires challenging baseline paradigms.',
      bio: bio.trim() || 'Custom expert persona synthesized for specialized strategic stress-testing.',
      stance: 'neutral_pragmatic',
      stanceLabel: 'Custom Evaluator Stance',
      confidenceScore: 88,
      traits,
      keyArguments: [
        'Evaluates foundational assumptions from custom disciplinary perspective.',
        'Balances high-assurance governance with operational agility.'
      ],
      vulnerabilities: ['May be vulnerable to uncalibrated domain-specific assumptions.'],
      criticalTradeOff: 'Prioritizes customized domain values over generic consensus.',
      proposedSafeguard: 'Mandatory cross-examination by existing adversarial personas.',
      isCustom: true
    };

    onAddCustomPersona(newPersona);
    setIsCreating(false);
    // Reset
    setName('');
    setTitle('');
    setRole('');
    setQuote('');
    setBio('');
  };

  return (
    <div className="persona-studio-section">
      <div className="studio-header-row">
        <div>
          <h2>Persona Studio & Cognitive Architecture</h2>
          <p>Inspect existing cognitive archetypes or design custom synthetic expert personas to evaluate your decisions</p>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsCreating(true)}
        >
          <PlusCircle size={16} />
          <span>Create Custom Persona</span>
        </button>
      </div>

      {/* List of Personas */}
      <div className="studio-grid">
        {personas.map((persona) => (
          <div 
            key={persona.id}
            className="studio-persona-card glass-panel"
            style={{
              '--persona-color': persona.color
            } as React.CSSProperties}
          >
            <div className="studio-card-top">
              <img src={persona.avatar} alt={persona.name} className="studio-avatar" />
              <div className="studio-info">
                <div className="studio-title-row">
                  <h3 className="studio-name">{persona.name}</h3>
                  {persona.isCustom && (
                    <button
                      type="button"
                      className="btn-delete-custom"
                      onClick={() => onDeleteCustomPersona(persona.id)}
                      title="Delete Custom Persona"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
                <span className="studio-role" style={{ color: persona.color }}>{persona.title}</span>
                <span className="studio-archetype-tag">{persona.archetype.toUpperCase()}</span>
              </div>
            </div>

            <p className="studio-quote">"{persona.quote}"</p>
            <p className="studio-bio">{persona.bio}</p>

            {/* Trait meters */}
            <div className="studio-traits-list">
              <div className="studio-trait-item">
                <span>Innovation vs Safety:</span>
                <strong>{persona.traits.innovationVsSafety}%</strong>
              </div>
              <div className="studio-trait-item">
                <span>Temporal Horizon:</span>
                <strong>{persona.traits.shortVsLongTerm}%</strong>
              </div>
              <div className="studio-trait-item">
                <span>Market vs Ethics:</span>
                <strong>{persona.traits.marketVsEthics}%</strong>
              </div>
              <div className="studio-trait-item">
                <span>Skepticism Index:</span>
                <strong>{persona.traits.skepticism}%</strong>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Creation Modal */}
      {isCreating && (
        <div className="modal-overlay" onClick={() => setIsCreating(false)}>
          <div className="studio-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-left">
                <Cpu size={22} className="text-cyan" />
                <h2>Design Custom Synthetic Persona</h2>
              </div>
              <button type="button" className="btn-close-modal" onClick={() => setIsCreating(false)}>
                &times;
              </button>
            </div>

            <form className="modal-body-scroll studio-form" onSubmit={handleCreatePersona}>
              <div className="form-group-row">
                <div className="form-group flex-1">
                  <label>Persona Name</label>
                  <input
                    type="text"
                    className="input-control"
                    placeholder="e.g. Dr. Cassandra Wright"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group flex-1">
                  <label>Title & Stance Archetype</label>
                  <input
                    type="text"
                    className="input-control"
                    placeholder="e.g. Quantum Cryptographer & Red-Teamer"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group-row mt-3">
                <div className="form-group flex-1">
                  <label>Cognitive Archetype</label>
                  <select 
                    className="input-control"
                    value={archetype}
                    onChange={(e) => setArchetype(e.target.value as PersonaArchetype)}
                  >
                    <option value="technologist">Technologist / Accelerationist</option>
                    <option value="ethicist">Ethicist / Alignment Guard</option>
                    <option value="strategist">Venture Strategist / Capital Allocator</option>
                    <option value="humanist">Humanist / Societal Welfare</option>
                    <option value="skeptic">Systemic Skeptic / Adversarial Red Team</option>
                    <option value="philosopher">First-Principles Philosopher</option>
                    <option value="custom">Custom Specialist</option>
                  </select>
                </div>

                <div className="form-group flex-1">
                  <label>Accent Luminescence Color</label>
                  <div className="color-picker-row">
                    {PRESET_COLORS.map(c => (
                      <button
                        key={c}
                        type="button"
                        className={`color-swatch ${selectedColor === c ? 'active' : ''}`}
                        style={{ backgroundColor: c }}
                        onClick={() => setSelectedColor(c)}
                      >
                        {selectedColor === c && <Check size={14} className="text-black" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-group mt-3">
                <label>Foundational Philosophical Axiom / Quote</label>
                <input
                  type="text"
                  className="input-control"
                  placeholder="e.g. Complexity without formal bounds guarantees unintended cascade failures."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                />
              </div>

              <div className="form-group mt-3">
                <label>Background & Disciplinary Lens</label>
                <textarea
                  className="input-control"
                  placeholder="Describe this persona's intellectual background, core biases, and evaluation criteria..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>

              {/* Trait Sliders */}
              <div className="studio-traits-editor mt-4">
                <span className="editor-title">
                  <Sliders size={16} className="text-cyan" />
                  Calibrate Cognitive Trait Parameters
                </span>

                <div className="sliders-grid mt-2">
                  <div className="slider-item">
                    <div className="slider-lbl">
                      <span>Innovation vs Safety</span>
                      <span>{traits.innovationVsSafety}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={traits.innovationVsSafety}
                      onChange={(e) => setTraits({ ...traits, innovationVsSafety: Number(e.target.value) })}
                      className="range-input"
                    />
                  </div>

                  <div className="slider-item">
                    <div className="slider-lbl">
                      <span>Temporal Horizon</span>
                      <span>{traits.shortVsLongTerm}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={traits.shortVsLongTerm}
                      onChange={(e) => setTraits({ ...traits, shortVsLongTerm: Number(e.target.value) })}
                      className="range-input"
                    />
                  </div>

                  <div className="slider-item">
                    <div className="slider-lbl">
                      <span>Market vs Ethics</span>
                      <span>{traits.marketVsEthics}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={traits.marketVsEthics}
                      onChange={(e) => setTraits({ ...traits, marketVsEthics: Number(e.target.value) })}
                      className="range-input"
                    />
                  </div>

                  <div className="slider-item">
                    <div className="slider-lbl">
                      <span>Skepticism / Red-Team</span>
                      <span>{traits.skepticism}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={traits.skepticism}
                      onChange={(e) => setTraits({ ...traits, skepticism: Number(e.target.value) })}
                      className="range-input"
                    />
                  </div>
                </div>
              </div>

              <div className="modal-footer mt-4">
                <button type="button" className="btn btn-secondary" onClick={() => setIsCreating(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <Sparkles size={16} />
                  <span>Synthesize Persona</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
