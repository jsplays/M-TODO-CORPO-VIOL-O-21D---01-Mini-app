/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeaderNav } from './components/HeaderNav.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { MainProductCard } from './components/MainProductCard.tsx';
import { BonusGrid } from './components/BonusGrid.tsx';
import { SupportSection } from './components/SupportSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BackToTop } from './components/BackToTop.tsx';
import { BottomNav } from './components/BottomNav.tsx';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAF6F4] text-[#4A2D35] flex flex-col font-sans selection:bg-[#E8C2B5] selection:text-[#5B1F2D]">
      {/* Top Navigation */}
      <HeaderNav />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Tela Inicial / Hero */}
        <HeroSection />

        {/* Área do Produto Principal */}
        <MainProductCard />

        {/* Área de Bônus (6 Bônus Individuais) */}
        <BonusGrid />

        {/* Área de Suporte */}
        <SupportSection />
      </main>

      {/* Rodapé com Aviso Educativo Obrigatório */}
      <Footer />

      {/* Botão Voltar ao Topo */}
      <BackToTop />

      {/* Barra de Navegação Móvel Inferior (Thumb Ergonomics) */}
      <BottomNav />
    </div>
  );
}
