import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FavoritesHero from './FavoritesHero';
import FavoritesList from './FavoritesList';

export default function FavoritesPage() {
  return (
    <>
      <Header />
      <main>
        <FavoritesHero />
        <FavoritesList />
      </main>
      <Footer />
    </>
  );
}
