'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const packages = [
  {
    name: 'الباقة الأساسية',
    price: '150',
    period: 'للمتر المربع',
    description: 'مثالية للمشاريع الصغيرة والمتوسطة',
    features: [
      'أعمال السباكة الأساسية',
      'التمديدات الكهربائية',
      'دهانات بلاستيك',
      'سيراميك أرضيات',
      'أبواب خشبية عادية',
      'ضمان سنة واحدة'
    ],
    color: 'from-[#CBC1B8] to-[#F7F6F4]',
    popular: false
  },
  {
    name: 'الباقة المتقدمة',
    price: '250',
    period: 'للمتر المربع',
    description: 'الأكثر طلباً للمشاريع المتوسطة',
    features: [
      'جميع مميزات الباقة الأساسية',
      'سباكة متطورة مع تجهيزات فاخرة',
      'كهرباء ذكية',
      'دهانات ديكورية',
      'رخام وباركيه',
      'أبواب خشبية فاخرة',
      'جبس بورد للأسقف',
      'ضمان سنتين'
    ],
    color: 'from-[#CBC1B8] to-[#F7F6F4]',
    popular: true
  },
  {
    name: 'الباقة الفاخرة',
    price: '400',
    period: 'للمتر المربع',
    description: 'للمشاريع الفاخرة والفلل الكبيرة',
    features: [
      'جميع مميزات الباقة المتقدمة',
      'سباكة فاخرة مع أفضل الماركات',
      'نظام كهربائي ذكي متكامل',
      'دهانات فاخرة بتقنيات حديثة',
      'رخام إيطالي وباركيه ألماني',
      'نجارة فاخرة حسب الطلب',
      'جبس بورد بتصاميم معمارية',
      'إضاءة LED متطورة',
      'ضمان 3 سنوات'
    ],
    color: 'from-[#CBC1B8] to-[#F7F6F4]',
    popular: false
  }
];

export default function ServicePackages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            الباقات والأسعار
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            باقات متنوعة تناسب جميع الاحتياجات والميزانيات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 transform ${
                pkg.popular ? 'scale-105 md:scale-110 z-10' : ''
              } ${hoveredIndex === index ? '-translate-y-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${pkg.color} rounded-2xl mb-6 mx-auto transform ${hoveredIndex === index ? 'rotate-12 scale-110' : ''} transition-all duration-300`}>
                <i className="ri-tools-line text-4xl text-white"></i>
              </div>

              <h3 className="text-2xl font-['Cairo'] font-bold text-white text-center mb-2">
                {pkg.name}
              </h3>

              <p className="text-white/80 text-center mb-6">
                {pkg.description}
              </p>

              <div className="text-center mb-8">
                <div className="flex items-start justify-center gap-2">
                  <span className="text-2xl font-bold text-white mt-2">ر.س</span>
                  <span className={`text-6xl font-bold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </span>
                </div>
                <span className="text-white/80">{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className={`ri-check-line text-xl flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gradient-to-br ${pkg.color} text-white rounded-full mt-0.5`}></i>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/consultation">
                <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 whitespace-nowrap`}>
                  اختر هذه الباقة
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/80 mb-4">
            هل تحتاج إلى باقة مخصصة؟
          </p>
          <button className="group bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 whitespace-nowrap">
            <span className="flex items-center gap-3">
              <i className="ri-customer-service-2-line text-xl"></i>
              تواصل معنا للحصول على عرض خاص
              <i className="ri-arrow-left-line transform group-hover:-translate-x-2 transition-transform"></i>
            </span>
          </button>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] rounded-3xl p-12">
            <h3 className="text-3xl font-['Cairo'] font-bold text-white mb-4">
              تحتاج مساعدة في اختيار الباقة المناسبة؟
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              احصل على نصائح من خبرائنا لمساعدتك في اختيار الباقة المثالية التي تناسب احتياجاتك وميزانيتك
            </p>
            <Link href="/services/expert-tips">
              <button className="bg-[#CBC1B8] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#F7F6F4] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl whitespace-nowrap">
                <span className="flex items-center gap-3">
                  <i className="ri-lightbulb-line text-xl"></i>
                  نصائح من خبرائنا
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}