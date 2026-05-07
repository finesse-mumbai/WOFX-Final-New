import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: 'Home', link: '#' },
  { name: 'Fair Info', link: '#' },
  { name: 'Exhibitors', link: '#', sub: ['The WOFX Advantage', 'Exhibitor Profile', 'Show Directory', 'Enquiry Form'] },
  { name: 'Buyer', link: '#', sub: ['Buyer Registration', 'Buyer Profile'] },
  { name: 'Contact', link: '#' },
];

export function MenuOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-zinc-950 text-white p-6 md:p-20 overflow-y-auto"
        >
          <div className="flex justify-between items-start mb-20">
             <div className="flex items-center space-x-1">
                 <div className="w-8 h-8 bg-brand-light-lime flex items-center justify-center font-black text-black text-xs">W</div>
                 <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center font-black text-black text-xs">O</div>
                 <div className="w-8 h-8 bg-brand-magenta flex items-center justify-center font-black text-black text-xs">F</div>
                 <div className="w-8 h-8 bg-brand-purple flex items-center justify-center font-black text-black text-xs">X</div>
               </div>
            <button onClick={onClose} className="text-white hover:text-brand-magenta transition-colors cursor-pointer">
              <X size={48} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <nav className="flex flex-col space-y-8">
              {menuItems.map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <a href={item.link} className="text-6xl md:text-8xl font-black tracking-tighter hover:text-brand-yellow transition-colors block">
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-12">
               <div className="grid grid-cols-1 gap-4">
                  <h4 className="text-brand-magenta font-black uppercase tracking-[0.3em] text-sm mb-4">Quick Links</h4>
                  <ul className="space-y-3">
                    {['The WOFX Advantage', 'Exhibitor Profile', 'Show Directory', 'Enquiry Form', 'Testimonials'].map(link => (
                      <li key={link}>
                        <a href="#" className="text-xl font-bold hover:text-brand-light-lime transition-colors flex items-center space-x-2">
                          <span>{link}</span>
                          <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
               </div>

               <div className="pt-12 border-t border-white/10">
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-4">Contact Info</p>
                  <p className="text-2xl font-black mb-1">(+91) 022-4037-6700</p>
                  <p className="text-xl font-bold opacity-60">contactus@worldexindia.com</p>
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
