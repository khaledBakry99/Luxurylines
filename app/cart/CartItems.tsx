'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  discount?: number;
  inStock: boolean;
  status: 'pending' | 'in-progress' | 'completed' | 'review';
  statusText: string;
  progress?: number;
  date: string;
  type: 'product' | 'service';
  productLink?: string;
}

export default function CartItems() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showInvoice, setShowInvoice] = useState(false);
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'طقم أثاث غرفة المعيشة الحديث',
      price: 2500,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=modern%20living%20room%20furniture%20set%20with%20sofa%20and%20coffee%20table%20in%20neutral%20colors%2C%20clean%20background%2C%20professional%20product%20photography&width=300&height=200&seq=cart1&orientation=landscape',
      category: 'أثاث',
      discount: 10,
      inStock: true,
      status: 'completed',
      statusText: 'مكتمل',
      date: '2024-01-15',
      type: 'product',
      productLink: '/store/shop'
    },
    {
      id: '2',
      name: 'مصباح أرضي عصري',
      price: 350,
      quantity: 2,
      image: 'https://readdy.ai/api/search-image?query=modern%20floor%20lamp%20with%20sleek%20design%2C%20minimalist%20style%2C%20white%20background%2C%20product%20photography&width=300&height=200&seq=cart2&orientation=landscape',
      category: 'إضاءة',
      inStock: true,
      status: 'pending',
      statusText: 'قيد الانتظار',
      date: '2024-01-20',
      type: 'product',
      productLink: '/store/shop'
    },
    {
      id: '3',
      name: 'سجادة فاخرة مزخرفة',
      price: 800,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=luxury%20decorative%20carpet%20with%20elegant%20patterns%2C%20high%20quality%20texture%2C%20neutral%20background%2C%20product%20photography&width=300&height=200&seq=cart3&orientation=landscape',
      category: 'ديكور',
      discount: 15,
      inStock: true,
      status: 'in-progress',
      statusText: 'قيد التنفيذ',
      progress: 65,
      date: '2024-01-18',
      type: 'product',
      productLink: '/store/shop'
    },
    {
      id: '4',
      name: 'تصميم داخلي لفيلا سكنية',
      price: 150000,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Luxury%20villa%20interior%20design%2C%20modern%20Arabic%20style%20living%20room%2C%20elegant%20furniture%20arrangement%2C%20marble%20flooring%2C%20crystal%20chandelier%2C%20sophisticated%20color%20palette%2C%20professional%20architectural%20photography&width=300&height=200&seq=cart-interior-1&orientation=landscape',
      category: 'تصميم داخلي',
      inStock: true,
      status: 'in-progress',
      statusText: 'قيد التنفيذ',
      progress: 45,
      date: '2024-01-12',
      type: 'service'
    },
    {
      id: '5',
      name: 'تصميم خارجي لواجهة منزل',
      price: 95000,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20design%2C%20contemporary%20Arabic%20architecture%2C%20elegant%20facade%20with%20stone%20and%20glass%20elements%2C%20landscaped%20entrance%2C%20professional%20architectural%20rendering%2C%20beautiful%20lighting&width=300&height=200&seq=cart-exterior-1&orientation=landscape',
      category: 'تصميم خارجي',
      inStock: true,
      status: 'review',
      statusText: 'قيد المراجعة',
      date: '2024-01-10',
      type: 'service'
    },
    {
      id: '6',
      name: 'تشطيب شقة سكنية',
      price: 120000,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Apartment%20finishing%20work%2C%20modern%20interior%20construction%2C%20elegant%20flooring%20installation%2C%20wall%20painting%2C%20ceiling%20work%2C%20professional%20construction%20photography%2C%20clean%20organized%20workspace&width=300&height=200&seq=cart-finishing-1&orientation=landscape',
      category: 'التشطيب',
      inStock: true,
      status: 'in-progress',
      statusText: 'قيد التنفيذ',
      progress: 80,
      date: '2024-01-08',
      type: 'service'
    }
  ]);

  const filteredItems = cartItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.status === activeFilter;
  });

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateItemPrice = (item: CartItem) => {
    const basePrice = item.price * item.quantity;
    if (item.discount) {
      return basePrice - (basePrice * item.discount / 100);
    }
    return basePrice;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30';
      case 'in-progress':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/30';
      case 'review':
        return 'bg-amber-500/10 text-amber-700 border-amber-500/30';
      case 'pending':
        return 'bg-orange-500/10 text-orange-700 border-orange-500/30';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return 'ri-checkbox-circle-fill';
      case 'in-progress':
        return 'ri-time-fill';
      case 'review':
        return 'ri-file-list-3-fill';
      case 'pending':
        return 'ri-shopping-cart-fill';
      default:
        return 'ri-information-fill';
    }
  };

  const handleDownloadInvoice = (item: CartItem) => {
    setSelectedOrder(item);
    setShowInvoice(true);
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-16 text-center transform hover:scale-[1.02] transition-all duration-500 border border-gray-100">
        <div className="w-32 h-32 mx-auto mb-8 flex items-center justify-center bg-gradient-to-br from-orange-100 via-orange-50 to-white rounded-3xl shadow-lg">
          <i className="ri-shopping-cart-line text-6xl text-[#FFA500]"></i>
        </div>
        <h3 className="text-3xl font-bold text-[#001F3F] mb-4">السلة فارغة</h3>
        <p className="text-gray-600 mb-10 text-lg max-w-md mx-auto">لم تقم بإضافة أي منتجات أو خدمات إلى السلة بعد</p>
        <Link href="/store/shop">
          <button className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white px-10 py-5 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer font-bold text-lg">
            <span className="flex items-center gap-3">
              <i className="ri-store-2-line text-xl"></i>
              <span>تصفح المنتجات</span>
            </span>
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#001F3F] via-[#002855] to-[#001F3F] p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <i className="ri-shopping-bag-3-line text-2xl text-white"></i>
                  </div>
                  <span>سلة التسوق والطلبات</span>
                </h2>
                <p className="text-blue-200 flex items-center gap-2 mr-16">
                  <i className="ri-checkbox-circle-line"></i>
                  <span>{cartItems.length} عنصر في السلة</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 cursor-pointer whitespace-nowrap text-sm ${
                  activeFilter === 'all'
                    ? 'bg-white text-[#001F3F] shadow-xl scale-105'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <span className="flex items-center gap-2">
                  <i className="ri-list-check-2 text-lg"></i>
                  <span>الكل</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'all' ? 'bg-[#FFA500] text-white' : 'bg-white/20'}`}>
                    {cartItems.length}
                  </span>
                </span>
              </button>

              <button
                onClick={() => setActiveFilter('pending')}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 cursor-pointer whitespace-nowrap text-sm ${
                  activeFilter === 'pending'
                    ? 'bg-white text-[#001F3F] shadow-xl scale-105'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <span className="flex items-center gap-2">
                  <i className="ri-shopping-cart-line text-lg"></i>
                  <span>قيد الانتظار</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'pending' ? 'bg-orange-500 text-white' : 'bg-white/20'}`}>
                    {cartItems.filter(i => i.status === 'pending').length}
                  </span>
                </span>
              </button>

              <button
                onClick={() => setActiveFilter('in-progress')}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 cursor-pointer whitespace-nowrap text-sm ${
                  activeFilter === 'in-progress'
                    ? 'bg-white text-[#001F3F] shadow-xl scale-105'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <span className="flex items-center gap-2">
                  <i className="ri-time-line text-lg"></i>
                  <span>قيد التنفيذ</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'in-progress' ? 'bg-blue-500 text-white' : 'bg-white/20'}`}>
                    {cartItems.filter(i => i.status === 'in-progress').length}
                  </span>
                </span>
              </button>

              <button
                onClick={() => setActiveFilter('review')}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 cursor-pointer whitespace-nowrap text-sm ${
                  activeFilter === 'review'
                    ? 'bg-white text-[#001F3F] shadow-xl scale-105'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <span className="flex items-center gap-2">
                  <i className="ri-file-list-3-line text-lg"></i>
                  <span>قيد المراجعة</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'review' ? 'bg-amber-500 text-white' : 'bg-white/20'}`}>
                    {cartItems.filter(i => i.status === 'review').length}
                  </span>
                </span>
              </button>

              <button
                onClick={() => setActiveFilter('completed')}
                className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 cursor-pointer whitespace-nowrap text-sm ${
                  activeFilter === 'completed'
                    ? 'bg-white text-[#001F3F] shadow-xl scale-105'
                    : 'bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40'
                }`}
              >
                <span className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-lg"></i>
                  <span>مكتملة</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${activeFilter === 'completed' ? 'bg-emerald-500 text-white' : 'bg-white/20'}`}>
                    {cartItems.filter(i => i.status === 'completed').length}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group"
              style={{ 
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0 
              }}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="relative overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-500 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full lg:w-56 h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {item.discount && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-xl backdrop-blur-sm flex items-center gap-1">
                        <i className="ri-percent-line"></i>
                        <span>خصم {item.discount}%</span>
                      </div>
                    )}
                    
                    {item.inStock && (
                      <div className="absolute bottom-3 left-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-1.5">
                        <i className="ri-checkbox-circle-fill"></i>
                        <span>متوفر</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`px-4 py-2 rounded-xl text-sm font-bold border-2 flex items-center gap-2 ${getStatusColor(item.status)}`}>
                              <i className={`${getStatusIcon(item.status)} text-base`}></i>
                              <span>{item.statusText}</span>
                            </span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-xl flex items-center gap-2 font-semibold">
                              <i className="ri-price-tag-3-line text-[#FFA500]"></i>
                              {item.category}
                            </span>
                          </div>
                          
                          <h3 className="font-bold text-[#001F3F] mb-3 text-2xl group-hover:text-[#FFA500] transition-colors duration-300 truncate">
                            {item.name}
                          </h3>
                          
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="text-sm text-gray-600 flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl">
                              <i className="ri-calendar-line text-[#FFA500]"></i>
                              <span className="font-semibold">{item.date}</span>
                            </span>
                            <span className="text-sm text-gray-600 flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl">
                              <i className="ri-hashtag text-[#FFA500]"></i>
                              <span className="font-semibold">رقم الطلب: {item.id}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {item.status === 'in-progress' && item.progress && (
                        <div className="mb-5 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-bold text-[#001F3F] flex items-center gap-2">
                              <i className="ri-line-chart-line text-[#FFA500]"></i>
                              نسبة الإنجاز
                            </span>
                            <span className="text-lg font-bold text-[#FFA500]">{item.progress}%</span>
                          </div>
                          <div className="w-full bg-white rounded-full h-4 overflow-hidden shadow-inner">
                            <div
                              className="bg-gradient-to-r from-[#FFA500] via-[#ff9500] to-[#ff8c00] h-4 rounded-full transition-all duration-1000 relative overflow-hidden"
                              style={{ width: `${item.progress}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4 mb-5">
                        {item.discount ? (
                          <>
                            <p className="text-3xl font-bold text-[#FFA500]">{calculateItemPrice(item).toFixed(2)} ر.س</p>
                            <p className="text-lg text-gray-400 line-through">{(item.price * item.quantity).toFixed(2)} ر.س</p>
                            <span className="text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1.5 rounded-xl font-bold shadow-lg">
                              وفر {((item.price * item.quantity) - calculateItemPrice(item)).toFixed(2)} ر.س
                            </span>
                          </>
                        ) : (
                          <p className="text-3xl font-bold text-[#FFA500]">{(item.price * item.quantity).toFixed(2)} ر.س</p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      {item.status === 'pending' && (
                        <div className="flex items-center border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#FFA500] transition-all duration-300 bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-12 h-12 flex items-center justify-center hover:bg-[#FFA500] hover:text-white transition-all duration-300 cursor-pointer group/btn"
                          >
                            <i className="ri-subtract-line text-xl group-hover/btn:scale-125 transition-transform"></i>
                          </button>
                          <span className="w-16 text-center text-lg font-bold bg-gray-50">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-12 h-12 flex items-center justify-center hover:bg-[#FFA500] hover:text-white transition-all duration-300 cursor-pointer group/btn"
                          >
                            <i className="ri-add-line text-xl group-hover/btn:scale-125 transition-transform"></i>
                          </button>
                        </div>
                      )}

                      {item.type === 'product' && item.productLink ? (
                        <Link href={item.productLink} className="flex-1">
                          <button className="w-full bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-4 px-8 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                            <span className="flex items-center justify-center gap-2">
                              <i className="ri-eye-line text-xl"></i>
                              <span>عرض التفاصيل</span>
                            </span>
                          </button>
                        </Link>
                      ) : (
                        <Link href="/contact" className="flex-1">
                          <button className="w-full bg-gradient-to-r from-[#001F3F] to-[#003366] text-white py-4 px-8 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap">
                            <span className="flex items-center justify-center gap-2">
                              <i className="ri-customer-service-2-line text-xl"></i>
                              <span>تواصل معنا</span>
                            </span>
                          </button>
                        </Link>
                      )}

                      <button 
                        onClick={() => handleDownloadInvoice(item)}
                        className="px-8 py-4 bg-white border-2 border-[#FFA500] text-[#FFA500] rounded-2xl font-bold hover:bg-[#FFA500] hover:text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                      >
                        <span className="flex items-center gap-2">
                          <i className="ri-file-text-line text-xl"></i>
                          <span>الفاتورة</span>
                        </span>
                      </button>

                      {item.status === 'pending' && (
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-12 h-12 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white rounded-2xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl transform hover:scale-110 group/del border-2 border-red-200 hover:border-red-500"
                        >
                          <i className="ri-delete-bin-line text-xl group-hover/del:animate-bounce"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="bg-white rounded-3xl shadow-xl p-16 text-center border border-gray-100">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <i className="ri-inbox-line text-6xl text-gray-400"></i>
            </div>
            <h3 className="text-3xl font-bold text-[#001F3F] mb-4">لا توجد عناصر</h3>
            <p className="text-gray-600 text-lg mb-8">لم يتم العثور على عناصر في هذه الفئة</p>
          </div>
        )}
      </div>

      {showInvoice && selectedOrder && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[10000] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="p-10" id="invoice-content">
              <div className="flex items-center justify-between mb-10 pb-8 border-b-2 border-gray-200">
                <div className="flex items-center space-x-5 space-x-reverse">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-4xl font-['Pacifico']">L</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold font-['Pacifico'] text-[#001F3F]">Luxurylines</h2>
                    <p className="text-sm text-gray-600 mt-1">التصميم الداخلي والديكور</p>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-[#001F3F] mb-2">فاتورة</h3>
                  <p className="text-sm text-gray-600">رقم الطلب: #{selectedOrder.id}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 mb-10">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="text-sm font-bold text-[#001F3F] mb-4 flex items-center gap-2">
                    <i className="ri-building-line text-[#FFA500]"></i>
                    معلومات الشركة
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-map-pin-line text-[#FFA500]"></i>
                      <span>الرياض، المملكة العربية السعودية</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-whatsapp-line text-[#FFA500]"></i>
                      <span>+966 50 123 4567</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-mail-line text-[#FFA500]"></i>
                      <span>info@luxurylines.sa</span>
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="text-sm font-bold text-[#001F3F] mb-4 flex items-center gap-2">
                    <i className="ri-user-line text-[#FFA500]"></i>
                    معلومات العميل
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-user-3-line text-[#FFA500]"></i>
                      <span>عميل مميز</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-calendar-line text-[#FFA500]"></i>
                      <span>تاريخ الطلب: {selectedOrder.date}</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-bookmark-line text-[#FFA500]"></i>
                      <span>الحالة: {selectedOrder.statusText}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                  <div className="flex items-start space-x-6 space-x-reverse">
                    <img
                      src={selectedOrder.image}
                      alt={selectedOrder.name}
                      className="w-40 h-40 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#001F3F] mb-3">{selectedOrder.name}</h4>
                      <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                        <i className="ri-price-tag-3-line text-[#FFA500]"></i>
                        {selectedOrder.category}
                      </p>
                      <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                        <i className="ri-shopping-bag-line text-[#FFA500]"></i>
                        الكمية: {selectedOrder.quantity}
                      </p>
                      {selectedOrder.progress && (
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-[#001F3F]">نسبة الإنجاز</span>
                            <span className="text-xs font-bold text-[#FFA500]">{selectedOrder.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] h-3 rounded-full"
                              style={{ width: `${selectedOrder.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-8 mb-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-gray-700 text-lg">
                    <span className="font-semibold">المبلغ الأساسي:</span>
                    <span className="font-bold">{(selectedOrder.price * selectedOrder.quantity).toFixed(2)} ر.س</span>
                  </div>
                  {selectedOrder.discount && (
                    <div className="flex items-center justify-between text-emerald-600 text-lg">
                      <span className="font-semibold">الخصم ({selectedOrder.discount}%):</span>
                      <span className="font-bold">-{((selectedOrder.price * selectedOrder.quantity) * selectedOrder.discount / 100).toFixed(2)} ر.س</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-gray-700 text-lg">
                    <span className="font-semibold">الضريبة (15%):</span>
                    <span className="font-bold">{(((selectedOrder.price * selectedOrder.quantity) - (selectedOrder.discount ? (selectedOrder.price * selectedOrder.quantity) * selectedOrder.discount / 100 : 0)) * 0.15).toFixed(2)} ر.س</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4 flex items-center justify-between bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl">
                    <span className="text-2xl font-bold text-[#001F3F]">المجموع الكلي:</span>
                    <span className="text-3xl font-bold text-[#FFA500]">{(((selectedOrder.price * selectedOrder.quantity) - (selectedOrder.discount ? (selectedOrder.price * selectedOrder.quantity) * selectedOrder.discount / 100 : 0)) * 1.15).toFixed(2)} ر.س</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] rounded-2xl p-8 text-center text-white">
                <p className="text-lg mb-2 font-semibold">شكراً لثقتكم بنا</p>
                <p className="text-sm opacity-90">نسعد بخدمتكم دائماً في Luxurylines</p>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 p-8 flex items-center justify-between bg-gradient-to-r from-gray-50 to-blue-50 rounded-b-3xl">
              <button
                onClick={() => setShowInvoice(false)}
                className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="flex items-center space-x-2 space-x-reverse">
                  <i className="ri-close-line text-xl"></i>
                  <span>إغلاق</span>
                </span>
              </button>
              <button
                onClick={handlePrintInvoice}
                className="px-8 py-4 bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="flex items-center space-x-2 space-x-reverse">
                  <i className="ri-download-2-line text-xl"></i>
                  <span>تحميل الفاتورة</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
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
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </>
  );
}
