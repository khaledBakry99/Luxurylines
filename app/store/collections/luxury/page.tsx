import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LuxuryHero from './LuxuryHero';
import LuxuryGallery from './LuxuryGallery';
import LuxuryFeatures from './LuxuryFeatures';

export default function LuxuryCollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LuxuryHero />
        <LuxuryGallery />
        <LuxuryFeatures />
      </main>
      <Footer />
    </div>
  );
}
