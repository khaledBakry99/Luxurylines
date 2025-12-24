'use client';

import { useState } from 'react';

type RoomData = {
  length: number;
  width: number;
  height: number;
};

type RoomDimensionsProps = {
  roomData: RoomData;
  onDataChange: (data: RoomData) => void;
};

export default function RoomDimensions({ roomData, onDataChange }: RoomDimensionsProps) {
  const [localData, setLocalData] = useState<RoomData>(roomData);

  const handleChange = (field: keyof RoomData, value: string | number) => {
    const numValue = typeof value === 'number' ? value : parseFloat(value) || 0;
    const newData = { ...localData, [field]: numValue };
    setLocalData(newData);
    onDataChange(newData);
  };

  const presetRooms = [
    { name: 'غرفة معيشة صغيرة', length: 4, width: 3.5, height: 2.8 },
    { name: 'غرفة معيشة متوسطة', length: 5, width: 4.5, height: 3 },
    { name: 'غرفة معيشة كبيرة', length: 7, width: 6, height: 3.2 },
    { name: 'غرفة نوم رئيسية', length: 5, width: 4, height: 3 },
    { name: 'غرفة نوم أطفال', length: 4, width: 3.5, height: 2.8 },
    { name: 'مكتب منزلي', length: 3.5, width: 3, height: 2.8 },
    { name: 'صالة استقبال', length: 8, width: 6, height: 3.5 }
  ];

  const handlePresetSelect = (preset: RoomData) => {
    setLocalData(preset);
    onDataChange(preset);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-['Cairo'] font-bold text-[#001F3F] mb-2">
            أبعاد الغرفة
          </h2>
          <p className="text-gray-600">
            حدد أبعاد غرفتك بالأمتار للحصول على تصميم دقيق
          </p>
        </div>

        {/* Quick Presets */}
        <div className="mb-8">
          <h3 className="text-lg font-['Cairo'] font-semibold text-[#001F3F] mb-4">
            <i className="ri-layout-grid-line text-[#FFA500] ml-2"></i>
            قوالب جاهزة
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {presetRooms.map((preset, index) => (
              <button
                key={index}
                onClick={() => handlePresetSelect(preset)}
                className="p-4 rounded-lg border-2 border-gray-200 hover:border-[#FFA500] transition-all cursor-pointer bg-gradient-to-br from-gray-50 to-white hover:from-orange-50 hover:to-orange-100 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mx-auto mb-2 group-hover:from-[#FFA500] group-hover:to-[#FF8C00]">
                  <i className="ri-home-4-line text-xl text-[#001F3F] group-hover:text-white"></i>
                </div>
                <p className="text-sm font-['Cairo'] font-semibold text-center mb-1">
                  {preset.name}
                </p>
                <p className="text-xs text-gray-500 text-center">
                  {preset.length}م × {preset.width}م
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Dimensions */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-['Cairo'] font-semibold text-[#001F3F] mb-6">
            <i className="ri-ruler-line text-[#FFA500] ml-2"></i>
            أبعاد مخصصة
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Length */}
            <div>
              <label className="block text-sm font-['Cairo'] font-semibold text-gray-700 mb-3">
                <i className="ri-arrow-left-right-line text-[#FFA500] ml-1"></i>
                الطول (متر)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="2"
                  max="15"
                  step="0.5"
                  value={localData.length}
                  onChange={(e) => handleChange('length', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA500] focus:outline-none font-['Cairo'] text-lg font-semibold text-center"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                  م
                </div>
              </div>
              <input
                type="range"
                min="2"
                max="15"
                step="0.5"
                value={localData.length}
                onChange={(e) => handleChange('length', e.target.value)}
                className="w-full mt-3 accent-[#FFA500] cursor-pointer"
              />
            </div>

            {/* Width */}
            <div>
              <label className="block text-sm font-['Cairo'] font-semibold text-gray-700 mb-3">
                <i className="ri-arrow-up-down-line text-[#FFA500] ml-1"></i>
                العرض (متر)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="2"
                  max="15"
                  step="0.5"
                  value={localData.width}
                  onChange={(e) => handleChange('width', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA500] focus:outline-none font-['Cairo'] text-lg font-semibold text-center"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                  م
                </div>
              </div>
              <input
                type="range"
                min="2"
                max="15"
                step="0.5"
                value={localData.width}
                onChange={(e) => handleChange('width', e.target.value)}
                className="w-full mt-3 accent-[#FFA500] cursor-pointer"
              />
            </div>

            {/* Height */}
            <div>
              <label className="block text-sm font-['Cairo'] font-semibold text-gray-700 mb-3">
                <i className="ri-expand-up-down-line text-[#FFA500] ml-1"></i>
                الارتفاع (متر)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="2.4"
                  max="5"
                  step="0.1"
                  value={localData.height}
                  onChange={(e) => handleChange('height', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#FFA500] focus:outline-none font-['Cairo'] text-lg font-semibold text-center"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                  م
                </div>
              </div>
              <input
                type="range"
                min="2.4"
                max="5"
                step="0.1"
                value={localData.height}
                onChange={(e) => handleChange('height', e.target.value)}
                className="w-full mt-3 accent-[#FFA500] cursor-pointer"
              />
            </div>
          </div>

          {/* Room Info */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-xs text-gray-600 font-['Cairo'] mb-1">المساحة الكلية</p>
              <p className="text-2xl font-['Cairo'] font-bold text-[#001F3F]">
                {(localData.length * localData.width).toFixed(2)} م²
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-xs text-gray-600 font-['Cairo'] mb-1">الحجم الكلي</p>
              <p className="text-2xl font-['Cairo'] font-bold text-[#001F3F]">
                {(localData.length * localData.width * localData.height).toFixed(2)} م³
              </p>
            </div>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-['Cairo'] font-semibold text-[#001F3F] mb-4 text-center">
            <i className="ri-eye-line text-[#FFA500] ml-2"></i>
            معاينة الأبعاد
          </h3>
          <div className="relative mx-auto" style={{ maxWidth: '400px', height: '300px' }}>
            {/* 3D Box Preview */}
            <div className="w-full h-full flex items-center justify-center" style={{ perspective: '800px' }}>
              <div
                className="relative bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-400 rounded-lg shadow-2xl"
                style={{
                  width: `${Math.min(localData.length * 40, 250)}px`,
                  height: `${Math.min(localData.width * 40, 200)}px`,
                  transform: 'rotateX(60deg) rotateZ(-45deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Top Face */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-lg"></div>
                
                {/* Side Face */}
                <div
                  className="absolute top-0 right-0 bg-gradient-to-br from-blue-200 to-blue-300 border-r-2 border-blue-400"
                  style={{
                    width: `${Math.min(localData.height * 30, 100)}px`,
                    height: '100%',
                    transform: 'rotateY(90deg) translateZ(0)',
                    transformOrigin: 'right',
                    borderRadius: '0 8px 8px 0'
                  }}
                ></div>

                {/* Front Face */}
                <div
                  className="absolute bottom-0 left-0 bg-gradient-to-br from-blue-300 to-blue-400 border-b-2 border-blue-500"
                  style={{
                    width: '100%',
                    height: `${Math.min(localData.height * 30, 100)}px`,
                    transform: 'rotateX(-90deg) translateZ(0)',
                    transformOrigin: 'bottom',
                    borderRadius: '0 0 8px 8px'
                  }}
                ></div>

                {/* Dimensions Labels */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-['Cairo'] font-semibold text-gray-700 whitespace-nowrap">
                  {localData.length}م
                </div>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-sm font-['Cairo'] font-semibold text-gray-700 whitespace-nowrap">
                  {localData.width}م
                </div>
                <div className="absolute top-0 -left-12 text-sm font-['Cairo'] font-semibold text-gray-700 whitespace-nowrap">
                  {localData.height}م
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm font-['Cairo'] text-yellow-800">
            <i className="ri-lightbulb-line ml-1"></i>
            <strong>نصيحة:</strong> للحصول على أفضل نتيجة، قم بقياس غرفتك بدقة باستخدام شريط القياس. الأبعاد الدقيقة تساعد في تصميم أفضل!
          </p>
        </div>
      </div>
    </div>
  );
}
