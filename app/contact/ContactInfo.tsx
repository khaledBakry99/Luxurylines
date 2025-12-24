'use client';

import { useState, useEffect } from 'react';

export default function ContactInfo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              icon: 'ri-phone-fill', 
              title: 'اتصل بنا مباشرة', 
              desc: '+966 50 123 4567',
              gradient: 'from-[#CBC1B8] to-[#F7F6F4]',
              action: 'tel:+966501234567',
              shadowColor: 'rgba(203, 193, 184, 0.3)'
            },
            { 
              icon: 'ri-whatsapp-fill', 
              title: 'واتساب', 
              desc: 'رد فوري على استفساراتك',
              gradient: 'from-[#25D366] to-[#128C7E]',
              action: 'https://wa.me/966501234567',
              shadowColor: 'rgba(37, 211, 102, 0.3)'
            },
            { 
              icon: 'ri-mail-fill', 
              title: 'البريد الإلكتروني', 
              desc: 'info@luxurylin.com',
              gradient: 'from-[#CBC1B8] to-[#F7F6F4]',
              action: 'mailto:info@luxurylin.com',
              shadowColor: 'rgba(203, 193, 184, 0.3)'
            }
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden border border-white/20 shadow-card-glow hover:shadow-card-glow-hover ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${contact.gradient.includes('25D366') ? '#25D366' : '#CBC1B8'}, transparent)` }}
              ></div>
              
              <div className="relative z-10 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br ${contact.gradient} rounded-2xl shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500`}>
                  <i className={`${contact.icon} text-white text-3xl`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#CBC1B8] transition-colors duration-300">
                  {contact.title}
                </h3>
                
                <p className="text-white/70 text-lg font-medium">
                  {contact.desc}
                </p>
              </div>

              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${contact.gradient} opacity-5 rounded-full group-hover:scale-150 group-hover:opacity-10 transition-all duration-700`}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
