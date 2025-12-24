'use client';

export default function ServiceFeatures() {
  const features = [
    {
      icon: 'ri-pencil-ruler-2-line',
      title: 'تصميم عصري',
      description: 'تصاميم مطابخ عصرية تجمع بين الجمال والوظيفة'
    },
    {
      icon: 'ri-cpu-line',
      title: 'أجهزة متطورة',
      description: 'أحدث الأجهزة الكهربائية من أفضل العلامات العالمية'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'خامات مقاومة',
      description: 'خامات عالية الجودة مقاومة للحرارة والرطوبة'
    },
    {
      icon: 'ri-archive-drawer-line',
      title: 'تخزين ذكي',
      description: 'حلول تخزين ذكية تستغل كل مساحة بكفاءة'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'إضاءة مثالية',
      description: 'نظام إضاءة متكامل لكل منطقة في المطبخ'
    },
    {
      icon: 'ri-water-flash-line',
      title: 'سباكة متقدمة',
      description: 'أنظمة سباكة حديثة وصنابير ذكية'
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
            نقدم مطابخ فاخرة بأعلى معايير الجودة والتقنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0F3A3E] to-[#0A2F33] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
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