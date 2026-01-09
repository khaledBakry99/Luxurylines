"use client";
import Link from "next/link";

export default function ServicePackages() {
  const packages = [
    {
      name: "باقة المواد الأساسية",
      description: "مثالية لبناء المشاريع الصغيرة والمتوسطة",
      features: [
        "طوب وأسمنت",
        "حديد تسليح",
        "رمل وزلط معتمد",
        "مواد عزل",
        "توصيل في الموعد",
        "ضمان الجودة",
      ],
      icon: "ri-building-2-line",
      color: "from-[#1C474A] to-[#0F3A3E]",
    },
    {
      name: "باقة التشطيب الفاخر",
      description: "مثالية لمواد التشطيب النهائية الفاخرة",
      features: [
        "جميع مواد التشطيب",
        "سيراميك وبورسلين",
        "دهانات عالية الجودة",
        "أدوات السباكة",
        "معدات كهرباء كاملة",
        "ضمان 5 سنوات",
      ],
      icon: "ri-vip-crown-line",
      color: "from-[#0A2F33] to-[#1C474A]",
      featured: true,
    },
    {
      name: "باقة المشاريع الكبيرة",
      description: "حل متكامل لتوريد المشاريع الكبيرة",
      features: [
        "جميع المواد الأساسية",
        "مواد التشطيب",
        "المعدات والأدوات",
        "خدمات التوصيل",
        "المتابعة والإشراف",
        "خصم حتى 15%",
      ],
      icon: "ri-gift-line",
      color: "from-[#CBC1B8] to-[#F7F6F4]",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1C474A] to-[#0A2F33]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
            باقات الخدمة
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            اختر الباقة المناسبة لمشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/15 ${
                pkg.featured ? "ring-4 ring-[#CBC1B8] scale-105" : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${pkg.icon} text-3xl text-[#0A1F21]`}></i>
                </div>

                <h3 className="text-3xl font-['Cairo'] font-bold text-[#F7F6F4] mb-2">
                  {pkg.name}
                </h3>

                <p className="text-[#CBC1B8]/85 mb-6 min-h-[3rem]">
                  {pkg.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="ri-checkbox-circle-fill text-[#CBC1B8] text-xl ml-3 mt-1 flex-shrink-0"></i>
                      <span className="text-[#F7F6F4]/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/consultation">
                  <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                    اطلب الآن
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
