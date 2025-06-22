// Game constants and configuration
export const GAME_CONFIG = {
  XP_PER_LEVEL: 100,
  MAX_LEVEL: 100,
  SKILL_MAX: 100,
  
  // XP Rewards
  XP_REWARDS: {
    TOOL_EXPLORE: 10,
    COMMAND_USE: 5,
    VULNERABILITY_LEARN: 15,
    CHALLENGE_COMPLETE: 25,
    BUILDING_VISIT: 5,
    TUTORIAL_COMPLETE: 20
  },
  
  // Skill categories
  SKILLS: {
    NETWORKING: 'networking',
    LINUX: 'linux', 
    WEB_SECURITY: 'webSecurity',
    CRYPTOGRAPHY: 'cryptography',
    FORENSICS: 'forensics',
    RECONNAISSANCE: 'reconnaissance',
    EXPLOITATION: 'exploitation'
  },
  
  // Difficulty levels
  DIFFICULTY: {
    BEGINNER: 'Beginner',
    INTERMEDIATE: 'Intermediate', 
    ADVANCED: 'Advanced',
    EXPERT: 'Expert'
  },
  
  // Building IDs
  BUILDINGS: {
    ARSENAL: 'arsenal',
    LINUX: 'linux',
    BUG_BOUNTY: 'bugbounty',
    LEARNING: 'learning',
    CTF: 'ctf',
    WORDLISTS: 'wordlists',
    CAREER: 'career',
    BREACHES: 'breaches'
  }
};

// Color themes for different categories
export const CATEGORY_COLORS = {
  'Reconnaissance': '#00ffff',
  'Web Application Security': '#ff8800',
  'Network Analysis': '#00ff00',
  'Password Cracking': '#ff00ff',
  'Wireless Security': '#ffff00',
  'Exploitation': '#ff0040',
  'Digital Forensics': '#8800ff',
  'Reverse Engineering': '#00ff88',
  'Cryptography': '#ff0088',
  'Social Engineering': '#88ff00',
  'Vulnerability Scanning': '#0088ff'
};

// Achievement definitions
export const ACHIEVEMENTS = {
  FIRST_TOOL: {
    id: 'first_tool',
    name: 'First Contact',
    description: 'Explore your first cybersecurity tool',
    icon: '🔧',
    xpReward: 25
  },
  TOOL_COLLECTOR: {
    id: 'tool_collector',
    name: 'Tool Collector',
    description: 'Explore 50 different tools',
    icon: '🗂️',
    xpReward: 100
  },
  LINUX_NOVICE: {
    id: 'linux_novice',
    name: 'Linux Novice',
    description: 'Use 25 different Linux commands',
    icon: '🐧',
    xpReward: 75
  },
  BUG_HUNTER: {
    id: 'bug_hunter',
    name: 'Bug Hunter',
    description: 'Learn about 10 different vulnerabilities',
    icon: '🐛',
    xpReward: 150
  }
};

// API endpoints (if needed for future backend integration)
export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  TOOLS: '/api/tools',
  COMMANDS: '/api/commands',
  VULNERABILITIES: '/api/vulnerabilities',
  USER_PROGRESS: '/api/user/progress'
};

// Local storage keys
export const STORAGE_KEYS = {
  GAME_STATE: 'cyberverse-game-state',
  USER_PREFERENCES: 'cyberverse-preferences',
  TUTORIAL_PROGRESS: 'cyberverse-tutorials'
};
