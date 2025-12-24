'use client';
import { useState, useEffect } from 'react';

export default function ServiceFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: 'ri-building-2-line',
      title: 'تصميم الواجهات',
      description: 'تصميم واجهات معمارية فريدة تعكس الطابع العصري والفخامة',
      color: 'from-[#0F3A3E] to-[#1C474A]'
    },
    {
      icon: 'ri-plant-line',
      title: 'تنسيق الحدائق',
      description: 'تصميم وتنسيق حدائق خضراء جميلة ومتناسقة مع التصميم العام',
      color: 'from-[#0A2F33] to-[#0F3A3E]'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'الإضاءة الخارجية',
      description: 'أنظمة إضاءة خارجية متطورة تبرز جمال التصميم ليلاً',
      color: 'from-[#CBC1B8] to-[#F7F6F4]'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'المواد المقاومة',
      description: 'استخدام مواد عالية الجودة مقاومة للعوامل الجوية',
      color: 'from-[#0A1F21] to-[#1C474A]'
    },
    {
      icon: 'ri-water-flash-line',
      title: 'العزل المائي',
      description: 'أنظمة عزل متقدمة لحماية المبنى من الرطوبة والتسربات',
      color: 'from-[#0F3A3E] to-[#0A2F33]'
    },
    {
      icon: 'ri-paint-brush-line',
      title: 'الدهانات الخارجية',
      description: 'دهانات خارجية فاخرة بألوان متناسقة ومقاومة للعوامل الجوية',
      color: 'from-[#1C474A] to-[#0A1F21]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F3A3E] to-[#1C474A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#CBC1B8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block bg-[#CBC1B8]/20 text-[#CBC1B8] px-6 py-2 rounded-full text-lg font-semibold border border-[#CBC1B8]/30 backdrop-blur-sm">
              مميزات الخدمة
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-6">
            لماذا تختار خدمة التصميم الخارجي؟
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نقدم حلول تصميم خارجي متكاملة تجمع بين الجمال والوظيفة والاستدامة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:bg-white/20 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}