"use client";

export default function ServiceFeatures() {
  const features = [
    {
      icon: "ri-building-2-line",
      title: "التصميم الإنشائي",
      description:
        "تصاميم إنشائية متينة وآمنة تتوافق مع أعلى المعايير الهندسية",
    },
    {
      icon: "ri-file-list-3-line",
      title: "المخططات الهندسية",
      description: "مخططات هندسية دقيقة وشاملة لجميع مراحل البناء",
    },
    {
      icon: "ri-file-shield-2-line",
      title: "التصاريح والموافقات",
      description: "مساعدة في الحصول على جميع التصاريح والموافقات المطلوبة",
    },
    {
      icon: "ri-pencil-ruler-2-line",
      title: "الرسومات التنفيذية",
      description: "رسومات تنفيذية تفصيلية لتسهيل عملية البناء",
    },
    {
      icon: "ri-3d-model-line",
      title: "النماذج ثلاثية الأبعاد",
      description: "نماذج 3D واقعية لتصور المشروع قبل التنفيذ",
    },
    {
      icon: "ri-calculator-line",
      title: "الحسابات الإنشائية",
      description: "حسابات إنشائية دقيقة لضمان سلامة المبنى",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1C474A] to-[#0A1F21]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
            مميزات الخدمة
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            نقدم خدمات تصميم معماري متكاملة بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2F33] to-[#1C474A] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <i className={`${feature.icon} text-3xl text-[#CBC1B8]`}></i>
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
