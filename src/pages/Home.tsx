import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import JorginhoBioSection from '@/components/JorginhoBioSection';
import SocialProofSection from '@/components/SocialProofSection';
import SpecialOfferSection from '@/components/SpecialOfferSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0E27]">
      <Hero />
      <BenefitsSection />
      <JorginhoBioSection />
      <SocialProofSection />
      <SpecialOfferSection />
      <Footer />
    </div>
  );
}