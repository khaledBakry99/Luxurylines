'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 12.5;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 12.5;
    return Math.min(strength, 100);
  };

  const passwordStrength = calculatePasswordStrength(formData.password);
  
  const getStrengthColor = () => {
    if (passwordStrength < 25) return 'bg-red-500';
    if (passwordStrength < 50) return 'bg-orange-500';
    if (passwordStrength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (passwordStrength < 25) return 'ضعيفة جداً';
    if (passwordStrength < 50) return 'ضعيفة';
    if (passwordStrength < 75) return 'متوسطة';
    return 'قوية';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', formData);
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Signup with ${provider}`);
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

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Right Side - Features */}
          <div className="text-[#F7F6F4] space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight">
                <span className="text-[#CBC1B8]">Luxurylines</span> للتصميم الداخلي
              </h1>
              <p className="text-xl text-[#CBC1B8]/90 leading-relaxed">
                نحن شركة رائدة في مجال التصميم الداخلي والديكور، نقدم حلولاً مبتكرة وتصاميم عصرية تلائم مختلف الأذواق. ويتولى فريقنا، المكون من مصممين ومهندسين محترفين على تحويل أحلامكم إلى واقع ملموس، مع تقديم خدمات التعهّد الكامل وتسليم الشقق على المفتاح لضمان تجربة متكاملة ونتائج تفوق التوقعات.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: 'ri-vip-crown-line', title: 'خدمات حصرية', desc: 'تصاميم فريدة ومميزة' },
                { icon: 'ri-team-line', title: 'فريق محترف', desc: 'خبراء في التصميم والتنفيذ' },
                { icon: 'ri-lightbulb-flash-line', title: 'تصاميم مبتكرة', desc: 'أفكار عصرية وإبداعية' },
                { icon: 'ri-shield-check-line', title: 'تنفيذ احترافي', desc: 'جودة عالية في التنفيذ' },
                { icon: 'ri-customer-service-line', title: 'دعم مستمر', desc: 'متابعة دائمة لمشاريعك' },
                { icon: 'ri-price-tag-3-line', title: 'أسعار تنافسية', desc: 'عروض مميزة وأسعار مناسبة' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-[#F7F6F4]/5 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/10 hover:bg-[#F7F6F4]/10 hover:border-[#CBC1B8]/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${feature.icon} text-2xl text-[#0A1F21]`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#F7F6F4]">{feature.title}</h3>
                  <p className="text-sm text-[#CBC1B8]/80">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Left Side - Signup Form */}
          <div className="animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '200ms' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-card-glow p-8 lg:p-10 border border-white/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl mb-4 animate-bounce-slow">
                  <i className="ri-user-add-line text-3xl text-[#0A1F21]"></i>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">إنشاء حساب جديد</h2>
                <p className="text-[#CBC1B8]/90">انضم إلينا وابدأ رحلتك معنا</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-white mb-2">الاسم الكامل</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <i className="ri-user-line text-xl text-[#CBC1B8] group-focus-within:text-white transition-colors duration-300"></i>
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pr-12 pl-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-white mb-2">البريد الإلكتروني</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <i className="ri-mail-line text-xl text-[#CBC1B8] group-focus-within:text-white transition-colors duration-300"></i>
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pr-12 pl-4 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                      placeholder="example@email.com"
                      dir="ltr"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-white mb-2">كلمة المرور</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <i className="ri-lock-line text-xl text-[#CBC1B8] group-focus-within:text-white transition-colors duration-300"></i>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full pr-12 pl-12 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#CBC1B8] hover:text-white transition-colors duration-300"
                    >
                      <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-xl`}></i>
                    </button>
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/80 font-semibold">قوة كلمة المرور:</span>
                        <span className={`font-bold ${
                          passwordStrength < 25 ? 'text-red-400' :
                          passwordStrength < 50 ? 'text-orange-400' :
                          passwordStrength < 75 ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>
                          {getStrengthText()}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getStrengthColor()} transition-all duration-300 rounded-full`}
                          style={{ width: `${passwordStrength}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-white/70 space-y-1 bg-white/5 p-3 rounded-lg border border-white/10">
                        <p className="font-semibold text-white mb-1">يجب أن تحتوي كلمة المرور على:</p>
                        <div className="flex items-center gap-2">
                          <i className={`ri-checkbox-circle-${formData.password.length >= 8 ? 'fill text-green-400' : 'line text-white/40'} text-sm`}></i>
                          <span>8 أحرف على الأقل</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className={`ri-checkbox-circle-${/[A-Z]/.test(formData.password) ? 'fill text-green-400' : 'line text-white/40'} text-sm`}></i>
                          <span>حرف كبير واحد على الأقل (A-Z)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className={`ri-checkbox-circle-${/[a-z]/.test(formData.password) ? 'fill text-green-400' : 'line text-white/40'} text-sm`}></i>
                          <span>حرف صغير واحد على الأقل (a-z)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className={`ri-checkbox-circle-${/[0-9]/.test(formData.password) ? 'fill text-green-400' : 'line text-white/40'} text-sm`}></i>
                          <span>رقم واحد على الأقل (0-9)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className={`ri-checkbox-circle-${/[^a-zA-Z0-9]/.test(formData.password) ? 'fill text-green-400' : 'line text-white/40'} text-sm`}></i>
                          <span>رمز خاص واحد على الأقل (!@#$%)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-white mb-2">تأكيد كلمة المرور</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <i className="ri-lock-line text-xl text-[#CBC1B8] group-focus-within:text-white transition-colors duration-300"></i>
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="w-full pr-12 pl-12 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 hover:border-white/30"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#CBC1B8] hover:text-white transition-colors duration-300"
                    >
                      <i className={`${showConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-xl`}></i>
                    </button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <label className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                    className="w-5 h-5 mt-0.5 rounded-lg border-2 border-white/30 text-[#CBC1B8] focus:ring-2 focus:ring-[#CBC1B8]/20 cursor-pointer transition-all duration-300 bg-white/10"
                    required
                  />
                  <span className="mr-3 text-sm text-white/80 group-hover:text-white transition-colors duration-300">
                    أوافق على{' '}
                    <Link href="/terms" className="font-semibold text-[#CBC1B8] hover:text-white underline">
                      الشروط والأحكام
                    </Link>
                  </span>
                </label>

                {/* Signup Button */}
                <button
                  type="submit"
                  className="group relative w-full py-4 bg-white/10 border-2 border-[#CBC1B8]/50 text-[#CBC1B8] font-bold rounded-xl overflow-hidden hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/15 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    <i className="ri-user-add-line text-xl group-hover:animate-pulse"></i>
                    <span>إنشاء حساب</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-4 bg-white/10 text-sm text-white font-semibold">أو التسجيل عبر</span>
                  </div>
                </div>

                {/* Social Signup */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://accounts.google.com/o/oauth2/v2/auth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center py-3 px-4 bg-white/10 border-2 border-white/20 rounded-xl font-semibold text-white overflow-hidden hover:border-[#CBC1B8] hover:bg-white/15 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#CBC1B8]/15"
                  >
                    <i className="ri-google-fill text-xl ml-2 text-red-400"></i>
                    <span className="whitespace-nowrap">Google</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                  <a
                    href="https://www.facebook.com/v12.0/dialog/oauth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center py-3 px-4 bg-white/10 border-2 border-white/20 rounded-xl font-semibold text-white overflow-hidden hover:border-[#CBC1B8] hover:bg-white/15 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#CBC1B8]/15"
                  >
                    <i className="ri-facebook-fill text-xl ml-2 text-blue-400"></i>
                    <span className="whitespace-nowrap">Facebook</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                </div>

                {/* Login Link */}
                <p className="text-center text-sm text-white/70 mt-6">
                  لديك حساب بالفعل؟{' '}
                  <Link 
                    href="/login" 
                    className="font-bold text-[#CBC1B8] hover:text-white transition-colors duration-300 relative group"
                  >
                    تسجيل الدخول
                    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#CBC1B8] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </p>
              </form>
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
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
