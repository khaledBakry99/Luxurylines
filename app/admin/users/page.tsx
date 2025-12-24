'use client';

import { useState } from 'react';

export default function AdminUsersPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('الكل');

  const users = [
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      phone: '+966 50 123 4567',
      role: 'عميل',
      status: 'نشط',
      joinDate: '2024-01-15',
      orders: 12
    },
    {
      id: 2,
      name: 'سارة أحمد',
      email: 'sara@example.com',
      phone: '+966 55 234 5678',
      role: 'عميل',
      status: 'نشط',
      joinDate: '2024-02-20',
      orders: 8
    },
    {
      id: 3,
      name: 'محمد علي',
      email: 'mohammed@luxurylines.com',
      phone: '+966 50 345 6789',
      role: 'أدمن',
      status: 'نشط',
      joinDate: '2023-12-01',
      orders: 0
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#001F3F] font-['Cairo']">إدارة المستخدمين</h1>
          <p className="text-gray-600 mt-1">إدارة العملاء والمسؤولين</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <i className="ri-add-line text-xl"></i>
          <span>إضافة مستخدم جديد</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <i className="ri-user-line text-2xl text-blue-600"></i>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">إجمالي المستخدمين</h3>
          <p className="text-2xl font-bold text-[#001F3F]">892</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <i className="ri-user-smile-line text-2xl text-green-600"></i>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">العملاء</h3>
          <p className="text-2xl font-bold text-[#001F3F]">885</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <i className="ri-admin-line text-2xl text-purple-600"></i>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">المسؤولين</h3>
          <p className="text-2xl font-bold text-[#001F3F]">7</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="w-12 h-12 bg-[#FFA500]/20 rounded-xl flex items-center justify-center">
              <i className="ri-user-add-line text-2xl text-[#FFA500]"></i>
            </div>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">جديد هذا الشهر</h3>
          <p className="text-2xl font-bold text-[#001F3F]">48</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="البحث عن مستخدم..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
            />
          </div>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500] cursor-pointer"
          >
            <option value="الكل">جميع الأدوار</option>
            <option value="عميل">عميل</option>
            <option value="أدمن">أدمن</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">المستخدم</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">البريد الإلكتروني</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">الهاتف</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">الدور</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">الطلبات</th>
                <th className="text-right py-4 px-4 font-semibold text-[#001F3F]">الحالة</th>
                <th className="text-center py-4 px-4 font-semibold text-[#001F3F]">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-[#001F3F]">{user.name}</p>
                        <p className="text-xs text-gray-500">انضم في {user.joinDate}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{user.email}</td>
                  <td className="py-4 px-4 text-gray-700">{user.phone}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.role === 'أدمن' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{user.orders}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer">
                        <i className="ri-edit-line"></i>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors cursor-pointer">
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[#001F3F] font-['Cairo']">إضافة مستخدم جديد</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-gray-600"></i>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    placeholder="أدخل الاسم الكامل"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="أدخل البريد الإلكتروني"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    placeholder="أدخل رقم الهاتف"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">الدور</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500] cursor-pointer">
                    <option>عميل</option>
                    <option>أدمن</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">كلمة المرور</label>
                  <input
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#001F3F] mb-2">تأكيد كلمة المرور</label>
                  <input
                    type="password"
                    placeholder="أعد إدخال كلمة المرور"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  حفظ المستخدم
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
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
