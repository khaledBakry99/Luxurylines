'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function StoreHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    {
      id: 1,
      title: 'التصميم',
      icon: 'ri-pencil-ruler-2-line',
      services: ['تصميم داخلي', 'تصميم خارجي', 'تصميم واجهات', 'تخطيط مساحات']
    },
    {
      id: 2,
      title: 'التشطيب',
      icon: 'ri-paint-brush-line',
      services: ['دهانات فاخرة', 'جبس بورد', 'أرضيات', 'أسقف معلقة']
    },
    {
      id: 3,
      title: 'الأثاث',
      icon: 'ri-sofa-line',
      services: ['كنب وأرائك', 'طاولات', 'كراسي', 'خزائن']
    },
    {
      id: 4,
      title: 'الإضاءة',
      icon: 'ri-lightbulb-line',
      services: ['ثريات فاخرة', 'إضاءة مخفية', 'أباجورات', 'إضاءة LED']
    },
    {
      id: 5,
      title: 'الديكور',
      icon: 'ri-palette-line',
      services: ['لوحات فنية', 'مرايا', 'تحف', 'نباتات زينة']
    },
    {
      id: 6,
      title: 'المنسوجات',
      icon: 'ri-t-shirt-line',
      services: ['ستائر فاخرة', 'سجاد', 'وسائد', 'مفروشات']
    },
    {
      id: 7,
      title: 'ورق الجدران',
      icon: 'ri-image-line',
      services: ['ورق ثلاثي الأبعاد', 'ورق كلاسيكي', 'ورق مودرن', 'ورق مخملي']
    },
    {
      id: 8,
      title: 'الأرضيات',
      icon: 'ri-layout-grid-line',
      services: ['رخام', 'باركيه', 'سيراميك', 'بورسلان']
    },
    {
      id: 9,
      title: 'الإكسسوارات',
      icon: 'ri-home-smile-line',
      services: ['ساعات حائط', 'شمعدانات', 'مزهريات', 'تماثيل']
    },
    {
      id: 10,
      title: 'المطابخ',
      icon: 'ri-restaurant-line',
      services: ['مطابخ خشب', 'مطابخ ألمنيوم', 'رخام مطابخ', 'أجهزة مدمجة']
    },
    {
      id: 11,
      title: 'الحمامات',
      icon: 'ri-drop-line',
      services: ['أدوات صحية', 'مغاسل', 'بانيو', 'دش فاخر']
    },
    {
      id: 12,
      title: 'الأبواب والنوافذ',
      icon: 'ri-door-line',
      services: ['أبواب خشبية', 'نوافذ ألمنيوم', 'أبواب زجاجية', 'شبابيك عازلة']
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20interior%20design%20showroom%20with%20premium%20furniture%20displays%20elegant%20lighting%20fixtures%20and%20sophisticated%20home%20decor%20items%2C%20modern%20minimalist%20retail%20space%20with%20clean%20white%20background%20and%20warm%20ambient%20lighting%2C%20professional%20commercial%20photography&width=1920&height=1080&seq=store-hero-bg&orientation=landscape')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F21]/90 via-[#0F3A3E]/80 to-[#1C474A]/85"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 border border-[#CBC1B8]/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#CBC1B8]/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[#CBC1B8]/40 rounded-full animate-bounce-slow"></div>
          
          <div className="absolute top-32 right-32 w-16 h-16 bg-[#CBC1B8]/20 rotate-45 animate-float"></div>
          <div className="absolute bottom-40 left-40 w-12 h-12 border-2 border-[#CBC1B8]/50 rotate-45 animate-spin"></div>
          
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#CBC1B8]/20 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#CBC1B8]/15 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #CBC1B8 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #CBC1B8 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'float 8s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              اكتشف مجموعة مختارة بعناية من أفضل منتجات التصميم الداخلي والديكور الفاخر، 
              حيث تلتقي الجودة العالية بالتصميم المبتكر لتحويل مساحتك إلى تحفة فنية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-[#CBC1B8]/50 transition-all duration-300 cursor-pointer overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 80}ms`,
                  minHeight: '280px'
                }}
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#F7F6F4] via-[#CBC1B8]/90 to-[#F7F6F4] backdrop-blur-xl rounded-2xl transition-all duration-500 border-2 border-[#CBC1B8]/50 shadow-[0_0_30px_rgba(203,193,184,0.4)] ${
                  activeCategory === category.id ? 'opacity-100' : 'opacity-0'
                }`}></div>

                <div className={`relative z-10 transition-all duration-300 flex flex-col items-center justify-center h-full ${
                  activeCategory === category.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl transition-all duration-300 shadow-lg">
                    <i className={`${category.icon} text-3xl text-[#0A1F21]`}></i>
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-3 text-center transition-colors duration-300">
                    {category.title}
                  </h3>

                  <div className="text-center">
                    <div className="text-white/60 text-sm flex items-center justify-center gap-1">
                      <span>{category.services.length} خدمات</span>
                      <i className="ri-arrow-down-s-line text-[#CBC1B8]"></i>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 flex flex-col p-5 z-20 transition-all duration-500 ${
                  activeCategory === category.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <h3 className="text-[#0A1F21] font-bold text-lg mb-3 text-center drop-shadow-sm">
                    {category.title}
                  </h3>

                  <div className="space-y-2 w-full flex-1 flex flex-col justify-center">
                    {category.services.map((service, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 bg-white/90 rounded-lg px-3 py-2 border border-[#0A1F21]/10 hover:border-[#0A1F21]/30 hover:bg-white hover:shadow-md transition-all duration-300 backdrop-blur-sm"
                        style={{
                          animation: activeCategory === category.id ? `slideIn 0.3s ease-out ${idx * 0.1}s forwards` : 'none',
                          opacity: 0
                        }}
                      >
                        <i className="ri-check-line text-[#0A1F21] text-sm flex-shrink-0"></i>
                        <span className="text-[#0A1F21] font-medium text-xs">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mb-16">
            <Link 
              href="/store/shop"
              className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-16 py-6 rounded-full text-xl font-bold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#CBC1B8]/50 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center space-x-4 space-x-reverse">
                <i className="ri-shopping-bag-3-line text-2xl group-hover:animate-bounce"></i>
                <span>تصفح المنتجات</span>
                <i className="ri-arrow-left-line text-xl group-hover:translate-x-[-4px] transition-transform duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4] to-[#CBC1B8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0A1F21]/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#0A1F21]/15 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'ri-box-3-line', label: 'منتج متميز', value: '500+', color: 'text-[#CBC1B8]' },
              { icon: 'ri-star-line', label: 'تقييم العملاء', value: '4.9/5', color: 'text-[#CBC1B8]' },
              { icon: 'ri-truck-line', label: 'توصيل سريع', value: '24 ساعة', color: 'text-[#CBC1B8]' },
              { icon: 'ri-shield-check-line', label: 'ضمان الجودة', value: '100%', color: 'text-[#CBC1B8]' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${1200 + index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/20 group-hover:border-[#CBC1B8]/40 transition-all duration-300 group-hover:scale-110">
                  <i className={`${stat.icon} text-3xl ${stat.color} group-hover:animate-pulse`}></i>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#CBC1B8] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(45deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}