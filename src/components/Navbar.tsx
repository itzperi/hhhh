import React, { useState } from 'react';
import { Plus, X, ShieldCheck, Calculator, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (schemeId?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'CHIT SCHEMES', id: 'schemes' },
    { label: 'CALCULATOR', id: 'calculator' },
    { label: 'HOW IT WORKS', id: 'how-it-works' },
    { label: 'AUCTIONS', id: 'auctions' },
    { label: 'GOVT LICENSE', id: 'trust' },
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#ffffff] border-b border-[#000000] px-4 md:px-8 py-3 select-none backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Brand Identifier with interactive hover wobble */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-[1600px] border border-[#000000] bg-[#ffffff] flex items-center justify-center font-lateral text-xl md:text-2xl text-[#000000] group-hover:bg-[#ffd731] group-hover:rotate-6 group-hover:scale-105 transition-all select-none shrink-0 shadow-[0_2px_0_#000000]">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-lateral text-xl md:text-2xl tracking-tight leading-none text-[#000000] whitespace-nowrap group-hover:text-[#4da2ff] transition-colors">
              PANASUNA CHITS
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.032em] uppercase font-aeonik text-[#000000]/75 whitespace-nowrap mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55db9c] inline-block animate-pulse" />
              PVT LTD · SALEM · ESTD 1995
            </span>
          </div>
        </div>

        {/* Zone 2: Pill Nav Buttons with tactile hover lifts */}
        <nav className="hidden lg:flex items-center gap-2 shrink-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="rounded-[1600px] border border-[#000000] bg-[#ffffff] hover:bg-[#dceeff] active:bg-[#cccccc] text-[#000000] font-aeonik font-bold text-xs tracking-[0.032em] px-4 py-2 transition-all cursor-pointer whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_3px_0_#000000] active:translate-y-0 active:shadow-none"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onOpenJoinModal()}
            className="rounded-[1600px] border border-[#000000] bg-[#000000] hover:bg-[#222222] text-[#ffffff] font-aeonik font-bold text-xs tracking-[0.032em] px-4 py-2 md:px-5 md:py-2.5 transition-all cursor-pointer whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_4px_0_#4da2ff] active:translate-y-0 active:shadow-none flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ffd731] animate-spin" />
            JOIN A CHIT
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 rounded-[1600px] border border-[#000000] bg-[#ffffff] hover:bg-[#ffd731] active:bg-[#cccccc] flex items-center justify-center text-[#000000] transition-all cursor-pointer shrink-0 hover:rotate-90"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
          </button>
        </div>

      </div>

      {/* Dropdown Menu on Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-[#000000] flex flex-col gap-2 pb-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left rounded-[1600px] border border-[#000000] bg-[#ffffff] hover:bg-[#dceeff] text-[#000000] font-aeonik font-bold text-xs tracking-[0.032em] px-4 py-2.5 transition-all hover:translate-x-1"
            >
              {item.label}
            </button>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-1">
            <button
              onClick={() => handleNavClick('calculator')}
              className="flex items-center justify-center gap-1.5 rounded-[1600px] border border-[#000000] bg-[#e9ccff] hover:scale-105 transition-transform py-2 font-aeonik font-bold text-[11px] tracking-[0.032em]"
            >
              <Calculator className="w-3.5 h-3.5" /> CALCULATE
            </button>
            <button
              onClick={() => handleNavClick('trust')}
              className="flex items-center justify-center gap-1.5 rounded-[1600px] border border-[#000000] bg-[#55db9c] hover:scale-105 transition-transform py-2 font-aeonik font-bold text-[11px] tracking-[0.032em]"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> CIN & ROC
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
