import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailHero from './ServiceDetailHero';
import ServiceFeatures from './ServiceFeatures';
import ServiceGallery from './ServiceGallery';
import ServiceProcess from './ServiceProcess';
import ServicePackages from './ServicePackages';
import ServiceCTA from './ServiceCTA';

export default function ExteriorDesignPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceDetailHero />
        <ServiceFeatures />
        <ServiceGallery />
        <ServiceProcess />
        <ServicePackages />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
