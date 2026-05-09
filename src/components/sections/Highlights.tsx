import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';

function Digit({ value, delay }: { value: string; delay: number }) {
  const isNumber = !isNaN(parseInt(value));
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  if (!isNumber) {
    return <span className="inline-block">{value}</span>;
  }

  const numValue = parseInt(value);

  return (
    <span ref={containerRef} className="relative inline-block overflow-hidden h-[1.1em] leading-none translate-y-[0.05em]">
      <motion.span
        initial={{ y: "0%" }}
        animate={isInView ? { y: `-${numValue * 10}%` } : { y: "0%" }}
        transition={{
          duration: 2.5,
          ease: [0.6, 0.01, 0.05, 0.95],
          delay: delay,
        }}
        className="flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="h-[1.1em] flex items-center justify-center">
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

function RollingCounter({ value, suffix = "", format = false }: { value: number; suffix?: string; format?: boolean }) {
  const displayString = format ? value.toLocaleString() : value.toString();
  const chars = (displayString + suffix).split("");

  return (
    <span className="flex items-baseline justify-center lg:justify-start">
      {chars.map((char, i) => (
        <Digit key={i} value={char} delay={i * 0.08} />
      ))}
    </span>
  );
}

const stats = [
  { label: 'Exhibiting Brands', value: 80, suffix: '+' },
  { label: 'B2B Buyers', value: 10140, format: true },
  { label: 'Countries', value: 16 },
  { label: 'States', value: 26 },
];

export function Highlights() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  const titleY = useTransform(scrollYProgress, [0, 0.8], ["-120%", "0%"]);
  const smoothTitleY = useSpring(titleY, { stiffness: 60, damping: 20, mass: 0.4 });

  return (
    <section ref={sectionRef} className="bg-black relative ">
      {/* Top Black Section with 2025 */}
      <div className="w-[90%] mx-auto border-x-2 border-[#AAD24E] relative z-20 ">
        <div className="relative h-[165px] md:h-[255px] flex items-center justify-center">
          <div className="flex mt-20 pt-12">
            <div className="h-[165px] md:h-[255px] overflow-hidden">
              <motion.h2
                style={{ y: smoothTitleY }}
                className="text-[12rem] md:text-[24rem] font-black text-white leading-none tracking-tighter select-none "
              >
                20
              </motion.h2>
            </div>
            <div>
              <motion.h2
                style={{ y: smoothTitleY }}
                className="text-[12rem] md:text-[24rem] font-black text-white leading-none tracking-tighter select-none"
              >
                25
              </motion.h2>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Lime Section with Stats */}
      <div className="bg-[#AAD24E] relative">
        <div className="w-full relative pt-12 pb-24 px-4 md:px-10">
          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-36">
            <span className="text-[20rem] md:text-[15rem] font-black text-[#A3BF3B] select-none">Highlights</span>
          </div>

          <div className="w-full relative z-10 mt-14">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 md:gap-16">
              {/* Label */}
              <div className="flex-shrink-0 pt-2">
                <h3 className="text-white text-2xl md:text-4xl font-black tracking-tight whitespace-nowrap">Highlights</h3>
              </div>

              {/* Stats Grid */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 xl:gap-12 w-full">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col border-l-2 border-[#FCF640] pl-4 md:pl-6 xl:pl-10"
                  >
                    <span className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-black text-white leading-none mb-4">
                      <RollingCounter value={stat.value} suffix={stat.suffix} format={stat.format} />
                    </span>
                    <span className="text-sm md:text-base xl:text-lg font-bold text-black/80">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
