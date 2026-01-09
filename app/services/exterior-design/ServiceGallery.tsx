"use client";
import { useState } from "react";

export default function ServiceGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "جميع الأعمال" },
    { id: "villas", label: "الفلل" },
    { id: "buildings", label: "المباني" },
    { id: "gardens", label: "الحدائق" },
  ];

  const projects = [
    {
      id: 1,
      title: "فيلا عصرية فاخرة",
      category: "villas",
      image:
        "https://readdy.ai/api/search-image?query=luxury%20modern%20villa%20exterior%20with%20contemporary%20architecture%2C%20elegant%20facade%20design%2C%20premium%20materials%2C%20sophisticated%20outdoor%20lighting%2C%20beautiful%20landscaping%2C%20clean%20minimalist%20aesthetic%2C%20professional%20photography&width=600&height=400&seq=extgal1&orientation=landscape",
    },
    {
      id: 2,
      title: "مبنى تجاري راقي",
      category: "buildings",
      image:
        "https://readdy.ai/api/search-image?query=modern%20commercial%20building%20exterior%20facade%2C%20contemporary%20architecture%2C%20glass%20and%20steel%20design%2C%20elegant%20entrance%2C%20professional%20landscaping%2C%20urban%20setting%2C%20high-end%20finishes&width=600&height=400&seq=extgal2&orientation=landscape",
    },
    {
      id: 3,
      title: "حديقة منزلية فاخرة",
      category: "gardens",
      image:
        "https://readdy.ai/api/search-image?query=luxury%20residential%20garden%20landscaping%2C%20beautiful%20outdoor%20space%2C%20elegant%20plants%20and%20flowers%2C%20modern%20garden%20design%2C%20water%20features%2C%20outdoor%20lighting%2C%20professional%20landscaping&width=600&height=400&seq=extgal3&orientation=landscape",
    },
    {
      id: 4,
      title: "واجهة فيلا كلاسيكية",
      category: "villas",
      image:
        "https://readdy.ai/api/search-image?query=classic%20luxury%20villa%20exterior%20facade%2C%20traditional%20architecture%20with%20modern%20touches%2C%20elegant%20columns%2C%20premium%20stone%20materials%2C%20beautiful%20entrance%2C%20sophisticated%20design&width=600&height=400&seq=extgal4&orientation=landscape",
    },
    {
      id: 5,
      title: "مجمع سكني حديث",
      category: "buildings",
      image:
        "https://readdy.ai/api/search-image?query=modern%20residential%20complex%20exterior%2C%20contemporary%20apartment%20building%2C%20elegant%20facade%20design%2C%20landscaped%20courtyard%2C%20premium%20finishes%2C%20urban%20architecture&width=600&height=400&seq=extgal5&orientation=landscape",
    },
    {
      id: 6,
      title: "تنسيق حدائق فاخر",
      category: "gardens",
      image:
        "https://readdy.ai/api/search-image?query=luxury%20garden%20landscaping%20design%2C%20elegant%20outdoor%20space%2C%20beautiful%20plants%20arrangement%2C%20modern%20water%20features%2C%20outdoor%20seating%20area%2C%20professional%20lighting&width=600&height=400&seq=extgal6&orientation=landscape",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
            معرض الأعمال
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto mb-12">
            استعرض مجموعة من مشاريعنا المميزة في التصميم الخارجي
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg"
                    : "bg-white/10 backdrop-blur-sm text-[#F7F6F4] border border-white/20 hover:bg-white/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
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
