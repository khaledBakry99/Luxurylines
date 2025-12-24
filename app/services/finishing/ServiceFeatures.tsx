'use client';
import { useState, useEffect, useRef } from 'react';

const features = [
  {
    icon: 'ri-drop-line',
    title: 'أعمال السباكة',
    description: 'تركيب وصيانة أنظمة السباكة بأحدث التقنيات والمواد عالية الجودة',
    color: 'from-[#0A1F21] to-[#0F3A3E]'
  },
  {
    icon: 'ri-flashlight-line',
    title: 'الأعمال الكهربائية',
    description: 'تصميم وتنفيذ الأنظمة الكهربائية وفق أعلى معايير السلامة',
    color: 'from-[#F7F6F4] to-[#CBC1B8]'
  },
  {
    icon: 'ri-paint-brush-line',
    title: 'الدهانات والديكور',
    description: 'دهانات عالية الجودة بألوان متناسقة وتشطيبات احترافية',
    color: 'from-[#0A2F33] to-[#1C474A]'
  },
  {
    icon: 'ri-layout-grid-line',
    title: 'الأرضيات',
    description: 'تركيب جميع أنواع الأرضيات من السيراميك والرخام والباركيه',
    color: 'from-[#0F3A3E] to-[#1C474A]'
  },
  {
    icon: 'ri-door-line',
    title: 'النجارة',
    description: 'أعمال النجارة والأبواب والشبابيك بتصاميم عصرية وجودة عالية',
    color: 'from-[#F7F6F4] to-[#CBC1B8]'
  },
  {
    icon: 'ri-hammer-line',
    title: 'الأعمال المدنية',
    description: 'تنفيذ الأعمال الإنشائية والمدنية بدقة واحترافية',
    color: 'from-gray-500 to-slate-500'
  }
];

export default function ServiceFeatures() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-[#F7F6F4]-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            مميزات خدماتنا
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            خدمات تشطيب شاملة
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نغطي جميع جوانب التشطيب بفريق متخصص ومواد عالية الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              } hover:-translate-y-2`}
            >
              <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${feature.color} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <i className={`${feature.icon} text-4xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-4 group-hover:text-[#0A1F21] transition-colors">
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