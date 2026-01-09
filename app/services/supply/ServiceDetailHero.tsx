"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ServiceDetailHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=high%20quality%20construction%20materials%20warehouse%20with%20premium%20building%20supplies%2C%20elegant%20marble%20tiles%2C%20wooden%20materials%2C%20modern%20fixtures%2C%20professional%20supply%20storage%2C%20clean%20organized%20environment%20with%20natural%20lighting&width=1920&height=1080&seq=supply-hero-bg&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#0A1F21]/90 to-[#0A1F21]/95"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-truck-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">
              توريد مواد البناء
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Cairo'] font-bold mb-8 leading-tight">
            <span className="block text-white">توريد مواد البناء</span>
            <span className="block text-[#CBC1B8] mt-6">بأعلى جودة</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            نوفر لك أفضل المواد والخامات الأساسية لمشروعك من مصادر موثوقة، مع
            ضمان الجودة والتوصيل في الوقت المحدد
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                label: "مواد معتمدة",
                value: "100%",
                icon: "ri-checkbox-circle-line",
              },
              { label: "توصيل سريع", value: "24/7", icon: "ri-truck-line" },
              {
                label: "ضمان الجودة",
                value: "5 سنوات",
                icon: "ri-shield-check-line",
              },
              {
                label: "أسعار تنافسية",
                value: "أفضل",
                icon: "ri-price-tag-3-line",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <i className={`${stat.icon} text-4xl text-[#CBC1B8] mb-3`}></i>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link href="/services/expert-tips">
            <button className="bg-[#CBC1B8] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#CBC1B8]/90 transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              <span className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-lightbulb-line text-xl"></i>
                <span>نصائح من الخبراء</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
