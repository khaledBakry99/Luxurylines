"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* خلفية احترافية متطورة */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20interior%20design%20tools%20and%20materials%20showcase%20with%20architectural%20blueprints%2C%20color%20palettes%2C%20fabric%20samples%2C%20modern%20furniture%20pieces%2C%20elegant%20lighting%20fixtures%2C%20sophisticated%20workspace%20environment&width=1920&height=1080&seq=services-hero-bg&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90"></div>

        {/* تأثيرات هندسية متحركة */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 right-20 w-40 h-40 border-2 border-[#CBC1B8]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-32 w-32 h-32 bg-[#CBC1B8]/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-[#CBC1B8]/30 rounded-lg animate-bounce"></div>
          <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-[#CBC1B8]/20 rounded-full animate-ping"></div>
        </div>

        {/* شبكة متحركة */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid-services"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 4 0 L 0 0 0 4"
                  fill="none"
                  stroke="#CBC1B8"
                  strokeWidth="0.2"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid-services)"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* شارة مميزة */}
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/20 backdrop-blur-sm border border-[#CBC1B8]/30 rounded-full mb-8 animate-fade-in">
            <i className="ri-service-line text-[#CBC1B8] text-lg ml-2 animate-pulse"></i>
            <span className="text-[#CBC1B8] font-semibold">
              خدماتنا المتميزة
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Cairo'] font-bold mb-8 leading-tight">
            <span className="block text-white">خدماتنا الشاملة</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            نقدم مجموعة شاملة من الخدمات المتخصصة في التصميم والتشطيب وتوريد
            الأساس، مع فريق من الخبراء المبدعين لتحويل مساحاتك إلى تحف فنية تعكس
            شخصيتك وأسلوب حياتك
          </p>

          {/* الخدمات الأربعة الرئيسية */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "تصميم داخلي",
                icon: "ri-home-4-line",
                color: "from-[#0A1F21] to-[#1C474A]",
              },
              {
                name: "تصميم خارجي",
                icon: "ri-building-line",
                color: "from-[#0F3A3E] to-[#0A2F33]",
              },
              {
                name: "تشطيب",
                icon: "ri-paint-brush-line",
                color: "from-[#1C474A] to-[#0A1F21]",
              },
              {
                name: "توريد مواد البناء",
                icon: "ri-truck-line",
                color: "from-[#0A2F33] to-[#1C474A]",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${service.color} rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg`}
                >
                  <i
                    className={`${service.icon} text-2xl text-white group-hover:animate-bounce`}
                  ></i>
                </div>
                <div className="text-lg font-semibold text-white mb-2 font-['Cairo'] group-hover:text-[#CBC1B8] transition-colors duration-300">
                  {service.name}
                </div>
              </div>
            ))}
          </div>

          {/* نصائح وإرشادات */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/10">
            <h3 className="text-2xl font-bold text-[#CBC1B8] mb-4 font-['Cairo']">
              💡 نصائح من خبرائنا
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80">
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-lightbulb-line text-[#CBC1B8]"></i>
                <span>اختر الألوان التي تعكس شخصيتك</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-ruler-line text-[#CBC1B8]"></i>
                <span>استغل المساحات بذكاء وإبداع</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-plant-line text-[#CBC1B8]"></i>
                <span>أضف لمسات طبيعية لحيوية أكثر</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-sun-line text-[#CBC1B8]"></i>
                <span>اهتم بالإضاءة الطبيعية والصناعية</span>
              </div>
            </div>
          </div>

          {/* أزرار الإجراءات المحسنة */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/services/all-services">
              <button className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap">
                <span className="relative z-10 flex items-center space-x-3 space-x-reverse">
                  <i className="ri-eye-line text-xl group-hover:rotate-[360deg] transition-transform duration-700"></i>
                  <span>استعرض جميع خدماتنا</span>
                  <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </Link>

            <Link href="/services/expert-tips">
              <button className="group relative bg-[#0A1F21] border-2 border-[#CBC1B8] text-[#CBC1B8] px-10 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap">
                <span className="relative z-10 flex items-center space-x-3 space-x-reverse group-hover:text-[#0A1F21] transition-colors duration-300">
                  <i className="ri-customer-service-line text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                  <span>نصائح من خبرائنا</span>
                  <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-top-left"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-bottom-right"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
