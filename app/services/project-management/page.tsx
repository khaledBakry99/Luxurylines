
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetailHero from './ServiceDetailHero';
import ServiceFeatures from './ServiceFeatures';
import ServiceGallery from './ServiceGallery';
import ServiceProcess from './ServiceProcess';
import ServicePackages from './ServicePackages';
import ServiceCTA from './ServiceCTA';

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1F21] to-[#1C474A]">
      <Header />
      <main className="pt-20">
        <ServiceDetailHero />
        <ServiceFeatures />
        <ServiceGallery />
        <ServiceProcess />
        <ServicePackages />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
}
