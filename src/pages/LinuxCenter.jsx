import React, { useState, useRef, useEffect } from 'react';
import { Terminal, BookOpen, Code, Search, Clock, CheckCircle } from 'lucide-react';

const LinuxCenter = () => {
  const [activeTab, setActiveTab] = useState('terminal');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const terminalRef = useRef(null);

  // Comprehensive Linux commands database
  const linuxCommands = [
    {
      id: 1,
      command: "ls",
      category: "File System",
      difficulty: "Beginner",
      description: "List directory contents with various formatting options",
      syntax: "ls [options] [directory]",
      examples: [
        { cmd: "ls", desc: "List files in current directory" },
        { cmd: "ls -la", desc: "List all files with detailed information" },
        { cmd: "ls -lh", desc: "List files with human-readable sizes" },
        { cmd: "ls -lt", desc: "List files sorted by modification time" },
        { cmd: "ls -lS", desc: "List files sorted by size" },
        { cmd: "ls -R", desc: "Recursive listing of subdirectories" }
      ],
      options: [
        { flag: "-l", desc: "Long format listing" },
        { flag: "-a", desc: "Show hidden files" },
        { flag: "-h", desc: "Human readable sizes" },
        { flag: "-R", desc: "Recursive listing" },
        { flag: "-t", desc: "Sort by modification time" },
        { flag: "-S", desc: "Sort by file size" }
      ],
      securityUse: "File system reconnaissance during penetration testing"
    },
    {
      id: 2,
      command: "find",
      category: "Search",
      difficulty: "Intermediate",
      description: "Search for files and directories based on various criteria",
      syntax: "find [path] [expression]",
      examples: [
        { cmd: "find / -name '*.conf' 2>/dev/null", desc: "Find all configuration files" },
        { cmd: "find /var/log -mtime -7", desc: "Find files modified in last 7 days" },
        { cmd: "find / -perm -4000 2>/dev/null", desc: "Find SUID files" },
        { cmd: "find / -type f -size +100M", desc: "Find large files over 100MB" },
        { cmd: "find /home -user john", desc: "Find files owned by user john" },
        { cmd: "find / -writable -type d 2>/dev/null", desc: "Find world-writable directories" }
      ],
      options: [
        { flag: "-name", desc: "Search by filename pattern" },
        { flag: "-type", desc: "Search by file type (f=file, d=directory)" },
        { flag: "-size", desc: "Search by file size" },
        { flag: "-mtime", desc: "Search by modification time" },
        { flag: "-perm", desc: "Search by permissions" },
        { flag: "-exec", desc: "Execute command on found files" }
      ],
      securityUse: "Critical for privilege escalation and file discovery"
    },
    {
      id: 3,
      command: "grep",
      category: "Text Processing",
      difficulty: "Intermediate",
      description: "Search text patterns in files using regular expressions",
      syntax: "grep [options] pattern [file...]",
      examples: [
        { cmd: "grep 'error' /var/log/syslog", desc: "Search for 'error' in system log" },
        { cmd: "grep -r 'password' /etc/", desc: "Recursively search for 'password'" },
        { cmd: "grep -v '#' config.txt", desc: "Show lines not containing '#'" },
        { cmd: "grep -i 'admin' users.txt", desc: "Case-insensitive search" },
        { cmd: "grep -n 'function' script.js", desc: "Show line numbers" },
        { cmd: "grep -E '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}' file.txt", desc: "Extract IP addresses" }
      ],
      options: [
        { flag: "-i", desc: "Case insensitive search" },
        { flag: "-r", desc: "Recursive search" },
        { flag: "-v", desc: "Invert match" },
        { flag: "-n", desc: "Show line numbers" },
        { flag: "-E", desc: "Extended regular expressions" },
        { flag: "-o", desc: "Only show matching part" }
      ],
      securityUse: "Log analysis and pattern matching for security investigations"
    },
    {
      id: 4,
      command: "netstat",
      category: "Network",
      difficulty: "Intermediate",
      description: "Display network connections, routing tables, and interface statistics",
      syntax: "netstat [options]",
      examples: [
        { cmd: "netstat -tuln", desc: "Show listening TCP and UDP ports" },
        { cmd: "netstat -an", desc: "Show all connections and listening ports" },
        { cmd: "netstat -rn", desc: "Show routing table" },
        { cmd: "netstat -i", desc: "Show network interface statistics" },
        { cmd: "netstat -p", desc: "Show process IDs and names" }
      ],
      options: [
        { flag: "-t", desc: "TCP connections" },
        { flag: "-u", desc: "UDP connections" },
        { flag: "-l", desc: "Listening ports only" },
        { flag: "-n", desc: "Show numerical addresses" },
        { flag: "-p", desc: "Show process information" },
        { flag: "-r", desc: "Show routing table" }
      ],
      securityUse: "Network reconnaissance and identifying running services"
    },
    {
      id: 5,
      command: "ps",
      category: "Process Management",
      difficulty: "Beginner",
      description: "Display information about running processes",
      syntax: "ps [options]",
      examples: [
        { cmd: "ps aux", desc: "Show all running processes" },
        { cmd: "ps -ef", desc: "Show all processes in full format" },
        { cmd: "ps -u username", desc: "Show processes for specific user" },
        { cmd: "ps --forest", desc: "Show process tree" },
        { cmd: "ps -eo pid,ppid,cmd,%mem,%cpu", desc: "Custom output format" }
      ],
      options: [
        { flag: "a", desc: "Show processes for all users" },
        { flag: "u", desc: "Show user-oriented format" },
        { flag: "x", desc: "Show processes without controlling terminal" },
        { flag: "-e", desc: "Show all processes" },
        { flag: "-f", desc: "Full format listing" }
      ],
      securityUse: "Process monitoring and identifying malicious processes"
    },
    {
      id: 6,
      command: "chmod",
      category: "Permissions",
      difficulty: "Beginner",
      description: "Change file and directory permissions",
      syntax: "chmod [options] mode file...",
      examples: [
        { cmd: "chmod 755 script.sh", desc: "Make script executable" },
        { cmd: "chmod +x file", desc: "Add execute permission" },
        { cmd: "chmod -w file", desc: "Remove write permission" },
        { cmd: "chmod u+rwx,g+rx,o+r file", desc: "Set specific permissions" },
        { cmd: "chmod -R 644 /var/www/", desc: "Recursively set permissions" }
      ],
      options: [
        { flag: "-R", desc: "Recursive operation" },
        { flag: "-v", desc: "Verbose output" },
        { flag: "-c", desc: "Report only changes" }
      ],
      securityUse: "Securing files and preventing unauthorized access"
    },
    {
      id: 7,
      command: "sudo",
      category: "Privilege Management",
      difficulty: "Intermediate",
      description: "Execute commands with elevated privileges",
      syntax: "sudo [options] command",
      examples: [
        { cmd: "sudo apt update", desc: "Update package list as root" },
        { cmd: "sudo -u username command", desc: "Run command as specific user" },
        { cmd: "sudo -l", desc: "List allowed commands" },
        { cmd: "sudo -s", desc: "Start shell as root" },
        { cmd: "sudo !!", desc: "Run previous command with sudo" }
      ],
      options: [
        { flag: "-u", desc: "Run as specified user" },
        { flag: "-l", desc: "List allowed commands" },
        { flag: "-s", desc: "Run shell" },
        { flag: "-i", desc: "Login shell" },
        { flag: "-v", desc: "Validate credentials" }
      ],
      securityUse: "Privilege escalation and administrative tasks"
    },
    {
      id: 8,
      command: "ss",
      category: "Network",
      difficulty: "Intermediate",
      description: "Modern replacement for netstat, shows socket statistics",
      syntax: "ss [options]",
      examples: [
        { cmd: "ss -tuln", desc: "Show listening TCP and UDP sockets" },
        { cmd: "ss -an", desc: "Show all sockets" },
        { cmd: "ss -p", desc: "Show process information" },
        { cmd: "ss -s", desc: "Show socket statistics summary" },
        { cmd: "ss -o state established", desc: "Show established connections" }
      ],
      options: [
        { flag: "-t", desc: "TCP sockets" },
        { flag: "-u", desc: "UDP sockets" },
        { flag: "-l", desc: "Listening sockets" },
        { flag: "-n", desc: "Don't resolve service names" },
        { flag: "-p", desc: "Show process information" },
        { flag: "-s", desc: "Show socket statistics" }
      ],
      securityUse: "Network monitoring and connection analysis"
    }
  ];

  const categories = ["all", "File System", "Network", "Text Processing", "Process Management", "Permissions", "Privilege Management", "Search"];

  // Filter commands based on category and search term
  const filteredCommands = linuxCommands.filter(cmd => {
    const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
    const matchesSearch = cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Terminal simulation
  const executeCommand = (command) => {
    const newEntry = {
      id: Date.now(),
      command: command,
      output: getCommandOutput(command),
      timestamp: new Date().toLocaleTimeString()
    };
    
    setTerminalHistory(prev => [...prev, newEntry]);
    setCurrentInput('');
  };

  const getCommandOutput = (command) => {
    const cmd = command.split(' ')[0];
    const outputs = {
      'ls': 'Desktop  Documents  Downloads  Pictures  Videos\nconfig.txt  script.sh  data.log',
      'pwd': '/home/user',
      'whoami': 'user',
      'date': new Date().toString(),
      'uname': 'Linux cybersec-lab 5.4.0-74-generic #83-Ubuntu SMP Sat May 8 02:35:39 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux',
      'id': 'uid=1000(user) gid=1000(user) groups=1000(user),4(adm),24(cdrom),27(sudo)',
      'ps': 'PID TTY          TIME CMD\n1234 pts/0    00:00:01 bash\n5678 pts/0    00:00:00 ps',
      'netstat': 'Active Internet connections (only servers)\nProto Recv-Q Send-Q Local Address           Foreign Address         State\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN\ntcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN',
      'help': 'Available commands: ls, pwd, whoami, date, uname, id, ps, netstat, find, grep, chmod, sudo, ss\nType any command to practice!',
      'clear': ''
    };
    
    if (cmd === 'clear') {
      setTerminalHistory([]);
      return '';
    }
    
    return outputs[cmd] || `Command '${cmd}' not found. Type 'help' for available commands.`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (currentInput.trim()) {
        executeCommand(currentInput.trim());
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-green">
      {/* Enhanced Header */}
      <div className="relative h-80 bg-gradient-to-b from-cyber-green/20 via-cyber-blue/10 to-cyber-darker overflow-hidden">
        <div className="absolute inset-0">
          <div className="cyber-grid-bg h-full opacity-20 animate-pulse"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyber-green to-cyber-blue flex items-center justify-center animate-bounce">
                <Terminal className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-cyber font-bold text-cyber-green mb-6 animate-glow">
              🖥️ LINUX COMMAND CENTER
            </h1>
            <p className="text-2xl text-cyber-blue mb-4">
              Master Linux Through Interactive Learning
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From basic file operations to advanced cybersecurity techniques - 
              your complete Linux command line training platform
            </p>
            
            {/* Simple Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-cyber-dark/60 rounded-lg p-4 border border-cyber-green/30">
                <div className="text-2xl font-bold text-cyber-green">{linuxCommands.length}</div>
                <div className="text-sm text-gray-400">Commands Available</div>
              </div>
              <div className="bg-cyber-dark/60 rounded-lg p-4 border border-cyber-blue/30">
                <div className="text-2xl font-bold text-cyber-blue">{categories.length - 1}</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="bg-cyber-dark/60 rounded-lg p-4 border border-cyber-yellow/30">
                <div className="text-2xl font-bold text-cyber-yellow">24/7</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="cyber-card mb-8">
          <div className="flex flex-wrap gap-2">
            <TabButton 
              active={activeTab === 'terminal'} 
              onClick={() => setActiveTab('terminal')}
              icon={<Terminal className="w-5 h-5" />}
              label="Interactive Terminal"
              badge="Live"
            />
            <TabButton 
              active={activeTab === 'commands'} 
              onClick={() => setActiveTab('commands')}
              icon={<Code className="w-5 h-5" />}
              label="Command Reference"
              badge={`${linuxCommands.length}`}
            />
          </div>
        </div>

        {/* Interactive Terminal Tab */}
        {activeTab === 'terminal' && (
          <div className="cyber-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-cyber font-bold">Interactive Linux Terminal</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
                  <span className="text-sm text-cyber-green">Live Terminal</span>
                </div>
                <button 
                  onClick={() => setTerminalHistory([])}
                  className="cyber-button text-sm"
                >
                  Clear Terminal
                </button>
              </div>
            </div>
            
            <div className="bg-black rounded-lg p-6 font-mono text-sm">
              <div 
                ref={terminalRef}
                className="h-96 overflow-y-auto mb-4 space-y-2"
              >
                <div className="text-cyber-green">
                  Welcome to Cyberverse Linux Terminal! Type 'help' for available commands.
                </div>
                
                {terminalHistory.map((entry) => (
                  <div key={entry.id} className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-cyber-blue">user@cybersec-lab:~$</span>
                      <span className="text-white">{entry.command}</span>
                      <span className="text-gray-500 text-xs ml-auto">{entry.timestamp}</span>
                    </div>
                    {entry.output && (
                      <div className="text-cyber-green whitespace-pre-line pl-4">
                        {entry.output}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-cyber-blue">user@cybersec-lab:~$</span>
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-transparent text-white outline-none"
                  placeholder="Type a command..."
                  autoFocus
                />
              </div>
            </div>
            
            {/* Quick Commands */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Quick Commands</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['ls -la', 'pwd', 'whoami', 'ps aux', 'netstat -tuln', 'find / -name "*.conf"', 'grep -r "error"', 'sudo -l'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="bg-cyber-gray/30 hover:bg-cyber-gray/50 px-3 py-2 rounded text-sm font-mono transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Command Reference Tab */}
        {activeTab === 'commands' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <h2 className="text-3xl font-cyber font-bold">Command Reference</h2>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search commands..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-cyber-gray/30 border border-cyber-gray rounded-lg focus:border-cyber-green outline-none text-white"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-cyber-gray/30 border border-cyber-gray rounded-lg focus:border-cyber-green outline-none text-white"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="bg-cyber-darker">
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCommands.map((cmd) => (
                <div key={cmd.id} className="cyber-card hover:border-cyber-green/60 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-cyber-green/20 text-cyber-green px-3 py-1 rounded font-mono font-bold">
                        {cmd.command}
                      </div>
                      <div className={`px-2 py-1 rounded text-xs ${
                        cmd.difficulty === 'Beginner' ? 'bg-cyber-blue/20 text-cyber-blue' :
                        cmd.difficulty === 'Intermediate' ? 'bg-cyber-yellow/20 text-cyber-yellow' :
                        'bg-cyber-red/20 text-cyber-red'
                      }`}>
                        {cmd.difficulty}
                      </div>
                    </div>
                    <div className="bg-cyber-purple/20 text-cyber-purple px-2 py-1 rounded text-xs">
                      {cmd.category}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{cmd.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-cyber-blue mb-2">Syntax:</h4>
                    <code className="bg-black/50 text-cyber-green px-3 py-1 rounded font-mono text-sm">
                      {cmd.syntax}
                    </code>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-cyber-orange mb-2">Examples:</h4>
                    <div className="space-y-2">
                      {cmd.examples.slice(0, 3).map((example, index) => (
                        <div key={index} className="bg-cyber-gray/20 p-3 rounded">
                          <code className="text-cyber-green font-mono text-sm block mb-1">
                            {example.cmd}
                          </code>
                          <p className="text-gray-400 text-xs">{example.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-cyber-pink mb-2">Security Use:</h4>
                    <p className="text-gray-300 text-sm">{cmd.securityUse}</p>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setActiveTab('terminal');
                      setCurrentInput(cmd.command + ' ');
                    }}
                    className="cyber-button w-full"
                  >
                    Try in Terminal
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label, badge }) => {
  return (
    <button
      className={`flex items-center px-6 py-3 text-sm font-medium border-b-2 focus:outline-none transition-all relative ${
        active 
          ? 'border-cyber-green text-cyber-green bg-cyber-green/10' 
          : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300 hover:bg-cyber-gray/20'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{label}</span>
      {badge && (
        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
          active ? 'bg-cyber-green text-cyber-darker' : 'bg-cyber-gray text-gray-300'
        }`}>
          {badge}
        </span>
      )}
    </button>
  );
};

export default LinuxCenter;
