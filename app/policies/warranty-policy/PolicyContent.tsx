export default function PolicyContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl border border-[#FFA500]/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FFA500] rounded-lg flex-shrink-0">
                <i className="ri-shield-star-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  الضمان الشامل
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نقدم ضماناً شاملاً على جميع منتجاتنا وخدماتنا لضمان رضاك التام وراحة بالك.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-[#FFA500]/30 text-center">
                    <div className="text-3xl font-bold text-[#FFA500] mb-2">5 سنوات</div>
                    <p className="text-sm text-gray-600">ضمان الهيكل الخشبي</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#FFA500]/30 text-center">
                    <div className="text-3xl font-bold text-[#FFA500] mb-2">3 سنوات</div>
                    <p className="text-sm text-gray-600">ضمان الأقمشة والجلود</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#FFA500]/30 text-center">
                    <div className="text-3xl font-bold text-[#FFA500] mb-2">سنتان</div>
                    <p className="text-sm text-gray-600">ضمان الإكسسوارات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F0F8FF] to-white p-8 rounded-2xl border border-[#001F3F]/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#001F3F] rounded-lg flex-shrink-0">
                <i className="ri-checkbox-circle-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  ما يشمله الضمان
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                    <span><strong>عيوب التصنيع:</strong> أي عيوب في المواد أو التصنيع تظهر خلال فترة الضمان</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                    <span><strong>الهيكل الخشبي:</strong> كسر أو تشقق في الإطار الخشبي الرئيسي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                    <span><strong>الآليات والمفصلات:</strong> أعطال في الأدراج، الأبواب، أو الآليات المتحركة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                    <span><strong>التشطيبات:</strong> تقشر أو تلف في الطلاء أو التشطيبات الخارجية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                    <span><strong>الإصلاح أو الاستبدال:</strong> نقوم بإصلاح أو استبدال القطع المعيبة مجاناً</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFF0F0] to-white p-8 rounded-2xl border border-red-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-lg flex-shrink-0">
                <i className="ri-close-circle-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  ما لا يشمله الضمان
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-500 text-xl mt-1"></i>
                    <span><strong>الاستخدام الخاطئ:</strong> الأضرار الناتجة عن سوء الاستخدام أو الإهمال</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-500 text-xl mt-1"></i>
                    <span><strong>التآكل الطبيعي:</strong> البلى الطبيعي من الاستخدام اليومي العادي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-500 text-xl mt-1"></i>
                    <span><strong>الحوادث:</strong> الأضرار الناتجة عن الحوادث أو الكوارث الطبيعية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-500 text-xl mt-1"></i>
                    <span><strong>التعديلات:</strong> أي تعديلات أو إصلاحات تمت من قبل جهات غير معتمدة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-close-line text-red-500 text-xl mt-1"></i>
                    <span><strong>الاستخدام التجاري:</strong> المنتجات المستخدمة في الأماكن التجارية أو العامة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F0FFF4] to-white p-8 rounded-2xl border border-green-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-lg flex-shrink-0">
                <i className="ri-file-list-3-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  كيفية المطالبة بالضمان
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">احتفظ بالفاتورة</h3>
                      <p className="text-gray-700">تأكد من الاحتفاظ بالفاتورة الأصلية وبطاقة الضمان</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">اتصل بنا</h3>
                      <p className="text-gray-700">تواصل مع خدمة العملاء وقدم تفاصيل المشكلة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">الفحص والتقييم</h3>
                      <p className="text-gray-700">سيقوم فريقنا بفحص المنتج وتقييم المشكلة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">الإصلاح أو الاستبدال</h3>
                      <p className="text-gray-700">سنقوم بإصلاح أو استبدال المنتج خلال 7-14 يوم عمل</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFFBF0] to-white p-8 rounded-2xl border border-yellow-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-lg flex-shrink-0">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  نصائح للحفاظ على الضمان
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-[#FFA500] mt-1"></i>
                    <span>اتبع تعليمات العناية والصيانة المرفقة مع المنتج</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-[#FFA500] mt-1"></i>
                    <span>تجنب تعريض المنتج للرطوبة الزائدة أو أشعة الشمس المباشرة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-[#FFA500] mt-1"></i>
                    <span>استخدم منتجات التنظيف الموصى بها فقط</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-[#FFA500] mt-1"></i>
                    <span>لا تحاول إصلاح المنتج بنفسك، اتصل بنا دائماً</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#001F3F] to-[#003366] p-8 rounded-2xl text-white text-center">
            <h2 className="font-['Cairo'] text-2xl font-bold mb-4">
              هل لديك استفسار حول الضمان؟
            </h2>
            <p className="text-gray-200 mb-6">
              فريقنا المتخصص جاهز لمساعدتك والإجابة على جميع استفساراتك
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#FFA500] text-white px-8 py-3 rounded-lg font-['Cairo'] font-semibold hover:bg-[#e6940a] transition-colors cursor-pointer whitespace-nowrap"
              >
                تواصل معنا
              </a>
              <a 
                href="mailto:info@luxurylines.com" 
                className="bg-white text-[#001F3F] px-8 py-3 rounded-lg font-['Cairo'] font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                راسلنا عبر البريد
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
