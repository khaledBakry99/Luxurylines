'use client';

import { useState, useEffect } from 'react';
import RoomDimensions from './RoomDimensions';
import DesignControls, { type DesignData, type FurnitureItem } from './DesignControls';
import Room3DViewer from './Room3DViewer';
import SavedDesigns from './SavedDesigns';
import ModelUploader from './ModelUploader';

type RoomData = {
  length: number;
  width: number;
  height: number;
};

type SavedDesign = {
  id: number;
  name: string;
  createdAt: string;
  roomData: RoomData;
  designData: DesignData;
  thumbnail: string;
};

export default function LinDesignerTool() {
  const [step, setStep] = useState(1);
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [selectedFurniture, setSelectedFurniture] = useState<FurnitureItem | null>(null);
  const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>([]);
  
  const [roomData, setRoomData] = useState<RoomData>({
    length: 6,
    width: 5,
    height: 3,
  });

  const [designData, setDesignData] = useState<DesignData>({
    wallColor: '#FFFFFF',
    floorType: 'ceramic',
    furniture: [],
  });

  useEffect(() => {
    const designs = JSON.parse(localStorage.getItem('linDesigns') || '[]') as SavedDesign[];
    setSavedDesigns(designs);
  }, []);

  const handleSaveDesign = () => {
    const designs = JSON.parse(localStorage.getItem('linDesigns') || '[]') as SavedDesign[];
    const newDesign: SavedDesign = {
      id: Date.now(),
      name: `تصميم ${designs.length + 1}`,
      createdAt: new Date().toLocaleDateString('ar-SA'),
      roomData,
      designData,
      thumbnail: 'https://readdy.ai/api/search-image?query=modern%20interior%20design%20room%203d%20visualization%20elegant%20contemporary%20style%20clean%20minimalist%20furniture%20layout%20professional%20architectural%20rendering&width=400&height=300&seq=design-thumb-1&orientation=landscape'
    };
    designs.push(newDesign);
    localStorage.setItem('linDesigns', JSON.stringify(designs));
    setSavedDesigns(designs);
    alert('تم حفظ التصميم بنجاح! ✨');
  };

  const handleLoadDesign = (design: SavedDesign) => {
    setRoomData(design.roomData);
    const normalizedFurniture = (design.designData.furniture || []).map((item) => ({
      ...item,
      id: String(item.id),
    }));
    setDesignData({ ...design.designData, furniture: normalizedFurniture });
    setStep(2);
  };

  const handleFurnitureDelete = (furnitureId: string) => {
    const updatedFurniture = designData.furniture.filter(item => item.id !== furnitureId);
    setDesignData({ ...designData, furniture: updatedFurniture });
    setSelectedFurniture(null);
  };

  const toggleControlMode = () => {
    setControlsEnabled(!controlsEnabled);
    setSelectedFurniture(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#001F3F] mb-4">
            مصمم لين الذكي
          </h1>
          <p className="text-lg text-gray-600 font-['Cairo']">
            صمم غرفتك بتقنية ثلاثية الأبعاد احترافية
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setStep(1)}
              className={`px-6 py-3 rounded-full font-['Cairo'] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                step === 1
                  ? 'bg-gradient-to-r from-[#001F3F] to-[#003366] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#001F3F]'
              }`}
            >
              <i className="ri-ruler-line ml-2"></i>
              أبعاد الغرفة
            </button>
            <button
              onClick={() => setStep(2)}
              className={`px-6 py-3 rounded-full font-['Cairo'] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                step === 2
                  ? 'bg-gradient-to-r from-[#001F3F] to-[#003366] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#001F3F]'
              }`}
            >
              <i className="ri-paint-brush-line ml-2"></i>
              التصميم
            </button>
            <button
              onClick={() => setStep(3)}
              className={`px-6 py-3 rounded-full font-['Cairo'] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                step === 3
                  ? 'bg-gradient-to-r from-[#001F3F] to-[#003366] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#001F3F]'
              }`}
            >
              <i className="ri-save-line ml-2"></i>
              التصاميم المحفوظة
            </button>
            <button
              onClick={() => setStep(4)}
              className={`px-6 py-3 rounded-full font-['Cairo'] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                step === 4
                  ? 'bg-gradient-to-r from-[#001F3F] to-[#003366] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#001F3F]'
              }`}
            >
              <i className="ri-upload-cloud-line ml-2"></i>
              إضافة مجسمات
            </button>
          </div>
        </div>

        {step === 1 && (
          <div className="max-w-2xl mx-auto">
            <RoomDimensions 
              roomData={roomData} 
              onDataChange={setRoomData}
            />
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <DesignControls 
                designData={designData}
                onDesignChange={setDesignData}
                onSaveDesign={handleSaveDesign}
              />
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-['Cairo'] font-bold text-[#001F3F]">
                    عرض ثلاثي الأبعاد
                  </h3>
                  <button
                    onClick={toggleControlMode}
                    className={`px-6 py-3 rounded-lg font-['Cairo'] font-semibold transition-all whitespace-nowrap cursor-pointer shadow-lg ${
                      controlsEnabled
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                        : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                    }`}
                  >
                    <i className={`${controlsEnabled ? 'ri-camera-line' : 'ri-drag-move-line'} ml-2 text-lg`}></i>
                    {controlsEnabled ? 'وضع التحكم بالكاميرا' : 'وضع تحريك الأثاث'}
                  </button>
                </div>

                <div style={{ height: '600px' }}>
                  <Room3DViewer 
                    roomData={roomData}
                    designData={designData}
                    selectedFurniture={selectedFurniture}
                    onFurnitureSelect={setSelectedFurniture}
                    onFurnitureDelete={handleFurnitureDelete}
                    onFurnitureMove={(data: DesignData) => setDesignData(data)}
                    controlsEnabled={controlsEnabled}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-lg">
                      <i className="ri-palette-line text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-['Cairo']">لون الجدران</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: designData.wallColor }}
                        ></div>
                        <span className="text-sm font-['Cairo'] font-semibold text-gray-800">
                          {designData.wallColor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-lg">
                      <i className="ri-home-4-line text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-['Cairo']">نوع الأرضية</p>
                      <p className="text-sm font-['Cairo'] font-semibold text-gray-800 mt-1">
                        {designData.floorType === 'wood' ? 'خشب' :
                         designData.floorType === 'marble' ? 'رخام' :
                         designData.floorType === 'carpet' ? 'موكيت' :
                         designData.floorType === 'parquet' ? 'باركيه' :
                         designData.floorType === 'vinyl' ? 'فينيل' : 'سيراميك'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-lg">
                      <i className="ri-sofa-line text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-['Cairo']">عدد القطع</p>
                      <p className="text-sm font-['Cairo'] font-semibold text-gray-800 mt-1">
                        {designData.furniture?.length || 0} قطعة أثاث
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <SavedDesigns 
            savedDesigns={savedDesigns}
            onLoadDesign={handleLoadDesign} 
          />
        )}

        {step === 4 && (
          <ModelUploader onModelAdd={() => {}} />
        )}
      </div>
    </div>
  );
}
