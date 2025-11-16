import React, { useState, useEffect } from 'react';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1';
import { motion } from 'motion/react';
import { Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      text: "A estrutura simples me permitiu vender em dólar com tráfego direto. Acabei com a incerteza e passei a prever entradas todo dia.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      name: "Carlos Mendes",
      role: "Gestor de Tráfego",
    },
    {
      text: "Com o funil pronto, qualifiquei leads e fechei tickets maiores sem precisar aparecer.",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      name: "Ana Paula Rocha",
      role: "Empreendedora",
    },
    {
      text: "Como social media, adaptei os criativos e vi conversões em 48 horas.",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
      name: "Lucas Silva",
      role: "Social Media",
    },
    {
      text: "A copy estruturada e a oferta validada fizeram toda a diferença. Parei de testar sem fim.",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      name: "Mariana Oliveira",
      role: "Copywriter",
    },
    {
      text: "Sou designer freelancer e consegui vender pacotes para a América Latina cobrando em dólar.",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      name: "João Souza",
      role: "Designer",
    },
    {
      text: "Como afiliado, pluguei a estrutura e comecei a ver ‘venda realizada’ no celular.",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      name: "Camila Santos",
      role: "Afiliada",
    },
    {
      text: "Migrei parte do tráfego do meu e-commerce e aumentei o ROI com a mesma oferta.",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      name: "Rafael Lima",
      role: "E-commerce",
    },
    {
      text: "Trabalho CLT e opero à noite; mesmo assim consigo faturar com automação.",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      name: "Bruna Carvalho",
      role: "Analista",
    },
    {
      text: "Uso o funil para captar leads qualificados e fechar consultorias em dólar.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      name: "Pedro Almeida",
      role: "Consultor de Marketing",
    },
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      {/* Overlays externos para suavizar topo e base */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 via-black/20 to-transparent backdrop-blur-md" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 via-black/20 to-transparent backdrop-blur-md" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Depoimentos de{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              quem já aplicou
            </span>{' '}
            a estrutura
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Veja o que estão dizendo os alunos que já estão faturando em dólar com a estrutura
          </p>
        </div>

        {/* Depoimentos - Colunas com animação */}
        <div className="container z-10 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden"
          >
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </motion.div>
        </div>

        {/* Métricas sociais */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[
            { label: "Membros Ativos", value: "+500", icon: <Users className="w-6 h-6" /> },
            { label: "Taxa de Sucesso", value: "97%", icon: <TrendingUp className="w-6 h-6" /> },
            { label: "Faturamento Total", value: "$2.3M", icon: <DollarSign className="w-6 h-6" /> },
            { label: "Satisfação", value: "4.9/5", icon: <Star className="w-6 h-6" /> }
          ].map((metric, index) => (
            <div
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-3 text-orange-400">
                {metric.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-white/70 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;