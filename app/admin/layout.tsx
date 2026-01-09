"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isHijri, setIsHijri] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateDateTime = () => {
      const now = new Date();

      const timeStr = now.toLocaleTimeString("ar-SA", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      let dateStr;
      if (isHijri) {
        dateStr = now.toLocaleDateString("ar-SA-u-ca-islamic", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      } else {
        dateStr = now.toLocaleDateString("ar-SA", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
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
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#1C474A]">
      <aside
        className={`fixed right-0 top-0 h-full bg-gradient-to-b from-[#0A1F21] to-[#0F3A3E] text-white transition-all duration-300 z-50 shadow-2xl border-l border-[#CBC1B8]/20 ${
          sidebarOpen ? "w-72" : "w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-[#CBC1B8]/20 relative">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center gap-3 ${
                  !sidebarOpen && "justify-center w-full"
                }`}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-lg flex items-center justify-center shadow-lg">
                  <i className="ri-dashboard-3-fill text-xl text-[#0A1F21]"></i>
                </div>
                {sidebarOpen && (
                  <div>
                    <h2 className="font-bold text-lg text-[#F7F6F4]">
                      لوحة التحكم
                    </h2>
                    <p className="text-xs text-[#CBC1B8]">إدارة شاملة</p>
                  </div>
                )}
              </div>
            </div>
            {/* زر الإغلاق/الفتح - نصف دائري شفاف على الحافة */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-[#CBC1B8]/30 hover:border-[#CBC1B8]/50 z-50 hover:scale-110"
              title={sidebarOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              <i
                className={`ri-arrow-${
                  sidebarOpen ? "right" : "left"
                }-s-line text-base text-[#CBC1B8]`}
              ></i>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-3">
            <ul className="space-y-2">
              {[
                {
                  name: "لوحة التحكم",
                  path: "/admin",
                  icon: "ri-dashboard-line",
                },
                {
                  name: "المشاريع",
                  path: "/admin/projects",
                  icon: "ri-building-line",
                },
                {
                  name: "الخدمات",
                  path: "/admin/services",
                  icon: "ri-tools-line",
                },
                { name: "المتجر", path: "/admin/store", icon: "ri-store-line" },
                {
                  name: "الطلبات",
                  path: "/admin/orders",
                  icon: "ri-shopping-cart-line",
                },
                {
                  name: "المراجعات",
                  path: "/admin/reviews",
                  icon: "ri-star-line",
                },
                {
                  name: "المستخدمين",
                  path: "/admin/users",
                  icon: "ri-user-line",
                },
                {
                  name: "الإعدادات",
                  path: "/admin/settings",
                  icon: "ri-settings-line",
                },
              ].map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path} className="relative">
                    <Link
                      href={item.path}
                      className={`flex items-center ${
                        sidebarOpen ? "gap-3" : "justify-center"
                      } px-4 py-3 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] shadow-lg"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                          isActive
                            ? "bg-[#0A1F21]/20"
                            : "bg-white/5 group-hover:bg-white/10"
                        }`}
                      >
                        <i
                          className={`${item.icon} text-xl ${
                            isActive ? "text-[#0A1F21]" : "text-[#F7F6F4]"
                          }`}
                        ></i>
                      </div>
                      {sidebarOpen && (
                        <span
                          className={`font-medium ${
                            isActive ? "text-[#0A1F21]" : "text-[#F7F6F4]"
                          }`}
                        >
                          {item.name}
                        </span>
                      )}
                      {!sidebarOpen && (
                        <div className="absolute right-full mr-2 px-3 py-2 bg-[#0F3A3E] text-[#F7F6F4] text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg border border-[#CBC1B8]/20">
                          {item.name}
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-auto border-t border-[#CBC1B8]/20 p-4">
            <div
              className={`flex items-center gap-3 ${
                !sidebarOpen && "justify-center"
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-[#0A1F21]">م</span>
              </div>
              {sidebarOpen && (
                <div className="flex-1">
                  <p className="font-semibold text-sm text-[#F7F6F4]">
                    محمد أحمد
                  </p>
                  <p className="text-xs text-[#CBC1B8]">admin@lindesign.com</p>
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
          sidebarOpen ? "mr-72" : "mr-20"
        }`}
      >
        <header className="bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] border-b border-[#CBC1B8]/20 sticky top-0 z-40 shadow-sm">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {mounted && (
                  <div className="flex items-center gap-4 text-[#F7F6F4]">
                    <div className="flex items-center gap-2">
                      <i className="ri-calendar-line text-lg"></i>
                      <span className="text-sm font-medium">{currentDate}</span>
                      <span className="text-xs text-[#CBC1B8] bg-white/10 px-2 py-1 rounded">
                        {isHijri ? "هجري" : "ميلادي"}
                      </span>
                    </div>
                    <button
                      onClick={toggleCalendar}
                      className="w-8 h-8 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] hover:from-[#F7F6F4] hover:to-[#CBC1B8] rounded-lg flex items-center justify-center transition-all shadow-sm hover:shadow-md"
                      title={
                        isHijri ? "التبديل إلى ميلادي" : "التبديل إلى هجري"
                      }
                    >
                      <i className="ri-calendar-2-line text-base text-[#0A1F21]"></i>
                    </button>
                    <div className="w-px h-6 bg-[#CBC1B8]/30"></div>
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
                    className="w-10 h-10 bg-[#0F3A3E] hover:bg-[#1C474A] rounded-xl flex items-center justify-center transition-all duration-300 relative border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
                  >
                    <i className="ri-bar-chart-box-line text-xl text-[#CBC1B8]"></i>
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-[#CBC1B8] text-[#0A1F21] text-xs rounded-full flex items-center justify-center font-bold shadow-md">
                      4
                    </span>
                  </button>

                  {showStatsPopup && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowStatsPopup(false)}
                      ></div>
                      <div className="absolute left-0 top-full mt-2 w-80 bg-[#0F3A3E] rounded-xl shadow-2xl border border-[#CBC1B8]/20 z-50">
                        <div className="p-4 border-b border-[#CBC1B8]/20 flex items-center justify-between">
                          <h3 className="font-bold text-[#F7F6F4]">
                            الإحصائيات السريعة
                          </h3>
                          <button
                            onClick={() => setShowStatsPopup(false)}
                            className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <i className="ri-close-line text-xl text-[#CBC1B8]"></i>
                          </button>
                        </div>
                        <div className="p-4 space-y-3">
                          {[
                            {
                              label: "مشاريع جديدة",
                              value: "12",
                              icon: "ri-building-line",
                            },
                            {
                              label: "طلبات قيد المعالجة",
                              value: "8",
                              icon: "ri-shopping-cart-line",
                            },
                            {
                              label: "مبيعات اليوم",
                              value: "45,000 ر.س",
                              icon: "ri-money-dollar-circle-line",
                            },
                            {
                              label: "عملاء جدد",
                              value: "23",
                              icon: "ri-user-add-line",
                            },
                          ].map((stat, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-[#CBC1B8]/10"
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-lg flex items-center justify-center shadow-sm">
                                <i
                                  className={`${stat.icon} text-[#0A1F21]`}
                                ></i>
                              </div>
                              <div className="flex-1">
                                <p className="text-xs text-[#CBC1B8]">
                                  {stat.label}
                                </p>
                                <p className="font-bold text-[#F7F6F4]">
                                  {stat.value}
                                </p>
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
                    className="w-10 h-10 bg-[#0F3A3E] hover:bg-[#1C474A] rounded-xl flex items-center justify-center transition-all duration-300 relative border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
                  >
                    <i className="ri-message-3-line text-xl text-[#CBC1B8]"></i>
                    <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center shadow-md">
                      3
                    </span>
                  </button>

                  {showMessagesPopup && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowMessagesPopup(false)}
                      ></div>
                      <div className="absolute left-0 top-full mt-2 w-96 bg-[#0F3A3E] rounded-xl shadow-2xl border border-[#CBC1B8]/20 z-50 max-h-96 overflow-y-auto">
                        <div className="p-4 border-b border-[#CBC1B8]/20 flex items-center justify-between sticky top-0 bg-[#0F3A3E]">
                          <h3 className="font-bold text-[#F7F6F4]">الرسائل</h3>
                          <button
                            onClick={() => setShowMessagesPopup(false)}
                            className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <i className="ri-close-line text-xl text-[#CBC1B8]"></i>
                          </button>
                        </div>
                        <div className="divide-y divide-[#CBC1B8]/10">
                          {[
                            {
                              id: 1,
                              sender: "أحمد محمد",
                              message: "استفسار عن خدمة التصميم الداخلي",
                              time: "منذ 5 دقائق",
                              unread: true,
                            },
                            {
                              id: 2,
                              sender: "فاطمة علي",
                              message: "طلب عرض سعر للمشروع",
                              time: "منذ 15 دقيقة",
                              unread: true,
                            },
                            {
                              id: 3,
                              sender: "خالد سعيد",
                              message: "شكراً على الخدمة الممتازة",
                              time: "منذ ساعة",
                              unread: true,
                            },
                            {
                              id: 4,
                              sender: "نورة عبدالله",
                              message: "متى يمكن البدء بالمشروع؟",
                              time: "منذ ساعتين",
                              unread: false,
                            },
                          ].map((msg) => (
                            <div
                              key={msg.id}
                              className={`p-4 hover:bg-white/5 transition-colors cursor-pointer ${
                                msg.unread ? "bg-white/5" : ""
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                                  <span className="text-[#0A1F21] text-sm font-bold">
                                    {msg.sender.charAt(0)}
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-1">
                                    <p className="font-semibold text-sm text-[#F7F6F4]">
                                      {msg.sender}
                                    </p>
                                    {msg.unread && (
                                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    )}
                                  </div>
                                  <p className="text-sm text-[#CBC1B8] truncate">
                                    {msg.message}
                                  </p>
                                  <p className="text-xs text-[#CBC1B8]/70 mt-1">
                                    {msg.time}
                                  </p>
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
                  className="px-4 py-2 bg-[#0F3A3E] hover:bg-[#1C474A] text-[#CBC1B8] rounded-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
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
                    className="w-10 h-10 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-[#0A1F21] font-bold">م</span>
                  </button>

                  {showProfileMenu && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowProfileMenu(false)}
                      ></div>
                      <div className="absolute left-0 top-full mt-2 w-56 bg-[#0F3A3E] rounded-xl shadow-2xl border border-[#CBC1B8]/20 z-50">
                        <div className="p-4 border-b border-[#CBC1B8]/20">
                          <p className="font-semibold text-[#F7F6F4]">
                            محمد أحمد
                          </p>
                          <p className="text-sm text-[#CBC1B8]">
                            admin@lindesign.com
                          </p>
                        </div>
                        <div className="p-2">
                          <Link
                            href="/admin/settings"
                            className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors text-[#CBC1B8] hover:text-[#F7F6F4]"
                          >
                            <i className="ri-settings-line"></i>
                            <span className="text-sm">الإعدادات</span>
                          </Link>
                          <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400 hover:text-red-300">
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
