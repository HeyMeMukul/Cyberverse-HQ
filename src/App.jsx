import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './styles/globals.css';

// Lazy load components to avoid import issues
const Home = React.lazy(() => import('./pages/Home'));
const Arsenal = React.lazy(() => import('./pages/Arsenal'));
const LinuxCenter = React.lazy(() => import('./pages/LinuxCenter'));
const BugBounty = React.lazy(() => import('./pages/BugBounty'));
const Career = React.lazy(() => import('./pages/Career'));
const CyberTutor = React.lazy(() => import('./pages/CyberTutor'));

// Simple loading component
const LoadingScreen = () => (
  <div className="flex items-center justify-center min-h-screen bg-cyber-darker">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <div className="text-cyan-400 text-lg">Loading...</div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-cyan-400">
        <Layout>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/arsenal" element={<Arsenal />} />
              <Route path="/linux" element={<LinuxCenter />} />
              <Route path="/bugbounty" element={<BugBounty />} />
              <Route path="/career" element={<Career />} />
              <Route path="/tutor" element={<CyberTutor />} />
            </Routes>
          </Suspense>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
