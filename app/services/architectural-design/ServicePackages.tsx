'use client';

export default function ServicePackages() {
  const packages = [
    {
      name: 'الباقة الأساسية',
      price: '15,000',
      description: 'مثالية للمشاريع الصغيرة والمتوسطة',
      features: [
        'تصميم معماري أولي',
        'مخططات هندسية أساسية',
        'نموذج ثلاثي الأبعاد',
        'جلستين استشارية',
        'تعديلين مجانيين'
      ],
      color: 'from-[#1C474A] to-[#0F3A3E]',
      popular: false
    },
    {
      name: 'الباقة المتقدمة',
      price: '30,000',
      description: 'الأنسب للمشاريع الكبيرة',
      features: [
        'تصميم معماري شامل',
        'مخططات هندسية تفصيلية',
        'نماذج 3D متعددة',
        'رسومات تنفيذية',
        'استشارات غير محدودة',
        'متابعة التنفيذ'
      ],
      color: 'from-[#CBC1B8] to-[#F7F6F4]',
      popular: true
    },
    {
      name: 'الباقة الفاخرة',
      price: '50,000',
      description: 'للمشاريع الفاخرة والمميزة',
      features: [
        'تصميم معماري حصري',
        'مخططات هندسية كاملة',
        'جولات افتراضية VR',
        'رسومات تنفيذية شاملة',
        'إشراف كامل على التنفيذ',
        'ضمان لمدة سنتين',
        'خدمة VIP'
      ],
      color: 'from-[#0A2F33] to-[#1C474A]',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            باقات الخدمة
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            اختر الباقة المناسبة لمشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-[#CBC1B8]' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-6 left-6 bg-[#CBC1B8] text-white px-4 py-2 rounded-full text-sm font-bold">
                  الأكثر طلباً
                </div>
              )}

              <div className={`h-32 bg-gradient-to-br ${pkg.color} flex items-center justify-center`}>
                <h3 className="text-3xl font-['Cairo'] font-bold text-white">
                  {pkg.name}
                </h3>
              </div>

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-[#0A1F21] mb-2">
                    {pkg.price}
                    <span className="text-2xl text-gray-500"> ريال</span>
                  </div>
                  <p className="text-white/80">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-green-600 text-sm"></i>
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 whitespace-nowrap`}>
                  اختر الباقة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}