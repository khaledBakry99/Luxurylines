
'use client';

import { useState, useEffect } from 'react';

export default function ConsultationHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* خلفية احترافية */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20consultation%20meeting%2C%20interior%20designer%20discussing%20with%20clients%2C%20architectural%20plans%20on%20table%2C%20modern%20office%20environment%2C%20sophisticated%20consultation%20room%2C%20design%20materials%20and%20samples&width=1920&height=1080&seq=consultation-hero-bg&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#1C474A]/85 to-[#0F3A3E]/90"></div>
        
        {/* تأثيرات هندسية متحركة */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-20 w-40 h-40 border-2 border-[#CBC1B8]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-32 w-32 h-32 bg-[#CBC1B8]/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-[#CBC1B8]/30 rounded-lg animate-bounce-slow"></div>
          <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-[#CBC1B8]/20 rounded-full animate-float"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* شارة مميزة */}
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-customer-service-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">استشارة مجانية</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Cairo'] font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-[#CBC1B8] to-white bg-clip-text text-transparent">
              احجز استشارتك
            </span>
            <span className="block text-[#CBC1B8] mt-4">
              المجانية الآن
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            احصل على استشارة مجانية من خبرائنا لمناقشة مشروعك والحصول على أفضل الحلول 
            التصميمية التي تناسب احتياجاتك وميزانيتك
          </p>

          {/* المميزات */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'استشارة مجانية', icon: 'ri-gift-line', desc: 'بدون أي رسوم أو التزامات' },
              { title: 'خبراء متخصصون', icon: 'ri-user-star-line', desc: 'فريق من أمهر المصممين' },
              { title: 'حلول مخصصة', icon: 'ri-lightbulb-line', desc: 'تصاميم تناسب احتياجاتك' }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#CBC1B8]/20 rounded-xl group-hover:bg-[#CBC1B8]/30 transition-all duration-300">
                  <i className={`${feature.icon} text-2xl text-[#CBC1B8]`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* أزرار الإجراءات */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 shadow-2xl whitespace-nowrap">
              <span className="relative z-10 flex items-center space-x-3 space-x-reverse">
                <span>احجز استشارتك الآن</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-l from-[#CBC1B8] to-[#F7F6F4] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            
            <button className="border-2 border-[#CBC1B8] text-[#CBC1B8] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 whitespace-nowrap">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}