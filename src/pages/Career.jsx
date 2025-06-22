import React, { useState, useRef } from 'react';
import { Upload, FileText, Target, TrendingUp, Award, CheckCircle, AlertCircle, Briefcase, DollarSign, Clock, MapPin } from 'lucide-react';

const Career = () => {
  const [uploadedResume, setUploadedResume] = useState(null);
  const [extractedSkills, setExtractedSkills] = useState([]);
  const [matchedJobs, setMatchedJobs] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const fileInputRef = useRef(null);

  // Comprehensive cybersecurity job database
  const cybersecurityJobs = [
    {
      id: 1,
      title: "Penetration Tester",
      company: "CyberSec Corp",
      location: "Remote / San Francisco",
      salary: "$75,000 - $150,000",
      type: "Full-time",
      experience: "Mid-Senior",
      description: "Simulate cyber attacks to identify vulnerabilities in systems and networks. Conduct comprehensive security assessments and provide detailed remediation recommendations.",
      required_skills: ["Network security", "Web application security", "Linux", "Scripting", "Vulnerability assessment", "Metasploit", "Burp Suite", "Nmap"],
      preferred_skills: ["OSCP", "CEH", "Python", "Bash", "Penetration testing frameworks"],
      responsibilities: [
        "Conduct penetration tests on web applications, networks, and infrastructure",
        "Identify and exploit security vulnerabilities",
        "Document findings and provide remediation recommendations",
        "Stay current with latest attack techniques and security tools",
        "Collaborate with development teams to improve security posture"
      ],
      benefits: ["Health insurance", "401k matching", "Professional development budget", "Flexible work hours"]
    },
    {
      id: 2,
      title: "Security Analyst",
      company: "SecureNet Solutions",
      location: "New York, NY",
      salary: "$50,000 - $90,000",
      type: "Full-time",
      experience: "Entry-Mid",
      description: "Monitor and analyze security events to detect and respond to threats. Work with SIEM tools and incident response procedures.",
      required_skills: ["SIEM", "Incident response", "Network monitoring", "Threat intelligence", "Log analysis", "Security frameworks"],
      preferred_skills: ["Splunk", "QRadar", "CISSP", "Security+", "Wireshark"],
      responsibilities: [
        "Monitor security events using SIEM platforms",
        "Investigate and respond to security incidents",
        "Analyze threat intelligence and indicators of compromise",
        "Maintain security documentation and procedures",
        "Participate in incident response activities"
      ],
      benefits: ["Health insurance", "Paid time off", "Training opportunities", "Career advancement"]
    },
    {
      id: 3,
      title: "Bug Bounty Hunter",
      company: "HackerOne Platform",
      location: "Remote",
      salary: "$30,000 - $200,000+",
      type: "Freelance",
      experience: "Variable",
      description: "Find and report security vulnerabilities in exchange for monetary rewards. Work independently on various bug bounty programs.",
      required_skills: ["Web application security", "Manual testing", "Report writing", "Communication", "OWASP Top 10"],
      preferred_skills: ["Burp Suite", "OSWE", "Mobile security", "API testing", "Social engineering"],
      responsibilities: [
        "Identify security vulnerabilities in web applications",
        "Write detailed vulnerability reports",
        "Communicate findings to program owners",
        "Stay updated with latest attack techniques",
        "Build reputation on bug bounty platforms"
      ],
      benefits: ["Flexible schedule", "Performance-based income", "Global opportunities", "Skill development"]
    },
    {
      id: 4,
      title: "Security Engineer",
      company: "CloudTech Industries",
      location: "Austin, TX",
      salary: "$80,000 - $160,000",
      type: "Full-time",
      experience: "Mid-Senior",
      description: "Design and implement security solutions for enterprise infrastructure. Focus on cloud security and automation.",
      required_skills: ["Cloud security", "Infrastructure security", "Automation", "Programming", "DevSecOps", "AWS/Azure"],
      preferred_skills: ["Terraform", "Docker", "Kubernetes", "Python", "CI/CD", "Security architecture"],
      responsibilities: [
        "Design secure cloud infrastructure solutions",
        "Implement security automation and monitoring",
        "Collaborate with DevOps teams on secure deployments",
        "Conduct security architecture reviews",
        "Develop security tools and scripts"
      ],
      benefits: ["Stock options", "Health insurance", "Remote work options", "Learning stipend"]
    },
    {
      id: 5,
      title: "Incident Response Specialist",
      company: "CyberDefense Group",
      location: "Washington, DC",
      salary: "$70,000 - $130,000",
      type: "Full-time",
      experience: "Mid-Senior",
      description: "Lead response efforts during security incidents and breaches. Conduct digital forensics and malware analysis.",
      required_skills: ["Digital forensics", "Malware analysis", "Network forensics", "Crisis management", "Incident response"],
      preferred_skills: ["EnCase", "Volatility", "GCIH", "GCFA", "Threat hunting"],
      responsibilities: [
        "Lead incident response activities during security breaches",
        "Conduct digital forensics investigations",
        "Analyze malware samples and attack vectors",
        "Coordinate with law enforcement and legal teams",
        "Develop incident response procedures"
      ],
      benefits: ["Security clearance bonus", "Health insurance", "Emergency response pay", "Professional certifications"]
    },
    {
      id: 6,
      title: "Security Architect",
      company: "Enterprise Security Corp",
      location: "Chicago, IL",
      salary: "$120,000 - $200,000",
      type: "Full-time",
      experience: "Senior-Executive",
      description: "Design enterprise security strategies and architectures. Lead security initiatives across the organization.",
      required_skills: ["Enterprise architecture", "Risk management", "Security frameworks", "Leadership", "CISSP", "SABSA"],
      preferred_skills: ["TOGAF", "Zero Trust", "Cloud architecture", "Compliance", "Business strategy"],
      responsibilities: [
        "Develop enterprise security architecture and strategy",
        "Lead security risk assessments and mitigation efforts",
        "Collaborate with business stakeholders on security requirements",
        "Mentor junior security team members",
        "Ensure compliance with security frameworks and regulations"
      ],
      benefits: ["Executive compensation", "Stock options", "Leadership development", "Conference attendance"]
    },
    {
      id: 7,
      title: "Cybersecurity Consultant",
      company: "SecureAdvice LLC",
      location: "Remote",
      salary: "$60,000 - $150,000",
      type: "Contract",
      experience: "Mid-Senior",
      description: "Provide cybersecurity consulting services to various clients. Conduct assessments and implement security solutions.",
      required_skills: ["Risk assessment", "Security consulting", "Client management", "Multiple security domains", "Communication"],
      preferred_skills: ["Industry certifications", "Business acumen", "Project management", "Sales skills"],
      responsibilities: [
        "Conduct security assessments for client organizations",
        "Develop security strategies and roadmaps",
        "Implement security solutions and controls",
        "Provide security training and awareness programs",
        "Manage client relationships and project deliverables"
      ],
      benefits: ["Flexible schedule", "Diverse projects", "High hourly rates", "Professional growth"]
    },
    {
      id: 8,
      title: "SOC Analyst",
      company: "24/7 Security Operations",
      location: "Multiple locations",
      salary: "$40,000 - $70,000",
      type: "Full-time",
      experience: "Entry-Level",
      description: "Monitor security events in a 24/7 Security Operations Center. First line of defense against cyber threats.",
      required_skills: ["SIEM tools", "Log analysis", "Threat detection", "Incident escalation", "Security monitoring"],
      preferred_skills: ["Security+", "Splunk", "IBM QRadar", "Network protocols", "Scripting"],
      responsibilities: [
        "Monitor security alerts and events in real-time",
        "Perform initial triage and analysis of security incidents",
        "Escalate confirmed threats to senior analysts",
        "Maintain security monitoring tools and dashboards",
        "Document security events and response actions"
      ],
      benefits: ["Shift differentials", "Health insurance", "Career progression", "Certification support"]
    }
  ];

  // Comprehensive skill database for matching
  const skillDatabase = [
    // Technical Skills
    "Network security", "Web application security", "Linux", "Windows", "Scripting", "Python", "Bash",
    "PowerShell", "JavaScript", "SQL", "HTML", "CSS", "PHP", "Java", "C++", "Go", "Ruby",
    
    // Security Tools
    "Nmap", "Metasploit", "Burp Suite", "OWASP ZAP", "Wireshark", "Nessus", "OpenVAS", "Nikto",
    "SQLmap", "Aircrack-ng", "John the Ripper", "Hashcat", "Hydra", "Gobuster", "Dirb",
    
    // SIEM and Monitoring
    "Splunk", "IBM QRadar", "ArcSight", "LogRhythm", "Elastic Stack", "SIEM", "Log analysis",
    "Threat intelligence", "Incident response", "SOC operations",
    
    // Cloud Security
    "AWS", "Azure", "Google Cloud", "Cloud security", "DevSecOps", "Docker", "Kubernetes",
    "Terraform", "Ansible", "CI/CD", "Infrastructure as Code",
    
    // Forensics and Analysis
    "Digital forensics", "Malware analysis", "Network forensics", "EnCase", "FTK", "Volatility",
    "Autopsy", "Sleuth Kit", "YARA", "IDA Pro", "Ghidra",
    
    // Frameworks and Standards
    "NIST", "ISO 27001", "OWASP", "SANS", "CIS Controls", "MITRE ATT&CK", "GDPR", "HIPAA",
    "PCI DSS", "SOX", "Risk management", "Compliance",
    
    // Certifications
    "CISSP", "CISM", "CISA", "CEH", "OSCP", "OSWE", "OSCE", "Security+", "CySA+", "GCIH",
    "GCFA", "GPEN", "GWAPT", "CISSP", "CCSP", "SABSA", "TOGAF"
  ];

  // Resume analysis simulation
  const analyzeResume = async (file) => {
    setIsAnalyzing(true);
    
    // Simulate file processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate skill extraction (in real implementation, this would use NLP)
    const simulatedSkills = [
      "Network security", "Linux", "Python", "Scripting", "Incident response",
      "SIEM", "Vulnerability assessment", "Penetration testing", "Burp Suite",
      "Nmap", "Wireshark", "Security+", "Risk assessment"
    ];
    
    setExtractedSkills(simulatedSkills);
    
    // Match jobs based on extracted skills
    const matches = matchJobsWithSkills(simulatedSkills);
    setMatchedJobs(matches);
    
    setIsAnalyzing(false);
    setAnalysisComplete(true);
  };

  // Job matching algorithm
  const matchJobsWithSkills = (skills) => {
    const matches = cybersecurityJobs.map(job => {
      const requiredMatches = job.required_skills.filter(skill => 
        skills.some(userSkill => userSkill.toLowerCase().includes(skill.toLowerCase()) || 
                   skill.toLowerCase().includes(userSkill.toLowerCase()))
      );
      
      const preferredMatches = job.preferred_skills ? job.preferred_skills.filter(skill => 
        skills.some(userSkill => userSkill.toLowerCase().includes(skill.toLowerCase()) || 
                   skill.toLowerCase().includes(userSkill.toLowerCase()))
      ) : [];
      
      const requiredMatchPercentage = requiredMatches.length / job.required_skills.length;
      const preferredMatchPercentage = job.preferred_skills ? 
        preferredMatches.length / job.preferred_skills.length : 0;
      
      const overallMatch = (requiredMatchPercentage * 0.7) + (preferredMatchPercentage * 0.3);
      
      return {
        ...job,
        matchPercentage: Math.round(overallMatch * 100),
        requiredMatches,
        preferredMatches,
        missingSkills: job.required_skills.filter(skill => !requiredMatches.includes(skill))
      };
    }).sort((a, b) => b.matchPercentage - a.matchPercentage);
    
    return matches;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedResume(file);
      analyzeResume(file);
    }
  };

  const getMatchColor = (percentage) => {
    if (percentage >= 70) return 'text-cyber-green';
    if (percentage >= 50) return 'text-cyber-yellow';
    if (percentage >= 30) return 'text-cyber-orange';
    return 'text-cyber-red';
  };

  const getMatchBadge = (percentage) => {
    if (percentage >= 70) return { text: 'Excellent Match', color: 'bg-cyber-green' };
    if (percentage >= 50) return { text: 'Good Match', color: 'bg-cyber-yellow' };
    if (percentage >= 30) return { text: 'Partial Match', color: 'bg-cyber-orange' };
    return { text: 'Low Match', color: 'bg-cyber-red' };
  };

  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-blue">
      {/* Header */}
      <div className="relative h-64 bg-gradient-to-b from-cyber-red/20 to-cyber-darker overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-cyber font-bold text-cyber-red mb-4 animate-glow">
              💼 CAREER STATION
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              AI-Powered Resume Analysis & Cybersecurity Job Matching
            </p>
            <p className="text-sm text-cyber-green mt-2">
              Upload your resume and discover your perfect cybersecurity career path
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!analysisComplete ? (
          /* Resume Upload Section */
          <div className="max-w-2xl mx-auto">
            <div className="cyber-card text-center">
              <div className="mb-8">
                <FileText className="w-16 h-16 mx-auto mb-4 text-cyber-red opacity-70" />
                <h2 className="text-2xl font-cyber font-bold mb-4">Upload Your Resume</h2>
                <p className="text-gray-400 mb-6">
                  Our AI will analyze your resume and match you with the best cybersecurity opportunities
                </p>
              </div>

              {!uploadedResume ? (
                <div 
                  className="border-2 border-dashed border-cyber-red/50 rounded-lg p-8 hover:border-cyber-red transition-colors cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-12 h-12 mx-auto mb-4 text-cyber-red" />
                  <p className="text-lg mb-2">Click to upload your resume</p>
                  <p className="text-sm text-gray-400">Supports PDF, DOC, DOCX files</p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="bg-cyber-gray/20 rounded-lg p-6">
                  {isAnalyzing ? (
                    <div className="text-center">
                      <div className="animate-spin w-8 h-8 border-4 border-cyber-red border-t-transparent rounded-full mx-auto mb-4"></div>
                      <h3 className="text-lg font-semibold mb-2">Analyzing Resume...</h3>
                      <p className="text-gray-400">Extracting skills and matching with job opportunities</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <CheckCircle className="w-8 h-8 text-cyber-green mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Resume Uploaded Successfully</h3>
                      <p className="text-gray-400">File: {uploadedResume.name}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Analysis Results */
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-cyber font-bold">Resume Analysis Results</h2>
                <p className="text-gray-400 mt-1">Based on your skills, here are your best job matches</p>
              </div>
              <button 
                onClick={() => {
                  setUploadedResume(null);
                  setAnalysisComplete(false);
                  setExtractedSkills([]);
                  setMatchedJobs([]);
                  setSelectedJob(null);
                }}
                className="cyber-button"
              >
                Upload New Resume
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Skills Summary */}
              <div className="lg:col-span-1">
                <div className="cyber-card">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-cyber-yellow" />
                    Extracted Skills
                  </h3>
                  <div className="space-y-2">
                    {extractedSkills.map((skill, index) => (
                      <div key={index} className="bg-cyber-blue/20 text-cyber-blue px-3 py-1 rounded-full text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-cyber-green/10 rounded-lg border border-cyber-green/30">
                    <h4 className="font-semibold text-cyber-green mb-2">Analysis Summary</h4>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Skills Found:</span>
                        <span className="font-semibold">{extractedSkills.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Job Matches:</span>
                        <span className="font-semibold">{matchedJobs.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Best Match:</span>
                        <span className="font-semibold">{matchedJobs[0]?.matchPercentage}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Matches */}
              <div className="lg:col-span-3">
                <div className="space-y-6">
                  {matchedJobs.map((job) => {
                    const badge = getMatchBadge(job.matchPercentage);
                    return (
                      <div 
                        key={job.id} 
                        className={`cyber-card hover:border-cyber-red/60 cursor-pointer transition-all ${
                          selectedJob?.id === job.id ? 'border-cyber-red bg-cyber-red/5' : ''
                        }`}
                        onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold">{job.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color} text-white`}>
                                {badge.text}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                              <span className="flex items-center">
                                <Briefcase className="w-4 h-4 mr-1" />
                                {job.company}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location}
                              </span>
                              <span className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                {job.salary}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{job.description}</p>
                          </div>
                          <div className="text-right ml-4">
                            <div className={`text-2xl font-bold ${getMatchColor(job.matchPercentage)}`}>
                              {job.matchPercentage}%
                            </div>
                            <div className="text-xs text-gray-400">Match</div>
                          </div>
                        </div>

                        {/* Skills Match Breakdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-cyber-green mb-2 text-sm">
                              ✓ Matching Skills ({job.requiredMatches.length})
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {job.requiredMatches.slice(0, 5).map((skill, index) => (
                                <span key={index} className="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                              {job.requiredMatches.length > 5 && (
                                <span className="text-xs text-gray-400">+{job.requiredMatches.length - 5} more</span>
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-cyber-orange mb-2 text-sm">
                              ⚠ Missing Skills ({job.missingSkills.length})
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {job.missingSkills.slice(0, 5).map((skill, index) => (
                                <span key={index} className="bg-cyber-orange/20 text-cyber-orange px-2 py-1 rounded text-xs">
                                  {skill}
                                </span>
                              ))}
                              {job.missingSkills.length > 5 && (
                                <span className="text-xs text-gray-400">+{job.missingSkills.length - 5} more</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expanded Job Details */}
                        {selectedJob?.id === job.id && (
                          <div className="border-t border-cyber-gray/30 pt-4 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-cyber-blue mb-3">Key Responsibilities</h4>
                                <ul className="space-y-2 text-sm">
                                  {job.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start">
                                      <CheckCircle className="w-4 h-4 text-cyber-green mr-2 mt-0.5 flex-shrink-0" />
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-cyber-blue mb-3">Benefits & Perks</h4>
                                <ul className="space-y-2 text-sm">
                                  {job.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                      <Award className="w-4 h-4 text-cyber-yellow mr-2 mt-0.5 flex-shrink-0" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="mt-6 flex gap-4">
                              <button className="cyber-button bg-cyber-red/20 text-cyber-red border-cyber-red hover:bg-cyber-red/30">
                                Apply Now
                              </button>
                              <button className="cyber-button">
                                Save Job
                              </button>
                              <button className="cyber-button">
                                View Similar Jobs
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
