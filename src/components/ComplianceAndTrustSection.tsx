import React, { useState } from 'react';
import { ShieldCheck, FileText, Building2, Landmark, Check, ChevronDown, ChevronUp, Lock, Sparkles } from 'lucide-react';
import { TRUST_FACTS } from '../data/chitSchemes';

export const ComplianceAndTrustSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is Panasuna Chits legally registered and regulated?',
      a: 'Yes, Panasuna Chits Private Limited is an incorporated non-banking chit entity (CIN: U65992TZ1995PTC005676) governed strictly under the Chit Funds Act, 1982 and Tamil Nadu Chit Funds Rules. We are active members of the Incorporated Chit Funds Association (ICFA) with over 30 years of impeccable regulatory standing.',
    },
    {
      q: 'How is my monthly money protected from default?',
      a: 'Under Section 20 of the Chit Funds Act, 1982, before commencing any chit series, Panasuna Chits must pre-deposit 100% of the aggregate chit value in a nationalized bank as a Fixed Deposit in the name of the Registrar of Chits. This statutory reserve guarantees that your funds remain 100% safe.',
    },
    {
      q: 'What is the dividend and how do I earn 14% - 18% annualized return?',
      a: 'When an auction takes place, borrowers bid a discount to access funds early. After deducting the 5% statutory foreman commission, the entire remaining discount is distributed back to all non-prized members as a monthly dividend deduction, yielding compound returns significantly higher than bank savings or recurring deposits.',
    },
    {
      q: 'Can I withdraw or bid for money if I have an urgent emergency?',
      a: 'Yes! From the 2nd month onwards, any active subscriber can participate in the monthly reverse auction (in person at our Salem branch or via our verified online portal) and take home the lump-sum prize money within 24 hours of submitting basic security guarantees.',
    },
  ];

  return (
    <section id="trust" className="w-full bg-[#ffffff] border-b border-[#000000] py-14 md:py-20 select-none">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-block bg-[#55db9c] border border-[#000000] rounded-[1600px] px-3.5 py-1 mb-2.5 hover:scale-105 transition-transform cursor-default">
              <span className="font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.04em] uppercase text-[#000000] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#000000]" />
                STATUTORY GOVERNANCE & 30-YEAR LEGACY
              </span>
            </div>
            <h2 className="font-lateral text-3xl sm:text-4xl md:text-5xl text-[#000000] tracking-tight uppercase leading-tight m-0">
              TRUST & LEGAL
            </h2>
          </div>
          <p className="font-aeonik font-medium text-sm sm:text-base text-[#000000] max-w-md leading-relaxed">
            Complete transparency since January 6, 1995. Fully registered with the Registrar of Chits, Govt. of Tamil Nadu.
          </p>
        </div>

        {/* 4 Metric Proof Pills with lively hover lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {TRUST_FACTS.map((fact, idx) => (
            <div
              key={fact.label}
              className={`rounded-[20px] border border-[#000000] p-5 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_0_#000000] cursor-default group ${
                idx === 0 ? 'bg-[#ffd731]' : idx === 1 ? 'bg-[#e9ccff]' : idx === 2 ? 'bg-[#55db9c]' : 'bg-[#dceeff]'
              }`}
            >
              <div className="font-lateral text-3xl sm:text-4xl text-[#000000] tracking-tight mb-1 group-hover:scale-110 transition-transform inline-block">
                {fact.number}
              </div>
              <div className="font-aeonik font-bold text-xs md:text-sm uppercase tracking-[0.032em] text-[#000000] mb-1">
                {fact.label}
              </div>
              <p className="text-[11px] md:text-xs font-aeonik font-medium text-[#000000]/80 leading-snug">
                {fact.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Certificate Card */}
        <div className="rounded-[24px] md:rounded-[32px] border border-[#000000] bg-[#ffffff] p-6 md:p-8 mb-10 hover:shadow-[0_8px_0_#000000] transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#000000]">
            <div>
              <span className="rounded-[1600px] border border-[#000000] bg-[#000000] text-[#ffffff] px-3.5 py-1 text-[10px] md:text-[11px] font-bold font-aeonik uppercase tracking-[0.032em] hover:bg-[#4da2ff] hover:text-[#000000] transition-colors inline-block cursor-default">
                GOVERNMENT REGISTRATION CERTIFICATE
              </span>
              <h3 className="font-lateral text-2xl sm:text-3xl md:text-4xl text-[#000000] mt-2.5 mb-1.5 leading-tight">
                PANASUNA CHITS PRIVATE LIMITED
              </h3>
              <p className="font-aeonik font-medium text-xs sm:text-sm text-[#000000]/80 max-w-2xl leading-relaxed">
                Incorporated under the Companies Act, 1956 and actively registered with the Registrar of Companies (ROC) Coimbatore / Tamil Nadu.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <div className="rounded-[14px] border border-[#000000] bg-[#e9ccff] px-3.5 py-2 hover:scale-105 transition-transform">
                <span className="font-aeonik text-[9px] uppercase font-bold text-[#000000] block">
                  CORPORATE ID (CIN)
                </span>
                <span className="font-mono font-bold text-xs md:text-sm text-[#000000]">
                  U65992TZ1995PTC005676
                </span>
              </div>
              <div className="rounded-[14px] border border-[#000000] bg-[#55db9c] px-3.5 py-2 hover:scale-105 transition-transform">
                <span className="font-aeonik text-[9px] uppercase font-bold text-[#000000] block">
                  INCORPORATION DATE
                </span>
                <span className="font-aeonik font-bold text-xs md:text-sm text-[#000000]">
                  06 JAN 1995
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="flex items-start gap-3 p-2 rounded-[14px] hover:bg-[#f8f8f8] transition-colors">
              <div className="w-9 h-9 rounded-full border border-[#000000] bg-[#ffd731] flex items-center justify-center shrink-0 hover:rotate-12 transition-transform">
                <ShieldCheck className="w-4 h-4 text-[#000000] stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-aeonik font-bold text-sm md:text-[15px] text-[#000000] mb-0.5">
                  100% Bank Guarantee
                </h4>
                <p className="font-aeonik font-medium text-xs text-[#000000]/70 leading-relaxed">
                  Every single chit group is backed by a 100% value fixed deposit with nationalized banks pledged to the Registrar of Chits.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2 rounded-[14px] hover:bg-[#f8f8f8] transition-colors">
              <div className="w-9 h-9 rounded-full border border-[#000000] bg-[#55db9c] flex items-center justify-center shrink-0 hover:rotate-12 transition-transform">
                <Building2 className="w-4 h-4 text-[#000000] stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-aeonik font-bold text-sm md:text-[15px] text-[#000000] mb-0.5">
                  ICFA Association Member
                </h4>
                <p className="font-aeonik font-medium text-xs text-[#000000]/70 leading-relaxed">
                  Proud accredited member of the Incorporated Chit Funds Association (ICFA), upholding rigorous ethical lending benchmarks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2 rounded-[14px] hover:bg-[#f8f8f8] transition-colors">
              <div className="w-9 h-9 rounded-full border border-[#000000] bg-[#dceeff] flex items-center justify-center shrink-0 hover:rotate-12 transition-transform">
                <Lock className="w-4 h-4 text-[#000000] stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-aeonik font-bold text-sm md:text-[15px] text-[#000000] mb-0.5">
                  Prompt Direct Settlement
                </h4>
                <p className="font-aeonik font-medium text-xs text-[#000000]/70 leading-relaxed">
                  Auction payouts are disbursed within 24 hours directly to registered beneficiary accounts via secure RTGS/NEFT protocols.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscriber FAQ Accordion with smooth hover interaction */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <span className="font-aeonik font-bold text-xs uppercase tracking-[0.032em] text-[#000000]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="font-lateral text-2xl sm:text-3xl text-[#000000] mt-1 leading-tight">
              CLEAR ANSWERS FOR SMARTER SAVINGS
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-[18px] border border-[#000000] bg-[#ffffff] overflow-hidden transition-all duration-200 ${
                    isOpen ? 'shadow-[0_4px_0_#000000]' : 'hover:shadow-[0_2px_0_#000000]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-aeonik font-bold text-sm md:text-[15px] text-[#000000] cursor-pointer hover:bg-[#fcfcfc] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-6 h-6 rounded-full border border-[#000000] flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#55db9c] rotate-180' : 'bg-[#e9e9e9]'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs md:text-sm font-aeonik font-medium text-[#000000]/80 leading-relaxed border-t border-[#000000]/10 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
