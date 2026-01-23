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
  "samsung.svg",
  "Whirlpool_Corporation.svg",
  "Fujitsu-Logo.wine.svg",
];

export function BrandMarquee() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">
            Brands We Love Repairing
          </h2>
          <p className="text-muted-foreground">
            Expert service for all leading appliance brands
          </p>
        </div>

        {/* ROW 1 */}
        <MarqueeRow logos={brandLogos} speed="45s" />

        {/* ROW 2 (reverse) */}
        <MarqueeRow logos={[...brandLogos].reverse()} speed="45s" reverse />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function MarqueeRow({
  logos,
  speed,
  reverse = false,
}: {
  logos: string[];
  speed: string;
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden mb-6">
      <FadeEdges />

      <div
        className="flex w-max gap-8"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed} linear infinite`,
        }}
      >
        {/* FIRST SET */}
        {logos.map((logo, idx) => (
          <BrandCard key={`a-${idx}`} logo={logo} />
        ))}

        {/* DUPLICATE SET */}
        {logos.map((logo, idx) => (
          <BrandCard key={`b-${idx}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

function BrandCard({ logo }: { logo: string }) {
  return (
    <div className="shrink-0 w-40 h-24 flex items-center justify-center bg-secondary rounded-lg">
      <Image
        src={`/images/brands/${logo}`}
        alt={logo}
        width={120}
        height={60}
        className="object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition"
      />
    </div>
  );
}

function FadeEdges() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
    </>
  );
}
