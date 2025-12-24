'use client';

export default function CartHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#001F3F] via-[#003366] to-[#004080] text-white overflow-hidden min-h-[400px]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Luxury%20shopping%20cart%20experience%2C%20elegant%20modern%20interior%20design%20showroom%20with%20beautiful%20furniture%20displays%2C%20sophisticated%20retail%20space%20with%20premium%20products%2C%20professional%20photography%2C%20warm%20ambient%20lighting%2C%20high-end%20shopping%20atmosphere&width=1920&height=600&seq=cart-hero-bg&orientation=landscape)',
          opacity: 0.3
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/80 via-[#003366]/70 to-[#001F3F]/80"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
            <i className="ri-shopping-cart-line text-2xl text-[#FFA500]"></i>
            <span className="font-semibold">سلة التسوق</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            سلة التسوق الخاصة بك
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            راجع طلباتك ومشترياتك وأكمل عملية الشراء بكل سهولة
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-shield-check-line text-[#FFA500] text-lg"></i>
              <span>دفع آمن</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-truck-line text-[#FFA500] text-lg"></i>
              <span>شحن سريع</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <i className="ri-customer-service-2-line text-[#FFA500] text-lg"></i>
              <span>دعم 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
