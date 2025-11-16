import React, { useState, useEffect } from 'react';
import { DollarSign, Zap, Shield, TrendingUp } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Ícone com efeito de brilho */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white">
          {icon}
        </div>
      </div>

      {/* Título */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
        {description}
      </p>

      {/* Efeito de brilho no hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Acesso Imediato à Minha Estrutura",
      description: "Entre na comunidade e receba o mesmo funil, as mesmas ofertas e estratégias que já estão gerando vendas todos os dias."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ofertas Validadas para América Latina",
      description: "Nada de testar - você vai usar os mesmos ativos digitais que já estão convertendo em dólar agora."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Aprenda Quem Já Fatura em Dólar",
      description: "Nada de teoria: você vai acompanhar, por dentro, minhas campanhas e estratégias reais, com atualizações exclusivas."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Lucro em até 48 Horas",
      description: "Você aprende fazendo. A estrutura já vem pronta - basta seguir o processo e ativar suas campanhas."
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a]">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Por que empreendedores estão usando a mesma{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              estrutura que fatura em dólar
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Descubra os benefícios que estão transformando empreendedores em máquinas de faturar em moeda forte
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 200}
            />
          ))}
        </div>

        {/* CTA secundário */}
        <div className="text-center mt-16">
          <button
            onClick={() => (window.location.href = 'https://chat.whatsapp.com/GcG1teIhDYVLZ50rCYi2pr?')}
            className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Quero faturar em dólar agora
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;