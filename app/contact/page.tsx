
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1F21] to-[#1C474A]">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}
