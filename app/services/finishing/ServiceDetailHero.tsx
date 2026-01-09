"use client";
import { useState, useEffect } from "react";

export default function ServiceDetailHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20interior%20finishing%20construction%20work%20with%20premium%20materials%2C%20elegant%20flooring%20installation%2C%20modern%20ceiling%20design%2C%20quality%20painting%20work%2C%20sophisticated%20lighting%20fixtures%2C%20luxury%20bathroom%20and%20kitchen%20finishing%2C%20clean%20workspace%2C%20professional%20craftsmanship%2C%20high-end%20residential%20finishing&width=1920&height=1080&seq=finishinghero1&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#CBC1B8]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#F7F6F4]/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-tools-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">
              التشطيب المتكامل
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold mb-6 leading-tight text-[#F7F6F4]">
            التشطيبات
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-[#F7F6F4]/90">
            خدمات تشطيب شاملة بأعلى معايير الجودة لإنهاء مشروعك بشكل مثالي
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/services/expert-tips"
              className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-5 rounded-2xl text-lg font-bold hover:from-[#F7F6F4] hover:to-[#CBC1B8] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 hover:scale-105 whitespace-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center gap-4">
                <i className="ri-lightbulb-line text-xl group-hover:rotate-[360deg] transition-transform duration-700"></i>
                <span className="relative">
                  نصائح من الخبراء
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A1F21]/50 group-hover:w-full transition-all duration-500"></div>
                </span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </a>

            <a
              href="/contact"
              className="group relative inline-flex items-center gap-4 bg-[#0A1F21] border-2 border-[#CBC1B8] text-[#CBC1B8] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 hover:scale-105 whitespace-nowrap overflow-hidden"
            >
              <div className="relative flex items-center gap-4">
                <i className="ri-phone-line text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                <span>تواصل معنا</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
