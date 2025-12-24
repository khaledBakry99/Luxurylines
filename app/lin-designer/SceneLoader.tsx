'use client';

import { useEffect, useState } from 'react';

export default function SceneLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center z-10">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto">
            <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#374151"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * progress) / 100}
                transform="rotate(-90 50 50)"
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b35" />
                  <stop offset="100%" stopColor="#ff8c42" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <i className="ri-home-3d-line text-4xl text-[#ff6b35] mb-2 animate-pulse"></i>
                <p className="text-2xl font-bold text-white">{progress}%</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-3 animate-fade-in">
          جاري تحميل المشهد ثلاثي الأبعاد
        </h2>
        <p className="text-gray-400 text-lg mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          يرجى الانتظار بينما نقوم بإعداد غرفتك...
        </p>

        <div className="flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="w-3 h-3 bg-[#ff6b35] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-[#ff6b35] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-[#ff6b35] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

        <div className="mt-12 max-w-md mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-start gap-4 text-right">
              <i className="ri-lightbulb-flash-line text-2xl text-[#ff6b35] mt-1"></i>
              <div>
                <h3 className="text-white font-semibold mb-2">نصيحة سريعة</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  استخدم الماوس للتحكم بالكاميرا: اسحب للدوران، عجلة الماوس للتكبير، والنقر الأيمن للتحريك
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
