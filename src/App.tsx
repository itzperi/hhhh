/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChitCalculator } from './components/ChitCalculator';
import { ChitSchemesCatalog } from './components/ChitSchemesCatalog';
import { HowItWorksSection } from './components/HowItWorksSection';
import { UpcomingAuctions } from './components/UpcomingAuctions';
import { ComplianceAndTrustSection } from './components/ComplianceAndTrustSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { ChitScheme } from './types/chit';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [preSelectedSchemeId, setPreSelectedSchemeId] = useState<string | undefined>(undefined);
  const [preSelectedAmount, setPreSelectedAmount] = useState<number | undefined>(undefined);

  const handleOpenJoinModal = (schemeId?: string) => {
    setPreSelectedSchemeId(schemeId);
    setIsJoinModalOpen(true);
  };

  const handleSelectScheme = (scheme: ChitScheme) => {
    setPreSelectedSchemeId(scheme.id);
    setIsJoinModalOpen(true);
  };

  const handleSelectCalculatorPlan = (chitValue: number, duration: number) => {
    setPreSelectedAmount(chitValue);
    setIsJoinModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#000000]">
      {/* 1. Marquee Strip */}
      <MarqueeBanner />

      {/* 2. Top Nav Bar */}
      <Navbar
        onOpenJoinModal={() => handleOpenJoinModal()}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        {/* 3. Hero Section with User Video & Slush Sticker Atmosphere */}
        <HeroSection
          onExploreSchemes={() => handleNavigateSection('schemes')}
          onOpenCalculator={() => handleNavigateSection('calculator')}
          onOpenJoinModal={() => handleOpenJoinModal()}
        />

        {/* 4. Interactive Chit Calculator & Dividend Simulator */}
        <ChitCalculator
          onSelectSchemeToJoin={handleSelectCalculatorPlan}
        />

        {/* 5. Featured Chit Schemes Catalog */}
        <ChitSchemesCatalog
          onSelectScheme={handleSelectScheme}
        />

        {/* 6. How It Works (Concrete Gray Section with QR Download Card & Asymmetric Display) */}
        <HowItWorksSection
          onOpenJoinModal={() => handleOpenJoinModal()}
        />

        {/* 7. Live Auction Bulletin & Reverse Bidding Protocols */}
        <UpcomingAuctions
          onJoinAuctionNotice={(code) => handleOpenJoinModal(code)}
        />

        {/* 8. Trust, ROC Compliance & FAQ */}
        <ComplianceAndTrustSection />
      </main>

      {/* 9. Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenJoinModal={() => handleOpenJoinModal()}
      />

      {/* 10. Interactive Enrollment Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        preSelectedSchemeId={preSelectedSchemeId}
        preSelectedAmount={preSelectedAmount}
      />
    </div>
  );
}
