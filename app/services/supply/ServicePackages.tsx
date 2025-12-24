'use client';
import Link from 'next/link';

export default function ServicePackages() {
  const packages = [
    {
      name: 'باقة البناء الأساسية',
      description: 'جميع مواد البناء الأساسية لمشروعك',
      features: [
        'أسمنت بورتلاند',
        'حديد تسليح',
        'طوب أحمر وأبيض',
        'رمل وزلط',
        'مواد عزل أساسية',
        'توصيل مجاني'
      ],
      icon: 'ri-building-2-line',
      color: 'from-[#1C474A] to-[#0F3A3E]'
    },
    {
      name: 'باقة التشطيب الفاخر',
      description: 'مواد تشطيب راقية لمساحات مميزة',
      features: [
        'رخام وجرانيت مستورد',
        'سيراميك إيطالي',
        'باركيه خشب طبيعي',
        'دهانات عالمية',
        'أدوات صحية فاخرة',
        'ضمان 5 سنوات'
      ],
      icon: 'ri-vip-crown-line',
      color: 'from-[#0A2F33] to-[#1C474A]',
      featured: true
    },
    {
      name: 'باقة التجهيزات الكاملة',
      description: 'حل شامل لجميع احتياجات المشروع',
      features: [
        'مواد البناء الأساسية',
        'مواد التشطيب',
        'الأدوات الكهربائية',
        'أدوات السباكة',
        'الأبواب والنوافذ',
        'خصم خاص 15%'
      ],
      icon: 'ri-gift-line',
      color: 'from-[#CBC1B8] to-[#F7F6F4]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1C474A] to-[#0A2F33]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            باقات التوريد
          </h2>
          <p className="text-xl text-white/80">
            اختر الباقة المناسبة لمشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                pkg.featured ? 'border-[#CBC1B8]' : 'border-white/20'
              } hover:bg-white/20`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#CBC1B8] text-[#0A1F21] px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                  الأكثر طلباً
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`${pkg.icon} text-3xl text-white`}></i>
              </div>

              <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-3">
                {pkg.name}
              </h3>
              <p className="text-white/80 mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <i className="ri-checkbox-circle-fill text-[#CBC1B8] text-lg"></i>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/consultation">
                <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 whitespace-nowrap">
                  اطلب عرض سعر
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
