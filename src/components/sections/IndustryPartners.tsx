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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative h-screen bg-[#FBFBFB] overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0 px-4">
        <h2 className="text-[18vw] font-black tracking-tighter leading-[0.8] text-[#EFEFEF] whitespace-nowrap w-full flex flex-col">
          <span className="block text-left">INDUSTRY</span>
          <span className="block text-right">BODIES</span>
        </h2>
      </div>

      {/* Heading Text */}
      <div className="absolute bottom-[30%] left-6 md:left-12 z-20 max-w-2xl">
        <h2 className="text-[32px] md:text-[45px] font-normal text-black leading-[1.1] tracking-tighter">
          Industry Bodies <br />
          Endorsing <span className="text-[#AAD24E] font-black">WOFX</span>
        </h2>
      </div>

      {/* Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 w-full h-screen md:translate-x-[20%]"
      >
        <div className="grid grid-cols-3 grid-rows-3 aspect-square h-full w-auto gap-0 mx-auto">
          
          {/* Row 1 */}
          <div /> {/* 1,1 */}
          <div className="overflow-hidden w-full h-full">
            <PartnerCard 
              partner={partners[0]} 
              direction="up"
            />
          </div>
          <div /> {/* 1,3 */}

          {/* Row 2 */}
          <div className="overflow-hidden w-full h-full">
            <PartnerCard 
              partner={partners[1]} 
              direction="left"
            />
          </div>
          <CenterElement />
          <div className="overflow-hidden w-full h-full">
            <PartnerCard 
              partner={partners[2]} 
              direction="right"
            />
          </div>

          {/* Row 3 */}
          <div /> {/* 3,1 */}
          <div className="overflow-hidden w-full h-full">
            <PartnerCard 
              partner={partners[3]} 
              direction="down"
            />
          </div>
          <div /> {/* 3,3 */}
          
        </div>
      </motion.div>
    </section>
  );
}

function CenterElement() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Pulsing Glow Background */}
      <motion.div
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-full h-full bg-[#AAD24E]/10 blur-xl"
      />
      
      {/* Main Glass Square */}
      <div className="relative w-full h-full bg-white/40 backdrop-blur-md z-10" />
    </div>
  );
}

function PartnerCard({ partner, direction }: { partner: any; direction: 'up' | 'down' | 'left' | 'right' }) {
  const getInitialPos = () => {
    switch(direction) {
      case 'up': return { y: '100%', x: 0 };
      case 'down': return { y: '-100%', x: 0 };
      case 'left': return { x: '100%', y: 0 };
      case 'right': return { x: '-100%', y: 0 };
      default: return { x: 0, y: 0 };
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.6, 
      filter: 'blur(10px)',
      rotate: direction === 'up' || direction === 'right' ? -5 : 5,
      ...getInitialPos()
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      y: 0, 
      filter: 'blur(0px)',
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] // Custom quintic ease for premium feel
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#ffffff",
        zIndex: 30,
        transition: { duration: 0.3 }
      }}
      className="relative flex flex-col items-center justify-center text-center bg-white border border-[#AAD24E] transition-colors duration-300 group w-full h-full z-20 p-6"
    >
      <span className="text-[11px] font-black capitalize tracking-widest text-black mb-4">
        {partner.name}
      </span>
      <div className="h-20 w-full flex items-center justify-center transition-all duration-700 transform group-hover:scale-110 px-4">
        <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
      </div>
    </motion.div>
  );
}
