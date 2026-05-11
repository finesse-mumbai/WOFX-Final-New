import React from 'react';
import { motion } from 'framer-motion';

interface GlobalNavbarProps {
  isOpen: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
}

const HamburgerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H20M4 12H20M4 16H20" stroke="#ABD14F" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L18 6M6 6L18 18" stroke="#ABD14F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function GlobalNavbar({ isOpen, onOpenMenu, onCloseMenu }: GlobalNavbarProps) {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] w-[65%] max-w-2xl pointer-events-none">
      <motion.div 
        layout
        className="bg-[#1a1a1a] p-5 px-10 flex items-center justify-between shadow-2xl pointer-events-auto"
      >
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <img 
            src="https://www.wofxworldexpo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwofx_logo_2026.e921b720.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4" 
            alt="WOFX Logo" 
            className="h-10 w-auto object-contain brightness-110"
          />
        </div>

        {/* Center Section: HOME */}
        <div className="flex-1 flex justify-center">
          <span className="font-semibold tracking-[0.3em] text-sm text-white uppercase">HOME</span>
        </div>

        {/* Menu Toggle Section */}
        <div className="flex-1 flex justify-end">
          <button 
            onClick={isOpen ? onCloseMenu : onOpenMenu}
            className="hover:scale-110 transition-transform cursor-pointer p-1"
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
