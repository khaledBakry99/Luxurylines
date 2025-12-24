'use client';
import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1C474A] to-[#0A2F33] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
            <i className="ri-restaurant-2-line text-5xl text-white"></i>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-['Cairo'] font-bold mb-6">
            هل أنت مستعد لمطبخ أحلامك؟
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
            دعنا نساعدك في تصميم وتنفيذ مطبخ فاخر بأحدث التقنيات
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
