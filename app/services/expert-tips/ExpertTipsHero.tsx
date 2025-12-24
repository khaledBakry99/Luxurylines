'use client';
import { useState, useEffect } from 'react';

export default function ExpertTipsHero() {
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20interior%20design%20expert%20consultation%20with%20architectural%20plans%2C%20color%20palettes%2C%20material%20samples%2C%20design%20books%2C%20modern%20workspace%20with%20creative%20atmosphere&width=1920&height=1080&seq=expert-tips-hero&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#0A1F21]/90 to-[#0A1F21]/85"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-lightbulb-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">نصائح احترافية</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold mb-6 leading-tight">
            نصائح من خبرائنا
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
            استفد من خبرة فريقنا المتخصص في التصميم والديكور
          </p>
        </div>
      </div>
    </section>
  );
}