'use client';

import Link from 'next/link';

const featuredProjects = [
  {
    id: 1,
    title: 'فيلا الأناقة الحديثة',
    category: 'سكني',
    location: 'الرياض',
    area: '450 م²',
    duration: '6 أشهر',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20villa%20exterior%20with%20contemporary%20architecture%2C%20clean%20lines%2C%20large%20windows%2C%20beautiful%20landscaping%2C%20high-end%20residential%20design%2C%20Saudi%20Arabia%20style%2C%20professional%20photography&width=800&height=600&seq=villa-home-1&orientation=landscape',
    description: 'تصميم فيلا عصرية تجمع بين الأناقة والفخامة'
  },
  {
    id: 2,
    title: 'مكتب تجاري راقي',
    category: 'تجاري',
    location: 'جدة',
    area: '300 م²',
    duration: '4 أشهر',
    image: 'https://readdy.ai/api/search-image?query=elegant%20commercial%20office%20interior%20with%20modern%20furniture%2C%20professional%20lighting%2C%20glass%20partitions%2C%20contemporary%20business%20space%2C%20luxury%20office%20design%2C%20clean%20minimalist%20style&width=800&height=600&seq=office-home-1&orientation=landscape',
    description: 'مساحة عمل احترافية تعزز الإنتاجية والإبداع'
  },
  {
    id: 3,
    title: 'شقة عصرية فاخرة',
    category: 'سكني',
    location: 'الدمام',
    area: '200 م²',
    duration: '3 أشهر',
    image: 'https://readdy.ai/api/search-image?query=luxury%20modern%20apartment%20interior%20with%20elegant%20furniture%2C%20sophisticated%20lighting%2C%20marble%20finishes%2C%20contemporary%20living%20space%2C%20high-end%20residential%20design%2C%20premium%20materials&width=800&height=600&seq=apartment-home-1&orientation=landscape',
    description: 'شقة عصرية تجمع بين الراحة والأناقة'
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1C474A] via-[#0A1F21] to-[#1C474A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#CBC1B8] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#F7F6F4] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#1C474A] rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#CBC1B8]/15 px-6 py-3 rounded-full mb-6">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-building-2-line text-[#CBC1B8] text-xl"></i>
            </div>
            <span className="text-[#F7F6F4]/85 font-medium">أعمالنا</span>
          </div>
          <h2 className="text-4xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
            مشاريعنا المميزة
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            استعرض مجموعة من أعمالنا المتميزة التي تعكس جودة وإبداع فريق العمل المتخصص
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group bg-gradient-to-br from-[#1C474A] to-[#0A1F21] rounded-3xl overflow-hidden shadow-card-glow hover:shadow-card-glow-hover transform hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-[#CBC1B8]/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#CBC1B8] text-[#0A1F21] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white/90 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center ml-2">
                      <i className="ri-map-pin-line text-[#CBC1B8]"></i>
                    </div>
                    <span className="font-medium">{project.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-[#CBC1B8]/85 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-[#0A1F21]/50 rounded-xl border border-[#CBC1B8]/20">
                    <div className="text-sm text-[#CBC1B8]/70 mb-1">المساحة</div>
                    <div className="font-bold text-[#F7F6F4]">{project.area}</div>
                  </div>
                  <div className="text-center p-3 bg-[#0A1F21]/50 rounded-xl border border-[#CBC1B8]/20">
                    <div className="text-sm text-[#CBC1B8]/70 mb-1">المدة</div>
                    <div className="font-bold text-[#F7F6F4]">{project.duration}</div>
                  </div>
                </div>

                <div className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-6 py-4 rounded-2xl text-sm font-bold hover:from-[#F7F6F4] hover:to-[#CBC1B8] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap w-full justify-center overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center gap-3">
                    <span>عرض المشروع</span>
                    <div className="w-6 h-6 flex items-center justify-center bg-[#0A1F21]/20 rounded-full group-hover/btn:rotate-12 transition-all duration-300">
                      <i className="ri-arrow-left-line text-lg group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] blur-lg opacity-0 group-hover/btn:opacity-30 transition-opacity duration-500 -z-10"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#1C474A] to-[#0A2F33] rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-[#1C474A]/40 border border-[#CBC1B8]/10">
            <div className="absolute inset-0 opacity-10">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: Math.random() * 6 + 2 + 'px',
                    height: Math.random() * 6 + 2 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
                    animationDelay: Math.random() * 2 + 's'
                  }}
                ></div>
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
                استعرض جميع مشاريعنا
              </h3>
              <p className="text-[#CBC1B8]/90 mb-6 max-w-2xl mx-auto">
                اكتشف المزيد من أعمالنا المتميزة واستلهم أفكاراً جديدة لمشروعك القادم
              </p>
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-10 py-5 rounded-2xl text-lg font-bold hover:from-[#F7F6F4] hover:to-[#CBC1B8] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[#CBC1B8]/15 hover:scale-105 whitespace-nowrap overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center gap-4">
                  <span className="relative">
                    عرض جميع المشاريع
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A1F21]/50 group-hover:w-full transition-all duration-500"></div>
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center bg-[#0A1F21]/20 rounded-full group-hover:bg-[#0A1F21]/30 group-hover:scale-110 transition-all duration-300">
                    <i className="ri-arrow-left-line text-xl transition-colors duration-300"></i>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
}
