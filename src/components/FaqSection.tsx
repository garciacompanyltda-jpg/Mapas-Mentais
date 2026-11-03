import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/content';

export const FaqSection: React.FC = () => {
  // Only 1 open question at a time
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#F1E7D7] py-16 md:py-24 px-4 border-b border-[#E5D8C7]">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B241F] tracking-tight text-center mb-10">
          Perguntas Frequentes
        </h2>

        {/* Accordion List */}
        <div className="w-full bg-white rounded-2xl border border-[#E5D8C7] shadow-xs divide-y divide-[#E5D8C7] overflow-hidden">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-5 sm:px-7 flex items-center justify-between text-left gap-4 hover:bg-[#FAF5EA]/50 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#2B241F] leading-snug">
                    {item.question}
                  </span>
                  
                  {/* Expansion circular button */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#214735] text-white'
                        : 'bg-[#FAF5EA] border border-[#E5D8C7] text-[#214735]'
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-5 pt-1 text-xs sm:text-[13px] text-[#4D4036] font-normal leading-relaxed bg-[#FAF5EA]/30">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
