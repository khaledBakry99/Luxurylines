'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('month');

  const stats = [
    {
      title: 'إجمالي المشاريع',
      value: '156',
      change: '+12%',
      icon: 'ri-building-line',
      color: 'from-blue-500 to-blue-600',
      trend: 'up'
    },
    {
      title: 'الطلبات الجديدة',
      value: '48',
      change: '+23%',
      icon: 'ri-shopping-bag-line',
      color: 'from-green-500 to-green-600',
      trend: 'up'
    },
    {
      title: 'إجمالي المبيعات',
      value: '2.4M ر.س',
      change: '+18%',
      icon: 'ri-money-dollar-circle-line',
      color: 'from-[#FFA500] to-[#ff8c00]',
      trend: 'up'
    },
    {
      title: 'العملاء النشطين',
      value: '892',
      change: '+8%',
      icon: 'ri-user-line',
      color: 'from-purple-500 to-purple-600',
      trend: 'up'
    }
  ];

  const recentProjects = [
    { id: 1, name: 'فيلا الأناقة الحديثة', client: 'أحمد محمد', status: 'قيد التنفيذ', progress: 75 },
    { id: 2, name: 'مكتب تجاري راقي', client: 'شركة النجاح', status: 'قيد التنفيذ', progress: 45 },
    { id: 3, name: 'شقة عصرية فاخرة', client: 'سارة أحمد', status: 'مكتمل', progress: 100 },
    { id: 4, name: 'مطعم فاخر', client: 'مطاعم الذوق', status: 'قيد التنفيذ', progress: 60 }
  ];

  const recentOrders = [
    { id: 1, customer: 'محمد علي', product: 'كنبة فاخرة مودرن', amount: '12,500 ر.س', status: 'جديد' },
    { id: 2, customer: 'فاطمة أحمد', product: 'ثريا كريستال', amount: '8,900 ر.س', status: 'قيد المعالجة' },
    { id: 3, customer: 'خالد سعيد', product: 'طاولة طعام رخام', amount: '9,800 ر.س', status: 'تم الشحن' },
    { id: 4, customer: 'نورة محمد', product: 'مرآة حائط ذهبية', amount: '3,200 ر.س', status: 'مكتمل' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#001F3F] font-['Cairo']">لوحة التحكم</h1>
          <p className="text-gray-600 mt-1">مرحباً بك في لوحة التحكم الإدارية</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500] cursor-pointer"
          >
            <option value="week">هذا الأسبوع</option>
            <option value="month">هذا الشهر</option>
            <option value="year">هذا العام</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                <i className={`${stat.trend === 'up' ? 'ri-arrow-up-line' : 'ri-arrow-down-line'}`}></i>
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-[#001F3F]">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#001F3F] font-['Cairo']">المشاريع الأخيرة</h2>
            <Link href="/admin/projects" className="text-[#FFA500] hover:text-[#ff8c00] font-semibold text-sm cursor-pointer">
              عرض الكل
            </Link>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#001F3F]">{project.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'مكتمل' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">العميل: {project.client}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-[#001F3F]">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#001F3F] font-['Cairo']">الطلبات الأخيرة</h2>
            <Link href="/admin/orders" className="text-[#FFA500] hover:text-[#ff8c00] font-semibold text-sm cursor-pointer">
              عرض الكل
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#001F3F]">{order.customer}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'جديد' ? 'bg-blue-100 text-blue-600' :
                    order.status === 'قيد المعالجة' ? 'bg-yellow-100 text-yellow-600' :
                    order.status === 'تم الشحن' ? 'bg-purple-100 text-purple-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{order.product}</p>
                <p className="text-lg font-bold text-[#FFA500]">{order.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Link href="/admin/projects" className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="ri-building-line text-2xl"></i>
            </div>
            <i className="ri-arrow-left-line text-xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">إدارة المشاريع</h3>
          <p className="text-white/80 text-sm">إضافة وتعديل المشاريع</p>
        </Link>

        <Link href="/admin/services" className="bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="ri-service-line text-2xl"></i>
            </div>
            <i className="ri-arrow-left-line text-xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">إدارة الخدمات</h3>
          <p className="text-white/80 text-sm">إدارة الخدمات والباقات</p>
        </Link>

        <Link href="/admin/store" className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <i className="ri-store-line text-2xl"></i>
            </div>
            <i className="ri-arrow-left-line text-xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">إدارة المتجر</h3>
          <p className="text-white/80 text-sm">إدارة المنتجات والتصنيفات</p>
        </Link>
      </div>
    </div>
  );
}
