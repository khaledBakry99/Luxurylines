"use client";

export default function ServiceGallery() {
  const projects = [
    {
      image:
        "https://readdy.ai/api/search-image?query=elegant%20living%20room%20decoration%20with%20beautiful%20accessories%2C%20artistic%20paintings%20on%20walls%2C%20luxurious%20curtains%2C%20decorative%20items%2C%20sophisticated%20color%20palette%2C%20modern%20styling&width=800&height=600&seq=decoration-1&orientation=landscape",
      title: "صالة معيشة فاخرة",
      category: "ديكور كلاسيكي",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=modern%20bedroom%20decoration%20with%20artistic%20wall%20art%2C%20elegant%20curtains%2C%20decorative%20accessories%2C%20beautiful%20color%20coordination%2C%20contemporary%20styling&width=800&height=600&seq=decoration-2&orientation=landscape",
      title: "غرفة نوم عصرية",
      category: "ديكور حديث",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=stylish%20dining%20room%20with%20decorative%20elements%2C%20artistic%20paintings%2C%20elegant%20table%20settings%2C%20beautiful%20curtains%2C%20sophisticated%20accessories&width=800&height=600&seq=decoration-3&orientation=landscape",
      title: "غرفة طعام أنيقة",
      category: "ديكور فاخر",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=cozy%20reading%20corner%20with%20decorative%20cushions%2C%20artistic%20wall%20decor%2C%20plants%2C%20beautiful%20lighting%2C%20comfortable%20seating%20area&width=800&height=600&seq=decoration-4&orientation=landscape",
      title: "ركن قراءة مريح",
      category: "ديكور مريح",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=elegant%20home%20office%20decoration%20with%20artistic%20elements%2C%20stylish%20accessories%2C%20organized%20workspace%2C%20beautiful%20color%20scheme&width=800&height=600&seq=decoration-5&orientation=landscape",
      title: "مكتب منزلي راقي",
      category: "ديكور عملي",
    },
    {
      image:
        "https://readdy.ai/api/search-image?query=luxurious%20entrance%20hall%20with%20decorative%20mirror%2C%20artistic%20console%20table%2C%20elegant%20accessories%2C%20beautiful%20lighting%20fixtures&width=800&height=600&seq=decoration-6&orientation=landscape",
      title: "مدخل فاخر",
      category: "ديكور مميز",
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
            استعرض مجموعة من أعمالنا في الديكور والتنسيق
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
