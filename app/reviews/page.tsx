import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewsHero from './ReviewsHero';
import ReviewsStats from './ReviewsStats';
import ReviewsGrid from './ReviewsGrid';
import ReviewForm from './ReviewForm';

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <ReviewsHero />
        <ReviewsStats />
        <ReviewsGrid />
        <ReviewForm />
      </main>
      <Footer />
    </>
  );
}
