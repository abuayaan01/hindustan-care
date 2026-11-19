"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

type ScaleInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScaleIn({
  children,
  className,
  delay = 0,
}: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      opacity: 0,
      scale: 0.85,
      y: 20,
      duration: 0.8,
      delay,
      ease: "back.out(1.6)",
    });
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}