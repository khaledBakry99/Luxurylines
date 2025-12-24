import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExpertTipsHero from './ExpertTipsHero';
import TipsGrid from './TipsGrid';

export default function ExpertTipsPage() {
  return (
    <>
      <Header />
      <main>
        <ExpertTipsHero />
        <TipsGrid />
      </main>
      <Footer />
    </>
  );
}