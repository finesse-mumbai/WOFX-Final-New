import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ADVANTAGE_DATA = [
  {
    heading: "Have any questions?",
    text: "Support is here.",
    pill: "Schedule a Call",
    color: "#004a3c"
  },
  {
    heading: "Want to grow?",
    text: "Build together.",
    pill: "Contact Sales",
    color: "#7f1d1d"
  },
  {
    heading: "New ideas?",
    text: "Brainstorm now.",
    pill: "Learn More",
    color: "#854d0e"
  },
  {
    heading: "Ready to start?",
    text: "Join us today.",
    pill: "Get Started",
    color: "#002d4a"
  },
];

const AnimatedButton = ({ initialText, primaryColor = "white", initialTextColor = "black", padding = "px-8 py-4", className = "" }) => {
  return (
    <button 
      className={`${padding} ${className} transition-transform hover:scale-105 active:scale-95`}
      style={{ backgroundColor: primaryColor, color: initialTextColor, borderRadius: '9999px' }}
    >
      {initialText}
    </button>
  );
};

export default function AdvantageScroll({ videoUrl }) {
  return (
    <div className="bg-black text-white font-sans">
      {/* Static Hero Section */}
      <section className="min-h-[60vh] w-full flex flex-col items-center justify-center relative bg-black py-20">
        <div className="text-center space-y-8 px-4">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            The Advantage
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Unlock a World of Opportunities With Our Premium Ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <AnimatedButton 
              initialText="Get Started" 
              className="text-sm font-black"
            />
            <AnimatedButton 
              initialText="Learn More" 
              primaryColor="#FFCC29"
              className="text-sm font-black"
            />
          </div>
        </div>
      </section>

      {/* Static Cards Grid */}
      <section className="relative w-full bg-black pb-32 px-6">
        {videoUrl && (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>
        )}

        <div className="relative z-10 max-w-[1470px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {ADVANTAGE_DATA.map((item, idx) => {
            const isSpecialCard = idx === 3; // 4th card: "Ready to start?"
            
            if (isSpecialCard) {
              return (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-[2.5rem] bg-white/10 backdrop-blur-xl p-10 shadow-2xl flex flex-col items-start justify-center min-h-[350px] border border-white/10 group"
                >
                  {/* Number 01 - Right Aligned */}
                  <div className="w-full flex justify-end">
                    <div className="text-7xl md:text-8xl font-black text-[#AAD24E] mb-6 drop-shadow-2xl">
                      01
                    </div>
                  </div>

                  {/* Roles List - Left Aligned */}
                  <div className="flex flex-col items-start w-full gap-y-3">
                    {[
                      'DEALERS',
                      'DISTRIBUTORS',
                      'WHOLESALERS',
                      'IMPORTERS',
                      'TRADING & BUYING HOUSES',
                      'AGENTS'
                    ].map(role => (
                      <span key={role} className="text-white font-black text-xs md:text-sm text-left uppercase border-b border-white/10 pb-1 w-fit">
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* Subtle Shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-[2.5rem] p-10 min-h-[350px] shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{ backgroundColor: item.color }}
              >
                <div className="relative z-10 flex flex-col h-full justify-between items-start">
                  <div className="px-5 py-2 rounded-full bg-white/5 w-fit">
                    <span className="text-white text-[10px] font-black">{item.pill}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-white text-3xl md:text-4xl font-black tracking-tight uppercase">
                      {item.heading}
                    </h3>
                    <p className="text-white/60 text-lg leading-snug font-normal">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Arrow Icon in Corner */}
                <div className="absolute bottom-10 right-10 opacity-40 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-white w-12 h-12" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
