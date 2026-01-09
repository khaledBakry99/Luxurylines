"use client";

export default function PolicyContent() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2F33] to-[#0A1F21]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-[#CBC1B8] rounded-2xl flex-shrink-0">
              <i className="ri-time-line text-[#0A1F21] text-3xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#F7F6F4] mb-4">
                مدة الاستبدال والإسترجاع
              </h2>
              <p className="text-[#CBC1B8] text-lg leading-relaxed">
                يمكنك استبدال أو إرجاع المنتجات خلال{" "}
                <span className="font-bold text-[#F7F6F4]">30 يوماً</span> من
                تاريخ الاستلام، بشرط أن يكون المنتج في حالته الأصلية دون
                استخدام.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "المنتج في عبوته الأصلية مع جميع الملحقات",
                  "عدم وجود خدوش أو تلف في المنتج",
                  "توفر الفاتورة الأصلية",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[#CBC1B8]"
                  >
                    <i className="ri-checkbox-circle-fill text-[#25D366] text-xl"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-red-500 rounded-2xl flex-shrink-0">
              <i className="ri-close-circle-line text-white text-3xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#F7F6F4] mb-4">
                المنتجات المستثناة من الإسترجاع
              </h2>
              <ul className="space-y-3">
                {[
                  "المنتجات المصممة خصيصاً حسب الطلب",
                  "المنتجات التي تم تركيبها أو تثبيتها",
                  "المنتجات المخفضة أو المعروضة في التخفيضات الموسمية",
                  "الإكسسوارات والمنتجات الصغيرة بعد فتح العبوة",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[#CBC1B8]"
                  >
                    <i className="ri-close-circle-fill text-red-400 text-xl"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-[#25D366] rounded-2xl flex-shrink-0">
              <i className="ri-refund-2-line text-white text-3xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#F7F6F4] mb-4">
                استرداد المبالغ
              </h2>
              <p className="text-[#CBC1B8] text-lg leading-relaxed mb-4">
                بعد استلام المنتج المرتجع وفحصه، سيتم استرداد المبلغ بنفس طريقة
                الدفع الأصلية خلال{" "}
                <span className="font-bold text-[#F7F6F4]">7-10 أيام عمل</span>.
              </p>
              <div className="bg-[#0A1F21]/60 border-r-4 border-[#CBC1B8] p-4 rounded-lg">
                <p className="text-[#CBC1B8]">
                  <span className="font-bold text-[#F7F6F4]">ملاحظة:</span>{" "}
                  تكاليف الشحن الأصلية غير قابلة للاسترداد، وسيتحمل العميل
                  تكاليف شحن الإسترجاع ما لم يكن المنتج معيباً أو تم شحن منتج
                  خاطئ.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1C474A] to-[#0A2F33] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[#1C474A]/40 border border-[#CBC1B8]/10">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 6 + 2 + "px",
                  height: Math.random() * 6 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animation: `float ${
                    Math.random() * 3 + 2
                  }s ease-in-out infinite`,
                  animationDelay: Math.random() * 2 + "s",
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4 text-center">
              هل لديك استفسار حول سياسة الإسترجاع؟
            </h3>
            <p className="text-[#CBC1B8]/90 mb-6 max-w-2xl mx-auto text-center">
              فريق خدمة العملاء لدينا جاهز لمساعدتك في أي وقت
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-5 rounded-2xl text-lg font-bold hover:from-[#CBC1B8] hover:to-[#F7F6F4] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                  <span>تواصل معنا</span>
                  <div className="w-8 h-8 flex items-center justify-center bg-[#0A1F21]/30 rounded-full transition-all duration-300">
                    <i className="ri-arrow-left-line text-xl"></i>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              </a>
              <a
                href="tel:+966559300791"
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-5 rounded-2xl text-lg font-bold hover:from-[#CBC1B8] hover:to-[#F7F6F4] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                  <span>اتصل بنا الآن</span>
                  <div className="w-8 h-8 flex items-center justify-center bg-[#0A1F21]/30 rounded-full transition-all duration-300">
                    <i className="ri-arrow-left-line text-xl"></i>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              </a>
            </div>
          </div>

          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0) translateX(0);
              }
              50% {
                transform: translateY(-20px) translateX(10px);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
