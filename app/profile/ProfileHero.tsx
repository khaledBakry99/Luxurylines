export default function ProfileHero() {
  return (
    <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#001F3F] via-[#003366] to-[#001F3F]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <i className="ri-user-settings-line text-white text-5xl"></i>
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">الملف الشخصي</h1>
        <p className="text-white/90 text-xl max-w-2xl mx-auto">
          إدارة معلوماتك الشخصية وإعدادات حسابك
        </p>
      </div>
    </section>
  );
}
