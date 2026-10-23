import React from 'react';
import { motion } from 'motion/react';
import { 
  Headphones, 
  ExternalLink, 
  MessageSquareHeart, 
  HelpCircle, 
  KeyRound, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { SUPPORT_URL } from '../data/portalData.ts';

export const SupportSection: React.FC = () => {
  return (
    <section id="suporte" className="py-12 sm:py-16 scroll-mt-16 w-full max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAF0EC] via-white to-[#F5EBE6] border-2 border-[#E8C2B5] p-6 sm:p-10 shadow-xl shadow-[#5B1F2D]/5"
        >
          {/* Subtle floral/soft background accent */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#B56B6F]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative flex flex-col items-center text-center">
            
            {/* Help Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-[#5B1F2D] to-[#B56B6F] text-white flex items-center justify-center shadow-lg shadow-[#5B1F2D]/20 mb-5">
              <Headphones className="w-8 h-8 sm:w-10 sm:h-10 text-[#FAF6F4]" />
            </div>

            {/* Exact Required Title */}
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold text-[#3F151F] tracking-tight">
              PRECISA DE AJUDA?
            </h2>

            {/* Exact Required Text */}
            <p className="mt-3 text-base sm:text-lg text-[#5A3840] max-w-lg leading-relaxed font-normal">
              Acesse o suporte para tirar dúvidas ou resolver problemas com seu acesso.
            </p>

            {/* Common Support Topics */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl text-center">
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8C2B5]/60 flex flex-col items-center justify-center gap-2 text-xs text-[#5B1F2D] text-center">
                <KeyRound className="w-5 h-5 text-[#B56B6F]" />
                <span>Problemas com login ou link de acesso</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8C2B5]/60 flex flex-col items-center justify-center gap-2 text-xs text-[#5B1F2D] text-center">
                <HelpCircle className="w-5 h-5 text-[#B56B6F]" />
                <span>Dúvidas sobre o funcionamento dos bônus</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8C2B5]/60 flex flex-col items-center justify-center gap-2 text-xs text-[#5B1F2D] text-center">
                <MessageSquareHeart className="w-5 h-5 text-[#B56B6F]" />
                <span>Atendimento atencioso e humanizado</span>
              </div>
            </div>

            {/* Exact Required Button */}
            <div className="mt-8 w-full max-w-sm">
              <a
                href={SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#5B1F2D] via-[#7A2D3E] to-[#B56B6F] hover:from-[#3F151F] hover:to-[#5B1F2D] rounded-2xl shadow-lg shadow-[#5B1F2D]/20 hover:shadow-xl active:scale-[0.98] transition-all min-h-[52px] text-center"
              >
                <span>FALAR COM O SUPORTE</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            </div>

            {/* Reassurance notes */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8C5E6A]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Equipe pronta para te acolher
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Canal oficial e seguro
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
