'use client';

export default function ServiceFeatures() {
  const features = [
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'إضاءة LED',
      description: 'إضاءة LED عالية الكفاءة بعمر افتراضي طويل'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'التحكم الذكي',
      description: 'تحكم كامل عبر الهاتف الذكي والأوامر الصوتية'
    },
    {
      icon: 'ri-leaf-line',
      title: 'توفير الطاقة',
      description: 'تقليل استهلاك الطاقة بنسبة تصل إلى 80%'
    },
    {
      icon: 'ri-palette-line',
      title: 'تصميم الإضاءة',
      description: 'تصميم إضاءة احترافي يناسب كل مساحة'
    },
    {
      icon: 'ri-timer-line',
      title: 'الجدولة التلقائية',
      description: 'جدولة تشغيل وإطفاء الإضاءة تلقائياً'
    },
    {
      icon: 'ri-contrast-2-line',
      title: 'التحكم بالسطوع',
      description: 'تحكم دقيق بمستوى السطوع والألوان'
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
            نقدم حلول إضاءة ذكية متكاملة بأحدث التقنيات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0F3A3E] to-[#1C474A] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
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