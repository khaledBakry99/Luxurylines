'use client';

import dynamic from 'next/dynamic';
import ControlPanel from './ControlPanel';
import RoomTypeSelector from './RoomTypeSelector';
import { useDesignerStore } from '@/lib/designerStore';
import { useState, useEffect } from 'react';

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false });

export default function LinDesignerPage() {
  const { selectedRoomType, setSelectedRoomType } = useDesignerStore();
  const [isSceneLoading, setIsSceneLoading] = useState(true);
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    if (selectedRoomType) {
      setIsSceneLoading(true);
      setShowScene(false);
      
      const timer = setTimeout(() => {
        setShowScene(true);
        setTimeout(() => {
          setIsSceneLoading(false);
        }, 500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [selectedRoomType]);

  if (!selectedRoomType) {
    return <RoomTypeSelector />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#001F3F] via-[#002855] to-[#003366] text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-1">مصمم الديكور الذكي</h1>
            <p className="text-gray-300 text-sm">صمم غرفتك بطريقة ثلاثية الأبعاد</p>
          </div>
          <button
            onClick={() => {
              setSelectedRoomType(null);
              setIsSceneLoading(true);
              setShowScene(false);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors whitespace-nowrap"
          >
            <i className="ri-refresh-line w-5 h-5 flex items-center justify-center"></i>
            <span>تغيير نوع الغرفة</span>
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-120px)]">
        <div className="flex-1 relative bg-gray-50">
          {isSceneLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 border-8 border-gray-700 rounded-full"></div>
                  <div className="absolute inset-0 border-8 border-transparent border-t-[#FF6B35] rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className="ri-home-smile-line text-5xl text-[#FF6B35] animate-pulse w-12 h-12 flex items-center justify-center"></i>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">جاري تحميل الغرفة</h3>
                <p className="text-gray-400 mb-4">يتم بناء المشهد ثلاثي الأبعاد<span className="animate-pulse">...</span></p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <i className="ri-lightbulb-line w-4 h-4 flex items-center justify-center"></i>
                  <span>نصيحة: استخدم الماوس للتحكم بالكاميرا</span>
                </div>
              </div>
            </div>
          )}
          {showScene && <Scene3D />}
        </div>
        <ControlPanel />
      </div>
    </div>
  );
}
