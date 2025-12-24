'use client';

import { useState } from 'react';

const categories = [
  { id: 'all', name: 'الكل', count: 487, icon: 'ri-apps-line' },
  { id: 'furniture', name: 'الأثاث', count: 156, icon: 'ri-sofa-line' },
  { id: 'lighting', name: 'الإضاءة', count: 89, icon: 'ri-lightbulb-line' },
  { id: 'decor', name: 'الديكور', count: 124, icon: 'ri-palette-line' },
  { id: 'textiles', name: 'المنسوجات', count: 67, icon: 'ri-t-shirt-line' },
  { id: 'kitchens', name: 'المطابخ', count: 51, icon: 'ri-restaurant-line' }
];

const subCategories: { [key: string]: string[] } = {
  furniture: ['كنب وأرائك', 'طاولات', 'كراسي', 'خزائن'],
  lighting: ['ثريات فاخرة', 'إضاءة مخفية', 'أباجورات', 'إضاءة LED'],
  decor: ['لوحات فنية', 'مرايا', 'تحف', 'نباتات زينة'],
  textiles: ['ستائر فاخرة', 'سجاد', 'وسائد', 'مفروشات'],
  kitchens: ['مطابخ خشب', 'ألمنيوم', 'رخام', 'أجهزة مدمجة']
};

const priceRanges = [
  { id: 'all', label: 'جميع الأسعار' },
  { id: '0-1000', label: 'أقل من 1,000 ر.س' },
  { id: '1000-5000', label: '1,000 - 5,000 ر.س' },
  { id: '5000-10000', label: '5,000 - 10,000 ر.س' },
  { id: '10000-20000', label: '10,000 - 20,000 ر.س' },
  { id: '20000+', label: 'أكثر من 20,000 ر.س' }
];

const sortOptions = [
  { id: 'popular', label: 'الأكثر شهرة' },
  { id: 'newest', label: 'الأحدث' },
  { id: 'price-low', label: 'السعر: من الأقل للأعلى' },
  { id: 'price-high', label: 'السعر: من الأعلى للأقل' },
  { id: 'rating', label: 'الأعلى تقييماً' }
];

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
    badgeColor: 'bg-red-500',
    colors: ['#D4C5B9', '#8B7355', '#2C2416']
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
    badgeColor: 'bg-green-500',
    colors: ['#FFD700', '#C0C0C0']
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
    badgeColor: 'bg-[#FFA500]',
    colors: ['#FFFFFF', '#000000', '#C9B037']
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
    badgeColor: '',
    colors: ['#FFD700', '#C9B037']
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
    badgeColor: 'bg-purple-500',
    colors: ['#8B4513', '#654321', '#000000']
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
    badgeColor: '',
    colors: ['#F5F5DC', '#D4C5B9', '#8B7355']
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
    badgeColor: 'bg-blue-500',
    colors: ['#C9B037', '#FFFFFF', '#000000']
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
    badgeColor: 'bg-[#FFA500]',
    colors: ['#F5F5DC', '#D4C5B9', '#8B4513']
  },
  {
    id: 9,
    name: 'إضاءة LED ذكية',
    category: 'إضاءة',
    price: 2400,
    originalPrice: null,
    rating: 4.7,
    reviews: 145,
    image: 'https://readdy.ai/api/search-image?query=luxury%20smart%20LED%20lighting%20fixture%20with%20elegant%20modern%20design%20sleek%20metallic%20finish%20contemporary%20style%20on%20clean%20white%20background%20professional%20product%20photography&width=600&height=600&seq=prod-led-1&orientation=squarish',
    badge: 'جديد',
    badgeColor: 'bg-green-500',
    colors: ['#FFFFFF', '#000000', '#C0C0C0']
  }
];

export default function ProductsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [quickView, setQuickView] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const selectedProduct = products.find(p => p.id === quickView);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 space-y-6">
            <div className="bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] rounded-2xl shadow-lg p-6 border-2 border-[#CBC1B8]/30">
              <h3 className="font-['Cairo'] text-xl font-bold text-[#F7F6F4] mb-4 flex items-center gap-2">
                <i className="ri-filter-3-line text-[#CBC1B8] text-2xl"></i>
                التصنيفات
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedSubCategory(null);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg font-bold'
                          : 'bg-[#1C474A]/50 text-[#F7F6F4] hover:bg-[#1C474A] border border-[#CBC1B8]/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <i className={`${cat.icon} text-lg`}></i>
                        <span className="font-semibold">{cat.name}</span>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full font-semibold ${
                        selectedCategory === cat.id ? 'bg-[#0A1F21]/20 text-[#0A1F21]' : 'bg-[#CBC1B8]/20 text-[#CBC1B8]'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                    
                    {selectedCategory === cat.id && subCategories[cat.id] && (
                      <div className="mt-2 mr-8 space-y-1">
                        {subCategories[cat.id].map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedSubCategory(sub)}
                            className={`w-full text-right px-3 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer ${
                              selectedSubCategory === sub
                                ? 'bg-[#CBC1B8]/30 text-[#F7F6F4] font-bold border border-[#CBC1B8]/50'
                                : 'text-[#F7F6F4]/80 hover:bg-[#1C474A]/50 hover:text-[#F7F6F4]'
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] rounded-2xl shadow-lg p-6 border-2 border-[#CBC1B8]/30">
              <h3 className="font-['Cairo'] text-xl font-bold text-[#F7F6F4] mb-4 flex items-center gap-2">
                <i className="ri-price-tag-3-line text-[#CBC1B8] text-2xl"></i>
                نطاق السعر
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={`w-full text-right px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                      selectedPrice === range.id
                        ? 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg font-bold'
                        : 'bg-[#1C474A]/50 text-[#F7F6F4] hover:bg-[#1C474A] border border-[#CBC1B8]/20'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] rounded-2xl shadow-lg p-6 mb-8 border-2 border-[#CBC1B8]/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#F7F6F4] font-semibold">عرض {products.length} منتج</span>
                  <div className="flex items-center gap-2 bg-[#1C474A]/50 rounded-xl p-1 border border-[#CBC1B8]/20">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        viewMode === 'grid' ? 'bg-[#CBC1B8] text-[#0A1F21]' : 'text-[#F7F6F4]/70 hover:bg-[#1C474A]'
                      }`}
                    >
                      <i className="ri-grid-line text-lg"></i>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                        viewMode === 'list' ? 'bg-[#CBC1B8] text-[#0A1F21]' : 'text-[#F7F6F4]/70 hover:bg-[#1C474A]'
                      }`}
                    >
                      <i className="ri-list-check text-lg"></i>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#F7F6F4] text-sm font-semibold">ترتيب حسب:</span>
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="px-4 py-2 pr-8 bg-[#1C474A]/50 border-2 border-[#CBC1B8]/30 rounded-xl text-[#F7F6F4] font-semibold focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'} data-product-shop>
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-[#CBC1B8]/50 shadow-[#CBC1B8]/10 hover:shadow-[#CBC1B8]/30 ${
                    viewMode === 'grid' ? 'hover:-translate-y-2' : 'flex gap-6'
                  }`}
                  style={{
                    animation: `fadeInScale 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                    boxShadow: '0 4px 20px rgba(203, 193, 184, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className={`relative overflow-hidden bg-gray-50 ${viewMode === 'grid' ? 'h-80' : 'w-64 h-64'}`}>
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
                      <i className={`${favorites.includes(product.id) ? 'ri-heart-fill' : 'ri-heart-line'} text-xl text-red-500`}></i>
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setQuickView(product.id)}
                        className="w-full px-6 py-3 bg-[#CBC1B8] text-[#0A1F21] font-semibold rounded-full hover:bg-[#F7F6F4] transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-eye-line"></i>
                        <span>معاينة سريعة</span>
                      </button>
                    </div>
                  </div>

                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
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

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-white">{product.price.toLocaleString()} ر.س</span>
                      {product.originalPrice && (
                        <span className="text-lg text-white/50 line-through">{product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>

                    <button className="w-full px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer relative overflow-hidden group">
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

            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                      page === 1
                        ? 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      {quickView && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-6" onClick={() => setQuickView(null)}>
          <div className="bg-gradient-to-br from-[#0F3A3E] to-[#1C474A] rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl border border-[#CBC1B8]/30 shadow-[#CBC1B8]/20" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] border-b border-white/20 px-5 py-4 flex items-center justify-between">
              <h2 className="font-['Cairo'] text-lg font-bold text-white">معاينة سريعة</h2>
              <button
                onClick={() => setQuickView(null)}
                className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 cursor-pointer text-white"
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(85vh-72px)] custom-scrollbar">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="relative h-80 bg-gray-50 rounded-2xl overflow-hidden">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover object-top"
                    />
                    {selectedProduct.badge && (
                      <div className={`absolute top-4 right-4 px-4 py-2 ${selectedProduct.badgeColor} text-white text-sm font-semibold rounded-full shadow-lg`}>
                        {selectedProduct.badge}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-sm text-white/70 font-semibold">الألوان المتاحة:</span>
                    <div className="flex gap-2">
                      {selectedProduct.colors.map((color, idx) => (
                        <button
                          key={idx}
                          className="w-7 h-7 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-[#CBC1B8] transition-colors duration-300 cursor-pointer"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-sm text-[#CBC1B8] font-semibold mb-2">{selectedProduct.category}</div>
                  <h3 className="font-['Cairo'] text-2xl font-bold text-white mb-3">
                    {selectedProduct.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`ri-star-${i < Math.floor(selectedProduct.rating) ? 'fill' : 'line'} text-yellow-400 text-base`}></i>
                      ))}
                    </div>
                    <span className="text-base font-semibold text-white">{selectedProduct.rating}</span>
                    <span className="text-white/70 text-sm">({selectedProduct.reviews} تقييم)</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/20">
                    <span className="text-3xl font-bold text-white">{selectedProduct.price.toLocaleString()} ر.س</span>
                    {selectedProduct.originalPrice && (
                      <>
                        <span className="text-xl text-white/50 line-through">{selectedProduct.originalPrice.toLocaleString()}</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full">
                          وفر {Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%
                        </span>
                      </>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-['Cairo'] text-base font-bold text-white mb-2">وصف المنتج</h4>
                    <p className="text-white/80 leading-relaxed text-sm">
                      منتج فاخر مصنوع من أجود الخامات العالمية، يجمع بين التصميم العصري والجودة العالية. 
                      مثالي للمساحات الحديثة ويضيف لمسة من الأناقة والفخامة لمنزلك.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-['Cairo'] text-base font-bold text-white mb-2">المميزات</h4>
                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 text-white/80 text-sm">
                        <i className="ri-checkbox-circle-fill text-green-400 text-base"></i>
                        <span>ضمان 5 سنوات</span>
                      </li>
                      <li className="flex items-center gap-2 text-white/80 text-sm">
                        <i className="ri-checkbox-circle-fill text-green-400 text-base"></i>
                        <span>شحن مجاني</span>
                      </li>
                      <li className="flex items-center gap-2 text-white/80 text-sm">
                        <i className="ri-checkbox-circle-fill text-green-400 text-base"></i>
                        <span>تركيب احترافي</span>
                      </li>
                      <li className="flex items-center gap-2 text-white/80 text-sm">
                        <i className="ri-checkbox-circle-fill text-green-400 text-base"></i>
                        <span>إمكانية الإرجاع خلال 30 يوم</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-['Cairo'] text-base font-bold text-white mb-2">الكمية</h4>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#CBC1B8] hover:text-[#0A1F21] rounded-lg transition-colors duration-300 cursor-pointer text-white"
                      >
                        <i className="ri-subtract-line"></i>
                      </button>
                      <span className="w-14 text-center text-lg font-bold text-white">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#CBC1B8] hover:text-[#0A1F21] rounded-lg transition-colors duration-300 cursor-pointer text-white"
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 px-5 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer relative overflow-hidden group">
                      <span className="relative z-10 flex items-center gap-2">
                        <i className="ri-shopping-cart-line text-lg"></i>
                        <span>أضف للسلة</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1F21]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                    <button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-red-500/20 rounded-full transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-red-500"
                    >
                      <i className={`${favorites.includes(selectedProduct.id) ? 'ri-heart-fill' : 'ri-heart-line'} text-xl text-red-500`}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
