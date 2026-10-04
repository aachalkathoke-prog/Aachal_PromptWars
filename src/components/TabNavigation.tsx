import React from 'react';
import { 
  Users, 
  Swords, 
  GitMerge, 
  SlidersHorizontal, 
  Cpu
} from 'lucide-react';

export type ActiveTab = 'lens' | 'debate' | 'consensus' | 'decision' | 'studio';

interface TabNavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  debateCount: number;
  personaCount: number;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  debateCount,
  personaCount
}) => {
  const tabs = [
    {
      id: 'lens' as ActiveTab,
      label: 'Multi-Persona Lens',
      icon: Users,
      badge: `${personaCount} Experts`,
      color: '#06b6d4'
    },
    {
      id: 'debate' as ActiveTab,
      label: 'Synthetic Debate Arena',
      icon: Swords,
      badge: `${debateCount} msgs`,
      color: '#ec4899'
    },
    {
      id: 'consensus' as ActiveTab,
      label: 'Consensus & Tension Map',
      icon: GitMerge,
      badge: 'Interactive Radar',
      color: '#10b981'
    },
    {
      id: 'decision' as ActiveTab,
      label: 'Decision Synthesis & Roadmap',
      icon: SlidersHorizontal,
      badge: 'Action Matrix',
      color: '#6366f1'
    },
    {
      id: 'studio' as ActiveTab,
      label: 'Persona Studio',
      icon: Cpu,
      badge: 'Customizer',
      color: '#8b5cf6'
    }
  ];

  return (
    <div className="tab-nav-wrapper">
      <div className="container">
        <div className="tab-nav-bar glass-panel">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`tab-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
                style={{
                  '--tab-accent': tab.color
                } as React.CSSProperties}
              >
                <div className="tab-icon-box">
                  <Icon size={18} />
                </div>
                <span className="tab-label">{tab.label}</span>
                {tab.badge && (
                  <span className="tab-badge">{tab.badge}</span>
                )}
                {isActive && <div className="tab-active-indicator" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
