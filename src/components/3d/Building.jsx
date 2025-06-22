import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, MeshTransmissionMaterial, RoundedBox, Billboard } from '@react-three/drei';
import { DoubleSide, MathUtils } from 'three';
import { useNavigate } from 'react-router-dom';

const Building = ({ 
  id, 
  name, 
  position, 
  color, 
  height, 
  width, 
  depth, 
  route, 
  description,
  onClick, 
  isSelected,
  isHovered,
  onHover
}) => {
  const buildingRef = useRef();
  const baseRef = useRef();
  const glowRef = useRef();
  const navigate = useNavigate();
  
  // Calculate text style based on building height (from search results)
  const textStyle = useMemo(() => {
    const baseFontSize = height * 0.15;
    const outlineWidth = baseFontSize * 0.05;
    const fontSize = Math.max(0.8, Math.min(baseFontSize, 2.5)); // Increased minimum
    const outline = Math.max(0.05, Math.min(outlineWidth, 0.2)); // Increased outline
    
    return { fontSize, outline };
  }, [height]);
  
  // Pulse animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (buildingRef.current) {
      // Apply floating effect
      buildingRef.current.position.y = Math.sin(t * 0.5) * 0.2 + height/2;
      
      // Apply pulse effect for hover or selection
      if (isSelected) {
        glowRef.current.scale.set(
          1 + Math.sin(t * 2) * 0.05,
          1 + Math.sin(t * 2) * 0.05,
          1 + Math.sin(t * 2) * 0.05
        );
      } else if (isHovered) {
        glowRef.current.scale.set(1.05, 1.05, 1.05);
      } else {
        glowRef.current.scale.set(1, 1, 1);
      }
      
      // Rotate base platform
      if (baseRef.current) {
        baseRef.current.rotation.y += 0.01;
      }
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
    
    // Navigate to route after a small delay for animation
    setTimeout(() => {
      navigate(route);
    }, 1000);
  };

  // Generate windows for the building
  const windows = useMemo(() => {
    const result = [];
    const windowSize = 0.4;
    const spacing = 0.8;
    
    const xCount = Math.floor(width / spacing);
    const yCount = Math.floor(height / spacing);
    const zCount = Math.floor(depth / spacing);
    
    // Front face
    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        result.push(
          <mesh 
            key={`front-${x}-${y}`}
            position={[
              (x - xCount/2 + 0.5) * spacing,
              (y + 1) * spacing,
              depth/2 + 0.01
            ]}
          >
            <planeGeometry args={[windowSize, windowSize]} />
            <meshBasicMaterial 
              color={color} 
              opacity={Math.random() * 0.5 + 0.5}
              transparent 
              toneMapped={false}
            />
          </mesh>
        );
      }
    }
    
    // Back face
    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        result.push(
          <mesh 
            key={`back-${x}-${y}`}
            position={[
              (x - xCount/2 + 0.5) * spacing,
              (y + 1) * spacing,
              -depth/2 - 0.01
            ]}
          >
            <planeGeometry args={[windowSize, windowSize]} />
            <meshBasicMaterial 
              color={color} 
              opacity={Math.random() * 0.5 + 0.5}
              transparent 
              toneMapped={false}
            />
          </mesh>
        );
      }
    }
    
    // Left face
    for (let z = 0; z < zCount; z++) {
      for (let y = 0; y < yCount; y++) {
        result.push(
          <mesh 
            key={`left-${z}-${y}`}
            position={[
              -width/2 - 0.01,
              (y + 1) * spacing,
              (z - zCount/2 + 0.5) * spacing
            ]}
            rotation={[0, -Math.PI/2, 0]}
          >
            <planeGeometry args={[windowSize, windowSize]} />
            <meshBasicMaterial 
              color={color} 
              opacity={Math.random() * 0.5 + 0.5}
              transparent 
              toneMapped={false}
            />
          </mesh>
        );
      }
    }
    
    // Right face
    for (let z = 0; z < zCount; z++) {
      for (let y = 0; y < yCount; y++) {
        result.push(
          <mesh 
            key={`right-${z}-${y}`}
            position={[
              width/2 + 0.01,
              (y + 1) * spacing,
              (z - zCount/2 + 0.5) * spacing
            ]}
            rotation={[0, Math.PI/2, 0]}
          >
            <planeGeometry args={[windowSize, windowSize]} />
            <meshBasicMaterial 
              color={color} 
              opacity={Math.random() * 0.5 + 0.5}
              transparent 
              toneMapped={false}
            />
          </mesh>
        );
      }
    }
    
    return result;
  }, [width, height, depth, color]);

  return (
    <group position={position}>
      {/* Main Building */}
      <group 
        ref={buildingRef} 
        onClick={handleClick}
        onPointerOver={() => onHover(true)}
        onPointerOut={() => onHover(false)}
      >
        <RoundedBox
          args={[width, height, depth]}
          radius={0.5}
          smoothness={4}
          bevelSegments={4}
        >
          <MeshTransmissionMaterial
            color={color}
            backside={false}
            backsideThickness={0}
            thickness={0.2}
            transmissionSampler
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.2}
            ior={1.5}
            reflectivity={0.2}
            transmission={0.95}
            opacity={isSelected ? 0.9 : 0.7}
            transparent
            side={DoubleSide}
            toneMapped={false}
          />
        </RoundedBox>

        {/* Windows */}
        {windows}

        {/* Antenna/spire for taller buildings */}
        {height > 12 && (
          <mesh position={[0, height + 2, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 4, 8]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={1}
              toneMapped={false}
            />
          </mesh>
        )}
        
        {/* Enhanced Building Label with Billboard (always faces camera) */}
        <Billboard
          follow={true}
          lockX={false}
          lockY={false}
          lockZ={false}
        >
          <group position={[0, height + 2, 0]}>
            {/* Text background for better contrast */}
            <mesh position={[0, 0, -0.1]}>
              <planeGeometry args={[name.length * 0.6, 1.5]} />
              <meshBasicMaterial 
                color="#000000" 
                transparent 
                opacity={0.7}
              />
            </mesh>
            
            {/* Main text with enhanced visibility */}
            <Text
              fontSize={textStyle.fontSize}
              maxWidth={12}
              lineHeight={1}
              letterSpacing={0.1}
              color={color}
              anchorX="center"
              anchorY="middle"
              outlineWidth={textStyle.outline}
              outlineColor="#000000"
              material-toneMapped={false}
              material-transparent={false}
              material-fog={false}
            >
              {name}
            </Text>
            
            {/* Additional glow text for extra visibility */}
            <Text
              position={[0, 0, 0.01]}
              fontSize={textStyle.fontSize * 1.05}
              maxWidth={12}
              lineHeight={1}
              letterSpacing={0.1}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              material-toneMapped={false}
              material-transparent={true}
              material-opacity={0.3}
              material-fog={false}
            >
              {name}
            </Text>
          </group>
        </Billboard>
      </group>

      {/* Building glow effect */}
      <group ref={glowRef}>
        <RoundedBox
          args={[width * 1.1, height * 1.1, depth * 1.1]}
          radius={0.5}
          position={[0, height/2, 0]}
        >
          <meshBasicMaterial
            color={color}
            transparent
            opacity={isSelected ? 0.3 : isHovered ? 0.2 : 0.1}
            wireframe
            toneMapped={false}
          />
        </RoundedBox>
      </group>

      {/* Base Platform */}
      <group>
        <mesh 
          ref={baseRef} 
          position={[0, -0.5, 0]}
        >
          <cylinderGeometry args={[width * 0.7, width * 0.7, 0.2, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        {/* Ground glow */}
        <mesh 
          position={[0, -0.6, 0]} 
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[width * 3, depth * 3]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={isSelected ? 0.15 : isHovered ? 0.1 : 0.05}
            toneMapped={false}
          />
        </mesh>
      </group>
      
      {/* Vertical light beams */}
      <mesh position={[0, height, 0]}>
        <cylinderGeometry args={[0.5, 0.1, 50, 8, 1, true]} 
          rotation={[0, 0, Math.PI / 2]}
        />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={isSelected ? 0.3 : isHovered ? 0.2 : 0.1}
          side={DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export default Building;
