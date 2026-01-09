"use client";

import { useState } from "react";

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("الكل");
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const orders = [
    {
      id: "#ORD-2024-001",
      customer: "محمد علي",
      email: "mohammed@example.com",
      phone: "+966 50 123 4567",
      products: "كنبة فاخرة مودرن، طاولة طعام رخام",
      amount: "22,300 ر.س",
      status: "جديد",
      date: "2024-03-15",
      paymentMethod: "بطاقة ائتمان",
    },
    {
      id: "#ORD-2024-002",
      customer: "فاطمة أحمد",
      email: "fatima@example.com",
      phone: "+966 55 234 5678",
      products: "ثريا كريستال فاخرة",
      amount: "8,900 ر.س",
      status: "قيد المعالجة",
      date: "2024-03-14",
      paymentMethod: "تحويل بنكي",
    },
    {
      id: "#ORD-2024-003",
      customer: "خالد سعيد",
      email: "khaled@example.com",
      phone: "+966 50 345 6789",
      products: "مرآة حائط ذهبية، وسائد حرير",
      amount: "5,000 ر.س",
      status: "تم الشحن",
      date: "2024-03-13",
      paymentMethod: "الدفع عند الاستلام",
    },
    {
      id: "#ORD-2024-004",
      customer: "نورة محمد",
      email: "noura@example.com",
      phone: "+966 55 456 7890",
      products: "سجادة فارسية فاخرة",
      amount: "15,000 ر.س",
      status: "مكتمل",
      date: "2024-03-12",
      paymentMethod: "بطاقة ائتمان",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "جديد":
        return "bg-blue-100 text-blue-600";
      case "قيد المعالجة":
        return "bg-yellow-100 text-yellow-600";
      case "تم الشحن":
        return "bg-purple-100 text-purple-600";
      case "مكتمل":
        return "bg-green-100 text-green-600";
      case "ملغي":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "الكل" || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#F7F6F4] font-['Cairo']">
              إدارة الطلبات
            </h1>
            <p className="text-[#CBC1B8]/90 mt-1">متابعة وإدارة جميع الطلبات</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center">
                <i className="ri-shopping-bag-line text-2xl text-[#CBC1B8]"></i>
              </div>
            </div>
            <h3 className="text-[#CBC1B8]/70 text-sm mb-1">طلبات جديدة</h3>
            <p className="text-2xl font-bold text-[#F7F6F4]">48</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center">
                <i className="ri-time-line text-2xl text-[#CBC1B8]"></i>
              </div>
            </div>
            <h3 className="text-[#CBC1B8]/70 text-sm mb-1">قيد المعالجة</h3>
            <p className="text-2xl font-bold text-[#F7F6F4]">32</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center">
                <i className="ri-truck-line text-2xl text-[#CBC1B8]"></i>
              </div>
            </div>
            <h3 className="text-[#CBC1B8]/70 text-sm mb-1">تم الشحن</h3>
            <p className="text-2xl font-bold text-[#F7F6F4]">67</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
            <div className="flex items-center justify-between mb-2">
              <div className="w-12 h-12 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center">
                <i className="ri-check-line text-2xl text-[#CBC1B8]"></i>
              </div>
            </div>
            <h3 className="text-[#CBC1B8]/70 text-sm mb-1">مكتمل</h3>
            <p className="text-2xl font-bold text-[#F7F6F4]">892</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]/50"></i>
              <input
                type="text"
                placeholder="البحث عن طلب..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-6 py-3 bg-[#0F3A3E] border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer pr-8 text-[#F7F6F4] hover:bg-[#1C474A] transition-colors"
            >
              <option value="الكل" className="bg-[#0F3A3E] text-[#F7F6F4]">
                جميع الحالات
              </option>
              <option value="جديد" className="bg-[#0F3A3E] text-[#F7F6F4]">
                جديد
              </option>
              <option
                value="قيد المعالجة"
                className="bg-[#0F3A3E] text-[#F7F6F4]"
              >
                قيد المعالجة
              </option>
              <option value="تم الشحن" className="bg-[#0F3A3E] text-[#F7F6F4]">
                تم الشحن
              </option>
              <option value="مكتمل" className="bg-[#0F3A3E] text-[#F7F6F4]">
                مكتمل
              </option>
              <option value="ملغي" className="bg-[#0F3A3E] text-[#F7F6F4]">
                ملغي
              </option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#CBC1B8]/20">
                  <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                    العميل
                  </th>
                  <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                    المنتجات
                  </th>
                  <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                    المبلغ
                  </th>
                  <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                    طريقة الدفع
                  </th>
                  <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                    التاريخ
                  </th>
                  <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                    الحالة
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-[#F7F6F4]">
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-[#CBC1B8]/10 hover:bg-white/5"
                  >
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-semibold text-[#F7F6F4]">
                          {order.customer}
                        </p>
                        <p className="text-xs text-[#CBC1B8]/70">
                          {order.email}
                        </p>
                        <p className="text-xs text-[#CBC1B8]/70">
                          {order.phone}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <p className="text-sm text-[#CBC1B8]/90 max-w-xs">
                        {order.products}
                      </p>
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#CBC1B8]">
                      {order.amount}
                    </td>
                    <td className="py-4 px-4 text-[#CBC1B8]/90 text-sm">
                      {order.paymentMethod}
                    </td>
                    <td className="py-4 px-4 text-[#CBC1B8]/90 text-sm">
                      {order.date}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setShowViewModal(true);
                          }}
                          className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8]/20 text-[#CBC1B8] rounded-lg hover:bg-[#CBC1B8]/30 transition-colors cursor-pointer"
                        >
                          <i className="ri-eye-line"></i>
                        </button>
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setShowEditModal(true);
                          }}
                          className="w-8 h-8 flex items-center justify-center bg-[#CBC1B8]/20 text-[#CBC1B8] rounded-lg hover:bg-[#CBC1B8]/30 transition-colors cursor-pointer"
                        >
                          <i className="ri-edit-line"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modals outside main container */}
      {showViewModal && selectedOrder && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setShowViewModal(false)}
        >
          <div
            className="bg-[#0F3A3E] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#CBC1B8]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] px-6 py-4 flex items-center justify-between border-b border-[#CBC1B8]/20 z-10">
              <h2 className="text-2xl font-bold text-[#F7F6F4] font-['Cairo']">
                تفاصيل الطلب
              </h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-[#CBC1B8]"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#CBC1B8] mb-1">اسم العميل</p>
                  <p className="font-semibold text-[#F7F6F4]">
                    {selectedOrder.customer}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#CBC1B8] mb-1">
                    البريد الإلكتروني
                  </p>
                  <p className="font-semibold text-[#F7F6F4]">
                    {selectedOrder.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#CBC1B8] mb-1">رقم الهاتف</p>
                  <p className="font-semibold text-[#F7F6F4]">
                    {selectedOrder.phone}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#CBC1B8] mb-1">التاريخ</p>
                  <p className="font-semibold text-[#F7F6F4]">
                    {selectedOrder.date}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#CBC1B8] mb-1">المبلغ الإجمالي</p>
                  <p className="font-semibold text-[#CBC1B8] text-xl">
                    {selectedOrder.amount}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#CBC1B8] mb-1">طريقة الدفع</p>
                  <p className="font-semibold text-[#F7F6F4]">
                    {selectedOrder.paymentMethod}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#CBC1B8] mb-1">الحالة</p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      selectedOrder.status
                    )}`}
                  >
                    {selectedOrder.status}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#CBC1B8] mb-2">المنتجات</p>
                <div className="bg-white/5 rounded-xl p-4 border border-[#CBC1B8]/20">
                  <p className="text-[#F7F6F4]">{selectedOrder.products}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditModal && selectedOrder && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setShowEditModal(false)}
        >
          <div
            className="bg-[#0F3A3E] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#CBC1B8]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] px-6 py-4 flex items-center justify-between border-b border-[#CBC1B8]/20 z-10">
              <h2 className="text-2xl font-bold text-[#F7F6F4] font-['Cairo']">
                تعديل الطلب
              </h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-[#CBC1B8]"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                  حالة الطلب
                </label>
                <select
                  defaultValue={selectedOrder.status}
                  className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer pr-8 text-[#F7F6F4]"
                >
                  <option value="جديد">جديد</option>
                  <option value="قيد المعالجة">قيد المعالجة</option>
                  <option value="تم الشحن">تم الشحن</option>
                  <option value="مكتمل">مكتمل</option>
                  <option value="ملغي">ملغي</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                  ملاحظات
                </label>
                <textarea
                  rows={4}
                  placeholder="أضف ملاحظات على الطلب..."
                  className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50 resize-none"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowEditModal(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  حفظ التعديلات
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-8 py-3 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] rounded-xl font-semibold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
