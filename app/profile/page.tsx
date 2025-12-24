import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileHero from './ProfileHero';
import ProfileContent from './ProfileContent';

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main>
        <ProfileHero />
        <ProfileContent />
      </main>
      <Footer />
    </>
  );
}
