import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { CHIT_SCHEMES } from '../data/chitSchemes';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedSchemeId?: string;
  preSelectedAmount?: number;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  preSelectedSchemeId,
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('Salem');
  const [selectedSchemeId, setSelectedSchemeId] = useState(preSelectedSchemeId || CHIT_SCHEMES[2].id);
  const [objective, setObjective] = useState<'savings' | 'loan'>('savings');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; mobile?: string }>({});

  useEffect(() => {
    if (preSelectedSchemeId) {
      setSelectedSchemeId(preSelectedSchemeId);
    }
  }, [preSelectedSchemeId]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { fullName?: string; mobile?: string } = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name';
    }
    const cleanMobile = mobile.replace(/\D/g, '');
    if (cleanMobile.length < 10) {
      errs.mobile = 'Enter a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setMobile('');
    onClose();
  };

  const activeScheme = CHIT_SCHEMES.find((s) => s.id === selectedSchemeId) || CHIT_SCHEMES[0];

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
      <div 
        className="w-full max-w-xl bg-[#ffffff] border border-[#000000] rounded-[28px] md:rounded-[36px] overflow-hidden shadow-none max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#dceeff] border-b border-[#000000] px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#fb4903] border border-[#000000]" />
            <span className="font-aeonik font-bold text-[12px] tracking-[0.032em] uppercase text-[#000000]">
              PANASUNA CHITS ENROLLMENT
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#000000] bg-[#ffffff] hover:bg-[#e9e9e9] flex items-center justify-center text-[#000000] cursor-pointer"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-[1600px] border border-[#000000] bg-[#55db9c] flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#000000] stroke-[3]" />
              </div>
              <span className="rounded-[1600px] border border-[#000000] bg-[#ffd731] px-3.5 py-1 text-[11px] font-bold font-aeonik uppercase tracking-[0.03em]">
                ENROLLMENT CONFIRMED
              </span>
              <h3 className="font-lateral text-4xl sm:text-5xl text-[#000000] mt-3 mb-2">
                APPLICATION RECEIVED!
              </h3>
              <p className="font-aeonik text-[15px] font-medium text-[#000000]/80 max-w-md mx-auto mb-6">
                Thank you, <strong className="text-[#000000]">{fullName}</strong>. A dedicated Chit Advisor from our Chinnakadai St, Salem branch will call you at <strong className="text-[#000000]">{mobile}</strong> within 2 banking hours with your subscriber passbook allocation.
              </p>

              {/* Receipt Ticket */}
              <div className="rounded-[20px] border border-[#000000] bg-[#dceeff] p-5 text-left mb-6 font-aeonik">
                <div className="flex justify-between items-center pb-2 border-b border-[#000000]/20 mb-3 text-[12px] font-bold uppercase">
                  <span>RECEIPT NO: PS-2026-8842</span>
                  <span className="bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#000000]">
                    PROVISIONAL SEAT
                  </span>
                </div>
                <div className="space-y-1.5 text-[13px]">
                  <div className="flex justify-between">
                    <span className="opacity-75">Selected Group:</span>
                    <strong className="text-[#000000]">{activeScheme.code} ({formatINR(activeScheme.chitValue)})</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-75">Tenure:</span>
                    <strong className="text-[#000000]">{activeScheme.durationMonths} Months</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-75">Monthly Approx Net:</span>
                    <strong className="text-[#000000]">{formatINR(activeScheme.avgNetInstallment)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-75">Branch Handling:</span>
                    <strong className="text-[#000000]">Chinnakadai St, Salem (HQ)</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full rounded-[1600px] border border-[#000000] bg-[#000000] hover:bg-[#333333] text-[#ffffff] font-aeonik font-bold text-[13px] tracking-[0.032em] uppercase py-3.5 px-6 transition-all cursor-pointer"
              >
                CLOSE CONFIRMATION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="font-lateral text-3xl sm:text-4xl text-[#000000] uppercase mb-1">
                  JOIN PANASUNA CHIT BATCH
                </h3>
                <p className="font-aeonik text-[13px] text-[#000000]/70">
                  Fill in your details below to lock your subscriber slot for the upcoming monthly series.
                </p>
              </div>

              {/* Scheme Picker */}
              <div>
                <label className="block font-aeonik font-bold text-[12px] uppercase tracking-[0.032em] text-[#000000] mb-2">
                  CHOOSE CHIT SCHEME
                </label>
                <select
                  value={selectedSchemeId}
                  onChange={(e) => setSelectedSchemeId(e.target.value)}
                  className="w-full bg-[#ffffff] border border-[#000000] rounded-[14px] px-4 py-3 font-aeonik font-bold text-[14px] text-[#000000] cursor-pointer focus:outline-none"
                >
                  {CHIT_SCHEMES.map((scheme) => (
                    <option key={scheme.id} value={scheme.id}>
                      {scheme.code} — {formatINR(scheme.chitValue)} ({scheme.durationMonths}M @ ~{formatINR(scheme.avgNetInstallment)}/mo)
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block font-aeonik font-bold text-[12px] uppercase tracking-[0.032em] text-[#000000] mb-1.5">
                  YOUR FULL NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. S. Ramanathan / K. Priya"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-[#ffffff] border ${
                    errors.fullName ? 'border-[#fb4903]' : 'border-[#000000]'
                  } rounded-[14px] px-4 py-3 font-aeonik text-[14px] text-[#000000] focus:outline-none`}
                />
                {errors.fullName && (
                  <p className="text-[12px] font-aeonik text-[#fb4903] mt-1 font-bold">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Phone & City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-aeonik font-bold text-[12px] uppercase tracking-[0.032em] text-[#000000] mb-1.5">
                    MOBILE NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    maxLength={10}
                    className={`w-full bg-[#ffffff] border ${
                      errors.mobile ? 'border-[#fb4903]' : 'border-[#000000]'
                    } rounded-[14px] px-4 py-3 font-aeonik text-[14px] text-[#000000] focus:outline-none`}
                  />
                  {errors.mobile && (
                    <p className="text-[12px] font-aeonik text-[#fb4903] mt-1 font-bold">
                      {errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-aeonik font-bold text-[12px] uppercase tracking-[0.032em] text-[#000000] mb-1.5">
                    TOWN / CITY
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#000000] rounded-[14px] px-4 py-3 font-aeonik font-bold text-[14px] text-[#000000] focus:outline-none cursor-pointer"
                  >
                    <option value="Salem">Salem (HQ)</option>
                    <option value="Erode">Erode</option>
                    <option value="Namakkal">Namakkal</option>
                    <option value="Dharmapuri">Dharmapuri</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Tirupur">Tirupur</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Other">Other Tamil Nadu / South</option>
                  </select>
                </div>
              </div>

              {/* Objective Switch */}
              <div>
                <label className="block font-aeonik font-bold text-[12px] uppercase tracking-[0.032em] text-[#000000] mb-2">
                  PRIMARY GOAL
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setObjective('savings')}
                    className={`rounded-[1600px] border border-[#000000] py-2.5 px-3 font-aeonik font-bold text-[12px] tracking-[0.032em] uppercase transition-colors cursor-pointer ${
                      objective === 'savings' ? 'bg-[#55db9c] text-[#000000]' : 'bg-[#ffffff] text-[#000000]'
                    }`}
                  >
                    DISCIPLINED SAVINGS
                  </button>
                  <button
                    type="button"
                    onClick={() => setObjective('loan')}
                    className={`rounded-[1600px] border border-[#000000] py-2.5 px-3 font-aeonik font-bold text-[12px] tracking-[0.032em] uppercase transition-colors cursor-pointer ${
                      objective === 'loan' ? 'bg-[#ffd731] text-[#000000]' : 'bg-[#ffffff] text-[#000000]'
                    }`}
                  >
                    BUSINESS / LOAN LIQUIDITY
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-[1600px] border border-[#000000] bg-[#000000] hover:bg-[#333333] active:scale-[0.98] text-[#ffffff] font-aeonik font-bold text-[14px] tracking-[0.032em] uppercase py-3.5 px-6 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  SUBMIT ENROLLMENT REQUEST
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] font-aeonik font-medium text-[#000000]/70 mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#000000]" />
                  <span>No upfront fees. Regulated under Chit Funds Act 1982.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
