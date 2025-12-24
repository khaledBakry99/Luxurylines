
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServiceDetailHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20construction%20project%20management%2C%20modern%20building%20site%20supervision%2C%20architect%20engineer%20managing%20construction%20project%2C%20luxury%20development%20oversight%2C%20construction%20team%20coordination%2C%20project%20planning%20and%20execution%2C%20professional%20management%20services&width=1920&height=1080&seq=projecthero1&orientation=landscape"
          alt="تعهد المشاريع"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/80 via-[#0F3A3E]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-lg font-semibold border border-white/30">
              <i className="ri-briefcase-line text-2xl"></i>
              تعهد المشاريع
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold text-white mb-6 leading-tight">
            إدارة احترافية
            <span className="block text-[#EC4899]">لمشاريعك المتكاملة</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            نتولى إدارة وتنفيذ مشروعك من البداية حتى التسليم النهائي مع ضمان الجودة والالتزام بالمواعيد والميزانية المحددة
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <i className="ri-check-line text-2xl text-[#EC4899]"></i>
              <span className="text-white font-semibold">إدارة محترفة</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <i className="ri-check-line text-2xl text-[#EC4899]"></i>
              <span className="text-white font-semibold">ضمان الجودة</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <i className="ri-check-line text-2xl text-[#EC4899]"></i>
              <span className="text-white font-semibold">الالتزام بالمواعيد</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/services/expert-tips">
              <button className="group relative bg-gradient-to-r from-[#EC4899] to-[#DB2777] text-white px-8 py-4 rounded-full text-lg font-bold overflow-hidden transition-all duration-300  hover:shadow-2xl whitespace-nowrap">
                <span className="relative z-10 flex items-center gap-3">
                  <i className="ri-lightbulb-line text-xl"></i>
                  نصائح من الخبراء
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DB2777] to-[#BE185D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </Link>

            <Link href="/contact">
              <button className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white hover:text-[#DB2777] transition-all duration-300  whitespace-nowrap">
                <span className="flex items-center gap-3">
                  <i className="ri-phone-line text-xl"></i>
                  تواصل معنا
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
