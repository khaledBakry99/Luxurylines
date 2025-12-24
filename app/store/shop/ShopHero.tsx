'use client';

import { useState, useEffect } from 'react';

export default function ShopHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20interior%20design%20showroom%20with%20premium%20furniture%20displays%20elegant%20lighting%20fixtures%20and%20sophisticated%20home%20decor%20items%2C%20modern%20minimalist%20retail%20space%20with%20clean%20white%20background%20and%20warm%20ambient%20lighting%2C%20professional%20commercial%20photography&width=1920&height=1080&seq=store-hero-bg&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/90 via-[#0F3A3E]/80 to-[#1C474A]/85"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 border border-[#CBC1B8]/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#CBC1B8]/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[#CBC1B8]/40 rounded-full animate-bounce-slow"></div>
          
          <div className="absolute top-32 right-32 w-16 h-16 bg-[#CBC1B8]/20 rotate-45 animate-float"></div>
          <div className="absolute bottom-40 left-40 w-12 h-12 border-2 border-[#CBC1B8]/50 rotate-45 animate-spin"></div>
          
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#CBC1B8]/20 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#CBC1B8]/15 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #CBC1B8 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #CBC1B8 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'float 8s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-10">
            <h1 className="font-['Cairo'] text-4xl md:text-5xl font-bold text-white mb-4">
              تسوق أفضل المنتجات
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              اكتشف مجموعتنا الفاخرة من الأثاث والديكور بأعلى جودة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'ri-verified-badge-line', label: 'منتجات أصلية', color: 'text-[#CBC1B8]' },
              { icon: 'ri-truck-line', label: 'توصيل مجاني', color: 'text-[#CBC1B8]' },
              { icon: 'ri-shield-check-line', label: 'ضمان شامل', color: 'text-[#CBC1B8]' }
            ].map((badge, index) => (
              <div 
                key={index}
                className={`group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#CBC1B8]/50 transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <i className={`${badge.icon} text-2xl text-[#0A1F21]`}></i>
                  </div>
                  <div className="text-white font-bold text-lg group-hover:text-[#CBC1B8] transition-colors duration-300">
                    {badge.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(45deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
