'use client';

import Link from 'next/link';

const allProjects = [
  {
    id: 1,
    title: 'فيلا الأناقة الحديثة',
    category: 'سكني',
    location: 'الرياض',
    area: '500 م²',
    duration: '8 أشهر',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20villa%20exterior%20with%20contemporary%20architecture%2C%20clean%20lines%2C%20large%20windows%2C%20beautiful%20landscaping%2C%20high-end%20residential%20design%2C%20Saudi%20Arabia%20style%2C%20professional%20photography&width=800&height=600&seq=villa-1&orientation=landscape',
    tags: ['تصميم داخلي', 'تشطيب', 'تصميم خارجي']
  },
  {
    id: 2,
    title: 'مكتب تجاري راقي',
    category: 'تجاري',
    location: 'جدة',
    area: '300 م²',
    duration: '6 أشهر',
    image: 'https://readdy.ai/api/search-image?query=elegant%20commercial%20office%20interior%20with%20modern%20furniture%2C%20professional%20lighting%2C%20glass%20partitions%2C%20contemporary%20business%20space%2C%20luxury%20office%20design%2C%20clean%20minimalist%20style&width=800&height=600&seq=office-1&orientation=landscape',
    tags: ['تصميم داخلي', 'تشطيب']
  },
  {
    id: 3,
    title: 'شقة عصرية فاخرة',
    category: 'سكني',
    location: 'الدمام',
    area: '200 م²',
    duration: '4 أشهر',
    image: 'https://readdy.ai/api/search-image?query=luxury%20modern%20apartment%20interior%20with%20elegant%20furniture%2C%20sophisticated%20lighting%2C%20marble%20finishes%2C%20contemporary%20living%20space%2C%20high-end%20residential%20design%2C%20premium%20materials&width=800&height=600&seq=apartment-1&orientation=landscape',
    tags: ['تصميم داخلي', 'تشطيب']
  },
  {
    id: 4,
    title: 'مطعم فاخر',
    category: 'تجاري',
    location: 'الرياض',
    area: '400 م²',
    duration: '7 أشهر',
    image: 'https://readdy.ai/api/search-image?query=upscale%20restaurant%20interior%20with%20elegant%20dining%20area%2C%20sophisticated%20lighting%2C%20luxury%20furniture%2C%20modern%20commercial%20design%2C%20fine%20dining%20atmosphere%2C%20premium%20restaurant%20space&width=800&height=600&seq=restaurant-1&orientation=landscape',
    tags: ['تصميم داخلي', 'تشطيب', 'تصميم خارجي']
  },
  {
    id: 5,
    title: 'قصر ملكي',
    category: 'سكني',
    location: 'الرياض',
    area: '1200 م²',
    duration: '18 أشهر',
    image: 'https://readdy.ai/api/search-image?query=royal%20palace%20exterior%20with%20traditional%20Arabic%20architecture%2C%20ornate%20details%2C%20grand%20entrance%2C%20luxury%20residential%20design%2C%20majestic%20building%2C%20Saudi%20Arabian%20palace%20style&width=800&height=600&seq=palace-1&orientation=landscape',
    tags: ['تصميم داخلي', 'تشطيب', 'تصميم خارجي']
  },
  {
    id: 6,
    title: 'مركز تسوق عصري',
    category: 'تجاري',
    location: 'جدة',
    area: '2000 م²',
    duration: '12 أشهر',
    image: 'https://readdy.ai/api/search-image?query=modern%20shopping%20mall%20interior%20with%20contemporary%20design%2C%20elegant%20storefronts%2C%20sophisticated%20lighting%2C%20commercial%20retail%20space%2C%20luxury%20shopping%20center%2C%20clean%20architectural%20lines&width=800&height=600&seq=mall-1&orientation=landscape',
    tags: ['تصميم داخلي', 'تشطيب', 'تصميم خارجي']
  }
];

interface ProjectsGridProps {
  activeFilter: string;
  searchTerm: string;
}

export default function ProjectsGrid({ activeFilter, searchTerm }: ProjectsGridProps) {
  let filteredProjects = activeFilter === 'الكل' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  if (searchTerm) {
    filteredProjects = filteredProjects.filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <i className="ri-search-line text-6xl text-gray-300"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">لا توجد نتائج</h3>
        <p className="text-gray-600">جرب البحث بكلمات مختلفة أو غير الفلتر</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="group bg-gradient-to-br from-[#0F3A3E] to-[#0A2F33] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-[#1C474A]/30"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-4 right-4">
              <span className="bg-[#CBC1B8] text-[#0A1F21] px-3 py-1 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-['Cairo'] font-bold text-[#F7F6F4] mb-2 group-hover:text-[#CBC1B8] transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center text-[#CBC1B8]/80 mb-4">
              <div className="w-5 h-5 flex items-center justify-center ml-2">
                <i className="ri-map-pin-line text-[#CBC1B8]"></i>
              </div>
              <span>{project.location}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-[#CBC1B8]/70 mb-4">
              <span>{project.area}</span>
              <span>{project.duration}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 2).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-[#1C474A]/50 text-[#CBC1B8]/90 px-3 py-1 rounded-full text-xs border border-[#1C474A]/30"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="bg-[#1C474A]/50 text-[#CBC1B8]/90 px-3 py-1 rounded-full text-xs border border-[#1C474A]/30">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>
            <div className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-6 py-4 rounded-2xl text-sm font-bold transition-all duration-500 shadow-lg hover:shadow-xl whitespace-nowrap w-full justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative flex items-center gap-3">
                <span>عرض المشروع</span>
                <div className="w-6 h-6 flex items-center justify-center bg-[#0A1F21]/20 rounded-full group-hover/btn:bg-[#0A1F21]/30 group-hover/btn:rotate-12 transition-all duration-300">
                  <i className="ri-arrow-left-line text-sm group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
