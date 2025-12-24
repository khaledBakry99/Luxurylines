'use client';
import { useState, useEffect } from 'react';

export default function ServicePackages() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      name: 'الباقة الأساسية',
      price: '15,000',
      description: 'مثالية للمشاريع الصغيرة والمتوسطة',
      features: [
        'تصميم واجهة واحدة',
        'رسومات ثنائية الأبعاد',
        'اختيار المواد الأساسية',
        'استشارة تنسيق حدائق',
        'مراجعتين للتصميم',
        'دعم فني لمدة شهر'
      ],
      color: 'from-green-500 to-emerald-500',
      popular: false
    },
    {
      name: 'الباقة المتقدمة',
      price: '30,000',
      description: 'الأكثر طلباً للمشاريع المتوسطة',
      features: [
        'تصميم جميع الواجهات',
        'رسومات ثلاثية الأبعاد',
        'اختيار مواد متقدمة',
        'تصميم تنسيق حدائق كامل',
        'تصميم الإضاءة الخارجية',
        '4 مراجعات للتصميم',
        'إشراف على التنفيذ',
        'دعم فني لمدة 3 أشهر'
      ],
      color: 'from-[#1C474A] to-[#0F3A3E]',
      popular: true
    },
    {
      name: 'الباقة الشاملة',
      price: '50,000',
      description: 'للمشاريع الفاخرة والمتكاملة',
      features: [
        'تصميم معماري متكامل',
        'رسومات ثلاثية الأبعاد متقدمة',
        'جولة افتراضية VR',
        'اختيار مواد فاخرة',
        'تصميم حدائق احترافي',
        'تصميم إضاءة ذكية',
        'مراجعات غير محدودة',
        'إشراف كامل على التنفيذ',
        'ضمان سنة كاملة',
        'دعم فني لمدة سنة'
      ],
      color: 'from-[#0A2F33] to-[#1C474A]',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#CBC1B8] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block bg-[#CBC1B8]/20 text-[#CBC1B8] px-6 py-2 rounded-full text-lg font-semibold border border-[#CBC1B8]/30 backdrop-blur-sm">
              الباقات والأسعار
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-6">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نقدم باقات متنوعة تناسب جميع احتياجاتك وميزانيتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                pkg.popular ? 'border-[#CBC1B8] scale-105' : 'border-white/20'
              } hover:bg-white/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#CBC1B8] text-[#0A1F21] px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <i className="ri-building-line text-3xl text-white"></i>
              </div>

              <h3 className="text-2xl font-['Cairo'] font-bold text-white text-center mb-2">
                {pkg.name}
              </h3>
              <p className="text-white/80 text-center mb-6">
                {pkg.description}
              </p>

              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-[#CBC1B8]">{pkg.price}</span>
                <span className="text-xl text-white/80 mr-2">ريال</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#CBC1B8]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-[#CBC1B8] text-sm"></i>
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                اختر هذه الباقة
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}