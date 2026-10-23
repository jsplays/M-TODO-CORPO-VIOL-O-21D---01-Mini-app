import React from 'react';
import { motion } from 'motion/react';
import { 
  UtensilsCrossed, 
  Wind, 
  CupSoda, 
  Pill, 
  Sparkles, 
  FolderPlus, 
  ExternalLink, 
  Check, 
  Clock,
  Bookmark
} from 'lucide-react';
import { BonusItem } from '../types.ts';

interface BonusCardProps {
  bonus: BonusItem;
  index: number;
  isVisited: boolean;
  onToggleVisited: (id: string) => void;
}

export const BonusCard: React.FC<BonusCardProps> = ({ 
  bonus, 
  index,
  isVisited,
  onToggleVisited 
}) => {
  // Select contextual icon
  const getIcon = () => {
    switch (bonus.id) {
      case 'bonus-1':
        return <UtensilsCrossed className="w-5 h-5 text-[#5B1F2D]" />;
      case 'bonus-2':
        return <Wind className="w-5 h-5 text-[#5B1F2D]" />;
      case 'bonus-3':
        return <CupSoda className="w-5 h-5 text-[#5B1F2D]" />;
      case 'bonus-4':
        return <Pill className="w-5 h-5 text-[#5B1F2D]" />;
      case 'bonus-5':
        return <Sparkles className="w-5 h-5 text-[#5B1F2D]" />;
      case 'bonus-6':
        return <FolderPlus className="w-5 h-5 text-[#5B1F2D]" />;
      default:
        return <Bookmark className="w-5 h-5 text-[#5B1F2D]" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between items-center text-center transition-all duration-300 border ${
        isVisited 
          ? 'bg-[#FAF6F4] border-[#E8C2B5]/50' 
          : 'bg-white border-[#E8C2B5]/70 hover:border-[#B56B6F]'
      } shadow-md hover:shadow-xl shadow-[#5B1F2D]/5 active:scale-[0.99]`}
    >
      <div className="flex flex-col items-center text-center w-full">
        {/* Top bar inside card: category icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#FAF0EC] border border-[#E8C2B5]/70 flex items-center justify-center group-hover:bg-[#F5EBE6] group-hover:scale-105 transition-all mx-auto mb-3">
          {getIcon()}
        </div>

        {/* Badge & Estimated Time */}
        <div className="flex flex-col items-center justify-center gap-0.5 mb-2">
          <span className="text-[11px] font-bold tracking-wider text-[#B56B6F] uppercase text-center">
            {bonus.badge}
          </span>
          {bonus.estimatedTime && (
            <span className="text-[11px] text-[#7A2D3E]/80 flex items-center justify-center gap-1 font-medium text-center">
              <Clock className="w-3 h-3" />
              {bonus.estimatedTime}
            </span>
          )}
        </div>

        {/* Bonus Title */}
        <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#3F151F] leading-snug group-hover:text-[#5B1F2D] transition-colors text-center">
          {bonus.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-[#5A3840] leading-relaxed text-center">
          {bonus.description}
        </p>

        {bonus.highlightNote && (
          <div className="mt-3 text-xs text-[#8C5E6A] italic text-center">
            • {bonus.highlightNote}
          </div>
        )}

        {/* Quick interactive mark for student's personal organization */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleVisited(bonus.id);
            }}
            title={isVisited ? "Marcar como não visto" : "Marcar como explorado"}
            className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors flex items-center justify-center gap-1 min-h-[32px] ${
              isVisited 
                ? 'bg-[#E8C2B5]/40 text-[#5B1F2D]' 
                : 'bg-[#FAF6F4] text-[#8C5E6A] hover:bg-[#FAF0EC]'
            }`}
            aria-label={`Marcar ${bonus.title} como visto`}
          >
            {isVisited ? (
              <>
                <Check className="w-3 h-3 text-[#5B1F2D]" />
                <span>Explorado</span>
              </>
            ) : (
              <span>Marcar visto</span>
            )}
          </button>
        </div>
      </div>

      {/* Button with large touch target */}
      <div className="mt-6 pt-4 border-t border-[#FAF0EC] w-full">
        <a
          href={bonus.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#5B1F2D] to-[#B56B6F] hover:from-[#3F151F] hover:to-[#5B1F2D] rounded-2xl shadow-sm hover:shadow-md active:scale-[0.98] transition-all min-h-[48px] text-center"
        >
          <span>{bonus.buttonText}</span>
          <ExternalLink className="w-4 h-4 opacity-80" />
        </a>
      </div>
    </motion.div>
  );
};
