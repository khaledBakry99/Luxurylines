import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PolicyHero from './PolicyHero';
import PolicyContent from './PolicyContent';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PolicyHero />
        <PolicyContent />
      </main>
      <Footer />
    </div>
  );
}
