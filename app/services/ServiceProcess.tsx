"use client";
import { useState, useEffect } from "react";

export default function ServiceProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "التخطيط والتحليل",
      description:
        "نبدأ بفهم احتياجاتك ورؤيتك من خلال جلسة تفصيلية ووضع خطة شاملة للمشروع",
      icon: "ri-lightbulb-line",
      color: "from-[#0A1F21] to-[#0F3A3E]",
      features: [
        "تحليل المتطلبات",
        "وضع الميزانية",
        "الجدول الزمني",
        "التصميم الأولي",
      ],
    },
    {
      id: 2,
      title: "التصميم والتطوير",
      description:
        "نقوم بتطوير التصاميم التفصيلية والرسومات الهندسية مع استخدام أحدث التقنيات",
      icon: "ri-pencil-ruler-2-line",
      color: "from-[#0A2F33] to-[#1C474A]",
      features: [
        "التصميم ثلاثي الأبعاد",
        "اختيار المواد",
        "الرسومات التنفيذية",
        "المراجعة والتعديل",
      ],
    },
    {
      id: 3,
      title: "التنفيذ والإشراف",
      description:
        "نبدأ تنفيذ المشروع مع إشراف مستمر من فريق الخبراء لضمان أعلى معايير الجودة",
      icon: "ri-hammer-line",
      color: "from-[#0F3A3E] to-[#0A2F33]",
      features: [
        "إدارة الموقع",
        "مراقبة الجودة",
        "التنسيق مع المقاولين",
        "التقارير الدورية",
      ],
    },
    {
      id: 4,
      title: "التسليم والمتابعة",
      description:
        "نسلم المشروع مكتملاً مع ضمان الجودة وخدمة ما بعد التسليم لضمان رضاكم التام",
      icon: "ri-check-double-line",
      color: "from-[#0F3A3E] to-[#1C474A]",
      features: [
        "الفحص النهائي",
        "التسليم الرسمي",
        "ضمان الجودة",
        "الصيانة الدورية",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#CBC1B8] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CBC1B8]/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان الرئيسي */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="mb-6">
            <span className="inline-block bg-[#CBC1B8]/20 text-[#CBC1B8] px-6 py-2 rounded-full text-lg font-semibold border border-[#CBC1B8]/30 backdrop-blur-sm">
              عملية العمل
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-['Cairo'] font-bold text-white mb-6">
            كيف نحقق أحلامك؟
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            نتبع منهجية علمية مدروسة لضمان تحقيق أفضل النتائج في كل مشروع
          </p>
        </div>

        {/* خطوات العمل */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              } ${activeStep === index ? "scale-105" : ""}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* البطاقة */}
              <div
                className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 ${
                  activeStep === index ? "bg-white/20 shadow-2xl" : ""
                }`}
              >
                {/* رقم الخطوة */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#CBC1B8] rounded-full flex items-center justify-center text-[#0A1F21] font-bold text-xl shadow-lg">
                  {step.id}
                </div>

                {/* الأيقونة */}
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${
                    step.color
                  } rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    activeStep === index ? "scale-110" : ""
                  }`}
                >
                  <i className={`${step.icon} text-3xl text-white`}></i>
                </div>

                {/* العنوان */}
                <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-4 group-hover:text-[#CBC1B8] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* الوصف */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* الميزات */}
                <div className="space-y-3">
                  {step.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#CBC1B8] rounded-full"></div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* خط الاتصال للخطوة التالية */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -left-4 w-8 h-0.5 bg-gradient-to-r from-[#CBC1B8] to-transparent"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* مؤشر التقدم */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "bg-[#CBC1B8] scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* إحصائيات */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ animationDelay: "800ms" }}
        >
          {[
            { number: "250+", label: "مشروع مكتمل", icon: "ri-building-line" },
            { number: "500+", label: "عميل راضي", icon: "ri-user-heart-line" },
            { number: "15+", label: "سنة خبرة", icon: "ri-time-line" },
            { number: "98%", label: "معدل الرضا", icon: "ri-star-line" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[#CBC1B8]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#CBC1B8]/30 transition-colors duration-300">
                <i className={`${stat.icon} text-2xl text-[#CBC1B8]`}></i>
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
