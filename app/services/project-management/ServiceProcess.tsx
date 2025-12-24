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
      title: 'التخطيط والدراسة',
      description: 'دراسة شاملة للمشروع وتحديد المتطلبات والأهداف مع وضع خطة زمنية مفصلة',
      icon: 'ri-file-list-3-line',
      color: 'from-[#1C474A] to-[#0F3A3E]'
    },
    {
      number: '02',
      title: 'تشكيل الفريق',
      description: 'اختيار وتشكيل فريق العمل المناسب للمشروع مع تحديد المسؤوليات والمهام',
      icon: 'ri-team-line',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '03',
      title: 'بدء التنفيذ',
      description: 'البدء في تنفيذ المشروع وفقاً للخطة الموضوعة مع متابعة دقيقة لكل مرحلة',
      icon: 'ri-play-circle-line',
      color: 'from-[#CBC1B8] to-[#F7F6F4]'
    },
    {
      number: '04',
      title: 'المراقبة والمتابعة',
      description: 'مراقبة مستمرة لسير العمل وجودة التنفيذ مع تقديم تقارير دورية',
      icon: 'ri-eye-line',
      color: 'from-[#0A2F33] to-[#1C474A]'
    },
    {
      number: '05',
      title: 'ضمان الجودة',
      description: 'فحص شامل لجودة العمل والتأكد من مطابقته للمواصفات المطلوبة',
      icon: 'ri-shield-check-line',
      color: 'from-[#1C474A] to-[#0F3A3E]'
    },
    {
      number: '06',
      title: 'التسليم النهائي',
      description: 'تسليم المشروع كاملاً مع الضمانات والدعم الفني اللازم',
      icon: 'ri-checkbox-circle-line',
      color: 'from-[#F7F6F4] to-[#CBC1B8]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#1C474A] rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#0A2F33] rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block bg-[#1C474A]-100 text-[#0A1F21]-600 px-6 py-2 rounded-full text-lg font-semibold">
              مراحل العمل
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            كيف نعمل على مشروعك؟
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نتبع منهجية علمية ومدروسة في إدارة المشاريع لضمان النجاح والتميز
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <i className={`${step.icon} text-3xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-['Cairo'] font-bold text-[#0A1F21] mb-4">
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