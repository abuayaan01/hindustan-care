"use client";

import { Headset, Shield, ShieldCheck, Users } from "lucide-react";
import Counter from "../animations/counter";
import FadeIn from "../animations/fade-in";

const stats = [
  {
    value: 7,
    suffix: "+",
    label: "Years Experience",
    duration: 1.2,
    delay: 10,
    icon: ShieldCheck,
  },
  {
    value: 10,
    suffix: "K+",
    label: "Happy Customers",
    duration: 1.5,
    delay: 2,
    icon: Users,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Available",
    duration: 1.8,
    delay: 2,
    icon: Headset,
  },
];

export default function HeroStats() {
  return (
    <FadeIn delay={1} y={30} className="mb-8">
      <div className="grid grid-cols-3 gap-4 text-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              group
              flex
              flex-col
              items-center
              transition-transform
              duration-300
              hover:-translate-y-1
            "
          >
            <p className="text-2xl flex items-center gap-2 font-bold text-primary">
              <span className="bg-[#E2EBFD] rounded-full  p-2">
                <stat.icon className="w-5 h-5" />
              </span>
              <Counter
                duration={stat.duration}
                end={stat.value}
                suffix={stat.suffix}
              />
            </p>

            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
