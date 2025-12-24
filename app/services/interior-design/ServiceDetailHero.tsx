'use client';

import Link from 'next/link';

export default function ServiceDetailHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxurious%20modern%20interior%20design%20living%20room%20with%20elegant%20furniture%2C%20sophisticated%20lighting%2C%20marble%20accents%2C%20contemporary%20decor%2C%20professional%20interior%20design%20showcase%2C%20clean%20minimalist%20aesthetic%2C%20warm%20ambient%20lighting%2C%20high-end%20materials&width=1920&height=1080&seq=interior-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-right">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-home-4-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">التصميم الداخلي</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            تصميم داخلي
            <span className="block text-[#CBC1B8]">فاخر ومميز</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            نحول مساحاتك الداخلية إلى تحف فنية تعكس شخصيتك وأسلوب حياتك مع أحدث الاتجاهات العالمية في التصميم
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-check-line text-[#CBC1B8] ml-2"></i>
              <span className="text-white">تصميم ثلاثي الأبعاد</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-check-line text-[#CBC1B8] ml-2"></i>
              <span className="text-white">اختيار المواد</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-check-line text-[#CBC1B8] ml-2"></i>
              <span className="text-white">الإضاءة المتخصصة</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/services/expert-tips">
              <button className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl whitespace-nowrap overflow-hidden">
                <span className="relative z-10 flex items-center space-x-3 space-x-reverse">
                  <span>نصائح من الخبراء</span>
                  <i className="ri-lightbulb-line text-xl"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4] to-[#CBC1B8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </Link>

            <Link href="/projects">
              <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-500 hover:bg-white hover:text-gray-900 whitespace-nowrap">
                <span className="flex items-center space-x-3 space-x-reverse">
                  <span>مشاهدة الأعمال</span>
                  <i className="ri-eye-line text-xl"></i>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}