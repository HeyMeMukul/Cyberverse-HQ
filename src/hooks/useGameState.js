import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useGameState = create(
  persist(
    (set, get) => ({
      // Player stats
      xp: 0,
      level: 1,
      badges: [],
      
      // Progress tracking
      completedCommands: {},
      visitedBuildings: {},
      toolsExplored: {},
      vulnerabilitiesLearned: {},
      challengesCompleted: {},
      
      // Skill levels (0-100)
      skills: {
        networking: 0,
        linux: 0,
        webSecurity: 0,
        cryptography: 0,
        forensics: 0,
        reconnaissance: 0,
        exploitation: 0
      },
      
      // Game actions
      addXp: (amount) => {
        set(state => {
          const newXp = state.xp + amount;
          const newLevel = Math.floor(newXp / 100) + 1;
          
          return {
            xp: newXp,
            level: newLevel
          };
        });
      },
      
      setCommandCompleted: (commandId) => {
        set(state => ({
          completedCommands: {
            ...state.completedCommands,
            [commandId]: true
          }
        }));
      },
      
      setVisitedBuilding: (buildingId) => {
        set(state => ({
          visitedBuildings: {
            ...state.visitedBuildings,
            [buildingId]: true
          }
        }));
      },
      
      setToolExplored: (toolId) => {
        set(state => {
          // Add XP for exploring a new tool
          if (!state.toolsExplored[toolId]) {
            const newXp = state.xp + 10;
            const newLevel = Math.floor(newXp / 100) + 1;
            
            return {
              toolsExplored: {
                ...state.toolsExplored,
                [toolId]: true
              },
              xp: newXp,
              level: newLevel
            };
          }
          
          return {
            toolsExplored: {
              ...state.toolsExplored,
              [toolId]: true
            }
          };
        });
      },
      
      setVulnerabilityLearned: (vulnId) => {
        set(state => {
          // Add XP for learning a new vulnerability
          if (!state.vulnerabilitiesLearned[vulnId]) {
            const newXp = state.xp + 15;
            const newLevel = Math.floor(newXp / 100) + 1;
            
            return {
              vulnerabilitiesLearned: {
                ...state.vulnerabilitiesLearned,
                [vulnId]: true
              },
              xp: newXp,
              level: newLevel
            };
          }
          
          return {
            vulnerabilitiesLearned: {
              ...state.vulnerabilitiesLearned,
              [vulnId]: true
            }
          };
        });
      },
      
      setChallengeCompleted: (challengeId, xpReward = 25) => {
        set(state => {
          // Add XP for completing a challenge
          if (!state.challengesCompleted[challengeId]) {
            const newXp = state.xp + xpReward;
            const newLevel = Math.floor(newXp / 100) + 1;
            
            return {
              challengesCompleted: {
                ...state.challengesCompleted,
                [challengeId]: true
              },
              xp: newXp,
              level: newLevel
            };
          }
          
          return {
            challengesCompleted: {
              ...state.challengesCompleted,
              [challengeId]: true
            }
          };
        });
      },
      
      updateSkill: (skillName, value) => {
        set(state => ({
          skills: {
            ...state.skills,
            [skillName]: Math.min(100, Math.max(0, state.skills[skillName] + value))
          }
        }));
      },
      
      // Reset game state (for testing)
      resetGameState: () => {
        set({
          xp: 0,
          level: 1,
          badges: [],
          completedCommands: {},
          visitedBuildings: {},
          toolsExplored: {},
          vulnerabilitiesLearned: {},
          challengesCompleted: {},
          skills: {
            networking: 0,
            linux: 0,
            webSecurity: 0,
            cryptography: 0,
            forensics: 0,
            reconnaissance: 0,
            exploitation: 0
          }
        });
      }
    }),
    {
      name: 'cyberverse-game-state',
    }
  )
);
