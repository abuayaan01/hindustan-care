"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

export default function Counter({
  end,
  duration = 1.5,
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const value = { current: 0 };

    gsap.to(value, {
      current: end,
      duration,
      delay: 1,
      ease: "power2.out",
      onUpdate: () => {
        ref.current!.textContent =
          `${Math.round(value.current)}${suffix}`;
      },
    });
  }, []);

  return <span ref={ref}>0{suffix}</span>;
}