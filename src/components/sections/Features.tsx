import { useEffect, useState, useRef } from 'react';
import { Target, Users, Share2, Link, Award, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const zoomCircleRef = useRef<HTMLDivElement>(null);
  const zoomContentRef = useRef<HTMLSpanElement>(null);
  const zoomContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;
    const update = () => {
      const size = el.getBoundingClientRect().width;
      const newInner = size * 0.392;
      const newOuter = size * 0.481;
      setInnerRadius(newInner);
      setOuterRadius(newOuter);

      // Update positions via GSAP to avoid transform conflicts with React
      const innerItems = el.querySelectorAll('.inner-orbit-item');
      innerItems.forEach((item, i) => {
        const angle = i * (360 / innerItems.length) * (Math.PI / 180);
        gsap.set(item, {
          x: Math.cos(angle) * newInner,
          y: Math.sin(angle) * newInner,
          xPercent: -50,
          yPercent: -50
        });
      });

      const outerItems = el.querySelectorAll('.outer-orbit-item');
      outerItems.forEach((item, i) => {
        const angle = i * (360 / outerItems.length) * (Math.PI / 180);
        gsap.set(item, {
          x: Math.cos(angle) * newOuter,
          y: Math.sin(angle) * newOuter,
          xPercent: -50,
          yPercent: -50
        });
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scroll Reveal Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: zoomContainerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
        }
      });

      tl.to(zoomCircleRef.current, {
        scale: 60,
        duration: 1,
        ease: "none"
      }, 0)
        .to(".group-reveal", {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }, 0.15)
        .to(zoomContentRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }, 0.15);

      // Continuous Solar System Rotation
      gsap.to(".inner-orbit-container", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
      gsap.to(".inner-orbit-item", {
        rotation: -360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      gsap.to(".outer-orbit-container", {
        rotation: -360,
        duration: 30,
        repeat: -1,
        ease: "none"
      });
      gsap.to(".outer-orbit-item", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
      });

    }, zoomContainerRef);

    return () => ctx.revert();
  }, []);

  const innerItems = categories.slice(0, 3);
  const outerItems = categories.slice(3);

  return (
    <section ref={zoomContainerRef} className=" bg-[#AAD24E] overflow-hidden relative">
      {/* Persistent Side Borders Overlay */}
      <div className="absolute inset-0 z-[90] pointer-events-none">
        <div className="w-[95%] h-full mx-auto border-x border-black/20" />
      </div>

      <div className="w-[95%] mx-auto relative flex flex-col items-center min-h-screen">

        <div ref={orbitRef} className="relative w-full max-w-[1248px] aspect-square flex items-center justify-center">
          {/* Inner Circle (Zoom Reveal) */}
          <div
            ref={zoomCircleRef}
            className="absolute w-20 h-20 bg-white rounded-full z-0 border border-black/10 origin-center shadow-lg"
          />

          {/* Decorative Circles */}
          <div className="absolute w-[534px] h-[534px] md:w-[765px] md:h-[765px] border border-black/20 rounded-full z-10" />
          <div className="absolute w-[664px] h-[664px] md:w-[980px] md:h-[980px] border border-black/20 rounded-full z-10" />
          <div className="absolute w-[794px] h-[794px] md:w-[1200px] md:h-[1200px] border border-black/20 rounded-full z-10" />

          {/* Inner Orbit Container */}
          <div className="inner-orbit-container absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-reveal">
            {innerItems.map((cat, i) => {
              const angle = i * (360 / innerItems.length) * (Math.PI / 180);
              const x = Math.cos(angle) * innerRadius;
              const y = Math.sin(angle) * innerRadius;

              return (
                <div
                  key={cat.name}
                  className="inner-orbit-item absolute left-1/2 top-1/2 flex flex-col items-center group cursor-pointer z-50 pointer-events-auto"
                >
                  <div className="w-24 h-24 md:w-[134px] md:h-[134px] bg-white p-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-b-2 border-[#A9D24E] shadow-2xl">
                    <img src={cat.image} alt={cat.name} className="max-h-full object-contain" />
                  </div>
                  <div className="mt-4 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {cat.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Outer Orbit Container */}
          <div className="outer-orbit-container absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-reveal">
            {outerItems.map((cat, i) => {
              const angle = i * (360 / outerItems.length) * (Math.PI / 180);
              const x = Math.cos(angle) * outerRadius;
              const y = Math.sin(angle) * outerRadius;

              return (
                <div
                  key={cat.name}
                  className="outer-orbit-item absolute left-1/2 top-1/2 flex flex-col items-center group cursor-pointer z-50 pointer-events-auto"
                >
                  <div className="w-24 h-24 md:w-[134px] md:h-[134px] bg-white p-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-b-2 border-[#A9D24E] shadow-2xl">
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
      </div>

      {/* Global Text Overlay (Outside relative containers to ensure perfect centering and pinning) */}
      <div className="absolute inset-0 z-[100] flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-center px-6 max-w-4xl">
          <div className="flex flex-col items-center gap-2">
            <div className="text-lg md:text-3xl opacity-0 group-reveal relative">
              <span className="font-semibold text-[#AAD24E]">Exhibitor</span> Profile
            </div>
            <h3
              ref={zoomContentRef}
              className="font-black text-3xl md:text-7xl leading-tight text-black origin-center block p-4"
              style={{ opacity: 0, willChange: 'transform' }}
            >
              An Industry <br />  Trade  Show For <br /> All  Furniture <br /> Categories
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
