'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'كنبة فاخرة مودرن',
    category: 'أثاث',
    price: 12500,
    originalPrice: 15000,
    rating: 4.9,
    reviews: 127,
    image: 'https://readdy.ai/api/search-image?query=luxury%20modern%20sofa%20in%20elegant%20neutral%20beige%20color%20with%20premium%20velvet%20upholstery%20clean%20lines%20contemporary%20design%20and%20plush%20cushions%20on%20simple%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-sofa-1&orientation=squarish',
    badge: 'الأكثر مبيعاً',
    badgeColor: 'bg-red-500'
  },
  {
    id: 2,
    name: 'ثريا كريستال فاخرة',
    category: 'إضاءة',
    price: 8900,
    originalPrice: null,
    rating: 5.0,
    reviews: 89,
    image: 'https://readdy.ai/api/search-image?query=luxury%20crystal%20chandelier%20with%20elegant%20metallic%20gold%20finish%20sparkling%20glass%20crystals%20modern%20sophisticated%20design%20hanging%20fixture%20on%20clean%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-chandelier-1&orientation=squarish',
    badge: 'جديد',
    badgeColor: 'bg-green-500'
  },
  {
    id: 3,
    name: 'طاولة طعام رخام',
    category: 'أثاث',
    price: 9800,
    originalPrice: 11500,
    rating: 4.8,
    reviews: 156,
    image: 'https://readdy.ai/api/search-image?query=luxury%20marble%20dining%20table%20with%20elegant%20white%20and%20gold%20veined%20marble%20top%20modern%20metal%20base%20contemporary%20design%20on%20clean%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-table-1&orientation=squarish',
    badge: 'خصم 15%',
    badgeColor: 'bg-[#FFA500]'
  },
  {
    id: 4,
    name: 'مرآة حائط ذهبية',
    category: 'ديكور',
    price: 3200,
    originalPrice: null,
    rating: 4.7,
    reviews: 94,
    image: 'https://readdy.ai/api/search-image?query=luxury%20decorative%20wall%20mirror%20with%20elegant%20gold%20metallic%20frame%20ornate%20design%20sophisticated%20details%20on%20clean%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-mirror-1&orientation=squarish',
    badge: null,
    badgeColor: ''
  },
  {
    id: 5,
    name: 'كرسي استرخاء جلد',
    category: 'أثاث',
    price: 7500,
    originalPrice: 9000,
    rating: 4.9,
    reviews: 112,
    image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20lounge%20chair%20in%20rich%20brown%20color%20with%20premium%20genuine%20leather%20upholstery%20modern%20ergonomic%20design%20comfortable%20padding%20on%20clean%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-chair-1&orientation=squarish',
    badge: 'عرض خاص',
    badgeColor: 'bg-purple-500'
  },
  {
    id: 6,
    name: 'مجموعة وسائد حرير',
    category: 'منسوجات',
    price: 1800,
    originalPrice: null,
    rating: 4.6,
    reviews: 203,
    image: 'https://readdy.ai/api/search-image?query=luxury%20silk%20cushion%20set%20in%20elegant%20neutral%20tones%20with%20premium%20fabric%20soft%20texture%20decorative%20pillows%20sophisticated%20design%20on%20clean%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-cushions-1&orientation=squarish',
    badge: null,
    badgeColor: ''
  },
  {
    id: 7,
    name: 'لوحة فنية تجريدية',
    category: 'ديكور',
    price: 4500,
    originalPrice: null,
    rating: 4.8,
    reviews: 78,
    image: 'https://readdy.ai/api/search-image?query=luxury%20abstract%20art%20painting%20with%20elegant%20neutral%20colors%20gold%20accents%20modern%20sophisticated%20design%20framed%20artwork%20on%20clean%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-art-1&orientation=squarish',
    badge: 'حصري',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 8,
    name: 'سجادة فارسية فاخرة',
    category: 'منسوجات',
    price: 15000,
    originalPrice: 18000,
    rating: 5.0,
    reviews: 67,
    image: 'https://readdy.ai/api/search-image?query=luxury%20persian%20rug%20with%20elegant%20traditional%20patterns%20in%20neutral%20beige%20and%20cream%20colors%20premium%20quality%20handwoven%20design%20sophisticated%20details%20on%20clean%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-rug-1&orientation=squarish',
    badge: 'خصم 20%',
    badgeColor: 'bg-[#FFA500]'
  }
];

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-[#1C474A] to-[#0A2F33]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-[#CBC1B8]/10 rounded-full border border-[#CBC1B8]/20">
            <span className="text-[#CBC1B8] font-semibold text-sm">منتجات مميزة</span>
          </div>
          <h2 className="font-['Cairo'] text-4xl md:text-5xl font-bold text-white mb-4">
            الأكثر طلباً
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            اكتشف مجموعتنا المختارة من أفضل المنتجات الفاخرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-product-shop>
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-[#CBC1B8]/50 shadow-[#CBC1B8]/10 hover:shadow-[#CBC1B8]/30"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
                boxShadow: '0 4px 20px rgba(203, 193, 184, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="relative h-80 overflow-hidden bg-[#0A1F21]/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {product.badge && (
                  <div className={`absolute top-4 right-4 px-4 py-2 ${product.badgeColor} text-white text-sm font-semibold rounded-full shadow-lg`}>
                    {product.badge}
                  </div>
                )}

                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <i className={`${favorites.includes(product.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'} text-xl`}></i>
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={`/store/product/${product.id}`}
                    className="w-full px-6 py-3 bg-[#CBC1B8] text-[#0A1F21] font-semibold rounded-full hover:bg-[#F7F6F4] transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    <span>عرض التفاصيل</span>
                    <i className="ri-arrow-left-line"></i>
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-[#CBC1B8] font-semibold mb-2">{product.category}</div>
                <h3 className="font-['Cairo'] text-xl font-bold text-white mb-3 group-hover:text-[#CBC1B8] transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}></i>
                    ))}
                  </div>
                  <span className="text-sm text-white/70">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-white">{product.price.toLocaleString()} ر.س</span>
                  {product.originalPrice && (
                    <span className="text-lg text-white/50 line-through">{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                <button className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    <i className="ri-shopping-cart-line text-lg"></i>
                    <span>أضف للسلة</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1F21]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
            <Link 
              href="/store/shop"
              className="group bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-12 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/30 whitespace-nowrap"
            >
              <span className="flex items-center space-x-3 space-x-reverse">
                <i className="ri-grid-line text-xl"></i>
                <span>عرض جميع المنتجات</span>
                <i className="ri-arrow-left-line text-lg group-hover:translate-x-[-4px] transition-transform duration-300"></i>
              </span>
            </Link>
          </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        [data-product-shop] > div:hover {
          box-shadow: 
            0 8px 32px rgba(203, 193, 184, 0.25),
            0 4px 16px rgba(203, 193, 184, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(203, 193, 184, 0.1) !important;
        }
      `}</style>
    </section>
  );
}
