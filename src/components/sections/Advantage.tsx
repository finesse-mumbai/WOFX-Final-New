import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const advantages = [
  { 
    title: "Converge", 
    subtitle: "at an Industry Trade Show",
    icon: Layers
  },
  { 
    title: "Expand", 
    subtitle: "Your Buyer Network",
    icon: Layers
  },
  { 
    title: "Collaborate", 
    subtitle: "and Scale",
    icon: Layers
  },
  { 
    title: "Connect", 
    subtitle: "with B2B Professional Buyers",
    icon: Layers
  },
  { 
    title: "Accentuate", 
    subtitle: "Your Brand",
    icon: Layers
  },
  { 
    title: "Penetrate", 
    subtitle: "Potential Markets",
    icon: Layers
  }
];

export function Advantage() {
  return (
    <section className="bg-white text-zinc-900 relative overflow-hidden">
      <div className="w-[90%] mx-auto border-x-2 border-[#AAD24E] relative">
        {/* Intersection Markers */}
        <span className="absolute -top-3 -left-[11px] text-[#AAD24E] text-xl font-bold select-none">+</span>
        <span className="absolute -top-3 -right-[11px] text-[#AAD24E] text-xl font-bold select-none">+</span>
        
        {/* Three Column Content Section */}
        <div className="flex flex-col md:flex-row relative">
          {/* Column 1: Image (30%) */}
          <div className="w-full md:w-[30%] flex-shrink-0 border-r border-[#AAD24E]/30 flex flex-col relative p-2 min-h-[500px]">
            {/* Image container */}
            <div className="w-full h-full bg-zinc-200 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Networking" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute top-12 left-8 md:top-20 md:left-12 max-w-[200px]">
                <h4 className="text-[#AAD24E] text-3xl md:text-4xl font-black uppercase leading-tight mb-2">Network</h4>
                <p className="text-white/80 text-lg md:text-xl font-medium leading-tight">with Stakeholders Industry</p>
              </div>
            </div>
            
            <span className="absolute bottom-0 -left-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none">+</span>
          </div>

          {/* Column 2: Spacer (w-14) */}
          <div className="hidden md:block w-14 flex-shrink-0 border-r border-[#AAD24E]/30 h-auto relative bg-zinc-50">
            <span className="absolute bottom-0 -right-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none">+</span>
          </div>

          {/* Column 3: Main Content (Remaining) */}
          <div className="flex-1 py-12 px-2 md:px-4 relative bg-zinc-50/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#F8F9FA] border border-[#AAD24E] p-10 flex flex-col items-start transition-all duration-500 hover:bg-black hover:border-black h-64"
                >
                  {/* Icon */}
                  <div className="mb-8 text-[#AAD24E] group-hover:text-[#AAD24E] transition-colors duration-500">
                    <item.icon size={32} strokeWidth={1} />
                  </div>
                  
                  {/* Content */}
                  <div className="mt-auto">
                    <h5 className="text-2xl font-black text-black group-hover:text-[#AAD24E] transition-colors duration-500 tracking-tight mb-2">
                      {item.title}
                    </h5>
                    <p className="text-zinc-500 text-sm font-medium leading-snug group-hover:text-white/70 transition-colors duration-500">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <span className="absolute bottom-0 -right-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none">+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
