import React from 'react';
import { Coins, Rocket, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { CoinGrowthAnimation } from './CoinGrowthAnimation';

interface HeroSectionProps {
  onExploreSchemes: () => void;
  onOpenCalculator: () => void;
  onOpenJoinModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSchemes,
  onOpenCalculator,
  onOpenJoinModal,
}) => {
  return (
    <section 
      id="hero"
      className="relative w-full bg-[#dceeff] border-b border-[#000000] py-10 md:py-16 select-none overflow-hidden"
    >
      {/* 3D Ribbon Motif Background SVG with subtle float */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <svg 
          viewBox="0 0 1440 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M-50 240 C 220 120, 450 480, 750 260 C 1050 80, 1280 480, 1500 200"
            stroke="#4da2ff"
            strokeWidth="90"
            strokeLinecap="round"
          />
          <path
            d="M-50 225 C 220 105, 450 465, 750 245 C 1050 65, 1280 465, 1500 185"
            stroke="#99ccff"
            strokeWidth="24"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Badges with lively hover bounces */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="bg-[#ffffff] border border-[#000000] rounded-[1600px] px-3.5 py-1.5 flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_3px_0_#000000] transition-all cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-[#55db9c] border border-[#000000] animate-ping" />
            <span className="font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.032em] uppercase text-[#000000]">
              ESTABLISHED JAN 6, 1995 · 30 YEARS OF TRUST
            </span>
          </div>

          <div className="bg-[#ffd731] border border-[#000000] rounded-[1600px] px-3.5 py-1.5 flex items-center gap-1.5 hover:-translate-y-0.5 hover:shadow-[0_3px_0_#000000] transition-all cursor-default">
            <Coins className="w-3.5 h-3.5 text-[#000000] stroke-[2.5]" />
            <span className="font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.032em] uppercase text-[#000000]">
              14% – 18% DIVIDENDS
            </span>
          </div>

          <div className="bg-[#fb4903] text-[#ffffff] border border-[#000000] rounded-[1600px] px-3.5 py-1.5 flex items-center gap-1.5 hover:-translate-y-0.5 hover:shadow-[0_3px_0_#000000] transition-all cursor-default">
            <Rocket className="w-3.5 h-3.5 text-[#ffffff] stroke-[2.5]" />
            <span className="font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.032em] uppercase text-[#ffffff]">
              24H PRIZE DISBURSEMENT
            </span>
          </div>

          <div className="bg-[#55db9c] border border-[#000000] rounded-[1600px] px-3.5 py-1.5 flex items-center gap-1.5 hover:-translate-y-0.5 hover:shadow-[0_3px_0_#000000] transition-all cursor-default">
            <ShieldCheck className="w-3.5 h-3.5 text-[#000000] stroke-[2.5]" />
            <span className="font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.032em] uppercase text-[#000000]">
              CHIT FUNDS ACT 1982
            </span>
          </div>
        </div>

        {/* Display Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="font-lateral text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#000000] tracking-tight uppercase m-0 leading-tight">
            PANASUNA CHITS
          </h1>
          <p className="font-aeonik font-medium text-base sm:text-lg md:text-xl text-[#000000] tracking-tight mt-3 leading-relaxed max-w-2xl mx-auto">
            Small monthly coin investments grow into substantial wealth. Save with guaranteed auction dividends and secure emergency credit when you need it most.
          </p>
        </div>

        {/* Action Buttons with tactile 3D hover press */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <button
            onClick={onExploreSchemes}
            className="rounded-[1600px] border border-[#000000] bg-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff] active:translate-y-0 active:shadow-none text-[#000000] font-aeonik font-bold text-[13px] md:text-[14px] tracking-[0.032em] px-6 py-3 transition-all cursor-pointer whitespace-nowrap hover:-translate-y-1 hover:shadow-[0_5px_0_#000000]"
          >
            EXPLORE CHIT SCHEMES
          </button>
          <button
            onClick={onOpenCalculator}
            className="rounded-[1600px] border border-[#000000] bg-[#ffffff] hover:bg-[#ffd731] active:translate-y-0 active:shadow-none text-[#000000] font-aeonik font-bold text-[13px] md:text-[14px] tracking-[0.032em] px-6 py-3 transition-all cursor-pointer whitespace-nowrap hover:-translate-y-1 hover:shadow-[0_5px_0_#000000]"
          >
            CALCULATE MY RETURNS
          </button>
          <button
            onClick={onOpenJoinModal}
            className="rounded-[1600px] border border-[#000000] bg-[#000000] hover:bg-[#333333] active:translate-y-0 active:shadow-none text-[#ffffff] font-aeonik font-bold text-[13px] md:text-[14px] tracking-[0.032em] px-6 py-3 transition-all cursor-pointer whitespace-nowrap hover:-translate-y-1 hover:shadow-[0_5px_0_#4da2ff] flex items-center gap-2"
          >
            ENROLL IN NEW BATCH
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Coin Growth Interactive Centerpiece (Small Coin -> Big Coin -> Note -> Bunch of Notes in 5.5s) */}
        <div className="max-w-4xl mx-auto">
          <CoinGrowthAnimation onJoinClick={onOpenJoinModal} />
        </div>

      </div>
    </section>
  );
};
