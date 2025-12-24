'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FavoritesList() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      type: 'product',
      name: 'طقم صالون فاخر - كلاسيك',
      price: '25,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20classic%20living%20room%20furniture%20set%2C%20elegant%20sofa%2C%20premium%20upholstery%2C%20sophisticated%20design%2C%20high-end%20materials%2C%20professional%20product%20photography%2C%20white%20background&width=400&height=300&seq=fav-1&orientation=landscape',
      category: 'أثاث'
    },
    {
      id: 2,
      type: 'design',
      name: 'تصميم غرفة نوم عصرية',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20bedroom%20interior%20design%2C%20elegant%20furniture%2C%20sophisticated%20lighting%2C%20premium%20materials%2C%20contemporary%20style%2C%20professional%20photography%2C%20clean%20aesthetic&width=400&height=300&seq=fav-2&orientation=landscape',
      category: 'تصاميم'
    },
    {
      id: 3,
      type: 'product',
      name: 'طاولة طعام رخام إيطالي',
      price: '18,500 ريال',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20Italian%20marble%20dining%20table%2C%20elegant%20design%2C%20premium%20quality%2C%20modern%20style%2C%20professional%20product%20photography%2C%20white%20background&width=400&height=300&seq=fav-3&orientation=landscape',
      category: 'أثاث'
    },
    {
      id: 4,
      type: 'design',
      name: 'تصميم مطبخ مودرن',
      image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20kitchen%20interior%20design%2C%20sleek%20cabinets%2C%20premium%20appliances%2C%20elegant%20lighting%2C%20contemporary%20style%2C%20professional%20photography&width=400&height=300&seq=fav-4&orientation=landscape',
      category: 'تصاميم'
    },
    {
      id: 5,
      type: 'product',
      name: 'ثريا كريستال فاخرة',
      price: '12,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20crystal%20chandelier%2C%20elegant%20design%2C%20premium%20quality%2C%20sparkling%20crystals%2C%20professional%20product%20photography%2C%20white%20background&width=400&height=300&seq=fav-5&orientation=landscape',
      category: 'إضاءة'
    },
    {
      id: 6,
      type: 'design',
      name: 'تصميم حمام فاخر',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20bathroom%20interior%20design%2C%20elegant%20fixtures%2C%20premium%20marble%2C%20sophisticated%20lighting%2C%20contemporary%20style%2C%20professional%20photography&width=400&height=300&seq=fav-6&orientation=landscape',
      category: 'تصاميم'
    }
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {favorites.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#001F3F]">
                  لديك {favorites.length} عنصر في المفضلة
                </h2>
                <button
                  onClick={() => setFavorites([])}
                  className="text-red-600 hover:text-red-700 font-semibold flex items-center space-x-2 space-x-reverse cursor-pointer"
                >
                  <i className="ri-delete-bin-line text-lg"></i>
                  <span>مسح الكل</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                      />
                      <button
                        onClick={() => removeFavorite(item.id)}
                        className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer group/btn"
                      >
                        <i className="ri-heart-fill text-red-500 group-hover/btn:text-white text-xl"></i>
                      </button>
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#FFA500] text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#001F3F] mb-3">{item.name}</h3>
                      
                      {item.price && (
                        <p className="text-2xl font-bold text-[#FFA500] mb-4">{item.price}</p>
                      )}

                      <div className="flex items-center space-x-3 space-x-reverse">
                        {item.type === 'product' ? (
                          <>
                            <Link href="/cart" className="flex-1">
                              <button className="w-full bg-[#FFA500] text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#e6940a] transition-all duration-300 cursor-pointer whitespace-nowrap">
                                <span className="flex items-center justify-center space-x-2 space-x-reverse">
                                  <i className="ri-shopping-cart-line"></i>
                                  <span>أضف للسلة</span>
                                </span>
                              </button>
                            </Link>
                            <Link href={`/store/product/${item.id}`}>
                              <button className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                                <i className="ri-eye-line text-[#001F3F] text-lg"></i>
                              </button>
                            </Link>
                          </>
                        ) : (
                          <Link href={`/projects/${item.id}`} className="flex-1">
                            <button className="w-full bg-[#FFA500] text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#e6940a] transition-all duration-300 cursor-pointer whitespace-nowrap">
                              <span className="flex items-center justify-center space-x-2 space-x-reverse">
                                <i className="ri-eye-line"></i>
                                <span>عرض التصميم</span>
                              </span>
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-gray-400 text-6xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-700 mb-4">لا توجد عناصر في المفضلة</h3>
              <p className="text-gray-500 text-lg mb-8">ابدأ بإضافة تصاميمك ومنتجاتك المفضلة</p>
              <div className="flex items-center justify-center space-x-4 space-x-reverse">
                <Link href="/store">
                  <button className="bg-[#FFA500] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e6940a] transition-all duration-300 cursor-pointer whitespace-nowrap">
                    <span className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-store-line text-xl"></i>
                      <span>تصفح المتجر</span>
                    </span>
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="bg-white border-2 border-[#FFA500] text-[#FFA500] px-8 py-4 rounded-xl font-semibold hover:bg-[#FFA500] hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap">
                    <span className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-building-line text-xl"></i>
                      <span>شاهد المشاريع</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
