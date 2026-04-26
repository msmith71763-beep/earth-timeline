import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import type { GeologicalEra } from '../data/eras';

interface GlobeProps {
  era: GeologicalEra;
}

function Earth({ era }: { era: GeologicalEra }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const eraColor = useMemo(() => new THREE.Color(era.color), [era.color]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Earth sphere */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshPhysicalMaterial
          color={eraColor}
          roughness={0.7}
          metalness={0.1}
          clearcoat={0.3}
          clearcoatRoughness={0.4}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere ref={atmosphereRef} args={[2.05, 64, 64]}>
        <meshBasicMaterial
          color="#4488ff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere args={[2.15, 32, 32]}>
        <meshBasicMaterial
          color="#2244aa"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

export default function Globe({ era }: GlobeProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -2, -5]} intensity={0.3} color="#4488ff" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffddaa" />

      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} />

      <Earth era={era} />

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={4}
        maxDistance={10}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
