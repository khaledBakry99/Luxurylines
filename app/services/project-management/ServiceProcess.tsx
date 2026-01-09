"use client";

export default function ServiceProcess() {
  const steps = [
    {
      number: "01",
      icon: "ri-file-list-3-line",
      title: "التخطيط والدراسة",
      description:
        "دراسة شاملة للمشروع وتحديد المتطلبات والميزانية مع وضع خطة زمنية",
    },
    {
      number: "02",
      icon: "ri-team-line",
      title: "تشكيل الفريق",
      description:
        "اختيار وتعيين فريق عمل متخصص من المهندسين والفنيين المحترفين",
    },
    {
      number: "03",
      icon: "ri-play-circle-line",
      title: "بدء التنفيذ",
      description:
        "البدء في تنفيذ المشروع وفقاً للخطة الموضوعة مع ضمان أعلى معايير الجودة",
    },
    {
      number: "04",
      icon: "ri-eye-line",
      title: "المراقبة والإشراف",
      description:
        "مراقبة مستمرة لسير العمل وضمان الالتزام بالجودة والمواعيد المحددة",
    },
    {
      number: "05",
      icon: "ri-shield-check-line",
      title: "ضمان الجودة",
      description:
        "فحص دقيق لجميع مراحل العمل مع إجراء الاختبارات والفحوصات اللازمة",
    },
    {
      number: "06",
      icon: "ri-checkbox-circle-line",
      title: "التسليم النهائي",
      description: "تسليم المشروع مكتملاً مع الضمانات وخدمة ما بعد التسليم",
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
            نتبع منهجية واضحة ومنظمة في إدارة المشاريع لضمان نجاح مشروعك
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
