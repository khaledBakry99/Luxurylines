export default function OrdersHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://readdy.ai/api/search-image?query=Luxury%20interior%20design%20workspace%20with%20elegant%20furniture%2C%20modern%20Arabic%20style%20office%20with%20beautiful%20wooden%20desk%20and%20comfortable%20chairs%2C%20sophisticated%20business%20environment%20with%20warm%20lighting%2C%20professional%20architectural%20photography%20showing%20organized%20luxury%20space%20with%20decorative%20elements%20and%20plants%2C%20high-end%20commercial%20interior%20design&width=1920&height=500&seq=orders-hero-bg-1&orientation=landscape)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F33]/95 to-[#0A1F21]/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center py-20">
        <div className="w-24 h-24 bg-[#CBC1B8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
          <i className="ri-shopping-bag-line text-[#0A1F21] text-5xl"></i>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#F7F6F4] mb-4 animate-fade-in-up">
          طلباتي
        </h1>
        <p className="text-[#CBC1B8] text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          تتبع جميع طلباتك ومشاريعك في مكان واحد
        </p>
      </div>
    </section>
  );
}
