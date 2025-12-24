
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
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20smart%20lighting%20system%20with%20LED%20lights%2C%20intelligent%20control%20panels%2C%20energy%20efficient%20lighting%2C%20contemporary%20home%20automation%2C%20beautiful%20ambient%20lighting%2C%20smart%20home%20technology&width=1920&height=1080&seq=smart-lighting-hero&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#0F3A3E]/90 to-[#1C474A]/85"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-lightbulb-flash-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">الإضاءة الذكية</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold mb-6 leading-tight">
            الإضاءة الذكية
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
            حلول إضاءة ذكية ومبتكرة تجمع بين الكفاءة والجمال لخلق أجواء مثالية
          </p>
        </div>
      </div>
    </section>
  );
}
