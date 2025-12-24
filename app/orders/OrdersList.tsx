'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function OrdersList() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showInvoice, setShowInvoice] = useState(false);

  const orders = [
    {
      id: 1,
      type: 'product',
      title: 'طقم أريكة فاخرة - كلاسيك',
      category: 'منتج من المتجر',
      date: '2024-01-15',
      status: 'completed',
      statusText: 'مكتمل',
      price: '25,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20classic%20sofa%20set%2C%20elegant%20beige%20fabric%20upholstery%2C%20ornate%20wooden%20frame%20with%20gold%20accents%2C%20tufted%20cushions%2C%20sophisticated%20living%20room%20furniture%2C%20professional%20product%20photography%2C%20clean%20white%20background&width=400&height=300&seq=order-sofa-1&orientation=landscape',
      productLink: '/store/shop'
    },
    {
      id: 2,
      type: 'service',
      title: 'تصميم داخلي لفيلا سكنية',
      category: 'تصميم داخلي',
      date: '2024-01-10',
      status: 'in-progress',
      statusText: 'قيد التنفيذ',
      progress: 65,
      price: '150,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20villa%20interior%20design%2C%20modern%20Arabic%20style%20living%20room%2C%20elegant%20furniture%20arrangement%2C%20marble%20flooring%2C%20crystal%20chandelier%2C%20sophisticated%20color%20palette%2C%20professional%20architectural%20photography&width=400&height=300&seq=order-interior-1&orientation=landscape'
    },
    {
      id: 3,
      type: 'product',
      title: 'طاولة طعام خشبية فاخرة',
      category: 'منتج من المتجر',
      date: '2024-01-08',
      status: 'completed',
      statusText: 'مكتمل',
      price: '18,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20wooden%20dining%20table%2C%20rich%20dark%20wood%20finish%2C%20elegant%20design%20with%20carved%20details%2C%20seats%20eight%20people%2C%20formal%20dining%20room%20furniture%2C%20professional%20product%20photography%2C%20clean%20background&width=400&height=300&seq=order-table-1&orientation=landscape',
      productLink: '/store/shop'
    },
    {
      id: 4,
      type: 'service',
      title: 'تصميم خارجي لواجهة منزل',
      category: 'تصميم خارجي',
      date: '2024-01-05',
      status: 'in-progress',
      statusText: 'قيد التنفيذ',
      progress: 40,
      price: '95,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20design%2C%20contemporary%20Arabic%20architecture%2C%20elegant%20facade%20with%20stone%20and%20glass%20elements%2C%20landscaped%20entrance%2C%20professional%20architectural%20rendering%2C%20beautiful%20lighting&width=400&height=300&seq=order-exterior-1&orientation=landscape'
    },
    {
      id: 5,
      type: 'service',
      title: 'تشطيب شقة سكنية',
      category: 'التشطيب',
      date: '2024-01-03',
      status: 'in-progress',
      statusText: 'قيد التنفيذ',
      progress: 80,
      price: '120,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Apartment%20finishing%20work%2C%20modern%20interior%20construction%2C%20elegant%20flooring%20installation%2C%20wall%20painting%2C%20ceiling%20work%2C%20professional%20construction%20photography%2C%20clean%20organized%20workspace&width=400&height=300&seq=order-finishing-1&orientation=landscape'
    },
    {
      id: 6,
      type: 'product',
      title: 'مجموعة إضاءة كريستال',
      category: 'منتج من المتجر',
      date: '2024-01-01',
      status: 'completed',
      statusText: 'مكتمل',
      price: '12,500 ريال',
      image: 'https://readdy.ai/api/search-image?query=Crystal%20chandelier%20lighting%20set%2C%20elegant%20glass%20crystals%2C%20gold%20metal%20frame%2C%20luxury%20home%20lighting%20fixtures%2C%20sparkling%20illumination%2C%20professional%20product%20photography%2C%20white%20background&width=400&height=300&seq=order-lighting-1&orientation=landscape',
      productLink: '/store/shop'
    },
    {
      id: 7,
      type: 'service',
      title: 'توريد أثاث مكتبي',
      category: 'توريد الأساس',
      date: '2023-12-28',
      status: 'review',
      statusText: 'قيد المراجعة',
      price: '85,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Office%20furniture%20supply%2C%20modern%20executive%20desk%20and%20chairs%2C%20professional%20workspace%20setup%2C%20elegant%20business%20furniture%2C%20organized%20office%20environment%2C%20professional%20photography&width=400&height=300&seq=order-supply-1&orientation=landscape'
    },
    {
      id: 8,
      type: 'service',
      title: 'إدارة مشروع بناء فيلا',
      category: 'إدارة المشاريع',
      date: '2023-12-20',
      status: 'in-progress',
      statusText: 'قيد التنفيذ',
      progress: 55,
      price: '200,000 ريال',
      image: 'https://readdy.ai/api/search-image?query=Villa%20construction%20project%20management%2C%20building%20site%20supervision%2C%20modern%20house%20under%20construction%2C%20professional%20project%20coordination%2C%20architectural%20progress%2C%20construction%20photography&width=400&height=300&seq=order-management-1&orientation=landscape'
    }
  ];

  const filteredOrders = orders.filter(order => {
    if (activeFilter === 'all') return true;
    return order.status === activeFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'review':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const handleDownloadInvoice = (order: any) => {
    setSelectedOrder(order);
    setShowInvoice(true);
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#FFA500] text-white shadow-lg'
                  : 'bg-white text-[#001F3F] border-2 border-gray-200 hover:border-[#FFA500]'
              }`}
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-list-check text-lg"></i>
                <span>الكل ({orders.length})</span>
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('in-progress')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === 'in-progress'
                  ? 'bg-[#FFA500] text-white shadow-lg'
                  : 'bg-white text-[#001F3F] border-2 border-gray-200 hover:border-[#FFA500]'
              }`}
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-time-line text-lg"></i>
                <span>قيد التنفيذ ({orders.filter(o => o.status === 'in-progress').length})</span>
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('completed')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === 'completed'
                  ? 'bg-[#FFA500] text-white shadow-lg'
                  : 'bg-white text-[#001F3F] border-2 border-gray-200 hover:border-[#FFA500]'
              }`}
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-checkbox-circle-line text-lg"></i>
                <span>مكتملة ({orders.filter(o => o.status === 'completed').length})</span>
              </span>
            </button>

            <button
              onClick={() => setActiveFilter('review')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === 'review'
                  ? 'bg-[#FFA500] text-white shadow-lg'
                  : 'bg-white text-[#001F3F] border-2 border-gray-200 hover:border-[#FFA500]'
              }`}
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-file-list-line text-lg"></i>
                <span>قيد المراجعة ({orders.filter(o => o.status === 'review').length})</span>
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-[#FFA500]/30"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <div className="relative rounded-xl overflow-hidden group">
                      <img
                        src={order.image}
                        alt={order.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getStatusColor(order.status)}`}>
                          {order.statusText}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-[#001F3F] mb-2">{order.title}</h3>
                          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 mb-2">
                            <i className="ri-bookmark-line text-[#FFA500]"></i>
                            <span>{order.category}</span>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
                            <i className="ri-calendar-line text-[#FFA500]"></i>
                            <span>{order.date}</span>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-2xl font-bold text-[#FFA500]">{order.price}</p>
                        </div>
                      </div>

                      {order.status === 'in-progress' && order.progress && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-[#001F3F]">نسبة الإنجاز</span>
                            <span className="text-sm font-bold text-[#FFA500]">{order.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] h-3 rounded-full transition-all duration-500"
                              style={{ width: `${order.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-3 space-x-reverse mt-4">
                      {order.type === 'product' && order.productLink ? (
                        <Link href={order.productLink} className="flex-1">
                          <button className="w-full bg-[#FFA500] text-white py-3 rounded-xl font-semibold hover:bg-[#e6940a] transition-all duration-300 cursor-pointer whitespace-nowrap">
                            <span className="flex items-center justify-center space-x-2 space-x-reverse">
                              <i className="ri-eye-line text-lg"></i>
                              <span>عرض التفاصيل</span>
                            </span>
                          </button>
                        </Link>
                      ) : (
                        <Link href="/contact" className="flex-1">
                          <button className="w-full bg-[#FFA500] text-white py-3 rounded-xl font-semibold hover:bg-[#e6940a] transition-all duration-300 cursor-pointer whitespace-nowrap">
                            <span className="flex items-center justify-center space-x-2 space-x-reverse">
                              <i className="ri-customer-service-line text-lg"></i>
                              <span>تواصل معنا</span>
                            </span>
                          </button>
                        </Link>
                      )}

                      <button 
                        onClick={() => handleDownloadInvoice(order)}
                        className="px-6 py-3 bg-white border-2 border-[#FFA500] text-[#FFA500] rounded-xl font-semibold hover:bg-[#FFA500] hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
                      >
                        <span className="flex items-center space-x-2 space-x-reverse">
                          <i className="ri-download-line text-lg"></i>
                          <span>تحميل الفاتورة</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-inbox-line text-5xl text-gray-400"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#001F3F] mb-3">لا توجد طلبات</h3>
              <p className="text-gray-600 mb-8">لم يتم العثور على طلبات في هذه الفئة</p>
              <Link href="/store">
                <button className="bg-[#FFA500] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e6940a] transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <span className="flex items-center space-x-2 space-x-reverse">
                    <i className="ri-shopping-bag-line"></i>
                    <span>تصفح المتجر</span>
                  </span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {showInvoice && selectedOrder && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8" id="invoice-content">
              <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-gray-200">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-3xl font-['Pacifico']">L</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-['Pacifico'] text-[#001F3F]">Luxurylines</h2>
                    <p className="text-sm text-gray-600">التصميم الداخلي والديكور</p>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-[#001F3F] mb-1">فاتورة</h3>
                  <p className="text-sm text-gray-600">رقم الطلب: #{selectedOrder.id}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-[#001F3F] mb-3">معلومات الشركة:</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-map-pin-line text-[#FFA500]"></i>
                      <span>الرياض، المملكة العربية السعودية</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-phone-line text-[#FFA500]"></i>
                      <span>+966 50 123 4567</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-mail-line text-[#FFA500]"></i>
                      <span>info@luxurylines.sa</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#001F3F] mb-3">معلومات العميل:</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-user-line text-[#FFA500]"></i>
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

              <div className="mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <img
                      src={selectedOrder.image}
                      alt={selectedOrder.title}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#001F3F] mb-2">{selectedOrder.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{selectedOrder.category}</p>
                      {selectedOrder.progress && (
                        <div className="mb-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-[#001F3F]">نسبة الإنجاز</span>
                            <span className="text-xs font-bold text-[#FFA500]">{selectedOrder.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] h-2 rounded-full"
                              style={{ width: `${selectedOrder.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-200 pt-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-gray-700">
                    <span>المبلغ الأساسي:</span>
                    <span className="font-semibold">{selectedOrder.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span>الضريبة (15%):</span>
                    <span className="font-semibold">{(parseFloat(selectedOrder.price.replace(/[^\d]/g, '')) * 0.15).toLocaleString('ar-SA')} ريال</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-[#001F3F]">المجموع الكلي:</span>
                    <span className="text-2xl font-bold text-[#FFA500]">{(parseFloat(selectedOrder.price.replace(/[^\d]/g, '')) * 1.15).toLocaleString('ar-SA')} ريال</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] rounded-xl p-6 text-center text-white">
                <p className="text-sm mb-2">شكراً لثقتكم بنا</p>
                <p className="text-xs opacity-80">نسعد بخدمتكم دائماً في Luxurylines</p>
              </div>
            </div>

            <div className="border-t-2 border-gray-200 p-6 flex items-center justify-between bg-gray-50 rounded-b-2xl">
              <button
                onClick={() => setShowInvoice(false)}
                className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="flex items-center space-x-2 space-x-reverse">
                  <i className="ri-close-line text-lg"></i>
                  <span>إغلاق</span>
                </span>
              </button>
              <button
                onClick={handlePrintInvoice}
                className="px-6 py-3 bg-[#FFA500] text-white rounded-xl font-semibold hover:bg-[#e6940a] transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="flex items-center space-x-2 space-x-reverse">
                  <i className="ri-download-line text-lg"></i>
                  <span>تحميل الفاتورة</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
