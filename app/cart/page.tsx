
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartHero from './CartHero';
import CartItems from './CartItems';
import CartSummary from './CartSummary';

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F3F] to-[#003366]">
      <Header />
      <main>
        <CartHero />
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems />
            </div>
            <div>
              <CartSummary />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
