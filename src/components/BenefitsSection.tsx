import React from 'react';
import { SITE_CONFIG } from '../data/content';

export const BenefitsSection: React.FC = () => {
  const benefitsList = [
    "+150 Mapas Mentais Ilustrados e Prontos para Uso",
    "Cultura e História dos Povos Indígenas do Brasil",
    "Tradições, Costumes, Ritos e Saberes Ancestrais",
    "Artes Indígenas, Grafismos, Cestaria e Cerâmica",
    "Material em PDF de Alta Qualidade Pronto para Imprimir",
  ];

  return (
    <section className="bg-[#173A2C] text-white py-14 md:py-20 px-4 border-b border-[#214735] relative overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#214735]/40 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* 1. Top pill badge matching TopBar color exactly */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A13F2D] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-lg border border-[#813121]/40 mb-2">
          <span>🔥 O QUE VOCÊ VAI RECEBER AO ADQUIRIR SEU MATERIAL</span>
        </div>

        {/* 2. Central Product Mockup */}
        <div className="w-full max-w-sm sm:max-w-md my-5 sm:my-7 flex items-center justify-center">
          <img
            src={SITE_CONFIG.mainMockupUrl}
            alt="+150 Mapas Mentais de Cultura Indígena"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[300px] sm:max-h-[340px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* 3. Card Container with Floating Badge on Top Border */}
        <div className="relative w-full max-w-xl mx-auto bg-[#122A20] border-2 border-[#2D6A4F] rounded-3xl p-6 sm:p-8 pt-8 sm:pt-9 shadow-2xl">
          
          {/* Floating Pill Badge: ⚡ ACESSO IMEDIATO */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#70D695] text-[#0F241A] font-extrabold text-xs sm:text-sm uppercase tracking-wider px-5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap border border-[#8EE0AC]">
            <span className="text-[#C25E38] text-sm">⚡</span>
            <span>ACESSO IMEDIATO</span>
          </div>

          {/* Card Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white text-center mb-6 tracking-tight">
            +150 Mapas Mentais de <span className="text-[#D9A13B]">Cultura Indígena</span> Incluem:
          </h3>

          {/* Vertical Checklist with Dividers - Clean & Compact */}
          <div className="space-y-0 text-left">
            {benefitsList.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 py-3 border-b border-[#214735]/80 last:border-b-0"
              >
                <span className="text-[#4ADE80] font-black text-base sm:text-lg select-none leading-none shrink-0">
                  ✓
                </span>
                <span className="text-white font-bold text-sm sm:text-base leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
