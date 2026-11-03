import React from 'react';

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="bg-[#173A2C] text-white py-16 md:py-24 px-4 relative overflow-hidden border-t border-[#214735]">
      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-white">
          Economize horas preparando suas{' '}
          <span className="text-[#D9A13B]">próximas aulas</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xs sm:text-sm md:text-base text-[#F1E7D7] font-normal max-w-xl leading-relaxed mb-8">
          Tenha +150 Mapas Mentais de Cultura Indígena organizados e prontos para usar com seus alunos.
        </p>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          className="w-full sm:w-auto py-3 sm:py-3.5 px-8 sm:px-12 bg-[#2A9D68] hover:bg-[#228657] text-white font-extrabold text-sm sm:text-base md:text-lg rounded-full uppercase tracking-wider transition-all animate-soft-pulse-cta active:scale-[0.99] cursor-pointer whitespace-nowrap"
        >
          QUERO OS MAPAS AGORA
        </button>

      </div>
    </section>
  );
};
