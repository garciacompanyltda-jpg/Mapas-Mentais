import React from 'react';
import { MIND_MAP_SLIDES } from '../data/content';

export const PracticeCarouselSection: React.FC = () => {
  // Duplicate slides array to produce a seamless 50% loop for the infinite marquee
  const infiniteSlides = [...MIND_MAP_SLIDES, ...MIND_MAP_SLIDES];

  return (
    <section className="bg-[#FAF5EA] text-[#2B241F] py-14 md:py-20 relative overflow-hidden border-b border-[#E5D8C7]">
      {/* Title only - clean without extra text */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center px-4 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#2B241F]">
          Veja o material <span className="text-[#214735]">na prática</span>
        </h2>
      </div>

      {/* Large Infinite Continuous Marquee Track Moving to the Right */}
      <div className="relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee-right flex gap-5 sm:gap-8 items-center">
          {infiniteSlides.map((map, idx) => (
            <div
              key={`${map.id}-${idx}`}
              className="w-[310px] xs:w-[380px] sm:w-[500px] md:w-[600px] lg:w-[680px] shrink-0 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#E5D8C7]"
            >
              <img
                src={map.imageUrl}
                alt={map.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block bg-white"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
