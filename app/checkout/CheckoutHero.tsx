'use client';

export default function CheckoutHero() {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20luxury%20payment%20checkout%20scene%20with%20elegant%20credit%20cards%2C%20secure%20payment%20terminal%2C%20sophisticated%20financial%20technology%2C%20premium%20banking%20atmosphere%2C%20soft%20lighting%2C%20professional%20photography%2C%20clean%20minimalist%20background%20with%20subtle%20gold%20and%20blue%20tones&width=1920&height=600&seq=checkout-hero-bg&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/95 via-[#001F3F]/90 to-[#FFA500]/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-full flex items-center justify-center shadow-lg">
              <i className="ri-shield-check-line text-white text-xl"></i>
            </div>
            <span className="text-white font-bold text-lg">دفع آمن ومضمون 100%</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            إتمام عملية
            <span className="block mt-2 bg-gradient-to-r from-[#FFA500] via-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              الدفع الآمن
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            اختر طريقة الدفع المناسبة لك من بين الخيارات المتعددة المتاحة
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <i className="ri-lock-line text-emerald-300 text-2xl"></i>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-sm">تشفير SSL</p>
                <p className="text-blue-200 text-xs">حماية كاملة</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <i className="ri-time-line text-blue-300 text-2xl"></i>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-sm">معالجة فورية</p>
                <p className="text-blue-200 text-xs">خلال ثوانٍ</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <i className="ri-customer-service-line text-purple-300 text-2xl"></i>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-sm">دعم 24/7</p>
                <p className="text-blue-200 text-xs">نحن هنا لمساعدتك</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
