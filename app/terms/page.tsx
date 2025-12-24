import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TermsContent from './TermsContent';

export const metadata = {
  title: 'الشروط والأحكام - Luxurylines',
  description: 'اطلع على شروط وأحكام استخدام خدمات Luxurylines',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1F21] to-[#1C474A]">
      <Header />
      <main>
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
