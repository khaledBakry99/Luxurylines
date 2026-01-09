"use client";

import { useState } from "react";

export default function ServiceGallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "جميع الأعمال" },
    { id: "living", name: "غرف المعيشة" },
    { id: "bedroom", name: "غرف النوم" },
    { id: "kitchen", name: "المطابخ" },
    { id: "office", name: "المكاتب" },
  ];

  const projects = [
    {
      id: 1,
      title: "غرفة معيشة عصرية",
      category: "living",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20luxury%20living%20room%20interior%20design%20with%20contemporary%20furniture%2C%20elegant%20lighting%2C%20marble%20coffee%20table%2C%20sophisticated%20decor%2C%20neutral%20color%20palette%2C%20high-end%20materials%2C%20professional%20photography&width=600&height=400&seq=living1&orientation=landscape",
    },
    {
      id: 2,
      title: "غرفة نوم رئيسية فاخرة",
      category: "bedroom",
      image:
        "https://readdy.ai/api/search-image?query=Luxurious%20master%20bedroom%20interior%20design%20with%20elegant%20bed%2C%20sophisticated%20lighting%2C%20premium%20materials%2C%20modern%20furniture%2C%20warm%20ambient%20atmosphere%2C%20high-end%20decor%2C%20professional%20photography&width=600&height=400&seq=bedroom1&orientation=landscape",
    },
    {
      id: 3,
      title: "مطبخ حديث ومتطور",
      category: "kitchen",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20luxury%20kitchen%20interior%20design%20with%20sleek%20cabinets%2C%20marble%20countertops%2C%20contemporary%20appliances%2C%20sophisticated%20lighting%2C%20minimalist%20aesthetic%2C%20high-end%20materials%2C%20professional%20photography&width=600&height=400&seq=kitchen1&orientation=landscape",
    },
    {
      id: 4,
      title: "مكتب تنفيذي راقي",
      category: "office",
      image:
        "https://readdy.ai/api/search-image?query=Executive%20office%20interior%20design%20with%20luxury%20furniture%2C%20sophisticated%20lighting%2C%20premium%20materials%2C%20modern%20workspace%2C%20elegant%20decor%2C%20professional%20atmosphere%2C%20high-end%20finishes&width=600&height=400&seq=office1&orientation=landscape",
    },
    {
      id: 5,
      title: "صالة استقبال أنيقة",
      category: "living",
      image:
        "https://readdy.ai/api/search-image?query=Elegant%20reception%20hall%20interior%20design%20with%20luxury%20seating%2C%20sophisticated%20lighting%2C%20marble%20accents%2C%20contemporary%20decor%2C%20warm%20atmosphere%2C%20high-end%20materials%2C%20professional%20photography&width=600&height=400&seq=living2&orientation=landscape",
    },
    {
      id: 6,
      title: "غرفة نوم للأطفال",
      category: "bedroom",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20children%20bedroom%20interior%20design%20with%20colorful%20furniture%2C%20playful%20decor%2C%20safe%20materials%2C%20creative%20lighting%2C%20functional%20storage%2C%20contemporary%20style%2C%20professional%20photography&width=600&height=400&seq=bedroom2&orientation=landscape",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto mb-12">
            استكشف مجموعة من أفضل مشاريعنا في التصميم الداخلي
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg"
                    : "bg-white/10 backdrop-blur-sm text-[#F7F6F4] border border-white/20 hover:bg-white/20"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F21]/95 via-[#0A1F21]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-[#CBC1B8]">
                      <span className="text-sm">مشاهدة التفاصيل</span>
                      <i className="ri-arrow-left-line mr-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
