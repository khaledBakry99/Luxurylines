"use client";

import { useState } from "react";

export default function AdminUsersPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("الكل");

  const users = [
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      phone: "+966 50 123 4567",
      role: "عميل",
      status: "نشط",
      joinDate: "2024-01-15",
      orders: 12,
    },
    {
      id: 2,
      name: "سارة أحمد",
      email: "sara@example.com",
      phone: "+966 55 234 5678",
      role: "عميل",
      status: "نشط",
      joinDate: "2024-02-20",
      orders: 8,
    },
    {
      id: 3,
      name: "محمد علي",
      email: "mohammed@luxurylines.com",
      phone: "+966 50 345 6789",
      role: "أدمن",
      status: "نشط",
      joinDate: "2023-12-01",
      orders: 0,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#1C474A] py-8 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#F7F6F4] font-['Cairo']">
                إدارة المستخدمين
              </h1>
              <p className="text-[#CBC1B8]/90 mt-1">إدارة العملاء والمسؤولين</p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-add-line text-xl"></i>
              <span>إضافة مستخدم جديد</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-user-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">
                إجمالي المستخدمين
              </h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">892</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-user-smile-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">العملاء</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">885</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-admin-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">المسؤولين</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">7</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center">
                  <i className="ri-user-add-line text-2xl text-[#CBC1B8]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">جديد هذا الشهر</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">48</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]"></i>
                <input
                  type="text"
                  placeholder="البحث عن مستخدم..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                />
              </div>
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-6 py-3 bg-[#0F3A3E] border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer text-[#F7F6F4] hover:bg-[#1C474A] transition-colors"
              >
                <option value="الكل" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  جميع الأدوار
                </option>
                <option value="عميل" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  عميل
                </option>
                <option value="أدمن" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  أدمن
                </option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#CBC1B8]/30">
                    <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                      المستخدم
                    </th>
                    <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                      البريد الإلكتروني
                    </th>
                    <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                      الهاتف
                    </th>
                    <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                      الدور
                    </th>
                    <th className="text-right py-4 px-4 font-semibold text-[#F7F6F4]">
                      الطلبات
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
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-[#CBC1B8]/10 hover:bg-white/5"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-full flex items-center justify-center">
                            <span className="text-[#0A1F21] font-bold">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-[#F7F6F4]">
                              {user.name}
                            </p>
                            <p className="text-xs text-[#CBC1B8]/70">
                              انضم في {user.joinDate}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#CBC1B8]/90">
                        {user.email}
                      </td>
                      <td className="py-4 px-4 text-[#CBC1B8]/90">
                        {user.phone}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            user.role === "أدمن"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-[#CBC1B8]/90">
                        {user.orders}
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="w-8 h-8 flex items-center justify-center bg-white/10 text-[#CBC1B8] border border-[#CBC1B8]/30 rounded-lg hover:bg-white/20 transition-all cursor-pointer">
                            <i className="ri-edit-line"></i>
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all cursor-pointer">
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
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#0F3A3E] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#CBC1B8]/20">
            <div className="sticky top-0 bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] px-6 py-4 flex items-center justify-between border-b border-[#CBC1B8]/20">
              <h2 className="text-2xl font-bold text-[#F7F6F4] font-['Cairo']">
                إضافة مستخدم جديد
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-[#CBC1B8]"></i>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل الاسم الكامل"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="أدخل البريد الإلكتروني"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    placeholder="أدخل رقم الهاتف"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    الدور
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer text-[#F7F6F4]">
                    <option>عميل</option>
                    <option>أدمن</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    كلمة المرور
                  </label>
                  <input
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    تأكيد كلمة المرور
                  </label>
                  <input
                    type="password"
                    placeholder="أعد إدخال كلمة المرور"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  حفظ المستخدم
                </button>
                <button
                  onClick={() => setShowAddModal(false)}
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
