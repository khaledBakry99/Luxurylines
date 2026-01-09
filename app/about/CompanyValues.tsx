"use client";

import { useState, useEffect, useRef } from "react";

export default function CompanyValues() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      icon: "ri-medal-line",
      title: "الجودة والإتقان",
      description:
        "نلتزم بأعلى معايير الجودة في كل تفصيل، من التصميم إلى التنفيذ النهائي.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: "ri-lightbulb-line",
      title: "الإبداع والابتكار",
      description:
        "نسعى دائماً للتميز والإبداع في حلولنا التصميمية ونواكب أحدث التقنيات.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: "ri-shield-check-line",
      title: "الثقة والمصداقية",
      description:
        "نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة والشفافية.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: "ri-time-line",
      title: "الالتزام بالمواعيد",
      description:
        "نحترم وقت عملائنا ونلتزم بتسليم المشاريع في المواعيد المحددة.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: "ri-customer-service-line",
      title: "خدمة العملاء المتميزة",
      description:
        "نضع رضا العميل في المقدمة ونقدم دعماً مستمراً طوال رحلة المشروع.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: "ri-leaf-line",
      title: "الاستدامة البيئية",
      description:
        "نؤمن بالتصميم المستدام ونختار مواد صديقة للبيئة في مشاريعنا.",
      color: "from-teal-500 to-green-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A] relative overflow-hidden"
    >
      {/* خلفية زخرفية متحركة */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-[#CBC1B8] rounded-full animate-pulse`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Cairo']">
            قيمنا ومبادئنا
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            المبادئ التي نؤمن بها وتقود عملنا اليومي في تحقيق التميز والإبداع
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* القيم الرئيسية */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${activeValue === index ? "scale-105" : ""}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setActiveValue(index)}
              >
                <div
                  className={`relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                    activeValue === index
                      ? "border-[#CBC1B8]"
                      : "border-white/20 hover:border-[#CBC1B8]/50"
                  } overflow-hidden shadow-card-glow hover:shadow-card-glow-hover`}
                >
                  {/* تأثير الخلفية المتحركة */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    {/* الأيقونة */}
                    <div
                      className={`w-16 h-16 mb-6 mx-auto rounded-2xl bg-gradient-to-r ${
                        value.color
                      } flex items-center justify-center transform transition-all duration-500 ${
                        activeValue === index
                          ? "scale-110 rotate-6"
                          : "group-hover:scale-110"
                      }`}
                    >
                      <i className={`${value.icon} text-3xl text-white`}></i>
                    </div>

                    {/* العنوان */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center font-['Cairo'] group-hover:text-[#CBC1B8] transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* الوصف */}
                    <p className="text-white/70 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* قسم الرسالة والرؤية */}
          <div className="grid md:grid-cols-2 gap-12 ">
            {/* الرسالة */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <div className="bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] rounded-3xl p-8 text-white relative overflow-hidden border border-[#CBC1B8]/20 shadow-card-glow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#CBC1B8]/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center shadow-lg">
                      <i className="ri-megaphone-line text-3xl text-[#0A1F21]"></i>
                    </div>
                    <h3 className="text-2xl font-bold font-['Cairo']">
                      رسالتنا
                    </h3>
                  </div>

                  <p className="text-white/80 leading-relaxed">
                    تقديم خدمات التصميم والتشطيب بأعلى معايير الجودة والإبداع،
                    مع التركيز على تحقيق رؤية العميل وتجاوز توقعاته من خلال فريق
                    متخصص وتقنيات حديثة.
                  </p>
                </div>
              </div>
            </div>

            {/* الرؤية */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <div className="bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-3xl p-8 text-[#0A1F21] relative overflow-hidden shadow-card-glow-strong">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0A1F21]/10 rounded-full -ml-16 -mb-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#0A1F21] rounded-2xl flex items-center justify-center shadow-lg">
                      <i className="ri-eye-line text-3xl text-[#CBC1B8]"></i>
                    </div>
                    <h3 className="text-2xl font-bold font-['Cairo']">
                      رؤيتنا
                    </h3>
                  </div>

                  <p className="text-[#0A1F21]/80 leading-relaxed">
                    أن نكون الرائدين في مجال التصميم الداخلي والخارجي في المملكة
                    العربية السعودية، ونساهم في تشكيل مستقبل العمارة المعاصرة من
                    خلال الابتكار والإبداع.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
