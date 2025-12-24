
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from './AboutHero';
import CompanyStory from './CompanyStory';
import CompanyValues from './CompanyValues';
import TeamSection from './TeamSection';
import Achievements from './Achievements';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1F21] to-[#1C474A]">
      <Header />
      <main>
        <AboutHero />
        <CompanyStory />
        <CompanyValues />
        <TeamSection />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
