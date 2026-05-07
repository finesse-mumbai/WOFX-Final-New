import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import gsap from 'gsap';

export function Hero({ onOpenMenu }: { onOpenMenu: () => void }) {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h1Ref.current) {
      gsap.fromTo(h1Ref.current, 
        { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.5, ease: 'power4.out', delay: 0.5 }
      );
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900 text-white font-sans">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2822&auto=format&fit=crop" 
          alt="Modern interior design"
          className="h-full w-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-[90%] mx-auto h-full border-x-2 border-[#AAD24E]">
        {/* Top Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-end p-6 md:p-10 pointer-events-none">
          <div className="flex items-center space-x-6 pointer-events-auto">
            <div className="text-right hidden md:block">
              <p className="text-brand-yellow font-bold text-xl leading-tight font-headline">8.9.10 DEC. 2026</p>
              <p className="text-[10px] text-white tracking-widest uppercase opacity-90 font-bold">Bombay Exhibition Center, Mumbai</p>
            </div>
            <button className="bg-brand-yellow text-black font-black px-8 py-3 rounded-none hover:bg-white transition-all uppercase text-sm cursor-pointer shadow-lg border-none outline-none">
              Login
            </button>
            <div className="flex space-x-8 text-[11px] font-bold tracking-[0.2em] uppercase">
              <a href="#" className="text-brand-yellow hover:white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-brand-yellow">Exhibitor</a>
              <a href="#" className="text-brand-yellow hover:white transition-colors">Buyer</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 flex h-full flex-col items-start justify-end pb-48 md:pb-52 px-6 w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full text-left"
          >
            <h1 ref={h1Ref} className="text-4xl md:text-8xl font-black leading-[0.9] tracking-tight mb-4 text-white">
              The Global <br />
              Marketplace <br />
              Crafted Of,
            </h1>
            <p className="text-brand-light-lime text-lg md:text-xl font-bold tracking-[0.05em]">
              By & For The Furniture + Design Industry
            </p>
          </motion.div>
        </div>

        {/* Bottom Nav Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-6">
          <div className="bg-zinc-900 p-4 md:px-10 flex items-center justify-between rounded-none shadow-2xl">
              {/* Logo Section */}
              <div className="flex-1 flex justify-start">
                <img 
                  src="https://www.wofxworldexpo.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwofx_logo_2026.e921b720.png&w=256&q=75&dpl=dpl_9TTGzHYezibYPkiRPAGLB3PUm1i4" 
                  alt="WOFX Logo" 
                  className="h-14 w-auto object-contain"
                />
              </div>

              {/* Center Section */}
              <div className="flex-1 flex justify-center">
                <span className="hidden md:block font-black tracking-[0.3em] text-sm hover:text-brand-yellow transition-colors cursor-pointer">HOME</span>
              </div>

              {/* Menu Section */}
              <div className="flex-1 flex justify-end space-x-12">
                <button 
                  onClick={onOpenMenu}
                  className="text-brand-light-lime hover:scale-110 transition-transform cursor-pointer"
                >
                  <Menu size={32} />
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
