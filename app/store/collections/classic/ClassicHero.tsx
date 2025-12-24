export default function ClassicHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://readdy.ai/api/search-image?query=classic%20luxury%20interior%20design%20showcase%20with%20ornate%20furniture%20rich%20wood%20finishes%20elegant%20traditional%20decor%20crystal%20chandelier%20sophisticated%20ambiance%20professional%20architectural%20photography&width=1920&height=1080&seq=classic-hero&orientation=landscape')" 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/80 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-6 py-3 bg-[#FFA500]/20 backdrop-blur-sm rounded-full mb-6">
            <i className="ri-ancient-pavilion-line text-[#FFA500] text-lg ml-2"></i>
            <span className="text-[#FFA500] font-semibold">مجموعة فاخرة</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            التصميم الكلاسيكي
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            أثاث فاخر بلمسات تقليدية أصيلة، تفاصيل منحوتة بعناية وخامات فاخرة تعكس الأناقة الخالدة والفخامة العريقة
          </p>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-checkbox-circle-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">95 منتج متاح</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-vip-crown-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">تصاميم فاخرة</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-hand-heart-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">صناعة يدوية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
