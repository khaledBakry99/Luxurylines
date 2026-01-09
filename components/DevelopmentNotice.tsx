"use client";

import { useState, useEffect } from "react";

export default function DevelopmentNotice() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show the notice after a brief delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Auto-hide after 8 seconds
    const hideTimer = setTimeout(() => {
      handleClose();
    }, 8800);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* خلفية شفافة تغطي كامل الشاشة */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-all duration-500 cursor-pointer ${
          isClosing ? "backdrop-closing" : "opacity-100"
        }`}
        onClick={handleClose}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Escape") handleClose();
        }}
      ></div>

      {/* الكارد في المنتصف */}
      <div
        className={`fixed inset-0 z-[9999] flex justify-center items-center px-4 pointer-events-none transition-all duration-500 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`relative max-w-3xl w-full bg-gradient-to-br from-[#0A2F33] via-[#1C474A] to-[#0A1F21] rounded-3xl shadow-2xl overflow-visible pointer-events-auto transform transition-all duration-700 ${
            isClosing ? "modal-closing" : "scale-100"
          }`}
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(203, 193, 184, 0.1)",
          }}
        >
          {/* خلفية متحركة */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {/* دوائر متحركة */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CBC1B8]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F7F6F4]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* نقاط متحركة */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-[#CBC1B8]/20 rounded-full animate-float pointer-events-none"
                style={{
                  width: Math.random() * 4 + 2 + "px",
                  height: Math.random() * 4 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 3 + "s",
                  animationDuration: Math.random() * 3 + 3 + "s",
                }}
              ></div>
            ))}
          </div>

          {/* زر الإغلاق - تصميم احترافي */}
          <button
            onClick={handleClose}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClose();
              }
            }}
            type="button"
            className="absolute top-6 left-6 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-red-500 backdrop-blur-md rounded-lg transition-all duration-300 group border border-white/20 hover:border-red-600 shadow-lg hover:shadow-red-500/40 cursor-pointer pointer-events-auto close-button-professional"
            aria-label="إغلاق الإشعار"
            title="اضغط لإغلاق (أو اضغط Escape)"
          >
            <i className="ri-close-line text-2xl text-white group-hover:text-white transition-all duration-300"></i>
          </button>

          {/* المحتوى */}
          <div className="relative z-10 p-8 md:p-12 pointer-events-auto">
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#F7F6F4] mb-3 font-['Cairo'] animate-fade-in-up">
                  الموقع قيد التطوير
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] rounded-full mx-auto animate-expand"></div>
              </div>

              <p className="text-[#CBC1B8] text-xl md:text-2xl leading-relaxed mb-8 animate-fade-in-up delay-200 max-w-2xl mx-auto">
                هذه النسخة الأولية من الموقع. نعمل بجد لتقديم أفضل تجربة لك!
              </p>

              <div className="bg-white/5 backdrop-blur-sm border border-[#CBC1B8]/20 rounded-2xl p-5 mb-8 animate-fade-in-up delay-300 max-w-2xl mx-auto">
                <p className="text-[#F7F6F4]/90 text-lg leading-relaxed flex items-start justify-center gap-3">
                  <i className="ri-information-line text-[#CBC1B8] text-2xl mt-0.5 flex-shrink-0"></i>
                  <span>
                    إذا واجهت أي مشاكل أو لديك نصائح لتحسين الموقع، نسعد بتواصلك
                    معنا عبر واتساب
                  </span>
                </p>
              </div>

              {/* زر واتساب */}
              <a
                href="https://wa.me/966559300791?text=مرحباً، لدي ملاحظة حول الموقع"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 overflow-hidden animate-fade-in-up delay-400 hover:scale-105 cursor-pointer"
              >
                {/* المحتوى */}
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-whatsapp-fill text-2xl"></i>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">
                      تواصل معنا على واتساب
                    </div>
                    <div className="text-base opacity-90" dir="ltr">
                      +966 55 930 0791
                    </div>
                  </div>
                  <i className="ri-arrow-left-line text-2xl group-hover:-translate-x-1 transition-transform duration-300"></i>
                </div>

                {/* توهج */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
              </a>

              {/* شريط التقدم */}
              <div className="mt-8 relative">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#CBC1B8] via-[#F7F6F4] to-[#CBC1B8] rounded-full animate-progress"
                    style={{
                      animation: "progress 8s linear forwards",
                    }}
                  ></div>
                </div>
                <p className="text-sm text-[#CBC1B8]/70 text-center mt-3">
                  سيتم إخفاء هذه الرسالة تلقائياً
                </p>
              </div>
            </div>
          </div>

          {/* حواف متوهجة */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CBC1B8] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CBC1B8] to-transparent"></div>
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

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 8s linear forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-fade-in-up.delay-300 {
          animation-delay: 0.3s;
        }

        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }

        .animate-expand {
          animation: expand 0.8s ease-out forwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}
