'use client';

import { useState } from 'react';

export type FurnitureType = 'sofa' | 'chair' | 'table' | 'shelf' | 'plant' | 'lamp';

export type FurnitureItem = {
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

export type DesignData = {
  wallColor: string;
  floorType: string;
  furniture: FurnitureItem[];
};

type DesignControlsProps = {
  designData: DesignData;
  onDesignChange: (data: DesignData) => void;
  onSaveDesign: () => void;
};

const FURNITURE_LIBRARY: Array<{
  type: FurnitureType;
  name: string;
  icon: string;
  width: number;
  depth: number;
  height: number;
  color: string;
  image: string;
}> = [
  { 
    type: 'sofa', 
    name: 'كنبة', 
    icon: 'ri-sofa-line',
    width: 200, 
    depth: 90, 
    height: 80,
    color: '#8B4513',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20sofa%20furniture%20piece%20elegant%20brown%20leather%20contemporary%20design%20clean%20minimalist%20style%20professional%20product%20photography%20white%20background%20high%20quality%203d%20rendering&width=200&height=150&seq=sofa-lib-1&orientation=landscape'
  },
  { 
    type: 'chair', 
    name: 'كرسي', 
    icon: 'ri-armchair-line',
    width: 60, 
    depth: 60, 
    height: 90,
    color: '#A0522D',
    image: 'https://readdy.ai/api/search-image?query=modern%20elegant%20chair%20furniture%20piece%20contemporary%20design%20clean%20minimalist%20style%20professional%20product%20photography%20white%20background%20high%20quality%203d%20rendering%20wooden%20frame&width=200&height=150&seq=chair-lib-1&orientation=landscape'
  },
  { 
    type: 'table', 
    name: 'طاولة', 
    icon: 'ri-table-line',
    width: 120, 
    depth: 80, 
    height: 75,
    color: '#654321',
    image: 'https://readdy.ai/api/search-image?query=modern%20coffee%20table%20furniture%20piece%20elegant%20wooden%20contemporary%20design%20clean%20minimalist%20style%20professional%20product%20photography%20white%20background%20high%20quality%203d%20rendering&width=200&height=150&seq=table-lib-1&orientation=landscape'
  },
  { 
    type: 'shelf', 
    name: 'رف', 
    icon: 'ri-bookshelf-line',
    width: 100, 
    depth: 30, 
    height: 180,
    color: '#8B7355',
    image: 'https://readdy.ai/api/search-image?query=modern%20bookshelf%20furniture%20piece%20elegant%20wooden%20contemporary%20design%20clean%20minimalist%20style%20professional%20product%20photography%20white%20background%20high%20quality%203d%20rendering&width=200&height=150&seq=shelf-lib-1&orientation=landscape'
  },
  { 
    type: 'plant', 
    name: 'نبات', 
    icon: 'ri-plant-line',
    width: 40, 
    depth: 40, 
    height: 60,
    color: '#228B22',
    image: 'https://readdy.ai/api/search-image?query=modern%20potted%20plant%20indoor%20decoration%20elegant%20green%20contemporary%20design%20clean%20minimalist%20style%20professional%20product%20photography%20white%20background%20high%20quality%203d%20rendering&width=200&height=150&seq=plant-lib-1&orientation=landscape'
  },
  { 
    type: 'lamp', 
    name: 'مصباح', 
    icon: 'ri-lightbulb-line',
    width: 30, 
    depth: 30, 
    height: 150,
    color: '#FFD700',
    image: 'https://readdy.ai/api/search-image?query=modern%20floor%20lamp%20furniture%20piece%20elegant%20contemporary%20design%20clean%20minimalist%20style%20professional%20product%20photography%20white%20background%20high%20quality%203d%20rendering&width=200&height=150&seq=lamp-lib-1&orientation=landscape'
  }
];

export default function DesignControls({ designData, onDesignChange, onSaveDesign }: DesignControlsProps) {
  const [activeTab, setActiveTab] = useState<'walls' | 'floor' | 'furniture'>('walls');

  const handleAddFurniture = (furnitureType: FurnitureType) => {
    const template = FURNITURE_LIBRARY.find(f => f.type === furnitureType);
    if (!template) return;
    const newFurniture = {
      id: `${Date.now()}`,
      type: furnitureType,
      x: Math.random() * 400 + 200,
      y: Math.random() * 400 + 200,
      width: template.width,
      depth: template.depth,
      height: template.height,
      rotation: 0,
      color: template.color
    };
    
    onDesignChange({
      ...designData,
      furniture: [...(designData.furniture || []), newFurniture]
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <h2 className="text-2xl font-['Cairo'] font-bold text-[#001F3F] flex items-center">
        <i className="ri-paint-brush-line text-[#FFA500] text-3xl ml-2"></i>
        أدوات التصميم
      </h2>

      <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('walls')}
          className={`flex-1 px-4 py-2 rounded-md font-['Cairo'] font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'walls'
              ? 'bg-white text-[#001F3F] shadow-md'
              : 'text-gray-600 hover:text-[#001F3F]'
          }`}
        >
          <i className="ri-palette-line ml-1"></i>
          الجدران
        </button>
        <button
          onClick={() => setActiveTab('floor')}
          className={`flex-1 px-4 py-2 rounded-md font-['Cairo'] font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'floor'
              ? 'bg-white text-[#001F3F] shadow-md'
              : 'text-gray-600 hover:text-[#001F3F]'
          }`}
        >
          <i className="ri-home-4-line ml-1"></i>
          الأرضية
        </button>
        <button
          onClick={() => setActiveTab('furniture')}
          className={`flex-1 px-4 py-2 rounded-md font-['Cairo'] font-semibold transition-all whitespace-nowrap cursor-pointer ${
            activeTab === 'furniture'
              ? 'bg-white text-[#001F3F] shadow-md'
              : 'text-gray-600 hover:text-[#001F3F]'
          }`}
        >
          <i className="ri-sofa-line ml-1"></i>
          الأثاث
        </button>
      </div>

      {activeTab === 'walls' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-['Cairo'] font-semibold text-gray-700 mb-2">
              لون الجدران
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['#FFFFFF', '#F5F5DC', '#E6E6FA', '#FFE4E1', '#F0FFF0', '#FFF8DC', '#E0FFFF', '#FFF0F5'].map(color => (
                <button
                  key={color}
                  onClick={() => onDesignChange({ ...designData, wallColor: color })}
                  className={`w-full h-12 rounded-lg border-2 transition-all cursor-pointer ${
                    designData.wallColor === color ? 'border-[#FFA500] ring-2 ring-[#FFA500]' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                ></button>
              ))}
            </div>
            <input
              type="color"
              value={designData.wallColor}
              onChange={(e) => onDesignChange({ ...designData, wallColor: e.target.value })}
              className="w-full h-12 rounded-lg border-2 border-gray-300 mt-2 cursor-pointer"
            />
          </div>
        </div>
      )}

      {activeTab === 'floor' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-['Cairo'] font-semibold text-gray-700 mb-2">
              نوع الأرضية
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'ceramic', label: 'سيراميك', icon: 'ri-grid-line' },
                { value: 'wood', label: 'خشب', icon: 'ri-tree-line' },
                { value: 'marble', label: 'رخام', icon: 'ri-contrast-2-line' },
                { value: 'carpet', label: 'موكيت', icon: 'ri-layout-grid-line' },
                { value: 'parquet', label: 'باركيه', icon: 'ri-layout-line' },
                { value: 'vinyl', label: 'فينيل', icon: 'ri-layout-4-line' }
              ].map(floor => (
                <button
                  key={floor.value}
                  onClick={() => onDesignChange({ ...designData, floorType: floor.value })}
                  className={`p-4 rounded-lg border-2 transition-all font-['Cairo'] font-semibold whitespace-nowrap cursor-pointer ${
                    designData.floorType === floor.value
                      ? 'border-[#FFA500] bg-orange-50 text-[#FFA500]'
                      : 'border-gray-300 hover:border-[#FFA500] hover:bg-orange-50'
                  }`}
                >
                  <i className={`${floor.icon} text-2xl mb-1`}></i>
                  <div className="text-sm">{floor.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'furniture' && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-['Cairo'] font-semibold text-gray-700 mb-3">
              مكتبة الأثاث الاحترافية
            </label>
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {FURNITURE_LIBRARY.map(furniture => (
                <button
                  key={furniture.type}
                  onClick={() => handleAddFurniture(furniture.type)}
                  className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 border-2 border-gray-200 hover:border-[#FFA500] hover:shadow-lg transition-all cursor-pointer overflow-hidden"
                >
                  <div className="relative w-full h-24 mb-2 rounded-lg overflow-hidden bg-white">
                    <img 
                      src={furniture.image}
                      alt={furniture.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-['Cairo'] font-semibold text-gray-700 group-hover:text-[#FFA500]">
                      {furniture.name}
                    </span>
                    <i className={`${furniture.icon} text-xl text-gray-400 group-hover:text-[#FFA500]`}></i>
                  </div>
                  <div className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ri-add-line text-[#FFA500] text-lg"></i>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={onSaveDesign}
        className="w-full bg-gradient-to-r from-[#001F3F] to-[#003366] text-white py-4 rounded-xl font-['Cairo'] font-bold text-lg hover:from-[#003366] hover:to-[#004488] transition-all shadow-lg whitespace-nowrap cursor-pointer"
      >
        <i className="ri-save-line ml-2 text-xl"></i>
        حفظ التصميم
      </button>
    </div>
  );
}
