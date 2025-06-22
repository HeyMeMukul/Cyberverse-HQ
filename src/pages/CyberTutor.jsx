import React, { useState } from 'react';
import { GraduationCap, Network, Shield, Search, Zap, Lock, Users, BookOpen, Target, Award, Eye, Skull, ArrowUp } from 'lucide-react';

const CyberTutor = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState({});

  const learningModules = [
    {
      id: 1,
      title: "Cybersecurity Fundamentals",
      icon: <Shield className="w-8 h-8" />,
      color: "cyber-blue",
      difficulty: "Beginner",
      duration: "4 weeks",
      description: "Master core cybersecurity principles and threat landscape",
      lessons: [
        {
          title: "Introduction to Cybersecurity",
          content: `
            <div class="lesson-container">
              <div class="lesson-header">
                <h2>🛡️ Introduction to Cybersecurity</h2>
                <p class="subtitle">Understanding the Digital Security Landscape</p>
              </div>

              <div class="content-block">
                <h3>🎯 What is Cybersecurity?</h3>
                <div class="definition-box">
                  <p><strong>Cybersecurity</strong> is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.</p>
                </div>
              </div>

              <div class="content-block">
                <h3>🔺 The CIA Triad - Foundation of Security</h3>
                <div class="cia-triad">
                  <div class="cia-item confidentiality">
                    <div class="cia-icon">🔒</div>
                    <h4>Confidentiality</h4>
                    <p>Ensuring information is accessible only to authorized individuals</p>
                    <div class="example">
                      <strong>Examples:</strong> Encryption, Access controls, Authentication
                    </div>
                  </div>
                  <div class="cia-item integrity">
                    <div class="cia-icon">✅</div>
                    <h4>Integrity</h4>
                    <p>Maintaining accuracy and completeness of data</p>
                    <div class="example">
                      <strong>Examples:</strong> Digital signatures, Checksums, Version control
                    </div>
                  </div>
                  <div class="cia-item availability">
                    <div class="cia-icon">🌐</div>
                    <h4>Availability</h4>
                    <p>Ensuring authorized users have access when needed</p>
                    <div class="example">
                      <strong>Examples:</strong> Redundancy, Backups, DDoS protection
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>📊 Cybersecurity Statistics 2024</h3>
                <div class="stats-grid">
                  <div class="stat-card critical">
                    <div class="stat-number">$10.5T</div>
                    <div class="stat-label">Global cybercrime damages by 2025</div>
                  </div>
                  <div class="stat-card high">
                    <div class="stat-number">$4.45M</div>
                    <div class="stat-label">Average data breach cost (2023)</div>
                  </div>
                  <div class="stat-card medium">
                    <div class="stat-number">3.5M</div>
                    <div class="stat-label">Unfilled cybersecurity jobs</div>
                  </div>
                  <div class="stat-card warning">
                    <div class="stat-number">95%</div>
                    <div class="stat-label">Attacks due to human error</div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>⚠️ Major Threat Categories</h3>
                <div class="threat-landscape">
                  <div class="threat-category malware">
                    <h4>🦠 Malware</h4>
                    <p>Malicious software designed to damage or gain unauthorized access</p>
                    <div class="threat-types">
                      <span>Viruses</span>
                      <span>Worms</span>
                      <span>Trojans</span>
                      <span>Ransomware</span>
                      <span>Spyware</span>
                    </div>
                  </div>
                  <div class="threat-category phishing">
                    <h4>🎣 Phishing & Social Engineering</h4>
                    <p>Psychological manipulation to trick users into revealing information</p>
                    <div class="threat-types">
                      <span>Email Phishing</span>
                      <span>Spear Phishing</span>
                      <span>Vishing</span>
                      <span>Smishing</span>
                      <span>Pretexting</span>
                    </div>
                  </div>
                  <div class="threat-category network">
                    <h4>🌐 Network Attacks</h4>
                    <p>Attacks targeting network infrastructure and communications</p>
                    <div class="threat-types">
                      <span>DDoS</span>
                      <span>Man-in-the-Middle</span>
                      <span>DNS Spoofing</span>
                      <span>ARP Poisoning</span>
                      <span>Session Hijacking</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>💼 Cybersecurity Career Paths</h3>
                <div class="career-roadmap">
                  <div class="career-level entry">
                    <h4>Entry Level (0-2 years)</h4>
                    <div class="career-roles">
                      <div class="role-card">
                        <h5>Security Analyst</h5>
                        <div class="salary">$45k - $70k</div>
                        <div class="skills">SIEM, Incident Response, Risk Assessment</div>
                      </div>
                      <div class="role-card">
                        <h5>SOC Analyst</h5>
                        <div class="salary">$40k - $65k</div>
                        <div class="skills">Monitoring, Threat Detection, Log Analysis</div>
                      </div>
                    </div>
                  </div>
                  <div class="career-level mid">
                    <h4>Mid Level (2-5 years)</h4>
                    <div class="career-roles">
                      <div class="role-card">
                        <h5>Penetration Tester</h5>
                        <div class="salary">$75k - $120k</div>
                        <div class="skills">Ethical Hacking, Vulnerability Assessment</div>
                      </div>
                      <div class="role-card">
                        <h5>Security Engineer</h5>
                        <div class="salary">$80k - $130k</div>
                        <div class="skills">Security Architecture, DevSecOps</div>
                      </div>
                    </div>
                  </div>
                  <div class="career-level senior">
                    <h4>Senior Level (5+ years)</h4>
                    <div class="career-roles">
                      <div class="role-card">
                        <h5>Security Architect</h5>
                        <div class="salary">$120k - $180k</div>
                        <div class="skills">Enterprise Security, Risk Management</div>
                      </div>
                      <div class="role-card">
                        <h5>CISO</h5>
                        <div class="salary">$200k - $400k+</div>
                        <div class="skills">Leadership, Strategy, Governance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <style>
              .lesson-container {
                font-family: 'Inter', sans-serif;
                line-height: 1.6;
                color: #e2e8f0;
                max-width: 100%;
              }

              .lesson-header {
                text-align: center;
                margin-bottom: 2rem;
                padding: 2rem;
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                border-radius: 1rem;
                border: 1px solid #3b82f6;
              }

              .lesson-header h2 {
                color: #3b82f6;
                font-size: 2rem;
                margin-bottom: 0.5rem;
              }

              .subtitle {
                color: #94a3b8;
                font-size: 1.1rem;
              }

              .content-block {
                margin-bottom: 2rem;
                padding: 1.5rem;
                background: rgba(30, 41, 59, 0.5);
                border-radius: 0.75rem;
                border-left: 4px solid #3b82f6;
              }

              .content-block h3 {
                color: #3b82f6;
                font-size: 1.4rem;
                margin-bottom: 1rem;
              }

              .definition-box {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                padding: 1.5rem;
                border-radius: 0.5rem;
                border: 1px solid #3b82f6;
              }

              .cia-triad {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
              }

              .cia-item {
                padding: 1.5rem;
                border-radius: 0.75rem;
                text-align: center;
                border: 2px solid;
                transition: transform 0.3s ease;
              }

              .cia-item:hover {
                transform: translateY(-5px);
              }

              .cia-item.confidentiality {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border-color: #60a5fa;
              }

              .cia-item.integrity {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                border-color: #34d399;
              }

              .cia-item.availability {
                background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
                border-color: #f87171;
              }

              .cia-icon {
                font-size: 2rem;
                margin-bottom: 1rem;
              }

              .cia-item h4 {
                color: white;
                font-size: 1.1rem;
                margin-bottom: 0.5rem;
              }

              .cia-item p {
                color: rgba(255, 255, 255, 0.9);
                margin-bottom: 1rem;
                font-size: 0.9rem;
              }

              .example {
                background: rgba(0, 0, 0, 0.2);
                padding: 0.75rem;
                border-radius: 0.5rem;
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.8);
              }

              .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
              }

              .stat-card {
                padding: 1.5rem;
                border-radius: 0.75rem;
                text-align: center;
                border: 2px solid;
                transition: transform 0.3s ease;
              }

              .stat-card:hover {
                transform: scale(1.05);
              }

              .stat-card.critical {
                background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%);
                border-color: #ef4444;
              }

              .stat-card.high {
                background: linear-gradient(135deg, #92400e 0%, #f59e0b 100%);
                border-color: #fbbf24;
              }

              .stat-card.medium {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border-color: #60a5fa;
              }

              .stat-card.warning {
                background: linear-gradient(135deg, #7c2d12 0%, #ea580c 100%);
                border-color: #fb923c;
              }

              .stat-number {
                font-size: 1.8rem;
                font-weight: bold;
                color: white;
                margin-bottom: 0.5rem;
              }

              .stat-label {
                color: rgba(255, 255, 255, 0.9);
                font-size: 0.8rem;
              }

              .threat-landscape {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 1.5rem;
                margin-top: 1rem;
              }

              .threat-category {
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid;
                transition: transform 0.3s ease;
              }

              .threat-category:hover {
                transform: translateY(-3px);
              }

              .threat-category.malware {
                background: linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%);
                border-color: #a78bfa;
              }

              .threat-category.phishing {
                background: linear-gradient(135deg, #be185d 0%, #ec4899 100%);
                border-color: #f9a8d4;
              }

              .threat-category.network {
                background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
                border-color: #5eead4;
              }

              .threat-category h4 {
                color: white;
                margin-bottom: 1rem;
                font-size: 1.1rem;
              }

              .threat-category p {
                color: rgba(255, 255, 255, 0.9);
                margin-bottom: 1rem;
                font-size: 0.9rem;
              }

              .threat-types {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
              }

              .threat-types span {
                background: rgba(0, 0, 0, 0.3);
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                font-size: 0.75rem;
              }

              .career-roadmap {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                margin-top: 1rem;
              }

              .career-level {
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid;
              }

              .career-level.entry {
                background: linear-gradient(135deg, #065f46 0%, #10b981 100%);
                border-color: #34d399;
              }

              .career-level.mid {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border-color: #60a5fa;
              }

              .career-level.senior {
                background: linear-gradient(135deg, #581c87 0%, #8b5cf6 100%);
                border-color: #c4b5fd;
              }

              .career-level h4 {
                color: white;
                margin-bottom: 1rem;
                font-size: 1.2rem;
              }

              .career-roles {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
              }

              .role-card {
                background: rgba(0, 0, 0, 0.2);
                padding: 1rem;
                border-radius: 0.5rem;
                text-align: center;
              }

              .role-card h5 {
                color: white;
                margin-bottom: 0.5rem;
                font-size: 1rem;
              }

              .salary {
                color: #fbbf24;
                font-weight: 600;
                margin-bottom: 0.5rem;
                font-size: 0.9rem;
              }

              .skills {
                color: rgba(255, 255, 255, 0.8);
                font-size: 0.8rem;
              }

              @media (max-width: 768px) {
                .cia-triad {
                  grid-template-columns: 1fr;
                }
                
                .stats-grid {
                  grid-template-columns: repeat(2, 1fr);
                }
                
                .threat-landscape {
                  grid-template-columns: 1fr;
                }
                
                .career-roles {
                  grid-template-columns: 1fr;
                }
              }
            </style>
          `,
          duration: "3 hours",
          topics: ["CIA Triad", "Threat landscape", "Career paths", "Security fundamentals"],
          practicalExercise: "Research recent cybersecurity incidents and analyze them using the CIA triad framework"
        },
        {
          title: "Risk Management & Compliance",
          content: `
            <div class="lesson-container">
              <div class="lesson-header">
                <h2>⚖️ Risk Management & Compliance</h2>
                <p class="subtitle">Managing Security Risks and Regulatory Requirements</p>
              </div>

              <div class="content-block">
                <h3>🎯 Risk Management Process</h3>
                <div class="risk-process">
                  <div class="process-step">
                    <div class="step-number">1</div>
                    <h4>Risk Identification</h4>
                    <p>Identify potential threats and vulnerabilities</p>
                  </div>
                  <div class="process-step">
                    <div class="step-number">2</div>
                    <h4>Risk Assessment</h4>
                    <p>Evaluate likelihood and impact of identified risks</p>
                  </div>
                  <div class="process-step">
                    <div class="step-number">3</div>
                    <h4>Risk Treatment</h4>
                    <p>Implement controls to mitigate, transfer, or accept risks</p>
                  </div>
                  <div class="process-step">
                    <div class="step-number">4</div>
                    <h4>Risk Monitoring</h4>
                    <p>Continuously monitor and review risk status</p>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>📋 Compliance Frameworks</h3>
                <div class="frameworks-grid">
                  <div class="framework-card iso">
                    <h4>ISO 27001</h4>
                    <p>International standard for information security management systems</p>
                    <div class="framework-scope">Global Standard</div>
                  </div>
                  <div class="framework-card nist">
                    <h4>NIST Framework</h4>
                    <p>Cybersecurity framework for critical infrastructure protection</p>
                    <div class="framework-scope">US Government</div>
                  </div>
                  <div class="framework-card gdpr">
                    <h4>GDPR</h4>
                    <p>General Data Protection Regulation for privacy protection</p>
                    <div class="framework-scope">European Union</div>
                  </div>
                  <div class="framework-card sox">
                    <h4>SOX</h4>
                    <p>Sarbanes-Oxley Act for financial reporting controls</p>
                    <div class="framework-scope">US Financial</div>
                  </div>
                </div>
              </div>
            </div>

            <style>
              .risk-process {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
              }

              .process-step {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #3b82f6;
                text-align: center;
              }

              .step-number {
                width: 2rem;
                height: 2rem;
                background: #3b82f6;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                margin: 0 auto 1rem;
              }

              .frameworks-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
              }

              .framework-card {
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid;
                text-align: center;
              }

              .framework-card.iso {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border-color: #60a5fa;
              }

              .framework-card.nist {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                border-color: #34d399;
              }

              .framework-card.gdpr {
                background: linear-gradient(135deg, #7c2d12 0%, #ea580c 100%);
                border-color: #fb923c;
              }

              .framework-card.sox {
                background: linear-gradient(135deg, #581c87 0%, #8b5cf6 100%);
                border-color: #c4b5fd;
              }

              .framework-card h4 {
                color: white;
                margin-bottom: 1rem;
                font-size: 1.1rem;
              }

              .framework-card p {
                color: rgba(255, 255, 255, 0.9);
                margin-bottom: 1rem;
                font-size: 0.9rem;
              }

              .framework-scope {
                background: rgba(0, 0, 0, 0.3);
                padding: 0.5rem;
                border-radius: 0.25rem;
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.8);
              }
            </style>
          `,
          duration: "2 hours",
          topics: ["Risk assessment", "Compliance frameworks", "ISO 27001", "NIST", "GDPR"],
          practicalExercise: "Conduct a basic risk assessment for a small organization and identify compliance requirements"
        }
      ]
    },
    {
      id: 2,
      title: "Networking Fundamentals", 
      icon: <Network className="w-8 h-8" />,
      color: "cyber-green",
      difficulty: "Beginner",
      duration: "3 weeks",
      description: "Master networking concepts essential for cybersecurity",
      lessons: [
        {
          title: "OSI Model & TCP/IP Stack",
          content: `
            <div class="lesson-container">
              <div class="lesson-header">
                <h2>🌐 OSI Model & TCP/IP Stack</h2>
                <p class="subtitle">Understanding Network Communication Models</p>
              </div>

              <div class="content-block">
                <h3>📋 OSI Model (7 Layers)</h3>
                <div class="osi-layers">
                  <div class="layer-card layer-7">
                    <div class="layer-number">7</div>
                    <h4>Application Layer</h4>
                    <p>Network services to applications (HTTP, FTP, SMTP)</p>
                    <div class="security-note">Security: Application firewalls, input validation</div>
                  </div>
                  <div class="layer-card layer-6">
                    <div class="layer-number">6</div>
                    <h4>Presentation Layer</h4>
                    <p>Data encryption, compression, translation</p>
                    <div class="security-note">Security: Data encryption, digital certificates</div>
                  </div>
                  <div class="layer-card layer-5">
                    <div class="layer-number">5</div>
                    <h4>Session Layer</h4>
                    <p>Session management and control</p>
                    <div class="security-note">Security: Session encryption, authentication</div>
                  </div>
                  <div class="layer-card layer-4">
                    <div class="layer-number">4</div>
                    <h4>Transport Layer</h4>
                    <p>Reliable data transfer (TCP/UDP)</p>
                    <div class="security-note">Security: Port filtering, connection monitoring</div>
                  </div>
                  <div class="layer-card layer-3">
                    <div class="layer-number">3</div>
                    <h4>Network Layer</h4>
                    <p>Routing and IP addressing</p>
                    <div class="security-note">Security: Firewalls, IPSec, ACLs</div>
                  </div>
                  <div class="layer-card layer-2">
                    <div class="layer-number">2</div>
                    <h4>Data Link Layer</h4>
                    <p>Node-to-node delivery, MAC addresses</p>
                    <div class="security-note">Security: MAC filtering, port security</div>
                  </div>
                  <div class="layer-card layer-1">
                    <div class="layer-number">1</div>
                    <h4>Physical Layer</h4>
                    <p>Physical transmission of data</p>
                    <div class="security-note">Security: Physical access controls</div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>🔗 TCP/IP Model (4 Layers)</h3>
                <div class="tcpip-comparison">
                  <div class="tcpip-layer">
                    <h4>Application Layer</h4>
                    <p>Combines OSI layers 5, 6, 7</p>
                    <div class="protocols">HTTP, HTTPS, FTP, SMTP, DNS</div>
                  </div>
                  <div class="tcpip-layer">
                    <h4>Transport Layer</h4>
                    <p>Equivalent to OSI layer 4</p>
                    <div class="protocols">TCP, UDP</div>
                  </div>
                  <div class="tcpip-layer">
                    <h4>Internet Layer</h4>
                    <p>Equivalent to OSI layer 3</p>
                    <div class="protocols">IP, ICMP, ARP</div>
                  </div>
                  <div class="tcpip-layer">
                    <h4>Network Access Layer</h4>
                    <p>Combines OSI layers 1, 2</p>
                    <div class="protocols">Ethernet, WiFi, PPP</div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>🔒 Security at Each Layer</h3>
                <div class="security-layers">
                  <div class="security-item">
                    <h4>Application Security</h4>
                    <p>WAF, Input validation, Authentication</p>
                  </div>
                  <div class="security-item">
                    <h4>Transport Security</h4>
                    <p>TLS/SSL, Port security, Connection limits</p>
                  </div>
                  <div class="security-item">
                    <h4>Network Security</h4>
                    <p>Firewalls, VPNs, IDS/IPS</p>
                  </div>
                  <div class="security-item">
                    <h4>Physical Security</h4>
                    <p>Access controls, Cable protection, TEMPEST</p>
                  </div>
                </div>
              </div>
            </div>

            <style>
              .osi-layers {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                margin-top: 1rem;
              }

              .layer-card {
                padding: 1rem;
                border-radius: 0.5rem;
                border: 2px solid;
                display: flex;
                align-items: center;
                gap: 1rem;
                transition: transform 0.3s ease;
              }

              .layer-card:hover {
                transform: translateX(10px);
              }

              .layer-card.layer-7 {
                background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%);
                border-color: #ef4444;
              }

              .layer-card.layer-6 {
                background: linear-gradient(135deg, #92400e 0%, #f59e0b 100%);
                border-color: #fbbf24;
              }

              .layer-card.layer-5 {
                background: linear-gradient(135deg, #a16207 0%, #eab308 100%);
                border-color: #facc15;
              }

              .layer-card.layer-4 {
                background: linear-gradient(135deg, #065f46 0%, #10b981 100%);
                border-color: #34d399;
              }

              .layer-card.layer-3 {
                background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
                border-color: #5eead4;
              }

              .layer-card.layer-2 {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border-color: #60a5fa;
              }

              .layer-card.layer-1 {
                background: linear-gradient(135deg, #581c87 0%, #8b5cf6 100%);
                border-color: #c4b5fd;
              }

              .layer-number {
                width: 2.5rem;
                height: 2.5rem;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.2rem;
                flex-shrink: 0;
              }

              .layer-card h4 {
                color: white;
                margin: 0;
                font-size: 1.1rem;
                min-width: 150px;
              }

              .layer-card p {
                color: rgba(255, 255, 255, 0.9);
                margin: 0;
                flex: 1;
                font-size: 0.9rem;
              }

              .security-note {
                background: rgba(0, 0, 0, 0.3);
                padding: 0.5rem;
                border-radius: 0.25rem;
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.8);
                margin-top: 0.5rem;
              }

              .tcpip-comparison {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
              }

              .tcpip-layer {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #10b981;
                text-align: center;
              }

              .tcpip-layer h4 {
                color: #10b981;
                margin-bottom: 1rem;
                font-size: 1.1rem;
              }

              .tcpip-layer p {
                color: #cbd5e1;
                margin-bottom: 1rem;
                font-size: 0.9rem;
              }

              .protocols {
                background: rgba(16, 185, 129, 0.2);
                padding: 0.5rem;
                border-radius: 0.25rem;
                font-size: 0.8rem;
                color: #6ee7b7;
              }

              .security-layers {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
              }

              .security-item {
                background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%);
                padding: 1rem;
                border-radius: 0.5rem;
                border: 2px solid #ef4444;
                text-align: center;
              }

              .security-item h4 {
                color: white;
                margin-bottom: 0.5rem;
                font-size: 1rem;
              }

              .security-item p {
                color: rgba(255, 255, 255, 0.9);
                font-size: 0.8rem;
              }

              @media (max-width: 768px) {
                .layer-card {
                  flex-direction: column;
                  text-align: center;
                }
                
                .tcpip-comparison {
                  grid-template-columns: 1fr;
                }
                
                .security-layers {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
            </style>
          `,
          duration: "2 hours",
          topics: ["OSI 7 layers", "TCP/IP model", "Network protocols", "Security implications"],
          practicalExercise: "Use Wireshark to capture network traffic and identify different protocol layers in action"
        },
        {
          title: "IP Addressing & Subnetting",
          content: `
            <div class="lesson-container">
              <div class="lesson-header">
                <h2>🔢 IP Addressing & Subnetting</h2>
                <p class="subtitle">Master network addressing and segmentation</p>
              </div>

              <div class="content-block">
                <h3>🌐 IPv4 Addressing Fundamentals</h3>
                <div class="ipv4-basics">
                  <div class="ip-structure">
                    <h4>IPv4 Address Structure</h4>
                    <div class="ip-example">
                      <div class="octet">192</div>
                      <div class="dot">.</div>
                      <div class="octet">168</div>
                      <div class="dot">.</div>
                      <div class="octet">1</div>
                      <div class="dot">.</div>
                      <div class="octet">100</div>
                    </div>
                    <p>32-bit address divided into 4 octets (8 bits each)</p>
                  </div>
                  
                  <div class="address-classes">
                    <h4>IPv4 Address Classes</h4>
                    <div class="class-grid">
                      <div class="class-item class-a">
                        <h5>Class A</h5>
                        <div class="range">1.0.0.0 - 126.255.255.255</div>
                        <div class="mask">/8 (255.0.0.0)</div>
                        <div class="hosts">16.7M hosts per network</div>
                      </div>
                      <div class="class-item class-b">
                        <h5>Class B</h5>
                        <div class="range">128.0.0.0 - 191.255.255.255</div>
                        <div class="mask">/16 (255.255.0.0)</div>
                        <div class="hosts">65K hosts per network</div>
                      </div>
                      <div class="class-item class-c">
                        <h5>Class C</h5>
                        <div class="range">192.0.0.0 - 223.255.255.255</div>
                        <div class="mask">/24 (255.255.255.0)</div>
                        <div class="hosts">254 hosts per network</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>🏠 Private IP Ranges (RFC 1918)</h3>
                <div class="private-ranges">
                  <div class="range-item">
                    <h4>Class A Private</h4>
                    <div class="ip-range">10.0.0.0/8</div>
                    <div class="full-range">10.0.0.0 - 10.255.255.255</div>
                    <div class="use-case">Large enterprises, ISPs</div>
                  </div>
                  <div class="range-item">
                    <h4>Class B Private</h4>
                    <div class="ip-range">172.16.0.0/12</div>
                    <div class="full-range">172.16.0.0 - 172.31.255.255</div>
                    <div class="use-case">Medium organizations</div>
                  </div>
                  <div class="range-item">
                    <h4>Class C Private</h4>
                    <div class="ip-range">192.168.0.0/16</div>
                    <div class="full-range">192.168.0.0 - 192.168.255.255</div>
                    <div class="use-case">Home networks, small offices</div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>🔧 Subnetting Examples</h3>
                <div class="subnetting-examples">
                  <div class="subnet-example">
                    <h4>Example: 192.168.1.0/24 Network</h4>
                    <div class="subnet-calc">
                      <div class="calc-row">
                        <span class="label">Network Address:</span>
                        <span class="value">192.168.1.0</span>
                      </div>
                      <div class="calc-row">
                        <span class="label">Subnet Mask:</span>
                        <span class="value">255.255.255.0</span>
                      </div>
                      <div class="calc-row">
                        <span class="label">Broadcast Address:</span>
                        <span class="value">192.168.1.255</span>
                      </div>
                      <div class="calc-row">
                        <span class="label">Usable Host Range:</span>
                        <span class="value">192.168.1.1 - 192.168.1.254</span>
                      </div>
                      <div class="calc-row">
                        <span class="label">Total Hosts:</span>
                        <span class="value">254 usable hosts</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="subnet-table">
                    <h4>Common Subnet Masks</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>CIDR</th>
                          <th>Subnet Mask</th>
                          <th>Usable Hosts</th>
                          <th>Use Case</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>/30</td>
                          <td>255.255.255.252</td>
                          <td>2</td>
                          <td>Point-to-point links</td>
                        </tr>
                        <tr>
                          <td>/29</td>
                          <td>255.255.255.248</td>
                          <td>6</td>
                          <td>Small networks</td>
                        </tr>
                        <tr>
                          <td>/28</td>
                          <td>255.255.255.240</td>
                          <td>14</td>
                          <td>Small offices</td>
                        </tr>
                        <tr>
                          <td>/27</td>
                          <td>255.255.255.224</td>
                          <td>30</td>
                          <td>Departments</td>
                        </tr>
                        <tr>
                          <td>/26</td>
                          <td>255.255.255.192</td>
                          <td>62</td>
                          <td>Medium networks</td>
                        </tr>
                        <tr>
                          <td>/25</td>
                          <td>255.255.255.128</td>
                          <td>126</td>
                          <td>Large departments</td>
                        </tr>
                        <tr>
                          <td>/24</td>
                          <td>255.255.255.0</td>
                          <td>254</td>
                          <td>Standard networks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <style>
              .ipv4-basics {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 1rem;
              }

              .ip-structure {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #10b981;
                text-align: center;
              }

              .ip-structure h4 {
                color: #10b981;
                margin-bottom: 1rem;
              }

              .ip-example {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1rem 0;
                font-family: 'Courier New', monospace;
              }

              .octet {
                background: #10b981;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.25rem;
                font-weight: bold;
                font-size: 1.1rem;
              }

              .dot {
                color: #10b981;
                font-size: 1.5rem;
                font-weight: bold;
                margin: 0 0.5rem;
              }

              .address-classes {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #10b981;
              }

              .address-classes h4 {
                color: #10b981;
                margin-bottom: 1rem;
                text-align: center;
              }

              .class-grid {
                display: flex;
                flex-direction: column;
                gap: 1rem;
              }

              .class-item {
                padding: 1rem;
                border-radius: 0.5rem;
                border: 2px solid;
              }

              .class-item.class-a {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border-color: #60a5fa;
              }

              .class-item.class-b {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                border-color: #34d399;
              }

              .class-item.class-c {
                background: linear-gradient(135deg, #7c2d12 0%, #ea580c 100%);
                border-color: #fb923c;
              }

              .class-item h5 {
                color: white;
                margin-bottom: 0.5rem;
                font-size: 1rem;
              }

              .range, .mask, .hosts {
                color: rgba(255, 255, 255, 0.9);
                font-size: 0.8rem;
                margin-bottom: 0.25rem;
                font-family: 'Courier New', monospace;
              }

              .private-ranges {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
              }

              .range-item {
                background: linear-gradient(135deg, #581c87 0%, #8b5cf6 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #c4b5fd;
                text-align: center;
              }

              .range-item h4 {
                color: white;
                margin-bottom: 1rem;
                font-size: 1.1rem;
              }

              .ip-range {
                background: rgba(0, 0, 0, 0.3);
                padding: 0.5rem;
                border-radius: 0.25rem;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                color: #e0e7ff;
                margin-bottom: 0.5rem;
              }

              .full-range {
                color: rgba(255, 255, 255, 0.8);
                font-size: 0.8rem;
                font-family: 'Courier New', monospace;
                margin-bottom: 0.5rem;
              }

              .use-case {
                color: rgba(255, 255, 255, 0.7);
                font-size: 0.8rem;
                font-style: italic;
              }

              .subnetting-examples {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                gap: 2rem;
                margin-top: 1rem;
              }

              .subnet-example {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #fbbf24;
              }

              .subnet-example h4 {
                color: #fbbf24;
                margin-bottom: 1rem;
              }

              .subnet-calc {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
              }

              .calc-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem;
                background: rgba(251, 191, 36, 0.1);
                border-radius: 0.25rem;
              }

              .label {
                color: #fbbf24;
                font-weight: 600;
                font-size: 0.9rem;
              }

              .value {
                color: white;
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
              }

              .subnet-table {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #ef4444;
              }

              .subnet-table h4 {
                color: #ef4444;
                margin-bottom: 1rem;
                text-align: center;
              }

              table {
                width: 100%;
                border-collapse: collapse;
                font-size: 0.8rem;
              }

              th {
                background: rgba(239, 68, 68, 0.2);
                color: #fecaca;
                padding: 0.75rem 0.5rem;
                text-align: left;
                border: 1px solid rgba(239, 68, 68, 0.3);
                font-weight: 600;
              }

              td {
                padding: 0.5rem;
                border: 1px solid rgba(239, 68, 68, 0.2);
                color: #e2e8f0;
                font-family: 'Courier New', monospace;
              }

              tr:nth-child(even) {
                background: rgba(239, 68, 68, 0.05);
              }

              tr:hover {
                background: rgba(239, 68, 68, 0.1);
              }

              @media (max-width: 768px) {
                .ipv4-basics {
                  grid-template-columns: 1fr;
                }
                
                .private-ranges {
                  grid-template-columns: 1fr;
                }
                
                .subnetting-examples {
                  grid-template-columns: 1fr;
                }
                
                .calc-row {
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 0.25rem;
                }
                
                table {
                  font-size: 0.7rem;
                }
                
                th, td {
                  padding: 0.5rem 0.25rem;
                }
              }
            </style>
          `,
          duration: "3 hours",
          topics: ["IPv4 addressing", "Subnet masks", "CIDR notation", "Private IP ranges", "Subnetting calculations"],
          practicalExercise: "Practice subnetting calculations and design a network addressing scheme for a multi-department organization"
        }
      ]
    },
    {
      id: 3,
      title: "Linux Fundamentals",
      icon: <Shield className="w-8 h-8" />,
      color: "cyber-orange",
      difficulty: "Beginner",
      duration: "3 weeks",
      description: "Essential Linux skills for cybersecurity professionals",
      lessons: [
        {
          title: "Linux System Architecture",
          content: `
            <div class="lesson-container">
              <div class="lesson-header">
                <h2>🐧 Linux System Architecture</h2>
                <p class="subtitle">Understanding the Linux Operating System</p>
              </div>

              <div class="content-block">
                <h3>🏗️ Linux Architecture Overview</h3>
                <div class="architecture-diagram">
                  <div class="arch-layer user-space">
                    <h4>User Space</h4>
                    <div class="layer-content">
                      <div class="component">Applications</div>
                      <div class="component">Shell</div>
                      <div class="component">System Libraries</div>
                    </div>
                  </div>
                  <div class="arch-layer kernel-space">
                    <h4>Kernel Space</h4>
                    <div class="layer-content">
                      <div class="component">System Calls</div>
                      <div class="component">Process Management</div>
                      <div class="component">Memory Management</div>
                      <div class="component">Device Drivers</div>
                    </div>
                  </div>
                  <div class="arch-layer hardware">
                    <h4>Hardware</h4>
                    <div class="layer-content">
                      <div class="component">CPU</div>
                      <div class="component">Memory</div>
                      <div class="component">Storage</div>
                      <div class="component">Network</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>📁 Linux File System Hierarchy</h3>
                <div class="filesystem-tree">
                  <div class="fs-item root">
                    <div class="fs-icon">📁</div>
                    <div class="fs-details">
                      <h4>/ (Root)</h4>
                      <p>Top-level directory of the entire file system</p>
                    </div>
                  </div>
                  <div class="fs-children">
                    <div class="fs-item">
                      <div class="fs-icon">⚙️</div>
                      <div class="fs-details">
                        <h4>/bin</h4>
                        <p>Essential command binaries (ls, cp, mv)</p>
                      </div>
                    </div>
                    <div class="fs-item">
                      <div class="fs-icon">🔧</div>
                      <div class="fs-details">
                        <h4>/etc</h4>
                        <p>System configuration files</p>
                      </div>
                    </div>
                    <div class="fs-item">
                      <div class="fs-icon">🏠</div>
                      <div class="fs-details">
                        <h4>/home</h4>
                        <p>User home directories</p>
                      </div>
                    </div>
                    <div class="fs-item">
                      <div class="fs-icon">📊</div>
                      <div class="fs-details">
                        <h4>/var</h4>
                        <p>Variable data (logs, databases, mail)</p>
                      </div>
                    </div>
                    <div class="fs-item">
                      <div class="fs-icon">🔒</div>
                      <div class="fs-details">
                        <h4>/usr</h4>
                        <p>User programs and data</p>
                      </div>
                    </div>
                    <div class="fs-item">
                      <div class="fs-icon">🗂️</div>
                      <div class="fs-details">
                        <h4>/tmp</h4>
                        <p>Temporary files</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>👥 User Management System</h3>
                <div class="user-system">
                  <div class="user-types">
                    <div class="user-type root-user">
                      <div class="user-icon">👑</div>
                      <h4>Root User (UID 0)</h4>
                      <p>Superuser with complete system access</p>
                      <div class="privileges">
                        <span>All permissions</span>
                        <span>System administration</span>
                        <span>Hardware access</span>
                      </div>
                    </div>
                    <div class="user-type system-user">
                      <div class="user-icon">🤖</div>
                      <h4>System Users (UID 1-999)</h4>
                      <p>Service accounts for system processes</p>
                      <div class="privileges">
                        <span>Service-specific</span>
                        <span>No shell access</span>
                        <span>Automated processes</span>
                      </div>
                    </div>
                    <div class="user-type regular-user">
                      <div class="user-icon">👤</div>
                      <h4>Regular Users (UID 1000+)</h4>
                      <p>Human users with limited privileges</p>
                      <div class="privileges">
                        <span>Home directory</span>
                        <span>Basic commands</span>
                        <span>File ownership</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>🔐 File Permissions System</h3>
                <div class="permissions-system">
                  <div class="permission-example">
                    <h4>Permission Format: rwxrwxrwx</h4>
                    <div class="permission-breakdown">
                      <div class="perm-group owner">
                        <div class="perm-label">Owner</div>
                        <div class="perm-bits">rwx</div>
                        <div class="perm-desc">Read, Write, Execute</div>
                      </div>
                      <div class="perm-group group">
                        <div class="perm-label">Group</div>
                        <div class="perm-bits">rwx</div>
                        <div class="perm-desc">Read, Write, Execute</div>
                      </div>
                      <div class="perm-group others">
                        <div class="perm-label">Others</div>
                        <div class="perm-bits">rwx</div>
                        <div class="perm-desc">Read, Write, Execute</div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="permission-examples">
                    <h4>Common Permission Examples</h4>
                    <div class="perm-examples-grid">
                      <div class="perm-example">
                        <div class="perm-code">755</div>
                        <div class="perm-text">rwxr-xr-x</div>
                        <div class="perm-use">Executable files</div>
                      </div>
                      <div class="perm-example">
                        <div class="perm-code">644</div>
                        <div class="perm-text">rw-r--r--</div>
                        <div class="perm-use">Regular files</div>
                      </div>
                      <div class="perm-example">
                        <div class="perm-code">600</div>
                        <div class="perm-text">rw-------</div>
                        <div class="perm-use">Private files</div>
                      </div>
                      <div class="perm-example">
                        <div class="perm-code">777</div>
                        <div class="perm-text">rwxrwxrwx</div>
                        <div class="perm-use">Full access (dangerous!)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <style>
              .architecture-diagram {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-top: 1rem;
              }

              .arch-layer {
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid;
                text-align: center;
              }

              .arch-layer.user-space {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border-color: #60a5fa;
              }

              .arch-layer.kernel-space {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                border-color: #34d399;
              }

              .arch-layer.hardware {
                background: linear-gradient(135deg, #7c2d12 0%, #ea580c 100%);
                border-color: #fb923c;
              }

              .arch-layer h4 {
                color: white;
                margin-bottom: 1rem;
                font-size: 1.2rem;
              }

              .layer-content {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1rem;
              }

                            .component {
                background: rgba(0, 0, 0, 0.3);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-size: 0.9rem;
                font-weight: 500;
              }

              .filesystem-tree {
                margin-top: 1rem;
              }

              .fs-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                margin-bottom: 0.5rem;
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                border-radius: 0.5rem;
                border: 2px solid #ea580c;
                transition: transform 0.3s ease;
              }

              .fs-item:hover {
                transform: translateX(10px);
              }

              .fs-item.root {
                background: linear-gradient(135deg, #7c2d12 0%, #ea580c 100%);
                border-color: #fb923c;
                margin-bottom: 1rem;
              }

              .fs-children {
                margin-left: 2rem;
                border-left: 2px dashed #ea580c;
                padding-left: 1rem;
              }

              .fs-icon {
                font-size: 1.5rem;
                flex-shrink: 0;
              }

              .fs-details h4 {
                color: #ea580c;
                margin: 0 0 0.25rem 0;
                font-size: 1rem;
                font-family: 'Courier New', monospace;
              }

              .fs-details p {
                color: #cbd5e1;
                margin: 0;
                font-size: 0.9rem;
              }

              .user-types {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-top: 1rem;
              }

              .user-type {
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid;
                text-align: center;
                transition: transform 0.3s ease;
              }

              .user-type:hover {
                transform: translateY(-5px);
              }

              .user-type.root-user {
                background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%);
                border-color: #ef4444;
              }

              .user-type.system-user {
                background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                border-color: #60a5fa;
              }

              .user-type.regular-user {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                border-color: #34d399;
              }

              .user-icon {
                font-size: 2rem;
                margin-bottom: 1rem;
              }

              .user-type h4 {
                color: white;
                margin-bottom: 0.5rem;
                font-size: 1rem;
              }

              .user-type p {
                color: rgba(255, 255, 255, 0.9);
                margin-bottom: 1rem;
                font-size: 0.9rem;
              }

              .privileges {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                justify-content: center;
              }

              .privileges span {
                background: rgba(0, 0, 0, 0.3);
                color: white;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                font-size: 0.75rem;
              }

              .permissions-system {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 2rem;
                margin-top: 1rem;
              }

              .permission-example {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #ea580c;
              }

              .permission-example h4 {
                color: #ea580c;
                margin-bottom: 1rem;
                text-align: center;
                font-family: 'Courier New', monospace;
              }

              .permission-breakdown {
                display: flex;
                justify-content: space-between;
                gap: 1rem;
              }

              .perm-group {
                text-align: center;
                flex: 1;
              }

              .perm-label {
                color: #fbbf24;
                font-weight: 600;
                margin-bottom: 0.5rem;
                font-size: 0.9rem;
              }

              .perm-bits {
                background: rgba(251, 191, 36, 0.2);
                color: #fbbf24;
                padding: 0.5rem;
                border-radius: 0.25rem;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                margin-bottom: 0.5rem;
              }

              .perm-desc {
                color: #cbd5e1;
                font-size: 0.8rem;
              }

              .permission-examples {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #10b981;
              }

              .permission-examples h4 {
                color: #10b981;
                margin-bottom: 1rem;
                text-align: center;
              }

              .perm-examples-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
              }

              .perm-example {
                background: rgba(16, 185, 129, 0.1);
                padding: 1rem;
                border-radius: 0.5rem;
                border: 1px solid rgba(16, 185, 129, 0.3);
                text-align: center;
              }

              .perm-code {
                color: #10b981;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                font-size: 1.1rem;
                margin-bottom: 0.25rem;
              }

              .perm-text {
                color: #6ee7b7;
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
                margin-bottom: 0.25rem;
              }

              .perm-use {
                color: #cbd5e1;
                font-size: 0.8rem;
              }

              @media (max-width: 768px) {
                .fs-children {
                  margin-left: 1rem;
                  padding-left: 0.5rem;
                }
                
                .user-types {
                  grid-template-columns: 1fr;
                }
                
                .permissions-system {
                  grid-template-columns: 1fr;
                }
                
                .permission-breakdown {
                  flex-direction: column;
                  gap: 1rem;
                }
                
                .perm-examples-grid {
                  grid-template-columns: 1fr;
                }
              }
            </style>
          `,
          duration: "2 hours",
          topics: ["Linux architecture", "File system hierarchy", "User management", "File permissions"],
          practicalExercise: "Navigate the Linux file system, create users, and practice setting file permissions using chmod and chown commands"
        },
        {
          title: "Essential Linux Commands",
          content: `
            <div class="lesson-container">
              <div class="lesson-header">
                <h2>⌨️ Essential Linux Commands</h2>
                <p class="subtitle">Master the command line for cybersecurity</p>
              </div>

              <div class="content-block">
                <h3>📁 File and Directory Operations</h3>
                <div class="command-category">
                  <div class="command-item">
                    <div class="cmd-header">
                      <code>ls</code>
                      <span class="cmd-type">List</span>
                    </div>
                    <p>List directory contents</p>
                    <div class="cmd-examples">
                      <div class="cmd-example">
                        <code>ls -la</code>
                        <span>List all files with details</span>
                      </div>
                      <div class="cmd-example">
                        <code>ls -lh</code>
                        <span>Human-readable file sizes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="command-item">
                    <div class="cmd-header">
                      <code>find</code>
                      <span class="cmd-type">Search</span>
                    </div>
                    <p>Search for files and directories</p>
                    <div class="cmd-examples">
                      <div class="cmd-example">
                        <code>find / -name "*.conf" 2>/dev/null</code>
                        <span>Find all config files</span>
                      </div>
                      <div class="cmd-example">
                        <code>find / -perm -4000 2>/dev/null</code>
                        <span>Find SUID files</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>🔍 System Information Commands</h3>
                <div class="sysinfo-grid">
                  <div class="sysinfo-item">
                    <h4>System Details</h4>
                    <div class="cmd-list">
                      <div class="cmd-item">
                        <code>uname -a</code>
                        <span>System information</span>
                      </div>
                      <div class="cmd-item">
                        <code>whoami</code>
                        <span>Current user</span>
                      </div>
                      <div class="cmd-item">
                        <code>id</code>
                        <span>User and group IDs</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="sysinfo-item">
                    <h4>Process Management</h4>
                    <div class="cmd-list">
                      <div class="cmd-item">
                        <code>ps aux</code>
                        <span>All running processes</span>
                      </div>
                      <div class="cmd-item">
                        <code>top</code>
                        <span>Real-time process monitor</span>
                      </div>
                      <div class="cmd-item">
                        <code>htop</code>
                        <span>Enhanced process viewer</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="sysinfo-item">
                    <h4>Network Information</h4>
                    <div class="cmd-list">
                      <div class="cmd-item">
                        <code>netstat -tuln</code>
                        <span>Listening ports</span>
                      </div>
                      <div class="cmd-item">
                        <code>ss -tuln</code>
                        <span>Socket statistics</span>
                      </div>
                      <div class="cmd-item">
                        <code>ip addr show</code>
                        <span>Network interfaces</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="content-block">
                <h3>🔐 Security-Focused Commands</h3>
                <div class="security-commands">
                  <div class="sec-category">
                    <h4>🔍 Information Gathering</h4>
                    <div class="sec-cmd-grid">
                      <div class="sec-cmd">
                        <code>cat /etc/passwd</code>
                        <p>View user accounts</p>
                      </div>
                      <div class="sec-cmd">
                        <code>cat /etc/shadow</code>
                        <p>Password hashes (root only)</p>
                      </div>
                      <div class="sec-cmd">
                        <code>cat /etc/group</code>
                        <p>Group information</p>
                      </div>
                      <div class="sec-cmd">
                        <code>sudo -l</code>
                        <p>Sudo permissions</p>
                      </div>
                    </div>
                  </div>
                  
                  <div class="sec-category">
                    <h4>🚨 Log Analysis</h4>
                    <div class="sec-cmd-grid">
                      <div class="sec-cmd">
                        <code>tail -f /var/log/auth.log</code>
                        <p>Monitor authentication logs</p>
                      </div>
                      <div class="sec-cmd">
                        <code>grep "Failed password" /var/log/auth.log</code>
                        <p>Find failed login attempts</p>
                      </div>
                      <div class="sec-cmd">
                        <code>last</code>
                        <p>Recent user logins</p>
                      </div>
                      <div class="sec-cmd">
                        <code>w</code>
                        <p>Currently logged in users</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <style>
              .command-category {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                margin-top: 1rem;
              }

              .command-item {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #ea580c;
              }

              .cmd-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
              }

              .cmd-header code {
                background: #ea580c;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                font-size: 1.1rem;
              }

              .cmd-type {
                background: rgba(234, 88, 12, 0.2);
                color: #fb923c;
                padding: 0.25rem 0.75rem;
                border-radius: 1rem;
                font-size: 0.8rem;
                font-weight: 600;
              }

              .command-item p {
                color: #cbd5e1;
                margin-bottom: 1rem;
              }

              .cmd-examples {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
              }

              .cmd-example {
                background: rgba(0, 0, 0, 0.3);
                padding: 1rem;
                border-radius: 0.5rem;
                border-left: 4px solid #10b981;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 0.5rem;
              }

              .cmd-example code {
                background: #000;
                color: #00ff00;
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
              }

              .cmd-example span {
                color: #94a3b8;
                font-size: 0.9rem;
                font-style: italic;
              }

              .sysinfo-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1.5rem;
                margin-top: 1rem;
              }

              .sysinfo-item {
                background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                padding: 1.5rem;
                border-radius: 0.75rem;
                border: 2px solid #10b981;
              }

              .sysinfo-item h4 {
                color: #10b981;
                margin-bottom: 1rem;
                font-size: 1.1rem;
                text-align: center;
              }

              .cmd-list {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
              }

              .cmd-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem;
                background: rgba(16, 185, 129, 0.1);
                border-radius: 0.5rem;
                border: 1px solid rgba(16, 185, 129, 0.3);
              }

              .cmd-item code {
                background: #000;
                color: #00ff00;
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                font-weight: bold;
              }

              .cmd-item span {
                color: #6ee7b7;
                font-size: 0.8rem;
              }

              .security-commands {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                margin-top: 1rem;
              }

              .sec-category h4 {
                color: #ef4444;
                margin-bottom: 1rem;
                font-size: 1.2rem;
                text-align: center;
              }

              .sec-cmd-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
              }

              .sec-cmd {
                background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%);
                padding: 1rem;
                border-radius: 0.5rem;
                border: 2px solid #ef4444;
                text-align: center;
              }

              .sec-cmd code {
                background: #000;
                color: #00ff00;
                padding: 0.5rem;
                border-radius: 0.25rem;
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                display: block;
                margin-bottom: 0.5rem;
                word-break: break-all;
              }

              .sec-cmd p {
                color: rgba(255, 255, 255, 0.9);
                font-size: 0.8rem;
                margin: 0;
              }

              @media (max-width: 768px) {
                .cmd-example {
                  flex-direction: column;
                  align-items: flex-start;
                }
                
                .sysinfo-grid {
                  grid-template-columns: 1fr;
                }
                
                .sec-cmd-grid {
                  grid-template-columns: 1fr;
                }
                
                .cmd-item {
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 0.5rem;
                }
              }
            </style>
          `,
          duration: "3 hours",
          topics: ["File operations", "System information", "Process management", "Network commands", "Security commands"],
          practicalExercise: "Practice essential Linux commands in a terminal environment and create a cheat sheet of security-focused commands"
        }
      ]
    }
  ];

  const handleLessonComplete = (moduleId, lessonIndex) => {
    const key = `${moduleId}-${lessonIndex}`;
    setCompletedLessons(prev => ({
      ...prev,
      [key]: true
    }));
  };

  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-blue">
      {/* Enhanced Header */}
      <div className="relative h-64 bg-gradient-to-b from-cyber-blue/20 to-cyber-darker overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-cyber font-bold text-cyber-blue mb-4 animate-glow">
              🎓 CYBER TUTOR
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              CEH-Aligned Cybersecurity Learning Platform
            </p>
            <p className="text-sm text-cyber-green mt-2">
              Following EC-Council Certified Ethical Hacker Curriculum
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedModule ? (
          /* Enhanced Module Selection */
          <div>
            <h2 className="text-3xl font-cyber text-center mb-8">Choose Your CEH Learning Module</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningModules.map((module) => (
                <div 
                  key={module.id}
                  className={`cyber-card hover:border-${module.color} cursor-pointer transition-all transform hover:scale-105 group`}
                  onClick={() => setSelectedModule(module)}
                >
                  <div className={`text-${module.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyber-blue transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{module.description}</p>
                  
                  <div className="flex justify-between text-sm mb-4">
                    <span className={`px-3 py-1 bg-${module.color}/20 text-${module.color} rounded-full text-xs font-medium`}>
                      {module.difficulty}
                    </span>
                    <span className="text-gray-400 text-xs">{module.duration}</span>
                  </div>
                  
                  <div className="text-sm text-gray-400 flex items-center justify-between">
                    <span>{module.lessons.length} lessons</span>
                    <span className="text-xs bg-cyber-gray/30 px-2 py-1 rounded">CEH Module</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Enhanced Module Content */
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-cyber">{selectedModule.title}</h2>
                <p className="text-gray-400 mt-1">{selectedModule.description}</p>
              </div>
              <button 
                onClick={() => setSelectedModule(null)}
                className="cyber-button hover:scale-105 transition-transform"
              >
                ← Back to Modules
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Enhanced Lesson Navigation */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-semibold mb-4">Lessons</h3>
                <div className="space-y-3">
                  {selectedModule.lessons.map((lesson, index) => {
                    const isCompleted = completedLessons[`${selectedModule.id}-${index}`];
                    return (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg cursor-pointer transition-all hover:scale-102 ${
                          currentLesson === index 
                            ? `bg-${selectedModule.color}/20 border border-${selectedModule.color} shadow-lg` 
                            : 'bg-cyber-gray/30 hover:bg-cyber-gray/50 border border-transparent hover:border-cyber-blue/30'
                        }`}
                        onClick={() => setCurrentLesson(index)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm leading-tight">{lesson.title}</h4>
                          {isCompleted && <Award className="w-5 h-5 text-cyber-yellow animate-pulse" />}
                        </div>
                        <p className="text-xs text-gray-400 mb-2">{lesson.duration}</p>
                        <div className="w-full bg-cyber-gray/50 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              isCompleted ? 'bg-cyber-green w-full' : 
                              currentLesson === index ? `bg-${selectedModule.color} w-3/4` : 'bg-cyber-gray w-1/4'
                            }`}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Enhanced Lesson Content */}
              <div className="lg:col-span-3">
                <div className="cyber-card">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold">
                      {selectedModule.lessons[currentLesson].title}
                    </h3>
                    <span className="text-sm text-gray-400 bg-cyber-gray/30 px-3 py-1 rounded-full">
                      {selectedModule.lessons[currentLesson].duration}
                    </span>
                  </div>
                  
                  <div 
                    className="prose prose-invert max-w-none mb-8"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedModule.lessons[currentLesson].content 
                    }}
                  />
                  
                  {selectedModule.lessons[currentLesson].practicalExercise && (
                    <div className="bg-gradient-to-r from-cyber-orange/10 to-cyber-orange/5 border border-cyber-orange/30 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-cyber-orange mb-3 flex items-center text-lg">
                        <Target className="w-6 h-6 mr-2" />
                        Hands-On Lab Exercise
                      </h4>
                      <p className="text-gray-300">{selectedModule.lessons[currentLesson].practicalExercise}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center pt-6 border-t border-cyber-gray/30">
                    <button 
                      onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                      disabled={currentLesson === 0}
                      className="cyber-button disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                    >
                      ← Previous
                    </button>
                    
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLessonComplete(selectedModule.id, currentLesson)}
                        className={`cyber-button transition-all ${
                          completedLessons[`${selectedModule.id}-${currentLesson}`] 
                            ? 'bg-cyber-green/20 text-cyber-green border-cyber-green' 
                            : 'hover:scale-105'
                        }`}
                      >
                        {completedLessons[`${selectedModule.id}-${currentLesson}`] 
                          ? '✓ Completed' 
                          : 'Mark Complete'
                        }
                      </button>
                      
                      <span className="text-sm text-gray-400">
                        {currentLesson + 1} of {selectedModule.lessons.length}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => setCurrentLesson(Math.min(selectedModule.lessons.length - 1, currentLesson + 1))}
                      disabled={currentLesson === selectedModule.lessons.length - 1}
                      className="cyber-button disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberTutor;

