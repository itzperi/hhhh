import React, { useState } from 'react';
import { CHIT_SCHEMES } from '../data/chitSchemes';
import { ChitScheme, SchemeCategory } from '../types/chit';
import { Users, Calendar, ArrowRight, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface ChitSchemesCatalogProps {
  onSelectScheme: (scheme: ChitScheme) => void;
}

export const ChitSchemesCatalog: React.FC<ChitSchemesCatalogProps> = ({ onSelectScheme }) => {
  const [selectedCategory, setSelectedCategory] = useState<SchemeCategory>('all');

  const filteredSchemes = CHIT_SCHEMES.filter((scheme) => {
    if (selectedCategory === 'all') return true;
    return scheme.category === selectedCategory;
  });

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const categories: { label: string; value: SchemeCategory }[] = [
    { label: 'ALL SCHEMES', value: 'all' },
    { label: 'HOUSEHOLD & GOLD (₹1L - ₹2.5L)', value: 'household' },
    { label: 'BUSINESS EXPANSION (₹5L - ₹10L)', value: 'business' },
    { label: 'COMMERCIAL & HNI (₹25L - ₹50L)', value: 'commercial' },
  ];

  return (
    <section id="schemes" className="w-full bg-[#ffffff] border-b border-[#000000] py-14 md:py-20 select-none">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-block bg-[#55db9c] border border-[#000000] rounded-[1600px] px-3.5 py-1 mb-2.5 hover:scale-105 transition-transform">
              <span className="font-aeonik font-bold text-[11px] md:text-[12px] tracking-[0.04em] uppercase text-[#000000] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#000000]" />
                GOVERNMENT APPROVED GROUPS
              </span>
            </div>
            <h2 className="font-lateral text-3xl sm:text-4xl md:text-5xl text-[#000000] tracking-tight uppercase leading-tight m-0">
              FEATURED SCHEMES
            </h2>
          </div>
          <p className="font-aeonik font-medium text-sm sm:text-base text-[#000000] max-w-md leading-relaxed">
            Choose from micro-savings to high-volume commercial groups with guaranteed bank reserves and transparent monthly auctions.
          </p>
        </div>

        {/* Category Filters (Pills with tactile hover bounce) */}
        <div className="flex overflow-x-auto pb-3 gap-2 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`rounded-[1600px] border border-[#000000] px-4 py-2 font-aeonik font-bold text-xs md:text-sm tracking-[0.032em] uppercase transition-all cursor-pointer whitespace-nowrap shrink-0 hover:-translate-y-0.5 hover:shadow-[0_3px_0_#000000] active:translate-y-0 active:shadow-none ${
                selectedCategory === cat.value
                  ? 'bg-[#000000] text-[#ffffff] shadow-[0_3px_0_#4da2ff]'
                  : 'bg-[#ffffff] text-[#000000] hover:bg-[#dceeff]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Schemes Grid with lively hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              style={{ backgroundColor: scheme.colorSurface }}
              className="rounded-[24px] border border-[#000000] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_0_#000000] group"
            >
              <div>
                {/* Header Row: Code & Badge Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-aeonik font-bold uppercase tracking-[0.04em] text-[#000000]/70 group-hover:text-[#000000] transition-colors">
                    GROUP {scheme.code}
                  </span>
                  {scheme.badgeLabel && (
                    <span className="rounded-[1600px] border border-[#000000] bg-[#ffffff] text-[#000000] text-[10px] font-bold font-aeonik tracking-[0.03em] uppercase px-2.5 py-0.5 whitespace-nowrap group-hover:scale-105 transition-transform">
                      {scheme.badgeLabel}
                    </span>
                  )}
                </div>

                {/* Scheme Title */}
                <h3 className="font-aeonik font-bold text-lg md:text-xl text-[#000000] mb-3 leading-snug">
                  {scheme.title}
                </h3>

                {/* Chit Value Card */}
                <div className="bg-[#ffffff] rounded-[18px] border border-[#000000] p-4 mb-4 group-hover:border-[#000000] group-hover:shadow-[0_3px_0_#000000] transition-all">
                  <span className="font-aeonik text-[10px] md:text-[11px] font-bold uppercase tracking-[0.032em] text-[#000000]/70 block mb-0.5">
                    TOTAL CHIT VALUE
                  </span>
                  <div className="font-lateral text-3xl sm:text-4xl text-[#000000] tracking-tight">
                    {formatINR(scheme.chitValue)}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs font-aeonik font-semibold text-[#000000]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{scheme.durationMonths} Months Tenure</span>
                    <span>·</span>
                    <Users className="w-3.5 h-3.5" />
                    <span>{scheme.totalSubscribers} Subscribers</span>
                  </div>
                </div>

                {/* Metrics Breakdown */}
                <div className="space-y-2 font-aeonik text-[12px] md:text-[13px] mb-4">
                  <div className="flex justify-between py-1.5 border-b border-[#000000]/20">
                    <span className="text-[#000000] font-medium">Monthly Gross:</span>
                    <span className="font-bold tabular-nums text-[#000000]">
                      {formatINR(scheme.monthlyGrossInstallment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#000000]/20">
                    <span className="text-[#000000] font-medium">Avg Net (After Dividend):</span>
                    <span className="font-bold tabular-nums text-[#000000] bg-[#ffffff] px-2 py-0.5 rounded-[6px] border border-[#000000] group-hover:bg-[#55db9c] transition-colors">
                      {formatINR(scheme.avgNetInstallment)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#000000]/20">
                    <span className="text-[#000000] font-medium">Estimated Dividend Gain:</span>
                    <span className="font-bold tabular-nums text-[#000000]">
                      +{formatINR(scheme.estimatedDividend)}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#000000] font-medium">Batch Launch:</span>
                    <span className="font-bold text-[#000000]">{scheme.startDate}</span>
                  </div>
                </div>

                {/* Suitable For */}
                <div className="bg-[#ffffff]/85 rounded-[12px] border border-[#000000] p-2.5 mb-5">
                  <span className="text-[10px] font-aeonik font-bold uppercase tracking-[0.032em] text-[#000000] block mb-0.5">
                    BEST SUITED FOR:
                  </span>
                  <p className="text-[11px] md:text-[12px] font-aeonik font-medium text-[#000000] leading-snug">
                    {scheme.suitableFor}
                  </p>
                </div>
              </div>

              {/* Action Buttons with hover translation */}
              <div className="pt-2">
                <div className="flex items-center justify-between text-[11px] font-aeonik font-bold text-[#000000] mb-2 px-0.5">
                  <span>VACANCY STATUS</span>
                  <span className="bg-[#ffd731] px-2 py-0.5 rounded-full border border-[#000000] group-hover:animate-pulse">
                    Only {scheme.availableSlots} slots left
                  </span>
                </div>
                <button
                  onClick={() => onSelectScheme(scheme)}
                  className="w-full rounded-[1600px] border border-[#000000] bg-[#000000] hover:bg-[#222222] text-[#ffffff] font-aeonik font-bold text-xs md:text-sm tracking-[0.032em] uppercase py-2.5 px-4 transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-[0_4px_0_#4da2ff] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none"
                >
                  JOIN THIS BATCH
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
