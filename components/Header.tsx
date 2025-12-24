'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== 'undefined') {
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleMenuToggle = useCallback(() => {
    if (isMounted) {
      setIsMenuOpen(prev => !prev);
    }
  }, [isMounted]);

  const handleMenuClose = useCallback(() => {
    if (isMounted) {
      setIsMenuOpen(false);
    }
  }, [isMounted]);

  const handleProfileToggle = useCallback(() => {
    if (isMounted) {
      setIsProfileOpen(prev => !prev);
    }
  }, [isMounted]);

  const handleLogout = () => {
    setIsProfileOpen(false);
    router.push('/login');
  };

  const navItems = [
    { name: 'الرئيسية', href: '/home', icon: 'ri-home-line' },
    { name: 'المشاريع', href: '/projects', icon: 'ri-building-line' },
    { name: 'الخدمات', href: '/services', icon: 'ri-service-line' },
    { name: 'المتجر', href: '/store', icon: 'ri-store-line' },
    { name: 'من نحن', href: '/about', icon: 'ri-team-line' },
    { name: 'اتصل بنا', href: '/contact', icon: 'ri-phone-line' },
    { name: 'مصمم الديكور الذكي', href: '/lin-designer', icon: 'ri-palette-line' }
  ];

  const getHeaderClasses = () => {
    return `fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 transform ${
      isScrolled 
        ? 'bg-[#0A1F21]/95 backdrop-blur-xl shadow-2xl border-b-2 border-[#CBC1B8]/50 translate-y-0' 
        : 'bg-[#0A1F21] translate-y-0'
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
            <Link href="/home" className="group flex items-center space-x-3 space-x-reverse">
              {/* اللوغو الأول */}
              <div className="relative">
                <img 
                  src="/luxury line options-01-02.png" 
                  alt="Luxurylines Logo 1" 
                  className="w-12 h-12 object-contain rounded-lg transform group-hover:scale-110 transition-all duration-300"
                />
              </div>
              
              {/* اللوغو الثاني */}
              <div className="relative">
                <img 
                  src="/luxury line options-01-01.png" 
                  alt="Luxurylines Logo 2" 
                  className="w-12 h-12 object-contain rounded-lg transform group-hover:scale-110 transition-all duration-300"
                />
              </div>
             
            </Link>

            <nav className="hidden lg:flex items-center justify-center space-x-3 space-x-reverse flex-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`group relative px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 ${
                    pathname === item.href
                      ? 'text-[#CBC1B8] bg-[#CBC1B8]/10'
                      : 'text-[#F7F6F4]/90 hover:text-[#CBC1B8] hover:bg-[#CBC1B8]/10'
                  }`}
                >
                  <span className="flex items-center space-x-2 space-x-reverse whitespace-nowrap">
                    <i className={`${item.icon} text-base group-hover:animate-pulse`}></i>
                    <span>{item.name}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
              <Link href="/cart" className="relative p-2 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer text-[#F7F6F4]/80 hover:bg-[#F7F6F4]/10 hover:text-[#F7F6F4]">
                <i className="ri-shopping-cart-line text-lg"></i>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#CBC1B8] text-[#0A1F21] text-xs rounded-full flex items-center justify-center animate-pulse">
                  3
                </span>
              </Link>

              <div className="relative">
                <button
                  onClick={handleProfileToggle}
                  className="p-2 rounded-lg transition-all duration-300 hover:scale-110 cursor-pointer text-[#F7F6F4]/80 hover:bg-[#F7F6F4]/10 hover:text-[#F7F6F4]"
                >
                  <i className="ri-user-line text-lg"></i>
                </button>

                {isProfileOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[10000]">
                    <div className="bg-gradient-to-r from-[#0A1F21] to-[#1C474A] p-4">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="w-12 h-12 bg-[#CBC1B8] rounded-full flex items-center justify-center">
                          <i className="ri-user-fill text-[#0A1F21] text-xl"></i>
                        </div>
                        <div>
                          <p className="text-[#F7F6F4] font-semibold">مرحباً بك</p>
                          <p className="text-[#CBC1B8]/90 text-sm">عميل مميز</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-2">
                      <Link
                        href="/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center space-x-3 space-x-reverse px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-user-settings-line text-[#0A1F21] text-lg group-hover:text-[#1C474A]"></i>
                        </div>
                        <span className="text-[#0A1F21] font-medium group-hover:text-[#1C474A]">الملف الشخصي</span>
                      </Link>
                      
                      <Link
                        href="/orders"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center space-x-3 space-x-reverse px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-shopping-bag-line text-[#0A1F21] text-lg group-hover:text-[#1C474A]"></i>
                        </div>
                        <span className="text-[#0A1F21] font-medium group-hover:text-[#1C474A]">طلباتي</span>
                      </Link>
                      
                      <Link
                        href="/favorites"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center space-x-3 space-x-reverse px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-heart-line text-[#0A1F21] text-lg group-hover:text-[#1C474A]"></i>
                        </div>
                        <span className="text-[#0A1F21] font-medium group-hover:text-[#1C474A]">المفضلة</span>
                      </Link>
                      
                      <div className="border-t border-gray-100 my-2"></div>
                      
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 space-x-reverse px-4 py-3 hover:bg-red-50 transition-colors cursor-pointer group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-logout-box-line text-red-600 text-lg"></i>
                        </div>
                        <span className="text-red-600 font-medium">تسجيل الخروج</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/consultation">
                <button className="group relative bg-[#CBC1B8] text-[#0A1F21] px-6 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden ml-2">
                  <span className="relative z-10 flex items-center space-x-2 space-x-reverse">
                    <i className="ri-customer-service-line text-sm group-hover:animate-pulse"></i>
                    <span>نصائح من خبرائنا</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1F21]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </Link>
            </div>

            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 rounded-lg transition-all duration-300 cursor-pointer text-[#F7F6F4]"
            >
              <i className={`text-xl ${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 bg-[#1C474A]/95 backdrop-blur-lg rounded-xl mt-4 shadow-2xl border border-[#CBC1B8]/20">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={handleMenuClose}
                  className={`flex items-center space-x-3 space-x-reverse px-6 py-3 transition-all duration-300 rounded-lg mx-2 cursor-pointer ${
                    pathname === item.href
                      ? 'text-[#CBC1B8] bg-[#CBC1B8]/10'
                      : 'text-[#F7F6F4]/90 hover:text-[#CBC1B8] hover:bg-[#CBC1B8]/10'
                  }`}
                >
                  <i className={`${item.icon} text-lg`}></i>
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-[#CBC1B8]/20 mx-4 my-4"></div>
              
              <div className="px-6 pb-4 space-y-3">
                <Link href="/cart" className="flex items-center space-x-3 space-x-reverse text-[#F7F6F4]/90 hover:text-[#CBC1B8] transition-colors cursor-pointer">
                  <i className="ri-shopping-cart-line text-lg"></i>
                  <span>السلة (3)</span>
                </Link>
                
                <Link href="/profile" className="flex items-center space-x-3 space-x-reverse text-[#F7F6F4]/90 hover:text-[#CBC1B8] transition-colors cursor-pointer">
                  <i className="ri-user-line text-lg"></i>
                  <span>الملف الشخصي</span>
                </Link>
                
                <Link href="/consultation">
                  <button className="relative w-full bg-[#CBC1B8] text-[#0A1F21] py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center space-x-2 space-x-reverse">
                      <i className="ri-customer-service-line"></i>
                      <span>نصائح من خبرائنا</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1F21]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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
