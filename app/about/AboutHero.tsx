'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'مشروع مكتمل', icon: 'ri-building-line' },
    { number: '15+', label: 'سنة خبرة', icon: 'ri-time-line' },
    { number: '98%', label: 'رضا العملاء', icon: 'ri-heart-line' },
    { number: '50+', label: 'مصمم محترف', icon: 'ri-team-line' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* خلفية احترافية */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20interior%20design%20team%20working%20in%20modern%20office%2C%20architectural%20blueprints%2C%20design%20materials%2C%20creative%20workspace%2C%20sophisticated%20environment%2C%20team%20collaboration%2C%20elegant%20office%20interior&width=1920&height=1080&seq=about-hero-bg&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90"></div>
        
        {/* تأثيرات هندسية متحركة */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#CBC1B8]/40 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Cairo'] font-bold mb-8 leading-tight">
            <span className="block text-white mb-2">
              رحلة إبداع
            </span>
            <span className="block text-[#CBC1B8] text-shadow-lg">
              تمتد لسنوات
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            منذ تأسيسنا، نسعى لتحويل أحلام عملائنا إلى واقع ملموس من خلال تصاميم مبتكرة 
            وخدمات متميزة تجمع بين الجمال والوظيفة
          </p>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#CBC1B8]/20 rounded-xl group-hover:bg-[#CBC1B8]/30 transition-all duration-300">
                  <i className={`${stat.icon} text-2xl text-[#CBC1B8]`}></i>
                </div>
                <div className="text-3xl font-bold text-[#CBC1B8] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* أزرار الإجراءات */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center -mt-4">
            <Link href="#company-story">
              <button className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl whitespace-nowrap flex items-center space-x-3 space-x-reverse hover:from-[#F7F6F4] hover:to-[#CBC1B8] cursor-pointer">
                <span>اكتشف قصتنا</span>
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="border-2 border-[#CBC1B8] text-[#CBC1B8] px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                تواصل معنا
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}