'use client';

import { useState } from 'react';

export default function ClassicGallery() {
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
      title: 'طقم صالون كلاسيكي فاخر',
      category: 'living',
      price: '28,500',
      image: 'https://readdy.ai/api/search-image?query=classic%20luxury%20sofa%20set%20with%20ornate%20carved%20wood%20details%20rich%20velvet%20upholstery%20gold%20accents%20traditional%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-sofa-1&orientation=squarish',
      features: ['نقوش يدوية', 'قماش مخمل', 'تطعيمات ذهبية']
    },
    {
      id: 2,
      title: 'طاولة طعام كلاسيكية',
      category: 'dining',
      price: '16,900',
      image: 'https://readdy.ai/api/search-image?query=classic%20dining%20table%20with%20carved%20wooden%20legs%20ornate%20details%20rich%20wood%20finish%20traditional%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-table-1&orientation=squarish',
      features: ['خشب ماهوجني', 'نقوش فاخرة', 'تصميم أصيل']
    },
    {
      id: 3,
      title: 'سرير كلاسيكي ملكي',
      category: 'bedroom',
      price: '22,800',
      image: 'https://readdy.ai/api/search-image?query=classic%20royal%20bed%20with%20ornate%20headboard%20carved%20wood%20details%20luxurious%20upholstery%20traditional%20elegant%20bedroom%20furniture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-bed-1&orientation=squarish',
      features: ['تصميم ملكي', 'نقوش منحوتة', 'خامات فاخرة']
    },
    {
      id: 4,
      title: 'مكتب كلاسيكي فخم',
      category: 'office',
      price: '14,500',
      image: 'https://readdy.ai/api/search-image?query=classic%20executive%20desk%20with%20carved%20details%20rich%20wood%20finish%20ornate%20handles%20traditional%20office%20furniture%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-desk-1&orientation=squarish',
      features: ['خشب طبيعي', 'أدراج واسعة', 'تفاصيل منحوتة']
    },
    {
      id: 5,
      title: 'خزانة عرض كلاسيكية',
      category: 'living',
      price: '11,200',
      image: 'https://readdy.ai/api/search-image?query=classic%20display%20cabinet%20with%20glass%20doors%20carved%20wood%20details%20ornate%20design%20traditional%20furniture%20elegant%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-cabinet-1&orientation=squarish',
      features: ['أبواب زجاجية', 'إضاءة داخلية', 'نقوش فنية']
    },
    {
      id: 6,
      title: 'مرآة حائط كلاسيكية',
      category: 'decor',
      price: '4,800',
      image: 'https://readdy.ai/api/search-image?query=classic%20ornate%20wall%20mirror%20with%20carved%20gold%20frame%20baroque%20style%20traditional%20elegant%20decor%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-mirror-1&orientation=squarish',
      features: ['إطار ذهبي', 'نقوش باروك', 'حجم كبير']
    },
    {
      id: 7,
      title: 'كرسي استرخاء كلاسيكي',
      category: 'living',
      price: '8,900',
      image: 'https://readdy.ai/api/search-image?query=classic%20armchair%20with%20carved%20wood%20frame%20rich%20upholstery%20ornate%20details%20traditional%20elegant%20furniture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-chair-1&orientation=squarish',
      features: ['تصميم مريح', 'قماش فاخر', 'أرجل منحوتة']
    },
    {
      id: 8,
      title: 'خزانة ملابس كلاسيكية',
      category: 'bedroom',
      price: '32,500',
      image: 'https://readdy.ai/api/search-image?query=classic%20wardrobe%20with%20carved%20doors%20ornate%20details%20rich%20wood%20finish%20traditional%20bedroom%20furniture%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-wardrobe-1&orientation=squarish',
      features: ['أبواب منحوتة', 'مرايا كبيرة', 'تنظيم فاخر']
    },
    {
      id: 9,
      title: 'ثريا كريستال كلاسيكية',
      category: 'decor',
      price: '15,600',
      image: 'https://readdy.ai/api/search-image?query=classic%20crystal%20chandelier%20with%20ornate%20design%20gold%20finish%20elegant%20lighting%20fixture%20traditional%20style%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-light-1&orientation=squarish',
      features: ['كريستال نقي', 'تصميم فاخر', 'إضاءة ساحرة']
    },
    {
      id: 10,
      title: 'كراسي طعام كلاسيكية',
      category: 'dining',
      price: '7,200',
      image: 'https://readdy.ai/api/search-image?query=classic%20dining%20chairs%20with%20carved%20backs%20upholstered%20seats%20ornate%20details%20traditional%20elegant%20furniture%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-chairs-1&orientation=squarish',
      features: ['ظهر منحوت', 'مقاعد مبطنة', 'تصميم أنيق']
    },
    {
      id: 11,
      title: 'طاولة قهوة كلاسيكية',
      category: 'living',
      price: '6,500',
      image: 'https://readdy.ai/api/search-image?query=classic%20coffee%20table%20with%20carved%20legs%20marble%20top%20ornate%20details%20traditional%20living%20room%20furniture%20elegant%20design%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-coffee-1&orientation=squarish',
      features: ['سطح رخامي', 'أرجل منحوتة', 'تفاصيل ذهبية']
    },
    {
      id: 12,
      title: 'ساعة حائط كلاسيكية',
      category: 'decor',
      price: '3,200',
      image: 'https://readdy.ai/api/search-image?query=classic%20wall%20clock%20with%20ornate%20frame%20gold%20finish%20roman%20numerals%20traditional%20elegant%20decor%20professional%20product%20photography%20simple%20white%20background&width=600&height=600&seq=classic-clock-1&orientation=squarish',
      features: ['إطار فاخر', 'أرقام رومانية', 'آلية دقيقة']
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
            معرض المنتجات الكلاسيكية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف مجموعتنا الفاخرة من الأثاث والديكور الكلاسيكي الأصيل
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
