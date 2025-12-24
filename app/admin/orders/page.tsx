'use client';

import { useState } from 'react';

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('الكل');
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const orders = [
    {
      id: '#ORD-2024-001',
      customer: 'محمد علي',
      email: 'mohammed@example.com',
      phone: '+966 50 123 4567',
      products: 'كنبة فاخرة مودرن، طاولة طعام رخام',
      amount: '22,300 ر.س',
      status: 'جديد',
      date: '2024-03-15',
      paymentMethod: 'بطاقة ائتمان'
    },
    {
      id: '#ORD-2024-002',
      customer: 'فاطمة أحمد',
      email: 'fatima@example.com',
      phone: '+966 55 234 5678',
      products: 'ثريا كريستال فاخرة',
      amount: '8,900 ر.س',
      status: 'قيد المعالجة',
      date: '2024-03-14',
      paymentMethod: 'تحويل بنكي'
    },
    {
      id: '#ORD-2024-003',
      customer: 'خالد سعيد',
      email: 'khaled@example.com',
      phone: '+966 50 345 6789',
      products: 'مرآة حائط ذهبية، وسائد حرير',
      amount: '5,000 ر.س',
      status: 'تم الشحن',
      date: '2024-03-13',
      paymentMethod: 'الدفع عند الاستلام'
    },
    {
      id: '#ORD-2024-004',
      customer: 'نورة محمد',
      email: 'noura@example.com',
      phone: '+966 55 456 7890',
      products: 'سجادة فارسية فاخرة',
      amount: '15,000 ر.س',
      status: 'مكتمل',
      date: '2024-03-12',
      paymentMethod: 'بطاقة ائتمان'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'جديد':
        return 'bg-blue-100 text-blue-600';
      case 'قيد المعالجة':
        return 'bg-yellow-100 text-yellow-600';
      case 'تم الشحن':
        return 'bg-purple-100 text-purple-600';
      case 'مكتمل':
        return 'bg-green-100 text-green-600';
      case 'ملغي':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'الكل' || order.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#001F3F] font-['Cairo']">إدارة الطلبات</h1>
          <p className="text-gray-600 mt-1">متابعة وإدارة جميع الطلبات</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <i className="ri-shopping-bag-line text-2xl text-blue-600"></i>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">طلبات جديدة</h3>
          <p className="text-2xl font-bold text-[#001F3F]">48</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <i className="ri-time-line text-2xl text-yellow-600"></i>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">قيد المعالجة</h3>
          <p className="text-2xl font-bold text-[#001F3F]">32</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <i className="ri-truck-line text-2xl text-purple-600"></i>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">تم الشحن</h3>
          <p className="text-2xl font-bold text-[#001F3F]">67</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <i className="ri-check-line text-2xl text-green-600"></i>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">مكتمل</h3>
          <p className="text-2xl font-bold text-[#001F3F]">892</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="البحث عن طلب..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500] cursor-pointer pr-8"
          >
            <option value="الكل">جميع الحالات</option>
            <option value="جديد">جديد</option>
            <option value="قيد المعالجة">قيد المعالجة</option>
            <option value="تم الشحن">تم الشحن</option>
            <option value="مكتمل">مكتمل</option>
            <option value="ملغي">ملغي</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">العميل</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">المنتجات</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">المبلغ</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">طريقة الدفع</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">التاريخ</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">الحالة</th>
                <th className="text-center py-4 px-4 font-semibold text-[#001F3F]">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-[#001F3F]">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.email}</p>
                      <p className="text-xs text-gray-500">{order.phone}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-700 max-w-xs">{order.products}</p>
                  </td>
                  <td className="py-4 px-4 font-semibold text-[#FFA500]">{order.amount}</td>
                  <td className="py-4 px-4 text-gray-700 text-sm">{order.paymentMethod}</td>
                  <td className="py-4 px-4 text-gray-700 text-sm">{order.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
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
                        className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
                      >
                        <i className="ri-eye-line"></i>
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedOrder(order);
                          setShowEditModal(true);
                        }}
                        className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors cursor-pointer"
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

      {showViewModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#001F3F] font-['Cairo']">تفاصيل الطلب</h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-gray-600"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">اسم العميل</p>
                  <p className="font-semibold text-[#001F3F]">{selectedOrder.customer}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">البريد الإلكتروني</p>
                  <p className="font-semibold text-[#001F3F]">{selectedOrder.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">رقم الهاتف</p>
                  <p className="font-semibold text-[#001F3F]">{selectedOrder.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">التاريخ</p>
                  <p className="font-semibold text-[#001F3F]">{selectedOrder.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">المبلغ الإجمالي</p>
                  <p className="font-semibold text-[#FFA500] text-xl">{selectedOrder.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">طريقة الدفع</p>
                  <p className="font-semibold text-[#001F3F]">{selectedOrder.paymentMethod}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">الحالة</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedOrder.status)}`}>
                    {selectedOrder.status}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">المنتجات</p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-[#001F3F]">{selectedOrder.products}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#001F3F] font-['Cairo']">تعديل الطلب</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-gray-600"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#001F3F] mb-2">حالة الطلب</label>
                <select 
                  defaultValue={selectedOrder.status}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500] cursor-pointer pr-8"
                >
                  <option value="جديد">جديد</option>
                  <option value="قيد المعالجة">قيد المعالجة</option>
                  <option value="تم الشحن">تم الشحن</option>
                  <option value="مكتمل">مكتمل</option>
                  <option value="ملغي">ملغي</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#001F3F] mb-2">ملاحظات</label>
                <textarea
                  rows={4}
                  placeholder="أضف ملاحظات على الطلب..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setShowEditModal(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  حفظ التعديلات
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
