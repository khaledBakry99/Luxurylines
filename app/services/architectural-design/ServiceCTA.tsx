'use client';
import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#0A2F33] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=architectural%20blueprints%20patterns%2C%20engineering%20drawings%20background%2C%20technical%20plans%20texture%2C%20modern%20architecture%20design&width=1920&height=600&seq=arch-cta-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold mb-6">
            هل أنت مستعد لبدء مشروعك المعماري؟
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            دعنا نساعدك في تصميم معماري مبتكر واحصل على نصائح من خبرائنا
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/expert-tips"
              className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <i className="ri-lightbulb-line text-xl group-hover:rotate-[360deg] transition-transform duration-700"></i>
                <span>نصائح من الخبراء</span>
                <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
            <Link
              href="/contact"
              className="group relative bg-[#0A1F21] border-2 border-[#CBC1B8] text-[#CBC1B8] px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#0A1F21] transition-colors duration-300">
                <i className="ri-phone-line text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                <span>تواصل معنا</span>
                <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-top-left"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-bottom-right"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
