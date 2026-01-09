"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OfflinePage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isMounted) return null;

  // إذا كان الاتصال متاح، أعد التوجيه للصفحة الرئيسية
  if (isOnline) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#1C474A] to-[#0A2F33] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-[#F7F6F4] mb-4">
            الاتصال متاح الآن
          </h1>
          <p className="text-[#CBC1B8] mb-8">جاري إعادة التوجيه...</p>
          <Link href="/home">
            <button className="px-8 py-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] font-bold rounded-xl hover:scale-105 transition-transform">
              العودة للصفحة الرئيسية
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#1C474A] to-[#0A2F33] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#CBC1B8]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-500/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* WiFi Icon with Animation */}
        <div className="mb-8 relative">
          <div className="inline-block">
            <div
              className="text-8xl md:text-9xl animate-pulse"
              style={{ animationDuration: "1.5s" }}
            >
              📡
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#F7F6F4] mb-4 leading-tight">
          لا يوجد اتصال بالإنترنت
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#CBC1B8] mb-8 leading-relaxed">
          يبدو أن الاتصال بالإنترنت قد انقطع. تحقق من اتصالك وحاول مرة أخرى.
        </p>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-12"></div>

        {/* Status Info */}
        <div className="mb-12 p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-[#F7F6F4] font-semibold">
              حالة الاتصال: غير متصل
            </span>
          </div>
          <p className="text-[#CBC1B8] text-sm">
            تحقق من:
            <br />
            • اتصال WiFi أو البيانات الخلوية
            <br />
            • إعادة تشغيل جهازك
            <br />• التحقق من إعدادات الشبكة
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => window.location.reload()}
            className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center space-x-2 space-x-reverse">
              <i className="ri-refresh-line text-xl"></i>
              <span>حاول مرة أخرى</span>
            </span>
          </button>

          <Link href="/home">
            <button className="group relative px-8 py-4 border-2 border-[#CBC1B8] text-[#CBC1B8] font-bold rounded-xl transition-all duration-300 hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/30 hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center justify-center space-x-2 space-x-reverse">
                <i className="ri-home-line text-xl"></i>
                <span>الصفحة الرئيسية</span>
              </span>
            </button>
          </Link>
        </div>

        {/* Offline Features */}
        <div className="mb-12">
          <p className="text-[#CBC1B8] font-semibold mb-4">
            ما يمكنك فعله بدون اتصال:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#CBC1B8]/5 border border-[#CBC1B8]/20">
              <i className="ri-file-text-line text-2xl text-[#CBC1B8] mb-2 block"></i>
              <p className="text-sm text-[#F7F6F4]">قراءة المحتوى المحفوظ</p>
            </div>

            <div className="p-4 rounded-xl bg-[#CBC1B8]/5 border border-[#CBC1B8]/20">
              <i className="ri-bookmark-line text-2xl text-[#CBC1B8] mb-2 block"></i>
              <p className="text-sm text-[#F7F6F4]">عرض المفضلة</p>
            </div>

            <div className="p-4 rounded-xl bg-[#CBC1B8]/5 border border-[#CBC1B8]/20">
              <i className="ri-settings-line text-2xl text-[#CBC1B8] mb-2 block"></i>
              <p className="text-sm text-[#F7F6F4]">تغيير الإعدادات</p>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-[#CBC1B8]/10 to-[#F7F6F4]/5 border border-[#CBC1B8]/20 backdrop-blur-sm">
          <p className="text-[#F7F6F4] text-sm md:text-base">
            <span className="text-[#CBC1B8] font-semibold">نصيحة:</span>
            <br />
            بمجرد استعادة الاتصال، ستتمكن من الوصول إلى جميع الميزات والخدمات
            بشكل طبيعي.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-500/20 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 border-2 border-yellow-500/10 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}
