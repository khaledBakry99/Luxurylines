'use client';

import { useState } from 'react';

export default function CollectionGallery() {
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
      title: 'طقم صالون عصري فاخر',
      category: 'living',
      price: '15,500',
      image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20living%20room%20sofa%20set%20with%20clean%20lines%20gray%20upholstery%20metal%20legs%20contemporary%20design%20minimalist%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-sofa-1&orientation=squarish',
      features: ['قماش فاخر', 'تصميم مريح', 'ألوان محايدة']
    },
    {
      id: 2,
      title: 'طاولة طعام معاصرة',
      category: 'dining',
      price: '8,900',
      image: 'https://readdy.ai/api/search-image?query=modern%20contemporary%20dining%20table%20with%20marble%20top%20sleek%20metal%20base%20minimalist%20design%20elegant%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-table-1&orientation=squarish',
      features: ['رخام طبيعي', 'قاعدة معدنية', 'تصميم أنيق']
    },
    {
      id: 3,
      title: 'سرير عصري بتصميم بسيط',
      category: 'bedroom',
      price: '12,300',
      image: 'https://readdy.ai/api/search-image?query=modern%20minimalist%20bed%20frame%20with%20upholstered%20headboard%20clean%20lines%20neutral%20colors%20contemporary%20bedroom%20furniture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-bed-1&orientation=squarish',
      features: ['مخمل فاخر', 'تخزين مدمج', 'راحة قصوى']
    },
    {
      id: 4,
      title: 'مكتب عمل عصري',
      category: 'office',
      price: '6,750',
      image: 'https://readdy.ai/api/search-image?query=modern%20office%20desk%20with%20clean%20design%20wooden%20top%20metal%20frame%20minimalist%20workspace%20furniture%20contemporary%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-desk-1&orientation=squarish',
      features: ['خشب طبيعي', 'تصميم وظيفي', 'مساحة واسعة']
    },
    {
      id: 5,
      title: 'وحدة تلفزيون معاصرة',
      category: 'living',
      price: '5,200',
      image: 'https://readdy.ai/api/search-image?query=modern%20tv%20unit%20stand%20with%20sleek%20design%20storage%20compartments%20clean%20lines%20contemporary%20furniture%20minimalist%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-tv-1&orientation=squarish',
      features: ['تخزين ذكي', 'تصميم عملي', 'خامات متينة']
    },
    {
      id: 6,
      title: 'مرآة حائط عصرية',
      category: 'decor',
      price: '2,100',
      image: 'https://readdy.ai/api/search-image?query=modern%20wall%20mirror%20with%20geometric%20frame%20contemporary%20design%20sleek%20finish%20minimalist%20decor%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-mirror-1&orientation=squarish',
      features: ['إطار معدني', 'تصميم هندسي', 'جودة عالية']
    },
    {
      id: 7,
      title: 'كرسي استرخاء عصري',
      category: 'living',
      price: '4,800',
      image: 'https://readdy.ai/api/search-image?query=modern%20lounge%20chair%20with%20curved%20design%20comfortable%20upholstery%20metal%20legs%20contemporary%20furniture%20minimalist%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-chair-1&orientation=squarish',
      features: ['تصميم مريح', 'قماش ناعم', 'أرجل معدنية']
    },
    {
      id: 8,
      title: 'خزانة ملابس عصرية',
      category: 'bedroom',
      price: '18,500',
      image: 'https://readdy.ai/api/search-image?query=modern%20wardrobe%20closet%20with%20sliding%20doors%20clean%20design%20ample%20storage%20contemporary%20bedroom%20furniture%20minimalist%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-wardrobe-1&orientation=squarish',
      features: ['أبواب منزلقة', 'تنظيم داخلي', 'مساحة كبيرة']
    },
    {
      id: 9,
      title: 'ثريا معاصرة فاخرة',
      category: 'decor',
      price: '7,200',
      image: 'https://readdy.ai/api/search-image?query=modern%20contemporary%20chandelier%20with%20geometric%20design%20metal%20finish%20elegant%20lighting%20fixture%20minimalist%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-light-1&orientation=squarish',
      features: ['إضاءة LED', 'تصميم فني', 'توفير طاقة']
    },
    {
      id: 10,
      title: 'كراسي طعام عصرية',
      category: 'dining',
      price: '3,600',
      image: 'https://readdy.ai/api/search-image?query=modern%20dining%20chairs%20set%20with%20clean%20lines%20comfortable%20seats%20metal%20legs%20contemporary%20furniture%20minimalist%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-chairs-1&orientation=squarish',
      features: ['مقاعد مريحة', 'تصميم أنيق', 'متينة']
    },
    {
      id: 11,
      title: 'طاولة قهوة عصرية',
      category: 'living',
      price: '3,900',
      image: 'https://readdy.ai/api/search-image?query=modern%20coffee%20table%20with%20glass%20top%20metal%20frame%20contemporary%20design%20minimalist%20living%20room%20furniture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-coffee-1&orientation=squarish',
      features: ['سطح زجاجي', 'قاعدة معدنية', 'تصميم عملي']
    },
    {
      id: 12,
      title: 'رفوف حائط معاصرة',
      category: 'decor',
      price: '1,850',
      image: 'https://readdy.ai/api/search-image?query=modern%20wall%20shelves%20with%20floating%20design%20clean%20lines%20contemporary%20storage%20solution%20minimalist%20decor%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=modern-shelf-1&orientation=squarish',
      features: ['تصميم معلق', 'خشب عالي الجودة', 'سهل التركيب']
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
            معرض المنتجات العصرية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعتنا الكاملة من الأثاث والديكور العصري
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
