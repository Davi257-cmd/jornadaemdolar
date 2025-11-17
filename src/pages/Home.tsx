import React, { useState } from 'react';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import JorginhoBioSection from '@/components/JorginhoBioSection';
import SocialProofSection from '@/components/SocialProofSection';
import SpecialOfferSection from '@/components/SpecialOfferSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showTopBar, setShowTopBar] = useState(true);
  return (
    <div className="min-h-screen bg-[#0A0E27]">
      {showTopBar && (
        <div className="fixed top-0 inset-x-0 z-50">
          <div className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white uppercase font-bold tracking-wide text-[12px] sm:text-[14px] py-1.5 overflow-hidden">
            <div className="marquee">
              <div className="marquee-track">
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
                <span className="marquee-item">PRÉ-LANÇAMENTO - VAGAS LIMITADAS •</span>
              </div>
            </div>
            <button
              aria-label="Fechar aviso"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors text-lg"
              onClick={() => setShowTopBar(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      <Hero />
      <BenefitsSection />
      <JorginhoBioSection />
      <SocialProofSection />
      <SpecialOfferSection />
      <Footer />
      
    </div>
  );
}