/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Instagram,
  Facebook,
  MessageCircle,
  Linkedin,
  CornerRightUp,
  Plus
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" />
  </svg>
);

export function Footer() {
  const footerRef = useRef(null);
  
  // Track scroll for the whole footer reveal
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // REVERSED PARALLAX SEQUENCE:
  
  // 1. Top Section (Organised By & Address) - Moves UP SLOWER
  const topRowY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const smoothTopRowY = useSpring(topRowY, { stiffness: 100, damping: 30, mass: 0.5 });

  // 2. Bottom Section (Links, About, etc.) - Moves UP to meet the top
  const bottomContentY = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const smoothBottomContentY = useSpring(bottomContentY, { stiffness: 80, damping: 25, mass: 0.6 });

  // 3. Address Title Animation
  const titleY = useTransform(scrollYProgress, [0, 0.6], ["80%", "0%"]);
  const smoothTitleY = useSpring(titleY, { stiffness: 60, damping: 20, mass: 0.4 });

  return (
    <footer ref={footerRef} className="bg-[#111111] selection:bg-[#ABD14F] selection:text-[#111111] relative overflow-hidden flex flex-col">
      
      {/* SECTION 1: TOP ROW (Organised By & Address) */}
      <motion.div 
        style={{ y: smoothTopRowY }}
        className="relative z-10 bg-[#111111]"
      >
        <div className="w-[95%] mx-auto border-x border-[#ABD14F] relative">
          {/* Intersection Markers */}


          <div className="grid grid-cols-1 md:grid-cols-[33%_1fr] border-b border-[#ABD14F]">
            {/* Logo & Organised By */}
            <div className="p-10 border-r border-[#ABD14F] min-h-[260px] flex flex-col justify-center bg-black/10">
              <span className="text-[16px] font-black uppercase tracking-[0.1em] text-white block mb-8">
                Organised By
              </span>
              <div className="max-w-[280px]">
                <img
                  src="https://bd.intexsouthasia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworldexlogo.f357cfde.png&w=256&q=75"
                  alt="Worldex Logo"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Address Header Area */}
            <div className="relative p-10 flex flex-col justify-between">
              <div className="max-w-[400px] relative z-10 pt-2">
                <p className="text-[15px] font-normal text-white/90 leading-relaxed">
                  309, Parvati Premises, Sun Mill Complex,<br />
                  Lower Parel (W), Mumbai – 400 013, India
                </p>
              </div>

              {/* Massive background text */}
              <motion.h1 
                style={{ y: smoothTitleY }}
                className="absolute bottom-0 left-0 text-[18vw] md:text-[14rem] font-[1000] tracking-tighter leading-none text-white uppercase select-none translate-y-[40%]"
              >
                Address
              </motion.h1>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SECTION 2: BOTTOM CONTENT (Contact, Links, About, Home) */}
      <motion.div 
        style={{ y: smoothBottomContentY }}
        className="relative z-20 bg-[#111111] shadow-[0_-30px_60px_rgba(0,0,0,0.8)]"
      >
        <div className="w-[95%] mx-auto border-x border-[#ABD14F] bg-[#111111]">
          {/* Contact Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#ABD14F]">
            <div className="p-8 px-10 border-r border-[#ABD14F] group cursor-pointer hover:bg-[#ABD14F]/5 transition-colors flex items-center justify-center">
              <span className="text-2xl md:text-[40px] font-semibold text-[#ABD14F] tracking-tighter block text-center">
                (+91) 022-4037-6700
              </span>
            </div>
            <div className="p-8 px-10 group cursor-pointer hover:bg-[#ABD14F]/5 transition-colors overflow-hidden flex items-center justify-center">
              <span className="text-2xl md:text-[40px] font-semibold text-[#ABD14F] tracking-tighter lowercase leading-none block truncate text-center">
                contactus@worldexindia.com
              </span>
            </div>
          </div>

          {/* Links & About */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14 border-r border-[#ABD14F] bg-black/10 flex flex-col md:flex-row justify-between gap-10">
              <div>
                <h2 className="text-[#ABD14F] text-[44px] md:text-[56px] font-semibold uppercase tracking-tighter mb-10 leading-none">
                  Quick Links
                </h2>
                <ul className="space-y-4">
                  {[
                    'Exhibitor Enquiry Form',
                    'Buyer Registration Form',
                    'Exhibitor Profile',
                    'Buyer Profile',
                    'Terms and Conditions'
                  ].map((link) => (
                    <li key={link}>
                      <button className="text-sm font-normal text-white hover:text-[#ABD14F] transition-all duration-300 text-left flex items-center gap-3 group/link">
                        <span className="w-0 group-hover/link:w-3 h-[2px] bg-[#ABD14F] transition-all duration-300"></span>
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-row md:flex-col items-center gap-5 pt-0 md:pt-4">
                <SocialIcon icon={<Instagram size={20} />} />
                <SocialIcon icon={<XIcon size={16} />} active />
                <SocialIcon icon={<Facebook size={20} />} />
                <SocialIcon icon={<MessageCircle size={20} />} />
                <SocialIcon icon={<Linkedin size={20} />} />
              </div>
            </div>

            <div className="flex flex-col relative min-h-[500px]">
              <div className="p-10 md:p-14 mb-40">
                <h2 className="text-[#ABD14F] text-[44px] md:text-[56px] font-semibold uppercase tracking-tighter mb-8 leading-none">
                  About WOFX
                </h2>
                <p className="text-[15px] font-normal text-white leading-relaxed max-w-[480px] mb-10">
                  WOFX is a professional B2B trade show dedicated exclusively to the
                  furniture + design industry in India. It is a show where all categories of
                  furniture and décor come together on one industry platform.
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[160px] bg-[#ABD14F] flex items-center justify-between px-14 group cursor-pointer hover:bg-[#b5e631] transition-all">
                <span className="text-white text-[68px] font-[1000] tracking-tighter leading-none uppercase">Home</span>
                <div className="p-6 text-white group-hover:scale-110 transition-transform duration-500">
                  <CornerRightUp className="w-18 h-18 stroke-[2px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="w-full bg-white py-12 text-center border-t border-[#ABD14F]/10 relative z-30">
          <p className="text-[#111111] text-md font-normal">© WOFX 2026 | All Rights Reserved</p>
        </div>
      </motion.div>

    </footer>
  );
}

function SocialIcon({ icon, active = false }: { icon: ReactNode, active?: boolean }) {
  return (
    <button
      className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 relative group/icon
        ${active
          ? 'bg-[#ABD14F] border-[#ABD14F] text-[#111] scale-110 shadow-[0_0_20px_rgba(171,209,79,0.2)]'
          : 'border-[#ABD14F]/20 text-white/50 hover:border-[#ABD14F] hover:text-[#ABD14F] hover:bg-[#ABD14F]/5'
        }
      `}
    >
      <div className={`absolute inset-0 rounded-full border border-[#ABD14F] scale-0 opacity-0 group-hover/icon:scale-125 group-hover/icon:opacity-0 transition-all duration-700`}></div>
      {icon}
    </button>
  );
}
