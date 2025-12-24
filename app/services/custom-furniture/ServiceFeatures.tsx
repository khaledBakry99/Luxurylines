'use client';

export default function ServiceFeatures() {
  const features = [
    {
      icon: 'ri-pencil-ruler-2-line',
      title: 'تصميم حسب الطلب',
      description: 'تصميم أثاث فريد يناسب مساحتك واحتياجاتك بالضبط'
    },
    {
      icon: 'ri-vip-diamond-line',
      title: 'خامات فاخرة',
      description: 'استخدام أجود أنواع الخشب والمواد عالية الجودة'
    },
    {
      icon: 'ri-hammer-line',
      title: 'تصنيع محلي',
      description: 'تصنيع محلي بأيدي حرفيين مهرة ومتخصصين'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'ضمان طويل',
      description: 'ضمان شامل على جميع قطع الأثاث لسنوات'
    },
    {
      icon: 'ri-ruler-2-line',
      title: 'قياسات دقيقة',
      description: 'قياسات دقيقة تضمن ملاءمة مثالية للمساحة'
    },
    {
      icon: 'ri-paint-brush-line',
      title: 'تشطيبات متنوعة',
      description: 'خيارات واسعة من الألوان والتشطيبات'
    }
  ];

  return (
    <section className="py-20 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            مميزات الخدمة
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نقدم أثاث مخصص بأعلى معايير الجودة والحرفية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#F7F6F4] to-[#CBC1B8] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-['Cairo'] font-bold text-[#0A1F21] mb-4">
                {feature.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}