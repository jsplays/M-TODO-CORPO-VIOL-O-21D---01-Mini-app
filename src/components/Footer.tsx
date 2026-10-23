import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { PROGRAM_URL, SUPPORT_URL } from '../data/portalData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5EBE6] border-t border-[#E8C2B5]/70 pt-12 pb-24 md:pb-12 text-[#4A2D35] w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Brand Summary */}
        <div className="flex flex-col items-center justify-center text-center gap-4 pb-8 border-b border-[#E8C2B5]/50 max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#5B1F2D] flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#F5EBE6]" />
              </div>
              <span className="font-editorial text-xl font-bold text-[#3F151F]">
                MÉTODO CORPO VIOLÃO 21D
              </span>
            </div>
            <p className="mt-1 text-xs text-[#7A2D3E] text-center">
              Portal Oficial de Conteúdos, Bônus Educativos e Suporte à Aluna.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-[#5B1F2D]">
            <a href="#inicio" className="hover:underline">Início</a>
            <a href="#programa" className="hover:underline">Programa Principal</a>
            <a href="#bonus" className="hover:underline">Área de Bônus</a>
            <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Suporte Oficial</a>
          </div>
        </div>

        {/* Mandatory Educational Notice Card */}
        <div className="mt-8 p-6 rounded-2xl bg-white/70 border border-[#E8C2B5]/60 text-xs sm:text-sm text-[#5A3840] leading-relaxed max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <ShieldCheck className="w-6 h-6 text-[#B56B6F] shrink-0" />
            <div>
              <span className="font-bold text-[#3F151F] block uppercase tracking-wider text-[11px] mb-1 text-center">
                Aviso Educativo e de Segurança
              </span>
              <p className="text-center">
                “Este portal e seus materiais têm finalidade educativa. O programa não promete resultados físicos específicos, medidas corporais, perda de gordura localizada ou transformações em determinado prazo. Os resultados variam de pessoa para pessoa. Faça os exercícios respeitando seus limites e procure orientação profissional em caso de dúvidas sobre sua saúde.”
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and Closing Warmth */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#8C5E6A] text-center">
          <p>© {new Date().getFullYear()} Método Corpo Violão 21D. Todos os direitos reservados.</p>
          <span className="hidden sm:inline">·</span>
          <p className="flex items-center justify-center gap-1">
            Feito com <Heart className="w-3 h-3 text-[#B56B6F] fill-[#B56B6F]" /> para o seu autocuidado e bem-estar.
          </p>
        </div>

      </div>
    </footer>
  );
};
