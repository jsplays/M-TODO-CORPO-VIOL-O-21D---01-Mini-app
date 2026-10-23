import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Calendar, Clock, Dumbbell, ShieldCheck, CheckCircle2, Flame } from 'lucide-react';
import { PROGRAM_URL } from '../data/portalData.ts';

export const MainProductCard: React.FC = () => {
  return (
    <section id="programa" className="py-8 sm:py-12 scroll-mt-20 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase font-bold tracking-widest text-[#B56B6F] mb-1">
            CONTEÚDO PRINCIPAL
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#3F151F]">
            Seu Treino Guiado de 21 Dias
          </h2>
          <p className="text-sm sm:text-base text-[#5A3840] max-w-xl mt-1 text-center">
            Desenvolvido para você realizar no conforto de casa, no seu ritmo e com total segurança.
          </p>
        </div>

        {/* Featured Big Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8C2B5]/80 shadow-xl shadow-[#5B1F2D]/5 hover:shadow-2xl hover:border-[#B56B6F] transition-all max-w-4xl mx-auto"
        >
          {/* Subtle top wine accent banner */}
          <div className="bg-gradient-to-r from-[#5B1F2D] via-[#7A2D3E] to-[#B56B6F] px-6 py-2.5 text-white flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-center">
            <Flame className="w-4 h-4 text-[#F5EBE6]" />
            <span>Programa Oficial em Vídeo · Aulas 100% Práticas</span>
          </div>

          <div className="flex flex-col">
            {/* Visual Media Banner */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#FAF0EC]">
              <img
                src="/src/assets/images/main_workout_program_1792543732407.jpg"
                alt="Ambiente estético e aconchegante para treinos em casa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3F151F]/80 via-transparent to-transparent flex flex-col justify-end items-center text-center p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#E8C2B5] font-semibold">
                  Apenas 12 minutos ao dia
                </span>
                <span className="font-editorial text-2xl sm:text-3xl font-bold">
                  Método Corpo Violão 21D
                </span>
              </div>
            </div>

            {/* Content & Details */}
            <div className="p-6 sm:p-10 flex flex-col items-center text-center">
              {/* Meta details */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[#7A2D3E] mb-4">
                <span className="inline-flex items-center gap-1 bg-[#FAF0EC] px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-[#B56B6F]" />
                  ~12 minutos por treino
                </span>
                <span className="inline-flex items-center gap-1 bg-[#FAF0EC] px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-[#B56B6F]" />
                  Cronograma de 21 dias
                </span>
                <span className="inline-flex items-center gap-1 bg-[#FAF0EC] px-3 py-1.5 rounded-full">
                  <Dumbbell className="w-3.5 h-3.5 text-[#B56B6F]" />
                  Em casa com segurança
                </span>
              </div>

              {/* Primary Card Title */}
              <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#3F151F] leading-tight text-center">
                MÉTODO CORPO VIOLÃO 21D
              </h3>

              {/* Description requested */}
              <p className="mt-3 text-base text-[#4A2D35] leading-relaxed max-w-2xl mx-auto text-center">
                Programa guiado de força com treinos em casa de aproximadamente 12 minutos, calendário de 21 dias, orientações de segurança e sistema de progressão.
              </p>

              {/* What's included checklist */}
              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-[#5A3840] max-w-xl mx-auto text-left w-full">
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF6F4]">
                  <CheckCircle2 className="w-4 h-4 text-[#B56B6F] shrink-0 mt-0.5" />
                  <span>Treinos objetivos que cabem na sua rotina</span>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF6F4]">
                  <CheckCircle2 className="w-4 h-4 text-[#B56B6F] shrink-0 mt-0.5" />
                  <span>Exercícios adaptáveis ao seu nível atual</span>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF6F4]">
                  <CheckCircle2 className="w-4 h-4 text-[#B56B6F] shrink-0 mt-0.5" />
                  <span>Instruções detalhadas de postura e respiração</span>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded-xl bg-[#FAF6F4]">
                  <CheckCircle2 className="w-4 h-4 text-[#B56B6F] shrink-0 mt-0.5" />
                  <span>Evolução progressiva dia após dia</span>
                </div>
              </div>

              {/* Reassurance badge */}
              <div className="mt-6 p-4 rounded-2xl bg-[#FAF6F4] border border-[#E8C2B5]/60 flex items-center justify-center gap-3 text-xs text-[#5B1F2D] max-w-xl mx-auto text-center">
                <ShieldCheck className="w-5 h-5 text-[#B56B6F] shrink-0" />
                <span>
                  Respeite sempre os sinais do seu corpo. Descanse nos dias indicados e realize cada movimento com controle e consciência.
                </span>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#FAF0EC] flex flex-col items-center justify-center gap-3 w-full">
                <a
                  href={PROGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#5B1F2D] via-[#7A2D3E] to-[#B56B6F] hover:from-[#3F151F] hover:to-[#5B1F2D] rounded-2xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all min-h-[54px] text-center w-full sm:w-auto"
                >
                  <span className="tracking-wide uppercase">ABRIR O PROGRAMA</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="text-xs text-[#7A2D3E] text-center font-medium">
                  Acesso liberado no ambiente oficial Netlify
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
