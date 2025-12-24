
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoreHero from './StoreHero';
import ProductCategories from './ProductCategories';
import FeaturedProducts from './FeaturedProducts';
import StoreFeatures from './StoreFeatures';

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1F21] to-[#1C474A]">
      <Header />
      <main>
        <StoreHero />
        <ProductCategories />
        <FeaturedProducts />
        <StoreFeatures />
      </main>
      <Footer />
    </div>
  );
}
