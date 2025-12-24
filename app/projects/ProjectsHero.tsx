'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProjectsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20interior%20design%20portfolio%20showcase%2C%20modern%20architectural%20projects%2C%20elegant%20residential%20and%20commercial%20spaces%2C%20professional%20design%20work%2C%20sophisticated%20interiors&width=1920&height=1080&seq=projects-hero-bg&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#1C474A]/85 to-[#0A1F21]/90"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-[#CBC1B8]/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-[#CBC1B8]/10 rotate-45 animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-[#F7F6F4] px-6 max-w-7xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8">
            <i className="ri-gallery-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">معرض أعمالنا</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Cairo'] font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-[#F7F6F4] via-[#CBC1B8] to-[#F7F6F4] bg-clip-text text-transparent">
              مشاريعنا
            </span>
            <span className="block text-[#CBC1B8] mt-4">
              المتميزة
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-[#CBC1B8]/90">
            استكشف مجموعة من أفضل مشاريعنا التي تعكس خبرتنا وإبداعنا في التصميم الداخلي والخارجي
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <button 
              onClick={scrollToProjects}
              className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-12 py-5 rounded-2xl text-xl font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap w-full md:w-auto cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <i className="ri-gallery-line text-2xl group-hover:rotate-[360deg] transition-transform duration-700"></i>
                <span>استعرض جميع المشاريع</span>
                <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            
            <Link href="/consultation">
              <button className="group relative bg-[#0A1F21] border-2 border-[#CBC1B8] text-[#F7F6F4] px-12 py-5 rounded-2xl text-xl font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap w-full md:w-auto cursor-pointer">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <i className="ri-tools-line text-2xl group-hover:rotate-12 transition-transform duration-300"></i>
                  <span>اطلب مشروع مخصص</span>
                  <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-top-left"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-bottom-right"></div>
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'مشروع مكتمل', icon: 'ri-building-line' },
              { number: '15+', label: 'سنة خبرة', icon: 'ri-time-line' },
              { number: '98%', label: 'نسبة رضا العملاء', icon: 'ri-star-line' },
              { number: '250+', label: 'مشروع مكتمل', icon: 'ri-briefcase-line' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`group bg-[#F7F6F4]/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20 hover:bg-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-500 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[#CBC1B8]/20 rounded-xl group-hover:bg-[#CBC1B8]/30 transition-all duration-300">
                  <i className={`${stat.icon} text-2xl text-[#CBC1B8]`}></i>
                </div>
                <div className="text-3xl font-bold text-[#CBC1B8] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#F7F6F4]/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}