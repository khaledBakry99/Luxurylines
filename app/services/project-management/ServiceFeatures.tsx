'use client';
import { useState, useEffect } from 'react';

export default function ServiceFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: 'ri-settings-3-line',
      title: 'إدارة المشروع',
      description: 'إدارة شاملة ومتخصصة لجميع مراحل المشروع من التخطيط حتى التسليم',
      color: 'from-[#1C474A] to-[#0F3A3E]'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'مراقبة الجودة',
      description: 'نظام مراقبة جودة صارم لضمان تنفيذ المشروع وفقاً لأعلى المعايير',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-time-line',
      title: 'التسليم في الوقت',
      description: 'التزام كامل بالجداول الزمنية المحددة مع ضمان التسليم في الموعد المتفق عليه',
      color: 'from-[#CBC1B8] to-[#F7F6F4]'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'الدعم الفني',
      description: 'فريق دعم فني متخصص متاح على مدار الساعة لحل أي مشاكل أو استفسارات',
      color: 'from-[#0A2F33] to-[#1C474A]'
    },
    {
      icon: 'ri-team-line',
      title: 'فريق متخصص',
      description: 'فريق عمل محترف ومتخصص في إدارة المشاريع مع خبرة واسعة في المجال',
      color: 'from-[#1C474A] to-[#0F3A3E]'
    },
    {
      icon: 'ri-file-chart-line',
      title: 'تقارير دورية',
      description: 'تقارير مفصلة ودورية عن تقدم المشروع مع متابعة مستمرة لجميع المراحل',
      color: 'from-[#F7F6F4] to-[#CBC1B8]'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#1C474A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#0A2F33] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block bg-[#1C474A]-100 text-[#0A1F21]-600 px-6 py-2 rounded-full text-lg font-semibold">
              مميزات الخدمة
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            لماذا تختار خدمة تعهد المشاريع؟
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نقدم خدمات تعهد مشاريع متكاملة مع إدارة احترافية وضمان الجودة والتسليم في الوقت المحدد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-['Cairo'] font-bold text-[#0A1F21] mb-4">
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