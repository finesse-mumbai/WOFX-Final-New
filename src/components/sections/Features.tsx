import { useEffect, useState, useRef } from 'react';
import { Target, Users, Share2, Link, Award, Globe } from 'lucide-react';

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
  const [innerRadius, setInnerRadius] = useState(0);
  const [outerRadius, setOuterRadius] = useState(0);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;
    const update = () => {
      const size = el.getBoundingClientRect().width;
      setInnerRadius(size * 0.36);  // ~36% of container = inner orbit
      setOuterRadius(size * 0.46);  // ~46% of container = outer orbit
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const innerItems = categories.slice(0, 3);
  const outerItems = categories.slice(3);

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="text-brand-magenta font-bold uppercase tracking-widest text-sm mb-4">Exhibitor Profile</p>

          <div ref={orbitRef} className="relative w-full max-w-[1248px] aspect-square flex items-center justify-center">
            {/* Inner Circle */}
            <div className="absolute w-[474px] h-[474px] md:w-[648px] md:h-[648px] bg-white rounded-full flex flex-col items-center justify-center text-center p-10 md:p-16 z-10 border border-[#A9D24E]">
              <span className="flex flex-col items-center gap-2">
                <span className="text-lg md:text-xl">
                  <span className="font-black text-[#AAD24E]">Exhibitor</span>{' '}
                  <span className="font-normal text-black">Profile</span>
                </span>
                <span className="font-black text-3xl md:text-5xl lg:text-6xl leading-tight text-black">
                  An Industry Trade Show For All Furniture Categories
                </span>
              </span>
            </div>

            {/* Decorative Circles */}
            <div className="absolute w-[628px] h-[628px] md:w-[900px] md:h-[900px] border border-[#A9D24E]/30 rounded-full" />
            <div className="absolute w-[781px] h-[781px] md:w-[1152px] md:h-[1152px] border border-[#A9D24E]/20 rounded-full" />

            {/* Orbiting Items - Inner Orbit (3 items) - Now Static */}
            {innerItems.map((cat, i) => {
              const angle = i * (360 / innerItems.length) * (Math.PI / 180);
              const x = Math.cos(angle) * innerRadius;
              const y = Math.sin(angle) * innerRadius;
              
              return (
                <div 
                  key={cat.name} 
                  className="absolute flex flex-col items-center group cursor-pointer"
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-zinc-100 p-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-[#A9D24E]">
                    <img src={cat.image} alt={cat.name} className="max-h-full object-contain" />
                  </div>
                  <div className="mt-4 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {cat.name}
                  </div>
                </div>
              );
            })}

            {/* Orbiting Items - Outer Orbit (4 items) - Now Static */}
            {outerItems.map((cat, i) => {
              const angle = i * (360 / outerItems.length) * (Math.PI / 180);
              const x = Math.cos(angle) * outerRadius;
              const y = Math.sin(angle) * outerRadius;

              return (
                <div 
                  key={cat.name} 
                  className="absolute flex flex-col items-center group cursor-pointer"
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-zinc-100 p-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border border-[#A9D24E]">
                    <img src={cat.image} alt={cat.name} className="max-h-full object-contain" />
                  </div>
                  <div className="mt-4 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {cat.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
}
