"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F21] via-[#1C474A] to-[#0A1F21]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20luxury%20interior%20design%20showcase%20with%20elegant%20living%20room%2C%20sophisticated%20furniture%2C%20professional%20lighting%2C%20contemporary%20architecture%2C%20high-end%20residential%20space%2C%20clean%20minimalist%20design%2C%20neutral%20color%20palette&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/95 via-[#0A1F21]/75 to-[#1C474A]/60"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#CBC1B8]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#F7F6F4]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full">
          <div className="max-w-4xl">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
            

              <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold text-[#F7F6F4] mb-8 leading-tight">
                <span className="text-[#CBC1B8]">
                  معنا تصميم أحلامك يصبح حقيقة
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#F7F6F4]/85 mb-12 leading-relaxed max-w-3xl">
                خبرة تزيد عن 15 عاماً في تصميم وتنفيذ أرقى المساحات الداخلية
                والخارجية مع فريق من أمهر المصممين والحرفيين ذو الخبرة
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Primary CTA Button */}
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-xl font-['Cairo'] font-bold text-lg hover:from-[#CBC1B8] hover:to-[#F7F6F4] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 transform whitespace-nowrap overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center gap-3">
                  <span className="relative">اكتشف مشاريعنا</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-[#0A1F21]/30 rounded-full transition-all duration-300">
                    <i className="ri-arrow-left-line text-lg"></i>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
              </Link>

              {/* Secondary CTA Button */}
              <Link
                href="/consultation"
                className="group relative inline-flex items-center gap-3 bg-[#1C474A]/40 backdrop-blur-sm text-[#F7F6F4] px-8 py-4 rounded-xl font-['Cairo'] font-bold text-lg hover:bg-[#1C474A]/60 transition-all duration-500 cursor-pointer border-2 border-[#CBC1B8]/30 hover:border-[#CBC1B8]/60 whitespace-nowrap overflow-hidden"
              >
                <div className="relative flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-[#CBC1B8]/20 rounded-full group-hover:bg-[#CBC1B8]/40 group-hover:scale-110 transition-all duration-300">
                    <i className="ri-phone-line text-lg text-[#CBC1B8] group-hover:text-[#F7F6F4] transition-colors duration-300"></i>
                  </div>
                  <span>تواصل مع المهندس</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {[
                { number: "500+", label: "مشروع مكتمل" },
                { number: "15+", label: "سنة خبرة" },
                { number: "98%", label: "رضا العملاء" },
                { number: "50+", label: "مصمم محترف" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-[#CBC1B8] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-[#F7F6F4]/85 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
