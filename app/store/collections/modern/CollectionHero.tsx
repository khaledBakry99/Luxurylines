export default function CollectionHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20minimalist%20interior%20design%20showcase%20with%20sleek%20furniture%20clean%20lines%20contemporary%20decor%20neutral%20colors%20sophisticated%20ambiance%20professional%20architectural%20photography&width=1920&height=1080&seq=modern-hero&orientation=landscape')" 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/80 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-6 py-3 bg-[#FFA500]/20 backdrop-blur-sm rounded-full mb-6">
            <i className="ri-building-line text-[#FFA500] text-lg ml-2"></i>
            <span className="text-[#FFA500] font-semibold">مجموعة عصرية</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            التصميم العصري
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            أثاث عصري بخطوط نظيفة وتصاميم مبتكرة، يجمع بين البساطة والأناقة مع لمسات عصرية تناسب الأذواق الحديثة
          </p>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-checkbox-circle-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">95 منتج متاح</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-lightbulb-flash-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">تصاميم مبتكرة</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-star-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">جودة عالية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
