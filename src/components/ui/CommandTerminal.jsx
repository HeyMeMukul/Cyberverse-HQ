import React, { useState, useEffect, useRef } from 'react';
import { linuxCommands } from '../../data/commands';
import { useGameState } from '../../hooks/useGameState';




const CommandTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'LINUX COMMAND CENTER v1.0.0' },
    { type: 'system', content: 'Type "help" to see available commands.' },
    { type: 'prompt', content: '' }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [inputHistory, setInputHistory] = useState([]);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const { addXp } = useGameState();

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal is clicked
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle key press (up/down arrow for history)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' && historyIndex < inputHistory.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setInput(inputHistory[inputHistory.length - 1 - historyIndex]);
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(inputHistory[inputHistory.length - 1 - historyIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  // Process command when Enter is pressed
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      processCommand();
    }
  };

  // Process and execute command
  const processCommand = () => {
    const trimmedInput = input.trim();
    
    if (trimmedInput) {
      // Add command to history
      setHistory([
        ...history,
        { type: 'user', content: trimmedInput }
      ]);
      
      // Add to input history for up/down navigation
      setInputHistory([...inputHistory, trimmedInput]);
      setHistoryIndex(-1);
      
      // Process command
      const commandResult = executeCommand(trimmedInput);
      
      // Add command result to history
      setHistory(prev => [
        ...prev,
        ...commandResult,
        { type: 'prompt', content: '' }
      ]);
      
      // Clear input
      setInput('');
    }
  };

  // Execute command and return result
  const executeCommand = (cmd) => {
    const args = cmd.split(' ');
    const command = args[0].toLowerCase();
    
    // Basic command handling
    switch (command) {
      case 'help':
        return [
          { type: 'system', content: 'Available commands:' },
          { type: 'system', content: '  help - Show this help message' },
          { type: 'system', content: '  clear - Clear the terminal' },
          { type: 'system', content: '  ls - List available commands by category' },
          { type: 'system', content: '  man <command> - Show manual for a command' },
          { type: 'system', content: '  <linux command> - Execute a Linux command' },
          { type: 'system', content: '  practice - Start practice mode' }
        ];
        
      case 'clear':
        setHistory([]);
        return [];
        
      case 'ls':
        // Group commands by category
        const categories = {};
        linuxCommands.forEach(cmd => {
          if (!categories[cmd.category]) {
            categories[cmd.category] = [];
          }
          categories[cmd.category].push(cmd.command);
        });
        
        return [
          { type: 'system', content: 'Available Linux commands by category:' },
          ...Object.entries(categories).map(([category, commands]) => ({
            type: 'system', 
            content: `${category}: ${commands.join(', ')}`
          }))
        ];
        
      case 'man':
        if (args.length < 2) {
          return [{ type: 'error', content: 'Usage: man <command>' }];
        }
        
        const commandName = args[1];
        const commanddata = linuxCommands.find(c => c.command === commandName);
        
        if (!commanddata) {
          return [{ type: 'error', content: `No manual entry for ${commandName}` }];
        }
        
        return [
          { type: 'system', content: `MANUAL: ${commandData.command}` },
          { type: 'system', content: `Description: ${commandData.description}` },
          { type: 'system', content: `Syntax: ${commandData.syntax}` },
          { type: 'system', content: `Difficulty: ${commandData.difficulty}` },
          { type: 'system', content: 'Examples:' },
          ...commandData.examples.map(ex => ({
            type: 'system', 
            content: `  ${ex.command} - ${ex.description}`
          })),
          { type: 'system', content: 'Options:' },
          ...(commandData.options || []).map(opt => ({
            type: 'system', 
            content: `  ${opt.flag} - ${opt.description}`
          })),
          { type: 'system', content: `XP Reward: ${commandData.xpReward}` }
        ];
        
      case 'practice':
        return [
          { type: 'system', content: 'Starting practice mode...' },
          { type: 'system', content: 'Complete the following challenges:' },
          { type: 'challenge', content: 'List all files in current directory (Hint: use ls)' }
        ];
        
      default:
        // Try to find the command in our database
        const commandData = linuxCommands.find(c => c.command === command);
        
        if (commandData) {
          // Award XP for using a valid command
          addXp(commandData.xpReward);
          
          return [
            { type: 'success', content: `Command "${command}" executed successfully.` },
            { type: 'system', content: `You earned ${commandData.xpReward} XP!` },
            { type: 'output', content: `This is a simulation of the ${command} command.` },
            { type: 'output', content: 'In a real Linux environment, this would:' },
            { type: 'output', content: commandData.description },
            { type: 'system', content: 'Try "man ' + command + '" for more information.' }
          ];
        }
        
        return [{ type: 'error', content: `Command not found: ${command}` }];
    }
  };

  return (
    <div 
      className="terminal w-full h-full rounded-lg overflow-hidden border border-cyber-green/50 shadow-lg"
      onClick={focusInput}
    >
      <div className="terminal-header bg-cyber-dark border-b border-cyber-green/30 py-2 px-4">
        <div className="flex items-center justify-between">
          <div className="text-cyber-green font-mono text-sm">CYBERVERSE TERMINAL</div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-cyber-red"></div>
            <div className="w-3 h-3 rounded-full bg-cyber-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
          </div>
        </div>
      </div>
      
      <div 
        ref={terminalRef}
        className="terminal-body bg-black text-cyber-green font-mono text-sm p-4 h-[calc(100%-2.5rem)] overflow-y-auto"
      >
        {history.map((entry, index) => (
          <div key={index} className={`mb-2 ${entry.type === 'user' ? 'text-cyber-blue' : ''}`}>
            {entry.type === 'prompt' ? (
              <div className="flex">
                <span className="text-cyber-green">user@cyberverse:~$</span>
                {index === history.length - 1 ? (
                  <div className="flex-grow ml-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-transparent text-cyber-blue border-none outline-none"
                      autoFocus
                    />
                  </div>
                ) : null}
              </div>
            ) : entry.type === 'user' ? (
              <div>
                <span className="text-cyber-green">user@cyberverse:~$</span>
                <span className="ml-2">{entry.content}</span>
              </div>
            ) : entry.type === 'error' ? (
              <div className="text-cyber-red">{entry.content}</div>
            ) : entry.type === 'success' ? (
              <div className="text-cyber-blue">{entry.content}</div>
            ) : entry.type === 'challenge' ? (
              <div className="bg-cyber-green/10 p-2 border-l-4 border-cyber-green">
                {entry.content}
              </div>
            ) : (
              <div>{entry.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandTerminal;
