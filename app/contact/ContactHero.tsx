"use client";

import { useState, useEffect } from "react";

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#0A1F21] overflow-hidden flex items-center justify-center">
      {/* خلفية احترافية متطورة */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20office%20reception%20area%20with%20elegant%20furniture%20and%20sophisticated%20lighting%2C%20customer%20service%20center%20with%20clean%20minimalist%20design%2C%20corporate%20communication%20space%20with%20warm%20welcoming%20atmosphere%2C%20bright%20and%20inviting%20interior&width=1920&height=1080&seq=contact-hero-bg-v2&orientation=landscape')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/95 via-[#0F3A3E]/90 to-[#1C474A]/95"></div>

        {/* تأثيرات بصرية متحركة */}
        <div className="absolute inset-0 overflow-hidden">
          {/* دوائر متحركة */}
          <div className="absolute top-20 left-20 w-64 h-64 border border-[#CBC1B8]/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#CBC1B8]/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-[#CBC1B8]/30 rounded-full animate-bounce-slow"></div>

          {/* أشكال هندسية */}
          <div className="absolute top-32 right-32 w-20 h-20 bg-[#CBC1B8]/20 rotate-45 animate-float"></div>
          <div className="absolute bottom-40 left-40 w-16 h-16 border-2 border-[#CBC1B8]/40 rotate-45 animate-spin"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-[#CBC1B8]/30 rounded-full animate-ping"></div>

          {/* خطوط ديناميكية */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#CBC1B8]/25 to-transparent animate-pulse"></div>
          <div
            className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#CBC1B8]/20 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* شبكة متحركة */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, #CBC1B8 2px, transparent 2px),
                radial-gradient(circle at 80% 70%, #CBC1B8 1px, transparent 1px)
              `,
              backgroundSize: "120px 120px",
              animation: "float 10s ease-in-out infinite",
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* العنوان الرئيسي */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 font-['Cairo'] leading-tight">
              <span className="block mb-4">تواصل معنا</span>
              <span className="block text-[#CBC1B8]">اليوم</span>
              <span className="block text-white/90 text-3xl md:text-4xl mt-6">
                ولنبدأ رحلة الإبداع
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              نحن هنا لتحويل أحلامك إلى واقع معماري استثنائي. تواصل معنا اليوم
              واحصل على نصائح مجانية من فريق الخبراء لمشروعك القادم وابدأ رحلة
              التميز معنا
            </p>
          </div>

          {/* طرق التواصل السريع - تصميم جديد */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {[
              {
                icon: "ri-phone-line",
                title: "اتصل بنا مباشرة",
                desc: "‎+966 55 930 0791",
                action: "tel:+966559300791",
              },
              {
                icon: "ri-whatsapp-line",
                title: "واتساب",
                desc: "رد فوري على استفساراتك",
                action: "https://wa.me/966559300791",
              },
              {
                icon: "ri-mail-line",
                title: "البريد الإلكتروني",
                desc: "Luxlins@gmail.com",
                action: "mailto:Luxlins@gmail.com",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                className={`group relative bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 hover:border-[#FFA500]/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 cursor-pointer overflow-hidden ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150 + 800}ms` }}
              >
                {/* خلفية متدرجة متحركة */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CBC1B8]/0 via-[#CBC1B8]/5 to-[#CBC1B8]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* دائرة ديكورية */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#CBC1B8]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10 text-center">
                  {/* الأيقونة */}
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8]/20 to-[#F7F6F4]/20 rounded-2xl border border-[#CBC1B8]/30 group-hover:border-[#CBC1B8]/60 group-hover:shadow-lg group-hover:shadow-[#CBC1B8]/30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <i
                      className={`${contact.icon} text-4xl text-[#CBC1B8] group-hover:scale-110 transition-transform duration-300`}
                    ></i>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#CBC1B8] transition-colors duration-300">
                    {contact.title}
                  </h3>

                  <p
                    className="text-white/70 text-lg group-hover:text-white/90 transition-colors duration-300"
                    dir={
                      contact.desc.includes("+966") ||
                      contact.desc.includes("@")
                        ? "ltr"
                        : "rtl"
                    }
                  >
                    {contact.desc}
                  </p>
                </div>

                {/* خط علوي متوهج */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CBC1B8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* نقاط ديكورية */}
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#CBC1B8]/40 rounded-full group-hover:animate-ping"></div>
                <div
                  className="absolute top-4 right-4 w-2 h-2 bg-[#CBC1B8]/40 rounded-full group-hover:animate-ping"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </a>
            ))}
          </div>

          {/* أزرار التواصل السريع */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="tel:+966559300791"
              className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-12 py-5 rounded-full text-lg font-bold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center space-x-3 space-x-reverse">
                <i className="ri-phone-fill text-xl group-hover:animate-pulse"></i>
                <span>اتصل بنا الآن</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>

            <a
              href="https://wa.me/966559300791"
              className="group relative border-2 border-[#CBC1B8] text-[#CBC1B8] px-12 py-5 rounded-full text-lg font-bold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center space-x-3 space-x-reverse">
                <i className="ri-whatsapp-fill text-xl group-hover:animate-pulse"></i>
                <span>واتساب</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
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

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-20px) rotate(45deg);
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
          animation: gradient 4s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
