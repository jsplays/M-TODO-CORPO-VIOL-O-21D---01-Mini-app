import React, { useState, useEffect } from 'react';
import { Gift, Sparkles, Filter, CheckCircle } from 'lucide-react';
import { BONUSES_DATA } from '../data/portalData.ts';
import { BonusCard } from './BonusCard.tsx';

export const BonusGrid: React.FC = () => {
  const [visitedIds, setVisitedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('metodo_violao_visited_bonuses');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState<string>('todos');

  useEffect(() => {
    try {
      localStorage.setItem('metodo_violao_visited_bonuses', JSON.stringify(visitedIds));
    } catch {
      // Ignore storage errors in restrictive environments
    }
  }, [visitedIds]);

  const toggleVisited = (id: string) => {
    setVisitedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredBonuses = BONUSES_DATA.filter(bonus => {
    if (activeCategory === 'todos') return true;
    if (activeCategory === 'nutricao') return bonus.category === 'nutricao' || bonus.category === 'receitas';
    if (activeCategory === 'praticas') return bonus.category === 'respiracao' || bonus.category === 'orientacao';
    if (activeCategory === 'complementar') return bonus.category === 'complementar';
    return true;
  });

  return (
    <section id="bonus" className="py-10 sm:py-16 scroll-mt-16 bg-[#FAF0EC]/40 border-y border-[#E8C2B5]/30 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center justify-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#B56B6F] mb-1">
            <Gift className="w-4 h-4" />
            <span>ÁREA DE BÔNUS</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#3F151F] text-center">
            Materiais & Guias Complementares
          </h2>
          <p className="text-sm sm:text-base text-[#5A3840] max-w-xl mt-1 text-center">
            Acesse cada um dos seus 6 bônus exclusivos. Clique no botão de cada cartão para abrir diretamente o material.
          </p>

          {/* Student Progress Pill */}
          <div className="mt-4 inline-flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-2xl border border-[#E8C2B5]/60 shadow-xs text-xs text-[#5B1F2D] mx-auto">
            <CheckCircle className="w-4 h-4 text-[#B56B6F]" />
            <span>
              Explorados por você: <strong className="font-bold">{visitedIds.length}</strong> de 6
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="w-full max-w-full overflow-x-auto pb-3 mb-8 scrollbar-none flex items-center justify-start sm:justify-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-[#7A2D3E] font-medium mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtrar:</span>
          </div>
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors min-h-[36px] ${
              activeCategory === 'todos'
                ? 'bg-[#5B1F2D] text-white shadow-xs'
                : 'bg-white text-[#5A3840] hover:bg-[#FAF0EC] border border-[#E8C2B5]/50'
            }`}
          >
            Todos os 6 Bônus
          </button>
          <button
            onClick={() => setActiveCategory('nutricao')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors min-h-[36px] ${
              activeCategory === 'nutricao'
                ? 'bg-[#5B1F2D] text-white shadow-xs'
                : 'bg-white text-[#5A3840] hover:bg-[#FAF0EC] border border-[#E8C2B5]/50'
            }`}
          >
            Alimentação & Shakes (Bônus 1 e 3)
          </button>
          <button
            onClick={() => setActiveCategory('praticas')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors min-h-[36px] ${
              activeCategory === 'praticas'
                ? 'bg-[#5B1F2D] text-white shadow-xs'
                : 'bg-white text-[#5A3840] hover:bg-[#FAF0EC] border border-[#E8C2B5]/50'
            }`}
          >
            Respiração & Farmácia (Bônus 2 e 4)
          </button>
          <button
            onClick={() => setActiveCategory('complementar')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors min-h-[36px] ${
              activeCategory === 'complementar'
                ? 'bg-[#5B1F2D] text-white shadow-xs'
                : 'bg-white text-[#5A3840] hover:bg-[#FAF0EC] border border-[#E8C2B5]/50'
            }`}
          >
            Complementares (Bônus 5 e 6)
          </button>
        </div>

        {/* Grid of Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredBonuses.map((bonus, idx) => (
            <BonusCard
              key={bonus.id}
              bonus={bonus}
              index={idx}
              isVisited={visitedIds.includes(bonus.id)}
              onToggleVisited={toggleVisited}
            />
          ))}
        </div>

        {/* Mindful note banner */}
        <div className="mt-10 p-5 rounded-3xl bg-white border border-[#E8C2B5]/70 flex flex-col items-center justify-center text-center gap-3 text-xs sm:text-sm text-[#5A3840] max-w-2xl mx-auto">
          <div className="w-10 h-10 rounded-2xl bg-[#FAF0EC] flex items-center justify-center shrink-0 mx-auto">
            <Sparkles className="w-5 h-5 text-[#B56B6F]" />
          </div>
          <p className="text-center leading-relaxed">
            <strong>Dica acolhedora:</strong> Você não precisa consumir todos os materiais no mesmo dia! Escolha um bônus por vez de acordo com a sua curiosidade e rotina.
          </p>
        </div>

      </div>
    </section>
  );
};
