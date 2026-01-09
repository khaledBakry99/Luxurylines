"use client";

export default function PolicyContent() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A2F33] to-[#0A1F21]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#CBC1B8] rounded-lg flex-shrink-0">
                <i className="ri-shield-star-line text-2xl text-[#0A1F21]"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  الضمان الشامل
                </h2>
                <p className="text-[#CBC1B8] leading-relaxed mb-4">
                  نقدم ضماناً شاملاً على جميع منتجاتنا وخدماتنا لضمان رضاك التام
                  وراحة بالك.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-[#0A1F21]/60 p-4 rounded-lg border border-[#CBC1B8]/30 text-center">
                    <div className="text-3xl font-bold text-[#CBC1B8] mb-2">
                      5 سنوات
                    </div>
                    <p className="text-sm text-[#F7F6F4]/80">
                      ضمان الهيكل الخشبي
                    </p>
                  </div>
                  <div className="bg-[#0A1F21]/60 p-4 rounded-lg border border-[#CBC1B8]/30 text-center">
                    <div className="text-3xl font-bold text-[#CBC1B8] mb-2">
                      3 سنوات
                    </div>
                    <p className="text-sm text-[#F7F6F4]/80">
                      ضمان الأقمشة والجلود
                    </p>
                  </div>
                  <div className="bg-[#0A1F21]/60 p-4 rounded-lg border border-[#CBC1B8]/30 text-center">
                    <div className="text-3xl font-bold text-[#CBC1B8] mb-2">
                      سنتان
                    </div>
                    <p className="text-sm text-[#F7F6F4]/80">
                      ضمان الإكسسوارات
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#25D366] rounded-lg flex-shrink-0">
                <i className="ri-checkbox-circle-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  ما يشمله الضمان
                </h2>
                <ul className="space-y-3 text-[#CBC1B8]">
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#25D366] text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">عيوب التصنيع:</strong>{" "}
                      أي عيوب في المواد أو التصنيع تظهر خلال فترة الضمان
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#25D366] text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">الهيكل الخشبي:</strong>{" "}
                      كسر أو تشقق في الإطار الخشبي الرئيسي
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#25D366] text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">
                        الآليات والمفصلات:
                      </strong>{" "}
                      أعطال في الأدراج، الأبواب، أو الآليات المتحركة
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#25D366] text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">التشطيبات:</strong>{" "}
                      تقشر أو تلف في الطلاء أو التشطيبات الخارجية
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-[#25D366] text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">
                        الإصلاح أو الاستبدال:
                      </strong>{" "}
                      نقوم بإصلاح أو استبدال القطع المعيبة مجاناً
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-lg flex-shrink-0">
                <i className="ri-close-circle-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  ما لا يشمله الضمان
                </h2>
                <ul className="space-y-3 text-[#CBC1B8]">
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-400 text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">
                        الاستخدام الخاطئ:
                      </strong>{" "}
                      الأضرار الناتجة عن سوء الاستخدام أو الإهمال
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-400 text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">
                        التآكل الطبيعي:
                      </strong>{" "}
                      البلى الطبيعي من الاستخدام اليومي العادي
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-400 text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">الحوادث:</strong>{" "}
                      الأضرار الناتجة عن الحوادث أو الكوارث الطبيعية
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-400 text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">التعديلات:</strong> أي
                      تعديلات أو إصلاحات تمت من قبل جهات غير معتمدة
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-400 text-xl mt-1"></i>
                    <span>
                      <strong className="text-[#F7F6F4]">
                        الاستخدام التجاري:
                      </strong>{" "}
                      المنتجات المستخدمة في الأماكن التجارية أو العامة
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#CBC1B8] rounded-lg flex-shrink-0">
                <i className="ri-file-list-3-line text-2xl text-[#0A1F21]"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  كيفية المطالبة بالضمان
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        احتفظ بالفاتورة
                      </h3>
                      <p className="text-[#CBC1B8]">
                        تأكد من الاحتفاظ بالفاتورة الأصلية وبطاقة الضمان
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        اتصل بنا
                      </h3>
                      <p className="text-[#CBC1B8]">
                        تواصل مع خدمة العملاء وقدم تفاصيل المشكلة
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        الفحص والتقييم
                      </h3>
                      <p className="text-[#CBC1B8]">
                        سيقوم فريقنا بفحص المنتج وتقييم المشكلة
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8] rounded-full text-[#0A1F21] font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#F7F6F4] mb-1">
                        الإصلاح أو الاستبدال
                      </h3>
                      <p className="text-[#CBC1B8]">
                        سنقوم بإصلاح أو استبدال المنتج خلال 7-14 يوم عمل
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-lg flex-shrink-0">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#F7F6F4] mb-3">
                  نصائح للحفاظ على الضمان
                </h2>
                <ul className="space-y-2 text-[#CBC1B8]">
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-[#CBC1B8] mt-1"></i>
                    <span>اتبع تعليمات العناية والصيانة المرفقة مع المنتج</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-[#CBC1B8] mt-1"></i>
                    <span>
                      تجنب تعريض المنتج للرطوبة الزائدة أو أشعة الشمس المباشرة
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-[#CBC1B8] mt-1"></i>
                    <span>استخدم منتجات التنظيف الموصى بها فقط</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-[#CBC1B8] mt-1"></i>
                    <span>لا تحاول إصلاح المنتج بنفسك، اتصل بنا دائماً</span>
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
              <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4 text-center">
                هل لديك استفسار حول الضمان؟
              </h3>
              <p className="text-[#CBC1B8]/90 mb-6 max-w-2xl mx-auto text-center">
                فريقنا المتخصص جاهز لمساعدتك والإجابة على جميع استفساراتك
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
                  href="mailto:Luxlins@gmail.com"
                  className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-5 rounded-2xl text-lg font-bold hover:from-[#CBC1B8] hover:to-[#F7F6F4] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Button Content */}
                  <div className="relative flex items-center gap-3">
                    <span>راسلنا عبر البريد</span>
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
