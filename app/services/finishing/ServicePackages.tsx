"use client";
import { useState } from "react";

const packages = [
  {
    name: "الباقة الأساسية",
    price: "300",
    period: "للمتر المربع",
    description: "مثالية للمساحات الصغيرة والمتوسطة",
    features: [
      "أعمال السباكة الأساسية",
      "التمديدات الكهربائية",
      "دهانات عادية",
      "أرضيات سيراميك",
      "أسقف معلقة بسيطة",
      "ضمان سنة واحدة",
    ],
    color: "from-[#0A1F21] to-[#0F3A3E]",
    popular: false,
  },
  {
    name: "الباقة المتقدمة",
    price: "550",
    period: "للمتر المربع",
    description: "الأنسب للمشاريع المتوسطة والكبيرة",
    features: [
      "جميع مميزات الباقة الأساسية",
      "سباكة متطورة مع تجهيزات فاخرة",
      "كهرباء ذكية",
      "دهانات ديكورية",
      "بلاط بورسلان",
      "أسقف معلقة مميزة",
      "جبس بورد ديكوري",
      "ضمان سنتين",
    ],
    color: "from-[#F7F6F4] to-[#CBC1B8]",
    popular: true,
  },
  {
    name: "الباقة الشاملة",
    price: "800",
    period: "للمتر المربع",
    description: "للمشاريع الفاخرة والفلل الراقية",
    features: [
      "جميع مميزات الباقة المتقدمة",
      "سباكة فاخرة مع جميع التجهيزات",
      "نظام كهربائي ذكي متكامل",
      "دهانات فاخرة بتقنيات حديثة",
      "رخام وبورسلان فاخر للأرضيات",
      "أسقف معلقة ثري دي مميزة",
      "جبس بورد بتصاميم احترافية",
      "إضاءة LED متطورة",
      "ضمان 3 سنوات",
    ],
    color: "from-[#0A2F33] to-[#1C474A]",
    popular: false,
  },
];

export default function ServicePackages() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#1C474A] to-[#0A2F33] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#CBC1B8]/20 text-[#CBC1B8] px-6 py-2 rounded-full text-sm font-semibold mb-4">
            الأسعار والباقات
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            نقدم باقات متنوعة تناسب جميع الاحتياجات والميزانيات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-500 transform ${
                pkg.popular ? "scale-105 ring-4 ring-[#CBC1B8]" : ""
              } ${hoveredIndex === index ? "-translate-y-4" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <div
                className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl mb-6 mx-auto transform ${
                  hoveredIndex === index ? "rotate-12 scale-110" : ""
                } transition-all duration-300`}
              >
                <i className="ri-tools-line text-4xl text-[#0A1F21]"></i>
              </div>

              <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] text-center mb-2">
                {pkg.name}
              </h3>

              <p className="text-[#CBC1B8]/85 text-center mb-6">
                {pkg.description}
              </p>

              <div className="text-center mb-8">
                <div className="flex items-start justify-center gap-2">
                  <span className="text-6xl font-bold text-[#F7F6F4]">
                    {pkg.price}
                  </span>
                  <span className="text-2xl font-bold text-[#F7F6F4] mt-2">
                    ر.س
                  </span>
                </div>
                <span className="text-[#CBC1B8]/85">{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <i className="ri-check-line text-xl flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#CBC1B8] text-[#0A1F21] rounded-full mt-0.5"></i>
                    <span className="text-[#F7F6F4]/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-4 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                اطلب عرض الأسعار
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
