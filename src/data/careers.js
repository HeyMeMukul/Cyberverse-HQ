// Cybersecurity career paths and job information
export const careerPaths = [
  {
    id: 1,
    title: "Penetration Tester",
    category: "Offensive Security",
    level: "Mid-Senior",
    salaryRange: "$75,000 - $150,000",
    description: "Simulate cyber attacks to identify vulnerabilities in systems and networks",
    responsibilities: [
      "Conduct penetration testing assessments",
      "Identify and exploit security vulnerabilities",
      "Document findings and provide remediation recommendations",
      "Stay current with latest attack techniques and tools",
      "Collaborate with development and security teams",
      "Perform social engineering assessments"
    ],
    requiredSkills: [
      "Network security fundamentals",
      "Web application security",
      "Operating systems (Linux/Windows)",
      "Scripting and programming (Python, Bash)",
      "Security tools (Nmap, Burp Suite, Metasploit)",
      "Report writing and communication"
    ],
    certifications: [
      "OSCP (Offensive Security Certified Professional)",
      "CEH (Certified Ethical Hacker)",
      "GPEN (GIAC Penetration Tester)",
      "CISSP (Certified Information Systems Security Professional)"
    ],
    learningPath: [
      "Networking fundamentals",
      "Linux/Windows administration", 
      "Programming/scripting",
      "Web application security",
      "Penetration testing methodologies",
      "Report writing skills"
    ],
    tools: ["Nmap", "Burp Suite", "Metasploit", "Wireshark", "John the Ripper"],
    jobGrowth: "32% (Much faster than average)",
    xpReward: 100
  },
  {
    id: 2,
    title: "Security Analyst",
    category: "Defensive Security",
    level: "Entry-Mid",
    salaryRange: "$50,000 - $90,000",
    description: "Monitor and analyze security events to detect and respond to threats",
    responsibilities: [
      "Monitor security alerts and events",
      "Investigate potential security incidents",
      "Maintain security tools and systems",
      "Create security reports and documentation",
      "Implement security policies and procedures",
      "Coordinate incident response activities"
    ],
    requiredSkills: [
      "SIEM platforms (Splunk, QRadar)",
      "Incident response procedures",
      "Network traffic analysis",
      "Threat intelligence",
      "Risk assessment",
      "Security frameworks (NIST, ISO 27001)"
    ],
    certifications: [
      "Security+ (CompTIA Security+)",
      "GCIH (GIAC Certified Incident Handler)",
      "CySA+ (CompTIA Cybersecurity Analyst)",
      "CISSP"
    ],
    learningPath: [
      "Security fundamentals",
      "Network basics",
      "SIEM tools",
      "Incident response",
      "Threat analysis",
      "Compliance frameworks"
    ],
    tools: ["Splunk", "Wireshark", "Nessus", "YARA", "Volatility"],
    jobGrowth: "28% (Much faster than average)",
    xpReward: 75
  },
  {
    id: 3,
    title: "Bug Bounty Hunter",
    category: "Freelance/Contract",
    level: "Variable",
    salaryRange: "$20,000 - $500,000+",
    description: "Find and report security vulnerabilities in exchange for monetary rewards",
    responsibilities: [
      "Research and test web applications for vulnerabilities",
      "Write detailed vulnerability reports",
      "Communicate with security teams",
      "Stay updated on latest vulnerability types",
      "Follow responsible disclosure practices",
      "Build reputation on bug bounty platforms"
    ],
    requiredSkills: [
      "Web application security",
      "Manual testing techniques",
      "Burp Suite proficiency",
      "Report writing",
      "Communication skills",
      "Patience and persistence"
    ],
    platforms: [
      "HackerOne",
      "Bugcrowd", 
      "Synack",
      "Cobalt",
      "Intigriti"
    ],
    learningPath: [
      "Web technologies (HTML, JS, HTTP)",
      "OWASP Top 10",
      "Manual testing techniques",
      "Automation tools",
      "Report writing",
      "Business logic understanding"
    ],
    tools: ["Burp Suite", "OWASP ZAP", "Nmap", "SQLmap", "XSSer"],
    jobGrowth: "Rapidly expanding market",
    xpReward: 90
  },
  {
    id: 4,
    title: "Security Engineer",
    category: "Infrastructure Security",
    level: "Mid-Senior",
    salaryRange: "$80,000 - $160,000",
    description: "Design and implement security solutions for enterprise infrastructure",
    responsibilities: [
      "Design security architectures",
      "Implement security controls",
      "Automate security processes",
      "Conduct security assessments",
      "Develop security standards",
      "Collaborate with DevOps teams"
    ],
    requiredSkills: [
      "Cloud security (AWS, Azure, GCP)",
      "Infrastructure as Code",
      "DevSecOps practices",
      "Programming (Python, Go, Java)",
      "Container security",
      "Network security"
    ],
    certifications: [
      "CISSP",
      "CCSP (Certified Cloud Security Professional)",
      "AWS Security Specialty",
      "GSEC (GIAC Security Essentials)"
    ],
    learningPath: [
      "Cloud platforms",
      "Infrastructure automation",
      "Security frameworks",
      "Programming skills",
      "DevOps practices",
      "Risk management"
    ],
    tools: ["Terraform", "Ansible", "Docker", "Kubernetes", "CloudFormation"],
    jobGrowth: "25% (Much faster than average)",
    xpReward: 85
  },
  {
    id: 5,
    title: "Incident Response Specialist",
    category: "Defensive Security",
    level: "Mid-Senior",
    salaryRange: "$70,000 - $130,000",
    description: "Lead response efforts during security incidents and breaches",
    responsibilities: [
      "Lead incident response activities",
      "Conduct forensic analysis",
      "Coordinate with law enforcement",
      "Develop incident response procedures",
      "Train staff on incident response",
      "Perform post-incident reviews"
    ],
    requiredSkills: [
      "Digital forensics",
      "Incident response frameworks",
      "Malware analysis",
      "Network forensics",
      "Legal and compliance knowledge",
      "Crisis management"
    ],
    certifications: [
      "GCIH (GIAC Certified Incident Handler)",
      "GCFA (GIAC Certified Forensic Analyst)",
      "GNFA (GIAC Network Forensic Analyst)",
      "EnCE (EnCase Certified Examiner)"
    ],
    learningPath: [
      "Incident response frameworks",
      "Digital forensics",
      "Malware analysis",
      "Legal aspects",
      "Communication skills",
      "Stress management"
    ],
    tools: ["EnCase", "FTK", "Volatility", "Autopsy", "YARA"],
    jobGrowth: "30% (Much faster than average)",
    xpReward: 95
  },
  {
    id: 6,
    title: "Security Architect",
    category: "Strategic Security",
    level: "Senior-Executive",
    salaryRange: "$120,000 - $200,000+",
    description: "Design enterprise security strategies and architectures",
    responsibilities: [
      "Develop security strategies",
      "Design security architectures",
      "Review security designs",
      "Establish security standards",
      "Mentor security teams",
      "Communicate with executives"
    ],
    requiredSkills: [
      "Enterprise architecture",
      "Security frameworks",
      "Risk management",
      "Business acumen",
      "Leadership skills",
      "Strategic thinking"
    ],
    certifications: [
      "CISSP",
      "SABSA (Sherwood Applied Business Security Architecture)",
      "TOGAF (The Open Group Architecture Framework)",
      "CISM (Certified Information Security Manager)"
    ],
    learningPath: [
      "Enterprise architecture",
      "Security frameworks",
      "Business strategy",
      "Leadership development",
      "Risk management",
      "Communication skills"
    ],
    tools: ["Enterprise Architecture tools", "Risk assessment platforms", "Governance tools"],
    jobGrowth: "20% (Much faster than average)",
    xpReward: 120
  }
];

export const skillAssessment = {
  technical: [
    { skill: "Networking", weight: 0.2, description: "TCP/IP, routing, switching, protocols" },
    { skill: "Operating Systems", weight: 0.15, description: "Linux, Windows, macOS administration" },
    { skill: "Programming", weight: 0.15, description: "Python, JavaScript, PowerShell, Bash" },
    { skill: "Web Security", weight: 0.2, description: "OWASP Top 10, web application testing" },
    { skill: "Cryptography", weight: 0.1, description: "Encryption, hashing, PKI" },
    { skill: "Forensics", weight: 0.1, description: "Digital investigation, evidence handling" },
    { skill: "Risk Management", weight: 0.1, description: "Risk assessment, compliance, governance" }
  ],
  soft: [
    { skill: "Communication", weight: 0.3, description: "Written and verbal communication" },
    { skill: "Problem Solving", weight: 0.25, description: "Analytical thinking, troubleshooting" },
    { skill: "Continuous Learning", weight: 0.2, description: "Adaptability, staying current" },
    { skill: "Attention to Detail", weight: 0.15, description: "Thoroughness, accuracy" },
    { skill: "Teamwork", weight: 0.1, description: "Collaboration, leadership" }
  ]
};

export const industryTrends = [
  {
    trend: "Cloud Security",
    growth: "35%",
    description: "Securing cloud infrastructure and services"
  },
  {
    trend: "Zero Trust Architecture",
    growth: "28%",
    description: "Never trust, always verify security model"
  },
  {
    trend: "AI/ML Security",
    growth: "40%",
    description: "Securing AI systems and using AI for security"
  },
  {
    trend: "IoT Security",
    growth: "25%",
    description: "Securing Internet of Things devices"
  }
];

export const salaryData = {
  entryLevel: "$45,000 - $70,000",
  midLevel: "$70,000 - $120,000",
  seniorLevel: "$120,000 - $180,000",
  executiveLevel: "$180,000+"
};
