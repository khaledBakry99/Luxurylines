export default function PolicyContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl border border-[#FFA500]/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FFA500] rounded-lg flex-shrink-0">
                <i className="ri-map-pin-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  مناطق التوصيل
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نقدم خدمة التوصيل إلى جميع مناطق المملكة العربية السعودية مع خدمة توصيل مجانية لمدن معينة.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-checkbox-circle-fill text-green-500 text-xl"></i>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F]">توصيل مجاني</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• الرياض والمناطق المحيطة</li>
                      <li>• جدة ومكة المكرمة</li>
                      <li>• الدمام والخبر</li>
                      <li>• للطلبات فوق 5,000 ريال</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#FFA500]/30">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-truck-line text-[#FFA500] text-xl"></i>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F]">توصيل مدفوع</h3>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600">
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

          <div className="bg-gradient-to-br from-[#F0F8FF] to-white p-8 rounded-2xl border border-[#001F3F]/10">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#001F3F] rounded-lg flex-shrink-0">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  مدة التوصيل
                </h2>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-[#001F3F]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F]">المنتجات الجاهزة</h3>
                      <span className="text-[#FFA500] font-bold">3-7 أيام</span>
                    </div>
                    <p className="text-sm text-gray-600">للمنتجات المتوفرة في المخزون داخل المدن الرئيسية</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#001F3F]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F]">المنتجات المخصصة</h3>
                      <span className="text-[#FFA500] font-bold">4-8 أسابيع</span>
                    </div>
                    <p className="text-sm text-gray-600">للمنتجات المصممة حسب الطلب أو المستوردة خصيصاً</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#001F3F]/20">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F]">المشاريع الكاملة</h3>
                      <span className="text-[#FFA500] font-bold">حسب الاتفاق</span>
                    </div>
                    <p className="text-sm text-gray-600">للمشاريع الكبيرة والتشطيبات الكاملة يتم تحديد جدول زمني مخصص</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F0FFF4] to-white p-8 rounded-2xl border border-green-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-lg flex-shrink-0">
                <i className="ri-service-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  خدمات التوصيل المتميزة
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">التوصيل حتى الباب</h3>
                      <p className="text-sm text-gray-600">نوصل المنتجات حتى باب منزلك أو مكتبك</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">التركيب المجاني</h3>
                      <p className="text-sm text-gray-600">تركيب احترافي مجاني لجميع المنتجات</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">التغليف الآمن</h3>
                      <p className="text-sm text-gray-600">تغليف احترافي لحماية المنتجات أثناء النقل</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">التأمين الشامل</h3>
                      <p className="text-sm text-gray-600">تأمين كامل على المنتجات أثناء الشحن</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">تحديد الموعد</h3>
                      <p className="text-sm text-gray-600">اختر الوقت المناسب لك للتوصيل</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xl mt-1"></i>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">التتبع المباشر</h3>
                      <p className="text-sm text-gray-600">تتبع شحنتك لحظة بلحظة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFFBF0] to-white p-8 rounded-2xl border border-yellow-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-lg flex-shrink-0">
                <i className="ri-route-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  مراحل التوصيل
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#FFA500] rounded-full text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">تأكيد الطلب</h3>
                      <p className="text-gray-700">سنتواصل معك خلال 24 ساعة لتأكيد تفاصيل الطلب والتوصيل</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#FFA500] rounded-full text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">التحضير والتغليف</h3>
                      <p className="text-gray-700">نقوم بتحضير وتغليف منتجاتك بعناية فائقة</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#FFA500] rounded-full text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">الشحن</h3>
                      <p className="text-gray-700">يتم شحن الطلب مع إرسال رقم التتبع لك</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#FFA500] rounded-full text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">التوصيل والتركيب</h3>
                      <p className="text-gray-700">نوصل ونركب المنتجات في الموعد المحدد</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#FFA500] rounded-full text-white font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-['Cairo'] font-semibold text-[#001F3F] mb-1">المتابعة</h3>
                      <p className="text-gray-700">نتابع معك للتأكد من رضاك التام</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFF0F0] to-white p-8 rounded-2xl border border-red-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-red-500 rounded-lg flex-shrink-0">
                <i className="ri-information-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="font-['Cairo'] text-2xl font-bold text-[#001F3F] mb-3">
                  ملاحظات هامة
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-red-500 mt-1"></i>
                    <span>يرجى التأكد من وجود شخص لاستلام الطلب في الموعد المحدد</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-red-500 mt-1"></i>
                    <span>تأكد من توفر مساحة كافية لدخول المنتجات من المصعد أو السلالم</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-red-500 mt-1"></i>
                    <span>في حالة عدم التمكن من التوصيل، سيتم التواصل معك لتحديد موعد بديل</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-arrow-left-s-line text-red-500 mt-1"></i>
                    <span>يرجى فحص المنتجات عند الاستلام والإبلاغ عن أي تلف فوراً</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#001F3F] to-[#003366] p-8 rounded-2xl text-white text-center">
            <h2 className="font-['Cairo'] text-2xl font-bold mb-4">
              هل لديك استفسار حول التوصيل؟
            </h2>
            <p className="text-gray-200 mb-6">
              تواصل معنا وسنجيب على جميع استفساراتك حول الشحن والتوصيل
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#FFA500] text-white px-8 py-3 rounded-lg font-['Cairo'] font-semibold hover:bg-[#e6940a] transition-colors cursor-pointer whitespace-nowrap"
              >
                تواصل معنا
              </a>
              <a 
                href="tel:+966111234567" 
                className="bg-white text-[#001F3F] px-8 py-3 rounded-lg font-['Cairo'] font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
