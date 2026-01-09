export default function ReviewsHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20interior%20design%20showroom%20with%20elegant%20furniture%20displays%2C%20professional%20photography%2C%20bright%20and%20clean%20atmosphere%2C%20high-end%20decoration%20materials%2C%20sophisticated%20lighting%2C%20premium%20quality%20finishes%2C%20contemporary%20style%2C%20welcoming%20ambiance%2C%20professional%20business%20environment%2C%20ultra%20realistic%2C%208k%20quality&width=1920&height=500&seq=reviews-hero-bg&orientation=landscape')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2F33]/95 to-[#0A1F21]/85"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 space-x-reverse mb-6">
            <div className="w-16 h-16 bg-[#CBC1B8] rounded-2xl flex items-center justify-center animate-float">
              <i className="ri-star-fill text-[#0A1F21] text-3xl"></i>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-[#F7F6F4] mb-2 animate-fade-in-up">
                تقييمات العملاء
              </h1>
              <div className="flex items-center space-x-2 space-x-reverse animate-fade-in-up animation-delay-200">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="ri-star-fill text-[#CBC1B8] text-xl"
                    ></i>
                  ))}
                </div>
                <span className="text-[#CBC1B8] text-lg font-semibold">
                  4.9 من 5
                </span>
              </div>
            </div>
          </div>

          <p className="text-[#CBC1B8] text-xl leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
            آراء عملائنا الكرام هي مصدر فخرنا وثقتنا. نسعى دائماً لتقديم أفضل
            الخدمات وتحقيق رضاكم الكامل في كل مشروع.
          </p>

          <div className="flex items-center space-x-4 space-x-reverse animate-fade-in-up animation-delay-400">
            <a
              href="#review-form"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center space-x-2 space-x-reverse">
                <i className="ri-edit-line text-xl"></i>
                <span>اكتب تقييمك</span>
              </span>
            </a>
            <a
              href="#reviews"
              className="bg-[#1C474A]/60 backdrop-blur-sm text-[#F7F6F4] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#1C474A] transition-all duration-300 border-2 border-[#CBC1B8]/30 hover:border-[#CBC1B8]/60 cursor-pointer whitespace-nowrap"
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-chat-3-line text-xl"></i>
                <span>شاهد التقييمات</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A1F21] to-transparent z-10"></div>
    </section>
  );
}
