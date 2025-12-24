'use client';
import { useState, useEffect } from 'react';

export default function AllServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=comprehensive%20interior%20design%20services%20showcase%20with%20elegant%20furniture%2C%20modern%20lighting%2C%20architectural%20plans%2C%20color%20swatches%2C%20material%20samples%2C%20professional%20workspace%20with%20sophisticated%20design%20elements%20and%20tools&width=1920&height=1080&seq=all-services-hero&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#0A1F21]/90 to-[#0A1F21]/85"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-service-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">جميع خدماتنا</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold mb-6 leading-tight">
            استعرض جميع خدماتنا
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
            اكتشف مجموعتنا الكاملة من الخدمات المتخصصة في التصميم والتشطيب
          </p>
        </div>
      </div>
    </section>
  );
}