"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#1C474A] to-[#0A2F33] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#CBC1B8]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Error Icon with Animation */}
        <div className="mb-8 relative">
          <div className="inline-block">
            <div className="text-8xl md:text-9xl animate-bounce" style={{ animationDuration: "2s" }}>
              ⚠️
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#F7F6F4] mb-4 leading-tight">
          حدث خطأ ما
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#CBC1B8] mb-8 leading-relaxed">
          عذراً، حدث خطأ غير متوقع أثناء معالجة طلبك. يرجى محاولة مرة أخرى أو العودة إلى الصفحة الرئيسية.
        </p>

        {/* Error Details (if available) */}
        {error?.message && (
          <div className="mb-8 p-4 rounded-lg bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
            <p className="text-red-400 text-sm font-mono">
              {error.message}
            </p>
          </div>
        )}

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-12"></div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={reset}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <Link href="/services">
            <div className="group p-4 rounded-xl bg-[#CBC1B8]/5 border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/50 hover:bg-[#CBC1B8]/10 transition-all duration-300 cursor-pointer">
              <i className="ri-service-line text-2xl text-[#CBC1B8] mb-2 block group-hover:scale-110 transition-transform"></i>
              <p className="text-sm text-[#F7F6F4] font-medium">الخدمات</p>
            </div>
          </Link>

          <Link href="/projects">
            <div className="group p-4 rounded-xl bg-[#CBC1B8]/5 border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/50 hover:bg-[#CBC1B8]/10 transition-all duration-300 cursor-pointer">
              <i className="ri-building-line text-2xl text-[#CBC1B8] mb-2 block group-hover:scale-110 transition-transform"></i>
              <p className="text-sm text-[#F7F6F4] font-medium">المشاريع</p>
            </div>
          </Link>

          <Link href="/contact">
            <div className="group p-4 rounded-xl bg-[#CBC1B8]/5 border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/50 hover:bg-[#CBC1B8]/10 transition-all duration-300 cursor-pointer">
              <i className="ri-phone-line text-2xl text-[#CBC1B8] mb-2 block group-hover:scale-110 transition-transform"></i>
              <p className="text-sm text-[#F7F6F4] font-medium">اتصل بنا</p>
            </div>
          </Link>
        </div>

        {/* Support Info */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-[#CBC1B8]/10 to-[#F7F6F4]/5 border border-[#CBC1B8]/20 backdrop-blur-sm">
          <p className="text-[#F7F6F4] text-sm md:text-base">
            <span className="text-[#CBC1B8] font-semibold">هل تحتاج مساعدة؟</span>
            <br />
            إذا استمرت المشكلة، يرجى التواصل معنا عبر صفحة الاتصال أو البريد الإلكتروني.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-red-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-red-500/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
}
