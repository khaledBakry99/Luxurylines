"use client";
import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1C474A] via-[#0A1F21] to-[#1C474A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#CBC1B8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#F7F6F4] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#1C474A] rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-[#1C474A] to-[#0A2F33] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[#1C474A]/40 border border-[#CBC1B8]/10">
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
            <h3 className="text-3xl md:text-4xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
              هل أنت مستعد لتصميم أثاثك المثالي؟
            </h3>
            <p className="text-xl text-[#CBC1B8]/90 mb-8 max-w-2xl mx-auto">
              دعنا نساعدك في تصنيع أثاث مخصص يناسب احتياجاتك ومساحتك بالضبط
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/expert-tips"
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-5 rounded-2xl text-lg font-bold hover:from-[#F7F6F4] hover:to-[#CBC1B8] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 hover:scale-105 whitespace-nowrap overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center gap-4">
                  <i className="ri-lightbulb-line text-xl group-hover:rotate-[360deg] transition-transform duration-700"></i>
                  <span className="relative">
                    نصائح من الخبراء
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A1F21]/50 group-hover:w-full transition-all duration-500"></div>
                  </span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-4 bg-[#0A1F21] border-2 border-[#CBC1B8] text-[#CBC1B8] px-10 py-5 rounded-2xl text-lg font-bold hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 hover:scale-105 whitespace-nowrap overflow-hidden"
              >
                <div className="relative flex items-center gap-4">
                  <i className="ri-phone-line text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                  <span>تواصل معنا</span>
                </div>
              </Link>
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
