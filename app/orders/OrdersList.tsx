"use client";
import { useState } from "react";
import Link from "next/link";

export default function OrdersList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showInvoice, setShowInvoice] = useState(false);

  const orders = [
    {
      id: 1,
      type: "product",
      title: "طقم أريكة فاخرة - كلاسيك",
      category: "منتج من المتجر",
      date: "2024-01-15",
      status: "completed",
      statusText: "مكتمل",
      price: "25,000 ريال",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20classic%20sofa%20set%2C%20elegant%20beige%20fabric%20upholstery%2C%20ornate%20wooden%20frame%20with%20gold%20accents%2C%20tufted%20cushions%2C%20sophisticated%20living%20room%20furniture%2C%20professional%20product%20photography%2C%20clean%20white%20background&width=400&height=300&seq=order-sofa-1&orientation=landscape",
      productLink: "/store/shop",
    },
    {
      id: 2,
      type: "service",
      title: "تصميم داخلي لفيلا سكنية",
      category: "تصميم داخلي",
      date: "2024-01-10",
      status: "in-progress",
      statusText: "قيد التنفيذ",
      progress: 65,
      price: "150,000 ريال",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20villa%20interior%20design%2C%20modern%20Arabic%20style%20living%20room%2C%20elegant%20furniture%20arrangement%2C%20marble%20flooring%2C%20crystal%20chandelier%2C%20sophisticated%20color%20palette%2C%20professional%20architectural%20photography&width=400&height=300&seq=order-interior-1&orientation=landscape",
    },
    {
      id: 3,
      type: "product",
      title: "طاولة طعام خشبية فاخرة",
      category: "منتج من المتجر",
      date: "2024-01-08",
      status: "completed",
      statusText: "مكتمل",
      price: "18,000 ريال",
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20wooden%20dining%20table%2C%20rich%20dark%20wood%20finish%2C%20elegant%20design%20with%20carved%20details%2C%20seats%20eight%20people%2C%20formal%20dining%20room%20furniture%2C%20professional%20product%20photography%2C%20clean%20background&width=400&height=300&seq=order-table-1&orientation=landscape",
      productLink: "/store/shop",
    },
    {
      id: 4,
      type: "service",
      title: "تصميم خارجي لواجهة منزل",
      category: "تصميم خارجي",
      date: "2024-01-05",
      status: "in-progress",
      statusText: "قيد التنفيذ",
      progress: 40,
      price: "95,000 ريال",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20house%20exterior%20design%2C%20contemporary%20Arabic%20architecture%2C%20elegant%20facade%20with%20stone%20and%20glass%20elements%2C%20landscaped%20entrance%2C%20professional%20architectural%20rendering%2C%20beautiful%20lighting&width=400&height=300&seq=order-exterior-1&orientation=landscape",
    },
  ];

  const filteredOrders = orders.filter((order) => {
    if (activeFilter === "all") return true;
    return order.status === activeFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-[#25D366]/20 text-[#25D366] border-[#25D366]/30";
      case "in-progress":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "review":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-[#CBC1B8]/20 text-[#CBC1B8] border-[#CBC1B8]/30";
    }
  };

  const handleDownloadInvoice = (order: any) => {
    setSelectedOrder(order);
    setShowInvoice(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#0A2F33] to-[#0A1F21]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg"
                  : "bg-[#1C474A]/40 text-[#F7F6F4] border-2 border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
              }`}
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-list-check text-lg"></i>
                <span>الكل ({orders.length})</span>
              </span>
            </button>

            <button
              onClick={() => setActiveFilter("in-progress")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === "in-progress"
                  ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg"
                  : "bg-[#1C474A]/40 text-[#F7F6F4] border-2 border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
              }`}
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-time-line text-lg"></i>
                <span>
                  قيد التنفيذ (
                  {orders.filter((o) => o.status === "in-progress").length})
                </span>
              </span>
            </button>

            <button
              onClick={() => setActiveFilter("completed")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === "completed"
                  ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg"
                  : "bg-[#1C474A]/40 text-[#F7F6F4] border-2 border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
              }`}
            >
              <span className="flex items-center space-x-2 space-x-reverse">
                <i className="ri-checkbox-circle-line text-lg"></i>
                <span>
                  مكتملة (
                  {orders.filter((o) => o.status === "completed").length})
                </span>
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm rounded-2xl border-2 border-[#CBC1B8]/20 overflow-hidden hover:border-[#CBC1B8]/40 hover:shadow-card-glow transition-all duration-300"
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
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.statusText}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-[#F7F6F4] mb-2">
                            {order.title}
                          </h3>
                          <div className="flex items-center space-x-2 space-x-reverse text-sm text-[#CBC1B8] mb-2">
                            <i className="ri-bookmark-line text-[#CBC1B8]"></i>
                            <span>{order.category}</span>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse text-sm text-[#CBC1B8]">
                            <i className="ri-calendar-line text-[#CBC1B8]"></i>
                            <span>{order.date}</span>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="text-2xl font-bold text-[#CBC1B8]">
                            {order.price}
                          </p>
                        </div>
                      </div>

                      {order.status === "in-progress" && order.progress && (
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-[#F7F6F4]">
                              نسبة الإنجاز
                            </span>
                            <span className="text-sm font-bold text-[#CBC1B8]">
                              {order.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-[#0A1F21]/60 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] h-3 rounded-full transition-all duration-500"
                              style={{ width: `${order.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-3 space-x-reverse mt-4">
                      {order.type === "product" && order.productLink ? (
                        <Link href={order.productLink} className="flex-1">
                          <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
                            <span className="flex items-center justify-center space-x-2 space-x-reverse">
                              <i className="ri-eye-line text-lg"></i>
                              <span>عرض التفاصيل</span>
                            </span>
                          </button>
                        </Link>
                      ) : (
                        <Link href="/contact" className="flex-1">
                          <button className="w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
                            <span className="flex items-center justify-center space-x-2 space-x-reverse">
                              <i className="ri-customer-service-line text-lg"></i>
                              <span>تواصل معنا</span>
                            </span>
                          </button>
                        </Link>
                      )}

                      <button
                        onClick={() => handleDownloadInvoice(order)}
                        className="px-6 py-3 bg-[#1C474A]/60 border-2 border-[#CBC1B8]/40 text-[#F7F6F4] rounded-xl font-semibold hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 cursor-pointer whitespace-nowrap"
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
              <div className="w-24 h-24 bg-[#1C474A]/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-inbox-line text-5xl text-[#CBC1B8]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#F7F6F4] mb-3">
                لا توجد طلبات
              </h3>
              <p className="text-[#CBC1B8] mb-8">
                لم يتم العثور على طلبات في هذه الفئة
              </p>
              <Link href="/store">
                <button className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap">
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
          <div className="bg-gradient-to-br from-[#1C474A] to-[#0A1F21] rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-[#CBC1B8]/20">
            <div className="p-8" id="invoice-content">
              <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-[#CBC1B8]/20">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-[#0A1F21] font-bold text-3xl font-['Pacifico']">
                      L
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-['Pacifico'] text-[#F7F6F4]">
                      Luxurylines
                    </h2>
                    <p className="text-sm text-[#CBC1B8]">
                      التصميم الداخلي والديكور
                    </p>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-[#F7F6F4] mb-1">
                    فاتورة
                  </h3>
                  <p className="text-sm text-[#CBC1B8]">
                    رقم الطلب: #{selectedOrder.id}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-[#F7F6F4] mb-3">
                    معلومات الشركة:
                  </h4>
                  <div className="space-y-2 text-sm text-[#CBC1B8]">
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-map-pin-line text-[#CBC1B8]"></i>
                      <span>الرياض، المملكة العربية السعودية</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-phone-line text-[#CBC1B8]"></i>
                      <span dir="ltr">+966 55 930 0791</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-mail-line text-[#CBC1B8]"></i>
                      <span>Luxlins@gmail.com</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F7F6F4] mb-3">
                    معلومات العميل:
                  </h4>
                  <div className="space-y-2 text-sm text-[#CBC1B8]">
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-user-line text-[#CBC1B8]"></i>
                      <span>عميل مميز</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-calendar-line text-[#CBC1B8]"></i>
                      <span>تاريخ الطلب: {selectedOrder.date}</span>
                    </p>
                    <p className="flex items-center space-x-2 space-x-reverse">
                      <i className="ri-bookmark-line text-[#CBC1B8]"></i>
                      <span>الحالة: {selectedOrder.statusText}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="bg-[#0A1F21]/60 rounded-xl p-6 border border-[#CBC1B8]/20">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <img
                      src={selectedOrder.image}
                      alt={selectedOrder.title}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[#F7F6F4] mb-2">
                        {selectedOrder.title}
                      </h4>
                      <p className="text-sm text-[#CBC1B8] mb-2">
                        {selectedOrder.category}
                      </p>
                      {selectedOrder.progress && (
                        <div className="mb-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-[#F7F6F4]">
                              نسبة الإنجاز
                            </span>
                            <span className="text-xs font-bold text-[#CBC1B8]">
                              {selectedOrder.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-[#0A1F21] rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] h-2 rounded-full"
                              style={{ width: `${selectedOrder.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-[#CBC1B8]/20 pt-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[#CBC1B8]">
                    <span>المبلغ الأساسي:</span>
                    <span className="font-semibold">{selectedOrder.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#CBC1B8]">
                    <span>الضريبة (15%):</span>
                    <span className="font-semibold">
                      {(
                        parseFloat(selectedOrder.price.replace(/[^\d]/g, "")) *
                        0.15
                      ).toLocaleString("ar-SA")}{" "}
                      ريال
                    </span>
                  </div>
                  <div className="border-t-2 border-[#CBC1B8]/20 pt-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-[#F7F6F4]">
                      المجموع الكلي:
                    </span>
                    <span className="text-2xl font-bold text-[#CBC1B8]">
                      {(
                        parseFloat(selectedOrder.price.replace(/[^\d]/g, "")) *
                        1.15
                      ).toLocaleString("ar-SA")}{" "}
                      ريال
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] rounded-xl p-6 text-center text-[#0A1F21]">
                <p className="text-sm mb-2 font-semibold">شكراً لثقتكم بنا</p>
                <p className="text-xs">نسعد بخدمتكم دائماً في Luxurylines</p>
              </div>
            </div>

            <div className="border-t-2 border-[#CBC1B8]/20 p-6 flex items-center justify-between bg-[#0A1F21]/60 rounded-b-2xl">
              <button
                onClick={() => setShowInvoice(false)}
                className="px-6 py-3 bg-[#1C474A]/60 border-2 border-[#CBC1B8]/40 text-[#F7F6F4] rounded-xl font-semibold hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="flex items-center space-x-2 space-x-reverse">
                  <i className="ri-close-line text-lg"></i>
                  <span>إغلاق</span>
                </span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
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
