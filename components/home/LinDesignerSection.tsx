import Link from "next/link";

export default function LinDesignerSection() {
  return (
    <section className="py-20 bg-gradient-to-l from-[#0A1F21] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
              جرب أداة مصمم الديكور الذكي التفاعلية
            </h2>
            <p className="text-lg text-[#CBC1B8]/90 mb-8 leading-relaxed">
              أداة تفاعلية مبتكرة تتيح لك إدخال أبعاد غرفتك وتجربة ألوان الجدران
              وتطبيق مواد الأرضية المختلفة قبل اتخاذ القرار النهائي.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-[#CBC1B8] rounded-full ml-4">
                  <i className="ri-check-line text-[#0A1F21] text-sm"></i>
                </div>
                <span className="text-[#CBC1B8]/90">
                  إدخال أبعاد الغرفة بدقة
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-[#CBC1B8] rounded-full ml-4">
                  <i className="ri-check-line text-[#0A1F21] text-sm"></i>
                </div>
                <span className="text-[#CBC1B8]/90">
                  تجربة ألوان الجدران المختلفة
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-[#CBC1B8] rounded-full ml-4">
                  <i className="ri-check-line text-[#0A1F21] text-sm"></i>
                </div>
                <span className="text-[#CBC1B8]/90">
                  اختيار أنواع الأرضيات وورق الجدران
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-[#CBC1B8] rounded-full ml-4">
                  <i className="ri-check-line text-[#0A1F21] text-sm"></i>
                </div>
                <span className="text-[#CBC1B8]/90">حفظ وتحميل التصاميم</span>
              </div>
            </div>

            <Link
              href="/lin-designer"
              className="group relative inline-flex items-center gap-4 bg-[#CBC1B8] text-[#0A1F21] px-10 py-5 rounded-2xl font-['Cairo'] font-bold text-lg hover:bg-[#CBC1B8] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center bg-[#0A1F21]/30 rounded-full transition-all duration-300">
                  <i className="ri-palette-line text-xl"></i>
                </div>
                <span>ابدأ التصميم الآن</span>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-[#CBC1B8] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>

              <div className="absolute inset-0 rounded-2xl border-2 border-[#CBC1B8] opacity-0 group-hover:opacity-50 animate-pulse transition-opacity duration-500"></div>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20interior%20design%20software%20interface%20on%20computer%20screen%2C%203D%20room%20visualization%20tool%2C%20contemporary%20room%20design%20with%20different%20wall%20colors%20and%20flooring%20options%2C%20professional%20UI%20design%2C%20clean%20modern%20interface&width=600&height=400&seq=lin-designer&orientation=landscape"
                alt="واجهة مصمم الديكور الذكي"
                className="w-full h-auto rounded-xl shadow-2xl object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
