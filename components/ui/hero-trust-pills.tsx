"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FadeIn from "../animations/fade-in";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroupCount,
} from "@/components/ui/avatar";


export default function HeroRating() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const stars = containerRef.current.querySelectorAll(".hero-star");
    const text = containerRef.current.querySelector(".hero-rating-text");

    const tl = gsap.timeline({
      delay: 1.4,
    });

    tl.from(stars, {
      y: 8,
      scale: 0,
      rotate: -20,
      opacity: 0,
      stagger: 0.08,
      duration: 0.45,
      ease: "back.out(1.8)",
    });

    if (text) {
      tl.from(
        text,
        {
          opacity: 0,
          y: 10,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.15",
      );
    }
  }, []);

  return (
    <FadeIn className="flex flex-col items-center justify-center gap-2 mt-10" delay={1.2}>
      <div>
        <AvatarGroup />
      </div>

      <div ref={containerRef} className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="hero-star h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <a
          href="https://share.google/utCpWIHbgzEJNKAw1"
          target="_blank"
          rel="noopener noreferrer"
          className="
                hero-rating-text
                text-xs
                md:text-sm
                text-muted-foreground
                transition-colors
                duration-300
                hover:text-primary
            "
        >
          <p className="hero-rating-text text-xs md:text-sm text-muted-foreground">
            Rated <span className="font-semibold text-foreground">5/5</span> by{" "}
            our happy customers
          </p>
        </a>
      </div>
    </FadeIn>
  );
}

export function AvatarGroup() {
  const avatarStyleClass = "size-10 border-2 border-background shadow-md";
  return (
    <div className="flex -space-x-3">
      <Avatar className={`${avatarStyleClass}`}>
        <AvatarImage src="/images/rated-users/amit.png" />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>

      <Avatar className={`${avatarStyleClass}`}>
        <AvatarImage src="/images/rated-users/abuzar.png" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      <Avatar className={`${avatarStyleClass}`}>
        <AvatarImage src="/images/rated-users/danish.png" />
        <AvatarFallback>DA</AvatarFallback>
      </Avatar>

      <AvatarGroupCount
        className={`${avatarStyleClass} text-xs`}
      >
        1K+
      </AvatarGroupCount>
    </div>
  );
}
