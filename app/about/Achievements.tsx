'use client';

import { useState, useEffect, useRef } from 'react';

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    experience: 0
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        projects: 500,
        clients: 200,
        awards: 15,
        experience: 15
      };

      const duration = 2000; // 2 seconds
      const steps = 50;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          awards: Math.floor(targets.awards * progress),
          experience: Math.floor(targets.experience * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const achievements = [
    {
      icon: 'ri-building-line',
      number: counters.projects,
      suffix: '+',
      title: 'مشروع مكتمل',
      description: 'مشاريع متنوعة سكنية وتجارية',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: 'ri-heart-line',
      number: counters.clients,
      suffix: '+',
      title: 'عميل سعيد',
      description: 'عملاء راضون عن خدماتنا',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: 'ri-award-line',
      number: counters.awards,
      suffix: '+',
      title: 'جائزة تميز',
      description: 'جوائز محلية وإقليمية',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'ri-time-line',
      number: counters.experience,
      suffix: '+',
      title: 'سنة خبرة',
      description: 'خبرة متراكمة في المجال',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const awards = [
    {
      title: 'جائزة أفضل تصميم داخلي',
      year: '2023',
      organization: 'جمعية المهندسين السعوديين',
      image: 'https://readdy.ai/api/search-image?query=elegant%20interior%20design%20award%20trophy%20crystal%20glass%20with%20modern%20architectural%20elements%2C%20luxury%20office%20background%2C%20professional%20photography%2C%20sophisticated%20lighting&width=300&height=200&seq=1&orientation=landscape'
    },
    {
      title: 'شهادة التميز في التشطيبات',
      year: '2022',
      organization: 'غرفة التجارة والصناعة',
      image: 'https://readdy.ai/api/search-image?query=construction%20excellence%20certificate%20award%2C%20modern%20building%20materials%20and%20finishing%20samples%2C%20professional%20achievement%20recognition%2C%20elegant%20presentation&width=300&height=200&seq=2&orientation=landscape'
    },
    {
      title: 'أفضل مشروع سكني فاخر',
      year: '2021',
      organization: 'معرض الرياض للعقار',
      image: 'https://readdy.ai/api/search-image?query=luxury%20residential%20project%20award%2C%20elegant%20villa%20exterior%20with%20modern%20architecture%2C%20prestigious%20real%20estate%20recognition%2C%20professional%20achievement%20display&width=300&height=200&seq=3&orientation=landscape'
    }
  ];

  const partnerships = [
    { name: 'أرامكو السعودية', logo: 'https://readdy.ai/api/search-image?query=saudi%20aramco%20company%20logo%20style%2C%20professional%20corporate%20branding%2C%20clean%20minimalist%20design%2C%20business%20partnership%20representation&width=150&height=80&seq=1&orientation=landscape' },
    { name: 'سابك', logo: 'https://readdy.ai/api/search-image?query=sabic%20company%20logo%20style%2C%20industrial%20corporate%20branding%2C%20modern%20professional%20design%2C%20business%20partnership%20representation&width=150&height=80&seq=2&orientation=landscape' },
    { name: 'البنك الأهلي', logo: 'https://readdy.ai/api/search-image?query=national%20commercial%20bank%20saudi%20logo%20style%2C%20financial%20institution%20branding%2C%20professional%20corporate%20design%2C%20banking%20partnership%20representation&width=150&height=80&seq=3&orientation=landscape' },
    { name: 'شركة الكهرباء', logo: 'https://readdy.ai/api/search-image?query=saudi%20electricity%20company%20logo%20style%2C%20energy%20utility%20branding%2C%20professional%20corporate%20design%2C%20infrastructure%20partnership%20representation&width=150&height=80&seq=4&orientation=landscape' },
    { name: 'مجموعة سامبا', logo: 'https://readdy.ai/api/search-image?query=samba%20financial%20group%20logo%20style%2C%20banking%20corporate%20branding%2C%20professional%20financial%20design%2C%20business%20partnership%20representation&width=150&height=80&seq=5&orientation=landscape' },
    { name: 'شركة الاتصالات', logo: 'https://readdy.ai/api/search-image?query=stc%20saudi%20telecom%20company%20logo%20style%2C%20telecommunications%20branding%2C%20modern%20corporate%20design%2C%20technology%20partnership%20representation&width=150&height=80&seq=6&orientation=landscape' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#1C474A] to-[#0A1F21] relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#CBC1B8] rounded-full transform rotate-45 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F7F6F4] rounded-full transform -rotate-45 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 px-6 py-2 bg-[#CBC1B8]/10 rounded-full border border-[#CBC1B8]/20">
            <span className="text-[#CBC1B8] font-semibold text-sm">إنجازاتنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Cairo']">
            إنجازاتنا وشراكاتنا
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            فخورون بما حققناه من نجاحات وبالشراكات الاستراتيجية التي بنيناها عبر السنوات
          </p>
        </div>

        {/* الإحصائيات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{transitionDelay: `${index * 0.2}s`}}
            >
              <div className="group">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <i className={`${achievement.icon} text-3xl text-white`}></i>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-[#CBC1B8] mb-2 font-['Cairo']">
                  {achievement.number}{achievement.suffix}
                </div>
                
                <div className="text-lg font-medium text-white mb-1">
                  {achievement.title}
                </div>
                
                <div className="text-white/70 text-sm">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الجوائز والشهادات */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '0.8s'}}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-['Cairo']">
            الجوائز والشهادات
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 group shadow-card-glow hover:shadow-card-glow-hover"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-white font-['Cairo'] flex-1">
                      {award.title}
                    </h4>
                    <span className="text-[#CBC1B8] font-bold text-lg ml-3">
                      {award.year}
                    </span>
                  </div>
                  
                  <p className="text-white/70 text-sm">
                    {award.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* الشراكات */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1s'}}>
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-['Cairo']">
            شركاؤنا الاستراتيجيون
          </h3>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 shadow-card-glow">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partnerships.map((partner, index) => (
                <div 
                  key={index}
                  className="group text-center"
                >
                  <div className="bg-white/10 rounded-2xl p-4 hover:bg-[#CBC1B8]/20 transition-all duration-300 border border-white/20 hover:border-[#CBC1B8]/40">
                    <img 
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-xs text-white/70 mt-2 group-hover:text-[#CBC1B8] transition-colors duration-300">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}