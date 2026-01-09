import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PolicyHero from "./PolicyHero";
import PolicyContent from "./PolicyContent";

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2F33] to-[#0A1F21]">
      <Header />
      <main>
        <PolicyHero />
        <PolicyContent />
      </main>
      <Footer />
    </div>
  );
}
