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
import { RegistrationCTA, Partners } from './components/sections/Partners';
import { Testimonials, Footer } from './components/sections/Footer';
import { Blogs } from './components/sections/Blogs';

import { CustomCursor } from './components/layout/CustomCursor';
import { MenuOverlay } from './components/layout/MenuOverlay';
import { useState } from 'react';

import { LatestUpdates } from './components/sections/LatestUpdates';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SmoothScroll>
      <CustomCursor />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="relative min-h-screen">
        <Hero onOpenMenu={() => setIsMenuOpen(true)} />
        <About />
        
        <Advantage />
        <Highlights />
        <LatestUpdates />
        <BrandConnect />
        <ExhibitorProfile />
        <RegistrationCTA />
        <Partners />
        <Testimonials />
        <Blogs />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
