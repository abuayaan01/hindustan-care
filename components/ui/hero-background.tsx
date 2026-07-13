"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroBackground() {
  const topGlow = useRef<HTMLDivElement>(null);
  const leftGlow = useRef<HTMLDivElement>(null);
  const rightGlow = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(leftGlow.current, {
      x: 40,
      y: -30,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(rightGlow.current, {
      x: -35,
      y: 25,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      {/* Base Gradient */}
      <div
        className="
          absolute inset-0
          bg-linear-to-b
          from-secondary
          via-background
          to-background
          z-[-1]
        "
      />

      {/* Top Glow */}
      <div
        ref={topGlow}
        className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          h-[700px]
          w-[900px]
          rounded-full
          bg-primary/10
          blur-[140px]
        "
      />

      {/* Left Glow */}
      <div
        ref={leftGlow}
        className="
          absolute
          -left-32
          top-40
          h-80
          w-80
          rounded-full
          bg-blue-500/20
          blur-[120px]
        "
      />

      {/* Right Glow */}
      <div
        ref={rightGlow}
        className="
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          bg-primary/30
          blur-[120px]
        "
      />

      {/* <div className="absolute inset-0 z-0 opacity-[0.5] [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.12)_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" /> */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="smallGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>
    </>
  );
}
