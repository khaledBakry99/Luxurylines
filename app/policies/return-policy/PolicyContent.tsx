export default function PolicyContent() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="bg-gradient-to-br from-[#001F3F]/5 to-[#FFA500]/5 rounded-3xl p-8 md:p-12 mb-12 border border-[#FFA500]/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-2xl flex-shrink-0">
              <i className="ri-time-line text-white text-3xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-4">مدة الاستبدال والإسترجاع</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                يمكنك استبدال أو إرجاع المنتجات خلال <span className="font-bold text-[#FFA500]">30 يوماً</span> من تاريخ الاستلام، بشرط أن يكون المنتج في حالته الأصلية دون استخدام.
              </p>
              
              <ul className="mt-6 space-y-3">
                {[
                  'المنتج في عبوته الأصلية مع جميع الملحقات',
                  'عدم وجود خدوش أو تلف في المنتج',
                  'توفر الفاتورة الأصلية'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <i className="ri-checkbox-circle-fill text-[#25D366] text-xl"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#001F3F]/5 to-[#FFA500]/5 rounded-3xl p-8 md:p-12 mb-12 border border-[#FFA500]/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex-shrink-0">
              <i className="ri-close-circle-line text-white text-3xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-4">المنتجات المستثناة من الإسترجاع</h2>
              <ul className="space-y-3">
                {[
                  'المنتجات المصممة خصيصاً حسب الطلب',
                  'المنتجات التي تم تركيبها أو تثبيتها',
                  'المنتجات المخفضة أو المعروضة في التخفيضات الموسمية',
                  'الإكسسوارات والمنتجات الصغيرة بعد فتح العبوة'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <i className="ri-close-circle-fill text-red-500 text-xl"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#001F3F]/5 to-[#FFA500]/5 rounded-3xl p-8 md:p-12 mb-12 border border-[#FFA500]/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex-shrink-0">
              <i className="ri-refund-2-line text-white text-3xl"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-4">استرداد المبالغ</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                بعد استلام المنتج المرتجع وفحصه، سيتم استرداد المبلغ بنفس طريقة الدفع الأصلية خلال <span className="font-bold text-[#FFA500]">7-10 أيام عمل</span>.
              </p>
              <div className="bg-yellow-50 border-r-4 border-[#FFA500] p-4 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-bold text-[#FFA500]">ملاحظة:</span> تكاليف الشحن الأصلية غير قابلة للاسترداد، وسيتحمل العميل تكاليف شحن الإسترجاع ما لم يكن المنتج معيباً أو تم شحن منتج خاطئ.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#001F3F] to-[#002a5c] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">هل لديك استفسار حول سياسة الإسترجاع؟</h2>
          <p className="text-white/90 text-lg mb-8">
            فريق خدمة العملاء لدينا جاهز لمساعدتك في أي وقت
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              تواصل معنا
            </a>
            <a
              href="tel:+966501234567"
              className="px-8 py-4 bg-white text-[#001F3F] rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              اتصل بنا الآن
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
