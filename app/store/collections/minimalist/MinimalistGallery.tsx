'use client';

import { useState } from 'react';

export default function MinimalistGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'الكل', icon: 'ri-grid-line' },
    { id: 'living', label: 'غرف المعيشة', icon: 'ri-sofa-line' },
    { id: 'bedroom', label: 'غرف النوم', icon: 'ri-hotel-bed-line' },
    { id: 'dining', label: 'غرف الطعام', icon: 'ri-restaurant-line' },
    { id: 'office', label: 'المكاتب', icon: 'ri-briefcase-line' },
    { id: 'decor', label: 'الديكور', icon: 'ri-lightbulb-line' }
  ];

  const products = [
    {
      id: 1,
      title: 'طقم صالون بسيط',
      category: 'living',
      price: '11,200',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20sofa%20set%20with%20clean%20lines%20neutral%20beige%20color%20simple%20design%20scandinavian%20style%20comfortable%20furniture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-sofa-1&orientation=squarish',
      features: ['خطوط نظيفة', 'ألوان محايدة', 'تصميم مريح']
    },
    {
      id: 2,
      title: 'طاولة طعام بسيطة',
      category: 'dining',
      price: '6,800',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20dining%20table%20with%20natural%20wood%20top%20simple%20legs%20clean%20design%20scandinavian%20furniture%20functional%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-table-1&orientation=squarish',
      features: ['خشب طبيعي', 'تصميم بسيط', 'وظيفي']
    },
    {
      id: 3,
      title: 'سرير بسيط عملي',
      category: 'bedroom',
      price: '8,500',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20bed%20frame%20with%20simple%20headboard%20natural%20wood%20clean%20lines%20scandinavian%20bedroom%20furniture%20functional%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-bed-1&orientation=squarish',
      features: ['تصميم عملي', 'خشب طبيعي', 'بساطة أنيقة']
    },
    {
      id: 4,
      title: 'مكتب عمل بسيط',
      category: 'office',
      price: '4,200',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20desk%20with%20clean%20design%20natural%20wood%20top%20simple%20metal%20legs%20functional%20workspace%20furniture%20scandinavian%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-desk-1&orientation=squarish',
      features: ['تصميم وظيفي', 'مساحة عمل', 'خامات طبيعية']
    },
    {
      id: 5,
      title: 'وحدة تلفزيون بسيطة',
      category: 'living',
      price: '3,900',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20tv%20stand%20with%20clean%20lines%20natural%20wood%20simple%20storage%20scandinavian%20furniture%20functional%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-tv-1&orientation=squarish',
      features: ['تخزين ذكي', 'خطوط بسيطة', 'خشب طبيعي']
    },
    {
      id: 6,
      title: 'مرآة حائط بسيطة',
      category: 'decor',
      price: '1,200',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20wall%20mirror%20with%20simple%20round%20frame%20natural%20wood%20clean%20design%20scandinavian%20decor%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-mirror-1&orientation=squarish',
      features: ['إطار خشبي', 'تصميم دائري', 'بساطة']
    },
    {
      id: 7,
      title: 'كرسي استرخاء بسيط',
      category: 'living',
      price: '3,500',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20lounge%20chair%20with%20simple%20design%20natural%20fabric%20wooden%20legs%20scandinavian%20furniture%20comfortable%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-chair-1&orientation=squarish',
      features: ['قماش طبيعي', 'أرجل خشبية', 'راحة']
    },
    {
      id: 8,
      title: 'خزانة ملابس بسيطة',
      category: 'bedroom',
      price: '12,800',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20wardrobe%20with%20sliding%20doors%20clean%20design%20natural%20wood%20scandinavian%20bedroom%20furniture%20simple%20storage%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-wardrobe-1&orientation=squarish',
      features: ['أبواب منزلقة', 'تنظيم داخلي', 'خشب طبيعي']
    },
    {
      id: 9,
      title: 'إضاءة معلقة بسيطة',
      category: 'decor',
      price: '2,100',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20pendant%20light%20with%20simple%20geometric%20design%20natural%20materials%20clean%20lines%20scandinavian%20lighting%20fixture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-light-1&orientation=squarish',
      features: ['تصميم هندسي', 'إضاءة ناعمة', 'مواد طبيعية']
    },
    {
      id: 10,
      title: 'كراسي طعام بسيطة',
      category: 'dining',
      price: '2,800',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20dining%20chairs%20with%20clean%20lines%20natural%20wood%20simple%20design%20scandinavian%20furniture%20comfortable%20seats%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-chairs-1&orientation=squarish',
      features: ['خشب طبيعي', 'تصميم مريح', 'بساطة']
    },
    {
      id: 11,
      title: 'طاولة قهوة بسيطة',
      category: 'living',
      price: '2,400',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20coffee%20table%20with%20natural%20wood%20top%20simple%20legs%20clean%20design%20scandinavian%20living%20room%20furniture%20functional%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-coffee-1&orientation=squarish',
      features: ['سطح خشبي', 'تصميم عملي', 'خطوط نظيفة']
    },
    {
      id: 12,
      title: 'رفوف حائط بسيطة',
      category: 'decor',
      price: '980',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20floating%20wall%20shelves%20with%20natural%20wood%20clean%20design%20simple%20storage%20scandinavian%20decor%20functional%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=minimalist-shelf-1&orientation=squarish',
      features: ['تصميم معلق', 'خشب طبيعي', 'سهل التركيب']
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFF5E6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
            معرض المنتجات البسيطة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعتنا من الأثاث والديكور البسيط الوظيفي
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[#FFA500] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200'
              }`}
            >
              <i className={`${filter.icon} text-xl`}></i>
              <span>{filter.label}</span>
              {activeFilter === filter.id && (
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {filter.id === 'all' ? products.length : products.filter(p => p.category === filter.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#FFA500]/30 transition-all duration-500 hover:shadow-2xl cursor-pointer"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s forwards`,
                opacity: 0
              }}
            >
              <div className="relative h-80 overflow-hidden bg-gray-50">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
                <div className="absolute top-4 right-4 bg-[#FFA500] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {product.price} ر.س
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#001F3F] mb-3 group-hover:text-[#FFA500] transition-colors duration-300">
                  {product.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-[#001F3F] to-[#003366] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:from-[#FFA500] group-hover:to-[#FF8C00] whitespace-nowrap cursor-pointer">
                  <span>عرض التفاصيل</span>
                  <i className="ri-arrow-left-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
