import React, { useState, useEffect } from 'react';
import { CheckCircle, Award, Target, TrendingUp } from 'lucide-react';

const JorginhoBioSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('jorginho-bio');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const results = [
    {
      period: "Resultado 1",
      image: "/images/md-L3tUC-imagem-do-whatsapp-de-2025-11-12-as-114457-1c2dfad9.jpg",
      highlight: "+R$15.000 faturados"
    },
    {
      period: "Resultado 2", 
      image: "/images/md-aKfKe-imagem-do-whatsapp-de-2025-11-12-as-114457-6bb7d719.jpg",
      highlight: "+$3.200 em dólar"
    },
    {
      period: "Resultado 3",
      image: "/images/md-vj2Zj-imagem-do-whatsapp-de-2025-11-12-as-114457-16300b8a.jpg", 
      highlight: "+R$8.700 em vendas"
    }
  ];

  return (
    <section
      id="jorginho-bio"
      className={`relative py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Conheça quem vai te ensinar a{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                faturar em dólar
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A história do mentor que criou a estrutura que está mudando a vida de empreendedores
            </p>
          </div>

          {/* Bio com História */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Foto 9:16 do Jorginho - Minimalista */}
            <div className="flex justify-end lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-20" />
                <img 
                  src="/images/foto do autor.jpg" 
                  alt="Jorginho - Mentor e Especialista"
                  className="relative w-full md:w-[34rem] h-[28rem] md:h-[53rem] rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* História do Jorginho */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-4">Jorginho</h3>
                <p className="text-orange-400 font-medium mb-6">Mentor & Especialista em Vendas Internacionais</p>
                
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p>
                    Há mais de 5 anos, Jorginho decidiu quebrar barreiras geográficas e monetárias. 
                    Partindo do zero, construiu uma máquina de vendas que opera 24 horas por dia, 
                    convertendo leads qualificados em clientes high ticket - tudo isso sem aparecer 
                    ou precisar de uma grande equipe.
                  </p>
                  
                  <p>
                    Especialista em funis de vendas e estratégias de qualificação, ele desenvolveu 
                    uma metodologia única que permite a empreendedores comuns replicarem seus resultados 
                    no mercado internacional, faturando em dólar com ofertas validadas.
                  </p>
                  
                  <p>
                    Hoje, sua missão é compartilhar essa estrutura com outros empreendedores que buscam 
                    escalar seus negócios além das fronteiras nacionais, criando uma fonte previsível 
                    de renda em moeda forte.
                  </p>
                </div>

                {/* Especialidades */}
            <div className="inline-flex flex-wrap justify-center gap-[42px] sm:grid sm:grid-cols-3 sm:gap-4 mt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-sm">Funil de Vendas</h4>
                    <p className="text-white/70 text-xs">High Ticket</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-sm">Qualificação</h4>
                    <p className="text-white/70 text-xs">De Leads</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-sm">Vendas em</h4>
                    <p className="text-white/70 text-xs">Dólar</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={() => (window.location.href = 'https://chat.whatsapp.com/GcG1teIhDYVLZ50rCYi2pr?')}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  Quero aprender com o Jorginho
                  <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Resultados em Grid 9:16 com Animação */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Resultados Comprovados
            </h3>
            <div className="max-w-3xl mx-auto text-center px-4">
              <p className="text-white/80 mb-4">
                Cada “venda realizada” que aparece no meu celular é o reflexo de uma estrutura simples que funciona 24h por dia.
              </p>
              <p className="text-white/80">
                E o melhor? Você vai aprender a criar o mesmo sistema — aquele que transforma o celular em uma máquina previsível de faturar em dólar.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <img 
                    src={result.image}
                    alt={result.period}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[28rem] object-cover"
                  />
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default JorginhoBioSection;