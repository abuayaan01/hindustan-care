"use client";

import Image from "next/image";
import SplitText from "@/components/animations/split-text";
import FadeIn from "@/components/animations/fade-in";
import Reveal from "@/components/animations/reveal";

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
  // "Fujitsu-Logo.wine.cropped.svg",
];

export default function BrandMarquee() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <SplitText className="text-center text-3xl md:text-4xl font-bold text-foreground mb-4">
            Brands We Service
          </SplitText>

          <FadeIn delay={0.1} className="text-sm italic text-muted-foreground">
            *Hindustan Care is an independent service provider and is not
            affiliated with or authorized by any of the brands listed below.
          </FadeIn>
        </div>

        <Reveal delay={0.2}>
          {/* ROW 1 */}
          <MarqueeRow logos={brandLogos} speed="45s" />

          {/* ROW 2 (reverse) */}
          <MarqueeRow logos={[...brandLogos].reverse()} speed="45s" reverse />
        </Reveal>
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
          animation: `${
            reverse ? "marquee-reverse" : "marquee"
          } ${speed} linear infinite`,
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
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-white to-transparent z-10" />
    </>
  );
}
