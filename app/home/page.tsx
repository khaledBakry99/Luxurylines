import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LinDesignerSection from '@/components/home/LinDesignerSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1F21] to-[#1C474A]">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <FeaturedProjects />
        <WhyChooseUs />
        <TestimonialsSection />
        <LinDesignerSection />
      </main>
      <Footer />
    </div>
  );
}
