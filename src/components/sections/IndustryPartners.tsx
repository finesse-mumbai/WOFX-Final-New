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
  const titleWords = "Industry Bodies Endorsing WOFX".split(" ");

  return (
    <section className="relative overflow-hidden h-screen w-full bg-white border-y border-zinc-100 flex items-center justify-center">
      {/* Background Watermark for Premium Feel */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.03] px-4">
        <h2 className="text-[18vw] font-black tracking-tighter leading-[0.8] text-black whitespace-nowrap w-full flex flex-col">
          <span className="block text-left">INDUSTRY</span>
          <span className="block text-right">BODIES</span>
        </h2>
      </div>

      <div className="relative z-10 h-screen w-[100vh] mx-auto overflow-hidden">
        <div className="grid grid-cols-3 h-full w-full gap-0">
          {/* Row 1 */}
          <EmptyCard /> {/* R1, C1 */}
          <PartnerCard partner={partners[0]} index={0} /> {/* R1, C2: House of Brands */}
          <EmptyCard /> {/* R1, C3 */}

          {/* Row 2 */}
          <PartnerCard partner={partners[1]} index={1} /> {/* R2, C1: Alliance Partner */}
          <div className="bg-transparent backdrop-blur-sm border-2 border-[#AAD24E] w-full h-full" /> {/* R2, C2: Glass center */}
          <PartnerCard partner={partners[2]} index={2} /> {/* R2, C3: Industry Association */}

          {/* Row 3 */}
          <EmptyCard /> {/* R3, C1 */}
          <PartnerCard partner={partners[3]} index={3} /> {/* R3, C2: Skilling Partner */}
          <EmptyCard /> {/* R3, C3 */}
        </div>
      </div>
    </section>
  );
}

function EmptyCard() {
  return <div className="bg-white border-2 border-[#AAD24E] w-full h-full" />;
}

function PartnerCard({ partner, index }: { partner: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center p-8 bg-white border-2 border-[#AAD24E] transition-all duration-500 group hover:bg-zinc-50 w-full h-full"
    >
      <div className="h-24 flex items-center justify-center mb-6 transition-all duration-700 transform group-hover:scale-110">
        <img src={partner.logo} alt={partner.name} className="max-h-full object-contain" />
      </div>
      <span className="text-sm font-black uppercase tracking-widest text-[#AAD24E] group-hover:text-black transition-colors duration-300">
        {partner.name}
      </span>
    </motion.div>
  );
}
