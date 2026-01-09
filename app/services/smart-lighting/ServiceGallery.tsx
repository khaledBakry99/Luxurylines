"use client";

export default function ServiceGallery() {
  const projects = [
    {
      image:
        "https://readdy.ai/api/search-image?query=modern%20living%20room%20with%20smart%20LED%20lighting%20system%2C%20ambient%20lighting%2C%20intelligent%20control%2C%20energy%20efficient%20lights%2C%20contemporary%20design&width=800&height=600&seq=smart-light-1&orientation=landscape",
      title: "إضاءة صالة ذكية",
      category: "إضاءة محيطة",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=bedroom%20with%20smart%20lighting%20control%2C%20adjustable%20LED%20lights%2C%20mood%20lighting%2C%20modern%20bedroom%20illumination&width=800&height=600&seq=smart-light-2&orientation=landscape",
      title: "إضاءة غرفة نوم",
      category: "إضاءة مزاجية",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=modern%20kitchen%20with%20smart%20LED%20lighting%2C%20under%20cabinet%20lights%2C%20task%20lighting%2C%20energy%20efficient%20kitchen%20illumination&width=800&height=600&seq=smart-light-3&orientation=landscape",
      title: "إضاءة مطبخ عصري",
      category: "إضاءة وظيفية",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=home%20office%20with%20smart%20lighting%20system%2C%20adjustable%20desk%20lighting%2C%20LED%20panels%2C%20productive%20workspace%20illumination&width=800&height=600&seq=smart-light-4&orientation=landscape",
      title: "إضاءة مكتب منزلي",
      category: "إضاءة عمل",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=outdoor%20smart%20lighting%20system%2C%20garden%20LED%20lights%2C%20pathway%20illumination%2C%20intelligent%20outdoor%20lighting%20control&width=800&height=600&seq=smart-light-5&orientation=landscape",
      title: "إضاءة خارجية",
      category: "إضاءة حدائق",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=bathroom%20with%20smart%20LED%20lighting%2C%20mirror%20lights%2C%20waterproof%20fixtures%2C%20modern%20bathroom%20illumination&width=800&height=600&seq=smart-light-6&orientation=landscape",
      title: "إضاءة حمام فاخر",
      category: "إضاءة مقاومة للماء",
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
            استعرض مجموعة من مشاريع الإضاءة الذكية التي نفذناها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
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
