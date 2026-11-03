import React from 'react';
import { BookOpen } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-[#FAF5EA] pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 border-b border-[#E5D8C7] overflow-hidden">
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center w-full">

        {/* Main Headline strictly locked to exactly 3 lines with high impact */}
        <h1 className="text-[1.2rem] min-[360px]:text-[1.34rem] min-[390px]:text-[1.46rem] min-[430px]:text-[1.6rem] sm:text-3xl md:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-black tracking-tight leading-[1.22] max-w-5xl mx-auto mb-7 sm:mb-9 text-center">
          <span className="block whitespace-nowrap text-[#2B241F]">
            Apresente a Cultura Indígena
          </span>
          <span className="block whitespace-nowrap text-[#2B241F]">
            para Seus Alunos e Torne suas
          </span>
          <span className="block whitespace-nowrap text-[#2B241F]">
            Aulas <span className="text-[#A13F2D]">3x mais Interessantes</span>
          </span>
        </h1>

        {/* Main Mockup - Clean without colored background or thick borders */}
        <div className="w-full max-w-2xl mb-8 sm:mb-10 relative flex items-center justify-center">
          <img
            src={SITE_CONFIG.mainMockupUrl}
            alt="Mockup +150 Mapas Mentais de Cultura Indígena para Professores"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain mx-auto max-h-[300px] min-[390px]:max-h-[340px] min-[430px]:max-h-[380px] sm:max-h-[420px] md:max-h-[460px] animate-soft-pulse-mockup"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = document.getElementById('hero-mockup-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div
            id="hero-mockup-fallback"
            style={{ display: 'none' }}
            className="w-full aspect-[16/10] bg-[#FFFCF7] border border-dashed border-[#E5D8C7] rounded-xl flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#FAF5EA] text-[#214735] flex items-center justify-center mb-3 border border-[#E5D8C7]">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#2B241F]">
              +150 Mapas Mentais de Cultura Indígena
            </h3>
            <p className="text-sm text-[#4D4036] mt-1 max-w-md">
              Material completo, ilustrado e pronto para impressão ou apresentação digital.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full max-w-lg flex flex-col items-center">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto py-3 sm:py-3.5 px-8 sm:px-12 bg-[#2A9D68] hover:bg-[#228657] text-white font-extrabold text-sm sm:text-base md:text-lg rounded-full tracking-wide uppercase transition-all animate-soft-pulse-cta active:scale-[0.99] cursor-pointer whitespace-nowrap shrink-0 text-center"
          >
            QUERO OS MAPAS AGORA
          </button>
        </div>

      </div>
    </section>
  );
};
