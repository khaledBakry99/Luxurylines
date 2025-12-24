'use client';

export default function ServiceGallery() {
  const images = [
    {
      url: 'https://readdy.ai/api/search-image?query=premium%20marble%20and%20granite%20tiles%20display%20in%20modern%20showroom%20with%20elegant%20lighting%2C%20high%20quality%20natural%20stone%20materials%2C%20luxurious%20interior%20design%20materials%20showcase&width=800&height=600&seq=supply-gallery-1&orientation=landscape',
      title: 'رخام وجرانيت فاخر'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=modern%20construction%20materials%20warehouse%20with%20organized%20building%20supplies%2C%20cement%20bags%2C%20steel%20bars%2C%20bricks%2C%20professional%20storage%20facility%20with%20clean%20environment&width=800&height=600&seq=supply-gallery-2&orientation=landscape',
      title: 'مواد بناء أساسية'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=elegant%20wooden%20flooring%20and%20parquet%20samples%20display%2C%20premium%20hardwood%20materials%2C%20modern%20interior%20finishing%20materials%20in%20professional%20showroom&width=800&height=600&seq=supply-gallery-3&orientation=landscape',
      title: 'أرضيات خشبية'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=modern%20bathroom%20fixtures%20and%20sanitary%20ware%20display%2C%20premium%20faucets%2C%20elegant%20sinks%2C%20high%20quality%20plumbing%20materials%20in%20contemporary%20showroom&width=800&height=600&seq=supply-gallery-4&orientation=landscape',
      title: 'أدوات صحية'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=premium%20paint%20cans%20and%20coating%20materials%20display%2C%20professional%20painting%20supplies%2C%20color%20samples%2C%20high%20quality%20wall%20finishes%20in%20organized%20storage&width=800&height=600&seq=supply-gallery-5&orientation=landscape',
      title: 'دهانات وعوازل'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=modern%20doors%20and%20windows%20display%20in%20showroom%2C%20elegant%20wooden%20doors%2C%20UPVC%20windows%2C%20aluminum%20frames%2C%20contemporary%20design%20samples&width=800&height=600&seq=supply-gallery-6&orientation=landscape',
      title: 'أبواب ونوافذ'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            معرض المواد
          </h2>
          <p className="text-xl text-white/80">
            تصفح مجموعة من أفضل المواد المتوفرة لدينا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F21]/90 via-[#0A1F21]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl font-['Cairo'] font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
