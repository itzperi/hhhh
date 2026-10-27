import React, { useState } from 'react';

interface Single500NoteProps {
  className?: string;
  imgSrc?: string;
}

export const Single500Note: React.FC<Single500NoteProps> = ({ 
  className = '', 
  imgSrc = '/assets/aistudio/image_6064e1b2.png' 
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  // If user-provided image loads successfully, show it; otherwise show pristine realistic banknote
  if (!imgFailed && imgSrc) {
    return (
      <div className={`relative overflow-hidden rounded-[10px] border-2 border-[#000000] shadow-[0_5px_0_#000000] bg-[#ffffff] p-1 flex items-center justify-center ${className}`}>
        <img
          src={imgSrc}
          alt="Single ₹500 Note"
          onError={() => setImgFailed(true)}
          className="w-full h-auto object-contain rounded-[6px]"
        />
      </div>
    );
  }

  // High-fidelity SVG recreation of the official Reserve Bank of India ₹500 note
  return (
    <div 
      className={`relative w-48 sm:w-60 h-24 sm:h-28 rounded-[8px] border-2 border-[#000000] shadow-[0_5px_0_#000000] overflow-hidden bg-gradient-to-r from-[#e3eed4] via-[#d7e7c5] to-[#e4efd7] p-2 select-none ${className}`}
    >
      {/* Background Guilloche Security Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="guilloche" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="7" fill="none" stroke="#2e4220" strokeWidth="0.5" />
              <path d="M0 8 Q 8 0, 16 8 Q 8 16, 0 8 Z" fill="none" stroke="#2e4220" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#guilloche)" />
        </svg>
      </div>

      {/* Vertical Green Security Thread */}
      <div className="absolute top-0 bottom-0 left-[34%] w-1.5 bg-gradient-to-b from-[#258253] via-[#48c78e] to-[#1e6f46] border-x border-[#000000]/40 z-10 opacity-90 shadow-xs" />

      {/* Main Banknote Layout */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        
        {/* Top Header: RBI In Hindi and English */}
        <div className="flex items-center justify-between border-b border-[#000000]/25 pb-0.5">
          <div className="flex flex-col">
            <span className="font-sans text-[7px] sm:text-[8px] font-bold text-[#1f3017] tracking-wider leading-none">
              भारतीय रिज़र्व बैंक
            </span>
            <span className="font-serif text-[7px] sm:text-[8px] font-bold text-[#1f3017] tracking-wider leading-none mt-0.5">
              RESERVE BANK OF INDIA
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-mono text-[8px] font-bold text-[#8a1c14] tracking-tight">
              9VP 915925
            </span>
            <span className="font-bold text-[9px] sm:text-[10px] text-[#1f3017]">
              ₹५००
            </span>
          </div>
        </div>

        {/* Center: Large 500 & Portrait Silhouette */}
        <div className="flex items-center justify-between px-1">
          {/* Left: ₹500 Display */}
          <div className="flex items-baseline gap-1">
            <span className="font-lateral text-2xl sm:text-3xl text-[#182b12] font-black leading-none drop-shadow-xs">
              ₹500
            </span>
            <span className="text-[7px] font-bold uppercase text-[#3b532e] tracking-tight">
              FIVE HUNDRED RUPEES
            </span>
          </div>

          {/* Right: Gandhi Silhouette Avatar Watermark */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#000000]/30 bg-[#f7fbf0] flex items-center justify-center p-0.5 shadow-inner">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#384e2a] opacity-80" fill="currentColor">
              {/* Stylized Gandhi Face silhouette */}
              <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="40" cy="45" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="60" cy="45" r="9" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M49 45 L51 45" stroke="currentColor" strokeWidth="3" />
              <path d="M38 58 Q 50 66, 62 58" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Bottom Strip: Guarantee clause & Serial */}
        <div className="flex items-center justify-between text-[6px] sm:text-[7px] font-medium text-[#2d4222] border-t border-[#000000]/20 pt-0.5">
          <span className="font-mono tracking-tight font-bold text-[#8a1c14]">
            9VP 915925
          </span>
          <span className="truncate max-w-[130px] font-sans">
            GUARANTEED BY THE CENTRAL GOVERNMENT
          </span>
          <span className="font-mono font-bold text-[#182b12]">
            ₹500
          </span>
        </div>

      </div>
    </div>
  );
};
