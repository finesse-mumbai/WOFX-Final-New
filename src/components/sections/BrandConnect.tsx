import { motion } from 'motion/react';

const logos = [
  { name: 'Logo 1', url: 'https://placehold.co/150x80?text=BRAND+1' },
  { name: 'Logo 2', url: 'https://placehold.co/150x80?text=BRAND+2' },
  { name: 'Logo 3', url: 'https://placehold.co/150x80?text=BRAND+3' },
  { name: 'Logo 4', url: 'https://placehold.co/150x80?text=BRAND+4' },
  { name: 'Logo 5', url: 'https://placehold.co/150x80?text=BRAND+5' },
  { name: 'Logo 6', url: 'https://placehold.co/150x80?text=BRAND+6' },
];

export function BrandConnect() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-purple border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-brand-yellow font-black uppercase tracking-[0.3em] text-[10px] mb-2">Brand Connect @WOFX</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Our Featured Brands</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer p-6 border border-white/10 hover:border-white/30 rounded-sm"
            >
              <img src={logo.url} alt={logo.name} className="max-h-12 w-auto object-contain brightness-0 invert" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
