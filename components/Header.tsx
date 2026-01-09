"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== "undefined") {
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleMenuToggle = useCallback(() => {
    if (isMounted) {
      setIsMenuOpen((prev) => !prev);
    }
  }, [isMounted]);

  const handleMenuClose = useCallback(() => {
    if (isMounted) {
      setIsMenuOpen(false);
    }
  }, [isMounted]);

  const handleProfileToggle = useCallback(() => {
    if (isMounted) {
      setIsProfileOpen((prev) => !prev);
    }
  }, [isMounted]);

  const handleLogout = () => {
    setIsProfileOpen(false);
    router.push("/login");
  };

  const navItems = [
    { name: "الرئيسية", href: "/home", icon: "ri-home-line" },
    { name: "المشاريع", href: "/projects", icon: "ri-building-line" },
    { name: "الخدمات", href: "/services", icon: "ri-service-line" },
    { name: "المتجر", href: "/store", icon: "ri-store-line" },
    { name: "من نحن", href: "/about", icon: "ri-team-line" },
    { name: "اتصل بنا", href: "/contact", icon: "ri-phone-line" },
    {
      name: "مصمم الديكور الذكي",
      href: "/lin-designer",
      icon: "ri-palette-line",
    },
  ];

  const getHeaderClasses = () => {
    return `fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 transform ${
      isScrolled
        ? "bg-[#0A1F21]/95 backdrop-blur-xl shadow-2xl border-b-2 border-[#CBC1B8]/50 translate-y-0"
        : "bg-[#0A1F21] translate-y-0"
    }`;
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="h-20"></div>

      <header className={getHeaderClasses()}>
        <div className="w-full px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/home" className="group flex items-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#CBC1B8] via-[#F7F6F4] to-[#CBC1B8] rounded-xl opacity-0 group-hover:opacity-75 blur-md transition-all duration-500 group-hover:animate-pulse"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#F7F6F4] via-[#CBC1B8] to-[#F7F6F4] border-2 border-[#0F3A3E] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-lg shadow-[#0F3A3E]/40 group-hover:shadow-2xl group-hover:shadow-[#0F3A3E]/70 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#0F3A3E] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#0F3A3E] to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute inset-1 border border-[#1C474A]/40 rounded-lg group-hover:border-[#1C474A] group-hover:scale-95 transition-all duration-500"></div>
                  <img
                    src="/luxury line logo-21.png"
                    alt="Luxurylines Logo"
                    className="relative z-10 w-full h-full object-contain scale-150 group-hover:scale-[1.7] group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-all duration-700"></div>
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center justify-center space-x-3 space-x-reverse flex-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`group relative px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    pathname === item.href
                      ? "text-[#CBC1B8] bg-[#CBC1B8]/10"
                      : "text-[#F7F6F4]/90 hover:text-[#CBC1B8] hover:bg-[#CBC1B8]/10"
                  }`}
                >
                  <span className="flex items-center space-x-2 space-x-reverse whitespace-nowrap">
                    <i
                      className={`${item.icon} text-base group-hover:animate-pulse`}
                    ></i>
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
              <Link
                href="/cart"
                className="relative p-2 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer text-[#F7F6F4]/80 hover:bg-[#F7F6F4]/10 hover:text-[#F7F6F4]"
              >
                <i className="ri-shopping-cart-line text-lg"></i>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#CBC1B8] text-[#0A1F21] text-xs rounded-full flex items-center justify-center animate-pulse">
                  3
                </span>
              </Link>

              <div className="relative" ref={profileRef}>
                <button
                  onClick={handleProfileToggle}
                  className="p-2 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer text-[#F7F6F4]/80 hover:bg-[#F7F6F4]/10 hover:text-[#F7F6F4]"
                >
                  <i className="ri-user-line text-lg"></i>
                </button>

                {isProfileOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-gradient-to-br from-[#1C474A] via-[#0A2F33] to-[#0A1F21] rounded-xl shadow-2xl border border-[#CBC1B8]/40 overflow-hidden z-[9999] animate-slide-down backdrop-blur-xl">
                    {/* Header مع تأثير متوهج */}
                    <div className="relative bg-gradient-to-r from-[#0A2F33] to-[#1C474A] p-3 border-b border-[#CBC1B8]/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#CBC1B8]/5 to-transparent"></div>
                      <div className="relative flex items-center space-x-2 space-x-reverse">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#CBC1B8] via-[#F7F6F4] to-[#CBC1B8] rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#CBC1B8]/20">
                          <i className="ri-user-fill text-[#0A1F21] text-lg"></i>
                        </div>
                        <div>
                          <p className="text-[#F7F6F4] font-bold text-sm">
                            مرحباً بك
                          </p>
                          <p className="text-[#CBC1B8] text-xs font-medium">
                            عميل مميز
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* القائمة */}
                    <div className="py-1">
                      <Link
                        href="/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center space-x-2 space-x-reverse px-4 py-2.5 hover:bg-gradient-to-r hover:from-[#CBC1B8]/15 hover:to-transparent transition-all duration-300 cursor-pointer group border-r-2 border-transparent hover:border-[#CBC1B8]"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8]/20 to-[#CBC1B8]/5 rounded-lg group-hover:from-[#CBC1B8]/30 group-hover:to-[#CBC1B8]/10 group-hover:scale-110 transition-all duration-300">
                          <i className="ri-user-settings-line text-[#CBC1B8] text-base"></i>
                        </div>
                        <span className="text-[#F7F6F4] font-medium text-sm group-hover:text-[#CBC1B8] transition-colors flex-1">
                          الملف الشخصي
                        </span>
                        <i className="ri-arrow-left-s-line text-[#CBC1B8]/50 group-hover:text-[#CBC1B8] text-sm"></i>
                      </Link>

                      <Link
                        href="/orders"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center space-x-2 space-x-reverse px-4 py-2.5 hover:bg-gradient-to-r hover:from-[#CBC1B8]/15 hover:to-transparent transition-all duration-300 cursor-pointer group border-r-2 border-transparent hover:border-[#CBC1B8]"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8]/20 to-[#CBC1B8]/5 rounded-lg group-hover:from-[#CBC1B8]/30 group-hover:to-[#CBC1B8]/10 group-hover:scale-110 transition-all duration-300">
                          <i className="ri-shopping-bag-line text-[#CBC1B8] text-base"></i>
                        </div>
                        <span className="text-[#F7F6F4] font-medium text-sm group-hover:text-[#CBC1B8] transition-colors flex-1">
                          طلباتي
                        </span>
                        <i className="ri-arrow-left-s-line text-[#CBC1B8]/50 group-hover:text-[#CBC1B8] text-sm"></i>
                      </Link>

                      <Link
                        href="/favorites"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center space-x-2 space-x-reverse px-4 py-2.5 hover:bg-gradient-to-r hover:from-[#CBC1B8]/15 hover:to-transparent transition-all duration-300 cursor-pointer group border-r-2 border-transparent hover:border-[#CBC1B8]"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8]/20 to-[#CBC1B8]/5 rounded-lg group-hover:from-[#CBC1B8]/30 group-hover:to-[#CBC1B8]/10 group-hover:scale-110 transition-all duration-300">
                          <i className="ri-heart-line text-[#CBC1B8] text-base"></i>
                        </div>
                        <span className="text-[#F7F6F4] font-medium text-sm group-hover:text-[#CBC1B8] transition-colors flex-1">
                          المفضلة
                        </span>
                        <i className="ri-arrow-left-s-line text-[#CBC1B8]/50 group-hover:text-[#CBC1B8] text-sm"></i>
                      </Link>

                      <div className="border-t border-[#CBC1B8]/20 my-1 mx-4"></div>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-2 space-x-reverse px-4 py-2.5 hover:bg-gradient-to-r hover:from-red-500/15 hover:to-transparent transition-all duration-300 cursor-pointer group border-r-2 border-transparent hover:border-red-500"
                      >
                        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-red-500/5 rounded-lg group-hover:from-red-500/30 group-hover:to-red-500/10 group-hover:scale-110 transition-all duration-300">
                          <i className="ri-logout-box-line text-red-400 text-base"></i>
                        </div>
                        <span className="text-red-400 font-medium text-sm group-hover:text-red-500 transition-colors flex-1 text-right">
                          تسجيل الخروج
                        </span>
                        <i className="ri-arrow-left-s-line text-red-400/50 group-hover:text-red-500 text-sm"></i>
                      </button>
                    </div>

                    {/* Footer مع تأثير */}
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-[#CBC1B8] to-transparent"></div>
                  </div>
                )}
              </div>

              <Link href="/consultation">
                <button className="group relative bg-[#CBC1B8]/10 text-[#CBC1B8] px-5 py-2 rounded-lg font-semibold text-sm border border-[#CBC1B8]/30 hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 whitespace-nowrap cursor-pointer ml-2 hover:shadow-lg hover:shadow-[#CBC1B8]/20">
                  <span className="flex items-center space-x-2 space-x-reverse">
                    <i className="ri-lightbulb-flash-line text-base"></i>
                    <span>نصائح من خبرائنا</span>
                  </span>
                </button>
              </Link>
            </div>

            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 rounded-lg transition-all duration-300 cursor-pointer text-[#F7F6F4]"
            >
              <i
                className={`text-xl ${
                  isMenuOpen ? "ri-close-line" : "ri-menu-line"
                }`}
              ></i>
            </button>
          </div>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 bg-[#1C474A]/95 backdrop-blur-lg rounded-xl mt-4 shadow-2xl border border-[#CBC1B8]/20">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={handleMenuClose}
                  className={`flex items-center space-x-3 space-x-reverse px-6 py-3 transition-all duration-300 rounded-lg mx-2 cursor-pointer ${
                    pathname === item.href
                      ? "text-[#CBC1B8] bg-[#CBC1B8]/10"
                      : "text-[#F7F6F4]/90 hover:text-[#CBC1B8] hover:bg-[#CBC1B8]/10"
                  }`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span>{item.name}</span>
                </Link>
              ))}

              <div className="border-t border-[#CBC1B8]/20 mx-4 my-4"></div>

              <div className="px-6 pb-4 space-y-3">
                <Link
                  href="/cart"
                  className="flex items-center space-x-3 space-x-reverse text-[#F7F6F4]/90 hover:text-[#CBC1B8] transition-colors cursor-pointer"
                >
                  <i className="ri-shopping-cart-line text-lg"></i>
                  <span>السلة (3)</span>
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center space-x-3 space-x-reverse text-[#F7F6F4]/90 hover:text-[#CBC1B8] transition-colors cursor-pointer"
                >
                  <i className="ri-user-line text-lg"></i>
                  <span>الملف الشخصي</span>
                </Link>

                <Link href="/consultation">
                  <button className="w-full bg-[#CBC1B8]/10 text-[#CBC1B8] py-3 rounded-lg font-semibold border border-[#CBC1B8]/30 hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 cursor-pointer hover:shadow-lg">
                    <span className="flex items-center justify-center space-x-2 space-x-reverse">
                      <i className="ri-lightbulb-flash-line"></i>
                      <span>نصائح من خبرائنا</span>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
