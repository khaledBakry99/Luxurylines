export default function ReviewsHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20interior%20design%20showroom%20with%20elegant%20furniture%20displays%2C%20professional%20photography%2C%20bright%20and%20clean%20atmosphere%2C%20high-end%20decoration%20materials%2C%20sophisticated%20lighting%2C%20premium%20quality%20finishes%2C%20contemporary%20style%2C%20welcoming%20ambiance%2C%20professional%20business%20environment%2C%20ultra%20realistic%2C%208k%20quality&width=1920&height=500&seq=reviews-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/85 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 space-x-reverse mb-6">
            <div className="w-16 h-16 bg-[#FFA500] rounded-2xl flex items-center justify-center">
              <i className="ri-star-fill text-white text-3xl"></i>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">تقييمات العملاء</h1>
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="ri-star-fill text-[#FFA500] text-xl"></i>
                  ))}
                </div>
                <span className="text-white/90 text-lg font-semibold">4.9 من 5</span>
              </div>
            </div>
          </div>
          
          <p className="text-white/90 text-xl leading-relaxed mb-8">
            آراء عملائنا الكرام هي مصدر فخرنا وثقتنا. نسعى دائماً لتقديم أفضل الخدمات وتحقيق رضاكم الكامل في كل مشروع.
          </p>

          <div className="flex items-center space-x-4 space-x-reverse">
            <a href="#review-form" className="bg-[#FFA500] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#e6940a] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap">
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-edit-line text-xl"></i>
                <span>اكتب تقييمك</span>
              </span>
            </a>
            <a href="#reviews" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 cursor-pointer whitespace-nowrap">
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-chat-3-line text-xl"></i>
                <span>شاهد التقييمات</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
