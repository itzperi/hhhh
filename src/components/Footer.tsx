import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink, ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenJoinModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#ffffff] border-t border-[#000000] text-[#000000] select-none">
      
      {/* Top Banner inside footer with animated pulse */}
      <div className="bg-[#ffd731] border-b border-[#000000] py-6 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-[1600px] border border-[#000000] bg-[#ffffff] flex items-center justify-center font-lateral text-xl shadow-[0_2px_0_#000000] hover:rotate-12 transition-transform">
              P
            </span>
            <div>
              <h4 className="font-lateral text-2xl md:text-3xl uppercase leading-none">
                START SAVING IN 2026 WITH PANASUNA CHITS
              </h4>
              <p className="font-aeonik text-[12px] font-semibold text-[#000000]/80 mt-0.5">
                Government Protected · 100% Fixed Deposit Reserve · Transparent Digital Auctions
              </p>
            </div>
          </div>
          <button
            onClick={onOpenJoinModal}
            className="rounded-[1600px] border border-[#000000] bg-[#000000] text-[#ffffff] font-aeonik font-bold text-[13px] tracking-[0.032em] px-6 py-2.5 hover:bg-[#222222] hover:-translate-y-0.5 hover:shadow-[0_4px_0_#4da2ff] active:translate-y-0 active:shadow-none transition-all cursor-pointer shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ffd731] animate-spin" />
            ENROLL IN CURRENT SERIES
          </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[1600px] border border-[#000000] bg-[#55db9c] flex items-center justify-center font-lateral text-2xl text-[#000000] shadow-[0_3px_0_#000000] hover:rotate-6 transition-transform">
                P
              </div>
              <span className="font-lateral text-3xl tracking-tight leading-none hover:text-[#4da2ff] transition-colors">
                PANASUNA CHITS
              </span>
            </div>

            <p className="font-aeonik text-[14px] text-[#000000]/80 leading-relaxed max-w-sm mb-6">
              Panasuna Chits Private Limited is an esteemed, government-registered chit fund company founded in 1995 in Salem, Tamil Nadu. Empowering families, merchants, and small businesses with disciplined savings and collateral-free credit.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-[1600px] border border-[#000000] bg-[#dceeff] px-3 py-1 text-[11px] font-bold font-aeonik uppercase hover:scale-105 transition-transform cursor-default">
                CIN: U65992TZ1995PTC005676
              </span>
              <span className="rounded-[1600px] border border-[#000000] bg-[#e9ccff] px-3 py-1 text-[11px] font-bold font-aeonik uppercase hover:scale-105 transition-transform cursor-default">
                ICFA ACCREDITED
              </span>
            </div>
          </div>

          {/* Quick Links with hover slide */}
          <div>
            <h5 className="font-aeonik font-bold text-[12px] uppercase tracking-[0.04em] text-[#000000] mb-4">
              EXPLORE SCHEMES
            </h5>
            <ul className="space-y-2.5 font-aeonik text-[13px] font-semibold">
              <li>
                <button 
                  onClick={() => onNavigateSection('schemes')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  Household & Gold (₹1L - ₹2.5L)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('schemes')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  Business Capital (₹5L - ₹10L)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('schemes')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  Corporate Syndicate (₹25L - ₹50L)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('calculator')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  Dividend Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('auctions')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  Live Auction Calendar
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h5 className="font-aeonik font-bold text-[12px] uppercase tracking-[0.04em] text-[#000000] mb-4">
              GOVERNANCE & STATUTES
            </h5>
            <ul className="space-y-2.5 font-aeonik text-[13px] font-semibold">
              <li>
                <button 
                  onClick={() => onNavigateSection('trust')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  Chit Funds Act, 1982
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('trust')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  Tamil Nadu Chit Fund Rules
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('trust')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  100% FDR Deposit Mandate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('how-it-works')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  Reverse Bidding Transparency
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('trust')}
                  className="hover:translate-x-1 hover:text-[#4da2ff] text-[#000000] cursor-pointer transition-transform inline-block"
                >
                  ICFA Code of Ethics
                </button>
              </li>
            </ul>
          </div>

          {/* Registered Office & Contact */}
          <div>
            <h5 className="font-aeonik font-bold text-[12px] uppercase tracking-[0.04em] text-[#000000] mb-4">
              HEAD OFFICE & CONTACT
            </h5>
            <div className="space-y-3 font-aeonik text-[13px] text-[#000000]">
              <div className="flex items-start gap-2.5 hover:translate-x-0.5 transition-transform">
                <MapPin className="w-4 h-4 text-[#000000] shrink-0 mt-0.5" />
                <span>
                  151-A (Upstairs), Chinnakadai Street, Salem, Tamil Nadu - 636001
                </span>
              </div>
              <div className="flex items-center gap-2.5 hover:translate-x-0.5 transition-transform">
                <Phone className="w-4 h-4 text-[#000000] shrink-0" />
                <span>+91 (0427) 226-5676 / 226-1995</span>
              </div>
              <div className="flex items-center gap-2.5 hover:translate-x-0.5 transition-transform">
                <Mail className="w-4 h-4 text-[#000000] shrink-0" />
                <span>contact@panasunachits.com</span>
              </div>
              <div className="flex items-center gap-2.5 hover:translate-x-0.5 transition-transform">
                <Clock className="w-4 h-4 text-[#000000] shrink-0" />
                <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#000000] flex flex-col sm:flex-row items-center justify-between gap-4 font-aeonik text-[12px] font-medium text-[#000000]/80">
          <div>
            © 1995–2026 Panasuna Chits Private Limited. All rights reserved. Registered with Registrar of Companies (ROC) & State Registrar of Chits, Tamil Nadu.
          </div>
          <button
            onClick={scrollToTop}
            className="rounded-[1600px] border border-[#000000] bg-[#ffffff] hover:bg-[#ffd731] hover:-translate-y-1 hover:shadow-[0_4px_0_#000000] active:translate-y-0 active:shadow-none px-4 py-1.5 flex items-center gap-1.5 text-[#000000] font-bold text-[11px] uppercase tracking-[0.032em] cursor-pointer transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};
