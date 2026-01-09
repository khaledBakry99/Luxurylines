export default function PolicyHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20modern%20retail%20store%20interior%20with%20beautiful%20product%20displays%20and%20customer%20service%20counter%20professional%20lighting%20clean%20organized%20space%20luxury%20shopping%20experience%20warm%20welcoming%20atmosphere%20contemporary%20design%20soft%20natural%20colors&width=1920&height=1080&seq=return-policy-hero-bg&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F33]/95 to-[#0A1F21]/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-[#CBC1B8] rounded-full shadow-lg animate-float">
            <i className="ri-arrow-left-right-line text-4xl text-[#0A1F21]"></i>
          </div>
          <h1 className="font-['Cairo'] text-5xl md:text-6xl font-bold text-[#F7F6F4] mb-6 animate-fade-in-up">
            سياسة الاستبدال والإسترجاع
          </h1>
          <p className="text-xl md:text-2xl text-[#CBC1B8] max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            نحن نهتم برضاك التام. تعرف على سياسة الاستبدال والإسترجاع الخاصة بنا
          </p>
        </div>
      </div>
    </section>
  );
}
