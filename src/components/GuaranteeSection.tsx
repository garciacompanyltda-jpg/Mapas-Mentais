import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-[#FAF5EA] py-14 md:py-20 px-4 border-b border-[#E5D8C7]">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        
        {/* Guarantee Certificate Container */}
        <div className="w-full bg-white rounded-2xl p-7 sm:p-9 border border-[#E5D8C7] shadow-xs relative overflow-hidden flex flex-col items-center">
          
          {/* Guarantee 7 Days Logo */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center">
            <img
              src="https://i.postimg.cc/dVHGYfM6/galantia.webp"
              alt="Garantia incondicional de 7 dias"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B241F] tracking-tight mb-3">
            Garantia de 7 dias
          </h2>

          {/* Description */}
          <div className="text-xs sm:text-sm text-[#4D4036] font-normal leading-relaxed space-y-1.5 max-w-lg">
            <p>Conheça todo o material sem risco por 7 dias.</p>
            <p>
              Se você entender que o conteúdo não é para você, poderá solicitar o reembolso dentro do período de garantia.
            </p>
            <p className="font-bold text-[#214735] text-sm pt-2">
              Sem burocracia.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
