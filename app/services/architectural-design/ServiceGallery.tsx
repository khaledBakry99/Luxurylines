'use client';

export default function ServiceGallery() {
  const projects = [
    {
      title: 'فيلا عصرية',
      image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20villa%20architectural%20design%20with%20contemporary%20structure%2C%20elegant%20facade%2C%20innovative%20architecture%2C%20beautiful%20landscaping&width=800&height=600&seq=arch-gallery-1&orientation=landscape'
    },
    {
      title: 'مبنى تجاري',
      image: 'https://readdy.ai/api/search-image?query=commercial%20building%20architectural%20design%20with%20modern%20glass%20facade%2C%20professional%20structure%2C%20urban%20architecture%2C%20business%20center&width=800&height=600&seq=arch-gallery-2&orientation=landscape'
    },
    {
      title: 'مجمع سكني',
      image: 'https://readdy.ai/api/search-image?query=residential%20complex%20architectural%20design%20with%20multiple%20buildings%2C%20modern%20apartments%2C%20community%20spaces%2C%20elegant%20architecture&width=800&height=600&seq=arch-gallery-3&orientation=landscape'
    },
    {
      title: 'قصر فاخر',
      image: 'https://readdy.ai/api/search-image?query=luxury%20palace%20architectural%20design%20with%20grand%20facade%2C%20classical%20elements%2C%20elegant%20columns%2C%20sophisticated%20architecture&width=800&height=600&seq=arch-gallery-4&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            معرض الأعمال
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            تصفح مجموعة من تصاميمنا المعمارية المميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-['Cairo'] font-bold mb-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}