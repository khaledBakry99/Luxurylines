'use client';

export default function ServiceGallery() {
  const projects = [
    {
      image: 'https://readdy.ai/api/search-image?query=custom%20built-in%20wardrobe%20with%20elegant%20design%2C%20premium%20wood%20finish%2C%20organized%20storage%2C%20luxury%20bedroom%20furniture&width=800&height=600&seq=custom-furniture-1&orientation=landscape',
      title: 'خزانة ملابس مخصصة',
      category: 'أثاث غرف النوم'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=custom%20dining%20table%20with%20chairs%2C%20handcrafted%20wooden%20furniture%2C%20elegant%20design%2C%20premium%20materials&width=800&height=600&seq=custom-furniture-2&orientation=landscape',
      title: 'طاولة طعام فاخرة',
      category: 'أثاث غرف الطعام'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=custom%20home%20office%20desk%20with%20shelves%2C%20modern%20workspace%20furniture%2C%20organized%20storage%20solutions&width=800&height=600&seq=custom-furniture-3&orientation=landscape',
      title: 'مكتب عمل مخصص',
      category: 'أثاث المكاتب'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=custom%20TV%20unit%20with%20storage%2C%20modern%20entertainment%20center%2C%20elegant%20living%20room%20furniture&width=800&height=600&seq=custom-furniture-4&orientation=landscape',
      title: 'وحدة تلفزيون عصرية',
      category: 'أثاث الصالات'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=custom%20bookshelf%20library%20wall%2C%20floor%20to%20ceiling%20shelving%2C%20elegant%20wood%20design%2C%20organized%20book%20storage&width=800&height=600&seq=custom-furniture-5&orientation=landscape',
      title: 'مكتبة جدارية',
      category: 'أثاث المكتبات'
    },
    {
      image: 'https://readdy.ai/api/search-image?query=custom%20kitchen%20cabinets%2C%20modern%20design%2C%20premium%20materials%2C%20organized%20storage%20solutions&width=800&height=600&seq=custom-furniture-6&orientation=landscape',
      title: 'خزائن مطبخ مخصصة',
      category: 'أثاث المطابخ'
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
            استعرض مجموعة من قطع الأثاث المخصصة التي صنعناها
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