import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoveRight } from 'lucide-react';

export function RegistrationCTA() {
  const cardData = [
    {
      id: "01",
      image: "https://www.wofxworldexpo.com/_next/static/media/blLogo1.d8c58a02.png",
      bgColor: "#F5B606",
      items: ["Dealers", "Distributors", "Wholesalers", "Importers", "Trading & Buying Houses", "Agents"],
    },
    {
      id: "02",
      image: "https://www.wofxworldexpo.com/_next/static/media/blLogo4.0bda44a0.png",
      bgColor: "#75008C",
      items: ["Retailers", "E-Tailers", "Large Format Retailers", "Online Traders"],
    },
    {
      id: "03",
      image: "https://www.wofxworldexpo.com/_next/static/media/blLogo3.4f9b22cd.png",
      bgColor: "#B7DB00",
      items: ["Franchisees", "Entrepreneurs", "Agents", "Consultants"],
    },
    {
      id: "04",
      image: "https://www.wofxworldexpo.com/_next/static/media/blLogo2.9e4ff466.png",
      bgColor: "#E6005B",
      items: ["Project Management Consultant", "Architects & Interior Designers", "Real Estate Developers", "HORECA", "Corporate Sourcing Heads", "Institutional"],
    },
    {
      id: "05",
      image: "https://www.wofxworldexpo.com/_next/static/media/blLogo5.fa3e7924.png",
      bgColor: "#80D9DF",
      items: ["Private Equity", "Family Offices", "Venture Capital", "Investment Consultants", "International Companies", "Corporates"],
    },
    {
      id: "06",
      image: "https://www.wofxworldexpo.com/_next/static/media/industryPartner.607b89a5.png",
      bgColor: "#FFBA8D",
      items: ["Solution Providers", "Supporting Trade Bodies", "Trade Media", "Others"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Lanes and unique logos
  const lanes = [
    { id: 1, top: '6%', direction: 1, speed: 25 },
    { id: 2, top: '21%', direction: -1, speed: 30 },
    { id: 3, top: '36%', direction: 1, speed: 28 },
    { id: 4, top: '51%', direction: -1, speed: 35 },
    { id: 5, top: '66%', direction: 1, speed: 32 },
  ];

  const trainingLogos = lanes.map((lane, i) => ({
    id: `lane-${i}`,
    top: lane.top,
    direction: lane.direction,
    duration: lane.speed,
    delay: i * -5,
    // Note: We skip blLogo1 in the train because it's the default central one, 
    // but the user wants them to correspond. I'll map lane 0 to cardData 1, etc.
    dataIndex: (i + 1) % cardData.length,
    img: cardData[(i + 1) % cardData.length].image
  }));



  return (
    <section
      onMouseEnter={() => window.dispatchEvent(new CustomEvent('setCursorType', { detail: 'logo-hover' }))}
      onMouseLeave={() => window.dispatchEvent(new CustomEvent('setCursorType', { detail: 'default' }))}
      className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#AAD24E' }}>

      {/* Floating Logo Bubbles Container */}
      <div className="absolute inset-0 overflow-hidden z-40 w-full pointer-events-none">
        {trainingLogos.map((logo) => (
          <motion.div
            key={logo.id}
            initial={{ x: logo.direction === 1 ? '-150%' : '150vw' }}
            animate={{
              x: logo.direction === 1 ? ['-20vw', '120vw'] : ['120vw', '-20vw'],
            }}
            transition={{
              duration: logo.duration,
              repeat: Infinity,
              ease: "linear",
              delay: logo.delay
            }}
            onMouseEnter={() => setActiveIndex(logo.dataIndex)}
            className="absolute w-64 h-64 md:w-64 md:h-64  flex items-center justify-center pointer-events-auto cursor-pointer"
            style={{ top: logo.top }}
          >
            {/* Black Circle Shadow with specific offset */}
            <div
              className="absolute w-36 h-36 inset-0 bg-black/10 blur-[3px] rounded-full top-30 left-30  -z-10 shadow-3xl"
            />
            <img src={logo.img} alt="Partner Logo" className="w-36 h-36 object-contain border-b-2 rounded-full border-[#AAD24E]" />
          </motion.div>
        ))}
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h2 className="text-[12vw] font-black tracking-tighter leading-[1.0] text-white text-center whitespace-nowrap">
          <span className="block">Buyer</span>
          <span className="block">Registration</span>
          <span className="block">Form</span>
        </h2>
      </div>

      {/* Card Container */}
      <div className="relative z-10 w-full   group">

        {/* The Card */}
        <div className="relative w-full min-h-[800px] overflow-hidden rounded-[3rem]">
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 200, scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              exit={{ opacity: 0, y: -100, scale: 1.1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/assets/WOFX%20Website%20With%20Correction%202.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </AnimatePresence>

          {/* Content */}
          <div className="relative h-full w-full flex justify-center pt-6">
            <AnimatePresence>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 300, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, y: -100, scale: 0.95, transition: { duration: 0.4 } }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1], // Custom Sunrise Cubic-Bezier (very smooth start, elegant finish)
                }}
                className="relative z-20 flex flex-col items-center  h-[635px] w-[400px]"
              >
                <div className='grid grid-cols-2 gap-22 pt-3'>
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                    className="w-36 h-36 bg-white  rounded-full z-30 shadow-xl flex items-center justify-center border-b-2 border-[#AAD24E] overflow-hidden p-4"
                  >
                    <img
                      src={cardData[activeIndex].image}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-4xl pr-10 flex justify-center items-center h-full w-full md:text-8xl font-black text-black mb-10 tracking-tight"
                  >
                    {cardData[activeIndex].id}
                  </motion.div>
                </div>
                <div className="flex flex-col mt-10 text-left px-18 w-full h-full">
                  {cardData[activeIndex].items.map((item, idx) => (
                    <motion.span
                      key={`${activeIndex}-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1, duration: 0.8, ease: "easeOut" }}
                      className="text-black border-b py-3 border-black/10 font-semibold text-2xl text-left md:text-2xl leading-[0.95]  tracking-tighter"
                    >
                      {item}
                    </motion.span>
                  ))}


                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* The Logo Circle (Sits ON TOP of the bite) */}
        <div className="flex justify-center relative -top-24">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-2 group flex w-[400px] items-center justify-around  bg-white text-black py-4 px-8 rounded-full text-3xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-3xl"
          >
            <span>Register Now</span>
            <div className=" p-2 rounded-full text-black transition-transform group-hover:translate-x-2">
              <MoveRight size={28} strokeWidth={2} />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}


