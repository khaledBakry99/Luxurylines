"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    icon: "ri-user-3-line",
    role: "صاحب فيلا",
    content:
      "تجربة رائعة مع فريق Luxurylin، تم تنفيذ المشروع بأعلى معايير الجودة وفي الوقت المحدد. النتيجة فاقت توقعاتي بكثير.",
    rating: 5,
  },
  {
    id: 2,
    icon: "ri-palette-line",
    role: "مصممة داخلية",
    content:
      "التعامل مع Luxurylin كان مميزاً جداً، فهم احترافي للتفاصيل وتنفيذ دقيق لكل التصاميم. أنصح بهم بشدة لأي مشروع تصميم.",
    rating: 5,
  },
  {
    id: 3,
    icon: "ri-user-line",
    role: "مدير مشروع",
    content:
      "أداة مصمم الديكور الذكي غيرت تماماً طريقة تعاملنا مع العملاء. الآن يمكن للعميل رؤية التصميم مسبقاً واتخاذ قرارات مدروسة.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("testimonials-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={`ri-star-${
          index < rating ? "fill" : "line"
        } text-[#CBC1B8] text-lg transition-all duration-300 hover:scale-110`}
      ></i>
    ));
  };

  return (
    <section
      id="testimonials-section"
      className="py-24 bg-gradient-to-br from-[#1C474A] via-[#0A1F21] to-[#1C474A] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-[#CBC1B8]/15 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-chat-quote-line text-[#CBC1B8] text-xl"></i>
            </div>
            <span className="text-[#F7F6F4]/85 font-medium">آراء عملائنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6 leading-tight">
            شهادات عملائنا
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto leading-relaxed">
            اكتشف ما يقوله عملاؤنا عن تجربتهم معنا وجودة خدماتنا المتميزة
          </p>
        </div>

        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-gradient-to-br from-[#F7F6F4] to-[#CBC1B8]/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-[#CBC1B8]/30 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-shrink-0 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative w-32 h-32 rounded-full object-cover object-top border-4 border-[#CBC1B8] shadow-xl transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] flex items-center justify-center">
                    <i
                      className={`${testimonials[currentTestimonial].icon} text-6xl text-[#0A1F21]`}
                    ></i>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#CBC1B8] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-double-quotes-r text-[#0A1F21] text-sm"></i>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-right">
                  <div className="flex justify-center lg:justify-end mb-6 gap-1">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <p className="text-xl md:text-2xl text-[#0A1F21]/85 mb-8 leading-relaxed font-medium italic relative">
                    <span className="text-[#1C474A] text-4xl absolute -top-4 -right-2">
                      "
                    </span>
                    {testimonials[currentTestimonial].content}
                    <span className="text-[#1C474A] text-4xl absolute -bottom-6 -left-2">
                      "
                    </span>
                  </p>
                  <div className="border-t border-[#1C474A]/20 pt-6">
                    <p className="text-[#1C474A]/70 text-lg font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <button
                onClick={prevTestimonial}
                className="group w-14 h-14 flex items-center justify-center bg-[#CBC1B8]/20 backdrop-blur-sm text-[#F7F6F4] rounded-full hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 cursor-pointer border border-[#CBC1B8]/30 hover:border-[#CBC1B8] hover:scale-110"
              >
                <i className="ri-arrow-right-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`transition-all duration-300 cursor-pointer hover:scale-125 ${
                      currentTestimonial === index
                        ? "w-12 h-4 bg-[#CBC1B8] rounded-full"
                        : "w-4 h-4 bg-[#F7F6F4]/40 rounded-full hover:bg-[#F7F6F4]/60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="group w-14 h-14 flex items-center justify-center bg-[#CBC1B8]/20 backdrop-blur-sm text-[#F7F6F4] rounded-full hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 cursor-pointer border border-[#CBC1B8]/30 hover:border-[#CBC1B8] hover:scale-110"
              >
                <i className="ri-arrow-left-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
              </button>
            </div>
          </div>

          {/* Additional Stats */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-[#CBC1B8] rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-user-heart-line text-[#0A1F21] text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#F7F6F4] mb-2">500+</h3>
              <p className="text-[#CBC1B8]/90">عميل راضٍ</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-[#CBC1B8] rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-building-line text-[#0A1F21] text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#F7F6F4] mb-2">200+</h3>
              <p className="text-[#CBC1B8]/90">مشروع مكتمل</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 flex items-center justify-center bg-[#CBC1B8] rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="ri-star-fill text-[#0A1F21] text-2xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-[#F7F6F4] mb-2">4.9</h3>
              <p className="text-[#CBC1B8]/90">تقييم العملاء</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
