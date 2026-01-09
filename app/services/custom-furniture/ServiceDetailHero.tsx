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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20custom%20furniture%20workshop%2C%20handcrafted%20wooden%20furniture%2C%20premium%20materials%2C%20skilled%20craftsmen%20working%2C%20elegant%20furniture%20pieces%2C%20professional%20furniture%20manufacturing&width=1920&height=1080&seq=custom-furniture-hero&orientation=landscape')`,
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
            <i className="ri-home-gear-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">الأثاث المخصص</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold mb-6 leading-tight text-[#F7F6F4]">
            الأثاث المخصص
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-[#F7F6F4]/90">
            تصميم وتصنيع أثاث مخصص يناسب احتياجاتك ومساحتك بأعلى معايير الجودة
          </p>
        </div>
      </div>
    </section>
  );
}
