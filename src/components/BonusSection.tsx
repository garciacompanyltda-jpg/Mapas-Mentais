import React from 'react';
import { Gift } from 'lucide-react';
import { BONUSES } from '../data/content';
import { useTodayDate } from '../utils/useTodayDate';

interface BonusSectionProps {
  onBonusClick: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onBonusClick }) => {
  const { formattedLong } = useTodayDate();

  return (
    <section className="bg-[#FAF5EA] py-14 md:py-20 px-4 border-b border-[#E5D8C7] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Urgency Headline Block before bonus cards */}
        <div className="max-w-2xl mx-auto text-center mb-9 sm:mb-12">
          {/* Badge BÔNUS EXCLUSIVOS */}
          <div className="inline-flex items-center gap-1.5 bg-[#A13F2D] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-xs border border-[#813121]/30">
            <Gift className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>BÔNUS EXCLUSIVOS</span>
          </div>

          {/* Adapted Urgency Copy matching the user's attachment */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2B241F] tracking-tight leading-[1.3] max-w-xl mx-auto">
            Além do conteúdo principal, você também recebe{' '}
            <span className="text-[#214735]">4 bônus</span>, válidos{' '}
            <span className="text-[#A13F2D]">somente até {formattedLong}</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-2xl border border-[#E5D8C7] shadow-xs hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col justify-between p-4 sm:p-5 text-center relative"
            >
              {/* Image Container - clickable */}
              <div
                onClick={onBonusClick}
                className="w-full aspect-[4/3] mb-3.5 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={bonus.imageUrl}
                  alt={bonus.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain block select-none pointer-events-none"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.bonus-fb');
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                <div
                  className="bonus-fb w-full h-full bg-[#FAF5EA] rounded-xl flex-col items-center justify-center p-3 text-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-[10px] font-bold text-[#B54F2D] uppercase">Bônus #{bonus.id}</span>
                  <p className="text-xs font-bold text-[#2B241F] mt-1 line-clamp-2">{bonus.name}</p>
                </div>
              </div>

              {/* GRÁTIS Badge & Struck-through Price */}
              <div className="flex items-center justify-center gap-2 mb-2.5">
                <span className="bg-[#EAF2EB] text-[#214735] border border-[#BBD5C2] text-[11px] font-bold px-2.5 py-0.5 rounded-full tracking-wide">
                  GRÁTIS
                </span>
                <span className="text-xs text-[#8C8176] line-through font-semibold">
                  {bonus.originalPrice}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-start mb-4">
                <h3 className="text-sm sm:text-[15px] font-bold text-[#2B241F] leading-snug mb-1.5 min-h-[2.5rem] flex items-center justify-center">
                  {bonus.name}
                </h3>
                <p className="text-xs text-[#4D4036] font-normal leading-relaxed min-h-[3rem]">
                  {bonus.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={onBonusClick}
                className="w-full py-3 px-4 bg-[#2A9D68] hover:bg-[#228657] text-white font-extrabold text-xs rounded-full uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99]"
              >
                QUERO AGORA
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
