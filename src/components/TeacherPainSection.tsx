import React from 'react';
import { X } from 'lucide-react';

export const TeacherPainSection: React.FC = () => {
  const painPoints = [
    "Sente que perde muito tempo pesquisando conteúdos e imagens para preparar suas aulas",
    "Tem dificuldade em encontrar materiais visuais de qualidade e alinhados à BNCC",
    "Acha que suas aulas ficam teóricas demais e tem dificuldade de prender a atenção dos alunos",
  ];

  return (
    <section className="bg-[#FAF5EA] py-14 sm:py-20 px-4 border-b border-[#E5D8C7] relative overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        
        {/* Title matching print format */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2B241F] tracking-tight leading-tight">
          O Problema <span className="text-[#A13F2D]">Não é Você...</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base font-bold text-[#8C8176] mt-2 mb-6 sm:mb-8">
          Se você:
        </p>

        {/* 4 Pain Cards matching reference print */}
        <div className="w-full space-y-3.5 sm:space-y-4">
          {painPoints.map((text, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5D8C7] shadow-xs flex items-center gap-3.5 sm:gap-4 text-left transition-all hover:border-[#A13F2D]/40"
            >
              {/* Circular X Icon */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-[#A13F2D] text-[#A13F2D] flex items-center justify-center shrink-0">
                <X className="w-5 h-5 stroke-[2.75]" />
              </div>

              {/* Text */}
              <p className="text-xs sm:text-sm font-bold text-[#2B241F] leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
