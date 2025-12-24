
export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'الاستشارة الأولية',
      description: 'نلتقي بك لفهم رؤيتك ومتطلباتك وميزانيتك',
      icon: 'ri-chat-3-line'
    },
    {
      number: '02',
      title: 'قياس المساحة',
      description: 'نقوم بقياس دقيق للمساحة وتحليل الإمكانيات',
      icon: 'ri-ruler-line'
    },
    {
      number: '03',
      title: 'التصميم الأولي',
      description: 'نضع المخططات الأولية والتصور ثلاثي الأبعاد',
      icon: 'ri-draft-line'
    },
    {
      number: '04',
      title: 'المراجعة والتعديل',
      description: 'نراجع التصميم معك ونجري التعديلات المطلوبة',
      icon: 'ri-edit-line'
    },
    {
      number: '05',
      title: 'اختيار المواد',
      description: 'نساعدك في اختيار المواد والألوان والأثاث',
      icon: 'ri-palette-line'
    },
    {
      number: '06',
      title: 'التنفيذ والإشراف',
      description: 'نشرف على تنفيذ المشروع حتى التسليم النهائي',
      icon: 'ri-tools-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F3A3E] to-[#1C474A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            مراحل العمل
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نتبع منهجية واضحة ومنظمة لضمان تحقيق أفضل النتائج في كل مشروع
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:bg-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center ml-4">
                    <i className={`${step.icon} text-xl text-[#0A1F21]`}></i>
                  </div>
                  <div className="text-3xl font-bold text-[#CBC1B8]">{step.number}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-[#CBC1B8]/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}