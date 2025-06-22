import React, { useState } from 'react';
import { ExternalLink, Download, Star, BookOpen, Terminal, Award } from 'lucide-react';
import { useGameState } from '../../hooks/useGameState';

const ToolCard = ({ tool }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setToolExplored, toolsExplored } = useGameState();
  const isExplored = toolsExplored[tool.id];

  const handleExplore = () => {
    if (!isExplored) {
      setToolExplored(tool.id);
    }
    setIsExpanded(!isExpanded);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-cyber-green border-cyber-green';
      case 'Intermediate': return 'text-cyber-yellow border-cyber-yellow';
      case 'Advanced': return 'text-cyber-orange border-cyber-orange';
      case 'Expert': return 'text-cyber-red border-cyber-red';
      default: return 'text-cyber-blue border-cyber-blue';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Reconnaissance': return '🔍';
      case 'Web Application Security': return '🌐';
      case 'Network Analysis': return '📡';
      case 'Password Cracking': return '🔐';
      case 'Wireless Security': return '📶';
      case 'Exploitation': return '💥';
      case 'Digital Forensics': return '🔬';
      case 'Reverse Engineering': return '⚙️';
      case 'Cryptography': return '🔒';
      case 'Social Engineering': return '🎭';
      case 'Vulnerability Scanning': return '🛡️';
      default: return '🔧';
    }
  };

  return (
    <div className={`tool-card transition-all duration-300 ${isExpanded ? 'row-span-2' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{getCategoryIcon(tool.category)}</span>
          <div>
            <h3 className="text-lg font-bold text-cyber-blue">{tool.name}</h3>
            <p className="text-sm text-gray-400">{tool.subcategory}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded text-xs border ${getDifficultyColor(tool.difficulty)}`}>
            {tool.difficulty}
          </span>
          {isExplored && (
            <div className="text-cyber-green" title="Explored">
              <Award className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-gray-300 mb-4 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {tool.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs rounded">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-sm">
          <span className="text-gray-400">Platforms: </span>
          <span className="text-cyber-green">{tool.platforms.join(', ')}</span>
        </div>
        
      </div>

      {!isExpanded ? (
        <button
          onClick={handleExplore}
          className="w-full cyber-button text-sm py-2"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          {isExplored ? 'View Details' : 'Explore Tool'}
        </button>
      ) : (
        <div className="space-y-4">
          {/* Usage Example */}
          {tool.usage && (
            <div>
              <h4 className="text-sm font-semibold text-cyber-green mb-2">Usage:</h4>
              <div className="bg-black/50 p-2 rounded font-mono text-xs text-cyber-blue">
                {tool.usage}
              </div>
            </div>
          )}

          {/* Features */}
          {tool.features && (
            <div>
              <h4 className="text-sm font-semibold text-cyber-pink mb-2">Key Features:</h4>
              <ul className="text-xs space-y-1">
                {tool.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-cyber-green mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Examples */}
          {tool.examples && (
            <div>
              <h4 className="text-sm font-semibold text-cyber-orange mb-2">Examples:</h4>
              <div className="space-y-2">
                {tool.examples.slice(0, 2).map((example, index) => (
                  <div key={index} className="bg-black/30 p-2 rounded">
                    <div className="font-mono text-xs text-cyber-blue mb-1">
                      {example.command}
                    </div>
                    <div className="text-xs text-gray-400">
                      {example.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Tools */}
          {tool.relatedTools && (
            <div>
              <h4 className="text-sm font-semibold text-cyber-purple mb-2">Related Tools:</h4>
              <div className="flex flex-wrap gap-1">
                {tool.relatedTools.map((relatedTool) => (
                  <span key={relatedTool} className="px-2 py-1 bg-cyber-purple/20 text-cyber-purple text-xs rounded">
                    {relatedTool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {tool.website && (
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 cyber-button text-xs py-2 text-center"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Website
              </a>
            )}
            
            {tool.documentation && (
              <a
                href={tool.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 cyber-button text-xs py-2 text-center"
              >
                <BookOpen className="w-3 h-3 mr-1" />
                Docs
              </a>
            )}
            
            <button
              onClick={() => setIsExpanded(false)}
              className="px-3 py-2 bg-cyber-gray/50 text-cyber-blue text-xs rounded hover:bg-cyber-gray/70 transition-colors"
            >
              Collapse
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolCard;
