'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function AllServicesGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: 'التصميم الداخلي',
      description: 'تصاميم داخلية مبتكرة تجمع بين الجمال والوظيفة مع مراعاة أحدث الاتجاهات',
      icon: 'ri-home-4-line',
      features: ['تصميم المساحات', 'اختيار الألوان', 'الأثاث والديكور', 'الإضاءة'],
      link: '/services/interior-design',
      gradient: 'from-[#0A1F21] to-[#0F3A3E]'
    },
    {
      title: 'التصميم الخارجي',
      description: 'تصاميم خارجية متميزة تعكس هوية المبنى وتتناسب مع البيئة المحيطة',
      icon: 'ri-building-line',
      features: ['الواجهات', 'المداخل', 'الحدائق', 'الإضاءة الخارجية'],
      link: '/services/exterior-design',
      gradient: 'from-[#0F3A3E] to-[#0A2F33]'
    },
    {
      title: 'التشطيب',
      description: 'خدمات تشطيب شاملة بأعلى معايير الجودة لإنهاء مشروعك بشكل مثالي',
      icon: 'ri-paint-brush-line',
      features: ['الدهانات', 'الأرضيات', 'الأسقف', 'التفاصيل النهائية'],
      link: '/services/finishing',
      gradient: 'from-[#0A2F33] to-[#1C474A]'
    },
    {
      title: 'توريد الأساس',
      description: 'توريد مواد بناء وتشطيب عالية الجودة من أفضل الموردين',
      icon: 'ri-truck-line',
      features: ['مواد البناء', 'الأدوات الصحية', 'الكهربائيات', 'الديكورات'],
      link: '/services/supply',
      gradient: 'from-[#1C474A] to-[#0A1F21]'
    },
    {
      title: 'إدارة المشاريع',
      description: 'إدارة احترافية لمشروعك من البداية حتى التسليم النهائي',
      icon: 'ri-briefcase-line',
      features: ['التخطيط', 'التنفيذ', 'المتابعة', 'ضمان الجودة'],
      link: '/services/project-management',
      gradient: 'from-[#0A1F21] to-[#0F3A3E]'
    },
    {
      title: 'نصائح من الخبراء',
      description: 'نصائح هندسية متخصصة من خبراء لضمان نجاح مشروعك وتحقيق أفضل النتائج',
      icon: 'ri-lightbulb-line',
      features: ['دراسة الجدوى', 'التصاميم الهندسية', 'الإشراف الفني', 'حلول مبتكرة'],
      link: '/services/expert-tips',
      gradient: 'from-[#0A2F33] to-[#1C474A]'
    },
    {
      title: 'التصميم المعماري',
      description: 'تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفة مع مراعاة أحدث المعايير الهندسية',
      icon: 'ri-building-2-line',
      features: ['التصميم الإنشائي', 'المخططات الهندسية', 'التصاريح والموافقات', 'الرسومات التنفيذية'],
      link: '/services/architectural-design',
      gradient: 'from-[#0F3A3E] to-[#0A2F33]'
    },
    {
      title: 'الديكور والتنسيق',
      description: 'خدمات ديكور وتنسيق متكاملة لإضفاء لمسة جمالية فريدة على مساحتك',
      icon: 'ri-palette-line',
      features: ['اختيار الألوان', 'الإكسسوارات', 'الستائر والمفروشات', 'اللوحات الفنية'],
      link: '/services/decoration',
      gradient: 'from-[#0A2F33] to-[#1C474A]'
    },
    {
      title: 'الإضاءة الذكية',
      description: 'حلول إضاءة ذكية ومبتكرة تجمع بين الكفاءة والجمال لخلق أجواء مثالية',
      icon: 'ri-lightbulb-flash-line',
      features: ['إضاءة LED', 'التحكم الذكي', 'توفير الطاقة', 'تصميم الإضاءة'],
      link: '/services/smart-lighting',
      gradient: 'from-[#0F3A3E] to-[#1C474A]'
    },
    {
      title: 'الأثاث المخصص',
      description: 'تصميم وتصنيع أثاث مخصص يناسب احتياجاتك ومساحتك بأعلى معايير الجودة',
      icon: 'ri-home-gear-line',
      features: ['تصميم حسب الطلب', 'خامات فاخرة', 'تصنيع محلي', 'ضمان طويل'],
      link: '/services/custom-furniture',
      gradient: 'from-[#1C474A] to-[#0A1F21]'
    },
    {
      title: 'المطابخ الفاخرة',
      description: 'تصميم وتنفيذ مطابخ فاخرة بأحدث التقنيات والتجهيزات العالمية',
      icon: 'ri-restaurant-2-line',
      features: ['تصميم عصري', 'أجهزة متطورة', 'خامات مقاومة', 'تخزين ذكي'],
      link: '/services/luxury-kitchens',
      gradient: 'from-[#0A2F33] to-[#0F3A3E]'
    },
    {
      title: 'الحمامات العصرية',
      description: 'تصميم حمامات عصرية فاخرة تجمع بين الراحة والأناقة مع أفضل التجهيزات',
      icon: 'ri-drop-line',
      features: ['تصميم سبا', 'أدوات صحية فاخرة', 'إضاءة مميزة', 'مواد مقاومة للماء'],
      link: '/services/modern-bathrooms',
      gradient: 'from-[#1C474A] to-[#0F3A3E]'
    }
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform border border-white/20 hover:bg-white/20 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              <div className="absolute inset-0 bg-[#CBC1B8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>

                <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-4 group-hover:text-[#CBC1B8] transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/70 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                      <i className="ri-checkbox-circle-fill text-lg ml-3 text-[#CBC1B8]"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.link}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  <span>عرض التفاصيل</span>
                  <i className="ri-arrow-left-line mr-3 group-hover:mr-5 transition-all duration-300"></i>
                </Link>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CBC1B8]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#CBC1B8]/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}