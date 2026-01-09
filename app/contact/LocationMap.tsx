"use client";

import { useState, useEffect } from "react";

export default function LocationMap() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const locations = [
    {
      name: "المكتب الرئيسي - الرياض",
      address:
        "شارع انس بن مالك - مبنى امازون - الدور الثاني - مكتب رقم ١٥ - حي الصحافه - الرياض - المملكه العربيه السعوديه",
      phone: "‎+966 55 930 0791",
      email: "Luxlins@gmail.com",
      hours: "السبت - الخميس: 9:00 ص - 6:00 م",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2ssa!4v1234567890",
    },
  ];

  const [activeLocation, setActiveLocation] = useState(0);

  // SVG pattern data - extracted for better maintainability and encoding
  const backgroundPattern =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDFGM0YiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTYzIDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBsOCA2IDgtNnY0bC04IDYtOC02eiIvPjwvZz48L2c+PC9zdmc+";

  return (
    <section className="py-20 bg-gradient-to-br from-[#1C474A] to-[#0A2F33] relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('${backgroundPattern}')`,
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Cairo']">
            مواقعنا
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            زرنا في أحد مكاتبنا أو احجز موعداً لزيارة ميدانية مجانية
          </p>
        </div>

        {/* تبويبات المواقع */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
                  activeLocation === index
                    ? "bg-[#CBC1B8] text-[#0A1F21] shadow-lg transform scale-105"
                    : "bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-[#CBC1B8]/50"
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>

        {/* محتوى الموقع النشط */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* معلومات الموقع */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 shadow-card-glow">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Cairo']">
                  {locations[activeLocation]?.name || ""}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className="ri-map-pin-fill text-xl text-[#0A1F21]"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 font-['Cairo']">
                        العنوان
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {locations[activeLocation]?.address || ""}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className="ri-phone-fill text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 font-['Cairo']">
                        الهاتف
                      </h4>
                      <a
                        href={`tel:${
                          locations[activeLocation]?.phone.replace(/\s/g, "") ||
                          ""
                        }`}
                        className="text-[#CBC1B8] hover:text-[#F7F6F4] font-semibold transition-colors duration-300"
                        dir="ltr"
                      >
                        {locations[activeLocation]?.phone || ""}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className="ri-mail-fill text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 font-['Cairo']">
                        البريد الإلكتروني
                      </h4>
                      <a
                        href={`mailto:${
                          locations[activeLocation]?.email || ""
                        }`}
                        className="text-[#CBC1B8] hover:text-[#F7F6F4] font-semibold transition-colors duration-300"
                        dir="ltr"
                      >
                        {locations[activeLocation]?.email || ""}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <i className="ri-time-fill text-xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 font-['Cairo']">
                        ساعات العمل
                      </h4>
                      <p className="text-white/70">
                        {locations[activeLocation]?.hours || ""}
                      </p>
                    </div>
                  </div>
                </div>

                {/* أزرار التواصل السريع */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={`tel:${locations[activeLocation]?.phone || ""}`}
                    className="group relative flex-1 bg-[#CBC1B8] hover:bg-[#F7F6F4] text-[#0A1F21] px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/15 text-center whitespace-nowrap overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2 space-x-reverse">
                      <i className="ri-phone-fill ml-2 group-hover:animate-pulse"></i>
                      <span>اتصل الآن</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1F21]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                  <a
                    href={`https://wa.me/${(
                      locations[activeLocation]?.phone || ""
                    )
                      .replace(/\s+/g, "")
                      .replace("+", "")}`}
                    className="group relative flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/15 text-center whitespace-nowrap overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2 space-x-reverse">
                      <i className="ri-whatsapp-fill ml-2 group-hover:animate-pulse"></i>
                      <span>واتساب</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* الخريطة */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-2 shadow-xl border border-gray-100 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.8!2d46.6412269!3d24.7988553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4d5d5d5d5d5d:0x0!2zMjTCsDQ3JzU2LjAiTiA0NsKwMzgnMjguNCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>

              {/* زر الاتجاهات */}
              <div className="text-center">
                <a
                  href={`https://www.google.com/maps/dir//${encodeURIComponent(
                    locations[activeLocation]?.address || ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-[#CBC1B8] hover:bg-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/15 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <i className="ri-navigation-fill text-xl group-hover:animate-pulse"></i>
                    <span>احصل على الاتجاهات</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1F21]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* قسم حجز الموعد */}
        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-[#1C474A] to-[#0A2F33] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[#1C474A]/40 border border-[#CBC1B8]/10 mt-16">
            {/* النقاط المتحركة */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: Math.random() * 6 + 2 + "px",
                    height: Math.random() * 6 + 2 + "px",
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                    animation: `float ${
                      Math.random() * 3 + 2
                    }s ease-in-out infinite`,
                    animationDelay: Math.random() * 2 + "s",
                  }}
                ></div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
                احجز موعداً لزيارتنا
              </h3>
              <p className="text-[#CBC1B8]/90 mb-6 max-w-2xl mx-auto leading-relaxed">
                احجز موعداً مسبقاً لضمان توفر الوقت المناسب لك ولتلقي خدمة شخصية
                مميزة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap overflow-hidden">
                  <span className="relative z-10 flex items-center gap-4">
                    <i className="ri-calendar-fill text-xl group-hover:animate-pulse"></i>
                    <span>احجز موعداً</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1F21]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                <button className="group relative inline-flex items-center gap-4 bg-transparent border-2 border-[#CBC1B8]/50 text-[#CBC1B8] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#CBC1B8]/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap overflow-hidden">
                  <span className="relative z-10 flex items-center gap-4">
                    <i className="ri-phone-fill text-xl group-hover:animate-pulse"></i>
                    <span>اتصل لحجز موعد</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
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
      </div>
    </section>
  );
}
