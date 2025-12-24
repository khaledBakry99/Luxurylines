
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20modern%20kitchen%20with%20premium%20appliances%2C%20elegant%20cabinets%2C%20marble%20countertops%2C%20sophisticated%20design%2C%20high-end%20kitchen%20equipment%2C%20professional%20cooking%20space&width=1920&height=1080&seq=luxury-kitchen-hero&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-zinc-800/85"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-restaurant-2-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">المطابخ الفاخرة</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold mb-6 leading-tight">
            المطابخ الفاخرة
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
            تصميم وتنفيذ مطابخ فاخرة بأحدث التقنيات والتجهيزات العالمية
          </p>
        </div>
      </div>
    </section>
  );
}
