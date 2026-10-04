import React, { useState, useEffect, useRef } from 'react';
import type { Scenario, DebateMessage } from '../types';
import { 
  Swords, 
  Send, 
  Volume2, 
  CornerDownRight, 
  MessageSquarePlus,
  Sparkles
} from 'lucide-react';
import { generateDebateChallengeResponse } from '../utils/aiSimulator';

interface DebateArenaProps {
  scenario: Scenario;
  onUpdateScenario: (updatedScenario: Scenario) => void;
  audioSynthEnabled: boolean;
  targetSpeakerId?: string | null;
}

export const DebateArena: React.FC<DebateArenaProps> = ({
  scenario,
  onUpdateScenario,
  audioSynthEnabled,
  targetSpeakerId
}) => {
  const [messages, setMessages] = useState<DebateMessage[]>(scenario.debateTranscript);
  const [userPrompt, setUserPrompt] = useState('');
  const [selectedTargetPersonaId, setSelectedTargetPersonaId] = useState<string>(
    targetSpeakerId || scenario.personas[0]?.id || ''
  );
  const [isSimulatingResponse, setIsSimulatingResponse] = useState(false);
  const [activeSpeakingId, setActiveSpeakingId] = useState<string | null>(null);
  const [currentRoundFilter, setCurrentRoundFilter] = useState<number | 'all'>('all');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Sync if scenario changes
  useEffect(() => {
    setMessages(scenario.debateTranscript);
  }, [scenario]);

  useEffect(() => {
    if (targetSpeakerId) {
      setSelectedTargetPersonaId(targetSpeakerId);
    }
  }, [targetSpeakerId]);

  // Scroll to bottom when messages update
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSimulatingResponse]);

  // Speech synthesis helper
  const speakMessage = (text: string) => {
    if (!audioSynthEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel(); // stop current
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    
    // Pick voices if available
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const preferred = voices.find(v => v.lang.includes('en'));
      if (preferred) utterance.voice = preferred;
    }
    
    window.speechSynthesis.speak(utterance);
  };

  const handleInjectChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userPrompt.trim() || isSimulatingResponse) return;

    const targetPersona = scenario.personas.find(p => p.id === selectedTargetPersonaId) || scenario.personas[0];
    const userChallengeText = userPrompt.trim();
    setUserPrompt('');

    // Add user message
    const userMsg: DebateMessage = {
      id: `user-ch-${Date.now()}`,
      roundNumber: 4,
      personaId: 'user',
      speakerName: 'Audience / Decision Maker',
      speakerRole: 'Strategic Interrogator',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      color: '#a855f7',
      phase: 'User Challenge',
      content: userChallengeText,
      rebuttalTargetId: targetPersona.id,
      rebuttalTargetName: targetPersona.name,
      sentiment: 'inquisitive',
      timestamp: 'Audience Floor · Just now'
    };

    const updated = [...messages, userMsg];
    setMessages(updated);
    setIsSimulatingResponse(true);
    setActiveSpeakingId(targetPersona.id);

    // Simulate real-time response generation
    setTimeout(() => {
      const { response, counterRebuttal } = generateDebateChallengeResponse(targetPersona, userChallengeText, scenario);
      
      const newMessages = [...updated, response];
      setMessages(newMessages);
      speakMessage(response.content);

      if (counterRebuttal) {
        setTimeout(() => {
          const finalMessages = [...newMessages, counterRebuttal];
          setMessages(finalMessages);
          setIsSimulatingResponse(false);
          setActiveSpeakingId(null);
          
          // Update parent scenario transcript
          onUpdateScenario({
            ...scenario,
            debateTranscript: finalMessages
          });
        }, 1800);
      } else {
        setIsSimulatingResponse(false);
        setActiveSpeakingId(null);
        onUpdateScenario({
          ...scenario,
          debateTranscript: newMessages
        });
      }
    }, 1200);
  };

  const filteredMessages = messages.filter(m => {
    if (currentRoundFilter === 'all') return true;
    return m.roundNumber === currentRoundFilter;
  });

  const roundsAvailable = Array.from(new Set(messages.map(m => m.roundNumber)));

  return (
    <div className="debate-arena-section">
      <div className="arena-grid">
        {/* Left Side: Debate Transcript Feed */}
        <div className="arena-feed-col glass-panel">
          {/* Header Controls */}
          <div className="arena-feed-header">
            <div className="arena-title-row">
              <div className="live-indicator">
                <span className="live-dot" />
                <span className="live-text">SYNTHETIC DISCOURSE ARENA</span>
              </div>
              <span className="badge badge-violet">{messages.length} Exchanges Recorded</span>
            </div>

            {/* Round Filter Tabs */}
            <div className="round-filter-bar">
              <button
                type="button"
                className={`round-pill ${currentRoundFilter === 'all' ? 'active' : ''}`}
                onClick={() => setCurrentRoundFilter('all')}
              >
                Full Discourse
              </button>
              {roundsAvailable.map(roundNum => (
                <button
                  key={roundNum}
                  type="button"
                  className={`round-pill ${currentRoundFilter === roundNum ? 'active' : ''}`}
                  onClick={() => setCurrentRoundFilter(roundNum)}
                >
                  Round {roundNum} {roundNum === 1 ? '· Opening' : roundNum === 2 ? '· Cross-Exam' : roundNum === 3 ? '· Synthesis' : '· Challenges'}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="arena-messages-container">
            {filteredMessages.map((msg) => {
              const isUser = msg.personaId === 'user';
              return (
                <div 
                  key={msg.id} 
                  className={`debate-message-wrapper ${isUser ? 'user-challenge-msg' : ''}`}
                  style={{
                    '--speaker-color': msg.color
                  } as React.CSSProperties}
                >
                  <div className="message-speaker-avatar">
                    <img src={msg.avatar} alt={msg.speakerName} />
                    {activeSpeakingId === msg.personaId && (
                      <div className="speaking-pulse" />
                    )}
                  </div>

                  <div className="message-bubble glass-panel">
                    {/* Bubble Header */}
                    <div className="bubble-header">
                      <div className="speaker-details">
                        <span className="speaker-name" style={{ color: msg.color }}>{msg.speakerName}</span>
                        <span className="speaker-role-tag">{msg.speakerRole}</span>
                      </div>
                      <div className="bubble-meta">
                        <span className="phase-pill">{msg.phase}</span>
                        <span className="timestamp-text">{msg.timestamp}</span>
                        {audioSynthEnabled && (
                          <button
                            type="button"
                            className="btn-read-aloud"
                            onClick={() => speakMessage(msg.content)}
                            title="Read Aloud"
                          >
                            <Volume2 size={13} />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Rebuttal Target Indicator */}
                    {msg.rebuttalTargetName && (
                      <div className="rebuttal-target-tag">
                        <CornerDownRight size={12} />
                        <span>Rebuttal targeting: <strong>{msg.rebuttalTargetName}</strong></span>
                      </div>
                    )}

                    {/* Content Text */}
                    <p className="message-body-text">{msg.content}</p>
                  </div>
                </div>
              );
            })}

            {/* Simulating Response Loader */}
            {isSimulatingResponse && (
              <div className="debate-typing-indicator glass-panel">
                <div className="typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="typing-text">
                  AI Persona formulating counter-rebuttal and synthesizing evidence...
                </span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* User Interrogation Prompt Input */}
          <form className="arena-input-form glass-panel" onSubmit={handleInjectChallenge}>
            <div className="input-form-top">
              <span className="interrogate-label">
                <MessageSquarePlus size={15} className="text-cyan" />
                Interrogate or Challenge an AI Persona:
              </span>

              <select 
                className="target-persona-select"
                value={selectedTargetPersonaId}
                onChange={(e) => setSelectedTargetPersonaId(e.target.value)}
              >
                {scenario.personas.map(p => (
                  <option key={p.id} value={p.id}>
                    Target: {p.name} ({p.title})
                  </option>
                ))}
              </select>
            </div>

            <div className="input-form-bottom">
              <input
                type="text"
                className="input-control"
                placeholder="Type a counter-argument, edge case, or challenging question..."
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                disabled={isSimulatingResponse}
              />
              <button
                type="submit"
                className="btn btn-primary btn-send-challenge"
                disabled={!userPrompt.trim() || isSimulatingResponse}
              >
                <Send size={16} />
                <span>Inject Challenge</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Active Personas Panel & Quick Stats */}
        <div className="arena-sidebar-col">
          {/* Active Participants card */}
          <div className="sidebar-card glass-panel">
            <h3 className="sidebar-card-title">
              <Swords size={16} className="text-cyan" />
              Debate Lineup
            </h3>
            <div className="arena-participants-list">
              {scenario.personas.map(p => (
                <div 
                  key={p.id} 
                  className={`participant-row ${selectedTargetPersonaId === p.id ? 'selected' : ''}`}
                  onClick={() => setSelectedTargetPersonaId(p.id)}
                >
                  <img src={p.avatar} alt={p.name} className="participant-mini-avatar" />
                  <div className="participant-text">
                    <span className="participant-name" style={{ color: p.color }}>{p.name}</span>
                    <span className="participant-stance">{p.stanceLabel}</span>
                  </div>
                  <div className="participant-conf-pill">
                    {p.confidenceScore}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Debate Guide */}
          <div className="sidebar-card glass-panel">
            <h3 className="sidebar-card-title">
              <Sparkles size={16} className="text-indigo" />
              How Synthetic Debate Works
            </h3>
            <ul className="arena-guide-list">
              <li>
                <strong>Autonomous Rebuttals:</strong> Each persona stress-tests opposing views using adversarial epistemic frames.
              </li>
              <li>
                <strong>Interactive Injection:</strong> Type any objection in the bottom input to challenge any persona live.
              </li>
              <li>
                <strong>Synthesis Convergence:</strong> In Round 3, personas offer concessions to identify shared ground.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
