'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServiceDetailHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#CBC1B8]-50 via-[#F7F6F4]-50 to-white">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20interior%20finishing%20construction%20work%20with%20premium%20materials%2C%20elegant%20flooring%20installation%2C%20modern%20ceiling%20design%2C%20quality%20painting%20work%2C%20sophisticated%20lighting%20fixtures%2C%20luxury%20bathroom%20and%20kitchen%20finishing%2C%20clean%20workspace%2C%20professional%20craftsmanship%2C%20high-end%20residential%20finishing&width=1920&height=1080&seq=finishinghero1&orientation=landscape"
          alt="التشطيب المتكامل"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#CBC1B8]-900/80 via-[#F7F6F4]-900/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full text-lg font-semibold border border-white/30">
              <i className="ri-tools-line text-2xl"></i>
              التشطيب المتكامل
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-['Cairo'] font-bold text-white mb-6 leading-tight">
            تشطيبات احترافية
            <span className="block text-[#FB923C]">بأعلى معايير الجودة</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            نقدم خدمات تشطيب شاملة تغطي جميع جوانب البناء من السباكة والكهرباء إلى الدهانات والأرضيات مع ضمان الجودة والتسليم في الوقت المحدد
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <i className="ri-check-line text-2xl text-[#FB923C]"></i>
              <span className="text-white font-semibold">أعمال السباكة</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <i className="ri-check-line text-2xl text-[#FB923C]"></i>
              <span className="text-white font-semibold">الكهرباء</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <i className="ri-check-line text-2xl text-[#FB923C]"></i>
              <span className="text-white font-semibold">الدهانات</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <i className="ri-check-line text-2xl text-[#FB923C]"></i>
              <span className="text-white font-semibold">الأرضيات</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/services/expert-tips">
              <button className="group relative bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white px-8 py-4 rounded-full text-lg font-bold overflow-hidden transition-all duration-300  hover:shadow-2xl whitespace-nowrap">
                <span className="relative z-10 flex items-center gap-3">
                  <i className="ri-lightbulb-line text-xl"></i>
                  نصائح من الخبراء
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#EA580C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </Link>

            <Link href="/contact">
              <button className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white hover:text-[#F97316] transition-all duration-300  whitespace-nowrap">
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