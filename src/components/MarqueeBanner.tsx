import React from 'react';

interface MarqueeBannerProps {
  text?: string;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  text = 'GOVT. OF TAMIL NADU REGISTERED CHIT FUND · CHIT FUNDS ACT 1982 COMPLIANT · CIN: U65992TZ1995PTC005676 · 30 YEARS OF COLLECTIVE PROSPERITY (1995-2026) · SALEM HEADQUARTERS · ICFA MEMBER · ZERO MARKET RISK · MONTHLY AUCTION DIVIDENDS · 100% SECURE BANK GUARANTEE ·',
}) => {
  return (
    <aside 
      aria-label="Legal and Compliance Announcements"
      className="w-full bg-[#000000] text-[#ffffff] border-y border-[#000000] overflow-hidden select-none z-50 relative py-2"
    >
      <div className="flex w-max animate-marquee">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.032em] uppercase font-aeonik whitespace-nowrap px-4">
          {text} {text}
        </span>
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.032em] uppercase font-aeonik whitespace-nowrap px-4" aria-hidden="true">
          {text} {text}
        </span>
      </div>
    </aside>
  );
};
