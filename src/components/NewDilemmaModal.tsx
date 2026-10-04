import React, { useState } from 'react';
import type { Scenario, Persona } from '../types';
import { 
  Sparkles, 
  X, 
  Check, 
  Lightbulb, 
  BrainCircuit
} from 'lucide-react';
import { generateCustomScenario } from '../utils/aiSimulator';

interface NewDilemmaModalProps {
  onClose: () => void;
  onScenarioCreated: (scenario: Scenario) => void;
  availablePersonas: Persona[];
}

const QUICK_PROMPTS = [
  'Should a healthtech startup deploy autonomous AI diagnostic agents without doctor oversight in remote clinics?',
  'Should frontier tech companies place a moratorium on human-like affective voice AI companions?',
  'Should city governments replace human traffic management entirely with decentralized multi-agent algorithms?',
  'Should copyright law exempt generative AI training on public web text and artist datasets?'
];

export const NewDilemmaModal: React.FC<NewDilemmaModalProps> = ({
  onClose,
  onScenarioCreated,
  availablePersonas
}) => {
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState<Scenario['category']>('AI & Frontier Tech');
  const [polarization, setPolarization] = useState<Scenario['polarizationLevel']>('High Polarization');
  const [selectedPersonaIds, setSelectedPersonaIds] = useState<string[]>(
    availablePersonas.map(p => p.id)
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);

  const togglePersona = (id: string) => {
    if (selectedPersonaIds.includes(id)) {
      if (selectedPersonaIds.length > 2) {
        setSelectedPersonaIds(selectedPersonaIds.filter(pId => pId !== id));
      }
    } else {
      setSelectedPersonaIds([...selectedPersonaIds, id]);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setGenerationStep(1);

    setTimeout(() => {
      setGenerationStep(2);
      setTimeout(() => {
        setGenerationStep(3);
        setTimeout(() => {
          const newScenario = generateCustomScenario({
            prompt: prompt.trim(),
            category,
            polarization,
            selectedPersonaIds,
            customPersonas: availablePersonas.filter(p => p.isCustom)
          });
          onScenarioCreated(newScenario);
          setIsGenerating(false);
          onClose();
        }, 800);
      }, 800);
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="new-dilemma-modal glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-left">
            <BrainCircuit size={22} className="text-cyan" />
            <div>
              <h2>Analyze New Strategic Dilemma</h2>
              <p className="modal-sub">Deconstruct any complex prompt or decision from multiple AI perspectives</p>
            </div>
          </div>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {isGenerating ? (
          <div className="generating-state-card glass-panel">
            <div className="generating-spinner" />
            <h3 className="generating-title">Synthesizing Multi-Perspective Intelligence...</h3>
            <div className="generating-steps-list">
              <div className={`step-item ${generationStep >= 1 ? 'active' : ''}`}>
                <span className="step-bullet">1</span>
                <span>Initializing {selectedPersonaIds.length} expert cognitive frameworks...</span>
              </div>
              <div className={`step-item ${generationStep >= 2 ? 'active' : ''}`}>
                <span className="step-bullet">2</span>
                <span>Simulating 3-round synthetic debate discourse and counter-arguments...</span>
              </div>
              <div className={`step-item ${generationStep >= 3 ? 'active' : ''}`}>
                <span className="step-bullet">3</span>
                <span>Mapping consensus radar, tension rifts, and phased execution roadmap...</span>
              </div>
            </div>
          </div>
        ) : (
          <form className="modal-body-scroll new-dilemma-form" onSubmit={handleGenerate}>
            {/* Dilemma Prompt Input */}
            <div className="form-group">
              <label className="form-label">
                Decision Dilemma or Complex Question
              </label>
              <textarea
                className="input-control prompt-textarea"
                placeholder="e.g. Should our organization mandate all software engineers to use AI copilots with automated commit signing?"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
              />
            </div>

            {/* Quick Inspiration Pills */}
            <div className="quick-prompts-section">
              <span className="quick-prompts-lbl">
                <Lightbulb size={14} className="text-amber" />
                Quick Inspiration Ideas:
              </span>
              <div className="quick-prompts-grid">
                {QUICK_PROMPTS.map((qp, i) => (
                  <button
                    key={i}
                    type="button"
                    className="quick-prompt-btn glass-panel"
                    onClick={() => setPrompt(qp)}
                  >
                    {qp}
                  </button>
                ))}
              </div>
            </div>

            {/* Category & Polarization Settings */}
            <div className="form-group-row mt-4">
              <div className="form-group flex-1">
                <label className="form-label">Domain Category</label>
                <select 
                  className="input-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Scenario['category'])}
                >
                  <option value="AI & Frontier Tech">AI & Frontier Tech</option>
                  <option value="Corporate Strategy">Corporate Strategy</option>
                  <option value="Bioethics & Health">Bioethics & Health</option>
                  <option value="Public Policy & Society">Public Policy & Society</option>
                  <option value="Macroeconomics">Macroeconomics</option>
                </select>
              </div>

              <div className="form-group flex-1">
                <label className="form-label">Debate Polarization Depth</label>
                <select 
                  className="input-control"
                  value={polarization}
                  onChange={(e) => setPolarization(e.target.value as Scenario['polarizationLevel'])}
                >
                  <option value="High Polarization">High Polarization (Adversarial Red-Team Stress Test)</option>
                  <option value="Moderate Debate">Moderate Debate (Balanced Trade-Offs)</option>
                  <option value="Nuanced Consensus">Nuanced Consensus (Harmonious Synthesis)</option>
                </select>
              </div>
            </div>

            {/* Select Active Personas */}
            <div className="personas-select-section mt-4">
              <label className="form-label">
                Active Perspective Lenses ({selectedPersonaIds.length} Selected)
              </label>
              <div className="personas-chip-grid">
                {availablePersonas.map((p) => {
                  const isSelected = selectedPersonaIds.includes(p.id);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      className={`persona-chip-btn glass-panel ${isSelected ? 'selected' : ''}`}
                      style={{
                        '--chip-color': p.color
                      } as React.CSSProperties}
                      onClick={() => togglePersona(p.id)}
                    >
                      <img src={p.avatar} alt={p.name} className="chip-avatar" />
                      <div className="chip-text">
                        <span className="chip-name">{p.name}</span>
                        <span className="chip-role">{p.archetype}</span>
                      </div>
                      {isSelected && <Check size={14} className="chip-check" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Actions */}
            <div className="modal-footer mt-5">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={!prompt.trim()}
              >
                <Sparkles size={16} />
                <span>Synthesize Multi-Perspective Intelligence</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
