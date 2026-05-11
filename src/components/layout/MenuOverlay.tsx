import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import navItems from '../../data/navItems';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function RollingText({ text, className = "" }: { text: string; className?: string }) {
  const characters = text.split("");

  return (
    <div className={`relative flex whitespace-pre ${className}`}>
      {characters.map((char, i) => (
        <div key={i} className="relative overflow-hidden h-[1.1em] leading-[1.1em]">
          <motion.span
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.02
            }}
            className="block"
          >
            {char}
          </motion.span>
          <motion.span
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 }
            }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.02
            }}
            className="absolute top-0 left-0 block"
          >
            {char}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

export function MenuOverlay({ isOpen, onClose }: MenuProps) {
  const [activeItem, setActiveItem] = useState(navItems[2]); // Default to Exhibitors for visual match

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="fixed bottom-[110px] left-1/2 -translate-x-1/2 z-[105] w-[65%] max-w-2xl bg-[#1a1a1a]/90 backdrop-blur-xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col"
        >
          <div className="p-12 md:p-16 pb-10">
            <span className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-12 block opacity-80">Menu</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
              {/* LEFT COLUMN: Main Categories */}
              <nav className="flex flex-col space-y-4 pr-16">
                {navItems.slice(0, 5).map((item) => (
                  <motion.button
                    key={item.label}
                    initial="initial"
                    whileHover="hover"
                    onMouseEnter={() => setActiveItem(item)}
                    className={`text-left text-4xl md:text-5xl tracking-tighter transition-all duration-300 cursor-pointer group
                      ${activeItem.label === item.label ? 'text-white' : 'text-white/30 hover:text-white/60'}
                    `}
                  >
                    <RollingText text={item.label} />
                  </motion.button>
                ))}
              </nav>

              {/* VERTICAL SEPARATOR */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#ABD14F]/40 hidden md:block" />

              {/* RIGHT COLUMN: Children */}
              <div className="flex flex-col pl-16 min-h-[300px]">
                <ul className="space-y-5">
                  {activeItem.children?.map((child) => (
                    <li key={child.label}>
                      <motion.a
                        href={child.link}
                        initial="initial"
                        whileHover="hover"
                        className="text-lg md:text-xl text-white hover:text-[#ABD14F] transition-colors block group"
                      >
                        <RollingText text={child.label} />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* BOTTOM INFO ROWS (Media & Publication style from image) */}
            <div className="mt-16 pt-12 border-t border-white/10 flex flex-col space-y-6">
              <div className="flex items-center justify-between group cursor-pointer" onMouseEnter={() => setActiveItem(navItems[4])}>
                <span className="text-white/50 font-bold text-lg">Phone</span>
                <span className="text-white/80 group-hover:text-[#ABD14F] transition-colors font-semibold">(+91) 022-4037-6700</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer" onMouseEnter={() => setActiveItem(navItems[5])}>
                <span className="text-white/50 font-bold text-lg">Email</span>
                <span className="text-white/80 group-hover:text-[#ABD14F] transition-colors font-semibold">contactus@worldexindia.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
