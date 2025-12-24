export default function MinimalistHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://readdy.ai/api/search-image?query=minimalist%20scandinavian%20interior%20design%20showcase%20with%20simple%20clean%20lines%20neutral%20colors%20natural%20materials%20functional%20furniture%20serene%20peaceful%20ambiance%20professional%20architectural%20photography&width=1920&height=1080&seq=minimalist-hero&orientation=landscape')" 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/80 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-6 py-3 bg-[#FFA500]/20 backdrop-blur-sm rounded-full mb-6">
            <i className="ri-layout-line text-[#FFA500] text-lg ml-2"></i>
            <span className="text-[#FFA500] font-semibold">مجموعة بسيطة</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            التصميم البسيط
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            بساطة وأناقة في كل قطعة، تصاميم وظيفية بألوان محايدة ومواد طبيعية تخلق مساحات هادئة ومريحة
          </p>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-checkbox-circle-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">110 منتج متاح</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-leaf-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">مواد طبيعية</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
              <i className="ri-focus-3-line text-[#FFA500] text-2xl"></i>
              <span className="text-white font-semibold">تصاميم وظيفية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
