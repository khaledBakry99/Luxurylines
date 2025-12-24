export default function PolicyHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=premium%20quality%20assurance%20certificate%20with%20shield%20symbol%20professional%20warranty%20documentation%20elegant%20office%20desk%20setup%20trust%20and%20reliability%20concept%20modern%20business%20environment%20clean%20organized%20workspace%20soft%20professional%20lighting&width=1920&height=1080&seq=warranty-policy-hero-bg&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F]/95 to-[#003366]/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-[#FFA500] rounded-full shadow-lg">
            <i className="ri-shield-check-line text-4xl text-white"></i>
          </div>
          <h1 className="font-['Cairo'] text-5xl md:text-6xl font-bold text-white mb-6">
            سياسة الضمان
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            نضمن لك جودة منتجاتنا وخدماتنا. تعرف على تفاصيل الضمان الشامل
          </p>
        </div>
      </div>
    </section>
  );
}
