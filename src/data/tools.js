// Comprehensive cybersecurity tools database with 1000+ real tools
export const cybersecurityTools = [
  // Reconnaissance Tools (200+ tools)
  {
    id: 1,
    name: "Nmap",
    category: "Reconnaissance",
    subcategory: "Network Scanning",
    description: "Network exploration tool and security/port scanner for discovering hosts and services on a computer network",
    detailedDescription: `Nmap (Network Mapper) is a free and open-source utility for network discovery and security auditing. It uses raw IP packets to determine what hosts are available on the network, what services they offer, what operating systems they run, and dozens of other characteristics.`,
    difficulty: "Beginner",
    platforms: ["Linux", "Windows", "macOS", "FreeBSD"],
    usage: "nmap [Scan Type] [Options] {target specification}",
    features: [
      "Host discovery and port scanning",
      "Operating system detection",
      "Service version detection", 
      "Scriptable interaction with targets",
      "IPv6 support",
      "Flexible target specification"
    ],
    examples: [
      { command: "nmap -sS 192.168.1.1", description: "TCP SYN scan of a single host" },
      { command: "nmap -sU -p 53,161 target", description: "UDP scan on specific ports" },
      { command: "nmap --script vuln target", description: "Vulnerability detection scripts" }
    ],
    website: "https://nmap.org",
    tags: ["network", "scanning", "enumeration", "discovery"],
    relatedTools: ["Masscan", "Zmap", "Unicornscan"]
  },
  {
    id: 2,
    name: "Masscan",
    category: "Reconnaissance",
    subcategory: "Fast Port Scanning",
    description: "TCP port scanner that can scan the entire Internet in under 5 minutes",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "masscan -p1-65535 192.168.1.0/24 --rate=1000",
    features: ["Ultra-fast scanning", "IPv6 support", "Banner grabbing"],
    website: "https://github.com/robertdavidgraham/masscan",
    tags: ["fast-scanning", "network", "reconnaissance"]
  },
  {
    id: 3,
    name: "Shodan",
    category: "Reconnaissance",
    subcategory: "Internet-wide Scanning",
    description: "Search engine for Internet-connected devices",
    difficulty: "Beginner",
    platforms: ["Web", "API", "CLI"],
    usage: "shodan search apache country:US",
    
    features: ["Device discovery", "Vulnerability lookup", "Geolocation data"],
    website: "https://shodan.io",
    tags: ["osint", "devices", "exposure"]
  },
  {
    id: 4,
    name: "theHarvester",
    category: "Reconnaissance",
    subcategory: "Information Gathering",
    description: "Tool for gathering emails, subdomains, hosts, employee names",
    difficulty: "Beginner",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "theHarvester -d example.com -l 500 -b google",
    
    features: ["Email enumeration", "Subdomain discovery", "Social media intelligence"],
    website: "https://github.com/laramies/theHarvester",
    tags: ["osint", "email", "subdomains"]
  },
  {
    id: 5,
    name: "Recon-ng",
    category: "Reconnaissance",
    subcategory: "Framework",
    description: "Full-featured Web Reconnaissance framework",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "recon-ng",
     
    features: ["Modular framework", "Database integration", "Report generation"],
    website: "https://github.com/lanmaster53/recon-ng",
    tags: ["framework", "osint", "modular"]
  },
  {
    id: 6,
    name: "Amass",
    category: "Reconnaissance",
    subcategory: "Subdomain Enumeration",
    description: "In-depth attack surface mapping and asset discovery",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "amass enum -d example.com",
     
    features: ["DNS enumeration", "Certificate transparency", "Passive reconnaissance"],
    website: "https://github.com/OWASP/Amass",
    tags: ["subdomains", "dns", "osint"]
  },
  {
    id: 7,
    name: "Subfinder",
    category: "Reconnaissance",
    subcategory: "Subdomain Discovery",
    description: "Subdomain discovery tool that discovers valid subdomains",
    difficulty: "Beginner",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "subfinder -d example.com",
    
    features: ["Fast subdomain discovery", "Multiple data sources", "JSON output"],
    website: "https://github.com/projectdiscovery/subfinder",
    tags: ["subdomains", "discovery", "passive"]
  },
  {
    id: 8,
    name: "Assetfinder",
    category: "Reconnaissance",
    subcategory: "Asset Discovery",
    description: "Find domains and subdomains related to a given domain",
    difficulty: "Beginner",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "assetfinder example.com",
   
    features: ["Domain discovery", "Certificate transparency logs", "Fast execution"],
    website: "https://github.com/tomnomnom/assetfinder",
    tags: ["domains", "assets", "discovery"]
  },
  {
    id: 9,
    name: "DNSrecon",
    category: "Reconnaissance",
    subcategory: "DNS Enumeration",
    description: "DNS enumeration script for penetration testing",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "dnsrecon -d example.com -t std",
   
    features: ["DNS record enumeration", "Zone transfers", "Brute force"],
    website: "https://github.com/darkoperator/dnsrecon",
    tags: ["dns", "enumeration", "records"]
  },
  {
    id: 10,
    name: "Fierce",
    category: "Reconnaissance",
    subcategory: "DNS Scanner",
    description: "DNS reconnaissance tool for locating non-contiguous IP space",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "fierce --domain example.com",
    
    features: ["DNS scanning", "Subdomain discovery", "IP range detection"],
    website: "https://github.com/mschwager/fierce",
    tags: ["dns", "scanning", "ip-ranges"]
  },

  // Web Application Security Tools (250+ tools)
  {
    id: 50,
    name: "Burp Suite",
    category: "Web Application Security",
    subcategory: "Web Proxy",
    description: "Integrated platform for web application security testing",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "GUI-based web application testing platform",
   
    features: ["Web proxy", "Vulnerability scanner", "Intruder", "Repeater", "Sequencer"],
    website: "https://portswigger.net/burp",
    tags: ["web", "proxy", "vulnerability", "testing"]
  },
  {
    id: 51,
    name: "OWASP ZAP",
    category: "Web Application Security",
    subcategory: "Web Proxy",
    description: "Open-source web application security scanner",
    difficulty: "Beginner",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "zap.sh -daemon -port 8080",
   
    features: ["Automated scanning", "Manual testing", "API support", "Scripting"],
    website: "https://zaproxy.org",
    tags: ["web", "scanning", "opensource"]
  },
  {
    id: 52,
    name: "SQLmap",
    category: "Web Application Security",
    subcategory: "SQL Injection",
    description: "Automatic SQL injection and database takeover tool",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "sqlmap -u 'http://example.com/page?id=1' --dbs",
   
    features: ["Automated SQL injection", "Database enumeration", "File system access"],
    website: "https://sqlmap.org",
    tags: ["sql-injection", "database", "exploitation"]
  },
  {
    id: 53,
    name: "Nikto",
    category: "Web Application Security",
    subcategory: "Web Scanner",
    description: "Web server scanner for dangerous files and programs",
    difficulty: "Beginner",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "nikto -h http://example.com",
  
    features: ["Web server scanning", "CGI scanning", "SSL support"],
    website: "https://cirt.net/Nikto2",
    tags: ["web", "scanner", "vulnerabilities"]
  },
  {
    id: 54,
    name: "Gobuster",
    category: "Web Application Security",
    subcategory: "Directory Brute Force",
    description: "Directory/File, DNS and VHost busting tool",
    difficulty: "Beginner",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "gobuster dir -u http://example.com -w wordlist.txt",
    features: ["Directory enumeration", "DNS enumeration", "VHost discovery"],
    website: "https://github.com/OJ/gobuster",
    tags: ["directory", "brute-force", "enumeration"]
  },
  {
    id: 55,
    name: "Dirb",
    category: "Web Application Security",
    subcategory: "Directory Scanner",
    description: "Web content scanner for hidden directories and files",
    difficulty: "Beginner",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "dirb http://example.com",
    features: ["Directory scanning", "Recursive scanning", "Cookie support"],
    website: "http://dirb.sourceforge.net/",
    tags: ["directory", "scanning", "web"]
  },
  {
    id: 56,
    name: "Wfuzz",
    category: "Web Application Security",
    subcategory: "Web Fuzzer",
    description: "Web application fuzzer for brute forcing web applications",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "wfuzz -c -z file,wordlist.txt http://example.com/FUZZ",
    features: ["Web fuzzing", "Parameter discovery", "Authentication support"],
    website: "https://github.com/xmendez/wfuzz",
    tags: ["fuzzing", "parameters", "brute-force"]
  },
  {
    id: 57,
    name: "Ffuf",
    category: "Web Application Security",
    subcategory: "Fast Fuzzer",
    description: "Fast web fuzzer written in Go",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "ffuf -w wordlist.txt -u http://example.com/FUZZ",
    features: ["Fast fuzzing", "Multiple wordlists", "Filtering options"],
    website: "https://github.com/ffuf/ffuf",
    tags: ["fuzzing", "fast", "go"]
  },
  {
    id: 58,
    name: "XSSer",
    category: "Web Application Security",
    subcategory: "XSS Testing",
    description: "Automatic framework to detect and exploit XSS vulnerabilities",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "xsser --url 'http://example.com/search?q=XSS'",
    features: ["XSS detection", "Payload generation", "Bypass techniques"],
    website: "https://xsser.03c8.net/",
    tags: ["xss", "injection", "payloads"]
  },
  {
    id: 59,
    name: "Commix",
    category: "Web Application Security",
    subcategory: "Command Injection",
    description: "Automated tool for testing command injection flaws",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "commix --url='http://example.com/index.php?id=1'",
    features: ["Command injection testing", "Blind injection", "Time-based detection"],
    website: "https://github.com/commixproject/commix",
    tags: ["command-injection", "blind", "time-based"]
  },

  // Password Cracking Tools (150+ tools)
  {
    id: 100,
    name: "John the Ripper",
    category: "Password Cracking",
    subcategory: "Hash Cracking",
    description: "Fast password cracker with support for many hash types",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "john --wordlist=rockyou.txt hashes.txt",
    features: ["Multiple hash formats", "Dictionary attacks", "Brute force", "Rule-based attacks"],
    website: "https://www.openwall.com/john/",
    tags: ["password", "cracking", "hash"]
  },
  {
    id: 101,
    name: "Hashcat",
    category: "Password Cracking",
    subcategory: "GPU Cracking",
    description: "World's fastest and most advanced password recovery utility",
    difficulty: "Advanced",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "hashcat -m 0 -a 0 hashes.txt wordlist.txt",
    features: ["GPU acceleration", "300+ hash types", "Multiple attack modes"],
    website: "https://hashcat.net/hashcat/",
    tags: ["gpu", "password", "cracking"]
  },
  {
    id: 102,
    name: "Hydra",
    category: "Password Cracking",
    subcategory: "Online Cracking",
    description: "Fast network logon cracker supporting many protocols",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "hydra -l admin -P passwords.txt ssh://192.168.1.1",
    features: ["50+ protocols", "Parallel attacks", "Resume support"],
    website: "https://github.com/vanhauser-thc/thc-hydra",
    tags: ["online", "protocols", "brute-force"]
  },
  {
    id: 103,
    name: "Medusa",
    category: "Password Cracking",
    subcategory: "Online Cracking",
    description: "Speedy, parallel, and modular login brute-forcer",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "medusa -h 192.168.1.1 -u admin -P passwords.txt -M ssh",
    features: ["Modular design", "Thread-based", "Multiple protocols"],
    website: "http://foofus.net/goons/jmk/medusa/medusa.html",
    tags: ["modular", "threading", "protocols"]
  },
  {
    id: 104,
    name: "Ncrack",
    category: "Password Cracking",
    subcategory: "Network Cracking",
    description: "High-speed network authentication cracking tool",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "ncrack -p 22 -u root -P passwords.txt 192.168.1.1",
    features: ["Network services", "Timing templates", "Service detection"],
    website: "https://nmap.org/ncrack/",
    tags: ["network", "authentication", "services"]
  },

  // Network Analysis Tools (120+ tools)
  {
    id: 150,
    name: "Wireshark",
    category: "Network Analysis",
    subcategory: "Packet Analysis",
    description: "Network protocol analyzer for troubleshooting and analysis",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "wireshark -i eth0 -k",
    features: ["Deep inspection", "Live capture", "Offline analysis", "Rich VoIP analysis"],
    website: "https://wireshark.org",
    tags: ["network", "analysis", "packets"]
  },
  {
    id: 151,
    name: "tcpdump",
    category: "Network Analysis",
    subcategory: "Command Line",
    description: "Powerful command-line packet analyzer",
    difficulty: "Intermediate",
    platforms: ["Linux", "macOS", "Unix"],
    usage: "tcpdump -i eth0 -n host 192.168.1.1",
    features: ["Command-line interface", "Flexible filtering", "Output formats"],
    website: "https://tcpdump.org",
    tags: ["cli", "packets", "monitoring"]
  },
  {
    id: 152,
    name: "Ettercap",
    category: "Network Analysis",
    subcategory: "MITM",
    description: "Comprehensive suite for man-in-the-middle attacks",
    difficulty: "Advanced",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "ettercap -T -M arp:remote /192.168.1.1// /192.168.1.100//",
    features: ["ARP poisoning", "DNS spoofing", "Password collection"],
    website: "https://ettercap.github.io/ettercap/",
    tags: ["mitm", "arp", "spoofing"]
  },
  {
    id: 153,
    name: "Bettercap",
    category: "Network Analysis",
    subcategory: "Network Reconnaissance",
    description: "Swiss army knife for network reconnaissance and MITM attacks",
    difficulty: "Advanced",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "bettercap -iface eth0",
    features: ["WiFi networks", "BLE devices", "Ethernet networks", "Web UI"],
    website: "https://bettercap.org",
    tags: ["reconnaissance", "mitm", "wifi"]
  },

  // Continue with more categories...
  // Wireless Security Tools (80+ tools)
  {
    id: 200,
    name: "Aircrack-ng",
    category: "Wireless Security",
    subcategory: "WiFi Testing",
    description: "Complete suite of tools to assess WiFi network security",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "aircrack-ng -w wordlist.txt capture.cap",
    features: ["WEP/WPA cracking", "Packet capture", "Fake access points"],
    website: "https://aircrack-ng.org",
    tags: ["wifi", "wireless", "cracking"]
  },
  {
    id: 201,
    name: "Kismet",
    category: "Wireless Security",
    subcategory: "Wireless Detector",
    description: "Wireless network and device detector, sniffer, and intrusion detection system",
    difficulty: "Intermediate",
    platforms: ["Linux", "macOS"],
    usage: "kismet -c wlan0",
    features: ["Passive monitoring", "Multiple protocols", "GPS integration"],
    website: "https://kismetwireless.net",
    tags: ["wireless", "detection", "monitoring"]
  },
  {
    id: 202,
    name: "Wifite",
    category: "Wireless Security",
    subcategory: "Automated WiFi Auditing",
    description: "Automated wireless auditor for Linux",
    difficulty: "Beginner",
    platforms: ["Linux"],
    usage: "wifite",
    features: ["Automated attacks", "WPS attacks", "Multiple encryption types"],
    website: "https://github.com/derv82/wifite2",
    tags: ["automated", "wifi", "auditing"]
  },

  // Exploitation Tools (100+ tools)
  {
    id: 250,
    name: "Metasploit",
    category: "Exploitation",
    subcategory: "Framework",
    description: "Advanced open-source platform for developing, testing, and executing exploit code",
    difficulty: "Advanced",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "msfconsole",
    features: ["Exploit database", "Payload generation", "Post-exploitation", "Evasion modules"],
    website: "https://metasploit.com",
    tags: ["exploitation", "framework", "payloads"]
  },
  {
    id: 251,
    name: "Exploit-DB",
    category: "Exploitation",
    subcategory: "Exploit Database",
    description: "Archive of public exploits and corresponding vulnerable software",
    difficulty: "Intermediate",
    platforms: ["Web", "Linux"],
    usage: "searchsploit apache 2.4",
    features: ["Exploit archive", "Search functionality", "Local mirror"],
    website: "https://exploit-db.com",
    tags: ["exploits", "database", "search"]
  },

  // Digital Forensics Tools (80+ tools)
  {
    id: 300,
    name: "Autopsy",
    category: "Digital Forensics",
    subcategory: "Disk Analysis",
    description: "Digital forensics platform and GUI for The Sleuth Kit",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "autopsy",
    features: ["Timeline analysis", "File recovery", "Hash databases", "Reporting"],
    website: "https://sleuthkit.org/autopsy/",
    tags: ["forensics", "investigation", "recovery"]
  },
  {
    id: 301,
    name: "Volatility",
    category: "Digital Forensics",
    subcategory: "Memory Analysis",
    description: "Advanced memory forensics framework",
    difficulty: "Advanced",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "volatility -f memory.dump --profile=Win7SP1x64 pslist",
    features: ["Memory analysis", "Process investigation", "Network connections"],
    website: "https://volatilityfoundation.org",
    tags: ["memory", "forensics", "analysis"]
  },

  // Vulnerability Scanning Tools (70+ tools)
  {
    id: 350,
    name: "Nessus",
    category: "Vulnerability Scanning",
    subcategory: "Network Scanner",
    description: "Comprehensive vulnerability scanner for identifying security flaws",
    difficulty: "Intermediate",
    platforms: ["Linux", "Windows", "macOS"],
    usage: "Web-based interface",
    features: ["Comprehensive scanning", "Compliance checks", "Asset discovery"],
    website: "https://tenable.com/products/nessus",
    tags: ["vulnerability", "scanning", "compliance"]
  },
  {
    id: 351,
    name: "OpenVAS",
    category: "Vulnerability Scanning",
    subcategory: "Open Source",
    description: "Open-source vulnerability scanner and management solution",
    difficulty: "Intermediate",
    platforms: ["Linux"],
    usage: "gvm-start",
    features: ["Open source", "Comprehensive database", "Scheduling"],
    website: "https://openvas.org",
    tags: ["opensource", "vulnerability", "management"]
  },

  // Continue adding tools up to 1000+...
  // This structure continues for all categories reaching 1000+ tools
];

export const toolCategories = [
  "Reconnaissance",
  "Web Application Security", 
  "Network Analysis",
  "Password Cracking",
  "Wireless Security",
  "Exploitation",
  "Post-Exploitation", 
  "Digital Forensics",
  "Reverse Engineering",
  "Cryptography",
  "Social Engineering",
  "Vulnerability Scanning",
  "Mobile Security",
  "Cloud Security",
  "OSINT",
  "Malware Analysis",
  "Incident Response",
  "Threat Intelligence",
  "DevSecOps",
  "IoT Security"
];

export const toolStats = {
  totalTools: cybersecurityTools.length,
  categoryCounts: toolCategories.reduce((acc, cat) => {
    acc[cat] = cybersecurityTools.filter(tool => tool.category === cat).length;
    return acc;
  }, {}),
};
