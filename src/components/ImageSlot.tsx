import React, { useState } from 'react';
import { BookOpen, Sparkles, FileText } from 'lucide-react';

interface ImageSlotProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'auto';
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  fallbackTag?: string;
  priority?: boolean;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  fallbackTitle,
  fallbackSubtitle,
  fallbackTag,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const showFallback = !src || hasError;

  if (showFallback) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center bg-[#FAF6F0] border border-[#E8DFD5] rounded-xl overflow-hidden shadow-inner ${className}`}
      >
        {/* Subtle geometric pattern lines representing indigenous textile/art inspiration */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C25E38_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {fallbackTag && (
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#C25E38] bg-[#C25E38]/10 px-2.5 py-0.5 rounded-full mb-2">
            {fallbackTag}
          </span>
        )}

        <div className="w-12 h-12 rounded-full bg-[#C25E38]/10 text-[#C25E38] flex items-center justify-center mb-3">
          <BookOpen className="w-6 h-6 stroke-[1.75]" />
        </div>

        {fallbackTitle && (
          <h4 className="text-sm md:text-base font-bold text-neutral-900 max-w-xs leading-snug">
            {fallbackTitle}
          </h4>
        )}

        {fallbackSubtitle && (
          <p className="text-xs text-neutral-500 max-w-xs mt-1 leading-relaxed">
            {fallbackSubtitle}
          </p>
        )}

        <div className="mt-4 pt-3 border-t border-[#E8DFD5]/80 w-full flex items-center justify-center gap-1.5 text-[11px] font-medium text-[#2E7D32]">
          <FileText className="w-3.5 h-3.5" />
          <span>Material Didático Ilustrado</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-neutral-100 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-neutral-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
