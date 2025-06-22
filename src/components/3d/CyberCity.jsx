import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Text } from '@react-three/drei';
import { Vector3 } from 'three';
import Building from './Building';

const CyberCity = ({ onBuildingClick, selectedBuilding }) => {
  const cityRef = useRef();
  const navigate = useNavigate();
  const { camera } = useThree();
  const [hovered, setHovered] = useState(null);

  // Smooth camera positioning
  useEffect(() => {
    if (selectedBuilding) {
      const targetPosition = new Vector3(
        selectedBuilding.position[0] * 0.6,
        selectedBuilding.position[1] + 10,
        selectedBuilding.position[2] * 0.6
      );
      
      const startPosition = camera.position.clone();
      const startTime = Date.now();
      const duration = 1000;
      
      const animateCamera = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress * (2 - progress);
        
        camera.position.lerpVectors(startPosition, targetPosition, eased);
        camera.lookAt(
          selectedBuilding.position[0],
          selectedBuilding.position[1] + 2,
          selectedBuilding.position[2]
        );
        
        if (progress < 1) {
          requestAnimationFrame(animateCamera);
        }
      };
      
      animateCamera();
    }
  }, [selectedBuilding, camera]);

  // Slow rotation of the city
  useFrame((state) => {
    if (cityRef.current && !selectedBuilding) {
      cityRef.current.rotation.y += 0.0005;
    }
  });

  // Smaller scale buildings - reduced positions
  const buildings = [
    {
      id: 'arsenal',
      name: 'ARSENAL VAULT',
      position: [15, 0, 0],
      color: '#00ffff',
      height: 6,
      width: 3,
      depth: 3,
      route: '/arsenal'
    },
    {
      id: 'linux',
      name: 'LINUX CENTER',
      position: [0, 0, 15],
      color: '#00ff00',
      height: 8,
      width: 3,
      depth: 3,
      route: '/linux'
    },
    {
      id: 'bugbounty',
      name: 'BUG BOUNTY DOJO',
      position: [-15, 0, 0],
      color: '#ff8800',
      height: 5,
      width: 4,
      depth: 4,
      route: '/bugbounty'
    },
    {
      id: 'career',
      name: 'CAREER STATION',
      position: [0, 0, -15],
      color: '#ff0040',
      height: 6,
      width: 3,
      depth: 3,
      route: '/career'
    },
    {
      id: 'tutor',
      name: 'CYBER TUTOR',
      position: [0, 5, 0],
      color: '#8800ff',
      height: 8,
      width: 4,
      depth: 4,
      route: '/tutor'
    }
  ];

  return (
    <group ref={cityRef}>
      {/* Simple Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 20, 0]} intensity={0.8} color="#ffffff" />
      
      {buildings.map((building) => (
        <Building
          key={building.id}
          {...building}
          onClick={() => onBuildingClick(building)}
          isSelected={selectedBuilding?.id === building.id}
          isHovered={hovered === building.id}
          onHover={(hovering) => setHovered(hovering ? building.id : null)}
        />
      ))}
      
      {/* Smaller Central Platform */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[12, 12, 1, 32]} />
        <meshStandardMaterial 
          color="#001a33" 
          emissive="#003366"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Simple Grid Lines */}
      <group position={[0, -0.5, 0]}>
        {Array.from({ length: 15 }).map((_, i) => (
          <React.Fragment key={i}>
            <mesh position={[(i - 7) * 3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <planeGeometry args={[60, 0.1]} />
              <meshBasicMaterial color="#00ffff" transparent opacity={0.2} />
            </mesh>
            <mesh position={[0, 0, (i - 7) * 3]}>
              <planeGeometry args={[60, 0.1]} />
              <meshBasicMaterial color="#00ffff" transparent opacity={0.2} />
            </mesh>
          </React.Fragment>
        ))}
      </group>
      
     
        
       
      {/* Simple particle effects */}
      <Sparkles 
        count={200}
        scale={[40, 20, 40]}
        size={1}
        speed={0.3}
        color="#00ffff"
        opacity={0.5}
      />
    </group>
  );
};

export default CyberCity;
