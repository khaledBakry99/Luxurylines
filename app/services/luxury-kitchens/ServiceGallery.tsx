'use client';

export default function ServiceGallery() {
  const projects = [
    {
      image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20kitchen%20with%20island%2C%20premium%20appliances%2C%20marble%20countertops%2C%20elegant%20cabinets%2C%20sophisticated%20lighting&width=800&height=600&seq=luxury-kitchen-1&orientation=landscape',
      title: 'مطبخ فاخر مع جزيرة',
      category: 'مطابخ عصرية'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=contemporary%20kitchen%20with%20smart%20storage%2C%20high-end%20appliances%2C%20sleek%20design%2C%20organized%20workspace&width=800&height=600&seq=luxury-kitchen-2&orientation=landscape',
      title: 'مطبخ ذكي منظم',
      category: 'مطابخ ذكية'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=elegant%20white%20kitchen%20with%20gold%20accents%2C%20luxury%20finishes%2C%20premium%20materials%2C%20sophisticated%20design&width=800&height=600&seq=luxury-kitchen-3&orientation=landscape',
      title: 'مطبخ أبيض فاخر',
      category: 'مطابخ كلاسيكية'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=open%20concept%20luxury%20kitchen%2C%20modern%20design%2C%20integrated%20appliances%2C%20spacious%20layout&width=800&height=600&seq=luxury-kitchen-4&orientation=landscape',
      title: 'مطبخ مفتوح',
      category: 'مطابخ مفتوحة'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=dark%20luxury%20kitchen%20with%20wood%20accents%2C%20premium%20appliances%2C%20elegant%20lighting%2C%20sophisticated%20atmosphere&width=800&height=600&seq=luxury-kitchen-5&orientation=landscape',
      title: 'مطبخ داكن أنيق',
      category: 'مطابخ داكنة'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=minimalist%20luxury%20kitchen%2C%20clean%20lines%2C%20premium%20materials%2C%20integrated%20technology%2C%20modern%20design&width=800&height=600&seq=luxury-kitchen-6&orientation=landscape',
      title: 'مطبخ مينيمال',
      category: 'مطابخ بسيطة'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1F21] to-[#0F3A3E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            معرض الأعمال
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            استعرض مجموعة من المطابخ الفاخرة التي نفذناها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-semibold text-[#CBC1B8] mb-2">{project.category}</p>
                  <h3 className="text-2xl font-['Cairo'] font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}