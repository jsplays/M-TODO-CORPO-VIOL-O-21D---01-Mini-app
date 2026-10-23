import React from 'react';
import { ExternalLink, Sparkles, HelpCircle } from 'lucide-react';
import { PROGRAM_URL, SUPPORT_URL } from '../data/portalData.ts';

export const HeaderNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F4]/90 backdrop-blur-md border-b border-[#E8C2B5]/40 transition-all w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 w-full">
        {/* Brand Zone: 1 clean line wordmark */}
        <a 
          href="#inicio" 
          className="group flex items-center gap-2 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B1F2D] rounded-lg"
          aria-label="Início do Portal Método Corpo Violão"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#5B1F2D] to-[#B56B6F] flex items-center justify-center text-white shadow-sm shrink-0">
            <Sparkles className="w-4 h-4 text-[#F5EBE6]" />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-base sm:text-xl font-bold tracking-tight text-[#3F151F] leading-tight">
              MÉTODO CORPO VIOLÃO
            </span>
            <span className="text-[10px] tracking-wider uppercase text-[#B56B6F] font-semibold -mt-0.5">
              Portal da Aluna · 21D
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4A2D35]/80">
          <a href="#inicio" className="hover:text-[#5B1F2D] transition-colors whitespace-nowrap">
            Início
          </a>
          <a href="#programa" className="hover:text-[#5B1F2D] transition-colors whitespace-nowrap">
            Programa Principal
          </a>
          <a href="#bonus" className="hover:text-[#5B1F2D] transition-colors whitespace-nowrap">
            Bônus Exclusivos
          </a>
          <a href="#suporte" className="hover:text-[#5B1F2D] transition-colors whitespace-nowrap">
            Suporte
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={SUPPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#5B1F2D] hover:bg-[#F5EBE6] rounded-xl transition-all"
            aria-label="Abrir suporte em nova aba"
          >
            <HelpCircle className="w-4 h-4 text-[#B56B6F]" />
            <span>Ajuda</span>
          </a>
          <a
            href={PROGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#5B1F2D] to-[#7A2D3E] hover:from-[#3F151F] hover:to-[#5B1F2D] rounded-xl shadow-sm hover:shadow active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <span>Acessar Treinos</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </header>
  );
};
