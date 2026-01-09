"use client";

import { useState } from "react";

export default function AdminServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("الكل");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: 1,
      name: "التصميم الداخلي",
      category: "تصميم",
      description: "تصاميم داخلية مبتكرة تجمع بين الجمال والوظيفة",
      icon: "ri-home-4-line",
      price: "15,000 - 60,000 ر.س",
      status: "نشط",
      orders: 156,
    },
    {
      id: 2,
      name: "التصميم الخارجي",
      category: "تصميم",
      description: "تصاميم خارجية متميزة تعكس هوية المبنى",
      icon: "ri-building-2-line",
      price: "15,000 - 50,000 ر.س",
      status: "نشط",
      orders: 89,
    },
    {
      id: 3,
      name: "التشطيب",
      category: "تنفيذ",
      description: "خدمات تشطيب شاملة بأعلى معايير الجودة",
      icon: "ri-paint-brush-line",
      price: "حسب المشروع",
      status: "نشط",
      orders: 124,
    },
    {
      id: 4,
      name: "توريد الأساس",
      category: "توريد",
      description: "توريد مواد بناء وتشطيب عالية الجودة",
      icon: "ri-truck-line",
      price: "حسب الطلب",
      status: "نشط",
      orders: 203,
    },
    {
      id: 5,
      name: "إدارة المشاريع",
      category: "إدارة",
      description: "إدارة احترافية لمشروعك من البداية حتى التسليم",
      icon: "ri-briefcase-line",
      price: "15,000 - 40,000 ر.س/شهر",
      status: "نشط",
      orders: 67,
    },
    {
      id: 6,
      name: "الإضاءة الذكية",
      category: "تقنية",
      description: "حلول إضاءة ذكية ومبتكرة",
      icon: "ri-lightbulb-line",
      price: "5,000 - 25,000 ر.س",
      status: "نشط",
      orders: 78,
    },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.includes(searchTerm) ||
      service.description.includes(searchTerm);
    const matchesCategory =
      filterCategory === "الكل" || service.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#1C474A] py-8 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#F7F6F4] font-['Cairo']">
                إدارة الخدمات
              </h1>
              <p className="text-[#CBC1B8]/90 mt-1">
                إدارة وتحديث خدمات الشركة
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-add-line text-xl"></i>
              <span>إضافة خدمة جديدة</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-service-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">إجمالي الخدمات</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">
                {services.length}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-check-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">خدمات نشطة</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">
                {services.filter((s) => s.status === "نشط").length}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-shopping-bag-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">إجمالي الطلبات</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">
                {services.reduce((sum, s) => sum + s.orders, 0)}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center">
                  <i className="ri-star-line text-2xl text-[#CBC1B8]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">الأكثر طلباً</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">توريد الأساس</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]"></i>
                <input
                  type="text"
                  placeholder="البحث عن خدمة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-6 py-3 bg-[#0F3A3E] border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer text-[#F7F6F4] hover:bg-[#1C474A] transition-colors"
              >
                <option value="الكل" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  جميع الفئات
                </option>
                <option value="تصميم" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  تصميم
                </option>
                <option value="تنفيذ" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  تنفيذ
                </option>
                <option value="توريد" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  توريد
                </option>
                <option value="إدارة" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  إدارة
                </option>
                <option value="تقنية" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  تقنية
                </option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 border border-[#CBC1B8]/20 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center">
                      <i
                        className={`${service.icon} text-3xl text-[#0A1F21]`}
                      ></i>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                      {service.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F7F6F4] mb-2 font-['Cairo']">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#CBC1B8]/90 mb-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#CBC1B8]/20">
                    <div>
                      <p className="text-xs text-[#CBC1B8]/70">السعر</p>
                      <p className="text-sm font-semibold text-[#CBC1B8]">
                        {service.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[#CBC1B8]/70">الطلبات</p>
                      <p className="text-sm font-semibold text-[#F7F6F4]">
                        {service.orders}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedService(service);
                        setShowEditModal(true);
                      }}
                      className="flex-1 bg-white/10 text-[#CBC1B8] border border-[#CBC1B8]/30 py-2 rounded-lg font-semibold hover:bg-white/20 transition-all cursor-pointer text-sm"
                    >
                      <i className="ri-edit-line ml-1"></i>
                      تعديل
                    </button>
                    <button className="flex-1 bg-red-500/20 text-red-400 border border-red-500/30 py-2 rounded-lg font-semibold hover:bg-red-500/30 transition-all cursor-pointer text-sm">
                      <i className="ri-delete-bin-line ml-1"></i>
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {(showAddModal || showEditModal) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#0F3A3E] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#CBC1B8]/20">
            <div className="sticky top-0 bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] px-6 py-4 flex items-center justify-between border-b border-[#CBC1B8]/20">
              <h2 className="text-2xl font-bold text-[#F7F6F4] font-['Cairo']">
                {showAddModal ? "إضافة خدمة جديدة" : "تعديل الخدمة"}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setShowEditModal(false);
                }}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-[#CBC1B8]"></i>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    اسم الخدمة
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedService?.name}
                    placeholder="أدخل اسم الخدمة"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    الفئة
                  </label>
                  <select
                    defaultValue={selectedService?.category}
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer text-[#F7F6F4]"
                  >
                    <option>تصميم</option>
                    <option>تنفيذ</option>
                    <option>توريد</option>
                    <option>إدارة</option>
                    <option>تقنية</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    الوصف
                  </label>
                  <textarea
                    defaultValue={selectedService?.description}
                    rows={3}
                    placeholder="أدخل وصف الخدمة"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    السعر
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedService?.price}
                    placeholder="أدخل السعر"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    الأيقونة
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedService?.icon}
                    placeholder="ri-service-line"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  حفظ التعديلات
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setShowEditModal(false);
                  }}
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
