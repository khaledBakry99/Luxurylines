'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginHero() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/home');
  };

  const handleAdminLogin = () => {
    router.push('/admin');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A1F21] via-[#1C474A] to-[#0A1F21]">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#CBC1B8]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-[#F7F6F4]/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#CBC1B8]/10 rounded-lg blur-2xl animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-[#F7F6F4]/15 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#CBC1B8]/15 rounded-lg blur-xl animate-pulse-slow"></div>
        
        <div className="absolute top-10 left-1/3 w-48 h-48 bg-[#CBC1B8]/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 left-1/2 w-36 h-36 bg-[#F7F6F4]/20 rounded-lg blur-2xl animate-spin-slow"></div>
        <div className="absolute top-1/4 left-[45%] w-28 h-28 bg-[#CBC1B8]/10 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute top-[15%] left-[38%] w-20 h-20 bg-[#F7F6F4]/15 rounded-lg blur-xl animate-pulse-slow"></div>
        <div className="absolute top-[30%] left-[42%] w-32 h-32 bg-[#CBC1B8]/12 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-[#0A1F21] font-bold text-2xl font-['Pacifico']">L</span>
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-[#F7F6F4] mb-2 font-['Cairo']">مرحباً بعودتك</h1>
          <p className="text-[#CBC1B8]/90">سجل دخولك للوصول إلى حسابك</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-card-glow p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <i className="ri-mail-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  dir="ltr"
                  className="w-full pr-12 pl-4 py-3 border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-[#CBC1B8] transition-all bg-white/10 text-white placeholder-white/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <i className="ri-lock-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]"></i>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  className="w-full pr-12 pl-12 py-3 border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-[#CBC1B8] transition-all bg-white/10 text-white placeholder-white/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8] hover:text-white cursor-pointer"
                >
                  <i className={showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-[#CBC1B8] border-white/30 rounded focus:ring-[#CBC1B8] cursor-pointer bg-white/10" />
                <span className="mr-2 text-sm text-white/80">تذكرني</span>
              </label>
              <Link href="/forgot-password" className="text-sm text-[#CBC1B8] hover:text-white font-semibold cursor-pointer">
                نسيت كلمة المرور؟
              </Link>
            </div>

            <button
              type="submit"
              className="group relative w-full bg-white/10 border-2 border-[#CBC1B8]/50 text-[#CBC1B8] py-3 rounded-xl font-bold hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/15 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="ri-login-box-line text-xl group-hover:animate-pulse"></i>
                <span>تسجيل الدخول</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <button
              type="button"
              onClick={handleAdminLogin}
              className="group relative w-full bg-white/10 border-2 border-[#CBC1B8]/50 text-[#CBC1B8] py-3 rounded-xl font-bold hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/15 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="ri-admin-line text-xl group-hover:animate-pulse"></i>
                <span>دخول الأدمن</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/70">
              ليس لديك حساب؟{' '}
              <Link href="/signup" className="text-[#CBC1B8] hover:text-white font-semibold cursor-pointer">
                سجل الآن
              </Link>
            </p>
          </div>
        </div>

       
      </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
