import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Target, Users, Share2, Link, Award, Globe } from 'lucide-react';
import { SplitText } from '../ui/SplitText';

const categories = [
  // Inner Orbit (3 items)
  { name: 'Home & Living', image: 'https://www.wofxworldexpo.com/_next/image?url=%2Fassests%2FexhibitorProfile%2FexhibitorProfile-2026%2F1.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' },
  { name: 'Work Space', image: 'https://www.wofxworldexpo.com/_next/image?url=%2Fassests%2FexhibitorProfile%2FexhibitorProfile-2026%2F2.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' },
  { name: 'Institutional', image: 'https://www.wofxworldexpo.com/_next/image?url=%2Fassests%2FexhibitorProfile%2FexhibitorProfile-2026%2F3.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' },
  // Outer Orbit (4 items)
  { name: 'Kitchen & Wardrobe', image: 'https://www.wofxworldexpo.com/_next/image?url=%2Fassests%2FexhibitorProfile%2FexhibitorProfile-2026%2F4.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' },
  { name: 'Outdoor', image: 'https://www.wofxworldexpo.com/_next/image?url=%2Fassests%2FexhibitorProfile%2FexhibitorProfile-2026%2F5.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' },
  { name: 'Industry Partner', image: 'https://www.wofxworldexpo.com/_next/image?url=%2Fassests%2FexhibitorProfile%2FexhibitorProfile-2026%2F7.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4' },
  { name: 'Global Connect', image: 'https://www.wofxworldexpo.com/_next/static/media/industryPartner.607b89a5.png' },
];

export function ExhibitorProfile() {
  const [innerRadius, setInnerRadius] = useState(262);
  const [outerRadius, setOuterRadius] = useState(326);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const textScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.7, 1.15, 1.15, 0.7]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);
  const textBlur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]);
  const textSpacing = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["-0.05em", "0em", "0em", "-0.05em"]);
  const textY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [20, 0, 0, -20]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setInnerRadius(375); // Reduced 20% from 469
        setOuterRadius(480); // Reduced 20% from 600
      } else {
        setInnerRadius(262); // Reduced 20% from 327
        setOuterRadius(326); // Reduced 20% from 407
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const innerItems = categories.slice(0, 3);
  const outerItems = categories.slice(3);
  const [trigger, setTrigger] = useState(0);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="max-w-7xl mx-auto flex flex-col items-center"
        >
        <p className="text-brand-magenta font-bold uppercase tracking-widest text-sm mb-4">Exhibitor Profile</p>
        
        <div className="mb-20 flex flex-col items-center gap-6">
          <div className="text-center">
            <SplitText 
              text="WOFX Exhibition"
              className="text-5xl md:text-8xl font-black text-center justify-center text-black"
              trigger={trigger}
            />
            <SplitText 
              text="Design Showcase"
              className="text-5xl md:text-8xl font-black text-center justify-center"
              gradient="linear-gradient(to right, #A9D24E, #FF2B6D)"
              delay={0.2}
              trigger={trigger}
            />
          </div>
          
          <button 
            onClick={() => setTrigger(prev => prev + 1)}
            className="group relative px-6 py-2 border-2 border-black font-bold uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10">Restart Animation</span>
          </button>
        </div>

        <div className="relative w-full max-w-[1040px] aspect-square flex items-center justify-center">
          {/* Inner Circle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ 
              opacity: 1, 
              scale: [0.5, 1.1, 1],
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="absolute w-[395px] h-[395px] md:w-[540px] md:h-[540px] bg-white rounded-full flex flex-col items-center justify-center text-center p-10 md:p-16 z-10 border border-[#A9D24E]"
          >
            <motion.span 
              style={{ 
                scale: textScale,
                opacity: textOpacity,
                filter: textBlur,
                letterSpacing: textSpacing,
                y: textY
              }}
              className="font-black text-2xl md:text-4xl lg:text-5xl leading-tight text-black"
            >
              An Industry Trade Show For All Furniture Categories
            </motion.span>
          </motion.div>

          {/* Decorative Circles */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ rotate: 360 }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { duration: 1, delay: 0.2 },
              scale: { duration: 1, delay: 0.2 },
              rotate: { duration: 100, repeat: Infinity, ease: "linear" }
            }}
            className="absolute w-[523px] h-[523px] md:w-[750px] md:h-[750px] border border-[#A9D24E]/30 rounded-full" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ rotate: -360 }}
            viewport={{ once: true }}
            transition={{ 
              opacity: { duration: 1, delay: 0.4 },
              scale: { duration: 1, delay: 0.4 },
              rotate: { duration: 150, repeat: Infinity, ease: "linear" }
            }}
            className="absolute w-[651px] h-[651px] md:w-[960px] md:h-[960px] border border-[#A9D24E]/20 rounded-full" 
          />

          {/* Orbiting Items - Inner Orbit (3 items) */}
          {innerItems.map((cat, i) => {
            const startAngle = i * (360 / innerItems.length);
            return (
              <div key={cat.name} className="absolute flex items-center justify-center pointer-events-none">
                <motion.div 
                  animate={{ rotate: [startAngle, startAngle + 360] }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ 
                    width: innerRadius * 2, 
                    height: innerRadius * 2
                  }}
                  className="relative"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: "backOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  >
                    <motion.div
                      animate={{ rotate: [-startAngle, -startAngle - 360] }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-20 h-20 md:w-28 md:h-28 bg-zinc-100 p-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer border border-[#A9D24E]">
                        <img src={cat.image} alt={cat.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="mt-4 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {cat.name}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}

          {/* Orbiting Items - Outer Orbit (4 items) */}
          {outerItems.map((cat, i) => {
            const startAngle = i * (360 / outerItems.length);
            return (
              <div key={cat.name} className="absolute flex items-center justify-center pointer-events-none">
                <motion.div 
                  animate={{ rotate: [startAngle, startAngle - 360] }}
                  transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                  style={{ 
                    width: outerRadius * 2, 
                    height: outerRadius * 2
                  }}
                  className="relative"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: "backOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  >
                    <motion.div
                      animate={{ rotate: [-startAngle, -startAngle + 360] }}
                      transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-20 h-20 md:w-28 md:h-28 bg-zinc-100 p-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 cursor-pointer border border-[#A9D24E]">
                        <img src={cat.image} alt={cat.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="mt-4 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {cat.name}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
