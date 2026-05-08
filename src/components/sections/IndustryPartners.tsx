import React from 'react';
import { motion } from 'motion/react';

const partners = [
  { 
    name: 'House of Brands', 
    logo: 'https://www.wofxworldexpo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.55ce7b45.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' 
  },
  { 
    name: 'Alliance Partner', 
    logo: 'https://www.wofxworldexpo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAFMT.823a63bf.png&w=384&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' 
  },
  { 
    name: 'Industry Association', 
    logo: 'https://www.wofxworldexpo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.dda0353a.webp&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' 
  },
  { 
    name: 'Skilling Partner', 
    logo: 'https://www.wofxworldexpo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFFSC.178e6a54.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' 
  },
];

export function IndustryPartners() {

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      className="relative overflow-hidden h-screen w-full bg-[#FBFBFB] border-y border-zinc-100 flex items-center justify-center"
    >
      {/* Background Watermark for Premium Feel */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0 px-4">
        <h2 className="text-[18vw] font-black tracking-tighter leading-[0.8] text-[#EFEFEF] whitespace-nowrap w-full flex flex-col">
          <span className="block text-left">INDUSTRY</span>
          <span className="block text-right">BODIES</span>
        </h2>
      </div>
      <div className="absolute bottom-[30%] left-12 z-20 max-w-2xl">
        <h2 className="text-[45px] font-normal text-black leading-[1.1] tracking-tighter">
          Industry Bodies <br />
          Endorsing <span className="text-[#AAD24E] font-black">WOFX</span>
        </h2>
      </div>

      <div className="relative z-10 h-screen w-[100vh] mx-auto overflow-hidden translate-x-[25%]">
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.3 },
            visible: { 
              opacity: [0, 1, 1], 
              scale: [0.3, 1.15, 1] 
            }
          }}
          transition={{ delay: 0.3, duration: 1.5, times: [0, 0.7, 1], ease: "easeInOut" }}
          className="grid grid-cols-3 h-full w-full gap-0 origin-center"
        >
          {/* Row 1 */}
          <EmptyCard /> {/* R1, C1 */}
          <PartnerCard partner={partners[0]} index={0} /> {/* R1, C2: House of Brands */}
          <EmptyCard /> {/* R1, C3 */}

          {/* Row 2 */}
          <PartnerCard partner={partners[1]} index={1} /> {/* R2, C1: Alliance Partner */}
          <div className="bg-transparent backdrop-blur-sm w-full h-full" /> {/* R2, C2: Glass center */}
          <PartnerCard partner={partners[2]} index={2} /> {/* R2, C3: Industry Association */}

          {/* Row 3 */}
          <EmptyCard /> {/* R3, C1 */}
          <PartnerCard partner={partners[3]} index={3} /> {/* R3, C2: Skilling Partner */}
          <EmptyCard /> {/* R3, C3 */}
        </motion.div>
      </div>
    </motion.section>
  );
}

function EmptyCard() {
  return <div className="bg-transparent w-full h-full" />;
}

function PartnerCard({ partner, index }: { partner: any; index: number }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-8 bg-white border border-[#AAD24E] transition-all duration-500 group hover:bg-zinc-50 w-full h-full"
    >
      <span className="text-sm font-black capitalize tracking-widest text-black mb-6 transition-colors duration-300">
        {partner.name}
      </span>
      <div className="h-24 flex items-center justify-center transition-all duration-700 transform group-hover:scale-110">
        <img src={partner.logo} alt={partner.name} className="max-h-full object-contain" />
      </div>
    </div>
  );
}
