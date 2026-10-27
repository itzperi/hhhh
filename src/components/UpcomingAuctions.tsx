import React, { useState } from 'react';
import { UPCOMING_AUCTIONS } from '../data/chitSchemes';
import { Gavel, Clock, Calendar, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

interface UpcomingAuctionsProps {
  onJoinAuctionNotice: (schemeCode: string) => void;
}

export const UpcomingAuctions: React.FC<UpcomingAuctionsProps> = ({ onJoinAuctionNotice }) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'rules'>('upcoming');

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="auctions" className="w-full bg-[#ffffff] border-b border-[#000000] py-14 md:py-20 select-none">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-block bg-[#ffd731] border border-[#000000] rounded-[1600px] px-3.5 py-1 mb-2.5 hover:scale-105 transition-transform cursor-default">
              <span className="font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.04em] uppercase text-[#000000] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#000000]" />
                MONTHLY PUBLIC AUCTIONS
              </span>
            </div>
            <h2 className="font-lateral text-3xl sm:text-4xl md:text-5xl text-[#000000] tracking-tight uppercase leading-tight m-0">
              AUCTION BULLETIN
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`rounded-[1600px] border border-[#000000] px-4 py-2 font-aeonik font-bold text-xs md:text-sm tracking-[0.032em] uppercase transition-all cursor-pointer hover:-translate-y-0.5 ${
                activeTab === 'upcoming'
                  ? 'bg-[#000000] text-[#ffffff] shadow-[0_3px_0_#4da2ff]'
                  : 'bg-[#ffffff] text-[#000000] hover:bg-[#dceeff]'
              }`}
            >
              UPCOMING AUCTIONS
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`rounded-[1600px] border border-[#000000] px-4 py-2 font-aeonik font-bold text-xs md:text-sm tracking-[0.032em] uppercase transition-all cursor-pointer hover:-translate-y-0.5 ${
                activeTab === 'rules'
                  ? 'bg-[#000000] text-[#ffffff] shadow-[0_3px_0_#4da2ff]'
                  : 'bg-[#ffffff] text-[#000000] hover:bg-[#dceeff]'
              }`}
            >
              BIDDING PROTOCOLS
            </button>
          </div>
        </div>

        {activeTab === 'upcoming' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_AUCTIONS.map((auc) => (
              <div
                key={auc.id}
                className="rounded-[24px] border border-[#000000] bg-[#ffffff] p-6 hover:bg-[#dceeff]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_0_#000000] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#000000] mb-3.5">
                    <span className="font-aeonik font-bold text-xs uppercase tracking-[0.04em] text-[#000000] group-hover:text-[#4da2ff] transition-colors">
                      SERIES {auc.schemeCode}
                    </span>
                    <span className="bg-[#55db9c] border border-[#000000] rounded-[1600px] px-2.5 py-0.5 text-[10px] md:text-[11px] font-bold font-aeonik uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#000000] animate-ping" />
                      MONTH {auc.auctionNumber} OF {auc.totalMonths}
                    </span>
                  </div>

                  <h3 className="font-aeonik font-bold text-lg md:text-xl text-[#000000] mb-1">
                    {auc.groupName}
                  </h3>
                  <div className="text-xs md:text-sm font-aeonik font-semibold text-[#000000]/70 mb-4">
                    Chit Value: {formatINR(auc.chitValue)}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#e9ccff] rounded-[16px] border border-[#000000] p-3 hover:scale-105 transition-transform">
                      <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-aeonik font-bold uppercase text-[#000000]/80">
                        <Calendar className="w-3.5 h-3.5" /> DATE & TIME
                      </div>
                      <div className="font-aeonik font-bold text-xs md:text-sm text-[#000000] mt-1">
                        {auc.nextAuctionDate}
                      </div>
                      <div className="text-[11px] font-medium text-[#000000]/70">
                        {auc.auctionTime}
                      </div>
                    </div>

                    <div className="bg-[#ffd731] rounded-[16px] border border-[#000000] p-3 hover:scale-105 transition-transform">
                      <div className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-aeonik font-bold uppercase text-[#000000]/80">
                        <Gavel className="w-3.5 h-3.5" /> PREV DIVIDEND
                      </div>
                      <div className="font-lateral text-xl md:text-2xl text-[#000000] mt-1">
                        +{formatINR(auc.lastMonthDividend)}
                      </div>
                      <div className="text-[10px] md:text-[11px] font-medium text-[#000000]/70">
                        Per Subscriber Discount
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#000000]/10 gap-2">
                  <span className="text-[11px] md:text-[12px] font-aeonik font-medium text-[#000000] truncate">
                    Chinnakadai HQ & Online
                  </span>
                  <button
                    onClick={() => onJoinAuctionNotice(auc.schemeCode)}
                    className="rounded-[1600px] border border-[#000000] bg-[#000000] hover:bg-[#222222] text-[#ffffff] font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.032em] px-4 py-1.5 transition-all cursor-pointer shrink-0 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-[0_3px_0_#4da2ff] flex items-center gap-1"
                  >
                    ATTEND / BID PROXY
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-[24px] md:rounded-[28px] border border-[#000000] bg-[#e9ccff] p-6 md:p-8 hover:shadow-[0_8px_0_#000000] transition-shadow">
            <h3 className="font-aeonik font-bold text-xl md:text-2xl text-[#000000] mb-4">
              Panasuna Chits Reverse Auction Conduct Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-aeonik">
              <div className="bg-[#ffffff] rounded-[18px] border border-[#000000] p-4 md:p-5 hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-full bg-[#55db9c] border border-[#000000] flex items-center justify-center font-bold text-xs mb-2.5">
                  1
                </div>
                <h4 className="font-bold text-sm md:text-[15px] mb-1.5">Reverse Bidding Ceiling</h4>
                <p className="text-xs md:text-[13px] text-[#000000]/80 leading-relaxed">
                  As mandated by Tamil Nadu Chit Fund Rules, the maximum auction discount cannot exceed statutory limits (30% to 40%). If multiple members bid the ceiling, lots are drawn transparently.
                </p>
              </div>

              <div className="bg-[#ffffff] rounded-[18px] border border-[#000000] p-4 md:p-5 hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-full bg-[#ffd731] border border-[#000000] flex items-center justify-center font-bold text-xs mb-2.5">
                  2
                </div>
                <h4 className="font-bold text-sm md:text-[15px] mb-1.5">Security Verification</h4>
                <p className="text-xs md:text-[13px] text-[#000000]/80 leading-relaxed">
                  Prize winners furnish simple guarantor documentation (salaried individuals, property deeds, or government employees) ensuring zero bad debt exposure for other members.
                </p>
              </div>

              <div className="bg-[#ffffff] rounded-[18px] border border-[#000000] p-4 md:p-5 hover:scale-105 transition-transform">
                <div className="w-7 h-7 rounded-full bg-[#dceeff] border border-[#000000] flex items-center justify-center font-bold text-xs mb-2.5">
                  3
                </div>
                <h4 className="font-bold text-sm md:text-[15px] mb-1.5">24-Hour NEFT Disbursement</h4>
                <p className="text-xs md:text-[13px] text-[#000000]/80 leading-relaxed">
                  Once security vetting is confirmed, the prize sum is directly transferred via RTGS/NEFT to the subscriber’s registered bank account within one banking day.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
