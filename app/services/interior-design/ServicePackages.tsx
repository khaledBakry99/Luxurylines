
import Link from 'next/link';

export default function ServicePackages() {
  const packages = [
    {
      name: 'الباقة الأساسية',
      price: '15,000',
      description: 'مثالية للمساحات الصغيرة والمتوسطة',
      features: [
        'تصميم ثلاثي الأبعاد',
        'مخططات تفصيلية',
        'اختيار الألوان والمواد',
        'استشارة مجانية',
        'مراجعتان للتصميم'
      ],
      popular: false
    },
    {
      name: 'الباقة المتقدمة',
      price: '25,000',
      description: 'الأكثر طلباً للمشاريع المتوسطة',
      features: [
        'جميع مميزات الباقة الأساسية',
        'تصميم الإضاءة المتخصصة',
        'اختيار الأثاث والديكور',
        'إشراف على التنفيذ',
        '3 مراجعات للتصميم',
        'ضمان لمدة سنة'
      ],
      popular: true
    },
    {
      name: 'الباقة الشاملة',
      price: '40,000',
      description: 'للمشاريع الفاخرة والمساحات الكبيرة',
      features: [
        'جميع مميزات الباقة المتقدمة',
        'تصميم أثاث مخصص',
        'إدارة كاملة للمشروع',
        'تنسيق مع المقاولين',
        'مراجعات غير محدودة',
        'ضمان لمدة سنتين',
        'خدمة ما بعد التسليم'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2F33] to-[#0F3A3E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            باقات التصميم الداخلي
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            اختر الباقة التي تناسب احتياجاتك وميزانيتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:bg-white/20 ${pkg.popular ? 'ring-2 ring-[#CBC1B8] scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    الأكثر طلباً
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-white/80 mb-6">{pkg.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-[#CBC1B8]">{pkg.price}</span>
                  <span className="text-white/80 mr-2">ريال</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="ri-check-line text-[#CBC1B8] text-lg ml-3"></i>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/consultation">
                  <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap">
                    اختر هذه الباقة
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}