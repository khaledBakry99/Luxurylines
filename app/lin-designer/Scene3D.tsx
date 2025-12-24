'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import Room from './Room';
import FurnitureItem from './FurnitureItem';
import { useDesignerStore } from '@/lib/designerStore';
import { TransformControls } from '@react-three/drei';
import { useRef, useState } from 'react';

export default function Scene3D() {
  const { furnitureItems, selectedItemId, setSelectedItemId, updateFurnitureItem, removeFurnitureItem, cameraControlsEnabled } = useDesignerStore();
  const [transformMode, setTransformMode] = useState<'translate' | 'rotate'>('translate');
  const orbitControlsRef = useRef<any>(null);

  const handleItemClick = (id: string, event: any) => {
    event.stopPropagation();
    if (selectedItemId === id) {
      const clickCount = (event.detail || 1);
      if (clickCount === 2) {
        removeFurnitureItem(id);
        setSelectedItemId(null);
      }
    } else {
      setSelectedItemId(id);
    }
  };

  return (
    <>
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
            <i className="ri-camera-line text-[#FF6B35] w-5 h-5 flex items-center justify-center"></i>
            <span className="font-bold text-gray-800 text-sm">التحكم بالكاميرا</span>
          </div>
          <button
            onClick={() => {
              const store = useDesignerStore.getState();
              store.setCameraControlsEnabled(!store.cameraControlsEnabled);
            }}
            className={`w-full px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm ${
              cameraControlsEnabled
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <i className={`${cameraControlsEnabled ? 'ri-lock-unlock-line' : 'ri-lock-line'} w-4 h-4 flex items-center justify-center`}></i>
              <span>{cameraControlsEnabled ? 'الكاميرا مفعّلة' : 'الكاميرا معطّلة'}</span>
            </div>
          </button>
          <p className="text-xs text-gray-500 mt-2 text-center">
            {cameraControlsEnabled ? 'يمكنك تحريك الكاميرا' : 'الكاميرا ثابتة'}
          </p>
        </div>

        {selectedItemId && (
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
              <i className="ri-tools-line text-[#FF6B35] w-5 h-5 flex items-center justify-center"></i>
              <span className="font-bold text-gray-800 text-sm">أدوات التحكم</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setTransformMode('translate')}
                className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-xs ${
                  transformMode === 'translate'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <i className="ri-drag-move-line w-4 h-4 flex items-center justify-center"></i>
                  <span>تحريك</span>
                </div>
              </button>
              <button
                onClick={() => setTransformMode('rotate')}
                className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-xs ${
                  transformMode === 'rotate'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
                  <span>تدوير</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 6, 8]} fov={50} />
        <OrbitControls 
          ref={orbitControlsRef}
          enabled={cameraControlsEnabled}
          enablePan={cameraControlsEnabled}
          enableZoom={cameraControlsEnabled}
          enableRotate={cameraControlsEnabled}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={5}
          maxDistance={20}
        />
        
        <Environment preset="apartment" />
        
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />

        <Room />

        {furnitureItems.map((item) => (
          <group key={item.id}>
            {selectedItemId === item.id ? (
              <TransformControls
                object={undefined}
                mode={transformMode}
                onObjectChange={(e: any) => {
                  if (e && e.target && e.target.object) {
                    const obj = e.target.object;
                    updateFurnitureItem(item.id, {
                      position: [obj.position.x, obj.position.y, obj.position.z],
                      rotation: [obj.rotation.x, obj.rotation.y, obj.rotation.z],
                    });
                  }
                }}
              >
                <FurnitureItem
                  {...item}
                  onClick={(e) => handleItemClick(item.id, e)}
                  isSelected={true}
                />
              </TransformControls>
            ) : (
              <FurnitureItem
                {...item}
                onClick={(e) => handleItemClick(item.id, e)}
                isSelected={false}
              />
            )}
          </group>
        ))}
      </Canvas>
    </>
  );
}
