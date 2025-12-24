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
      period: 'للمشروع',
      description: 'مناسبة للمشاريع الصغيرة والمتوسطة',
      features: [
        'إدارة المشروع الأساسية',
        'تقارير أسبوعية',
        'فريق عمل من 3-5 أشخاص',
        'دعم فني خلال ساعات العمل',
        'ضمان 6 أشهر',
        'متابعة لمدة شهر بعد التسليم'
      ],
      color: 'from-[#1C474A] to-[#0F3A3E]',
      popular: false
    },
    {
      name: 'الباقة المتقدمة',
      price: '25,000',
      period: 'للمشروع',
      description: 'الأكثر طلباً للمشاريع المتوسطة والكبيرة',
      features: [
        'إدارة مشروع شاملة',
        'تقارير يومية مفصلة',
        'فريق عمل من 8-12 شخص',
        'دعم فني على مدار الساعة',
        'ضمان سنة كاملة',
        'متابعة لمدة 3 أشهر بعد التسليم',
        'استشارات مجانية',
        'تدريب الفريق'
      ],
      color: 'from-[#0A2F33] to-[#1C474A]',
      popular: true
    },
    {
      name: 'الباقة الاحترافية',
      price: '40,000',
      period: 'للمشروع',
      description: 'للمشاريع الكبيرة والمعقدة',
      features: [
        'إدارة مشروع متكاملة',
        'تقارير لحظية ومتابعة مباشرة',
        'فريق عمل من 15-20 شخص',
        'دعم فني متخصص 24/7',
        'ضمان سنتين',
        'متابعة لمدة 6 أشهر بعد التسليم',
        'استشارات مجانية مدى الحياة',
        'تدريب شامل للفريق',
        'خدمات إضافية مخصصة'
      ],
      color: 'from-[#CBC1B8] to-[#F7F6F4]',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#0A2F33] rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#1C474A] rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block bg-[#1C474A]-100 text-[#0A1F21]-600 px-6 py-2 rounded-full text-lg font-semibold">
              باقات الأسعار
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            اختر الباقة المناسبة لمشروعك
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            باقات متنوعة تناسب جميع أحجام المشاريع مع ضمان أعلى مستويات الجودة والخدمة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-[#CBC1B8] ring-opacity-50' : ''
              } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#0A2F33] to-[#1C474A] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <i className="ri-building-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-['Cairo'] font-bold text-[#0A1F21] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-white/80 mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#0A1F21]">{pkg.price}</span>
                  <span className="text-gray-500 mr-2">ريال</span>
                </div>
                <span className="text-gray-500">{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className="ri-check-line text-green-500 text-xl ml-3"></i>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${pkg.color} hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 whitespace-nowrap`}>
                اختر هذه الباقة
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}