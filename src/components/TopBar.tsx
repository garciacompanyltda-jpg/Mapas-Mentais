import React from 'react';
import { Zap } from 'lucide-react';
import { useTodayDate } from '../utils/useTodayDate';

interface TopBarProps {
  date?: string;
  customText?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ date, customText }) => {
  const today = useTodayDate();

  return (
    <div className="sticky top-0 z-50 w-full bg-[#A13F2D] text-white select-none">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2 sm:py-2.5 min-h-[46px] sm:min-h-[50px] flex items-center justify-center gap-2 sm:gap-2.5 whitespace-nowrap">
        {/* Lightning bolt in warm yellow #F5C76B */}
        <Zap className="w-4 h-4 fill-[#F5C76B] text-[#F5C76B] shrink-0" />

        {/* Text OFERTA SOMENTE HOJE: */}
        <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white shrink-0">
          {customText || 'OFERTA SOMENTE HOJE:'}
        </span>

        {/* Day / Month badges matching design reference */}
        <div className="inline-flex items-center gap-1 sm:gap-1.5 shrink-0">
          <span className="bg-white text-[#A13F2D] font-black text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg shadow-xs leading-tight inline-flex items-center justify-center min-w-[26px] sm:min-w-[30px]">
            {today.dayStr}
          </span>
          <span className="text-white font-bold text-xs sm:text-sm">/</span>
          <span className="bg-white text-[#A13F2D] font-black text-xs sm:text-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg shadow-xs leading-tight inline-flex items-center justify-center min-w-[26px] sm:min-w-[30px]">
            {today.monthStr}
          </span>
        </div>
      </div>
    </div>
  );
};
