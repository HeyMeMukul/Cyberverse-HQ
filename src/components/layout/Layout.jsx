import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {!isHomePage && <Header />}
      
      <main className={`flex-grow ${!isHomePage ? 'pt-16' : ''}`}>
        {children}
      </main>
      
      {!isHomePage && <Footer />}
      
      {/* Scan Line Effect - visible on all pages */}
      <div className="fixed inset-0 pointer-events-none scanlines z-[1000]"></div>
      
      {/* Data Particles Effect */}
      <div className="data-particles fixed inset-0 pointer-events-none z-[999]">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="data-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
