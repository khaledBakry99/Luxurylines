'use client';

export default function ServiceFeatures() {
  const features = [
    {
      icon: 'ri-building-2-line',
      title: 'مواد البناء الأساسية',
      description: 'أسمنت، حديد، طوب، وجميع مواد البناء الأساسية من أفضل المصانع المعتمدة'
    },
    {
      icon: 'ri-paint-brush-line',
      title: 'مواد التشطيب الفاخرة',
      description: 'رخام، جرانيت، سيراميك، وباركيه من أرقى الأنواع المحلية والمستوردة'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'الأدوات الكهربائية',
      description: 'كابلات، مفاتيح، إضاءة، ولوحات كهربائية من علامات تجارية موثوقة'
    },
    {
      icon: 'ri-drop-line',
      title: 'أدوات السباكة',
      description: 'مواسير، صنابير، أدوات صحية، وجميع مستلزمات السباكة بجودة عالية'
    },
    {
      icon: 'ri-door-line',
      title: 'الأبواب والنوافذ',
      description: 'أبواب خشبية وألمنيوم، نوافذ UPVC بتصاميم عصرية وعازلة'
    },
    {
      icon: 'ri-paint-line',
      title: 'الدهانات والعوازل',
      description: 'دهانات عالية الجودة، عوازل حرارية ومائية من أفضل الشركات العالمية'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2F33] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            المواد التي نوفرها
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نوفر مجموعة شاملة من مواد البناء والتشطيب بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:bg-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-3xl text-[#0A1F21]`}></i>
              </div>
              <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-4">
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
