export default function FavoritesHero() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://readdy.ai/api/search-image?query=Elegant%20luxury%20interior%20design%20workspace%20with%20favorite%20items%20collection%2C%20sophisticated%20modern%20office%20with%20curated%20design%20pieces%2C%20premium%20furniture%20showroom%2C%20warm%20ambient%20lighting%2C%20professional%20photography%2C%20high-end%20aesthetic%2C%20refined%20atmosphere&width=1920&height=600&seq=favorites-hero-bg&orientation=landscape)",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F33]/95 to-[#0A1F21]/90"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="w-24 h-24 bg-[#CBC1B8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
          <i className="ri-heart-line text-[#0A1F21] text-5xl"></i>
        </div>
        <h1 className="text-5xl font-bold text-[#F7F6F4] mb-4 animate-fade-in-up">
          المفضلة
        </h1>
        <p className="text-[#CBC1B8] text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          احفظ تصاميمك ومنتجاتك المفضلة للرجوع إليها لاحقاً
        </p>
      </div>
    </section>
  );
}
