import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClassicHero from './ClassicHero';
import ClassicGallery from './ClassicGallery';
import ClassicFeatures from './ClassicFeatures';

export default function ClassicCollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ClassicHero />
        <ClassicGallery />
        <ClassicFeatures />
      </main>
      <Footer />
    </div>
  );
}
