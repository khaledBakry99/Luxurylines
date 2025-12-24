import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShopHero from './ShopHero';
import ProductsShowcase from './ProductsShowcase';
import ShopFeatures from './ShopFeatures';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1F21] to-[#1C474A]">
      <Header />
      <main>
        <ShopHero />
        <ProductsShowcase />
        <ShopFeatures />
      </main>
      <Footer />
    </div>
  );
}
