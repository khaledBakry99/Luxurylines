import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MinimalistHero from './MinimalistHero';
import MinimalistGallery from './MinimalistGallery';
import MinimalistFeatures from './MinimalistFeatures';

export default function MinimalistCollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MinimalistHero />
        <MinimalistGallery />
        <MinimalistFeatures />
      </main>
      <Footer />
    </div>
  );
}
