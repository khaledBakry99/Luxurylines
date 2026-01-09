'use client';
import { useState, useEffect } from 'react';

export default function ServiceGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = [
    { id: 'all', name: 'جميع المشاريع' },
    { id: 'residential', name: 'مشاريع سكنية' },
    { id: 'commercial', name: 'مشاريع تجارية' },
    { id: 'industrial', name: 'مشاريع صناعية' }
  ];

  const projects = [
    {
      id: 1,
      title: 'مجمع سكني فاخر',
      category: 'residential',
      image: 'https://readdy.ai/api/search-image?query=luxury%20residential%20complex%20construction%20project%20management%20with%20modern%20architecture%20and%20beautiful%20landscaping%2C%20professional%20construction%20site%20with%20cranes%20and%20workers%2C%20high%20quality%20architectural%20photography&width=400&height=300&seq=pm1&orientation=landscape',
      description: 'إدارة مشروع مجمع سكني فاخر يضم 200 وحدة سكنية'
    },
    {
      id: 2,
      title: 'مركز تجاري كبير',
      category: 'commercial',
      image: 'https://readdy.ai/api/search-image?query=large%20commercial%20shopping%20center%20construction%20project%20management%2C%20modern%20retail%20complex%20with%20glass%20facades%20and%20steel%20structure%2C%20construction%20workers%20and%20equipment%20on%20site&width=400&height=300&seq=pm2&orientation=landscape',
      description: 'تعهد وإدارة مشروع مركز تجاري بمساحة 50,000 متر مربع'
    },
    {
      id: 3,
      title: 'مصنع للصناعات الغذائية',
      category: 'industrial',
      image: 'https://readdy.ai/api/search-image?query=modern%20food%20processing%20industrial%20factory%20construction%20project%20management%2C%20large%20industrial%20building%20with%20steel%20structure%20and%20concrete%20foundations%2C%20construction%20site%20with%20heavy%20machinery&width=400&height=300&seq=pm3&orientation=landscape',
      description: 'إدارة مشروع مصنع متطور للصناعات الغذائية'
    },
    {
      id: 4,
      title: 'فيلا عصرية',
      category: 'residential',
      image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20villa%20construction%20project%20management%2C%20contemporary%20residential%20architecture%20with%20clean%20lines%20and%20large%20windows%2C%20construction%20site%20with%20workers%20and%20equipment&width=400&height=300&seq=pm4&orientation=landscape',
      description: 'تعهد بناء فيلا عصرية بتصميم معماري متميز'
    },
    {
      id: 5,
      title: 'مكاتب إدارية',
      category: 'commercial',
      image: 'https://readdy.ai/api/search-image?query=modern%20office%20building%20construction%20project%20management%2C%20glass%20and%20steel%20commercial%20architecture%2C%20construction%20site%20with%20cranes%20and%20professional%20workers&width=400&height=300&seq=pm5&orientation=landscape',
      description: 'إدارة مشروع مبنى مكاتب إدارية من 15 طابق'
    },
    {
      id: 6,
      title: 'مستودعات لوجستية',
      category: 'industrial',
      image: 'https://readdy.ai/api/search-image?query=large%20logistics%20warehouse%20construction%20project%20management%2C%20industrial%20storage%20facility%20with%20steel%20frame%20structure%2C%20construction%20site%20with%20heavy%20machinery%20and%20workers&width=400&height=300&seq=pm6&orientation=landscape',
      description: 'تعهد بناء مجمع مستودعات لوجستية متطور'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#0A2F33] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#0A1F21] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="mb-6">
            <span className="inline-block bg-[#CBC1B8]/20 text-[#CBC1B8] px-6 py-2 rounded-full text-lg font-semibold">
              معرض الأعمال
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#F7F6F4] mb-6">
            مشاريعنا المنجزة
          </h2>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto">
            تصفح مجموعة من أهم المشاريع التي تعهدنا بإدارتها وتنفيذها بنجاح
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-['Cairo'] font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg transform scale-105'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-[#CBC1B8] hover:bg-white/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F21]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-['Cairo'] font-bold text-[#F7F6F4] mb-3">
                  {project.title}
                </h3>
                <p className="text-[#CBC1B8]/85 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}