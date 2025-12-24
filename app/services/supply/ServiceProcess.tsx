'use client';

export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'تحديد الاحتياجات',
      description: 'نستمع لمتطلباتك ونحدد المواد المطلوبة بدقة',
      icon: 'ri-file-list-3-line'
    },
    {
      number: '02',
      title: 'عرض السعر',
      description: 'نقدم عرض سعر تفصيلي وشفاف لجميع المواد',
      icon: 'ri-price-tag-3-line'
    },
    {
      number: '03',
      title: 'التوريد',
      description: 'نوفر المواد من مصادر موثوقة بأعلى جودة',
      icon: 'ri-truck-line'
    },
    {
      number: '04',
      title: 'التوصيل',
      description: 'نوصل المواد إلى موقع المشروع في الوقت المحدد',
      icon: 'ri-map-pin-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            كيف نعمل
          </h2>
          <p className="text-xl text-white/80">
            عملية بسيطة وسريعة لتوفير جميع احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:bg-white/20"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-[#CBC1B8] rounded-full flex items-center justify-center text-[#0A1F21] font-bold text-lg shadow-lg">
                {step.number}
              </div>
              
              <div className="w-16 h-16 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center mb-6 mt-4">
                <i className={`${step.icon} text-3xl text-[#CBC1B8]`}></i>
              </div>
              
              <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
