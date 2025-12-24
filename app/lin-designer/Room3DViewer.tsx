'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useThree, useLoader, type ThreeEvent } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { type FurnitureType, type FurnitureItem, type DesignData } from './DesignControls';

const FURNITURE_MODELS = {
  sofa: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Sofa/glTF-Binary/Sofa.glb',
  chair: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF-Binary/WaterBottle.glb',
  table: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Binary/Box.glb',
  shelf: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxTextured/glTF-Binary/BoxTextured.glb',
  plant: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb',
  lamp: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Lantern/glTF-Binary/Lantern.glb'
} as const;

type FurnitureModelProps = {
  item: FurnitureItem;
  isSelected: boolean;
  onSelect: (item: FurnitureItem) => void;
  onMove: (id: string, x: number, z: number) => void;
  controlsEnabled: boolean;
};

type RoomData = { length: number; width: number; height: number };

type SceneProps = {
  roomData: RoomData;
  designData: DesignData;
  selectedFurniture: FurnitureItem | null;
  onFurnitureSelect: (item: FurnitureItem | null) => void;
  onFurnitureMove: (id: string, x: number, z: number) => void;
  controlsEnabled: boolean;
};

type Room3DViewerProps = {
  roomData: RoomData;
  designData: DesignData;
  selectedFurniture: FurnitureItem | null;
  onFurnitureSelect: (item: FurnitureItem | null) => void;
  onFurnitureDelete: (id: string) => void;
  onFurnitureMove: (data: DesignData) => void;
  controlsEnabled: boolean;
};

function FurnitureModel({ item, isSelected, onSelect, onMove, controlsEnabled }: FurnitureModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { camera, gl } = useThree();

  let gltf;
  try {
    gltf = useLoader(GLTFLoader, FURNITURE_MODELS[item.type] || FURNITURE_MODELS.sofa);
  } catch (error) {
    console.error('Error loading model:', error);
    return (
      <mesh position={[item.x / 100, 0.5, item.y / 100]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={item.color || '#cccccc'} />
      </mesh>
    );
  }

  useEffect(() => {
    if (meshRef.current && gltf?.scene) {
      try {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = (item.width / 100) / maxDim;
        meshRef.current.scale.set(scale, scale, scale);
      } catch (error) {
        console.error('Error scaling model:', error);
      }
    }
  }, [gltf, item.width]);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    if (!controlsEnabled) {
      e.stopPropagation();
      setIsDragging(true);
      onSelect(item);
    }
  };

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isDragging && !controlsEnabled) {
      e.stopPropagation();
      const x = e.point.x;
      const z = e.point.z;
      onMove(item.id, x, z);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleUp = () => setIsDragging(false);
      gl.domElement.addEventListener('pointerup', handleUp);
      return () => gl.domElement.removeEventListener('pointerup', handleUp);
    }
  }, [isDragging, gl]);

  if (!gltf?.scene) {
    return (
      <mesh position={[item.x / 100, 0.5, item.y / 100]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={item.color || '#cccccc'} />
      </mesh>
    );
  }

  return (
    <group
      ref={meshRef}
      position={[item.x / 100, 0, item.y / 100]}
      rotation={[0, (item.rotation * Math.PI) / 180, 0]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => !controlsEnabled && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <primitive object={gltf.scene.clone()} />
      {(isSelected || hovered) && (
        <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.8, 1, 32]} />
          <meshBasicMaterial color={isSelected ? '#FFA500' : '#4A90E2'} transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );
}

type RoomProps = {
  roomData: RoomData;
  designData: DesignData;
  wallColor: string;
  floorType: string;
};

function Room({ roomData, designData, wallColor, floorType }: RoomProps) {
  const length = roomData.length;
  const width = roomData.width;
  const height = roomData.height;

  const getFloorTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return new THREE.CanvasTexture(canvas);
    }

    switch (floorType) {
      case 'wood':
        ctx.fillStyle = '#DEB887';
        ctx.fillRect(0, 0, 512, 512);
        for (let i = 0; i < 512; i += 64) {
          ctx.fillStyle = i % 128 === 0 ? '#D2B48C' : '#DEB887';
          ctx.fillRect(0, i, 512, 64);
        }
        break;
      case 'marble':
        ctx.fillStyle = '#F5F5F5';
        ctx.fillRect(0, 0, 512, 512);
        for (let i = 0; i < 20; i++) {
          ctx.fillStyle = 'rgba(200,200,200,0.3)';
          ctx.beginPath();
          ctx.arc(Math.random() * 512, Math.random() * 512, Math.random() * 100, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      case 'carpet':
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, 0, 512, 512);
        break;
      case 'parquet':
        ctx.fillStyle = '#DEB887';
        ctx.fillRect(0, 0, 512, 512);
        for (let i = 0; i < 512; i += 32) {
          ctx.strokeStyle = '#8B4513';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(512, i);
          ctx.stroke();
        }
        break;
      default:
        ctx.fillStyle = '#ECECEC';
        ctx.fillRect(0, 0, 512, 512);
        for (let i = 0; i < 512; i += 64) {
          for (let j = 0; j < 512; j += 64) {
            ctx.strokeStyle = '#CCCCCC';
            ctx.strokeRect(i, j, 64, 64);
          }
        }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  };

  const floorTexture = getFloorTexture();

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[length, width]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>

      <mesh position={[0, height / 2, -width / 2]} receiveShadow>
        <boxGeometry args={[length, height, 0.1]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      <mesh position={[-length / 2, height / 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[width, height, 0.1]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      <mesh position={[length / 2, height / 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[width, height, 0.1]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      <mesh position={[0, height / 2, width / 2]} rotation={[0, Math.PI, 0]} receiveShadow>
        <boxGeometry args={[length, height, 0.1]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>
    </group>
  );
}

function Scene({ roomData, designData, selectedFurniture, onFurnitureSelect, onFurnitureMove, controlsEnabled }: SceneProps) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[8, 6, 8]} fov={50} />
      <OrbitControls 
        enabled={controlsEnabled}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2.1}
      />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />

      <Room 
        roomData={roomData} 
        designData={designData}
        wallColor={designData.wallColor}
        floorType={designData.floorType}
      />

      <Suspense fallback={null}>
        {designData.furniture && designData.furniture.map((item) => (
          <FurnitureModel
            key={item.id}
            item={item}
            isSelected={selectedFurniture?.id === item.id}
            onSelect={(f) => onFurnitureSelect(f)}
            onMove={onFurnitureMove}
            controlsEnabled={controlsEnabled}
          />
        ))}
      </Suspense>

      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={10}
      />

      <Environment preset="apartment" />
    </>
  );
}

export default function Room3DViewer({
  roomData,
  designData,
  selectedFurniture,
  onFurnitureSelect,
  onFurnitureDelete,
  onFurnitureMove,
  controlsEnabled
}: Room3DViewerProps) {
  const handleFurnitureMove = (id: string, x: number, z: number) => {
    const updatedFurniture = designData.furniture.map(item =>
      item.id === id ? { ...item, x: x * 100, y: z * 100 } : item
    );
    onFurnitureMove({ ...designData, furniture: updatedFurniture });
  };

  const handleRotate = () => {
    if (selectedFurniture) {
      const updatedFurniture = designData.furniture.map(item =>
        item.id === selectedFurniture.id
          ? { ...item, rotation: (item.rotation + 90) % 360 }
          : item
      );
      onFurnitureMove({ ...designData, furniture: updatedFurniture });
    }
  };

  const handleDelete = () => {
    if (selectedFurniture) {
      onFurnitureDelete(selectedFurniture.id);
    }
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl overflow-hidden">
      <Canvas shadows>
        <Scene
          roomData={roomData}
          designData={designData}
          selectedFurniture={selectedFurniture}
          onFurnitureSelect={onFurnitureSelect}
          onFurnitureMove={handleFurnitureMove}
          controlsEnabled={controlsEnabled}
        />
      </Canvas>

      {selectedFurniture && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white rounded-xl shadow-2xl p-3 border-2 border-[#FFA500] z-50">
          <button
            onClick={handleRotate}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all cursor-pointer shadow-lg"
            title="تدوير"
          >
            <i className="ri-refresh-line text-xl"></i>
          </button>
          <button
            onClick={handleDelete}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all cursor-pointer shadow-lg"
            title="حذف"
          >
            <i className="ri-delete-bin-line text-xl"></i>
          </button>
        </div>
      )}

      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border-2 border-blue-200 rounded-xl p-4 shadow-xl">
        <p className="text-sm font-['Cairo'] text-blue-800 text-center font-semibold">
          <i className="ri-information-line ml-1 text-lg"></i>
          {controlsEnabled 
            ? 'وضع التحكم بالكاميرا: اسحب لتدوير المشهد • عجلة الماوس للتكبير'
            : 'وضع تحريك الأثاث: انقر على القطعة لتحديدها • اسحبها لتحريكها'}
        </p>
      </div>
    </div>
  );
}
