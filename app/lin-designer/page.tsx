"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ControlPanel from "./ControlPanel";
import RoomTypeSelector from "./RoomTypeSelector";
import { useDesignerStore } from "@/lib/designerStore";
import { useState, useEffect } from "react";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

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
    return (
      <>
        <Header />
        <div className="relative">
          <RoomTypeSelector />
          {/* طبقة الصفحة قيد التطوير */}
          <div className="absolute inset-0 bg-[#0A1F21]/95 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center px-6">
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                  <i className="ri-tools-line text-5xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#F7F6F4] mb-4">
                الصفحة قيد التطوير
              </h2>
              <p className="text-xl text-[#CBC1B8] mb-8 max-w-2xl mx-auto">
                نعمل حالياً على تطوير مصمم الديكور الذكي لتقديم أفضل تجربة تصميم
                ثلاثية الأبعاد
              </p>
              <div className="flex items-center justify-center gap-3 text-[#F7F6F4]/70">
                <div
                  className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-white">
        <div className="bg-gradient-to-r from-[#0A1F21] via-[#1C474A] to-[#0A1F21] text-white py-4">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">مصمم الديكور الذكي</h1>
              <p className="text-[#CBC1B8] text-sm">
                صمم غرفتك بطريقة ثلاثية الأبعاد
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedRoomType(null);
                setIsSceneLoading(true);
                setShowScene(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[#CBC1B8]/20 hover:bg-[#CBC1B8]/30 rounded-lg transition-colors whitespace-nowrap border border-[#CBC1B8]/30"
            >
              <i className="ri-refresh-line w-5 h-5 flex items-center justify-center"></i>
              <span>تغيير نوع الغرفة</span>
            </button>
          </div>
        </div>

        <div className="flex h-[calc(100vh-120px)]">
          <div className="flex-1 relative bg-[#F7F6F4]">
            {isSceneLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0A1F21] via-[#1C474A] to-[#0A1F21] z-50">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 border-8 border-[#1C474A] rounded-full"></div>
                    <div className="absolute inset-0 border-8 border-transparent border-t-[#CBC1B8] rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className="ri-home-smile-line text-5xl text-[#CBC1B8] animate-pulse w-12 h-12 flex items-center justify-center"></i>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    جاري تحميل الغرفة
                  </h3>
                  <p className="text-[#CBC1B8] mb-4">
                    يتم بناء المشهد ثلاثي الأبعاد
                    <span className="animate-pulse">...</span>
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-[#F7F6F4]/70">
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

        {/* طبقة الصفحة قيد التطوير */}
        <div className="absolute inset-0 bg-[#0A1F21]/95 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="text-center px-6">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                <i className="ri-tools-line text-5xl text-[#0A1F21]"></i>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#F7F6F4] mb-4">
              الصفحة قيد التطوير
            </h2>
            <p className="text-xl text-[#CBC1B8] mb-8 max-w-2xl mx-auto">
              نعمل حالياً على تطوير مصمم الديكور الذكي لتقديم أفضل تجربة تصميم
              ثلاثية الأبعاد
            </p>
            <div className="flex items-center justify-center gap-3 text-[#F7F6F4]/70">
              <div
                className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
