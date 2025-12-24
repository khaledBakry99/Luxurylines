import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CollectionHero from './CollectionHero';
import CollectionGallery from './CollectionGallery';
import CollectionFeatures from './CollectionFeatures';

export default function ModernCollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CollectionHero />
        <CollectionGallery />
        <CollectionFeatures />
      </main>
      <Footer />
    </div>
  );
}
