'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: 'ri-home-4-line',
    title: 'التصميم الداخلي',
    description: 'تصميم مساحات داخلية فاخرة تعكس شخصيتك وأسلوب حياتك مع أحدث الاتجاهات العالمية',
    link: '/services/interior-design',
    color: 'from-blue-500 to-blue-600',
    bgPattern: 'ri-home-smile-line'
  },
  {
    icon: 'ri-building-line',
    title: 'التصميم الخارجي',
    description: 'تصميم واجهات خارجية مميزة تجمع بين الجمال والوظيفة مع مراعاة البيئة المحيطة',
    link: '/services/exterior-design',
    color: 'from-green-500 to-green-600',
    bgPattern: 'ri-building-2-line'
  },
  {
    icon: 'ri-hammer-line',
    title: 'التشطيب المتكامل',
    description: 'خدمات تشطيب شاملة بأعلى معايير الجودة والدقة مع ضمان الجودة والمتابعة',
    link: '/services/finishing',
    color: 'from-purple-500 to-purple-600',
    bgPattern: 'ri-tools-fill'
  },
  {
    icon: 'ri-tools-line',
    title: 'تعهد المشاريع',
    description: 'إدارة وتنفيذ مشاريعك من البداية حتى التسليم مع فريق متخصص ومتابعة دورية',
    link: '/services/project-management',
    color: 'from-orange-500 to-orange-600',
    bgPattern: 'ri-settings-3-line'
  }
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section 
      id="services-section"
      className="py-24 bg-gradient-to-r from-[#0A1F21] to-[#1C474A] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#CBC1B8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#F7F6F4] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-[#CBC1B8]/15 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-service-line text-[#CBC1B8] text-xl"></i>
            </div>
            <span className="text-[#F7F6F4]/85 font-medium">خدماتنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6 leading-tight">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات في مجال التصميم والتشطيب لتحويل رؤيتك إلى واقع مذهل
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-gradient-to-br from-[#1C474A] to-[#0A1F21] rounded-2xl shadow-card-glow hover:shadow-card-glow-hover transition-all duration-500 border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 overflow-hidden group-hover:-translate-y-2 h-full flex flex-col">
                {/* Background Pattern */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <i className={`${service.bgPattern} text-6xl text-[#F7F6F4]`}></i>
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      <i className={`${service.icon} text-3xl transition-transform duration-300 group-hover:scale-110`}></i>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-[#CBC1B8]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Text Content */}
                  <div className="relative flex-grow flex flex-col">
                    <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4 group-hover:text-[#CBC1B8] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#CBC1B8]/80 mb-6 leading-relaxed text-base group-hover:text-[#F7F6F4]/90 transition-colors duration-300 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Button */}
                    <Link 
                      href={service.link}
                      className="relative z-20 w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-4 px-6 rounded-xl font-bold hover:from-[#F7F6F4] hover:to-[#CBC1B8] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 whitespace-nowrap cursor-pointer"
                    >
                      <span>عرض التفاصيل</span>
                      <div className="w-5 h-5 flex items-center justify-center bg-[#0A1F21]/20 rounded-full">
                        <i className="ri-arrow-left-line text-sm"></i>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#CBC1B8]/40 transition-all duration-500 pointer-events-none"></div>
              </div>

              {/* Card Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-full flex items-center justify-center font-bold text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100 pointer-events-none">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-[#0A1F21] to-[#1C474A] rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `url('${patternUrl}')`
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
                هل تحتاج التواصل مع فريقنا؟
              </h3>
              <p className="text-xl text-[#F7F6F4]/80 mb-8 max-w-2xl mx-auto">
                تواصل معنا الآن وتحدث مع مهندسينا المتخصصين لتحويل أفكارك إلى واقع
              </p>
              <Link 
                href="/consultation"
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-5 rounded-2xl font-bold text-lg hover:from-[#F7F6F4] hover:to-[#CBC1B8] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 hover:scale-105 whitespace-nowrap overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center gap-4">
                  <span className="relative">
                    تواصل مع المهندس
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A1F21]/50 group-hover:w-full transition-all duration-500"></div>
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center bg-[#0A1F21]/20 rounded-full group-hover:bg-[#0A1F21]/30 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-phone-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
