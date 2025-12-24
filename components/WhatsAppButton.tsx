'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/966501234567', '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={handleClick}
        className="group relative w-16 h-16 bg-gradient-to-br from-[#25D366] via-[#1EBE5B] to-[#128C7E] rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-110 hover:rotate-6 flex items-center justify-center overflow-hidden"
        aria-label="تواصل عبر واتساب"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50"></div>
        
        <div className="absolute inset-0 bg-[#25D366] rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1 right-1 w-2 h-2 bg-white/40 rounded-full animate-ping-slow"></div>
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping-slower"></div>
        </div>

        <i className="ri-whatsapp-fill text-white text-3xl relative z-10 group-hover:scale-125 transition-all duration-500 drop-shadow-lg"></i>
        
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl transform -skew-x-12"></div>
      </button>

      <div 
        className={`absolute bottom-full left-0 mb-3 transition-all duration-500 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2.5 rounded-xl shadow-2xl whitespace-nowrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">تواصل معنا الآن</span>
          </div>
          <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-gray-900 transform rotate-45"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes ping-slower {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}