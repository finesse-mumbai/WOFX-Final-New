import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Authentic Animated Icons from lucide-animated.com ---

const DEFAULT_TRANSITION = {
  type: "spring",
  stiffness: 100,
  damping: 14,
  mass: 1,
};

const LayersIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    fill="none"
    height="32"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <motion.path
      animate={isHovered ? { y: [-9, 0] } : { y: 0 }}
      d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
      transition={DEFAULT_TRANSITION}
    />
    <motion.path
      animate={isHovered ? { y: [-5, 0] } : { y: 0 }}
      d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
      transition={DEFAULT_TRANSITION}
    />
  </svg>
);

const ExpandIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    fill="none"
    height="32"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      animate={isHovered ? { translateX: "2px", translateY: "2px" } : { translateX: "0%", translateY: "0%" }}
      d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
    />
    <motion.path
      animate={isHovered ? { translateX: "-2px", translateY: "2px" } : { translateX: "0%", translateY: "0%" }}
      d="M3 16.2V21m0 0h4.8M3 21l6-6"
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
    />
    <motion.path
      animate={isHovered ? { translateX: "2px", translateY: "-2px" } : { translateX: "0%", translateY: "0%" }}
      d="M21 7.8V3m0 0h-4.8M21 3l-6 6"
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
    />
    <motion.path
      animate={isHovered ? { translateX: "-2px", translateY: "-2px" } : { translateX: "0%", translateY: "0%" }}
      d="M3 7.8V3m0 0h4.8M3 3l6 6"
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
    />
  </svg>
);

const UsersIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    fill="none"
    height="32"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <motion.path
      animate={isHovered ? { translateX: [-6, 0] } : { translateX: 0 }}
      d="M22 21v-2a4 4 0 0 0-3-3.87"
      transition={{ type: "spring", stiffness: 200, damping: 13, delay: 0.1 }}
    />
    <motion.path
      animate={isHovered ? { translateX: [-6, 0] } : { translateX: 0 }}
      d="M16 3.13a4 4 0 0 1 0 7.75"
      transition={{ type: "spring", stiffness: 200, damping: 13, delay: 0.1 }}
    />
  </svg>
);

const LinkIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    fill="none"
    height="32"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      animate={isHovered ? {
        pathLength: [1, 0.97, 1, 0.97, 1],
        pathOffset: [0, 0.05, 0, 0.05, 0],
        rotate: [0, -5, 0],
      } : { pathLength: 1, pathOffset: 0, rotate: 0 }}
      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      transition={{ duration: 1, times: [0, 0.2, 0.4, 0.6, 1], ease: "easeInOut" }}
    />
    <motion.path
      animate={isHovered ? {
        pathLength: [1, 0.97, 1, 0.97, 1],
        pathOffset: [0, 0.05, 0, 0.05, 0],
        rotate: [0, -5, 0],
      } : { pathLength: 1, pathOffset: 0, rotate: 0 }}
      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      transition={{ duration: 1, times: [0, 0.2, 0.4, 0.6, 1], ease: "easeInOut" }}
    />
  </svg>
);

const SparklesIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    fill="none"
    height="32"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      animate={isHovered ? { y: [0, -1, 0, 0], fill: "currentColor" } : { y: 0, fill: "none" }}
      d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      transition={{ duration: 1 }}
    />
    <motion.path
      animate={isHovered ? { opacity: [0, 1, 0, 0, 0, 0, 1] } : { opacity: 1 }}
      d="M20 3v4"
      transition={{ duration: 2, type: "spring", stiffness: 70, damping: 10, mass: 0.4, delay: 0.5 }}
    />
    <motion.path
      animate={isHovered ? { opacity: [0, 1, 0, 0, 0, 0, 1] } : { opacity: 1 }}
      d="M22 5h-4"
      transition={{ duration: 2, type: "spring", stiffness: 70, damping: 10, mass: 0.4, delay: 0.5 }}
    />
    <motion.path
      animate={isHovered ? { opacity: [0, 1, 0, 0, 0, 0, 1] } : { opacity: 1 }}
      d="M4 17v2"
      transition={{ duration: 2, type: "spring", stiffness: 70, damping: 10, mass: 0.4, delay: 0.5 }}
    />
    <motion.path
      animate={isHovered ? { opacity: [0, 1, 0, 0, 0, 0, 1] } : { opacity: 1 }}
      d="M5 18H3"
      transition={{ duration: 2, type: "spring", stiffness: 70, damping: 10, mass: 0.4, delay: 0.5 }}
    />
  </svg>
);

const ZapIcon = ({ isHovered }: { isHovered: boolean }) => (
  <svg
    fill="none"
    height="32"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      animate={isHovered ? { opacity: [0, 1], pathLength: [0, 1] } : { opacity: 1, pathLength: 1 }}
      d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      transition={{ duration: 0.6 }}
    />
  </svg>
);

const advantages = [
  {
    title: "Converge",
    subtitle: "at an Industry Trade Show",
    icon: LayersIcon
  },
  {
    title: "Expand",
    subtitle: "Your Buyer Network",
    icon: ExpandIcon
  },
  {
    title: "Collaborate",
    subtitle: "and Scale",
    icon: UsersIcon
  },
  {
    title: "Connect",
    subtitle: "with B2B Professional Buyers",
    icon: LinkIcon
  },
  {
    title: "Accentuate",
    subtitle: "Your Brand",
    icon: SparklesIcon
  },
  {
    title: "Penetrate",
    subtitle: "Potential Markets",
    icon: ZapIcon
  }
];

export function Advantage() {
  return (
    <section className="bg-white text-zinc-900 relative overflow-hidden z-40">
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
                <Card key={idx} item={item} idx={idx} />
              ))}
            </div>

            <span className="absolute bottom-0 -right-[11px] translate-y-1/2 text-[#AAD24E] text-xl font-bold select-none">+</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item, idx }: { item: any; idx: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  // Transition shared by the top "reveal" layer
  const revealTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border p-10 z-40 flex flex-col items-start overflow-hidden h-44 cursor-pointer transition-colors duration-500"
      style={{ borderColor: isHovered ? 'transparent' : '#AAD24E' }}
    >
      {/* Base Background (Always visible at bottom) */}
      <div className="absolute inset-0 bg-[#F8F9FA] z-0" />

      {/* --- LAYER 1: Bottom Content (Black Text on White) --- */}
      <div className="relative z-10 w-full h-full flex flex-col pointer-events-none">
        {/* Icon */}
        <div className="mb-8 text-[#AAD24E]">
          <item.icon isHovered={isHovered} />
        </div>
        {/* Text */}
        <div className="mt-auto">
          <h5 className="text-2xl font-black text-black tracking-tight mb-2">
            {item.title}
          </h5>
          <p className="text-sm font-medium leading-snug text-zinc-500">
            {item.subtitle}
          </p>
        </div>
      </div>

      {/* --- LAYER 2: Top Content (Green/White Text on Black) --- */}
      {/* This layer is "wiped" in from left to right using clip-path */}
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: isHovered ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
        transition={revealTransition}
        className="absolute inset-0 z-20 overflow-hidden pointer-events-none bg-black p-10 flex flex-col"
      >
        <div className="mb-8 text-[#AAD24E]">
          <item.icon isHovered={isHovered} />
        </div>
        <div className="mt-auto">
          <h5 className="text-2xl font-black text-[#AAD24E] tracking-tight mb-2">
            {item.title}
          </h5>
          <p className="text-sm font-medium leading-snug text-white/70">
            {item.subtitle}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
