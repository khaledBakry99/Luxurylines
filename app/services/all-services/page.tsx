import AllServicesHero from './AllServicesHero';
import AllServicesGrid from './AllServicesGrid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AllServicesPage() {
  return (
    <>
      <Header />
      <main>
        <AllServicesHero />
        <AllServicesGrid />
      </main>
      <Footer />
    </>
  );
}