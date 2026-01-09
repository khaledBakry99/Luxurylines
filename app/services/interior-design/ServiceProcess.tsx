"use client";

export default function ServiceProcess() {
  const steps = [
    {
      number: "01",
      icon: "ri-discuss-line",
      title: "التخطيط والتحليل",
      description: "نلتقي بك لفهم رؤيتك واحتياجاتك للمساحة",
    },
    {
      number: "02",
      icon: "ri-ruler-2-line",
      title: "القياسات الدقيقة",
      description: "نأخذ قياسات دقيقة للمساحة ونحلل الإمكانيات",
    },
    {
      number: "03",
      icon: "ri-pencil-ruler-2-line",
      title: "التصميم المبدئي",
      description: "نقدم تصاميم أولية ثنائية وثلاثية الأبعاد",
    },
    {
      number: "04",
      icon: "ri-palette-line",
      title: "اختيار المواد",
      description: "نساعدك في اختيار الألوان والمواد والتشطيبات",
    },
    {
      number: "05",
      icon: "ri-hammer-line",
      title: "التنفيذ والإشراف",
      description: "نشرف على تنفيذ التصميم بأعلى معايير الجودة",
    },
    {
      number: "06",
      icon: "ri-checkbox-circle-line",
      title: "التسليم النهائي",
      description: "نسلمك مساحتك جاهزة ومكتملة بكل التفاصيل",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
            خطوات العمل
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            نتبع منهجية واضحة لضمان تصميم داخلي مثالي يلبي توقعاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/15">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center text-[#0A1F21] font-bold text-xl shadow-lg">
                  {step.number}
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <i className={`${step.icon} text-3xl text-[#0A1F21]`}></i>
                </div>

                <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#CBC1B8]/85 leading-relaxed">
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
