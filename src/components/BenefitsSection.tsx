import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  delay: number;
  imageSrc?: string;
  imageAlt?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description, delay, imageSrc, imageAlt }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-500`}>
      {imageSrc && (
        <div className="relative flex justify-center">
          <div className="relative w-[300px] h-[413px] md:w-[500px] md:h-[613px] max-w-full">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover rounded-[10px] border-2 border-yellow-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Lives semanais e mentoria",
      description: "Acompanhamento ao vivo duas vezes por semana para acelerar sua execução.",
      imageSrc: "/images/lives-semanais.png",
      imageAlt: "Live Semanais e ao vivo de mentoria 2 vezes por semana"
    },
    {
      title: "Comunidade no WhatsApp",
      description: "Acesso imediato à comunidade VIP para suporte e networking.",
      imageSrc: "/images/Comunidade-vip.png",
      imageAlt: "Comunidade Digital no WhatsApp"
    },
    {
      title: "Sistemas de produtos em dólar",
      description: "Estrutura completa com produtos e ofertas que já convertem em moeda forte.",
      imageSrc: "/images/sistema-de-produtos-dolar.png",
      imageAlt: "Sistemas de Produtos em Dólar"
    },
    {
      title: "Ferramenta de espionagem pro",
      description: "Descubra e replique criativos e funis vencedores com rapidez.",
      imageSrc: "/images/ferramenta-de-espionagem.png",
      imageAlt: "Ferramenta de espionagem pro"
    },
    {
      title: "Produtos prontos e validados",
      description: "Ativos prontos para uso com copy, páginas e criativos aprovados.",
      imageSrc: "/images/jornada-em-dolar.png",
      imageAlt: "Todos os meus produtos prontos e validados"
    }
    ,
    {
      title: "Produtos validados em dólar",
      description: "Ofertas que já convertem em dólar, prontas para ativar.",
      imageSrc: "/images/produtos validados em dolar.png",
      imageAlt: "Produtos validados em dólar"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a]">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tudo que você vai receber</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">Benefícios práticos e ativos validados para acelerar seus resultados.</p>
        </div>
        {/* Header removido para foco total nas imagens */}

        {/* Grid de imagens 9:16 */}
        <div className="carousel w-full">
          <div className="carousel-track">
            {[...benefits, ...benefits].map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                delay={index * 200}
                imageSrc={benefit.imageSrc}
                imageAlt={benefit.imageAlt}
              />
            ))}
          </div>
        </div>

        {/* CTA secundário */}
        <div className="container mx-auto px-4 text-center mt-16">
          <button
            onClick={() => (window.location.href = 'https://chat.whatsapp.com/GcG1teIhDYVLZ50rCYi2pr?')}
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 min-w-[200px] md:min-w-[240px]"
          >
            GARANTA SUA VAGA AGORA
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;