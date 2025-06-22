import React from 'react';
import { Github, Mail, Heart, Terminal, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-cyber-darker border-t border-cyber-blue/30 overflow-hidden">
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-pink flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-cyber font-bold text-cyber-blue">CYBERVERSE HQ</h3>
                <div className="text-xs text-cyber-green">Cybersecurity Learning Platform</div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">
              3D cybersecurity learning platform with interactive tools and gamified education.
            </p>
            
            {/* Contact Links */}
            <div className="flex space-x-3">
              <SocialLink href="https://github.com" icon={<Github className="w-4 h-4" />} label="GitHub" />
              <SocialLink href="mailto:contact@cyberverse.hq" icon={<Mail className="w-4 h-4" />} label="Email" />
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-cyber font-semibold text-cyber-green mb-4 flex items-center">
              <Terminal className="w-4 h-4 mr-2" />
              Platforms
            </h4>
            <ul className="space-y-2 text-sm">
              <FooterLink to="/arsenal" icon="🔧">Arsenal Vault</FooterLink>
              <FooterLink to="/linux" icon="🖥️">Linux Center</FooterLink>
              <FooterLink to="/bugbounty" icon="🐛">Bug Bounty Dojo</FooterLink>
              <FooterLink to="/career" icon="💼">Career Station</FooterLink>
              <FooterLink to="/tutor" icon="🎓">Cyber Tutor</FooterLink>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-lg font-cyber font-semibold text-cyber-pink mb-4 flex items-center">
              <Code className="w-4 h-4 mr-2" />
              Platform Stats
            </h4>
            <div className="space-y-3">
              <StatItem number="5" label="Learning Modules" />
              <StatItem number="300+" label="Linux Commands" />
              <StatItem number="1000+" label="Security Tools" />
              <StatItem number="100+" label="Vulnerabilities" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-blue/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0 flex items-center">
            <span>© 2025 Cyberverse HQ. Built with</span>
            <Heart className="w-4 h-4 mx-1 text-cyber-red animate-pulse" />
            <span>for cybersecurity education.</span>
          </div>
          
          <div className="text-sm text-gray-400">
            <Link to="/" className="hover:text-cyber-blue transition-colors">
              Back to Cyber City
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-lg bg-cyber-gray/30 hover:bg-cyber-blue/20 text-gray-400 hover:text-cyber-blue transition-all border border-cyber-gray hover:border-cyber-blue/50"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children, icon }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-400 hover:text-cyber-blue transition-colors flex items-center"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  </li>
);

const StatItem = ({ number, label }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-400 text-sm">{label}</span>
    <span className="text-cyber-blue font-bold text-sm">{number}</span>
  </div>
);

export default Footer;
