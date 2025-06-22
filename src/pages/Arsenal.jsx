import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Download, ExternalLink, RefreshCcw } from 'lucide-react';
import { cybersecurityTools, toolCategories } from '../data/tools';
import ToolCard from '../components/ui/ToolCard';
import { useGameState } from '../hooks/useGameState';

const Arsenal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const { toolsExplored } = useGameState();

  const filteredTools = useMemo(() => {
    return cybersecurityTools
      .filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
        const matchesDifficulty = difficultyFilter === 'All' || tool.difficulty === difficultyFilter;
        
        return matchesSearch && matchesCategory && matchesDifficulty;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'name': return a.name.localeCompare(b.name);
          case 'difficulty': 
            const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3, 'Expert': 4 };
            return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
          
          case 'category': return a.category.localeCompare(b.category);
          default: return 0;
        }
      });
  }, [searchTerm, selectedCategory, difficultyFilter, sortBy]);

  const exploredCount = Object.keys(toolsExplored).length;
  const explorationProgress = Math.round((exploredCount / cybersecurityTools.length) * 100);

  return (
    <div className="min-h-screen bg-cyber-darker p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-cyber font-bold text-cyber-blue mb-4 animate-glow">
            🔧 ARSENAL VAULT
          </h1>
          <p className="text-cyber-green text-lg max-w-3xl mx-auto">
            Explore our comprehensive collection of cybersecurity tools. From reconnaissance to exploitation, 
            discover the perfect tools for your security testing arsenal.
          </p>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-cyber-blue">{filteredTools.length}</div>
            <div className="text-cyber-green text-sm">Tools Available</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-cyber-green">{exploredCount}</div>
            <div className="text-cyber-blue text-sm">Tools Explored</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-cyber-pink">{explorationProgress}%</div>
            <div className="text-cyber-blue text-sm">Progress</div>
          </div>
          <div className="cyber-card text-center">
            <div className="text-3xl font-bold text-cyber-orange">{toolCategories.length}</div>
            <div className="text-cyber-blue text-sm">Categories</div>
          </div>
        </div>

        {/* Filters */}
        <div className="cyber-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-cyber-blue" />
              <input
                type="text"
                placeholder="Search tools..."
                className="cyber-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <select
              className="cyber-input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {toolCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              className="cyber-input"
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>

            {/* Sort */}
            <select
              className="cyber-input"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="category">Sort by Category</option>
              <option value="difficulty">Sort by Difficulty</option>
            </select>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setDifficultyFilter('Beginner');
              }}
              className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm rounded hover:bg-cyber-green/30 transition-colors"
            >
              Beginner Tools
            </button>
            <button
              onClick={() => {
                setSelectedCategory('Web Application Security');
                setDifficultyFilter('All');
              }}
              className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded hover:bg-cyber-blue/30 transition-colors"
            >
              Web Security
            </button>
            <button
              onClick={() => {
                setSelectedCategory('Reconnaissance');
                setDifficultyFilter('All');
              }}
              className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple text-sm rounded hover:bg-cyber-purple/30 transition-colors"
            >
              Recon Tools
            </button>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setDifficultyFilter('All');
                setSortBy('name');
              }}
              className="px-3 py-1 bg-cyber-red/20 text-cyber-red text-sm rounded hover:bg-cyber-red/30 transition-colors flex items-center"
            >
              <RefreshCcw className="w-3 h-3 mr-1" />
              Reset
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-cyber-blue mb-2">No Tools Found</h3>
            <p className="text-cyber-green mb-4">Try adjusting your search criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setDifficultyFilter('All');
              }}
              className="cyber-button"
            >
              <RefreshCcw className="w-4 h-4 mr-2" />
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Arsenal;
