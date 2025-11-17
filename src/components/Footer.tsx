import React from 'react';
import { Flame, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const handleFinalCTA = () => {
    window.location.href = 'https://chat.whatsapp.com/GcG1teIhDYVLZ50rCYi2pr?';
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#2d1b69] to-[#0A0E27] py-16">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Final */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-sm mb-6 animate-pulse">
              <Flame className="w-4 h-4" />
              ÚLTIMA CHANCE
              <Flame className="w-4 h-4" />
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Não perca essa{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                oportunidade única
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              As vagas estão acabando e o grupo fechado será aberto apenas para quem garantir agora
            </p>

            <button
              onClick={handleFinalCTA}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full text-base font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
            >
              <span>Garantir minha vaga</span>
              <Users className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Informações de contato */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-white/70">
            <div>
              <h3 className="text-white font-semibold mb-3">Suporte</h3>
              <p className="text-sm">Atendimento via WhatsApp</p>
              <p className="text-sm">Resposta em até 24h</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Acesso</h3>
              <p className="text-sm">Entrada imediata</p>
              <p className="text-sm">Grupo exclusivo WhatsApp</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Garantia</h3>
              <p className="text-sm">7 dias de garantia</p>
              <p className="text-sm">Risco zero para você</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-sm">
              © 2025 Estrutura que Fatura em Dólar. Todos os direitos reservados.
            </p>
            <p className="text-white/40 text-xs mt-2">
              Esta página foi criada para pré-lançamento com vagas limitadas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;