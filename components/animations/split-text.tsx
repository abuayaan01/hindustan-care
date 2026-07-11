"use client";

import { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

export default function SplitText({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const split = new SplitType(ref.current!, {
      types: "lines,words",
      absolute: false,
    });

    gsap.from(split.words, {
      yPercent: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      delay,
      ease: "power4.out",
    });

    return () => split.revert();
  }, []);

  return (
    <p ref={ref} className={className}>
      {children}
    </p>
  );
}
