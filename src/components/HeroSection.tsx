import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, ShieldCheck, HeartHandshake, Compass, Sparkles } from 'lucide-react';
import { PROGRAM_URL } from '../data/portalData.ts';

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 w-full max-w-full overflow-hidden">
      {/* Decorative ambient background glows contained safely */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-10 right-10 w-72 h-72 bg-[#E8C2B5]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-5 w-64 h-64 bg-[#B56B6F]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Text and Primary Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl flex flex-col items-center text-center"
          >
            {/* Visual indication: "Seu conteúdo em um só lugar" */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center justify-center gap-2 py-1.5 px-4 mb-5 rounded-full bg-[#FAF0EC] border border-[#E8C2B5]/60 shadow-[0_2px_8px_rgba(181,107,111,0.08)] mx-auto"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B56B6F]" />
              <span className="text-xs font-semibold tracking-wide text-[#5B1F2D]">
                Seu conteúdo em um só lugar
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#3F151F] leading-[1.12] tracking-tight text-center">
              <span className="block text-xl sm:text-2xl md:text-3xl font-medium tracking-normal text-[#B56B6F] mb-1">
                BEM-VINDA AO SEU PORTAL
              </span>
              MÉTODO CORPO VIOLÃO 21D
            </h1>

            {/* Welcoming Message */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#5A3840] leading-relaxed max-w-xl mx-auto font-normal text-center">
              “Seu acesso está aqui! Explore o programa, conheça seus bônus e escolha por onde começar. Faça tudo no seu ritmo e respeite os limites do seu corpo.”
            </p>

            {/* Key benefits list without fake promises */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#7A2D3E] max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B56B6F] shrink-0" />
                Treinos guiados de ~12 minutos
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#B56B6F] shrink-0" />
                Calendário seguro de 21 dias
              </span>
              <span className="inline-flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#B56B6F] shrink-0" />
                Sem dietas restritivas
              </span>
            </div>

            {/* Primary Action Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto">
              <a
                href={PROGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#5B1F2D] via-[#7A2D3E] to-[#B56B6F] hover:from-[#3F151F] hover:to-[#5B1F2D] rounded-2xl shadow-lg shadow-[#5B1F2D]/20 hover:shadow-xl active:scale-[0.98] transition-all min-h-[54px] text-center w-full sm:w-auto"
              >
                <PlayCircle className="w-5 h-5 text-[#F5EBE6] group-hover:scale-110 transition-transform" />
                <span className="tracking-wide uppercase">ACESSAR MEU PROGRAMA</span>
              </a>

              <a
                href="#bonus"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#5B1F2D] bg-[#FAF0EC] hover:bg-[#F5EBE6] border border-[#E8C2B5]/80 rounded-2xl transition-all min-h-[48px] text-center w-full sm:w-auto"
              >
                Ver os 6 Bônus Liberados
              </a>
            </div>

          </motion.div>

          {/* Visual Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl mx-auto mt-10 relative"
          >
            <div className="relative rounded-3xl overflow-hidden p-2.5 sm:p-3 bg-gradient-to-br from-[#FAF0EC] to-[#F5EBE6] border border-[#E8C2B5]/70 shadow-xl shadow-[#5B1F2D]/5">
              
              {/* Image Frame with fallback */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#E8C2B5]/20">
                <img
                  src="/src/assets/images/hero_wellness_portal_1792543732138.jpg"
                  alt="Espaço acolhedor e sereno de bem-estar e autocuidado"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3F151F]/85 via-[#3F151F]/30 to-transparent flex flex-col justify-end items-center text-center p-6 text-white">
                  <div className="text-xs uppercase tracking-wider text-[#E8C2B5] font-semibold">
                    Seu Momento Diário
                  </div>
                  <div className="font-editorial text-xl sm:text-2xl md:text-3xl font-bold mt-1">
                    12 minutos de cuidado para você
                  </div>
                  <p className="text-xs sm:text-sm text-[#FAF6F4]/90 mt-1 max-w-md mx-auto">
                    Práticas guiadas para fortalecer e revitalizar o seu corpo com carinho.
                  </p>
                </div>
              </div>

              {/* Quick Floating Badge */}
              <div className="mt-3 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-[#E8C2B5]/50 flex items-center justify-between text-xs text-[#5B1F2D]">
                <span className="font-medium">1 Programa Principal + 6 Bônus Inclusos</span>
                <span className="font-bold text-[#B56B6F]">Acesso Imediato</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
