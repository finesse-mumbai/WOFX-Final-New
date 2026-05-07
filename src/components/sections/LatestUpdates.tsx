
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const updatesData = {
  publications: {
    id: 'publications',
    label: 'Publications',
    title: 'Industry Insights 2025',
    description: 'Explore our latest comprehensive guide on global furniture trends and market dynamics for the upcoming season.',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1000&auto=format&fit=crop',
  },
  latest_updates: {
    id: 'latest_updates',
    label: 'Latest Updates',
    title: 'WOFX 2025: Strategic Expansion',
    description: 'We are thrilled to announce new international pavilions joining our 2025 edition, bringing more diversity to our floor.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
  },
  highlights: {
    id: 'highlights',
    label: 'Highlights 2025',
    title: 'Innovation Award Winners',
    description: 'Check out the most groundbreaking designs and sustainable solutions that took home the trophies this year.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',
  },
};

type ActiveTab = keyof typeof updatesData;

export function LatestUpdates() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('latest_updates');
  const tabs: ActiveTab[] = ['publications', 'latest_updates', 'highlights'];

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  return (
    <section className="w-full bg-[#6CCAD4]">
      {/* 90% Width Container with Borders */}
      <div className="w-[90%] mx-auto border-x-2 border-[#A9D24E] py-20 px-6 md:px-12 min-h-[600px] flex items-center">
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-0">
          
          {/* Left Column (50%) */}
          <div className="lg:w-1/2 flex flex-col justify-center gap-0">
            {tabs.map((tab, idx) => (
              <motion.div
                key={tab}
                onMouseEnter={() => setActiveTab(tab)}
                initial={false}
                animate={{
                  x: activeTab === tab ? 20 : 0,
                  scale: activeTab === tab ? 1.05 : 1
                }}
                className={`cursor-pointer transition-all duration-300 relative group py-6 ${idx < 2 ? 'border-b border-[#A9D24E]' : ''}`}
              >
                <div className="relative z-10 flex items-center gap-4">
                  <h3 className={`transition-all duration-300 ${
                    activeTab === tab 
                      ? 'text-white text-[42px] font-bold' 
                      : 'text-black/40 text-[24px] font-medium'
                  } group-hover:text-white leading-tight`}>
                    {updatesData[tab].label}
                  </h3>
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="arrow"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <ChevronRight size={32} className="text-white" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column (50%) */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden group/card p-10">
              <div className="aspect-[4/3] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="flex-1 overflow-hidden relative">
                      <img
                        src={updatesData[activeTab].image}
                        alt={updatesData[activeTab].label}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="pt-6 bg-white flex flex-col">
                      <p className="text-sm md:text-base text-zinc-500 font-normal leading-relaxed mb-6">
                        {updatesData[activeTab].description}
                      </p>
                      
                      {/* Navigation Buttons */}
                      <div className="flex items-center gap-3 mt-auto">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                          className="p-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleNext(); }}
                          className="p-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
