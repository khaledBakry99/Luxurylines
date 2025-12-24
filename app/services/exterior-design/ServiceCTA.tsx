import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0F3A3E] to-[#0A1F21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          هل أنت مستعد لتصميم خارجي متميز؟
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          دعنا نساعدك في تصميم واجهة خارجية تعكس هوية المبنى وتتناسب مع البيئة المحيطة
        </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services/expert-tips"
            className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-2xl whitespace-nowrap cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <i className="ri-lightbulb-line text-xl group-hover:rotate-[360deg] transition-transform duration-700"></i>
              <span>ظ†طµط§ط¦ط­ ظ…ظ† ط§ظ„ط®ط¨ط±ط§ط،</span>
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
              <span>طھظˆط§طµظ„ ظ…ط¹ظ†ط§</span>
              <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
            </span>
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-top-left"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#CBC1B8] rounded-full group-hover:scale-[50] transition-transform duration-700 origin-bottom-right"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
