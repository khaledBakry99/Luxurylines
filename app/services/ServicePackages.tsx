"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ServicePackages() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      id: 1,
      name: "الباقة الاقتصادية",
      price: "300",
      period: "للمتر المربع",
      description: "مثالية للمشاريع الصغيرة والميزانيات المحدودة",
      color: "from-[#0A1F21] to-[#0F3A3E]",
      popular: false,
      features: [
        "تصميم أساسي للمساحة",
        "اختيار المواد الأساسية",
        "إشراف أسبوعي",
        "ضمان سنة واحدة",
        "تسليم خلال 6 أسابيع",
        "دعم فني محدود",
      ],
      notIncluded: [
        "التصميم ثلاثي الأبعاد",
        "الأثاث المخصص",
        "الإضاءة المتخصصة",
      ],
    },
    {
      id: 2,
      name: "الباقة المتوسطة",
      price: "550",
      period: "للمتر المربع",
      description: "الخيار الأمثل لمعظم المشاريع السكنية والتجارية",
      color: "from-[#0A2F33] to-[#0F3A3E]",
      popular: true,
      features: [
        "تصميم متقدم مع رسومات ثلاثية الأبعاد",
        "اختيار مواد متميزة",
        "إشراف يومي",
        "ضمان سنتين",
        "تسليم خلال 4 أسابيع",
        "دعم فني شامل",
        "تنسيق الأثاث",
        "نظام إضاءة متطور",
      ],
      notIncluded: ["الأثاث الفاخر المستورد", "أنظمة المنزل الذكي"],
    },
    {
      id: 3,
      name: "الباقة الفاخرة",
      price: "800",
      period: "للمتر المربع",
      description: "للعملاء الذين يبحثون عن أعلى مستويات الفخامة والجودة",
      color: "from-[#0A1F21] to-[#0F3A3E]",
      popular: false,
      features: [
        "تصميم حصري مع تقنيات متقدمة",
        "أفضل المواد المستوردة",
        "إشراف مستمر 24/7",
        "ضمان 5 سنوات",
        "تسليم خلال 3 أسابيع",
        "دعم VIP مدى الحياة",
        "أثاث مخصص فاخر",
        "أنظمة منزل ذكي متكاملة",
        "خدمة تصميم شخصية",
        "صيانة دورية مجانية",
      ],
      notIncluded: [],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1C474A] to-[#0A2F33] relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#CBC1B8] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
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
              باقات الخدمات
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-['Cairo'] font-bold text-white mb-6">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            نقدم باقات متنوعة تناسب جميع الاحتياجات والميزانيات مع ضمان أعلى
            معايير الجودة
          </p>
        </div>

        {/* الباقات */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              } ${pkg.popular ? "lg:-mt-8" : ""}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {/* شارة الأكثر شعبية */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-[#CBC1B8] text-[#0A1F21] px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    الأكثر شعبية
                  </div>
                </div>
              )}

              {/* البطاقة */}
              <div
                className={`relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                  selectedPackage === pkg.id
                    ? "border-[#CBC1B8] shadow-2xl"
                    : "border-white/20"
                } ${
                  pkg.popular ? "border-[#CBC1B8]/50" : ""
                } hover:bg-white/20`}
              >
                {/* الهيدر */}
                <div
                  className={`relative p-8 bg-gradient-to-r ${pkg.color} text-white`}
                >
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-['Cairo'] font-bold mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-white/90 mb-6">{pkg.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-xl">ريال</span>
                      <span className="text-white/80">{pkg.period}</span>
                    </div>
                  </div>
                </div>

                {/* المحتوى */}
                <div className="p-8">
                  {/* الميزات المتضمنة */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <i className="ri-check-line text-[#CBC1B8]"></i>
                      ما يشمله
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-[#CBC1B8]/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <i className="ri-check-line text-[#CBC1B8] text-sm"></i>
                          </div>
                          <span className="text-white/80 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* الميزات غير المتضمنة */}
                  {pkg.notIncluded.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <i className="ri-close-line text-red-400"></i>
                        غير متضمن
                      </h4>
                      <ul className="space-y-3">
                        {pkg.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-red-400/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <i className="ri-close-line text-red-400 text-sm"></i>
                            </div>
                            <span className="text-white/60 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* زر الاختيار */}
                  <Link href="/consultation">
                    <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      <span className="flex items-center justify-center gap-2">
                        <span>اختر هذه الباقة</span>
                        <i className="ri-arrow-left-line group-hover:translate-x-1 transition-transform duration-300"></i>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* قسم المقارنة */}
        <div
          className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-['Cairo'] font-bold text-white mb-4">
              مقارنة سريعة بين الباقات
            </h3>
            <p className="text-white/80">
              اختر الباقة التي تناسب احتياجاتك وميزانيتك
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="text-right py-4 px-6 font-semibold text-white">
                    الميزة
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-white">
                    اقتصادية
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-[#CBC1B8]">
                    متوسطة
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-white">
                    فاخرة
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "التصميم ثلاثي الأبعاد",
                    basic: false,
                    standard: true,
                    premium: true,
                  },
                  {
                    feature: "الإشراف المستمر",
                    basic: false,
                    standard: true,
                    premium: true,
                  },
                  {
                    feature: "الأثاث المخصص",
                    basic: false,
                    standard: true,
                    premium: true,
                  },
                  {
                    feature: "أنظمة المنزل الذكي",
                    basic: false,
                    standard: false,
                    premium: true,
                  },
                  {
                    feature: "الصيانة الدورية",
                    basic: false,
                    standard: false,
                    premium: true,
                  },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5"
                  >
                    <td className="py-4 px-6 text-white/80">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {row.basic ? (
                        <i className="ri-check-line text-[#CBC1B8] text-xl"></i>
                      ) : (
                        <i className="ri-close-line text-red-400 text-xl"></i>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.standard ? (
                        <i className="ri-check-line text-[#CBC1B8] text-xl"></i>
                      ) : (
                        <i className="ri-close-line text-red-400 text-xl"></i>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {row.premium ? (
                        <i className="ri-check-line text-[#CBC1B8] text-xl"></i>
                      ) : (
                        <i className="ri-close-line text-red-400 text-xl"></i>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* قسم النصائح */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ animationDelay: "800ms" }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <h3 className="text-3xl font-['Cairo'] font-bold text-white mb-4">
              تحتاج مساعدة في اختيار الباقة المناسبة؟
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              احصل على نصائح من خبرائنا لمساعدتك في اختيار الباقة المثالية التي
              تناسب احتياجاتك وميزانيتك
            </p>
            <Link href="/consultation">
              <button className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap">
                <span className="relative z-10 flex items-center gap-3">
                  <i className="ri-lightbulb-line text-xl group-hover:rotate-[360deg] transition-transform duration-700"></i>
                  <span>نصائح من خبرائنا</span>
                  <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
