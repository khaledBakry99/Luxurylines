"use client";

import { useState, useEffect, useRef } from "react";

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      position: "المدير التنفيذي ومؤسس الشركة",
      specialization: "التصميم المعماري والتخطيط الحضري",
      experience: "15+ سنة خبرة",
      icon: "ri-user-3-line",
    },
    {
      position: "مديرة التصميم الداخلي",
      specialization: "التصميم الداخلي الفاخر والديكور المعاصر",
      experience: "12+ سنة خبرة",
      icon: "ri-user-3-line",
    },
    {
      position: "مدير المشاريع والتنفيذ",
      specialization: "إدارة المشاريع الكبيرة والتشطيبات المتقدمة",
      experience: "10+ سنة خبرة",
      icon: "ri-user-line",
    },
    {
      position: "مديرة الابتكار والتقنية",
      specialization: "التقنيات الذكية والحلول المستدامة",
      experience: "8+ سنة خبرة",
      icon: "ri-user-3-line",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#1C474A] to-[#0A2F33] relative overflow-hidden"
    >
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="teamGradient">
              <stop offset="0%" stopColor="#CBC1B8" />
              <stop offset="100%" stopColor="#F7F6F4" />
            </radialGradient>
          </defs>
          <circle
            cx="20"
            cy="30"
            r="15"
            fill="url(#teamGradient)"
            opacity="0.3"
          />
          <circle
            cx="80"
            cy="70"
            r="20"
            fill="url(#teamGradient)"
            opacity="0.2"
          />
          <circle
            cx="60"
            cy="20"
            r="10"
            fill="url(#teamGradient)"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Cairo']">
            فريق القيادة
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            تعرف على الخبراء الذين يقودون رؤيتنا ويحولون أحلامكم إلى واقع معماري
            فاخر
          </p>
        </div>

        {/* أعضاء الفريق */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-[#CBC1B8]/50 relative overflow-hidden shadow-card-glow hover:shadow-card-glow-hover">
                {/* تأثير الخلفية */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CBC1B8]/5 to-[#F7F6F4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* الصورة */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-[#CBC1B8] transition-all duration-500 group-hover:scale-105 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] flex items-center justify-center">
                      <i
                        className={`${member.icon} text-6xl text-[#0A1F21]`}
                      ></i>
                    </div>

                    {/* شارة الخبرة */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {member.experience}
                    </div>
                  </div>

                  {/* المعلومات */}
                  <div className="text-center">
                    <p className="text-[#CBC1B8] font-medium mb-3 text-sm">
                      {member.position}
                    </p>

                    <p className="text-white/70 text-sm leading-relaxed">
                      {member.specialization}
                    </p>
                  </div>

                  {/* الشبكات الاجتماعية */}
                  <div className="flex justify-center space-x-3 space-x-reverse mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[
                      "ri-linkedin-fill",
                      "ri-twitter-fill",
                      "ri-mail-line",
                    ].map((icon, iconIndex) => (
                      <button
                        key={iconIndex}
                        className="w-8 h-8 bg-[#CBC1B8] text-[#0A1F21] rounded-full flex items-center justify-center hover:bg-[#F7F6F4] transition-all duration-300 cursor-pointer shadow-lg"
                      >
                        <i className={`${icon} text-sm`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* إحصائيات الفريق */}
        <div
          className={`relative bg-gradient-to-r from-[#1C474A] to-[#0F3A3E] rounded-3xl p-8 md:p-12 text-white transition-all duration-1000 border border-[#CBC1B8]/20 overflow-hidden shadow-[0_0_40px_rgba(28,71,74,0.4)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          {/* نقاط متحركة في الخلفية */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-[#CBC1B8] rounded-full"
                style={{
                  width: Math.random() * 6 + 2 + "px",
                  height: Math.random() * 6 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animation: `float ${
                    Math.random() * 3 + 2
                  }s ease-in-out infinite`,
                  animationDelay: Math.random() * 2 + "s",
                  opacity: 0.1,
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-['Cairo']">
                فريق متكامل من الخبراء
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                يضم فريقنا نخبة من المهندسين والمصممين المتخصصين في مختلف مجالات
                العمارة والتصميم
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "مهندس ومصمم" },
                { number: "25+", label: "مهندس معماري" },
                { number: "15+", label: "مصمم داخلي" },
                { number: "10+", label: "مدير مشاريع" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#CBC1B8] mb-2 font-['Cairo']">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}
