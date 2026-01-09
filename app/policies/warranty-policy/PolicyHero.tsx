export default function PolicyHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=premium%20quality%20assurance%20certificate%20with%20shield%20symbol%20professional%20warranty%20documentation%20elegant%20office%20desk%20setup%20trust%20and%20reliability%20concept%20modern%20business%20environment%20clean%20organized%20workspace%20soft%20professional%20lighting&width=1920&height=1080&seq=warranty-policy-hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F33]/95 to-[#0A1F21]/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-[#CBC1B8] rounded-full shadow-lg animate-float">
            <i className="ri-shield-check-line text-4xl text-[#0A1F21]"></i>
          </div>
          <h1 className="font-['Cairo'] text-5xl md:text-6xl font-bold text-[#F7F6F4] mb-6 animate-fade-in-up">
            سياسة الضمان
          </h1>
          <p className="text-xl md:text-2xl text-[#CBC1B8] max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            نضمن لك جودة منتجاتنا وخدماتنا. تعرف على تفاصيل الضمان الشامل
          </p>
        </div>
      </div>
    </section>
  );
}
