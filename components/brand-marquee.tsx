"use client";

import Image from "next/image";

const brandLogos = [
    "Bosch_Logo.svg",
    "Daikin-Logo.wine.svg",
    "Godrej_Logo.svg",
    "Haier-Logo.wine.svg",
    "lg.svg",
    "Mitsubishi_Electric-Logo.wine.svg",
    "Panasonic-Logo.wine.svg",
    "Philips-Logo.wine.svg",
];

const brandLogosShuffled = [
    "samsung.svg",
    "Thomson_Technology_Logo.svg",
    "Toshiba-Logo.wine.svg",
    "Whirlpool_Corporation.svg",
    "Fujitsu-Logo.wine.svg",
    "Daikin-Logo.wine.svg",
    "Bosch_Logo.svg",
    "lg.svg",
    "Haier-Logo.wine.svg",
    "Whirlpool_Corporation.svg",
    "Toshiba-Logo.wine.svg",
    "Philips-Logo.wine.svg",
    "Panasonic-Logo.wine.svg",
    "Mitsubishi_Electric-Logo.wine.svg",
    "Fujitsu-Logo.wine.svg",
    // "Godrej_Logo.svg",
    "Thomson_Technology_Logo.svg",
    "samsung.svg",
];
  

export function BrandMarquee() {
  const logos = [...brandLogos, ...brandLogosShuffled];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Brands We Love Repairing
          </h2>
          <p className="text-muted-foreground">
            Expert service for all leading appliance brands
          </p>
        </div>

        {/* ROW 1 */}
        <div className="relative overflow-hidden mb-6">
          <FadeEdges />
          <div className="flex gap-8 animate-marquee">
            {logos.map((logo, idx) => (
              <BrandCard key={`row1-${idx}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* ROW 2 (reverse direction) */}
        <div className="relative overflow-hidden">
          <FadeEdges />
          <div className="flex gap-8 animate-marquee-reverse">
            {logos.map((logo, idx) => (
              <BrandCard key={`row2-${idx}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 10s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}


function BrandCard({ logo } : {logo: string}) {
    return (
      <div className="flex-shrink-0 w-40 h-24  flex items-center justify-center bg-secondary rounded-lg hover:bg-muted transition">
        <Image
          src={`/images/brands/${logo}`}
          alt={logo}
          width={100}
          height={100}
          className="max-h-18 max-w-[170px] object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
        />
      </div>
    );
  }
  
  function FadeEdges() {
    return (
      <>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />
      </>
    );
  }
  