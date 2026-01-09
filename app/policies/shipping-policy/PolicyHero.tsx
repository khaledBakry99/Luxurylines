export default function PolicyHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=professional%20delivery%20truck%20on%20modern%20city%20street%20fast%20shipping%20service%20logistics%20and%20transportation%20concept%20clean%20organized%20warehouse%20with%20packages%20efficient%20delivery%20system%20contemporary%20urban%20environment%20reliable%20service&width=1920&height=1080&seq=shipping-policy-hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F33]/95 to-[#0A1F21]/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-[#CBC1B8] rounded-full shadow-lg animate-float">
            <i className="ri-truck-line text-4xl text-[#0A1F21]"></i>
          </div>
          <h1 className="font-['Cairo'] text-5xl md:text-6xl font-bold text-[#F7F6F4] mb-6 animate-fade-in-up">
            سياسة التوصيل والشحن
          </h1>
          <p className="text-xl md:text-2xl text-[#CBC1B8] max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            نوصل منتجاتنا إلى باب منزلك بكل عناية واحترافية
          </p>
        </div>
      </div>
    </section>
  );
}
