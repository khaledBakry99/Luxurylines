"use client";

export default function ServiceFeatures() {
  const features = [
    {
      icon: "ri-building-2-line",
      title: "مواد البناء الأساسية",
      description:
        "طوب، أسمنت، حديد، رمل وجميع مواد البناء الأساسية من أفضل المصادر الموثوقة",
    },
    {
      icon: "ri-paint-brush-line",
      title: "مواد التشطيب الداخلية",
      description:
        "جبس بورد، أصباغ، ديكورات من أفضل الماركات العالمية والمحلية",
    },
    {
      icon: "ri-lightbulb-line",
      title: "الإضاءة والكهرباء",
      description:
        "أسلاك، مفاتيح، لمبات، وجميع المستلزمات من الماركات الموثوقة",
    },
    {
      icon: "ri-drop-line",
      title: "أدوات السباكة",
      description: "مواسير، خلاطات، أحواض، وجميع المستلزمات الصحية بأعلى جودة",
    },
    {
      icon: "ri-door-line",
      title: "الأبواب والنوافذ",
      description: "أبواب خشبية وألمنيوم ونوافذ UPVC بتصاميم عصرية ومتينة",
    },
    {
      icon: "ri-paint-line",
      title: "الدهانات والعوازل",
      description:
        "دهانات داخلية وخارجية، عوازل حرارية ومائية من أفضل الماركات العالمية",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2F33] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            المواد التي نوفرها
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من أفضل المواد والخامات لضمان نجاح مشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 border border-white/20 hover:bg-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-3xl text-[#0A1F21]`}></i>
              </div>
              <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-4">
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
