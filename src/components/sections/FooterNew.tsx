import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function FooterNew() {
  const containerRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Lenis
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Section 2 Unfolding Image
    gsap.set('.image-motion', { rotateX: 90 });
    gsap.to('.image-motion', {
      rotateX: 0,
      scrollTrigger: {
        trigger: section2Ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Feature Cards
    gsap.from('.feature-card', {
      opacity: 0,
      y: 50,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-white font-['Poppins',_sans-serif]">
      {/* SECTION 2: UNFOLDING IMAGE */}
      <section ref={section2Ref} className="w-full h-[80vh] bg-white perspective-[1000px] overflow-hidden -mt-2">
        <div className="image-motion w-full h-full origin-top">
          <img 
            src="https://i.postimg.cc/1ztkf4hX/moveimage.png" 
            alt="Unfolding" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* SECTION 3: FEATURES GRID */}
      <section ref={section3Ref} className="min-h-screen w-full bg-black py-32 px-10 flex items-center justify-center relative overflow-hidden">
        <div className="max-w-6xl w-full text-center">
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Global Reach', desc: 'Connecting with international pavilions and buyers.' },
              { title: 'Innovation', desc: 'Showcasing the future of design and technology.' },
              { title: 'B2B Focus', desc: 'Dedicated platform for professional networking.' }
            ].map((f, i) => (
              <div 
                key={i} 
                className="feature-card bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl hover:bg-white/10 transition-all cursor-pointer group"
              >
                <h3 className="text-[#ff6b6b] text-2xl font-bold mb-4 group-hover:scale-110 transition-transform origin-left">
                  {f.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
