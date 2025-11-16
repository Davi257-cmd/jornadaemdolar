import React, { useState, useEffect } from 'react';
import { Clock, Users, Flame, CheckCircle, ArrowRight, Shield } from 'lucide-react';

interface TimerProps {
  targetDate: Date;
}

const OfferTimer: React.FC<TimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 justify-center">
      {[
        { label: 'HORAS', value: timeLeft.hours },
        { label: 'MIN', value: timeLeft.minutes },
        { label: 'SEG', value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="bg-red-500/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[60px] border border-red-500/30">
            <div className="text-2xl md:text-3xl font-bold text-red-400">
              {item.value.toString().padStart(2, '0')}
            </div>
          </div>
          <div className="text-xs text-red-400/70 mt-1 font-medium">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const SpecialOfferSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 2);
  targetDate.setMinutes(30);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('special-offer');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleFinalCTA = () => {
    window.location.href = 'https://chat.whatsapp.com/GcG1teIhDYVLZ50rCYi2pr?';
  };

  return (
    <section
      id="special-offer"
      className={`relative py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#2d1b69] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Elementos decorativos de urgência */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-10 right-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-bounce" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-red-500/20 rounded-full blur-lg animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header com urgência máxima */}
          <div className="text-center mb-12">
            {/* Badge de escassez */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm mb-6 animate-pulse">
              <Flame className="w-4 h-4 animate-bounce" />
              OFERTA ESPECIAL DE PRÉ LANÇAMENTO FATURANDO EM DÓLAR!
              <Flame className="w-4 h-4 animate-bounce" />
            </div>

            {/* Título principal */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              BLACK FRIDAY{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                EXCLUSIVA
              </span>
            </h2>

            {/* Subtítulo com urgência */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Entre no grupo de PRÉ-LANÇAMENTO e tenha acesso antecipado a um valor especial de Black Friday. 
              Acesso IMEDIATO ao grupo fechado com estrutura validada para faturar em dólar.
            </p>
          </div>

          {/* Container principal com glassmorphism */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {/* Timer de urgência central */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-red-500/30">
                <Clock className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-red-400 font-bold text-lg">
                  01:36 - ACABANDO!
                </span>
              </div>
              <OfferTimer targetDate={targetDate} />
            </div>

            {/* Benefícios da oferta */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  title: "Acesso Imediato ao Grupo Fechado",
                  description: "Entre agora e comece hoje mesmo"
                },
                {
                  title: "Estrutura Pronta e Validada",
                  description: "Copie e cole o que já funciona"
                },
                {
                  title: "Suporte 24/7 da Comunidade",
                  description: "Mentoria de quem já está faturando"
                },
                {
                  title: "Garantia de 7 Dias",
                  description: "Ou seu dinheiro de volta"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Final com urgência */}
            <div className="text-center">
              <button
                onClick={handleFinalCTA}
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-2xl w-full max-w-md"
              >
                <span className="relative z-10">
                  Entrar no grupo de pré-lançamento
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Texto de escassez */}
              <div className="mt-6 flex items-center justify-center gap-2 text-red-400">
                <Users className="w-5 h-5" />
                <span className="font-semibold">
                  Vagas LIMITADAS - Últimos minutos para garantir seu acesso!
                </span>
              </div>

              {/* Prova social final */}
              <div className="mt-4 text-white/60 text-sm">
                <p>01:36 - Timer real acabando • Garanta seu acesso antes que feche!</p>
              </div>
            </div>
          </div>

          {/* Selo de garantia */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white text-sm font-medium">
                Garantia de 7 dias • Risco zero para você
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;