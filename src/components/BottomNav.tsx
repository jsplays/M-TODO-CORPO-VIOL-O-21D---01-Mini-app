import React from 'react';
import { Home, Dumbbell, Gift, Headphones } from 'lucide-react';

export const BottomNav: React.FC = () => {
  return (
    <nav 
      aria-label="Navegação rápida móvel"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF6F4]/95 backdrop-blur-md border-t border-[#E8C2B5]/60 px-2 py-1 shadow-lg"
    >
      <div className="grid grid-cols-4 items-center h-14 max-w-md mx-auto">
        <a
          href="#inicio"
          className="flex flex-col items-center justify-center py-1 text-[#4A2D35] hover:text-[#5B1F2D] active:scale-95 transition-transform"
        >
          <Home className="w-5 h-5 text-[#B56B6F]" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Início</span>
        </a>

        <a
          href="#programa"
          className="flex flex-col items-center justify-center py-1 text-[#4A2D35] hover:text-[#5B1F2D] active:scale-95 transition-transform"
        >
          <Dumbbell className="w-5 h-5 text-[#B56B6F]" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Treinos</span>
        </a>

        <a
          href="#bonus"
          className="flex flex-col items-center justify-center py-1 text-[#4A2D35] hover:text-[#5B1F2D] active:scale-95 transition-transform"
        >
          <Gift className="w-5 h-5 text-[#B56B6F]" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Bônus</span>
        </a>

        <a
          href="#suporte"
          className="flex flex-col items-center justify-center py-1 text-[#4A2D35] hover:text-[#5B1F2D] active:scale-95 transition-transform"
        >
          <Headphones className="w-5 h-5 text-[#B56B6F]" />
          <span className="text-[10px] font-medium tracking-tight mt-0.5">Suporte</span>
        </a>
      </div>
    </nav>
  );
};
