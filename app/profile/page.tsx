import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileHero from "./ProfileHero";
import ProfileContent from "./ProfileContent";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2F33] to-[#0A1F21] relative">
      <Header />
      <main>
        <ProfileHero />
        <ProfileContent />
      </main>
      <Footer />

      {/* طبقة الصفحة قيد التطوير */}
      <div className="fixed inset-0 bg-[#0A1F21]/95 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center px-6">
          <div className="inline-block mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
              <i className="ri-tools-line text-5xl text-[#0A1F21]"></i>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F7F6F4] mb-4">
            الصفحة قيد التطوير
          </h2>
          <p className="text-xl text-[#CBC1B8] mb-8 max-w-2xl mx-auto">
            نعمل حالياً على تطوير نظام الملف الشخصي لتقديم أفضل تجربة لإدارة
            حسابك ومعلوماتك
          </p>
          <div className="flex items-center justify-center gap-3 text-[#F7F6F4]/70">
            <div
              className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#CBC1B8] rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
