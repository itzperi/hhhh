import React from 'react';
import { Check, Wallet, QrCode, ArrowDownRight, Users2, Gavel, Coins, ShieldCheck, Download } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenJoinModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenJoinModal }) => {
  const steps = [
    {
      step: '01',
      title: 'GROUP FORMATION & GOVT FILING',
      desc: '25 to 50 verified subscribers form a regulated chit group. Panasuna pre-deposits 100% of the aggregate chit value as a fixed deposit guarantee with the Govt Registrar before starting.',
      bgColor: '#ffffff',
      tag: '100% SECURE',
      icon: ShieldCheck,
    },
    {
      step: '02',
      title: 'MONTHLY POOLED CONTRIBUTION',
      desc: 'Each subscriber pays their monthly installment into the common chit kitty (e.g. ₹20,000 for a ₹10 Lakh group). Payments can be made via UPI, NetBanking, or branch counter.',
      bgColor: '#e9ccff',
      tag: 'TRANSPARENT',
      icon: Coins,
    },
    {
      step: '03',
      title: 'OPEN REVERSE AUCTION',
      desc: 'Members in need of urgent funds bid an auction discount (up to 30% or 40% statutory cap). The subscriber accepting the highest discount wins the lump sum prize money within 24 hours.',
      bgColor: '#ffd731',
      tag: 'INSTANT CAPITAL',
      icon: Gavel,
    },
    {
      step: '04',
      title: 'EQUAL DIVIDEND DISTRIBUTION',
      desc: 'The auction discount (minus 5% foreman fee) is split equally among ALL group members as an auction dividend, reducing everyone’s next installment by thousands of rupees!',
      bgColor: '#55db9c',
      tag: '14%-18% GAIN',
      icon: Users2,
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#cccccc] border-b border-[#000000] py-14 md:py-20 select-none">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Top Header Block with Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-[#ffffff] border border-[#000000] rounded-[1600px] px-3.5 py-1 text-[11px] font-bold font-aeonik uppercase tracking-[0.032em] text-[#000000] hover:scale-105 transition-transform cursor-default">
                TRANSPARENT 4-STAGE CYCLE
              </span>
              <span className="bg-[#55db9c] border border-[#000000] rounded-[1600px] px-3 py-1 text-[11px] font-bold font-aeonik uppercase tracking-[0.032em] text-[#000000] flex items-center gap-1 hover:scale-105 transition-transform cursor-default">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                ZERO DEFAULTS
              </span>
              <span className="bg-[#5c4ade] text-[#ffffff] border border-[#000000] rounded-[1600px] px-3 py-1 text-[11px] font-bold font-aeonik uppercase tracking-[0.032em] flex items-center gap-1 hover:scale-105 transition-transform cursor-default">
                <Wallet className="w-3.5 h-3.5" />
                NO COLLATERAL REQUIRED
              </span>
            </div>

            <h2 className="font-lateral text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#000000] tracking-tight uppercase leading-tight m-0">
              HOW A CHIT FUND WORKS
            </h2>
          </div>

          <p className="font-aeonik font-medium text-sm sm:text-base text-[#000000] max-w-md leading-relaxed">
            A time-tested mutual financial model governed by the Central Chit Funds Act 1982. Save steadily or borrow without interest burdens.
          </p>
        </div>

        {/* 4 Steps Bento Grid with lively hover lifts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                style={{ backgroundColor: st.bgColor }}
                className="rounded-[24px] border border-[#000000] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_0_#000000] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-lateral text-3xl text-[#000000] group-hover:scale-110 transition-transform inline-block">
                      {st.step}
                    </span>
                    <span className="rounded-[1600px] border border-[#000000] bg-[#ffffff] px-2.5 py-0.5 text-[10px] font-bold font-aeonik uppercase tracking-[0.03em] text-[#000000] group-hover:bg-[#ffd731] transition-colors">
                      {st.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#000000] bg-[#ffffff] flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform shadow-[0_2px_0_#000000]">
                    <Icon className="w-5 h-5 text-[#000000] stroke-[2.5]" />
                  </div>

                  <h3 className="font-aeonik font-bold text-base md:text-lg text-[#000000] mb-2 leading-snug">
                    {st.title}
                  </h3>

                  <p className="font-aeonik font-medium text-xs md:text-sm text-[#000000] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#000000]/20 flex items-center justify-between text-[11px] font-aeonik font-bold text-[#000000]">
                  <span>GOVT REGULATED</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Slush QR Download Card Section with animated hover glow */}
        <div className="mt-10 bg-[#ffffff] rounded-[24px] md:rounded-[32px] border border-[#000000] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-[0_6px_0_#000000] transition-shadow duration-300">
          <div className="max-w-xl">
            <span className="font-aeonik font-bold text-[11px] uppercase tracking-[0.032em] text-[#000000] bg-[#ffd731] border border-[#000000] px-3 py-1 rounded-[1600px] inline-block hover:rotate-2 transition-transform">
              DIGITAL SUBSCRIBER ACCESS
            </span>
            <h3 className="font-aeonik font-bold text-xl sm:text-2xl md:text-3xl text-[#000000] mt-3 mb-2 leading-snug">
              Track Auction Dates, Dividends & Pay Online
            </h3>
            <p className="font-aeonik font-medium text-xs sm:text-sm text-[#000000]/80 leading-relaxed">
              Access your monthly passbook statements, participate in digital proxy auctions, and settle installments via UPI/Netbanking from anywhere.
            </p>
          </div>

          {/* QR Download Card */}
          <div className="rounded-[20px] bg-[#5c4ade] border border-[#000000] p-4 flex items-center gap-4 shrink-0 hover:scale-105 transition-all shadow-[0_4px_0_#000000]">
            {/* White QR Code square */}
            <div className="w-20 h-20 bg-[#ffffff] rounded-[12px] border border-[#000000] p-1.5 flex flex-col items-center justify-center shrink-0 relative overflow-hidden group">
              <div className="w-full h-full border border-[#000000] grid grid-cols-4 grid-rows-4 p-1 gap-0.5 bg-[#ffffff]">
                <div className="bg-[#000000] rounded-xs col-span-2 row-span-2" />
                <div className="bg-[#000000] rounded-xs col-start-4 row-start-1" />
                <div className="bg-[#000000] rounded-xs col-start-3 row-start-2" />
                <div className="bg-[#000000] rounded-xs col-start-1 row-start-4" />
                <div className="bg-[#000000] rounded-xs col-start-2 row-start-3" />
                <div className="bg-[#000000] rounded-xs col-span-2 row-span-2 col-start-3 row-start-3" />
              </div>
            </div>

            {/* Label Panel */}
            <div className="flex flex-col justify-center">
              <span className="font-aeonik font-bold text-[13px] tracking-[0.032em] text-[#ffffff] uppercase leading-none">
                PANASUNA APP
              </span>
              <span className="font-aeonik font-medium text-[11px] text-[#ffffff]/80 uppercase mt-1">
                PORTAL ACCESS
              </span>
              <button
                onClick={onOpenJoinModal}
                className="mt-2.5 rounded-[1600px] border border-[#ffffff] bg-[#ffffff] text-[#000000] font-aeonik font-bold text-[11px] tracking-[0.032em] px-3 py-1 flex items-center gap-1.5 hover:bg-[#ffd731] hover:scale-105 transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-3 h-3" />
                GET STARTED
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
