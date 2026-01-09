'use client';

export default function ServiceFeatures() {
  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'إدارة احترافية',
      description: 'فريق متخصص في إدارة المشاريع بأعلى معايير الاحترافية'
    },
    {
      icon: 'ri-time-line',
      title: 'التزام بالمواعيد',
      description: 'نلتزم بالجداول الزمنية ونسلم المشاريع في الوقت المحدد'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'إدارة الميزانية',
      description: 'نحافظ على الميزانية المحددة مع ضمان أعلى جودة'
    },
    {
      icon: 'ri-team-line',
      title: 'فريق متكامل',
      description: 'فريق من المهندسين والفنيين المتخصصين'
    },
    {
      icon: 'ri-file-list-3-line',
      title: 'تقارير دورية',
      description: 'تقارير مفصلة عن سير العمل والتقدم المحرز'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'دعم مستمر',
      description: 'دعم فني ومتابعة مستمرة طوال فترة المشروع'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1C474A] to-[#0A1F21]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
            مميزات الخدمة
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            نقدم خدمات تعهد مشاريع شاملة تضمن نجاح مشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/15"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <i className={`${feature.icon} text-3xl text-[#0A1F21]`}></i>
              </div>
              <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#CBC1B8]/85 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
