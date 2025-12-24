'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Step = 'email' | 'verification' | 'reset' | 'success';

export default function ForgotPasswordHero() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(0);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend code
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Step 1: Send email
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setCurrentStep('verification');
    setCountdown(60); // Start 60 second countdown
  };

  // Handle verification code input
  const handleCodeChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers
    
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
    setVerificationCode(newCode);
    
    // Focus last filled input or first empty
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  // Step 2: Verify code
  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = verificationCode.join('');
    
    if (code.length !== 6) {
      setError('الرجاء إدخال الرمز المكون من 6 أرقام');
      return;
    }

    setIsLoading(true);
    setError('');
    
    // Simulate API call - In real app, verify with backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate verification (accept any 6 digits for demo)
    setIsLoading(false);
    setCurrentStep('reset');
  };

  // Resend verification code
  const handleResendCode = async () => {
    if (countdown > 0) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setCountdown(60);
    setVerificationCode(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  // Step 3: Reset password
  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 8) {
      setError('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setCurrentStep('success');
  };

  // Redirect to login after success
  const handleGoToLogin = () => {
    router.push('/login');
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
            <h1 className="text-4xl font-bold text-[#F7F6F4] mb-2 font-['Cairo']">
              {currentStep === 'email' && 'نسيت كلمة المرور؟'}
              {currentStep === 'verification' && 'التحقق من الرمز'}
              {currentStep === 'reset' && 'إعادة تعيين كلمة المرور'}
              {currentStep === 'success' && 'تم بنجاح!'}
            </h1>
            <p className="text-[#CBC1B8]/90">
              {currentStep === 'email' && 'لا تقلق، سنساعدك على استعادة حسابك'}
              {currentStep === 'verification' && 'أدخل الرمز المرسل إلى بريدك الإلكتروني'}
              {currentStep === 'reset' && 'اختر كلمة مرور جديدة وقوية'}
              {currentStep === 'success' && 'تم تغيير كلمة المرور بنجاح'}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-card-glow p-8 border border-white/20">
            {/* Step 1: Email Input */}
            {currentStep === 'email' && (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CBC1B8]/20 rounded-full mb-4">
                    <i className="ri-lock-password-line text-3xl text-[#CBC1B8]"></i>
                  </div>
                  <p className="text-white/80 text-sm">
                    أدخل بريدك الإلكتروني وسنرسل لك رمز التحقق
                  </p>
                </div>

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
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full bg-white/10 border-2 border-[#CBC1B8]/50 text-[#CBC1B8] py-3 rounded-xl font-bold hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/15 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <i className="ri-loader-4-line text-xl animate-spin"></i>
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line text-xl group-hover:animate-pulse"></i>
                        <span>إرسال رمز التحقق</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            )}

            {/* Step 2: Verification Code */}
            {currentStep === 'verification' && (
              <form onSubmit={handleVerificationSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CBC1B8]/20 rounded-full mb-4">
                    <i className="ri-shield-check-line text-3xl text-[#CBC1B8]"></i>
                  </div>
                  <p className="text-white/80 text-sm mb-2">
                    تم إرسال رمز التحقق إلى
                  </p>
                  <p className="text-[#CBC1B8] font-semibold">{email}</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-4 text-center">
                    أدخل الرمز المكون من 6 أرقام
                  </label>
                  <div className="flex gap-2 justify-center" dir="ltr">
                    {verificationCode.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={index === 0 ? handlePaste : undefined}
                        className="w-12 h-14 text-center text-2xl font-bold border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-[#CBC1B8] transition-all bg-white/10 text-white"
                      />
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="text-center text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || verificationCode.join('').length !== 6}
                  className="group relative w-full bg-white/10 border-2 border-[#CBC1B8]/50 text-[#CBC1B8] py-3 rounded-xl font-bold hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/15 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <i className="ri-loader-4-line text-xl animate-spin"></i>
                        <span>جاري التحقق...</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-checkbox-circle-line text-xl group-hover:animate-pulse"></i>
                        <span>تحقق من الرمز</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={countdown > 0 || isLoading}
                    className="text-[#CBC1B8] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {countdown > 0 ? (
                      `إعادة الإرسال بعد ${countdown} ثانية`
                    ) : (
                      'لم تستلم الرمز؟ أعد الإرسال'
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Reset Password */}
            {currentStep === 'reset' && (
              <form onSubmit={handleResetSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#CBC1B8]/20 rounded-full mb-4">
                    <i className="ri-lock-unlock-line text-3xl text-[#CBC1B8]"></i>
                  </div>
                  <p className="text-white/80 text-sm">
                    اختر كلمة مرور جديدة وقوية لحسابك
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    كلمة المرور الجديدة
                  </label>
                  <div className="relative">
                    <i className="ri-lock-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]"></i>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="أدخل كلمة المرور الجديدة"
                      className="w-full pr-12 pl-12 py-3 border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-[#CBC1B8] transition-all bg-white/10 text-white placeholder-white/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8] hover:text-white cursor-pointer"
                    >
                      <i className={showNewPassword ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    تأكيد كلمة المرور
                  </label>
                  <div className="relative">
                    <i className="ri-lock-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]"></i>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="أعد إدخال كلمة المرور"
                      className="w-full pr-12 pl-12 py-3 border-2 border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-[#CBC1B8] transition-all bg-white/10 text-white placeholder-white/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8] hover:text-white cursor-pointer"
                    >
                      <i className={showConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="text-center text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    {error}
                  </div>
                )}

                <div className="text-xs text-white/60 bg-white/5 p-3 rounded-lg border border-white/10">
                  <p className="font-semibold text-white mb-2">متطلبات كلمة المرور:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2">
                      <i className={`ri-checkbox-circle-${newPassword.length >= 8 ? 'fill text-green-400' : 'line text-white/40'} text-sm`}></i>
                      <span>8 أحرف على الأقل</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className={`ri-checkbox-circle-${/[A-Z]/.test(newPassword) ? 'fill text-green-400' : 'line text-white/40'} text-sm`}></i>
                      <span>حرف كبير واحد على الأقل</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <i className={`ri-checkbox-circle-${/[0-9]/.test(newPassword) ? 'fill text-green-400' : 'line text-white/40'} text-sm`}></i>
                      <span>رقم واحد على الأقل</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full bg-white/10 border-2 border-[#CBC1B8]/50 text-[#CBC1B8] py-3 rounded-xl font-bold hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/15 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <i className="ri-loader-4-line text-xl animate-spin"></i>
                        <span>جاري التحديث...</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-check-line text-xl group-hover:animate-pulse"></i>
                        <span>تحديث كلمة المرور</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            )}

            {/* Step 4: Success */}
            {currentStep === 'success' && (
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4 animate-bounce-slow">
                  <i className="ri-checkbox-circle-fill text-5xl text-green-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">تم التحديث بنجاح!</h3>
                <p className="text-white/80 leading-relaxed">
                  تم تغيير كلمة المرور الخاصة بك بنجاح
                  <br />
                  يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة
                </p>
                <button
                  onClick={handleGoToLogin}
                  className="group relative w-full bg-white/10 border-2 border-[#CBC1B8]/50 text-[#CBC1B8] py-3 rounded-xl font-bold hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/15 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <i className="ri-login-box-line text-xl group-hover:animate-pulse"></i>
                    <span>الذهاب لتسجيل الدخول</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            )}

            {currentStep !== 'success' && (
              <div className="mt-6 text-center">
                <Link href="/login" className="text-[#CBC1B8]/90 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2">
                  <i className="ri-arrow-right-line"></i>
                  <span>العودة لتسجيل الدخول</span>
                </Link>
              </div>
            )}
          </div>

          {currentStep === 'email' && (
            <div className="mt-8 text-center">
              <Link href="/" className="text-[#CBC1B8]/90 hover:text-[#F7F6F4] transition-colors cursor-pointer">
                <i className="ri-home-line ml-2"></i>
                العودة للرئيسية
              </Link>
            </div>
          )}
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
