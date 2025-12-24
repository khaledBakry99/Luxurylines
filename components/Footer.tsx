import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F21] text-[#F7F6F4]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-['Cairo'] text-xl font-bold mb-4 text-[#CBC1B8]">Luxurylines</h3>
            <p className="text-[#CBC1B8]/80 mb-4 leading-relaxed">
              متجر ومعرض خدمات متكامل للتصميم الداخلي والخارجي، التشطيب، وتعهد المشاريع
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-[#CBC1B8] rounded-full hover:bg-[#F7F6F4] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl text-[#0A1F21]"></i>
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-[#CBC1B8] rounded-full hover:bg-[#F7F6F4] transition-colors cursor-pointer">
                <i className="ri-instagram-line text-xl text-[#0A1F21]"></i>
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-[#CBC1B8] rounded-full hover:bg-[#F7F6F4] transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-xl text-[#0A1F21]"></i>
              </Link>
              <Link href="#" className="w-10 h-10 flex items-center justify-center bg-[#CBC1B8] rounded-full hover:bg-[#F7F6F4] transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-xl text-[#0A1F21]"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Cairo'] text-lg font-semibold mb-4 text-[#CBC1B8]">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">الرئيسية</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">المشاريع</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">الخدمات</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">من نحن</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">اتصل بنا</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/lin-designer" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">مصمم الديكور الذكي</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">تقييم العملاء</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Cairo'] text-lg font-semibold mb-4 text-[#CBC1B8]">خدماتنا</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/interior-design" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">التصميم الداخلي</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/services/exterior-design" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">التصميم الخارجي</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/services/finishing" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">التشطيب المتكامل</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/services/supply" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">توريد الأساس</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/services/project-management" className="group relative inline-block text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors cursor-pointer overflow-hidden">
                  <span className="relative z-10">تعهد المشاريع</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-xl font-bold text-[#CBC1B8] mb-6">السياسات</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/policies/return-policy" className="text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors duration-300 flex items-center gap-2 group whitespace-nowrap">
                  <i className="ri-arrow-left-s-line text-[#CBC1B8] group-hover:translate-x-1 transition-transform duration-300"></i>
                  سياسة الاستبدال والإسترجاع
                </Link>
              </li>
              <li>
                <Link href="/policies/warranty-policy" className="text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors duration-300 flex items-center gap-2 group whitespace-nowrap">
                  <i className="ri-arrow-left-s-line text-[#CBC1B8] group-hover:translate-x-1 transition-transform duration-300"></i>
                  سياسة الضمان
                </Link>
              </li>
              <li>
                <Link href="/policies/shipping-policy" className="text-[#F7F6F4]/80 hover:text-[#CBC1B8] transition-colors duration-300 flex items-center gap-2 group whitespace-nowrap">
                  <i className="ri-arrow-left-s-line text-[#CBC1B8] group-hover:translate-x-1 transition-transform duration-300"></i>
                  سياسة التوصيل والشحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Cairo'] text-lg font-semibold mb-4 text-[#CBC1B8]">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center ml-3">
                  <i className="ri-map-pin-line text-[#CBC1B8]"></i>
                </div>
                <span className="text-[#F7F6F4]/80">شارع الأمير محمد بن عبدالعزيز، الرياض، المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center ml-3">
                  <i className="ri-whatsapp-line text-[#CBC1B8]"></i>
                </div>
                <span className="text-[#F7F6F4]/80">+966 11 123 4567</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center ml-3">
                  <i className="ri-mail-line text-[#CBC1B8]"></i>
                </div>
                <span className="text-[#F7F6F4]/80">info@luxurylines.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1C474A] mt-8 pt-8">
          <p className="text-[#CBC1B8]/70 text-center">
            © 2024 Luxurylines. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
