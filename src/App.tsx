/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScroll } from './components/layout/SmoothScroll';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Advantage } from './components/sections/Advantage';
import { Highlights } from './components/sections/Highlights';
import { ExhibitorProfile } from './components/sections/Features';
import { BrandConnect } from './components/sections/BrandConnect';
import { RegistrationCTA } from './components/sections/Partners';
import { IndustryPartners } from './components/sections/IndustryPartners';
import { Testimonials } from './components/sections/Testimonials';
import { Blogs } from './components/sections/Blogs';
import { FeaturedBrands } from './components/sections/FeaturedBrands';
import { SupportingOrganization } from './components/sections/SupportingOrganization';
import { Footer } from './components/sections/Footer';

import { CustomCursor } from './components/layout/CustomCursor';
import { MenuOverlay } from './components/layout/MenuOverlay';
import { GlobalNavbar } from './components/layout/GlobalNavbar';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import { LatestUpdates } from './components/sections/LatestUpdates';
import AdvancedScrollCarousel from './components/sections/AdvancedScrollCarousel';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SmoothScroll>
      <CustomCursor />
      <GlobalNavbar 
        isOpen={isMenuOpen} 
        onOpenMenu={() => setIsMenuOpen(true)} 
        onCloseMenu={() => setIsMenuOpen(false)} 
      />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <main className="relative">
        <div className="relative z-20 bg-white shadow-2xl">
          {/* Hero & About stacking reveal */}
          <HeroAboutReveal onOpenMenu={() => setIsMenuOpen(true)} />

          <Advantage />
          <Highlights />
          <LatestUpdates />
          <AdvancedScrollCarousel />

          <FeaturedBrands />
          <ExhibitorProfile />
          <RegistrationCTA />
          <SupportingOrganization />

          {/* Stacking Sections: IndustryPartners freezes, Testimonials slides over */}
          <StackingReveal />

          <div className="relative z-30 bg-white">
            <Blogs />
          </div>
        </div>

        {/* Sticky Reveal Footer like jaeco.fr */}
        <div className="sticky bottom-0 z-10">
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  );
}

function HeroAboutReveal({ onOpenMenu }: { onOpenMenu: () => void }) {
  return (
    <div className="relative w-full">
      {/* Pinned Layer: Sticky Hero */}
      <div className="sticky top-0 left-0 z-0 h-screen w-full bg-zinc-900">
        <Hero onOpenMenu={onOpenMenu} />
      </div>

      {/* Sliding Layer: About Section */}
      {/* We ensure this section has its own background to cover the Hero */}
      <div className="relative z-10 bg-brand-off-white shadow-[0_-100px_100px_rgba(0,0,0,0.2)]">
        <About />
      </div>
    </div>
  );
}

function StackingReveal() {
  const containerRef = useRef(null);

  // Track scroll relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background parallax and scale
  const bgScale = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.9]);
  const bgOpacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Background Section (Sticky) */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOpacity }}
        className="sticky top-0 z-0 h-screen overflow-hidden"
      >
        <IndustryPartners />
      </motion.div>

      {/* Foreground Section (Natural Flow - Slides over sticky background) */}
      <div className="relative z-10 bg-white shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
        <Testimonials />
      </div>
    </div>
  );
}
