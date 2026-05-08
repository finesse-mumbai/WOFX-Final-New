import React from 'react';

const logoFilenames = [
  "1.png", "2.png", "3.png", "4.png", "5.png", "5a.png", "5b.png", "6.png", "7.png", "8.png", "9.png", "10.png", "10a.png",
  "11.png", "12.png", "13.png", "14.png", "14a.png", "14b.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "22a.png",
  "21.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png",
  "31.png", "32.png", "33.png", "34.png", "35.png", "35a.png", "36.png", "37.png", "38.png", "39.png", "64.png", "62.png", "63.png", "65.png", "40.png",
  "41.png", "42.png", "43.png", "44.png", "46.png", "47.png", "48.png", "49.png", "50.png",
  "51.png", "52.png", "53.png", "53a.png", "61.png", "54.png", "Logo-wofx-201.png", "55.png", "56.png", "57.png", "58.png", "59.png", "60.png", "66.png"
];

export function FeaturedBrands() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-purple border-b border-white/10 text-white">

      <div className="text-center">
        <p className=" text-3xl">Brand Connect <span className="font-semibold text-[#ABD14F]">@WOFX</span></p>

      </div>

      <div className="relative flex overflow-x-hidden group mt-10">

        <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
          {logoFilenames.map((filename, index) => (
            <div key={index} className="mx-12 w-[240px] bg-white h-[140px] rounded-xl shadow-lg relative transition-all duration-500 hover:scale-110">
              <img
                src={`https://www.wofxworldexpo.com/assests/countyLogo/2026/${filename}`}
                alt={`Brand ${filename}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second set for seamless loop */}
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center">
          {logoFilenames.map((filename, index) => (
            <div key={`copy-${index}`} className="mx-12  w-[240px] bg-white h-[140px] shadow-lg relative transition-all duration-500 hover:scale-110">
              <img
                src={`https://www.wofxworldexpo.com/assests/countyLogo/2026/${filename}`}
                alt={`Brand ${filename}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 160s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 160s linear infinite;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
