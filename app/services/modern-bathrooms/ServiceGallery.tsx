"use client";

export default function ServiceGallery() {
  const projects = [
    {
      image:
        "https://readdy.ai/api/search-image?query=luxury%20spa%20bathroom%20with%20freestanding%20bathtub%2C%20elegant%20fixtures%2C%20marble%20tiles%2C%20ambient%20lighting&width=800&height=600&seq=modern-bathroom-1&orientation=landscape",
      title: "حمام سبا فاخر",
      category: "حمامات سبا",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=modern%20minimalist%20bathroom%2C%20clean%20design%2C%20premium%20fixtures%2C%20walk-in%20shower%2C%20elegant%20simplicity&width=800&height=600&seq=modern-bathroom-2&orientation=landscape",
      title: "حمام مينيمال",
      category: "حمامات عصرية",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=master%20bathroom%20with%20double%20vanity%2C%20luxury%20finishes%2C%20spacious%20layout%2C%20sophisticated%20design&width=800&height=600&seq=modern-bathroom-3&orientation=landscape",
      title: "حمام رئيسي فاخر",
      category: "حمامات رئيسية",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=contemporary%20bathroom%20with%20smart%20mirror%2C%20LED%20lighting%2C%20modern%20fixtures%2C%20elegant%20design&width=800&height=600&seq=modern-bathroom-4&orientation=landscape",
      title: "حمام ذكي",
      category: "حمامات ذكية",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=luxury%20bathroom%20with%20rain%20shower%2C%20marble%20walls%2C%20premium%20fixtures%2C%20spa%20atmosphere&width=800&height=600&seq=modern-bathroom-5&orientation=landscape",
      title: "حمام بدش مطري",
      category: "حمامات فاخرة",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=compact%20modern%20bathroom%2C%20efficient%20design%2C%20premium%20materials%2C%20elegant%20small%20space%20solution&width=800&height=600&seq=modern-bathroom-6&orientation=landscape",
      title: "حمام مدمج",
      category: "حمامات صغيرة",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
            معرض الأعمال
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            استعرض مجموعة من الحمامات العصرية التي نفذناها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F21]/95 via-[#0A1F21]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-semibold text-[#CBC1B8] mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4]">
                    {project.title}
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
