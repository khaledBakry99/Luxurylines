'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

type RoomData = {
  length: number;
  width: number;
  height: number;
};

type FloorType = 'wood' | 'marble' | 'carpet' | 'parquet' | 'vinyl' | string;

type FurnitureType = 'sofa' | 'chair' | 'table' | 'shelf' | 'plant' | string;

type FurnitureItem = {
  id: string;
  type: FurnitureType;
  x: number;
  y: number;
  width: number;
  depth: number;
  height: number;
  rotation: number;
  color: string;
};

type DesignData = {
  floorType: FloorType;
  wallColor: string;
  furniture: FurnitureItem[];
};

type RoomVisualizationProps = {
  roomData: RoomData;
  designData: DesignData;
  onDesignChange: (nextDesign: DesignData) => void;
};

export default function RoomVisualization({ roomData, designData, onDesignChange }: RoomVisualizationProps) {
  const [selectedFurniture, setSelectedFurniture] = useState<FurnitureItem | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const roomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFurnitureMouseDown = useCallback((e: React.MouseEvent, furniture: FurnitureItem) => {
    if (!isMounted) return;
    e.stopPropagation();
    
    const rect = roomRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - rect.left - furniture.x;
    const offsetY = e.clientY - rect.top - furniture.y;
    
    setSelectedFurniture(furniture);
    setIsDragging(true);
    setDragOffset({ x: offsetX, y: offsetY });
  }, [isMounted]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !selectedFurniture || !isMounted) return;
    
    const rect = roomRef.current?.getBoundingClientRect();
    if (!rect) return;
    const newX = Math.max(0, Math.min(rect.width - selectedFurniture.width, e.clientX - rect.left - dragOffset.x));
    const newY = Math.max(0, Math.min(rect.height - selectedFurniture.depth, e.clientY - rect.top - dragOffset.y));
    
    const updatedFurniture = designData.furniture.map(item =>
      item.id === selectedFurniture.id
        ? { ...item, x: newX, y: newY }
        : item
    );
    
    onDesignChange({ ...designData, furniture: updatedFurniture });
    setSelectedFurniture({ ...selectedFurniture, x: newX, y: newY });
  }, [isDragging, selectedFurniture, dragOffset, designData, onDesignChange, isMounted]);

  const handleMouseUp = useCallback(() => {
    if (isMounted) {
      setIsDragging(false);
    }
  }, [isMounted]);

  const handleDeleteFurniture = useCallback((furnitureId: string) => {
    if (!isMounted) return;
    const updatedFurniture = designData.furniture.filter(item => item.id !== furnitureId);
    onDesignChange({ ...designData, furniture: updatedFurniture });
    setSelectedFurniture(null);
  }, [designData, onDesignChange, isMounted]);

  const handleRotateFurniture = useCallback((furnitureId: string) => {
    if (!isMounted) return;
    const updatedFurniture = designData.furniture.map(item =>
      item.id === furnitureId
        ? { ...item, rotation: (item.rotation + 90) % 360 }
        : item
    );
    onDesignChange({ ...designData, furniture: updatedFurniture });
  }, [designData, onDesignChange, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, isMounted]);

  const getFloorPattern = () => {
    switch (designData.floorType) {
      case 'wood':
        return {
          background: `linear-gradient(90deg, rgba(139,69,19,0.3) 1px, transparent 1px),
                      linear-gradient(rgba(139,69,19,0.3) 1px, transparent 1px),
                      linear-gradient(45deg, #DEB887 25%, #D2B48C 25%, #D2B48C 50%, #DEB887 50%, #DEB887 75%, #D2B48C 75%, #D2B48C)`,
          backgroundSize: '100px 100px, 100px 100px, 50px 50px'
        };
      case 'marble':
        return {
          background: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(230,230,230,0.6) 0%, transparent 50%),
                      linear-gradient(135deg, #F5F5F5 25%, #E8E8E8 25%, #E8E8E8 50%, #F5F5F5 50%, #F5F5F5 75%, #E8E8E8 75%, #E8E8E8)`,
          backgroundSize: '200px 200px, 200px 200px, 80px 80px'
        };
      case 'carpet':
        return {
          background: `radial-gradient(circle at 30% 30%, rgba(139,69,19,0.2) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(160,82,45,0.15) 0%, transparent 50%),
                      #8B4513`
        };
      case 'parquet':
        return {
          background: `repeating-linear-gradient(0deg, #DEB887, #DEB887 30px, #D2B48C 30px, #D2B48C 60px),
                      repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(139,69,19,0.1) 120px, rgba(139,69,19,0.1) 122px)`
        };
      case 'vinyl':
        return {
          background: `linear-gradient(45deg, #E6E6FA 25%, #DDA0DD 25%, #DDA0DD 50%, #E6E6FA 50%, #E6E6FA 75%, #DDA0DD 75%, #DDA0DD)`,
          backgroundSize: '60px 60px'
        };
      default:
        return {
          background: `linear-gradient(90deg, rgba(200,200,200,0.3) 1px, transparent 1px),
                      linear-gradient(rgba(200,200,200,0.3) 1px, transparent 1px),
                      linear-gradient(45deg, #F5F5F5 25%, #ECECEC 25%, #ECECEC 50%, #F5F5F5 50%, #F5F5F5 75%, #ECECEC 75%, #ECECEC)`,
          backgroundSize: '80px 80px, 80px 80px, 40px 40px'
        };
    }
  };

  const adjustBrightness = (color: string, percent: number) => {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
    const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  };

  const renderSofaDetails = () => (
    <>
      <div className="absolute inset-2 flex gap-1">
        <div className="flex-1 bg-black/10 rounded" style={{ margin: '4px' }}></div>
        <div className="flex-1 bg-black/10 rounded" style={{ margin: '4px' }}></div>
        <div className="flex-1 bg-black/10 rounded" style={{ margin: '4px' }}></div>
      </div>
      <div className="absolute top-2 left-2 right-2 h-6 bg-black/5 rounded"></div>
    </>
  );

  const renderSofaFront = () => (
    <div className="w-full h-full flex items-end justify-around px-4 pb-2">
      <div className="w-1/4 h-3/4 bg-black/20 rounded-t"></div>
      <div className="w-1/4 h-3/4 bg-black/20 rounded-t"></div>
      <div className="w-1/4 h-3/4 bg-black/20 rounded-t"></div>
    </div>
  );

  const renderChairDetails = () => (
    <>
      <div className="absolute inset-4 bg-black/10 rounded"></div>
      <div className="absolute top-2 left-2 right-2 h-4 bg-black/5 rounded"></div>
    </>
  );

  const renderTableDetails = () => (
    <div className="absolute inset-0">
      <div className="absolute inset-2 border-2 border-black/10 rounded"></div>
      <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 -translate-x-1/2 -translate-y-1/2 bg-black/5 rounded-full"></div>
    </div>
  );

  const renderShelfDetails = () => (
    <div className="absolute inset-1 flex flex-col gap-1">
      <div className="flex-1 border-b border-black/20"></div>
      <div className="flex-1 border-b border-black/20"></div>
      <div className="flex-1 border-b border-black/20"></div>
      <div className="flex-1"></div>
    </div>
  );

  const renderShelfFront = () => (
    <div className="w-full h-full flex flex-col">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex-1 border-b border-black/30 bg-black/10"></div>
      ))}
    </div>
  );

  const renderPlantDetails = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3/4 h-3/4 rounded-full bg-green-600/30"></div>
      <div className="absolute w-1/2 h-1/2 rounded-full bg-green-700/40"></div>
    </div>
  );

  const renderFurniture3D = (item: FurnitureItem) => {
    const baseColor = item.color;
    const darkerColor = adjustBrightness(baseColor, -30);
    const lighterColor = adjustBrightness(baseColor, 20);
    const isSelected = selectedFurniture?.id === item.id;

    return (
      <div
        key={item.id}
        className={`absolute cursor-move transition-all ${
          isSelected ? 'ring-4 ring-[#FFA500] z-50' : 'hover:ring-2 hover:ring-blue-300'
        }`}
        style={{
          left: `calc(50% + ${item.x - 400}px)`,
          top: `calc(50% + ${item.y - 400}px)`,
          width: `${item.width}px`,
          height: `${item.depth}px`,
          transform: `translateZ(${item.height / 2}px) rotateZ(${item.rotation}deg)`,
          transformStyle: 'preserve-3d'
        }}
        onMouseDown={(e) => handleFurnitureMouseDown(e, item)}
      >
        <div
          className="absolute w-full h-full rounded-lg"
          style={{
            backgroundColor: isSelected ? '#FFA500' : lighterColor,
            transform: 'translateZ(0px)',
            boxShadow: isSelected 
              ? 'inset 0 0 30px rgba(255,165,0,0.3), 0 0 20px rgba(255,165,0,0.5)' 
              : 'inset 0 0 20px rgba(0,0,0,0.1)',
            border: isSelected ? '2px solid #FF8C00' : '1px solid rgba(0,0,0,0.2)'
          }}
        >
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)`
            }}
          ></div>
          {item.type === 'sofa' && renderSofaDetails()}
          {item.type === 'chair' && renderChairDetails()}
          {item.type === 'table' && renderTableDetails()}
          {item.type === 'shelf' && renderShelfDetails()}
          {item.type === 'plant' && renderPlantDetails()}
        </div>

        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: `${item.height}px`,
            transform: `rotateX(-90deg) translateZ(0px)`,
            transformOrigin: 'bottom',
            backgroundColor: isSelected ? '#FF8C00' : baseColor,
            filter: 'brightness(0.7)',
            border: '1px solid rgba(0,0,0,0.3)',
            boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.3)'
          }}
        >
          {item.type === 'sofa' && renderSofaFront()}
          {item.type === 'shelf' && renderShelfFront()}
        </div>

        <div
          className="absolute top-0 right-0 h-full"
          style={{
            width: `${item.height}px`,
            transform: `rotateY(90deg) rotateZ(-90deg) translateZ(0px)`,
            transformOrigin: 'right',
            backgroundColor: isSelected ? '#FF8C00' : darkerColor,
            filter: 'brightness(0.8)',
            border: '1px solid rgba(0,0,0,0.3)',
            boxShadow: 'inset -10px 0 20px rgba(0,0,0,0.2)'
          }}
        ></div>

        <div
          className="absolute top-0 left-0 h-full"
          style={{
            width: `${item.height}px`,
            transform: `rotateY(-90deg) rotateZ(90deg) translateZ(0px)`,
            transformOrigin: 'left',
            backgroundColor: isSelected ? '#FF8C00' : darkerColor,
            filter: 'brightness(0.75)',
            border: '1px solid rgba(0,0,0,0.3)',
            boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.2)'
          }}
        ></div>

        <div
          className="absolute top-0 left-0 w-full"
          style={{
            height: `${item.height}px`,
            transform: `rotateX(-90deg) translateZ(-${item.depth}px)`,
            transformOrigin: 'top',
            backgroundColor: isSelected ? '#FF8C00' : baseColor,
            filter: 'brightness(0.65)',
            border: '1px solid rgba(0,0,0,0.3)'
          }}
        ></div>

        <div
          className="absolute w-full h-full"
          style={{
            transform: `translateZ(-${item.height}px)`,
            backgroundColor: isSelected ? '#CC7000' : darkerColor,
            filter: 'brightness(0.5)',
            border: '1px solid rgba(0,0,0,0.3)'
          }}
        ></div>

        <div
          className="absolute"
          style={{
            width: '110%',
            height: '110%',
            left: '5%',
            top: '5%',
            transform: `translateZ(-${item.height / 2 + 3}px)`,
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)',
            filter: 'blur(10px)',
            opacity: 0.7
          }}
        ></div>

        {isSelected && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white rounded-lg shadow-xl p-2 z-50 border-2 border-[#FFA500]"
            style={{ transform: 'translateZ(100px) translate(-50%, 0)' }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRotateFurniture(item.id);
              }}
              className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all cursor-pointer shadow-lg"
              title="تدوير"
            >
              <i className="ri-refresh-line text-lg"></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteFurniture(item.id);
              }}
              className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-md hover:bg-red-600 transition-all cursor-pointer shadow-lg"
              title="حذف"
            >
              <i className="ri-delete-bin-line text-lg"></i>
            </button>
          </div>
        )}
      </div>
    );
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-['Cairo'] font-bold text-[#001F3F] flex items-center">
          <i className="ri-layout-line text-[#FFA500] text-3xl ml-2"></i>
          معاينة الغرفة
        </h2>
        <div className="text-sm font-['Cairo'] text-gray-600">
          <i className="ri-ruler-line text-[#FFA500] ml-1"></i>
          {roomData.length}م × {roomData.width}م × {roomData.height}م
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl overflow-hidden" style={{ height: '600px' }}>
        <div
          ref={roomRef}
          className="relative w-full h-full"
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 40%'
          }}
        >
          <div
            className="absolute"
            style={{
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transform: 'rotateX(60deg) rotateZ(45deg)',
              transformOrigin: 'center center'
            }}
          >
            <div
              className="absolute"
              style={{
                width: '800px',
                height: '800px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) translateZ(0px)',
                ...getFloorPattern(),
                boxShadow: '0 0 100px rgba(0,0,0,0.3)',
                border: '2px solid rgba(0,0,0,0.1)'
              }}
            >
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px'
              }}></div>
            </div>

            <div
              className="absolute"
              style={{
                width: '800px',
                height: `${roomData.height * 100}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) translateZ(-400px) rotateX(90deg)',
                backgroundColor: designData.wallColor,
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.15)',
                border: '2px solid rgba(0,0,0,0.05)',
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)`
              }}
            ></div>

            <div
              className="absolute"
              style={{
                width: '800px',
                height: `${roomData.height * 100}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) translateX(400px) rotateY(90deg) rotateX(90deg)',
                backgroundColor: designData.wallColor,
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)',
                border: '2px solid rgba(0,0,0,0.05)',
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)`
              }}
            ></div>

            {designData.furniture && designData.furniture.map((item) => renderFurniture3D(item))}
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-blue-200 rounded-lg p-4 shadow-lg">
          <p className="text-sm font-['Cairo'] text-blue-800 text-center font-semibold">
            <i className="ri-information-line ml-1"></i>
            انقر على أي عنصر لتحديده • اسحب لتحريكه • استخدم الأزرار للتدوير أو الحذف
          </p>
        </div>
      </div>
    </div>
  );
}
