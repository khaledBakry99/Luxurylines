
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './ServicesHero';
import ServicesGrid from './ServicesGrid';
import ServiceProcess from './ServiceProcess';
import ServicePackages from './ServicePackages';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A1F21]">
      <Header />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServiceProcess />
        <ServicePackages />
      </main>
      <Footer />
    </div>
  );
}
