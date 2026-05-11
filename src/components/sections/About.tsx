import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export function About() {
  const sectionRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.8], ["120%", "0%"]);
  const smoothTitleY = useSpring(titleY, { stiffness: 60, damping: 20, mass: 0.4 });

  return (
    <section ref={sectionRef} className="bg-white text-zinc-900 border-t border-[#AAD24E]/30 relative overflow-hidden">
      <div className="w-[95%] mx-auto border-x border-[#AAD24E] relative">
        {/* Intersection Markers */}
        <span className="absolute -top-3 -left-[11px] text-[#AAD24E] text-xl font-bold select-none">+</span>
        <span className="absolute -top-3 -right-[11px] text-[#AAD24E] text-xl font-bold select-none">+</span>
        
        {/* Top Section: Large Heading (Blogs-style animation with Brand Gradient) */}
        {/* Reduced top/bottom padding by 50% and added clipping height to hide bottom 20% of font */}
        <div className="border-b border-[#AAD24E]/30 overflow-hidden text-center pt-12 pb-2 h-[14vw] relative">
          <motion.h2
            style={{ 
              y: smoothTitleY,
              backgroundImage: 'linear-gradient(to right, var(--color-brand-purple), var(--color-brand-magenta), var(--color-brand-purple))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            className="text-[18vw] font-black leading-[0.8] tracking-tighter select-none whitespace-nowrap translate-y-[5%]"
          >
            About
          </motion.h2>
          {/* Internal Markers */}
          <span className="absolute bottom-0 -left-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none pointer-events-none">+</span>
          <span className="absolute bottom-0 -right-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none pointer-events-none">+</span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row relative">
          {/* Left Label */}
          <div className="w-full md:w-[30%] flex-shrink-0 py-8 px-6 md:px-12 border-r border-[#AAD24E]/30 flex items-start relative">
            <h3 className="text-2xl md:text-4xl font-medium text-zinc-600">
              About <span className="text-[#AAD24E] font-black">WOFX</span>
            </h3>
            {/* Bottom Left Corner Marker */}
            <span className="absolute bottom-0 -left-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none">+</span>
          </div>

          {/* Spacer Column */}
          <div className="hidden md:block w-14 flex-shrink-0 border-r border-[#AAD24E]/30 h-auto relative">
             <span className="absolute bottom-0 -right-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none">+</span>
          </div>

          {/* Right Content */}
          <div className="flex-1 py-8 px-6 md:px-20 space-y-12 relative">
            <p className="text-xl md:text-xl leading-relaxed text-zinc-700 max-w-3xl font-medium">
              WOFX is well-positioned and accepted as an <span className="font-bold text-zinc-900 underline decoration-[#AAD24E]/30 underline-offset-4">industry trade platform</span> wherein the entire furniture industry converges to interact, collaborate, demonstrate innovations and do business. After successive successful shows, <span className="font-bold text-brand-magenta">WOFX has become the most sought-after trade event</span> providing a spring board to brands and manufacturers to expand their market presence in the high-growth Indian furniture market.
            </p>
            
            <button className="flex items-center space-x-8 bg-brand-magenta text-white px-10 py-3 rounded-none font-bold hover:bg-brand-purple transition-all group w-fit text-xl shadow-2xl shadow-brand-magenta/30">
              <span>Read More</span>
              <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform" />
            </button>
            {/* Bottom Right Corner Marker */}
            <span className="absolute bottom-0 -right-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none">+</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { label: 'Exhibiting Brands', value: '400+' },
  { label: 'B2B Buyers', value: '15,000+' },
  { label: 'Countries', value: '12+' },
  { label: 'Brands', value: '1,000+' },
];

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-brand-lime">
      <div className="w-[95%] mx-auto border-x border-[#AAD24E] py-16 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col">
               <span className="text-white/80 font-bold tracking-widest text-sm uppercase">Highlights</span>
               <h2 className="text-9xl font-black text-white/40 leading-none">2026</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-4xl md:text-6xl font-black text-white leading-none mb-2">{stat.value}</span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/60">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
