"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  blur?: number;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = -20,
  scale = 1,
  blur = 0,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      y,
      duration,
      delay,
      scale,
      filter: `blur(${blur}px)`,
      ease: "power3.out",
      clearProps: "all",
    });
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
