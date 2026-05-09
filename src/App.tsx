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
import { Footer } from './components/sections/Footer';

import { CustomCursor } from './components/layout/CustomCursor';
import { MenuOverlay } from './components/layout/MenuOverlay';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import { LatestUpdates } from './components/sections/LatestUpdates';
import AdvancedScrollCarousel from './components/sections/AdvancedScrollCarousel';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SmoothScroll>
      <CustomCursor />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="relative min-h-screen">
        {/* Hero & About stacking reveal */}
        <HeroAboutReveal onOpenMenu={() => setIsMenuOpen(true)} />

        <Advantage />
        <Highlights />
        <LatestUpdates />
        <AdvancedScrollCarousel />

        <FeaturedBrands />
        <ExhibitorProfile />
        <RegistrationCTA />

        {/* Stacking Sections: IndustryPartners freezes, Testimonials slides over */}
        <StackingReveal />

        <div className="relative z-30 bg-white">
          <Blogs />
        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}

function HeroAboutReveal({ onOpenMenu }: { onOpenMenu: () => void }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax Y for the Hero (moves up slightly as you scroll)
  const heroYTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const heroOpacityTransform = useTransform(scrollYProgress, [0.3, 0.8], [1, 0]);
  
  // Smoothing the values
  const heroY = useSpring(heroYTransform, { stiffness: 100, damping: 30, mass: 1 });
  const heroOpacity = useSpring(heroOpacityTransform, { stiffness: 100, damping: 30, mass: 1 });

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Background: Sticky Hero */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-zinc-900">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="h-full w-full">
          <Hero onOpenMenu={onOpenMenu} />
        </motion.div>
      </div>

      {/* Foreground: About sliding over */}
      <div className="relative z-10 -mt-[100vh] flex flex-col">
        {/* Transparent Spacer */}
        <div className="h-screen w-full pointer-events-none" />
        
        {/* About Section */}
        <div className="bg-brand-off-white shadow-[0_-50px_100px_rgba(0,0,0,0.2),0_-20px_40px_rgba(0,0,0,0.1)] relative">
          <About />
        </div>
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
