'use client';

interface ProjectInfoProps {
  projectId: string;
}

export default function ProjectInfo({ projectId }: ProjectInfoProps) {
  const projectsData: Record<string, { area: string; duration: string; tags: string[] }> = {
    '1': {
      area: '450 م²',
      duration: '8 أشهر',
      tags: ['تصميم داخلي', 'تصميم خارجي', 'إشراف تنفيذ', 'تشطيبات فاخرة']
    },
    '2': {
      area: '320 م²',
      duration: '6 أشهر',
      tags: ['تصميم داخلي', 'ديكور عصري', 'إضاءة ذكية', 'أثاث مخصص']
    },
    '3': {
      area: '800 م²',
      duration: '12 شهر',
      tags: ['تصميم تجاري', 'واجهات زجاجية', 'إدارة مشاريع', 'تشطيبات راقية']
    },
    '4': {
      area: '280 م²',
      duration: '5 أشهر',
      tags: ['تصميم داخلي', 'ديكور حديث', 'إضاءة معمارية', 'تشطيبات']
    },
    '5': {
      area: '1200 م²',
      duration: '18 شهر',
      tags: ['تصميم معماري', 'واجهات حجرية', 'مساحات خضراء', 'إدارة مشاريع']
    },
    '6': {
      area: '380 م²',
      duration: '7 أشهر',
      tags: ['تصميم داخلي', 'تصميم خارجي', 'حدائق', 'تشطيبات فاخرة']
    }
  };

  const project = projectsData[projectId] || projectsData['1'];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1F21] to-[#0F3A3E]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-gradient-to-br from-[#0A1F21] to-[#1C474A] rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="w-16 h-16 flex items-center justify-center bg-[#CBC1B8] rounded-full mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <i className="ri-ruler-line text-3xl text-[#0A1F21]"></i>
              </div>
              <h3 className="text-white/70 text-lg mb-2">المساحة الإجمالية</h3>
              <p className="text-4xl font-['Cairo'] font-bold text-white">{project.area}</p>
            </div>

            <div className="group bg-gradient-to-br from-[#1C474A] to-[#0F3A3E] rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <i className="ri-time-line text-3xl text-[#1C474A]"></i>
              </div>
              <h3 className="text-white/90 text-lg mb-2">مدة التنفيذ</h3>
              <p className="text-4xl font-['Cairo'] font-bold text-white">{project.duration}</p>
            </div>

            <div className="group bg-gradient-to-br from-[#0F3A3E] to-[#0A2F33] rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <div className="w-16 h-16 flex items-center justify-center bg-[#CBC1B8] rounded-full mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <i className="ri-service-line text-3xl text-[#0A1F21]"></i>
              </div>
              <h3 className="text-white/70 text-lg mb-2">الخدمات المقدمة</h3>
              <p className="text-4xl font-['Cairo'] font-bold text-white">{project.tags.length}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-6 text-center">
              الخدمات المقدمة في المشروع
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="group bg-white/10 border-2 border-[#CBC1B8]/30 px-6 py-3 rounded-full hover:bg-[#CBC1B8] hover:border-[#CBC1B8] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <span className="text-white group-hover:text-[#0A1F21] font-semibold transition-colors duration-300">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
