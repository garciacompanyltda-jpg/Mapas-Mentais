import React, { useState } from 'react';

const TESTIMONIAL_IMAGES = [
  {
    id: 1,
    url: 'https://i.postimg.cc/gcwBQJNG/depoimento01.webp',
    alt: 'Depoimento de professor 01',
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/x8KGQWXj/depoimento02.webp',
    alt: 'Depoimento de professor 02',
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/kgjQ7NgD/depoimento03.webp',
    alt: 'Depoimento de professor 03',
  },
  {
    id: 4,
    url: 'https://i.postimg.cc/k4SKNkv3/depoimento04.webp',
    alt: 'Depoimento de professor 04',
  },
  {
    id: 5,
    url: 'https://i.postimg.cc/4NPt1vtB/depoimento05.webp',
    alt: 'Depoimento de professor 05',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [isTouching, setIsTouching] = useState(false);

  // Duplicate slides array to produce a seamless 50% loop for the infinite marquee
  const infiniteTestimonials = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];

  return (
    <section className="bg-[#FAF5EA] py-16 md:py-24 relative overflow-hidden border-b border-[#E5D8C7]">
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center px-4 mb-8 sm:mb-12">
        
        {/* Floating pill badge pulsing up and down */}
        <div className="inline-flex items-center gap-2 bg-[#EBF3FA] text-[#1E5685] border border-[#C5DCF0] text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-full mb-6 shadow-xs animate-float-gentle select-none">
          <span className="text-base sm:text-lg">👇</span>
          <span>MAIS DE 2.350 PROFESSORES JÁ UTILIZAM</span>
        </div>

        {/* Title matching reference print layout and colors */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-[1.15] text-center">
          <span className="block text-[#1C2833] uppercase">
            O QUE DIZEM SOBRE OS
          </span>
          <span className="block text-[#A13F2D] uppercase mt-1">
            NOSSOS MAPAS MENTAIS
          </span>
        </h2>
      </div>

      {/* Infinite Continuous Slow Marquee Track */}
      <div
        className="relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => setIsTouching(false)}
        onTouchCancel={() => setIsTouching(false)}
      >
        <div
          className={`animate-marquee-testimonials flex gap-5 sm:gap-7 items-center ${
            isTouching ? '[animation-play-state:paused]' : ''
          }`}
        >
          {infiniteTestimonials.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[280px] xs:w-[320px] sm:w-[360px] md:w-[380px] shrink-0 rounded-2xl overflow-hidden shadow-md border border-[#E5D8C7] bg-white transition-transform duration-200 hover:scale-[1.01]"
            >
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
