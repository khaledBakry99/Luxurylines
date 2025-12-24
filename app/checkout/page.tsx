import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutHero from './CheckoutHero';
import CheckoutForm from './CheckoutForm';
import CheckoutSummary from './CheckoutSummary';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50">
      <Header />
      <CheckoutHero />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          
          <div className="lg:col-span-1">
            <CheckoutSummary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
