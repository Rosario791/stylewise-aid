
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface HairModelProps {
  style: string;
}

const HairModel = ({ style }: HairModelProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // This is a placeholder model path - you'll need to add actual 3D hair models
  const { scene } = useGLTF(`/models/hair/${style}.glb`);

  useEffect(() => {
    if (scene) {
      scene.scale.set(1, 1, 1);
      scene.position.set(0, 0, 0);
    }
  }, [scene]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      position={[0, 0, 0]}
      scale={[1, 1, 1]}
    />
  );
};

export default HairModel;
