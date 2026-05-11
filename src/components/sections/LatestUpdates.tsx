
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
      {/* 95% Width Container with Borders */}
      <div className="w-[95%] mx-auto border-x border-[#A9D24E] min-h-[600px] flex items-stretch">
        <div className="flex flex-col lg:flex-row w-full gap-0 py-28">

          {/* Left Column (50%) */}
          <div className="lg:w-1/2 flex flex-col justify-center gap-0 py-20 border-r border-[#A9D24E] pl-20">
            {tabs.map((tab, idx) => (
              <motion.div
                key={tab}
                onMouseEnter={() => setActiveTab(tab)}
                initial={false}
                animate={{
                  x: activeTab === tab ? 20 : 0,
                  scale: activeTab === tab ? 1.05 : 1
                }}
                className={`cursor-pointer transition-all duration-300 relative group py-6 pl-20 ${idx < 2 ? 'border-b border-[#A9D24E]' : ''}`}
              >
                <div className="relative z-10 flex items-center gap-4 py-8">
                  <h3 className={`transition-all duration-300 ${activeTab === tab
                    ? 'text-white text-[52px] font-bold'
                    : 'text-white text-[24px] font-medium'
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
          <div className="lg:w-1/2 bg-white p-14 md:p-20 flex flex-col z-20">
            <div className="flex-1 relative overflow-hidden">
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
                  <div className="pt-3 bg-white flex flex-col">
                    <h2 className="text-xl md:text-3xl font-semibold text-[#111111] tracking-tighter mb-4 leading-tight">
                      {updatesData[activeTab].title}
                    </h2>
                    {/* <p className="text-lg md:text-xl text-zinc-600 font-normal leading-relaxed mb-10 max-w-2xl">
                      {updatesData[activeTab].description}
                    </p> */}

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4 mt-auto">
                      <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="w-14 h-14 flex items-center justify-center border border-black/10 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="w-14 h-14 flex items-center justify-center border border-black/10 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
