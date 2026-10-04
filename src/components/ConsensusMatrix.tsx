import React, { useState } from 'react';
import type { Scenario, PolarCoordinate } from '../types';
import { 
  CheckCircle2, 
  AlertOctagon, 
  EyeOff, 
  Sparkles, 
  Compass
} from 'lucide-react';

interface ConsensusMatrixProps {
  scenario: Scenario;
}

export const ConsensusMatrix: React.FC<ConsensusMatrixProps> = ({ scenario }) => {
  const [hoveredNode, setHoveredNode] = useState<PolarCoordinate | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredInsights = scenario.consensusInsights.filter(item => {
    if (activeCategoryFilter === 'all') return true;
    return item.category === activeCategoryFilter;
  });

  // Radar SVG dimensions
  const size = 420;
  const center = size / 2;
  const radius = 170;

  return (
    <div className="consensus-matrix-section">
      {/* Top Header */}
      <div className="matrix-header-row">
        <div>
          <h2>Consensus & Ideological Tension Map</h2>
          <p>Multi-dimensional analysis of alignment vectors, irreconcilable trade-offs, and systemic cognitive blindspots</p>
        </div>

        {/* Aggregate Alignment Bar */}
        <div className="matrix-consensus-badge glass-panel">
          <div className="consensus-badge-left">
            <span className="consensus-badge-label">Overall Convergence</span>
            <span className="consensus-badge-score">{scenario.consensusScore}%</span>
          </div>
          <div className="consensus-progress-track">
            <div 
              className="consensus-progress-bar"
              style={{ width: `${scenario.consensusScore}%` }}
            />
          </div>
        </div>
      </div>

      <div className="matrix-grid">
        {/* Left Column: Interactive 2D Polar Tension Radar */}
        <div className="radar-card glass-panel">
          <div className="radar-card-header">
            <div className="radar-title-group">
              <Compass size={18} className="text-cyan" />
              <h3>2D Ideological Tension Radar</h3>
            </div>
            <span className="radar-subtitle">Hover over nodes to inspect ideological vectors</span>
          </div>

          <div className="radar-canvas-container">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="polar-radar-svg">
              {/* Radar Concentric Rings */}
              <circle cx={center} cy={center} r={radius * 0.33} fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
              <circle cx={center} cy={center} r={radius * 0.66} fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
              <circle cx={center} cy={center} r={radius} fill="none" stroke="rgba(255,255,255,0.12)" />

              {/* Axis lines */}
              <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

              {/* Axis Labels */}
              <text x={center} y={center - radius - 12} textAnchor="middle" className="radar-axis-text">
                50-Yr Human Flourishing (+Y)
              </text>
              <text x={center} y={center + radius + 22} textAnchor="middle" className="radar-axis-text">
                Near-Term Execution & ROI (-Y)
              </text>
              <text x={center - radius - 10} y={center + 4} textAnchor="end" className="radar-axis-text">
                Precautionary Alignment (-X)
              </text>
              <text x={center + radius + 10} y={center + 4} textAnchor="start" className="radar-axis-text">
                Radical Acceleration (+X)
              </text>

              {/* Tension web connecting lines between nodes */}
              {scenario.polarCoordinates.map((node, i) => {
                const nx = center + (node.x / 100) * radius;
                const ny = center - (node.y / 100) * radius;

                return scenario.polarCoordinates.slice(i + 1).map((other, j) => {
                  const ox = center + (other.x / 100) * radius;
                  const oy = center - (other.y / 100) * radius;
                  return (
                    <line
                      key={`line-${i}-${j}`}
                      x1={nx}
                      y1={ny}
                      x2={ox}
                      y2={oy}
                      stroke="rgba(99, 102, 241, 0.15)"
                      strokeWidth="1"
                    />
                  );
                });
              })}

              {/* Persona Nodes */}
              {scenario.polarCoordinates.map((node) => {
                const nx = center + (node.x / 100) * radius;
                const ny = center - (node.y / 100) * radius;
                const isHovered = hoveredNode?.personaId === node.personaId;

                return (
                  <g 
                    key={node.personaId}
                    className="radar-node-group"
                    onMouseEnter={() => setHoveredNode(node)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ cursor: 'pointer' }}
                  >
                    {isHovered && (
                      <circle cx={nx} cy={ny} r="18" fill={node.color} opacity="0.25" className="anim-pulse" />
                    )}
                    <circle
                      cx={nx}
                      cy={ny}
                      r={isHovered ? 9 : 7}
                      fill={node.color}
                      stroke="#07090e"
                      strokeWidth="2"
                    />
                    <text
                      x={nx}
                      y={ny + 18}
                      textAnchor="middle"
                      className={`radar-node-label ${isHovered ? 'active' : ''}`}
                      fill={node.color}
                    >
                      {node.label.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Node Tooltip Detail Box */}
          {hoveredNode ? (
            <div className="radar-node-detail glass-panel">
              <span className="detail-node-name" style={{ color: hoveredNode.color }}>
                {hoveredNode.label}
              </span>
              <div className="detail-coords-row">
                <span>Innovation Vector: {hoveredNode.x > 0 ? `+${hoveredNode.x}%` : `${hoveredNode.x}%`}</span>
                <span>Horizon Vector: {hoveredNode.y > 0 ? `+${hoveredNode.y}%` : `${hoveredNode.y}%`}</span>
              </div>
            </div>
          ) : (
            <div className="radar-node-hint">
              <span>💡 Hover any node above to inspect its spatial coordinates in the decision field.</span>
            </div>
          )}
        </div>

        {/* Right Column: Strategic Insights & Cognitive Blindspots */}
        <div className="insights-col">
          {/* Filter tabs */}
          <div className="insights-filter-pills">
            <button
              type="button"
              className={`filter-pill ${activeCategoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('all')}
            >
              All Findings ({scenario.consensusInsights.length})
            </button>
            <button
              type="button"
              className={`filter-pill ${activeCategoryFilter === 'unanimous_ground' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('unanimous_ground')}
            >
              🤝 Shared Ground
            </button>
            <button
              type="button"
              className={`filter-pill ${activeCategoryFilter === 'strategic_rift' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('strategic_rift')}
            >
              ⚡ Critical Rifts
            </button>
            <button
              type="button"
              className={`filter-pill ${activeCategoryFilter === 'hidden_bias' ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter('hidden_bias')}
            >
              🔍 Biases Detected
            </button>
          </div>

          {/* List of Insights */}
          <div className="insights-list">
            {filteredInsights.map((insight) => {
              const isGround = insight.category === 'unanimous_ground';
              const isRift = insight.category === 'strategic_rift';
              const isBias = insight.category === 'hidden_bias';

              return (
                <div 
                  key={insight.id} 
                  className={`insight-card glass-panel ${isGround ? 'border-emerald' : isRift ? 'border-amber' : 'border-violet'}`}
                >
                  <div className="insight-card-top">
                    <div className="insight-category-badge">
                      {isGround && (
                        <span className="badge badge-emerald">
                          <CheckCircle2 size={13} />
                          Unanimous Consensus
                        </span>
                      )}
                      {isRift && (
                        <span className="badge badge-amber">
                          <AlertOctagon size={13} />
                          Strategic Friction Node
                        </span>
                      )}
                      {isBias && (
                        <span className="badge badge-violet">
                          <EyeOff size={13} />
                          Cognitive Bias Flagged
                        </span>
                      )}
                    </div>
                    <span className={`impact-tag impact-${insight.impactLevel.toLowerCase()}`}>
                      {insight.impactLevel} Impact
                    </span>
                  </div>

                  <h4 className="insight-card-title">{insight.title}</h4>
                  <p className="insight-card-desc">{insight.description}</p>

                  {/* Recommendation Box */}
                  <div className="insight-recommendation-box glass-panel">
                    <span className="rec-box-title">
                      <Sparkles size={14} className="text-cyan" />
                      Perspective Action Strategy:
                    </span>
                    <p className="rec-box-text">{insight.actionRecommendation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
