'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServiceCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      number: '150+',
      label: 'مشروع منجز',
      icon: 'ri-building-line'
    },
    {
      number: '98%',
      label: 'معدل رضا العملاء',
      icon: 'ri-heart-line'
    },
    {
      number: '15+',
      label: 'سنة خبرة',
      icon: 'ri-time-line'
    },
    {
      number: '24/7',
      label: 'دعم فني',
      icon: 'ri-customer-service-2-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#CBC1B8] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-6">
            هل أنت مستعد لبدء مشروعك؟
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            انضم إلى مئات العملاء الذين وثقوا بنا في إدارة وتنفيذ مشاريعهم بنجاح
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/services/expert-tips"
              className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <i className="ri-lightbulb-line text-xl group-hover:rotate-[360deg] transition-transform duration-700"></i>
                <span>نصائح من الخبراء</span>
                <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F21]/0 via-[#0A1F21]/10 to-[#0A1F21]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
            <Link
              href="/contact"
              className="group relative bg-[#0A1F21] border-2 border-[#CBC1B8] text-[#CBC1B8] px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#0A1F21] transition-colors duration-300">
                <i className="ri-phone-line text-xl group-hover:rotate-12 transition-transform duration-300"></i>
                <span>تواصل معنا</span>
                <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-top-left"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-bottom-right"></div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                <i className={`${stat.icon} text-2xl text-[#0A1F21]`}></i>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
