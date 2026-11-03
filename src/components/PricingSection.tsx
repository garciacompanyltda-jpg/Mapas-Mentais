import React from 'react';
import { Check, ShieldCheck, Zap, Gift } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

interface PricingSectionProps {
  onSelectPlan: (plan: 'essential' | 'complete') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="oferta" className="bg-[#FAF5EA] py-16 md:py-24 px-4 scroll-mt-6 border-b border-[#E5D8C7] relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-[#A13F2D] text-white text-xs font-extrabold uppercase tracking-wider px-5 py-2 rounded-full shadow-sm border border-[#813121]/30">
            <span>🔥 ESCOLHA SEU PLANO</span>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 items-stretch max-w-4xl">
          
          {/* ===================== PLANO 1: PLANO BÁSICO ===================== */}
          <div className="bg-white rounded-[20px] border border-[#E5D8C7] p-6 sm:p-8 flex flex-col justify-between shadow-xs relative transition-all">
            <div>
              {/* Header */}
              <div className="text-center mb-5">
                <span className="text-[11px] uppercase font-bold text-[#8C8176] tracking-wider block mb-1">
                  OPÇÃO BÁSICA
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2B241F]">
                  Plano Básico
                </h3>
                <p className="text-xs text-[#4D4036] font-normal mt-1">
                  Apenas o material sem os bônus
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-3.5 my-6 border-t border-b border-[#E5D8C7] py-5 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF2EB] border border-[#BBD5C2] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#214735] stroke-[2.75]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#2B241F] font-semibold">+150 Mapas Mentais Ilustrados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF2EB] border border-[#BBD5C2] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#214735] stroke-[2.75]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#2B241F] font-semibold">Material em PDF Pronto para Imprimir</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF2EB] border border-[#BBD5C2] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#214735] stroke-[2.75]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#2B241F] font-semibold">Acesso imediato</span>
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="text-center pt-2">
              <div className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#8C8176] mb-0.5">
                  POR APENAS:
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl font-black text-[#2B241F] tracking-tight">
                    R$10,00
                  </span>
                </div>
                <p className="text-xs text-[#4D4036] font-medium mt-0.5">
                  pagamento único
                </p>
              </div>

              <button
                onClick={() => onSelectPlan('essential')}
                className="w-full py-3 px-5 bg-white hover:bg-[#FAF5EA] text-[#214735] border-2 border-[#214735] font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all cursor-pointer whitespace-nowrap shadow-sm hover:shadow-md active:scale-[0.99]"
              >
                COMPRAR O BÁSICO
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[#8C8176] font-medium mt-3.5">
                <ShieldCheck className="w-4 h-4 text-[#214735]" />
                <span>Compra segura</span>
              </div>
            </div>
          </div>


          {/* ===================== PLANO 2: PLANO COMPLETO ===================== */}
          <div id="plano-completo" className="bg-white rounded-[20px] border-2 border-[#214735] shadow-md p-6 sm:p-8 flex flex-col justify-between relative transition-all text-[#2B241F] overflow-visible scroll-mt-20">
            
            {/* Top Floating Badge - 3X MAIS CONTEÚDO */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#A13F2D] text-white font-bold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap z-10 border border-[#813121]/30">
              <Zap className="w-3.5 h-3.5 fill-[#F5C76B] text-[#F5C76B]" />
              <span>3X MAIS CONTEÚDO</span>
            </div>

            <div>
              {/* Header */}
              <div className="text-center mt-3 mb-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#214735] tracking-wide uppercase leading-tight">
                  PLANO COMPLETO
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#A13F2D] mt-1 tracking-wide">
                  Cultura Indígena Ilustrada
                </p>
              </div>

              {/* Product Mockup Centered */}
              <div className="w-full max-w-[260px] mx-auto my-3 flex items-center justify-center">
                <img
                  src={SITE_CONFIG.mainMockupUrl}
                  alt="Cultura Indígena Ilustrada - Material Completo"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[160px] object-contain mx-auto"
                />
              </div>

              {/* Thin Divider */}
              <div className="border-t border-[#E5D8C7] my-4" />

              {/* Benefits & Bonuses List without truncation */}
              <div className="space-y-2.5 text-left text-xs sm:text-sm">
                {/* Core Items with Green Check Circles */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF2EB] border border-[#BBD5C2] text-[#214735] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.75]" />
                  </div>
                  <span className="font-semibold text-[#2B241F]">
                    Cultura Indígena Ilustrada (+150 Mapas)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF2EB] border border-[#BBD5C2] text-[#214735] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.75]" />
                  </div>
                  <span className="font-semibold text-[#2B241F]">
                    Material em PDF Pronto para Imprimir
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EAF2EB] border border-[#BBD5C2] text-[#214735] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.75]" />
                  </div>
                  <span className="font-semibold text-[#2B241F]">
                    Acesso imediato e vitalício
                  </span>
                </div>

                {/* 4 Bonuses in Terracotta Icon with Dark Brown text (Full readable text, compact font) */}
                <div className="flex items-start gap-2.5 pt-1">
                  <div className="w-5 h-5 rounded-full bg-[#FBF3F0] border border-[#DBB5A8] text-[#A13F2D] flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3 h-3 stroke-[2.25]" />
                  </div>
                  <span className="font-medium text-[#2B241F] text-[11px] sm:text-xs leading-snug">
                    Bônus #1 — +100 Atividades de Cultura Indígena
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FBF3F0] border border-[#DBB5A8] text-[#A13F2D] flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3 h-3 stroke-[2.25]" />
                  </div>
                  <span className="font-medium text-[#2B241F] text-[11px] sm:text-xs leading-snug">
                    Bônus #2 — Kit Consciência Indígena
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FBF3F0] border border-[#DBB5A8] text-[#A13F2D] flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3 h-3 stroke-[2.25]" />
                  </div>
                  <span className="font-medium text-[#2B241F] text-[11px] sm:text-xs leading-snug">
                    Bônus #3 — Feira Cultural dos Povos Indígenas
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#FBF3F0] border border-[#DBB5A8] text-[#A13F2D] flex items-center justify-center shrink-0 mt-0.5">
                    <Gift className="w-3 h-3 stroke-[2.25]" />
                  </div>
                  <span className="font-medium text-[#2B241F] text-[11px] sm:text-xs leading-snug">
                    Bônus #4 — +50 Dinâmicas de Cultura Indígena
                  </span>
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div id="plano-completo-cta" className="text-center pt-5 mt-3 scroll-mt-24">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#8C8176] mb-0.5">
                POR APENAS:
              </p>
              
              <div className="flex items-baseline justify-center">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#A13F2D] tracking-tight">
                  R$27,00
                </span>
              </div>
              <p className="text-xs text-[#4D4036] mt-0.5 mb-4 font-medium">
                pagamento único
              </p>

              {/* Soft Green CTA rounded-full */}
              <button
                onClick={() => onSelectPlan('complete')}
                className="w-full py-3 sm:py-3.5 px-6 bg-[#2A9D68] hover:bg-[#228657] text-white font-extrabold text-base sm:text-lg rounded-full uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer whitespace-nowrap"
              >
                COMPRAR O COMPLETO
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
