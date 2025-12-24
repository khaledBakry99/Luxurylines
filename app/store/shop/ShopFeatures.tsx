'use client';

import { useState, useEffect } from 'react';

export default function ShopFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'ضمان الجودة',
      description: 'جميع منتجاتنا أصلية 100% مع ضمان شامل',
      color: 'from-[#CBC1B8] to-[#F7F6F4]'
    },
    {
      icon: 'ri-truck-line',
      title: 'توصيل مجاني',
      description: 'توصيل مجاني لجميع الطلبات داخل المملكة',
      color: 'from-[#F7F6F4] to-[#CBC1B8]'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'دعم 24/7',
      description: 'فريق دعم متاح على مدار الساعة لخدمتك',
      color: 'from-[#CBC1B8] to-[#F7F6F4]'
    },
    {
      icon: 'ri-refresh-line',
      title: 'إرجاع سهل',
      description: 'سياسة إرجاع مرنة خلال 30 يوم',
      color: 'from-[#F7F6F4] to-[#CBC1B8]'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1C474A] to-[#0A2F33]">
      <div className="max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-[#CBC1B8]/20 border border-white/20 hover:shadow-2xl hover:shadow-[#CBC1B8]/40 hover:border-[#CBC1B8]/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg shadow-[#CBC1B8]/40 group-hover:shadow-[#CBC1B8]/60 group-hover:scale-110 transition-all duration-300`}>
                  <i className={`${feature.icon} text-4xl text-[#0A1F21]`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-[#CBC1B8] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}