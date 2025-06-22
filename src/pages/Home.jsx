import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { OrbitControls, Environment, PerspectiveCamera, Html, useProgress } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette, ChromaticAberration } from '@react-three/postprocessing';
import { Vector3 } from 'three';
import CyberCity from '../components/3d/CyberCity';
import HUD from '../components/ui/HUD';
import { useGameState } from '../hooks/useGameState';

// Loading component for 3D scene
function LoadingScreen() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-cyber-blue border-t-transparent rounded-full animate-spin mb-4"></div>
        <div className="text-cyber-blue font-cyber text-lg animate-pulse">
          Loading Cyberverse... {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
}

const Home = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const navigate = useNavigate();
  const { setVisitedBuilding } = useGameState();
  
  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedBuilding(null);
      }
      
      // Close welcome message on any key press
      if (showWelcome) {
        setShowWelcome(false);
        setHasInteracted(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showWelcome]);
  
  // Auto-hide welcome after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (showWelcome && !hasInteracted) {
        setShowWelcome(false);
      }
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [showWelcome, hasInteracted]);

  const handleBuildingClick = (building) => {
    setSelectedBuilding(building);
    setVisitedBuilding(building.id);
    
    // Navigate to building's route after a brief delay
    setTimeout(() => {
      navigate(building.route);
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 20, 40], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<LoadingScreen />}>
          {/* Camera & Controls */}
          <PerspectiveCamera makeDefault position={[0, 20, 40]} />
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.5}
            enablePan={true}
            enableZoom={true}
            minDistance={15}
            maxDistance={60}
            maxPolarAngle={Math.PI / 2 - 0.1}
          />

          {/* Environment */}
          <Environment preset="night" />
          <color attach="background" args={['#050505']} />
          <fog attach="fog" args={['#050505', 30, 90]} />

          {/* Cyber City */}
          <CyberCity
            onBuildingClick={handleBuildingClick}
            selectedBuilding={selectedBuilding}
          />

          {/* Post Processing Effects */}
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              height={300}
              intensity={0.5}
            />
            <Noise opacity={0.02} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
            <ChromaticAberration
              offset={new Vector3(0.0005, 0.0005, 0.0005)}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>

      {/* HUD Overlay */}
      <HUD selectedBuilding={selectedBuilding} />
      
      {/* Welcome Message */}
      {showWelcome && (
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="max-w-2xl p-8 bg-cyber-dark/90 border border-cyber-blue/50 rounded-lg backdropFilter backdrop-blur-lg pointer-events-auto">
            <h1 className="text-5xl font-cyber font-bold mb-6 text-cyber-blue animate-glow">
              CYBERVERSE HQ
            </h1>
            <p className="text-xl text-cyber-green mb-6">
              Welcome to your cybersecurity learning journey. Explore the cyber city to discover tools, techniques, and knowledge.
            </p>
            <div className="text-cyber-pink mb-6">
              <p>🖱️ <strong>MOUSE</strong>: Click and drag to look around</p>
              <p>🔍 <strong>SCROLL</strong>: Zoom in/out</p>
              <p>🏢 <strong>CLICK</strong>: Enter a building</p>
              <p>⚡ <strong>ESC</strong>: Deselect building</p>
            </div>
            <button
              onClick={() => {
                setShowWelcome(false);
                setHasInteracted(true);
              }}
              className="cyber-btn-advanced w-full py-3"
            >
              BEGIN EXPLORATION
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
