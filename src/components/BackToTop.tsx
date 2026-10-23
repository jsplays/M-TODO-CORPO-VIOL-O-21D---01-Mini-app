import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 sm:bottom-8 sm:right-8 z-30 w-12 h-12 rounded-full bg-gradient-to-r from-[#5B1F2D] to-[#7A2D3E] text-white flex items-center justify-center shadow-lg shadow-[#5B1F2D]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
};
