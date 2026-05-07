import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Exhibiting Brands', value: '80+' },
  { label: 'B2B Buyers', value: '10,140' },
  { label: 'Countries', value: '16' },
  { label: 'States', value: '26' },
];

export function Highlights() {
  return (
    <section className="bg-black relative ">
      {/* Top Black Section with 2025 */}
      <div className="w-[90%] mx-auto border-x-2 border-[#AAD24E] relative z-20 ">
        <div className="relative h-[165px] md:h-[255px] flex items-center justify-center">
          <div className="flex mt-20 pt-12">
            <div className="h-[165px] md:h-[255px] overflow-hidden">
              <h2 className="text-[12rem] md:text-[24rem] font-black text-white leading-none tracking-tighter select-none ">
                20
              </h2>
            </div>
            <div>
              <h2 className="text-[12rem] md:text-[24rem] font-black text-white leading-none tracking-tighter select-none">
                25
              </h2>
            </div>
          </div>
        </div>

      </div>



      {/* Bottom Lime Section with Stats */}
      <div className="bg-[#AAD24E] relative">
        <div className="w-full relative pt-12 pb-24 px-4 md:px-10">
          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-52">
            <span className="text-[20rem] md:text-[15rem] font-black text-[#A3BF3B] select-none">Highlights</span>
          </div>

          <div className="w-full relative z-10 mt-14">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-10 md:gap-16">
              {/* Label */}
              <div className="flex-shrink-0 pt-2">
                <h3 className="text-white text-4xl md:text-6xl font-black tracking-tight whitespace-nowrap">Highlights</h3>
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
                    <span className="text-5xl md:text-6xl lg:text-5xl xl:text-8xl font-black text-white leading-none mb-4">{stat.value}</span>
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
