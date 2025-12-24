'use client';

const features = [
  {
    icon: 'ri-truck-line',
    title: 'توصيل سريع ومجاني',
    description: 'توصيل مجاني لجميع الطلبات فوق 5000 ريال خلال 24-48 ساعة',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'ضمان الجودة',
    description: 'جميع منتجاتنا أصلية 100% مع ضمان شامل لمدة عامين',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'دعم على مدار الساعة',
    description: 'فريق خدمة العملاء جاهز لمساعدتك في أي وقت',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: 'ri-arrow-go-back-line',
    title: 'إرجاع مجاني',
    description: 'سياسة إرجاع مرنة خلال 30 يوم بدون أي رسوم إضافية',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: 'ri-secure-payment-line',
    title: 'دفع آمن',
    description: 'طرق دفع متعددة وآمنة بحماية كاملة لبياناتك',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: 'ri-gift-line',
    title: 'عروض حصرية',
    description: 'خصومات وعروض خاصة للعملاء المميزين والمشتركين',
    color: 'from-pink-500 to-pink-600'
  }
];

export default function StoreFeatures() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0A2F33] to-[#0A1F21] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #CBC1B8 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#CBC1B8]/10 rounded-full border border-[#CBC1B8]/20">
            <span className="text-[#CBC1B8] font-semibold text-sm">لماذا تختارنا</span>
          </div>
          <h2 className="font-['Cairo'] text-4xl md:text-5xl font-bold text-white mb-4">
            مميزات التسوق معنا
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            نوفر لك تجربة تسوق استثنائية مع أفضل الخدمات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 transition-all duration-700 border border-white/20 hover:border-[#CBC1B8]/50 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#CBC1B8]/0 via-[#CBC1B8]/0 to-[#CBC1B8]/0 group-hover:from-[#CBC1B8]/5 group-hover:via-[#CBC1B8]/10 group-hover:to-[#CBC1B8]/5 transition-all duration-700"></div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#CBC1B8]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#CBC1B8]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>

              <div className={`relative w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-2xl`}>
                <i className={`${feature.icon} text-4xl text-white transition-transform duration-700 group-hover:scale-110`}></i>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              <h3 className="relative font-['Cairo'] text-2xl font-bold text-white mb-3 group-hover:text-[#CBC1B8] transition-all duration-500 group-hover:translate-x-1">
                {feature.title}
              </h3>

              <p className="relative text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] group-hover:w-full transition-all duration-700 shadow-[0_0_10px_rgba(203,193,184,0.5)]"></div>
              
              <div className="absolute inset-0 border-2 border-[#CBC1B8]/0 rounded-3xl group-hover:border-[#CBC1B8]/20 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#1C474A] to-[#0F3A3E] rounded-3xl p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 6 + 2 + 'px',
                  height: Math.random() * 6 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                  animationDelay: Math.random() * 2 + 's'
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10">
            <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-[#CBC1B8] font-semibold text-sm">عرض خاص</span>
            </div>

            <h3 className="font-['Cairo'] text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في نشرتنا البريدية
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              احصل على خصم 10% على أول طلب واطلع على أحدث العروض والمنتجات
            </p>

            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#CBC1B8] transition-colors duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#CBC1B8]/50 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
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
