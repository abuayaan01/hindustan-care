"use client";
import { useRef } from "react";
import FadeIn from "../animations/fade-in";
import { BadgeCheck } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroBadge() {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
    rotate: 45,
    scale: 0.6,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 0.5,
  });
  }, []);

  return (
    <FadeIn delay={0.3} y={20} blur={5} scale={0.9}>
      <div className="inline-block group mb-6 px-4 py-2 backdrop-blur-sm bg-primary/10 rounded-full">
        <span
          className="text-primary flex items-center gap-2 text-sm font-semibold"
        >
          <span ref={ref}>
            <BadgeCheck className="transition-transform duration-300" />{" "}
          </span>
          Experienced Technicians
        </span>
      </div>
    </FadeIn>
  );
}

export default HeroBadge;
