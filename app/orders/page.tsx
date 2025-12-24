import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrdersHero from './OrdersHero';
import OrdersList from './OrdersList';

export default function OrdersPage() {
  return (
    <>
      <Header />
      <main>
        <OrdersHero />
        <OrdersList />
      </main>
      <Footer />
    </>
  );
}
