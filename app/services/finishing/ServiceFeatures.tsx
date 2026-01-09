"use client";
import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: "ri-drop-line",
    title: "أعمال السباكة",
    description:
      "تركيب وصيانة أنظمة السباكة بأحدث التقنيات والمواد عالية الجودة",
    color: "from-[#0A2F33] to-[#1C474A]",
  },
  {
    icon: "ri-flashlight-line",
    title: "الأعمال الكهربائية",
    description: "تمديد وتركيب الأنظمة الكهربائية وفق أعلى معايير السلامة",
    color: "from-[#0F3A3E] to-[#1C474A]",
  },
  {
    icon: "ri-paint-brush-line",
    title: "الدهانات والديكور",
    description: "استخدام أفضل أنواع الدهانات والتشطيبات الديكورية الحديثة",
    color: "from-[#0A1F21] to-[#0F3A3E]",
  },
  {
    icon: "ri-layout-grid-line",
    title: "البلاط",
    description: "تركيب جميع أنواع البلاط من السيراميك والبورسلان والرخام",
    color: "from-[#1C474A] to-[#0A2F33]",
  },
  {
    icon: "ri-door-line",
    title: "الأعمال الخشبية",
    description: "تصنيع وتركيب الأبواب والشبابيك والخزائن بأعلى جودة وإتقان",
    color: "from-[#0F3A3E] to-[#0A1F21]",
  },
  {
    icon: "ri-hammer-line",
    title: "الأعمال العامة",
    description: "تنفيذ جميع الأعمال الإنشائية والتشطيبات بدقة واحترافية",
    color: "from-[#0A2F33] to-[#1C474A]",
  },
];

export default function ServiceFeatures() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#1C474A] to-[#0A1F21]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#CBC1B8]/20 text-[#CBC1B8] px-6 py-2 rounded-full text-sm font-semibold mb-4">
            مميزات الخدمة
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
            خدمات تشطيب شاملة
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            نقدم جميع خدمات التشطيب الداخلي والخارجي بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-500 transform ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              } hover:-translate-y-2`}
            >
              <div
                className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${feature.color} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <i className={`${feature.icon} text-4xl text-[#CBC1B8]`}></i>
              </div>

              <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4 group-hover:text-[#CBC1B8] transition-colors">
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
