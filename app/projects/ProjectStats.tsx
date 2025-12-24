'use client';
import { useState, useEffect, useRef } from 'react';

export default function ProjectStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0, awards: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = { projects: 250, clients: 500, years: 15, awards: 25 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        projects: Math.floor(finalCounts.projects * progress),
        clients: Math.floor(finalCounts.clients * progress),
        years: Math.floor(finalCounts.years * progress),
        awards: Math.floor(finalCounts.awards * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, stepDuration);
  };

  const stats = [
    { 
      icon: 'ri-building-line', 
      count: counts.projects, 
      label: 'مشروع مكتمل',
      color: 'from-[#1C474A] to-[#0F3A3E]'
    },
    { 
      icon: 'ri-user-heart-line', 
      count: counts.clients, 
      label: 'عميل راضٍ',
      color: 'from-[#0A2F33] to-[#1C474A]'
    },
    { 
      icon: 'ri-calendar-line', 
      count: counts.years, 
      label: 'سنة خبرة',
      color: 'from-[#1C474A] to-[#0F3A3E]'
    },
    { 
      icon: 'ri-star-line', 
      count: 98, 
      label: 'نسبة رضا العملاء',
      suffix: '%',
      color: 'from-[#0A2F33] to-[#1C474A]'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-[#0F3A3E] to-[#1C474A] relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CBC1B8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="group relative">
                {/* أيقونة مع خلفية متدرجة */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                  <i className={`${stat.icon} text-3xl text-[#F7F6F4] group-hover:animate-pulse`}></i>
                </div>

                {/* العدد */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#F7F6F4] font-['Cairo']">
                    {stat.count}{stat.suffix || '+'}
                  </span>
                </div>

                {/* التسمية */}
                <p className="text-[#CBC1B8]/90 text-lg font-medium">{stat.label}</p>

                {/* تأثير الخلفية عند الهوفر */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#CBC1B8]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
