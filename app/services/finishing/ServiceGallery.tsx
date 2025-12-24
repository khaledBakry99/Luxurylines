'use client';
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'plumbing', name: 'السباكة' },
  { id: 'electrical', name: 'الكهرباء' },
  { id: 'painting', name: 'الدهانات' },
  { id: 'flooring', name: 'الأرضيات' }
];

const projects = [
  {
    id: 1,
    category: 'plumbing',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20bathroom%20plumbing%20installation%20with%20premium%20fixtures%2C%20elegant%20sink%20and%20faucet%2C%20sophisticated%20shower%20system%2C%20high-quality%20pipes%20and%20fittings%2C%20professional%20craftsmanship%2C%20clean%20installation%20work%2C%20contemporary%20bathroom%20design&width=600&height=800&seq=finishing1&orientation=portrait',
    title: 'أعمال سباكة فاخرة',
    description: 'تركيب أنظمة سباكة متطورة'
  },
  {
    id: 2,
    category: 'electrical',
    image: 'https://readdy.ai/api/search-image?query=professional%20electrical%20installation%20work%20with%20modern%20lighting%20fixtures%2C%20elegant%20ceiling%20lights%2C%20sophisticated%20wall%20switches%20and%20outlets%2C%20clean%20wiring%20system%2C%20contemporary%20electrical%20panel%2C%20high-quality%20electrical%20components%2C%20professional%20craftsmanship&width=600&height=800&seq=finishing2&orientation=portrait',
    title: 'أنظمة كهربائية حديثة',
    description: 'تركيب كهرباء بأعلى المعايير'
  },
  {
    id: 3,
    category: 'painting',
    image: 'https://readdy.ai/api/search-image?query=elegant%20interior%20wall%20painting%20with%20premium%20paint%20finish%2C%20smooth%20texture%2C%20sophisticated%20color%20scheme%2C%20professional%20painting%20work%2C%20modern%20living%20room%20with%20beautiful%20painted%20walls%2C%20high-quality%20paint%20application%2C%20clean%20finish&width=600&height=800&seq=finishing3&orientation=portrait',
    title: 'دهانات احترافية',
    description: 'ألوان متناسقة وتشطيب مثالي'
  },
  {
    id: 4,
    category: 'flooring',
    image: 'https://readdy.ai/api/search-image?query=luxury%20marble%20flooring%20installation%20with%20elegant%20patterns%2C%20premium%20quality%20tiles%2C%20sophisticated%20floor%20design%2C%20professional%20installation%20work%2C%20modern%20interior%20space%20with%20beautiful%20floor%20finish%2C%20high-end%20residential%20flooring&width=600&height=800&seq=finishing4&orientation=portrait',
    title: 'أرضيات فاخرة',
    description: 'تركيب رخام وسيراميك راقي'
  },
  {
    id: 5,
    category: 'plumbing',
    image: 'https://readdy.ai/api/search-image?query=modern%20kitchen%20plumbing%20installation%20with%20elegant%20sink%20and%20faucet%2C%20sophisticated%20water%20system%2C%20premium%20quality%20fixtures%2C%20professional%20installation%20work%2C%20contemporary%20kitchen%20design%20with%20beautiful%20plumbing%20finish&width=600&height=800&seq=finishing5&orientation=portrait',
    title: 'سباكة المطابخ',
    description: 'أنظمة مياه متطورة للمطابخ'
  },
  {
    id: 6,
    category: 'electrical',
    image: 'https://readdy.ai/api/search-image?query=sophisticated%20home%20automation%20electrical%20system%20with%20smart%20lighting%20controls%2C%20modern%20electrical%20panel%2C%20elegant%20switches%20and%20outlets%2C%20professional%20wiring%20installation%2C%20contemporary%20smart%20home%20technology%2C%20high-quality%20electrical%20components&width=600&height=800&seq=finishing6&orientation=portrait',
    title: 'أنظمة ذكية',
    description: 'تركيب أنظمة كهربائية ذكية'
  }
];

export default function ServiceGallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A1F21] to-[#0F3A3E]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            معرض الأعمال
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            نماذج من أعمالنا
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            اطلع على مجموعة من مشاريعنا المنفذة بأعلى معايير الجودة
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white shadow-lg scale-105'
                  : 'bg-white text-white/80 hover:bg-gray-50 hover:text-[#0A1F21] shadow'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-[#CBC1B8] font-semibold hover:gap-3 transition-all whitespace-nowrap">
                    <span>عرض التفاصيل</span>
                    <i className="ri-arrow-left-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}