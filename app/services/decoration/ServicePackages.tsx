'use client';

export default function ServicePackages() {
  const packages = [
    {
      name: 'الباقة الأساسية',
      price: '5,000',
      description: 'مثالية للمساحات الصغيرة والميزانيات المحدودة',
      features: [
        'استشارة أولية',
        'اختيار الألوان',
        'اختيار الإكسسوارات الأساسية',
        'تنسيق الستائر',
        'لوحة فنية واحدة',
        'متابعة لمدة شهر'
      ],
      color: 'from-[#0A1F21] to-[#0F3A3E]',
      popular: false
    },
    {
      name: 'الباقة المتقدمة',
      price: '12,000',
      description: 'الأكثر طلباً للمساحات المتوسطة',
      features: [
        'كل مميزات الباقة الأساسية',
        'تنسيق المفروشات',
        '3 لوحات فنية',
        'نباتات داخلية',
        'إضاءة ديكورية',
        'إكسسوارات فاخرة',
        'متابعة لمدة 3 أشهر'
      ],
      color: 'from-[#0A2F33] to-[#1C474A]',
      popular: true
    },
    {
      name: 'الباقة الشاملة',
      price: '25,000',
      description: 'للمساحات الكبيرة والتصاميم الفاخرة',
      features: [
        'كل مميزات الباقة المتقدمة',
        'تنسيق كامل للمساحة',
        'لوحات فنية حصرية',
        'إكسسوارات مخصصة',
        'تصميم إضاءة متكامل',
        'قطع ديكور فريدة',
        'متابعة لمدة 6 أشهر',
        'خدمة تغيير موسمي'
      ],
      color: 'from-[#F7F6F4] to-[#CBC1B8]',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1F21] to-[#0F3A3E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            باقات الخدمة
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            اختر الباقة المناسبة لاحتياجاتك وميزانيتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${pkg.popular ? 'ring-4 ring-[#CBC1B8] scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#0A2F33] to-[#1C474A] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    الأكثر طلباً
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <i className="ri-vip-crown-line text-3xl text-white"></i>
                </div>
                
                <h3 className="text-3xl font-['Cairo'] font-bold text-[#0A1F21] mb-2">
                  {pkg.name}
                </h3>
                
                <p className="text-white/80 mb-6 min-h-[3rem]">
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#0A1F21]">{pkg.price}</span>
                  <span className="text-white/80 mr-2">ريال</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-green-500 text-xl ml-3 mt-1 flex-shrink-0"></i>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 whitespace-nowrap cursor-pointer`}>
                  اطلب الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}