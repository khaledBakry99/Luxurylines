'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProductCategories() {
  const [activeTab, setActiveTab] = useState('all');

  const collections = [
    {
      id: 'modern',
      title: 'التصميم العصري',
      description: 'قطع أنيقة بتصاميم معاصرة',
      image: 'https://readdy.ai/api/search-image?query=modern%20minimalist%20interior%20design%20furniture%20collection%20with%20sleek%20lines%20clean%20white%20surfaces%20contemporary%20lighting%20fixtures%20and%20elegant%20decor%20items%2C%20professional%20product%20photography%20with%20simple%20white%20background&width=600&height=400&seq=modern-collection&orientation=landscape',
      products: 120,
      icon: 'ri-building-line',
      link: '/store/collections/modern'
    },
    {
      id: 'classic',
      title: 'التصميم الكلاسيكي',
      description: 'أثاث فاخر بلمسات تقليدية',
      image: 'https://readdy.ai/api/search-image?query=classic%20luxury%20interior%20design%20furniture%20collection%20with%20ornate%20details%20rich%20wood%20finishes%20elegant%20traditional%20decor%20items%20and%20sophisticated%20accessories%2C%20professional%20product%20photography%20with%20simple%20white%20background&width=600&height=400&seq=classic-collection&orientation=landscape',
      products: 95,
      icon: 'ri-ancient-pavilion-line',
      link: '/store/collections/classic'
    },
    {
      id: 'luxury',
      title: 'التصميم الفاخر',
      description: 'منتجات حصرية عالية الجودة',
      image: 'https://readdy.ai/api/search-image?query=luxury%20premium%20interior%20design%20furniture%20collection%20with%20gold%20accents%20marble%20surfaces%20crystal%20chandeliers%20and%20high%20end%20decor%20items%2C%20professional%20product%20photography%20with%20simple%20white%20background&width=600&height=400&seq=luxury-collection&orientation=landscape',
      products: 78,
      icon: 'ri-vip-crown-line',
      link: '/store/collections/luxury'
    },
    {
      id: 'minimalist',
      title: 'التصميم البسيط',
      description: 'بساطة وأناقة في كل قطعة',
      image: 'https://readdy.ai/api/search-image?query=minimalist%20scandinavian%20interior%20design%20furniture%20collection%20with%20simple%20clean%20lines%20neutral%20colors%20natural%20materials%20and%20functional%20decor%20items%2C%20professional%20product%20photography%20with%20simple%20white%20background&width=600&height=400&seq=minimalist-collection&orientation=landscape',
      products: 110,
      icon: 'ri-layout-line',
      link: '/store/collections/minimalist'
    }
  ];

  const brands = [
    { name: 'ايكيا', logo: 'ri-home-4-line', products: 150 },
    { name: 'هوم سنتر', logo: 'ri-store-2-line', products: 120 },
    { name: 'بان إيميرتس', logo: 'ri-building-2-line', products: 95 },
    { name: 'ذا ون', logo: 'ri-shopping-bag-3-line', products: 88 },
    { name: 'سنتربوينت', logo: 'ri-store-3-line', products: 75 },
    { name: 'مذركير', logo: 'ri-home-smile-line', products: 65 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/10 rounded-full mb-6">
            <i className="ri-store-2-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">مجموعات مميزة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            استكشف مجموعاتنا الحصرية
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            تصاميم متنوعة تناسب جميع الأذواق والأنماط، من العصري إلى الكلاسيكي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href={collection.link}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/20 hover:border-[#CBC1B8]/50 transition-all duration-500 cursor-pointer shadow-[0_4px_20px_rgba(203,193,184,0.2)] hover:shadow-[0_8px_32px_rgba(203,193,184,0.35)]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${collection.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F21]/90 via-[#0A1F21]/50 to-transparent"></div>
                
                <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  <i className={`${collection.icon} text-2xl text-[#0A1F21]`}></i>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#CBC1B8] font-semibold">
                      {collection.products} منتج
                    </span>
                    <div className="flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>استكشف</span>
                      <i className="ri-arrow-left-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-xl border-2 border-white/20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/10 rounded-full mb-6">
              <i className="ri-award-line text-[#CBC1B8] text-lg ml-2"></i>
              <span className="text-[#CBC1B8] font-semibold">علامات تجارية موثوقة</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              نتعاون مع أفضل العلامات التجارية
            </h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              شراكات حصرية مع أشهر العلامات التجارية لضمان أعلى معايير الجودة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-[#CBC1B8]/50 transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(28,71,74,0.3)] hover:shadow-[0_8px_32px_rgba(28,71,74,0.45)]"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <i className={`${brand.logo} text-3xl text-[#0A1F21]`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#CBC1B8] transition-colors duration-300">
                    {brand.name}
                  </h4>
                  <p className="text-sm text-white/70">
                    {brand.products} منتج
                  </p>
                </div>
              </div>
            ))}
          </div>
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}