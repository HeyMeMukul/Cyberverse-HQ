import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronLeft, Zap, Shield, Terminal } from 'lucide-react';
import { useGameState } from '../../hooks/useGameState';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Get page info based on current route
  const getPageInfo = () => {
    switch (location.pathname) {
      case '/arsenal': return { title: 'Arsenal Vault', icon: <Zap className="w-5 h-5" />, color: 'cyber-blue' };
      case '/linux': return { title: 'Linux Center', icon: <Terminal className="w-5 h-5" />, color: 'cyber-green' };
      case '/bugbounty': return { title: 'Bug Bounty Dojo', icon: <Shield className="w-5 h-5" />, color: 'cyber-orange' };
      case '/career': return { title: 'Career Station', icon: <Zap className="w-5 h-5" />, color: 'cyber-red' };
      case '/tutor': return { title: 'Cyber Tutor', icon: <Shield className="w-5 h-5" />, color: 'cyber-purple' };
      default: return { title: 'Cyberverse HQ', icon: <Home className="w-5 h-5" />, color: 'cyber-blue' };
    }
  };

  const pageInfo = getPageInfo();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cyber-darker/95 backdrop-blur-md border-b border-cyber-blue/30' 
          : 'bg-transparent'
      }`}
    >
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid-bg h-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Side - Logo and Page Info */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-${pageInfo.color} to-cyber-pink flex items-center justify-center`}>
                  {pageInfo.icon}
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-pink opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <div className="hidden md:block">
                <div className="text-lg font-cyber font-bold text-cyber-blue group-hover:text-cyber-pink transition-colors">
                  CYBERVERSE
                </div>
                <div className="text-xs text-gray-400 -mt-1">
                  {pageInfo.title}
                </div>
              </div>
            </Link>
          </div>
          
          {/* Center - Navigation (Desktop) */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/arsenal" currentPath={location.pathname} icon="🔧">Arsenal</NavLink>
            <NavLink to="/linux" currentPath={location.pathname} icon="🖥️">Linux</NavLink>
            <NavLink to="/bugbounty" currentPath={location.pathname} icon="🐛">Bug Bounty</NavLink>
            <NavLink to="/career" currentPath={location.pathname} icon="💼">Career</NavLink>
            <NavLink to="/tutor" currentPath={location.pathname} icon="🎓">Tutor</NavLink>
          </nav>
          
          {/* Right Side - Stats and Menu */}
          <div className="flex items-center space-x-4">
           
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-cyber-gray/30 transition-colors border border-cyber-blue/30"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-cyber-blue" />
              ) : (
                <Menu className="h-5 w-5 text-cyber-blue" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-darker/98 backdrop-blur-md border-t border-cyber-blue/20">
          <div className="px-4 py-4 space-y-2">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} icon="🏠">Home</MobileNavLink>
            <MobileNavLink to="/arsenal" onClick={() => setIsMenuOpen(false)} icon="🔧">Arsenal Vault</MobileNavLink>
            <MobileNavLink to="/linux" onClick={() => setIsMenuOpen(false)} icon="🖥️">Linux Center</MobileNavLink>
            <MobileNavLink to="/bugbounty" onClick={() => setIsMenuOpen(false)} icon="🐛">Bug Bounty Dojo</MobileNavLink>
            <MobileNavLink to="/career" onClick={() => setIsMenuOpen(false)} icon="💼">Career Station</MobileNavLink>
            <MobileNavLink to="/tutor" onClick={() => setIsMenuOpen(false)} icon="🎓">Cyber Tutor</MobileNavLink>
            
           
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, currentPath, children, icon }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`relative px-4 py-2 rounded-lg transition-all text-sm font-medium group ${
        isActive 
          ? 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/50' 
          : 'text-gray-300 hover:bg-cyber-gray/30 hover:text-cyber-blue border border-transparent hover:border-cyber-blue/30'
      }`}
    >
      <span className="mr-2">{icon}</span>
      {children}
      {isActive && (
        <div className="absolute inset-0 rounded-lg bg-cyber-blue/10 animate-pulse"></div>
      )}
    </Link>
  );
};

const MobileNavLink = ({ to, onClick, children, icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center py-3 px-4 text-gray-300 hover:text-cyber-blue hover:bg-cyber-gray/30 transition-colors rounded-lg border border-transparent hover:border-cyber-blue/30"
      onClick={onClick}
    >
      <span className="mr-3 text-lg">{icon}</span>
      {children}
    </Link>
  );
};

export default Header;
