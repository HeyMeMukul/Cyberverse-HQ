import React, { useState, useEffect } from 'react';
import { useGameState } from '../../hooks/useGameState';
import { MapPin, Zap, Trophy, User, Settings } from 'lucide-react';

const HUD = ({ selectedBuilding }) => {
  const { xp, level, skills } = useGameState();
  const [showStats, setShowStats] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate XP progress to next level
  const xpForCurrentLevel = level * 100;
  const xpForNextLevel = (level + 1) * 100;
  const xpProgress = ((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Top HUD Bar */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        {/* Left Side - Location Info */}
        <div className="floating-ui p-4 pointer-events-auto">
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 text-cyber-blue mr-2" />
            <span className="text-cyber-blue font-cyber">
              {selectedBuilding ? selectedBuilding.name.replace('\n', ' ') : 'CYBER CITY'}
            </span>
          </div>
          {selectedBuilding && (
            <div className="text-sm text-gray-300">
              {selectedBuilding.description}
            </div>
          )}
        </div>

          </div>
         

      {/* Bottom HUD Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        {/* Left Side - Controls Help */}
        <div className="floating-ui p-3 text-sm pointer-events-auto">
          <div className="text-cyber-yellow mb-2 font-semibold">CONTROLS</div>
          <div className="space-y-1 text-xs">
            <div>🖱️ <span className="text-cyber-blue">DRAG</span> - Look around</div>
            <div>🔍 <span className="text-cyber-green">SCROLL</span> - Zoom in/out</div>
            <div>🏢 <span className="text-cyber-pink">CLICK</span> - Enter building</div>
            <div>⌨️ <span className="text-cyber-orange">ESC</span> - Deselect</div>
          </div>
        </div>

        {/* Right Side - System Info */}
        <div className="floating-ui p-3 text-sm pointer-events-auto">
          <div className="text-cyber-green mb-2 font-semibold">SYSTEM STATUS</div>
          <div className="space-y-1 text-xs">
            <div>🕐 {currentTime.toLocaleTimeString()}</div>
            <div>🌐 Connection: <span className="text-cyber-green">SECURE</span></div>
            <div>⚡ Status: <span className="text-cyber-blue">ONLINE</span></div>
          </div>
        </div>
      </div>

      {/* Expanded Stats Panel */}
      {showStats && (
        <div className="absolute top-20 right-4 floating-ui p-6 w-80 pointer-events-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-cyber text-cyber-blue">PLAYER STATS</h3>
            <button
              onClick={() => setShowStats(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          {/* Skill Radar */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-cyber-green">SKILL LEVELS</h4>
            <div className="space-y-2">
              {Object.entries(skills).map(([skill, value]) => (
                <div key={skill} className="flex justify-between items-center">
                  <span className="text-xs capitalize">{skill}</span>
                  <div className="flex-1 mx-2">
                    <div className="progress-bar h-2">
                      <div 
                        className="progress-fill h-full"
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-xs w-8 text-right">{value}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Achievements Preview */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-cyber-yellow">RECENT ACHIEVEMENTS</h4>
            <div className="text-xs text-gray-400">
              Complete challenges to unlock achievements!
            </div>
          </div>
        </div>
      )}

      {/* Building Selection Indicator */}
      {selectedBuilding && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="floating-ui p-4 text-center">
            <div className="text-2xl mb-2">{selectedBuilding.name}</div>
            <div className="text-sm text-gray-300 mb-4">{selectedBuilding.description}</div>
            <div className="text-xs text-cyber-yellow animate-pulse">
              Click to enter building...
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HUD;
