'use client';

export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      icon: 'ri-discuss-line',
      title: 'الاستشارة الأولية',
      description: 'نلتقي بك لفهم ذوقك واحتياجاتك وميزانيتك'
    },
    {
      number: '02',
      icon: 'ri-palette-line',
      title: 'اختيار الألوان والأنماط',
      description: 'نساعدك في اختيار الألوان والأنماط المناسبة'
    },
    {
      number: '03',
      icon: 'ri-shopping-bag-3-line',
      title: 'التسوق والشراء',
      description: 'نختار ونشتري جميع العناصر الديكورية المطلوبة'
    },
    {
      number: '04',
      icon: 'ri-tools-line',
      title: 'التركيب والتنسيق',
      description: 'نقوم بتركيب وتنسيق جميع العناصر بشكل احترافي'
    },
    {
      number: '05',
      icon: 'ri-image-add-line',
      title: 'اللمسات النهائية',
      description: 'نضيف اللمسات الأخيرة لإكمال المظهر'
    },
    {
      number: '06',
      icon: 'ri-checkbox-circle-line',
      title: 'التسليم النهائي',
      description: 'نسلمك مساحتك جاهزة ومنسقة بالكامل'
    }
  ];

  return (
    <section className="py-20 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            خطوات العمل
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نتبع منهجية واضحة لضمان تحقيق أفضل النتائج
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#0A2F33] to-[#1C474A] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A2F33]-100 to-[#0F3A3E]-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <i className={`${step.icon} text-3xl text-[#0A1F21]-600`}></i>
                </div>
                
                <h3 className="text-2xl font-['Cairo'] font-bold text-[#0A1F21] mb-4">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}