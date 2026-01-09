"use client";

export default function PolicyContent() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2F33] to-[#0A1F21]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#CBC1B8] rounded-lg flex-shrink-0">
                <i className="ri-map-pin-line text-2xl text-[#0A1F21]"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  مناطق التوصيل
                </h2>
                <p className="text-[#CBC1B8] leading-relaxed mb-4">
                  نقدم خدمة التوصيل إلى جميع مناطق المملكة العربية السعودية مع
                  خدمة توصيل مجانية لمدن معينة.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#0A1F21]/60 p-4 rounded-lg border border-[#25D366]/30">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-checkbox-circle-fill text-[#25D366] text-xl"></i>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4]">
                        توصيل مجاني
                      </h3>
                    </div>
                    <ul className="space-y-1 text-sm text-[#CBC1B8]">
                      <li>• الرياض والمناطق المحيطة</li>
                      <li>• جدة ومكة المكرمة</li>
                      <li>• الدمام والخبر</li>
                      <li>• للطلبات فوق 5,000 ريال</li>
                    </ul>
                  </div>
                  <div className="bg-[#0A1F21]/60 p-4 rounded-lg border border-[#CBC1B8]/30">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-truck-line text-[#CBC1B8] text-xl"></i>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4]">
                        توصيل مدفوع
                      </h3>
                    </div>
                    <ul className="space-y-1 text-sm text-[#CBC1B8]">
                      <li>• باقي مناطق المملكة</li>
                      <li>• تكلفة الشحن حسب الموقع</li>
                      <li>• يتم احتسابها عند الطلب</li>
                      <li>• تبدأ من 200 ريال</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#CBC1B8] rounded-lg flex-shrink-0">
                <i className="ri-time-line text-2xl text-[#0A1F21]"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  مدة التوصيل
                </h2>
                <div className="space-y-4">
                  <div className="bg-[#0A1F21]/60 p-4 rounded-lg border border-[#CBC1B8]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4]">
                        المنتجات الجاهزة
                      </h3>
                      <span className="text-[#CBC1B8] font-bold">3-7 أيام</span>
                    </div>
                    <p className="text-sm text-[#CBC1B8]/80">
                      للمنتجات المتوفرة في المخزون داخل المدن الرئيسية
                    </p>
                  </div>
                  <div className="bg-[#0A1F21]/60 p-4 rounded-lg border border-[#CBC1B8]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4]">
                        المنتجات المخصصة
                      </h3>
                      <span className="text-[#CBC1B8] font-bold">
                        4-8 أسابيع
                      </span>
                    </div>
                    <p className="text-sm text-[#CBC1B8]/80">
                      للمنتجات المصممة حسب الطلب أو المستوردة خصيصاً
                    </p>
                  </div>
                  <div className="bg-[#0A1F21]/60 p-4 rounded-lg border border-[#CBC1B8]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4]">
                        المشاريع الكاملة
                      </h3>
                      <span className="text-[#CBC1B8] font-bold">
                        حسب الاتفاق
                      </span>
                    </div>
                    <p className="text-sm text-[#CBC1B8]/80">
                      للمشاريع الكبيرة والتشطيبات الكاملة يتم تحديد جدول زمني
                      مخصص
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#25D366] rounded-lg flex-shrink-0">
                <i className="ri-service-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  خدمات التوصيل المتميزة
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-[#25D366] text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        التوصيل حتى الباب
                      </h3>
                      <p className="text-sm text-[#CBC1B8]">
                        نوصل المنتجات حتى باب منزلك أو مكتبك
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-[#25D366] text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        التركيب المجاني
                      </h3>
                      <p className="text-sm text-[#CBC1B8]">
                        تركيب احترافي مجاني لجميع المنتجات
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-[#25D366] text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        التغليف الآمن
                      </h3>
                      <p className="text-sm text-[#CBC1B8]">
                        تغليف احترافي لحماية المنتجات أثناء النقل
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-[#25D366] text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        التأمين الشامل
                      </h3>
                      <p className="text-sm text-[#CBC1B8]">
                        تأمين كامل على المنتجات أثناء الشحن
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-[#25D366] text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        تحديد الموعد
                      </h3>
                      <p className="text-sm text-[#CBC1B8]">
                        اختر الوقت المناسب لك للتوصيل
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-[#25D366] text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        التتبع المباشر
                      </h3>
                      <p className="text-sm text-[#CBC1B8]">
                        تتبع شحنتك لحظة بلحظة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#CBC1B8] rounded-lg flex-shrink-0">
                <i className="ri-route-line text-2xl text-[#0A1F21]"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  مراحل التوصيل
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        تأكيد الطلب
                      </h3>
                      <p className="text-[#CBC1B8]">
                        سنتواصل معك خلال 24 ساعة لتأكيد تفاصيل الطلب والتوصيل
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        التحضير والتغليف
                      </h3>
                      <p className="text-[#CBC1B8]">
                        نقوم بتحضير وتغليف منتجاتك بعناية فائقة
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        الشحن
                      </h3>
                      <p className="text-[#CBC1B8]">
                        يتم شحن الطلب مع إرسال رقم التتبع لك
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        التوصيل والتركيب
                      </h3>
                      <p className="text-[#CBC1B8]">
                        نوصل ونركب المنتجات في الموعد المحدد
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        المتابعة
                      </h3>
                      <p className="text-[#CBC1B8]">
                        نتابع معك للتأكد من رضاك التام
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-lg flex-shrink-0">
                <i className="ri-information-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  ملاحظات هامة
                </h2>
                <ul className="space-y-2 text-[#CBC1B8]">
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-red-400 mt-1"></i>
                    <span>
                      يرجى التأكد من وجود شخص لاستلام الطلب في الموعد المحدد
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-red-400 mt-1"></i>
                    <span>
                      تأكد من توفر مساحة كافية لدخول المنتجات من المصعد أو
                      السلالم
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-red-400 mt-1"></i>
                    <span>
                      في حالة عدم التمكن من التوصيل، سيتم التواصل معك لتحديد
                      موعد بديل
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-red-400 mt-1"></i>
                    <span>
                      يرجى فحص المنتجات عند الاستلام والإبلاغ عن أي تلف فوراً
                    </span>
                  </li>
                </ul>
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
              <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
                هل لديك استفسار حول التوصيل؟
              </h3>
              <p className="text-[#CBC1B8]/90 mb-6 max-w-2xl mx-auto">
                تواصل معنا وسنجيب على جميع استفساراتك حول الشحن والتوصيل
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
      </div>
    </section>
  );
}
