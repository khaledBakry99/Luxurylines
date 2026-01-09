"use client";

import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0A1F21] via-[#1C474A] to-[#0F3A3E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 flex items-center justify-center bg-[#CBC1B8] rounded-full mx-auto mb-8 shadow-2xl">
            <i className="ri-chat-smile-3-line text-4xl text-[#0A1F21]"></i>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-6 leading-tight">
            هل أعجبك هذا المشروع؟
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            دعنا نحول رؤيتك إلى واقع! احصل على نصائح مجانية من خبرائنا الآن
            واحصل على تصميم مخصص يناسب احتياجاتك
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/consultation"
              className="group relative inline-flex items-center gap-3 bg-[#CBC1B8] text-[#0A1F21] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl overflow-hidden cursor-pointer whitespace-nowrap"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-calendar-check-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <span className="relative z-10">احصل على نصائح مجانية</span>
              <div className="absolute inset-0 bg-[#F7F6F4] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-[#0A1F21] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#F7F6F4] transition-all duration-300 shadow-xl cursor-pointer whitespace-nowrap"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-phone-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </div>
              <span>تواصل معنا</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#CBC1B8] mb-2">500+</div>
              <div className="text-white/80">مشروع منجز</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#CBC1B8] mb-2">15+</div>
              <div className="text-white/80">سنة خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#CBC1B8] mb-2">98%</div>
              <div className="text-white/80">رضا العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
