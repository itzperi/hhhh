import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, HandCoins, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface ChitCalculatorProps {
  onSelectSchemeToJoin: (chitValue: number, duration: number) => void;
}

export const ChitCalculator: React.FC<ChitCalculatorProps> = ({ onSelectSchemeToJoin }) => {
  const [chitAmount, setChitAmount] = useState<number>(500000);
  const [duration, setDuration] = useState<number>(25);
  const [userRole, setUserRole] = useState<'saver' | 'borrower'>('saver');

  const calculations = useMemo(() => {
    const grossMonthly = chitAmount / duration;
    const avgMonthlyDividend = Math.round(grossMonthly * 0.16);
    const netMonthlyPayable = grossMonthly - avgMonthlyDividend;
    const totalPaidOverPeriod = netMonthlyPayable * duration;
    const totalDividendsEarned = avgMonthlyDividend * duration;
    
    const typicalAuctionDiscount = Math.round(chitAmount * 0.28);
    const netPrizeAmount = chitAmount - typicalAuctionDiscount;

    return {
      grossMonthly,
      avgMonthlyDividend,
      netMonthlyPayable,
      totalPaidOverPeriod,
      totalDividendsEarned,
      typicalAuctionDiscount,
      netPrizeAmount,
    };
  }, [chitAmount, duration]);

  const presetAmounts = [100000, 250000, 500000, 1000000, 2500000, 5000000];

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="w-full bg-[#ffffff] border-b border-[#000000] py-14 md:py-20 select-none">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-block bg-[#e9ccff] border border-[#000000] rounded-[1600px] px-3.5 py-1 mb-2.5 hover:scale-105 transition-transform cursor-default">
              <span className="font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.04em] uppercase text-[#000000] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#000000]" />
                DYNAMIC DIVIDEND ESTIMATOR
              </span>
            </div>
            <h2 className="font-lateral text-3xl sm:text-4xl md:text-5xl text-[#000000] tracking-tight uppercase leading-tight m-0">
              CHIT CALCULATOR
            </h2>
          </div>
          <p className="font-aeonik font-medium text-sm sm:text-base text-[#000000] max-w-md leading-relaxed">
            Simulate your monthly dividend yield or early auction borrowing capital with Panasuna's transparent calculations.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#dceeff] border border-[#000000] rounded-[24px] md:rounded-[32px] p-6 md:p-8 hover:shadow-[0_6px_0_#000000] transition-shadow duration-300">
            
            {/* Persona Switch: Saver vs Borrower */}
            <div className="mb-7">
              <label className="block font-aeonik font-bold text-[11px] md:text-[12px] uppercase tracking-[0.032em] text-[#000000] mb-2.5">
                1. SELECT YOUR FINANCIAL OBJECTIVE
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUserRole('saver')}
                  className={`rounded-[1600px] border border-[#000000] py-2.5 px-4 font-aeonik font-bold text-xs md:text-sm tracking-[0.032em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_3px_0_#000000] active:translate-y-0 active:shadow-none ${
                    userRole === 'saver'
                      ? 'bg-[#000000] text-[#ffffff] shadow-[0_3px_0_#4da2ff]'
                      : 'bg-[#ffffff] text-[#000000] hover:bg-[#e9e9e9]'
                  }`}
                >
                  <TrendingUp className="w-4 h-4" />
                  SAVINGS & DIVIDENDS
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('borrower')}
                  className={`rounded-[1600px] border border-[#000000] py-2.5 px-4 font-aeonik font-bold text-xs md:text-sm tracking-[0.032em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_3px_0_#000000] active:translate-y-0 active:shadow-none ${
                    userRole === 'borrower'
                      ? 'bg-[#000000] text-[#ffffff] shadow-[0_3px_0_#4da2ff]'
                      : 'bg-[#ffffff] text-[#000000] hover:bg-[#e9e9e9]'
                  }`}
                >
                  <HandCoins className="w-4 h-4" />
                  EMERGENCY BORROWING
                </button>
              </div>
            </div>

            {/* Chit Amount Selector */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <label className="font-aeonik font-bold text-[11px] md:text-[12px] uppercase tracking-[0.032em] text-[#000000]">
                  2. DESIRED CHIT VALUE
                </label>
                <span className="font-lateral text-2xl sm:text-3xl text-[#000000] tracking-tight bg-[#ffffff] px-3 py-0.5 rounded-[12px] border border-[#000000] shadow-xs">
                  {formatINR(chitAmount)}
                </span>
              </div>

              {/* Range slider */}
              <input
                type="range"
                min={100000}
                max={5000000}
                step={50000}
                value={chitAmount}
                onChange={(e) => setChitAmount(Number(e.target.value))}
                className="w-full h-3 bg-[#ffffff] rounded-lg appearance-none cursor-pointer border border-[#000000] accent-[#000000] transition-all"
              />

              {/* Quick Pills with hover bounce */}
              <div className="flex flex-wrap gap-2 mt-3.5">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setChitAmount(amt)}
                    className={`rounded-[1600px] border border-[#000000] text-[11px] md:text-[12px] font-bold font-aeonik px-3 py-1 transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_2px_0_#000000] active:translate-y-0 ${
                      chitAmount === amt
                        ? 'bg-[#ffd731] text-[#000000] scale-105 shadow-xs'
                        : 'bg-[#ffffff] text-[#000000] hover:bg-[#e9e9e9]'
                    }`}
                  >
                    {amt >= 10000000 ? `₹${amt / 10000000} Cr` : `₹${amt / 100000} L`}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Selector */}
            <div>
              <label className="block font-aeonik font-bold text-[11px] md:text-[12px] uppercase tracking-[0.032em] text-[#000000] mb-2.5">
                3. TENURE / DURATION
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[25, 40, 50].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDuration(m)}
                    className={`rounded-[1600px] border border-[#000000] py-2 px-3 font-aeonik font-bold text-xs md:text-sm tracking-[0.032em] uppercase transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_2px_0_#000000] active:translate-y-0 ${
                      duration === m
                        ? 'bg-[#55db9c] text-[#000000] scale-105 shadow-xs'
                        : 'bg-[#ffffff] text-[#000000] hover:bg-[#e9e9e9]'
                    }`}
                  >
                    {m} MONTHS
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#ffffff] border border-[#000000] rounded-[24px] md:rounded-[32px] p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_8px_0_#000000] transition-shadow duration-300">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-[#000000] mb-5">
                <span className="font-aeonik font-bold text-[11px] md:text-[12px] uppercase tracking-[0.032em] text-[#000000]">
                  ESTIMATED SUMMARY
                </span>
                <span className="rounded-[1600px] border border-[#000000] bg-[#ffd731] px-3 py-0.5 text-[10px] md:text-[11px] font-bold font-aeonik uppercase animate-pulse">
                  {userRole === 'saver' ? 'SAVER PLAN' : 'BORROWER PLAN'}
                </span>
              </div>

              {/* Key Output Metric with hover glow */}
              <div className="bg-[#e9ccff] rounded-[18px] border border-[#000000] p-4 md:p-5 mb-5 shadow-[0_3px_0_#000000] hover:scale-[1.02] transition-transform">
                <span className="text-[11px] font-aeonik font-bold uppercase tracking-[0.032em] text-[#000000] block mb-1">
                  {userRole === 'saver' ? 'NET MONTHLY INSTALLMENT' : 'LUMP-SUM PRIZE MONEY'}
                </span>
                <div className="font-lateral text-3xl sm:text-4xl text-[#000000] tracking-tight">
                  {userRole === 'saver' ? formatINR(calculations.netMonthlyPayable) : formatINR(calculations.netPrizeAmount)}
                </div>
                <div className="text-[11px] md:text-[12px] font-aeonik font-medium text-[#000000] mt-1.5 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-[#000000]" />
                  {userRole === 'saver'
                    ? `Gross ₹${formatINR(calculations.grossMonthly)} minus ₹${formatINR(calculations.avgMonthlyDividend)} dividend`
                    : `Disbursed in 24 hours upon reverse auction completion`}
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2.5 font-aeonik text-[13px] md:text-[14px]">
                <div className="flex justify-between py-1.5 border-b border-[#000000]/20 hover:bg-[#dceeff]/30 px-1 rounded-xs transition-colors">
                  <span className="text-[#000000] font-medium">Nominal Chit Value:</span>
                  <span className="font-bold tabular-nums text-[#000000]">{formatINR(chitAmount)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#000000]/20 hover:bg-[#dceeff]/30 px-1 rounded-xs transition-colors">
                  <span className="text-[#000000] font-medium">Scheme Tenure:</span>
                  <span className="font-bold tabular-nums text-[#000000]">{duration} Months</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#000000]/20 hover:bg-[#dceeff]/30 px-1 rounded-xs transition-colors">
                  <span className="text-[#000000] font-medium">
                    {userRole === 'saver' ? 'Total Dividends Earned:' : 'Estimated Auction Discount:'}
                  </span>
                  <span className="font-bold tabular-nums text-[#000000]">
                    {userRole === 'saver' ? formatINR(calculations.totalDividendsEarned) : formatINR(calculations.typicalAuctionDiscount)}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#000000]/20 hover:bg-[#dceeff]/30 px-1 rounded-xs transition-colors">
                  <span className="text-[#000000] font-medium">Total Net Outlay:</span>
                  <span className="font-bold tabular-nums text-[#000000]">{formatINR(calculations.totalPaidOverPeriod)}</span>
                </div>
                <div className="flex justify-between py-1.5 px-1">
                  <span className="text-[#000000] font-medium">Annualized Benefit:</span>
                  <span className="font-bold text-[#000000] bg-[#55db9c] px-2 py-0.5 rounded-[6px] border border-[#000000] text-[11px] md:text-[12px] hover:scale-105 transition-transform">
                    {userRole === 'saver' ? '14% - 17% p.a.' : 'No Processing Fees'}
                  </span>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <div className="mt-6 pt-4 border-t border-[#000000]">
              <button
                type="button"
                onClick={() => onSelectSchemeToJoin(chitAmount, duration)}
                className="w-full rounded-[1600px] border border-[#000000] bg-[#000000] hover:bg-[#222222] text-[#ffffff] font-aeonik font-bold text-xs md:text-sm tracking-[0.032em] uppercase py-3 px-6 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_4px_0_#4da2ff] active:translate-y-0 active:shadow-none"
              >
                APPLY FOR THIS CHIT PLAN
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-[10px] md:text-[11px] font-aeonik font-medium text-[#000000]/70 mt-2">
                *Subject to Chit Funds Act 1982 guidelines and security verification.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
