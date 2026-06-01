'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://www.wofxworldexpo.com/assests/gallery-2024/gallery-2025/1%20(27).JPG",
  "https://www.wofxworldexpo.com/assests/gallery-2024/gallery-2025/1%20(19).JPG",
  "https://www.wofxworldexpo.com/assests/gallery-2024/gallery-2025/1%20(46).JPG",
  "https://www.wofxworldexpo.com/assests/gallery-2024/gallery-2025/1%20(73).JPG",
  "https://www.wofxworldexpo.com/assests/gallery-2024/gallery-2025/1%20(27).JPG",
  "https://www.wofxworldexpo.com/assests/gallery-2024/gallery-2025/1%20(19).JPG",
];

const titles = [
  "Focused B2B Trade Fair",
  "Business & Networking",
  "Global Platform",
  "Gateway to India Market",
  "Focused B2B Trade Fair",
  "Business & Networking",
];

const subtitles = [
  "A focused B2B trade show dedicated to the furniture and design industry.",
  "Directly connect with leading industry buyers and network via business forums, seminars and awards.",
  "Leading International and Indian brands showcasing latest collections to volume buyers.",
  "Explore business opportunities in the high growth India market.",
  "A focused B2B trade show dedicated to the furniture and design industry.",
  "Directly connect with leading industry buyers and network via business forums, seminars and awards.",
];

const AdvancedScrollCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgWrappers = gsap.utils.toArray<HTMLElement>('.img-wrapper');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=800%",
          scrub: 2.5,
          pin: true,
          onUpdate: (self) => {
            setActiveIndex(Math.floor(self.progress * (images.length - 3)) + 1);
          }
        }
      });

      // THREE-IMAGE WINDOW LOGIC (25% | 50% | 25%)
      gsap.set(imgWrappers, { width: "0%", opacity: 0 });
      gsap.set(imgWrappers[0], { width: "25%", opacity: 1 });
      gsap.set(imgWrappers[1], { width: "50%", opacity: 1 });
      gsap.set(imgWrappers[2], { width: "25%", opacity: 1 });

      for (let i = 0; i < images.length - 3; i++) {
        tl.to(imgWrappers[i], { width: "0%", opacity: 0, duration: 3, ease: "power2.inOut" })
          .to(imgWrappers[i + 1], { width: "25%", duration: 3, ease: "power2.inOut" }, "<")
          .to(imgWrappers[i + 2], { width: "50%", duration: 3, ease: "power2.inOut" }, "<")
          .to(imgWrappers[i + 3], { width: "25%", opacity: 1, duration: 3, ease: "power2.inOut" }, "<");
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white text-zinc-900 border-t border-[#AAD24E]/30 relative overflow-hidden">
      <div className="w-[95%] mx-auto border-x border-[#AAD24E] relative">
        {/* Intersection Markers */}


        {/* Carousel Animation Stage */}
        <div ref={triggerRef} className="relative h-screen w-full flex flex-col items-center justify-center gap-6">
          {/* Big Centered Heading (Inside Pinned Container) */}
          <div className="pt-0 px-6 md:px-20 text-center relative">
            <div className="text-2xl mb-3"><span className="font-bold text-[#AAD24E]">WOFX</span> Advantage</div>
            <h1 className="text-4xl md:text-[4rem] font-black tracking-tighter leading-[1.3] max-w-6xl mx-auto">
              Unlock a World of Opportunities<br />
              in Furniture & Design
            </h1>
          </div>

          <div className="relative w-full h-[55vh] flex gap-4 md:gap-6 overflow-hidden items-center">
            {images.map((src, i) => (
              <div key={i} className="img-wrapper relative h-full shrink-0 overflow-hidden rounded-none border-0 last:border-0 will-change-[width,opacity]">
                <img src={src} className="w-full h-full object-cover brightness-90 grayscale-[20%] hover:grayscale-0 hover:brightness-100 transition-all duration-1000" alt="" />

                <div className="absolute inset-0  flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    {/* <span className="px-3 py-1 border border-[#AAD24E]/30 rounded-none text-[10px] font-mono uppercase tracking-widest bg-white/80 backdrop-blur-md text-[#AAD24E]">
                      {labels[i]}
                    </span>
                    <span className="text-zinc-400 font-mono text-[10px]">0{i + 1}</span> */}
                  </div>
                  <div className="relative p-10 pt-10 overflow-hidden">
                    <div
                      className="absolute inset-0 backdrop-blur-xl bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"
                      style={{
                        maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
                      }}
                    />
                    <h3 className="relative text-xl md:text-3xl lg:text-5xl font-semibold tracking-tighter leading-none whitespace-normal text-white drop-shadow-2xl z-10 mb-2">
                      {titles[i]}
                    </h3>
                    <p className="relative text-sm md:text-base text-white/80 font-medium whitespace-normal z-10">
                      {subtitles[i]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Markers */}

        </div>
      </div>
    </section>
  );
};

export default AdvancedScrollCarousel;
