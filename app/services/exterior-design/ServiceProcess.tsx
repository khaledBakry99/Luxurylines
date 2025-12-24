'use client';
import { useState, useEffect } from 'react';

export default function ServiceProcess() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      number: '01',
      title: 'الاستشارة الأولية',
      description: 'نلتقي بك لفهم رؤيتك ومتطلباتك ودراسة الموقع والبيئة المحيطة',
      icon: 'ri-chat-4-line',
      color: 'from-[#0F3A3E] to-[#1C474A]'
    },
    {
      number: '02',
      title: 'التصميم المعماري',
      description: 'نضع تصاميم معمارية متعددة للواجهات مع رسومات ثلاثية الأبعاد',
      icon: 'ri-pencil-ruler-2-line',
      color: 'from-[#0A2F33] to-[#0F3A3E]'
    },
    {
      number: '03',
      title: 'اختيار المواد',
      description: 'نساعدك في اختيار أفضل المواد والألوان المناسبة للتصميم',
      icon: 'ri-palette-line',
      color: 'from-[#1C474A] to-[#0A1F21]'
    },
    {
      number: '04',
      title: 'تنسيق الحدائق',
      description: 'نصمم الحدائق والمساحات الخضراء بما يتناسب مع التصميم العام',
      icon: 'ri-plant-line',
      color: 'from-[#0A1F21] to-[#0F3A3E]'
    },
    {
      number: '05',
      title: 'التنفيذ والإشراف',
      description: 'نشرف على تنفيذ التصميم بدقة عالية مع متابعة يومية',
      icon: 'ri-tools-line',
      color: 'from-[#CBC1B8] to-[#F7F6F4]'
    },
    {
      number: '06',
      title: 'التسليم النهائي',
      description: 'نسلمك المشروع كاملاً مع ضمان الجودة والصيانة',
      icon: 'ri-checkbox-circle-line',
      color: 'from-[#0F3A3E] to-[#0A2F33]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2F33] to-[#1C474A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-40 w-96 h-96 bg-[#CBC1B8] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block bg-[#CBC1B8]/20 text-[#CBC1B8] px-6 py-2 rounded-full text-lg font-semibold border border-[#CBC1B8]/30 backdrop-blur-sm">
              مراحل العمل
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-6">
            كيف نعمل على مشروعك؟
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نتبع منهجية احترافية منظمة لضمان تحقيق أفضل النتائج
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:bg-white/20 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#CBC1B8]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 border border-[#CBC1B8]/30">
                <span className="text-3xl font-bold text-[#CBC1B8]">{step.number}</span>
              </div>

              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 mt-8 group-hover:scale-110 transition-all duration-300`}>
                <i className={`${step.icon} text-3xl text-white`}></i>
              </div>

              <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}