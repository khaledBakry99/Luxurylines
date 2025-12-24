'use client';

import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
}

interface RelatedProjectsProps {
  currentProjectId: number;
  projects: Project[];
}

export default function RelatedProjects({ currentProjectId, projects }: RelatedProjectsProps) {
  const relatedProjects = projects.filter(p => p.id !== currentProjectId).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A2F33] to-[#0A1F21]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#CBC1B8]/20 px-6 py-3 rounded-full mb-6">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-folder-line text-[#CBC1B8] text-xl"></i>
            </div>
            <span className="text-[#CBC1B8] font-medium">مشاريع أخرى</span>
          </div>
          <h2 className="text-4xl font-['Cairo'] font-bold text-white mb-4">
            مشاريع مشابهة
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            استكشف المزيد من أعمالنا المتميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {relatedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-white/20">
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
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                      <i className="ri-arrow-left-line text-2xl text-[#0A1F21]"></i>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-['Cairo'] font-bold text-white mb-2 group-hover:text-[#CBC1B8] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white/70">
                    <div className="w-5 h-5 flex items-center justify-center ml-2">
                      <i className="ri-map-pin-line text-[#CBC1B8]"></i>
                    </div>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 bg-[#1C474A] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg overflow-hidden cursor-pointer whitespace-nowrap"
          >
            <span className="relative z-10">عرض جميع المشاريع</span>
            <div className="w-6 h-6 flex items-center justify-center relative z-10">
              <i className="ri-arrow-left-line text-xl"></i>
            </div>
            <div className="absolute inset-0 bg-[#0A1F21] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
