export default function ProfileHero() {
  return (
    <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2F33] to-[#0A1F21]">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="w-24 h-24 bg-[#CBC1B8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float">
          <i className="ri-user-settings-line text-[#0A1F21] text-5xl"></i>
        </div>
        <h1 className="text-5xl font-bold text-[#F7F6F4] mb-4 animate-fade-in-up">
          الملف الشخصي
        </h1>
        <p className="text-[#CBC1B8] text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          إدارة معلوماتك الشخصية وإعدادات حسابك
        </p>
      </div>
    </section>
  );
}
