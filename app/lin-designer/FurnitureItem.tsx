import React from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FurnitureItemProps {
  type: string;
  name: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  onClick: (event: any) => void;
  isSelected: boolean;
  image: string;
}

export default function FurnitureItem({
  type,
  position,
  rotation,
  scale,
  color,
  onClick,
  isSelected,
  image,
}: FurnitureItemProps) {
  const meshRef = useRef<THREE.Group>(null);
  const textureLoader = new THREE.TextureLoader();

  useFrame(() => {
    if (meshRef.current && isSelected) {
      meshRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const material = child.material as THREE.MeshStandardMaterial;
          material.emissive = new THREE.Color('#FF6B35');
          material.emissiveIntensity = 0.3;
        }
      });
    } else if (meshRef.current) {
      meshRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          const material = child.material as THREE.MeshStandardMaterial;
          material.emissive = new THREE.Color('#000000');
          material.emissiveIntensity = 0;
        }
      });
    }
  });

  const renderFurniture = () => {
    const texture = textureLoader.load(image);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    switch (type) {
      case 'bed':
        return (
          <group>
            <mesh position={[0, 0.3, 0]} castShadow>
              <boxGeometry args={[2, 0.4, 2.2]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[0, 0.7, -1]} castShadow>
              <boxGeometry args={[2, 0.8, 0.2]} />
              <meshStandardMaterial map={texture} />
            </mesh>
          </group>
        );

      case 'chair':
        return (
          <group>
            <mesh position={[0, 0.25, 0]} castShadow>
              <boxGeometry args={[0.5, 0.1, 0.5]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[0, 0.5, -0.2]} castShadow>
              <boxGeometry args={[0.5, 0.6, 0.1]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[-0.18, 0.1, -0.18]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.25]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[0.18, 0.1, -0.18]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.25]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[-0.18, 0.1, 0.18]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.25]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[0.18, 0.1, 0.18]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.25]} />
              <meshStandardMaterial map={texture} />
            </mesh>
          </group>
        );

      case 'table':
        return (
          <group>
            <mesh position={[0, 0.4, 0]} castShadow>
              <boxGeometry args={[1.5, 0.1, 1]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[-0.6, 0.2, -0.4]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.4]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[0.6, 0.2, -0.4]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.4]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[-0.6, 0.2, 0.4]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.4]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[0.6, 0.2, 0.4]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.4]} />
              <meshStandardMaterial map={texture} />
            </mesh>
          </group>
        );

      case 'cabinet':
        return (
          <group>
            <mesh position={[0, 1, 0]} castShadow>
              <boxGeometry args={[1.2, 2, 0.6]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[-0.3, 1.3, 0.31]} castShadow>
              <boxGeometry args={[0.5, 0.6, 0.05]} />
              <meshStandardMaterial color="#888888" />
            </mesh>
            <mesh position={[0.3, 1.3, 0.31]} castShadow>
              <boxGeometry args={[0.5, 0.6, 0.05]} />
              <meshStandardMaterial color="#888888" />
            </mesh>
          </group>
        );

      case 'kitchen':
        return (
          <group>
            <mesh position={[0, 0.5, 0]} castShadow>
              <boxGeometry args={[1.5, 1, 0.6]} />
              <meshStandardMaterial map={texture} />
            </mesh>
            <mesh position={[0, 0.5, 0.31]} castShadow>
              <boxGeometry args={[1.4, 0.9, 0.05]} />
              <meshStandardMaterial color="#666666" />
            </mesh>
          </group>
        );

      case 'plant':
        return (
          <group>
            <mesh position={[0, 0.15, 0]} castShadow>
              <cylinderGeometry args={[0.15, 0.2, 0.3]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh position={[0, 0.5, 0]} castShadow>
              <sphereGeometry args={[0.3]} />
              <meshStandardMaterial color="#228B22" />
            </mesh>
          </group>
        );

      case 'lamp':
        return (
          <group>
            <mesh position={[0, 0.5, 0]} castShadow>
              <cylinderGeometry args={[0.05, 0.05, 1]} />
              <meshStandardMaterial color="#333333" />
            </mesh>
            <mesh position={[0, 1.1, 0]} castShadow>
              <coneGeometry args={[0.3, 0.4, 32]} />
              <meshStandardMaterial color="#FFFFCC" emissive="#FFFF99" emissiveIntensity={0.5} />
            </mesh>
          </group>
        );

      case 'rug':
        return (
          <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[2, 1.5]} />
            <meshStandardMaterial map={texture} />
          </mesh>
        );

      default:
        return (
          <mesh castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial map={texture} />
          </mesh>
        );
    }
  };

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={onClick}
    >
      {renderFurniture()}
      {isSelected && (
        <mesh position={[0, 2, 0]}>
          <coneGeometry args={[0.2, 0.4, 3]} />
          <meshStandardMaterial color="#FF6B35" emissive="#FF6B35" emissiveIntensity={0.5} />
        </mesh>
      )}
    </group>
  );
}
