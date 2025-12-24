
'use client';
import { useState, useEffect } from 'react';

export default function ServiceDetailHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20interior%20decoration%20with%20beautiful%20accessories%2C%20artistic%20paintings%2C%20luxurious%20curtains%2C%20decorative%20items%2C%20sophisticated%20color%20palette%2C%20modern%20home%20styling%2C%20professional%20interior%20styling%20setup&width=1920&height=1080&seq=decoration-hero&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F33]-900/95 via-[#0A2F33]-900/90 to-[#F7F6F4]-800/85"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-palette-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">الديكور والتنسيق</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold mb-6 leading-tight">
            الديكور والتنسيق
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
            خدمات ديكور وتنسيق متكاملة لإضفاء لمسة جمالية فريدة على مساحتك
          </p>
        </div>
      </div>
    </section>
  );
}
