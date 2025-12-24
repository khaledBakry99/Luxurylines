'use client';

export default function ServiceFeatures() {
  const features = [
    {
      icon: 'ri-spa-line',
      title: 'تصميم سبا',
      description: 'تصميم حمامات بأجواء سبا فاخرة للاسترخاء التام'
    },
    {
      icon: 'ri-drop-line',
      title: 'أدوات صحية فاخرة',
      description: 'أدوات صحية من أفضل العلامات العالمية'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'إضاءة مميزة',
      description: 'نظام إضاءة متعدد المستويات لأجواء مثالية'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'مواد مقاومة للماء',
      description: 'استخدام مواد عالية الجودة مقاومة للرطوبة'
    },
    {
      icon: 'ri-temp-hot-line',
      title: 'تدفئة أرضية',
      description: 'نظام تدفئة أرضية للراحة في الشتاء'
    },
    {
      icon: 'ri-mirror-line',
      title: 'مرايا ذكية',
      description: 'مرايا مضيئة بتقنيات حديثة'
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
            نقدم حمامات عصرية بأعلى معايير الجودة والفخامة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C474A] to-[#0F3A3E] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
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