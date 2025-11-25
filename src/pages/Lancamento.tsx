import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  TrendingUp, 
  MessageCircle,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Target,
  Zap,
  Users,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';

const Lancamento: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    situacao: '',
    objetivo: '',
    timeline: '',
    motivo: ''
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Formulário enviado! Entraremos em contato em até 2 horas.');
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      pergunta: 'Preciso já estar vendendo online?',
      resposta: 'Não! A mentoria se adapta ao seu nível. Se você é iniciante, começamos do zero. Se já vende, focamos em escalar e otimizar. O Jorginho cria um plano customizado baseado na sua situação atual.'
    },
    {
      pergunta: 'Qual a melhor hora pra começar?',
      resposta: 'A melhor hora é AGORA. Quanto antes você começar, mais rápido verá resultados. A mentoria funciona de segunda a sexta, então você pode começar na próxima segunda-feira após a call de qualificação.'
    },
    {
      pergunta: 'Como funciona se eu sou iniciante?',
      resposta: 'Perfeito! Iniciantes são muito bem-vindos. O Jorginho vai te guiar passo a passo, desde a criação da estrutura até a primeira venda. O timeline típico é de 4-12 semanas para ter sua primeira operação faturando. Você sai da mentoria com sistema rodando.'
    },
    {
      pergunta: 'Qual é o compromisso de tempo?',
      resposta: 'São 5 horas semanais: 1 hora de call diária de segunda a sexta (totalizando 5 horas). Além disso, você terá acesso ao WhatsApp 24/7 para dúvidas urgentes. O compromisso é focado e eficiente.'
    },
    {
      pergunta: 'Como é a call diária na prática?',
      resposta: 'Cada dia tem um propósito específico: Segunda é diagnóstico e planejamento, Terça é implementação com Q&A em tempo real, Quarta é análise de dados, Quinta é escalação, e Sexta é revisão semanal. O Jorginho te guia pessoalmente em cada etapa.'
    },
    {
      pergunta: 'Posso cancelar no meio?',
      resposta: 'Sim! A mentoria é flexível. Você pode sair quando atingir seus objetivos. Não há contrato de longo prazo. O foco é você alcançar resultados, não ficar preso em um programa.'
    },
    {
      pergunta: 'Qual a duração típica?',
      resposta: 'Depende do seu nível e objetivos: Iniciantes tipicamente levam 4-12 semanas, Intermediários 2-6 semanas, e Avançados 2-4 semanas. Mas você sai quando atingir seus objetivos específicos.'
    },
    {
      pergunta: 'Há garantia de resultado?',
      resposta: 'O Jorginho trabalha com você de forma individual e personalizada. Os resultados dependem da sua execução e comprometimento. Mas com a metodologia comprovada e suporte 24/7, os resultados são consistentes. Veja os depoimentos de quem já passou pela mentoria.'
    },
    {
      pergunta: 'E se meu case é diferente?',
      resposta: 'Perfeito! Cases diferentes são o que o Jorginho mais gosta. A mentoria é 100% personalizada. Ele adapta a metodologia ao seu negócio, nicho e situação específica. Não há "receita de bolo" - é customizado para VOCÊ.'
    },
    {
      pergunta: 'Como é o suporte WhatsApp?',
      resposta: 'Você tem acesso direto ao WhatsApp do Jorginho 24/7 para dúvidas urgentes. Não precisa esperar até a próxima call. Se tiver uma dúvida crítica durante a implementação, pode mandar mensagem e receber orientação rápida.'
    },
    {
      pergunta: 'Por que R$ 2.500/semana?',
      resposta: 'São 5 horas de call personalizada + suporte 24/7 + plano customizado. O investimento se paga em DIAS, não meses. Iniciantes tipicamente faturam R$ 5k-10k/mês (payback em 2-3 semanas). Intermediários escalam 2-3x (payback na primeira semana). É um investimento estratégico com ROI comprovado.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27]">
      {/* Hero Section - Foco no Mentor */}
      <section className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Lado Esquerdo - Imagem Grande do Mentor */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-3xl blur-3xl transform scale-110" />
                  
                  {/* Imagem do Mentor */}
                  <div className="relative">
                    <img 
                      src="/images/foto do autor.jpg" 
                      alt="Jorginho - Mentor de Negócios Digitais"
                      className="relative w-full max-w-lg mx-auto rounded-3xl object-cover shadow-2xl border-4 border-orange-500/50"
                    />
                    
                    {/* Badge sobre a imagem */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        <span>5.103+ Seguidores</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Conteúdo */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-sm mb-6 animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  MENTORIA INDIVIDUAL COM JORGINHO
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Do Conhecimento
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    À Implementação
                  </span>
                </h1>

                <p className="text-xl text-white/80 mb-8">
                  <span className="font-bold text-orange-400">Jorginho</span> - Mentor de Negócios Digitais
                  <br />
                  <span className="text-white/70">Faturando em Dólar | Transformando conhecimento em implementação desde 2020</span>
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-white/90">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Calendar className="w-5 h-5 text-orange-400" />
                    <span className="font-semibold">5 Dias</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span className="font-semibold">1 Hora Diária</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <TrendingUp className="w-5 h-5 text-orange-400" />
                    <span className="font-semibold">Resultados Reais</span>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Mentoria Individual Semanal
                  </h2>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/90 text-sm">Segunda a Sexta: 1 hora de call direto</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/90 text-sm">Acompanhamento diário de suas ações</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/90 text-sm">Personalizável: Iniciante até Avançado</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/90 text-sm">Flexível: Você sai quando atingir objetivos</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                    <span className="text-3xl font-bold text-white">R$ 2.500/semana</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button
                      onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
                    >
                      <span>Reservar Minha Mentoria</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => document.getElementById('detalhes')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="detalhes" className="relative py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Como Funciona{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Cada Semana
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Estrutura clara, repetível e comprovada. Este é o ciclo que você repete TODA SEMANA até atingir seus objetivos.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  dia: 'Segunda-Feira',
                  titulo: 'Diagnóstico + Planejamento',
                  descricao: 'Entendo sua situação, crio plano de ação customizado',
                  resultado: 'Roadmap semanal, tasks prioritizadas',
                  icon: '💻'
                },
                {
                  dia: 'Terça-Feira',
                  titulo: 'Implementação + Q&A',
                  descricao: 'Você executa, eu guio em tempo real',
                  resultado: 'Primeira ação implementada',
                  icon: '🎯'
                },
                {
                  dia: 'Quarta-Feira',
                  titulo: 'Análise de Dados',
                  descricao: 'Vamos ver o que funcionou, ajustar',
                  resultado: 'Métricas, refinamento',
                  icon: '📊'
                },
                {
                  dia: 'Quinta-Feira',
                  titulo: 'Escalação e Próximos Passos',
                  descricao: 'Como multiplicar o que já está funcionando',
                  resultado: 'Scale strategy',
                  icon: '💡'
                },
                {
                  dia: 'Sexta-Feira',
                  titulo: 'Revisão Semanal + Plan',
                  descricao: 'Summary ganhos, plan próxima semana',
                  resultado: 'Consolidação, próximas ações',
                  icon: '🚀'
                }
              ].map((dia, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{dia.icon}</div>
                  <h3 className="text-white font-bold mb-2 text-sm">{dia.dia}</h3>
                  <h4 className="text-orange-400 font-semibold mb-3 text-base">{dia.titulo}</h4>
                  <p className="text-white/80 text-sm mb-4">{dia.descricao}</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/60 text-xs font-medium">Resultado:</p>
                    <p className="text-green-400 text-sm font-semibold">{dia.resultado}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-6 py-3 rounded-full font-semibold">
                <MessageCircle className="w-5 h-5" />
                Bônus: WhatsApp 24/7 para dúvidas urgentes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Mentoria Se Adapta */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1f3a] to-[#0A0E27]">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                A Mentoria Se Adapta a{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  VOCÊ
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Não importa seu nível. O programa se molda à sua realidade e objetivos específicos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  nivel: 'Iniciante (Do Zero)',
                  titulo: 'Começando Do Zero',
                  foco: 'Fundações sólidas',
                  velocidade: 'Rápida (sem complicações)',
                  timeline: 'Típico 4-12 semanas',
                  resultado: 'Primeira operação faturando',
                  quote: 'Você sai da mentoria com sistema rodando',
                  cor: 'from-green-500 to-emerald-500'
                },
                {
                  nivel: 'Intermediário',
                  titulo: 'Já Fatura, Quer Escalar',
                  foco: 'Otimização + scaling',
                  velocidade: 'Muito rápida (leverage existing)',
                  timeline: 'Típico 2-6 semanas',
                  resultado: '2-3x de scale em revenue',
                  quote: 'Você aproveita knowledge, pula etapas',
                  cor: 'from-orange-500 to-yellow-500'
                },
                {
                  nivel: 'Avançado',
                  titulo: 'Já Fatura Alto, Quer Otimizar',
                  foco: 'Detalhes, refinamento, automação',
                  velocidade: 'Rápida (leverage máxima)',
                  timeline: 'Típico 2-4 semanas',
                  resultado: '+30-50% margem/eficiência',
                  quote: 'Ajustes cirúrgicos com impacto alto',
                  cor: 'from-purple-500 to-pink-500'
                }
              ].map((nivel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className={`inline-block bg-gradient-to-r ${nivel.cor} text-white px-4 py-2 rounded-full text-sm font-bold mb-6`}>
                    {nivel.nivel}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{nivel.titulo}</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-white/60 text-sm mb-1">Foco</p>
                      <p className="text-white font-semibold">{nivel.foco}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Velocidade</p>
                      <p className="text-white font-semibold">{nivel.velocidade}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Timeline</p>
                      <p className="text-white font-semibold">{nivel.timeline}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Resultado</p>
                      <p className="text-green-400 font-bold">{nivel.resultado}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-orange-400 italic text-sm">"{nivel.quote}"</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
              >
                Qual é Seu Cenário?
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento vs ROI */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a]">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Investimento vs.{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  ROI Real
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                O investimento se paga em DIAS, não MESES
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* O Investimento */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">O Investimento</h3>
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-white mb-2">R$ 2.500</div>
                  <div className="text-white/70">/semana</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">5 horas de call personalizadas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Acesso WhatsApp 24/7</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Plano customizado</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">Suporte direto contínuo</p>
                  </div>
                </div>
                <p className="text-center text-orange-400 font-semibold mt-6">
                  Investimento estratégico no seu futuro
                </p>
              </div>

              {/* O ROI Típico */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">O ROI Típico</h3>
                <div className="space-y-6">
                  {[
                    {
                      nivel: 'Iniciante',
                      resultado: 'R$ 5k-10k/mês',
                      descricao: 'Começa operação faturando',
                      payback: 'Payback: 2-3 semanas',
                      roi: 'ROI Semestral: 1000%+',
                      cor: 'from-green-500 to-emerald-500'
                    },
                    {
                      nivel: 'Intermediário',
                      resultado: '2-3x Scale',
                      descricao: 'Scale revenue existing',
                      payback: 'Payback: PRIMEIRA SEMANA',
                      roi: 'ROI Semestral: 500%+',
                      cor: 'from-orange-500 to-yellow-500'
                    },
                    {
                      nivel: 'Avançado',
                      resultado: '+30-50% Margem',
                      descricao: 'Efficiency + automação',
                      payback: 'Payback: IMEDIATO',
                      roi: 'ROI Semestral: 200%+',
                      cor: 'from-purple-500 to-pink-500'
                    }
                  ].map((roi, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r ${roi.cor}/20 backdrop-blur-sm rounded-xl p-6 border border-white/10`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-bold text-lg">{roi.nivel}</h4>
                        <span className="text-white font-semibold">{roi.resultado}</span>
                      </div>
                      <p className="text-white/80 text-sm mb-2">{roi.descricao}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-400 font-semibold">{roi.payback}</span>
                        <span className="text-yellow-400 font-bold">{roi.roi}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <p className="text-2xl font-bold text-white">
                Qual empreendedor não investe R$ 2.5k pra ganhar R$ 10k+?
              </p>
              <button
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
              >
                Quer Calcular Seu ROI Pessoal?
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Histórias de Sucesso */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1f3a] to-[#0A0E27] overflow-hidden">
        {/* Overlays para suavizar topo e base */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1a1f3a] via-[#1a1f3a] to-transparent backdrop-blur-md z-20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27] to-transparent backdrop-blur-md z-20" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Histórias de{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Sucesso Real
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Resultados de pessoas que investiram na mentoria
              </p>
            </div>

            {/* Depoimentos em colunas animadas */}
            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[800px] overflow-hidden">
              {(() => {
                const testimonials = [
                  {
                    nome: 'João Silva',
                    resultado: 'Saiu de R$0 para R$15k/mês em Dólar',
                    timeframe: 'Timeframe: 6 semanas de mentoria',
                    depoimento: 'Comecei totalmente perdido. Em 6 semanas tenho uma operação faturando consistentemente. O suporte 24/7 foi crucial.'
                  },
                  {
                    nome: 'Maria Santos',
                    resultado: '3x scale em revenue em 4 semanas',
                    timeframe: 'Timeframe: 4 semanas de mentoria',
                    depoimento: 'Já vendia, mas estava estagnada. Jorginho me mostrou exatamente onde otimizar. Tripliquei em 1 mês.'
                  },
                  {
                    nome: 'Carlos Mendes',
                    resultado: '+45% margem com automação',
                    timeframe: 'Timeframe: 3 semanas de mentoria',
                    depoimento: 'Implementamos automações que eu nem sabia que existiam. Trabalho menos e lucro mais. Payback foi imediato.'
                  },
                  {
                    nome: 'Ana Costa',
                    resultado: 'De R$2k para R$20k/mês',
                    timeframe: 'Timeframe: 8 semanas de mentoria',
                    depoimento: 'A clareza que ganhei nas calls valeu cada centavo. Hoje tenho um sistema previsível que escala.'
                  },
                  {
                    nome: 'Pedro Lima',
                    resultado: 'Primeira venda em 2 semanas',
                    timeframe: 'Timeframe: 2 semanas de mentoria',
                    depoimento: 'Nunca tinha vendido nada online. Com o método do Jorginho, fechei minha primeira venda na segunda semana.'
                  },
                  {
                    nome: 'Rafaela Alves',
                    resultado: 'De R$3k para R$25k/mês',
                    timeframe: 'Timeframe: 7 semanas de mentoria',
                    depoimento: 'O acompanhamento diário fez toda diferença. Cada call era um passo à frente. Hoje tenho um negócio escalável.'
                  },
                  {
                    nome: 'Bruno Ferreira',
                    resultado: '4x aumento em conversão',
                    timeframe: 'Timeframe: 5 semanas de mentoria',
                    depoimento: 'As otimizações que o Jorginho sugeriu transformaram meu funil. Conversão subiu de 2% para 8% em um mês.'
                  },
                  {
                    nome: 'Juliana Ramos',
                    resultado: 'Primeiro cliente high ticket em 3 semanas',
                    timeframe: 'Timeframe: 3 semanas de mentoria',
                    depoimento: 'Nunca tinha vendido acima de R$500. Com a mentoria, fechei meu primeiro cliente de R$5k na terceira semana.'
                  },
                  {
                    nome: 'Marcos Oliveira',
                    resultado: 'Automação completa do funil',
                    timeframe: 'Timeframe: 6 semanas de mentoria',
                    depoimento: 'Consegui automatizar todo o processo de vendas. Agora trabalho 4h/dia e faturo mais do que antes trabalhando 12h.'
                  }
                ];

                const firstColumn = testimonials.slice(0, 3);
                const secondColumn = testimonials.slice(3, 6);
                const thirdColumn = testimonials.slice(6, 9);

                const TestimonialColumn = ({ testimonials, duration, className }: { testimonials: typeof firstColumn, duration: number, className?: string }) => (
                  <div className={className}>
                    <motion.div
                      animate={{
                        translateY: "-50%",
                      }}
                      transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      style={{ willChange: "transform" }}
                      className="flex flex-col gap-6 pb-6 bg-transparent"
                    >
                      {[
                        ...new Array(2).fill(0).map((_, index) => (
                          <React.Fragment key={index}>
                            {testimonials.map((testimonial, i) => (
                              <div
                                key={`${index}-${i}`}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300 max-w-xs w-full"
                              >
                                <div className="flex items-center gap-1 mb-4">
                                  {[...Array(5)].map((_, starIndex) => (
                                    <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <p className="text-white/90 mb-6 italic leading-relaxed">"{testimonial.depoimento}"</p>
                                <div className="pt-6 border-t border-white/10">
                                  <p className="text-white font-bold mb-1">{testimonial.nome}</p>
                                  <p className="text-green-400 font-semibold text-sm mb-1">{testimonial.resultado}</p>
                                  <p className="text-white/60 text-xs">{testimonial.timeframe}</p>
                                </div>
                              </div>
                            ))}
                          </React.Fragment>
                        )),
                      ]}
                    </motion.div>
                  </div>
                );

                return (
                  <>
                    <TestimonialColumn testimonials={firstColumn} duration={15} />
                    <TestimonialColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
                    <TestimonialColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
                  </>
                );
              })()}
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-white/80 mb-8">
                A próxima história de sucesso pode ser a <span className="text-orange-400 font-bold">SUA</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ com Accordion */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0A0E27] to-[#1a1f3a]">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Perguntas{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Frequentes
                </span>
              </h2>
              <p className="text-xl text-white/80">
                Respondendo todas as suas dúvidas com transparência total
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="text-white font-semibold text-lg pr-4">{faq.pergunta}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-white/50 flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/80 leading-relaxed">{faq.resposta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className="relative py-20 md:py-32 bg-gradient-to-b from-[#1a1f3a] to-[#0A0E27]">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-sm mb-6 animate-pulse">
                <Zap className="w-4 h-4" />
                VAGAS LIMITADAS: 2 Spots Restantes
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Reserve Sua Vaga{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Agora
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Preencha o formulário e receba contato em até 2 horas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6">
              <div>
                <label htmlFor="nome" className="block text-white font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-white font-semibold mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="situacao" className="block text-white font-semibold mb-2">
                  Situação Atual *
                </label>
                <select
                  id="situacao"
                  name="situacao"
                  required
                  value={formData.situacao}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Selecione seu nível</option>
                  <option value="iniciante">Iniciante (Do Zero)</option>
                  <option value="intermediario">Intermediário (Já Fatura)</option>
                  <option value="avancado">Avançado (Quer Otimizar)</option>
                </select>
              </div>

              <div>
                <label htmlFor="objetivo" className="block text-white font-semibold mb-2">
                  Objetivo Específico *
                </label>
                <input
                  type="text"
                  id="objetivo"
                  name="objetivo"
                  required
                  value={formData.objetivo}
                  onChange={handleInputChange}
                  placeholder="Qual seu objetivo?"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-white font-semibold mb-2">
                  Timeline de Urgência *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Quando quer começar?</option>
                  <option value="imediato">Imediato (Esta semana)</option>
                  <option value="1mes">Próximo mês</option>
                  <option value="2-3meses">Em 2-3 meses</option>
                  <option value="futuro">Mais adiante</option>
                </select>
              </div>

              <div>
                <label htmlFor="motivo" className="block text-white font-semibold mb-2">
                  Por que quer a mentoria? (opcional)
                </label>
                <textarea
                  id="motivo"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleInputChange}
                  placeholder="Conte um pouco sobre sua situação e expectativas..."
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
              >
                <span>RESERVAR MINHA VAGA AGORA</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Seus dados são 100% confidenciais</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Call de qualificação em até 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Sem compromisso até a call</span>
                </div>
              </div>
            </form>

            {/* CTA Final */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  RESERVE SUA VAGA
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    DE MENTORIA
                  </span>
                </h3>
                <p className="text-white/80 mb-6">Spots limitados | Fila de espera pode ter semanas</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
                  >
                    <span>RESERVAR MINHA MENTORIA AGORA</span>
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </button>
                  <button
                    onClick={() => document.getElementById('detalhes')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    Ver Detalhes Antes
                  </button>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-400" />
                    <span>Apenas 5 mentorados simultâneos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <span>Call de qualificação em 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span>Início próxima segunda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-orange-400" />
                    <span>Flexibilidade: Sai quando atingir objetivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-400" />
                    <span>ROI: Payback em DIAS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-orange-400" />
                    <span>Suporte 24/7 WhatsApp</span>
                  </div>
                </div>
                <p className="mt-6 text-orange-400 font-semibold">
                  ⚡ Não deixe esse spot ir pra outra pessoa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-[#2d1b69] to-[#0A0E27] py-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="/images/foto do autor.jpg" 
                    alt="Jorginho"
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">Jorginho</h3>
                    <p className="text-orange-400 font-medium">Faturando em Dólar | Mentoria Individual</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">
                  Transformando conhecimento em implementação desde 2020
                </p>
                <div className="flex items-center gap-2 text-white/70">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">🎯 5.103+ seguidores confiaram em Jorginho</span>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
                <div className="grid grid-cols-2 gap-4 text-white/70 text-sm">
                  <a href="/" className="hover:text-orange-400 transition-colors">Início</a>
                  <a href="/" className="hover:text-orange-400 transition-colors">Comunidade</a>
                  <a href="#formulario" className="hover:text-orange-400 transition-colors">Reservar Mentoria</a>
                  <a href="#formulario" className="hover:text-orange-400 transition-colors">FAQ</a>
                  <a href="#formulario" className="hover:text-orange-400 transition-colors">Contato</a>
                </div>
                <div className="mt-6 space-y-2 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>@faturandoemdolar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>contato@faturandoemdolar.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2025 Jorginho - Faturando em Dólar. Todos os direitos reservados.
              </p>
              <div className="flex justify-center gap-4 mt-4 text-white/40 text-xs">
                <a href="#" className="hover:text-white/70 transition-colors">Privacidade</a>
                <span>•</span>
                <a href="#" className="hover:text-white/70 transition-colors">Termos</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lancamento;
