"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("month");

  const stats = [
    {
      title: "إجمالي المشاريع",
      value: "156",
      change: "+12%",
      icon: "ri-building-line",
      color: "from-[#CBC1B8] to-[#F7F6F4]",
      trend: "up",
    },
    {
      title: "الطلبات الجديدة",
      value: "48",
      change: "+23%",
      icon: "ri-shopping-bag-line",
      color: "from-[#CBC1B8] to-[#F7F6F4]",
      trend: "up",
    },
    {
      title: "إجمالي المبيعات",
      value: "2.4M ر.س",
      change: "+18%",
      icon: "ri-money-dollar-circle-line",
      color: "from-[#CBC1B8] to-[#F7F6F4]",
      trend: "up",
    },
    {
      title: "العملاء النشطين",
      value: "892",
      change: "+8%",
      icon: "ri-user-line",
      color: "from-[#CBC1B8] to-[#F7F6F4]",
      trend: "up",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      name: "فيلا الأناقة الحديثة",
      client: "أحمد محمد",
      status: "قيد التنفيذ",
      progress: 75,
    },
    {
      id: 2,
      name: "مكتب تجاري راقي",
      client: "شركة النجاح",
      status: "قيد التنفيذ",
      progress: 45,
    },
    {
      id: 3,
      name: "شقة عصرية فاخرة",
      client: "سارة أحمد",
      status: "مكتمل",
      progress: 100,
    },
    {
      id: 4,
      name: "مطعم فاخر",
      client: "مطاعم الذوق",
      status: "قيد التنفيذ",
      progress: 60,
    },
  ];

  const recentOrders = [
    {
      id: 1,
      customer: "محمد علي",
      product: "كنبة فاخرة مودرن",
      amount: "12,500 ر.س",
      status: "جديد",
    },
    {
      id: 2,
      customer: "فاطمة أحمد",
      product: "ثريا كريستال",
      amount: "8,900 ر.س",
      status: "قيد المعالجة",
    },
    {
      id: 3,
      customer: "خالد سعيد",
      product: "طاولة طعام رخام",
      amount: "9,800 ر.س",
      status: "تم الشحن",
    },
    {
      id: 4,
      customer: "نورة محمد",
      product: "مرآة حائط ذهبية",
      amount: "3,200 ر.س",
      status: "مكتمل",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#1C474A] py-8 px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#F7F6F4] font-['Cairo']">
              لوحة التحكم
            </h1>
            <p className="text-[#CBC1B8]/90 mt-1">
              مرحباً بك في لوحة التحكم الإدارية
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-[#0F3A3E] border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer text-[#F7F6F4] hover:bg-[#1C474A] transition-colors"
            >
              <option value="week" className="bg-[#0F3A3E] text-[#F7F6F4]">
                هذا الأسبوع
              </option>
              <option value="month" className="bg-[#0F3A3E] text-[#F7F6F4]">
                هذا الشهر
              </option>
              <option value="year" className="bg-[#0F3A3E] text-[#F7F6F4]">
                هذا العام
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#CBC1B8]/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <i className={`${stat.icon} text-2xl text-[#0A1F21]`}></i>
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-semibold ${
                    stat.trend === "up" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  <i
                    className={`${
                      stat.trend === "up"
                        ? "ri-arrow-up-line"
                        : "ri-arrow-down-line"
                    }`}
                  ></i>
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#F7F6F4] font-['Cairo']">
                المشاريع الأخيرة
              </h2>
              <Link
                href="/admin/projects"
                className="text-[#CBC1B8] hover:text-[#F7F6F4] font-semibold text-sm cursor-pointer transition-colors"
              >
                عرض الكل
              </Link>
            </div>
            <div className="space-y-4">
              {recentProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 border border-[#CBC1B8]/20 rounded-xl p-4 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#F7F6F4]">
                      {project.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "مكتمل"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#CBC1B8]/90 mb-3">
                    العميل: {project.client}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold text-[#CBC1B8]">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#F7F6F4] font-['Cairo']">
                الطلبات الأخيرة
              </h2>
              <Link
                href="/admin/orders"
                className="text-[#CBC1B8] hover:text-[#F7F6F4] font-semibold text-sm cursor-pointer transition-colors"
              >
                عرض الكل
              </Link>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white/5 border border-[#CBC1B8]/20 rounded-xl p-4 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#F7F6F4]">
                      {order.customer}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "جديد"
                          ? "bg-blue-100 text-blue-600"
                          : order.status === "قيد المعالجة"
                          ? "bg-yellow-100 text-yellow-600"
                          : order.status === "تم الشحن"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#CBC1B8]/90 mb-2">
                    {order.product}
                  </p>
                  <p className="text-lg font-bold text-[#CBC1B8]">
                    {order.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/projects"
            className="bg-gradient-to-br from-[#0F3A3E] to-[#1C474A] border border-[#CBC1B8]/20 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center">
                <i className="ri-building-line text-2xl text-[#0A1F21]"></i>
              </div>
              <i className="ri-arrow-left-line text-xl text-[#CBC1B8]"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F7F6F4]">
              إدارة المشاريع
            </h3>
            <p className="text-[#CBC1B8]/80 text-sm">إضافة وتعديل المشاريع</p>
          </Link>

          <Link
            href="/admin/services"
            className="bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#0A1F21]/20 rounded-xl flex items-center justify-center">
                <i className="ri-service-line text-2xl text-[#0A1F21]"></i>
              </div>
              <i className="ri-arrow-left-line text-xl text-[#0A1F21]"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#0A1F21]">
              إدارة الخدمات
            </h3>
            <p className="text-[#0A1F21]/70 text-sm">إدارة الخدمات والباقات</p>
          </Link>

          <Link
            href="/admin/store"
            className="bg-gradient-to-br from-[#0F3A3E] to-[#1C474A] border border-[#CBC1B8]/20 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center">
                <i className="ri-store-line text-2xl text-[#0A1F21]"></i>
              </div>
              <i className="ri-arrow-left-line text-xl text-[#CBC1B8]"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#F7F6F4]">
              إدارة المتجر
            </h3>
            <p className="text-[#CBC1B8]/80 text-sm">
              إدارة المنتجات والتصنيفات
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
