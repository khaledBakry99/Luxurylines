'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showStatsPopup, setShowStatsPopup] = useState(false);
  const [showMessagesPopup, setShowMessagesPopup] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isHijri, setIsHijri] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateDateTime = () => {
      const now = new Date();
      
      const timeStr = now.toLocaleTimeString('ar-SA', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      
      let dateStr;
      if (isHijri) {
        dateStr = now.toLocaleDateString('ar-SA-u-ca-islamic', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      } else {
        dateStr = now.toLocaleDateString('ar-SA', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      }
      
      setCurrentTime(timeStr);
      setCurrentDate(dateStr);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, [isHijri]);

  const toggleCalendar = () => {
    setIsHijri(!isHijri);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <aside
        className={`fixed right-0 top-0 h-full bg-gradient-to-b from-[#001F3F] to-[#003366] text-white transition-all duration-300 z-50 shadow-2xl ${
          sidebarOpen ? 'w-72' : 'w-20'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <i className="ri-dashboard-3-fill text-xl"></i>
                </div>
                {sidebarOpen && (
                  <div>
                    <h2 className="font-bold text-lg">لوحة التحكم</h2>
                    <p className="text-xs text-orange-300">إدارة شاملة</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <i className={`ri-arrow-${sidebarOpen ? 'right' : 'left'}-s-line text-lg`}></i>
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-3">
            <ul className="space-y-2">
              {[
                { name: 'لوحة التحكم', path: '/admin', icon: 'ri-dashboard-line' },
                { name: 'المشاريع', path: '/admin/projects', icon: 'ri-building-line' },
                { name: 'الخدمات', path: '/admin/services', icon: 'ri-tools-line' },
                { name: 'المتجر', path: '/admin/store', icon: 'ri-store-line' },
                { name: 'الطلبات', path: '/admin/orders', icon: 'ri-shopping-cart-line' },
                { name: 'المراجعات', path: '/admin/reviews', icon: 'ri-star-line' },
                { name: 'المستخدمين', path: '/admin/users', icon: 'ri-user-line' },
                { name: 'الإعدادات', path: '/admin/settings', icon: 'ri-settings-line' },
              ].map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30'
                          : 'hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                        isActive ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'
                      }`}>
                        <i className={`${item.icon} text-xl`}></i>
                      </div>
                      {sidebarOpen && (
                        <span className="font-medium">{item.name}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto border-t border-white/10 p-4">
            <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold">م</span>
              </div>
              {sidebarOpen && (
                <div className="flex-1">
                  <p className="font-semibold text-sm">محمد أحمد</p>
                  <p className="text-xs text-gray-300">admin@lindesign.com</p>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <button className="w-full mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors flex items-center justify-center gap-2">
                <i className="ri-logout-box-line"></i>
                <span className="text-sm">تسجيل الخروج</span>
              </button>
            )}
          </div>
        </div>
      </aside>

      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'mr-72' : 'mr-20'
        }`}
      >
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {mounted && (
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <i className="ri-calendar-line text-lg"></i>
                      <span className="text-sm font-medium">{currentDate}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {isHijri ? 'هجري' : 'ميلادي'}
                      </span>
                    </div>
                    <button
                      onClick={toggleCalendar}
                      className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 rounded-lg flex items-center justify-center transition-all shadow-sm hover:shadow-md"
                      title={isHijri ? 'التبديل إلى ميلادي' : 'التبديل إلى هجري'}
                    >
                      <i className="ri-calendar-2-line text-base text-white"></i>
                    </button>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <i className="ri-time-line text-lg"></i>
                      <span className="text-sm font-medium">{currentTime}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowStatsPopup(!showStatsPopup);
                      setShowMessagesPopup(false);
                      setShowProfileMenu(false);
                    }}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors relative"
                  >
                    <i className="ri-bar-chart-box-line text-xl text-gray-700"></i>
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                      4
                    </span>
                  </button>

                  {showStatsPopup && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowStatsPopup(false)}
                      ></div>
                      <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                          <h3 className="font-bold text-gray-800">الإحصائيات السريعة</h3>
                          <button
                            onClick={() => setShowStatsPopup(false)}
                            className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <i className="ri-close-line text-xl text-gray-600"></i>
                          </button>
                        </div>
                        <div className="p-4 space-y-3">
                          {[
                            { label: 'مشاريع جديدة', value: '12', icon: 'ri-building-line' },
                            { label: 'طلبات قيد المعالجة', value: '8', icon: 'ri-shopping-cart-line' },
                            { label: 'مبيعات اليوم', value: '45,000 ر.س', icon: 'ri-money-dollar-circle-line' },
                            { label: 'عملاء جدد', value: '23', icon: 'ri-user-add-line' },
                          ].map((stat, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-lg flex items-center justify-center">
                                <i className={`${stat.icon} text-white`}></i>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs text-gray-600">{stat.label}</p>
                                <p className="font-bold text-gray-800">{stat.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => {
                      setShowMessagesPopup(!showMessagesPopup);
                      setShowStatsPopup(false);
                      setShowProfileMenu(false);
                    }}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors relative"
                  >
                    <i className="ri-message-3-line text-xl text-gray-700"></i>
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>

                  {showMessagesPopup && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowMessagesPopup(false)}
                      ></div>
                      <div className="absolute left-0 top-full mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                          <h3 className="font-bold text-gray-800">الرسائل</h3>
                          <button
                            onClick={() => setShowMessagesPopup(false)}
                            className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <i className="ri-close-line text-xl text-gray-600"></i>
                          </button>
                        </div>
                        <div className="divide-y divide-gray-100">
                          {[
                            { id: 1, sender: 'أحمد محمد', message: 'استفسار عن خدمة التصميم الداخلي', time: 'منذ 5 دقائق', unread: true },
                            { id: 2, sender: 'فاطمة علي', message: 'طلب عرض سعر للمشروع', time: 'منذ 15 دقيقة', unread: true },
                            { id: 3, sender: 'خالد سعيد', message: 'شكراً على الخدمة الممتازة', time: 'منذ ساعة', unread: true },
                            { id: 4, sender: 'نورة عبدالله', message: 'متى يمكن البدء بالمشروع؟', time: 'منذ ساعتين', unread: false },
                          ].map((msg) => (
                            <div
                              key={msg.id}
                              className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                                msg.unread ? 'bg-blue-50/50' : ''
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-white text-sm font-bold">
                                    {msg.sender.charAt(0)}
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <p className="font-semibold text-sm text-gray-800">
                                      {msg.sender}
                                    </p>
                                    {msg.unread && (
                                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    )}
                                  </div>
                                  <p className="text-sm text-gray-600 truncate">
                                    {msg.message}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <Link
                  href="/"
                  className="px-4 py-2 bg-gradient-to-r from-[#001F3F] to-[#003366] text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  <i className="ri-home-line"></i>
                  <span className="text-sm font-medium">الموقع الرئيسي</span>
                </Link>

                <div className="relative">
                  <button
                    onClick={() => {
                      setShowProfileMenu(!showProfileMenu);
                      setShowStatsPopup(false);
                      setShowMessagesPopup(false);
                    }}
                    className="w-10 h-10 bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                  >
                    <span className="text-white font-bold">م</span>
                  </button>

                  {showProfileMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowProfileMenu(false)}
                      ></div>
                      <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 z-50">
                        <div className="p-4 border-b border-gray-200">
                          <p className="font-semibold text-gray-800">محمد أحمد</p>
                          <p className="text-sm text-gray-600">admin@lindesign.com</p>
                        </div>
                        <div className="p-2">
                          <Link
                            href="/admin/settings"
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <i className="ri-settings-line text-gray-600"></i>
                            <span className="text-sm text-gray-700">الإعدادات</span>
                          </Link>
                          <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 rounded-lg transition-colors text-red-600">
                            <i className="ri-logout-box-line"></i>
                            <span className="text-sm">تسجيل الخروج</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
