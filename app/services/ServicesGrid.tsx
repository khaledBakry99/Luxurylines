"use client";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "التصميم الداخلي",
      description:
        "تصميم مساحات داخلية فاخرة تعكس شخصيتك وأسلوب حياتك مع أحدث الاتجاهات العالمية",
      icon: "ri-home-smile-line",
      features: [
        "تصميم ثلاثي الأبعاد",
        "اختيار المواد",
        "الإضاءة المتخصصة",
        "الأثاث المخصص",
      ],
      color: "from-[#1C474A] to-[#0F3A3E]",
      link: "/services/interior-design",
    },
    {
      id: 2,
      title: "التصميم الخارجي",
      description:
        "تصميم واجهات خارجية مميزة تجمع بين الجمال والوظيفة مع مراعاة البيئة المحيطة",
      icon: "ri-building-line",
      features: [
        "تصميم الواجهات",
        "تنسيق الحدائق",
        "الإضاءة الخارجية",
        "المواد المقاومة",
      ],
      color: "from-green-500 to-emerald-500",
      link: "/services/exterior-design",
    },
    {
      id: 3,
      title: "التشطيب",
      description:
        "خدمات تشطيب شاملة بأعلى معايير الجودة والدقة مع ضمان التسليم في الوقت المحدد",
      icon: "ri-paint-brush-line",
      features: ["أعمال السباكة", "الكهرباء", "الدهانات", "الأرضيات"],
      color: "from-[#CBC1B8] to-[#F7F6F4]",
      link: "/services/finishing",
    },
    {
      id: 4,
      title: "توريد مواد البناء",
      description:
        "توفير وتوريد أفضل المواد والخامات الأساسية لمشروعك بجودة عالية وأسعار تنافسية",
      icon: "ri-truck-line",
      features: [
        "مواد البناء",
        "الخامات الفاخرة",
        "التوصيل السريع",
        "ضمان الجودة",
      ],
      color: "from-[#0A2F33] to-[#1C474A]",
      link: "/services/supply",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link key={service.id} href={service.link}>
              <div
                className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20 cursor-pointer hover:bg-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>

                <h3 className="text-3xl font-['Cairo'] font-bold text-white mb-4 group-hover:text-[#CBC1B8] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#CBC1B8] rounded-full"></div>
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 whitespace-nowrap">
                  عرض التفاصيل
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
