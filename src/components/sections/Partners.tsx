import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const partners = [
  { name: 'House of Brands', logo: 'https://placehold.co/200x100?text=House+of+Brands' },
  { name: 'Alliance Partner', logo: 'https://placehold.co/200x100?text=Alliance' },
  { name: 'Industry Association', logo: 'https://placehold.co/200x100?text=RAI' },
  { name: 'Skilling Partner', logo: 'https://placehold.co/200x100?text=FFSC' },
];

export function RegistrationCTA() {
  return (
    <section className="py-24 px-6 bg-brand-light-lime relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[30vw] font-black text-black/5 leading-none translate-x-1/4 -translate-y-1/4">
        01
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8 text-brand-purple">
            BUYER <br /> 
            REGISTRATION <br /> 
            FORM
          </h2>
          <div className="flex flex-wrap gap-4 mb-12">
            {['DEALERS', 'DISTRIBUTORS', 'WHOLESALERS', 'IMPORTERS', 'AGENTS'].map(role => (
              <span key={role} className="bg-black/10 px-4 py-2 rounded-none text-[10px] font-black tracking-widest text-brand-purple border border-black/5">
                {role}
              </span>
            ))}
          </div>
          <button className="bg-zinc-950 text-white px-10 py-6 rounded-none font-black uppercase text-lg shadow-2xl hover:scale-105 transition-transform flex items-center space-x-4 cursor-pointer">
             <span>Register Now</span>
             <ArrowRight />
          </button>
        </div>
        
        <div className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl">
           <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop" 
              alt="Furniture Showroom" 
              className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 to-transparent" />
           <div className="absolute bottom-10 left-10 text-white">
              <p className="text-brand-yellow font-black uppercase tracking-widest text-sm mb-2">Upcoming Show</p>
              <h3 className="text-3xl font-black">Mumbai Exhibition Center</h3>
           </div>
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="py-24 px-6 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-2xl font-black uppercase tracking-tighter text-zinc-400">Industry Bodies Endorsing WOFX</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {partners.map((p, i) => (
            <motion.div 
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-brand-gray/50 rounded-sm hover:bg-brand-gray transition-colors group"
            >
              <div className="h-16 flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 transition-all">
                <img src={p.logo} alt={p.name} className="max-h-full object-contain" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
