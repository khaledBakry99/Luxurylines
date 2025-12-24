'use client';

import { useState } from 'react';

export default function LuxuryGallery() {
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
      title: 'طقم صالون فاخر مطعم بالذهب',
      category: 'living',
      price: '45,000',
      image: 'https://readdy.ai/api/search-image?query=luxury%20premium%20sofa%20set%20with%20gold%20accents%20velvet%20upholstery%20crystal%20buttons%20high%20end%20elegant%20furniture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-sofa-1&orientation=squarish',
      features: ['تطعيمات ذهبية', 'مخمل إيطالي', 'أزرار كريستال']
    },
    {
      id: 2,
      title: 'طاولة طعام رخام فاخرة',
      category: 'dining',
      price: '32,500',
      image: 'https://readdy.ai/api/search-image?query=luxury%20dining%20table%20with%20premium%20marble%20top%20gold%20metal%20base%20high%20end%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-table-1&orientation=squarish',
      features: ['رخام كرارا', 'قاعدة ذهبية', 'تصميم حصري']
    },
    {
      id: 3,
      title: 'سرير ملكي فاخر',
      category: 'bedroom',
      price: '38,900',
      image: 'https://readdy.ai/api/search-image?query=luxury%20royal%20bed%20with%20tufted%20headboard%20velvet%20upholstery%20gold%20accents%20crystal%20details%20high%20end%20bedroom%20furniture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-bed-1&orientation=squarish',
      features: ['تصميم ملكي', 'مخمل فاخر', 'تفاصيل كريستال']
    },
    {
      id: 4,
      title: 'مكتب تنفيذي فاخر',
      category: 'office',
      price: '28,700',
      image: 'https://readdy.ai/api/search-image?query=luxury%20executive%20desk%20with%20leather%20top%20gold%20details%20premium%20wood%20finish%20high%20end%20office%20furniture%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-desk-1&orientation=squarish',
      features: ['جلد طبيعي', 'خشب ماهوجني', 'تفاصيل ذهبية']
    },
    {
      id: 5,
      title: 'وحدة تلفزيون فاخرة',
      category: 'living',
      price: '19,800',
      image: 'https://readdy.ai/api/search-image?query=luxury%20tv%20unit%20with%20marble%20top%20gold%20accents%20glass%20shelves%20high%20end%20living%20room%20furniture%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-tv-1&orientation=squarish',
      features: ['رخام طبيعي', 'رفوف زجاجية', 'إضاءة LED']
    },
    {
      id: 6,
      title: 'مرآة حائط فاخرة',
      category: 'decor',
      price: '8,500',
      image: 'https://readdy.ai/api/search-image?query=luxury%20ornate%20wall%20mirror%20with%20gold%20leaf%20frame%20baroque%20style%20crystal%20accents%20high%20end%20decor%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-mirror-1&orientation=squarish',
      features: ['إطار مذهب', 'تفاصيل كريستال', 'حجم كبير']
    },
    {
      id: 7,
      title: 'كرسي استرخاء فاخر',
      category: 'living',
      price: '15,600',
      image: 'https://readdy.ai/api/search-image?query=luxury%20lounge%20chair%20with%20velvet%20upholstery%20gold%20legs%20tufted%20design%20high%20end%20furniture%20elegant%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-chair-1&orientation=squarish',
      features: ['مخمل فاخر', 'أرجل ذهبية', 'تصميم مبطن']
    },
    {
      id: 8,
      title: 'خزانة ملابس فاخرة',
      category: 'bedroom',
      price: '52,000',
      image: 'https://readdy.ai/api/search-image?query=luxury%20wardrobe%20with%20mirrored%20doors%20gold%20handles%20premium%20wood%20finish%20high%20end%20bedroom%20furniture%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-wardrobe-1&orientation=squarish',
      features: ['أبواب مرايا', 'مقابض ذهبية', 'تنظيم فاخر']
    },
    {
      id: 9,
      title: 'ثريا كريستال فاخرة',
      category: 'decor',
      price: '25,800',
      image: 'https://readdy.ai/api/search-image?query=luxury%20crystal%20chandelier%20with%20gold%20finish%20premium%20crystals%20elegant%20lighting%20fixture%20high%20end%20decor%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-light-1&orientation=squarish',
      features: ['كريستال سواروفسكي', 'إطار ذهبي', 'إضاءة فاخرة']
    },
    {
      id: 10,
      title: 'كراسي طعام فاخرة',
      category: 'dining',
      price: '12,400',
      image: 'https://readdy.ai/api/search-image?query=luxury%20dining%20chairs%20with%20velvet%20upholstery%20gold%20legs%20tufted%20backs%20high%20end%20furniture%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-chairs-1&orientation=squarish',
      features: ['ظهر مبطن', 'مخمل فاخر', 'أرجل ذهبية']
    },
    {
      id: 11,
      title: 'طاولة قهوة فاخرة',
      category: 'living',
      price: '14,200',
      image: 'https://readdy.ai/api/search-image?query=luxury%20coffee%20table%20with%20marble%20top%20gold%20metal%20frame%20glass%20shelf%20high%20end%20living%20room%20furniture%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-coffee-1&orientation=squarish',
      features: ['سطح رخامي', 'إطار ذهبي', 'رف زجاجي']
    },
    {
      id: 12,
      title: 'تحفة فنية فاخرة',
      category: 'decor',
      price: '6,800',
      image: 'https://readdy.ai/api/search-image?query=luxury%20decorative%20sculpture%20with%20gold%20finish%20crystal%20accents%20high%20end%20art%20piece%20elegant%20decor%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=luxury-art-1&orientation=squarish',
      features: ['تصميم فني', 'تشطيب ذهبي', 'قطعة حصرية']
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
            معرض المنتجات الفاخرة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعتنا الحصرية من الأثاث والديكور الفاخر
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
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full font-bold text-xs shadow-lg flex items-center gap-1">
                  <i className="ri-vip-crown-fill"></i>
                  <span>VIP</span>
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
