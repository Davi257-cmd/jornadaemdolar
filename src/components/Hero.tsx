import React, { useState, useEffect } from 'react';
import { ChevronRight, Flame, Clock, Users } from 'lucide-react';

interface TimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<TimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
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
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {[
        { label: 'DIAS', value: timeLeft.days },
        { label: 'HORAS', value: timeLeft.hours },
        { label: 'MIN', value: timeLeft.minutes },
        { label: 'SEG', value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[70px]">
            <div className="text-3xl md:text-4xl font-bold text-white">
              {item.value.toString().padStart(2, '0')}
            </div>
          </div>
          <div className="text-xs text-white/70 mt-1 font-medium">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  targetDate.setHours(23, 59, 59);

  const videoSrc = encodeURI(
    "/videos/Daqui a pouco todo mundo vai falar sobre isso-vender low ticket em espanhol é a nova virada do m.mp4"
  );

  const handleCTA = () => {
    window.location.href = 'https://chat.whatsapp.com/GcG1teIhDYVLZ50rCYi2pr?';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background com blur efeito exclusivo */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Video - Formato 9:16 */}
        <div className="mobile-video-container md:hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/foto do autor.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          {/* Overlay especial para mobile 9:16 */}
          <div className="mobile-overlay-9-16 absolute inset-0" />
        </div>
        
        {/* Desktop Video */}
        <div className="hidden md:block absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/images/foto do autor.jpg"
            className="video-background"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          
          {/* Overlay escuro para melhor contraste desktop */}
          <div className="video-overlay" />
          
          {/* Gradient overlay adicional para exclusividade */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-500/20 pointer-events-none" />
        </div>
      </div>

      {/* Elementos decorativos animados - ocultos no mobile */}
      <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-30 container mx-auto px-4 text-center">
        {/* Badge de urgência */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-sm mb-8 animate-pulse">
          <Flame className="w-4 h-4" />
          PRÉ-LANÇAMENTO - VAGAS LIMITADAS
          <Flame className="w-4 h-4" />
        </div>

        {/* Headline principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          A ESTRUTURA que{' '}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            FATURA em DÓLAR
          </span>{' '}
          TODOS OS DIAS
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Eu REVELEI à MINHA ESTRUTURA COMPLETA. Aplique e fature - com ofertas e criativos validados 
          e um funil pronto para converter. Estratégias que já estão convertendo em dólar. 
          Sem precisar aparecer, sem conversar com ninguém e sem produzir conteúdo.
        </p>

        {/* Timer de urgência */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-white/80 mb-6">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">ACABANDO EM:</span>
          </div>
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* CTA Principal */}
        <button
          onClick={handleCTA}
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-base font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
        >
          <span>Entrar no grupo de pré-lançamento</span>
          <Users className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>

        {/* Prova social rápida */}
        <div className="mt-12 flex items-center justify-center gap-6 text-white/70">
          <div className="flex items-center gap-2">
          <div className="relative bottom-[9px] md:static md:bottom-0 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm">Acesso imediato à minha estrutura que já está faturando em dólar</span>
        </div>
      </div>
      </div>

      {/* Scroll indicator - oculto no mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;