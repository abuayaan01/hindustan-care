"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Service } from "./service";
import Link from "next/link";
import { GOOGLE_FORM_URL } from "@/lib/constants";

type Props = {
  service: Service;
  active: boolean;
  onHover: () => void;
};

export default function ServiceCard({ service, active, onHover }: Props) {
  return (
    <article
      onMouseEnter={onHover}
      className={cn(
        "group relative overflow-hidden rounded-[32px] border border-border cursor-pointer",
        "bg-gradient-to-br from-card via-card to-muted/20",
        "transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
        "h-[260px] md:h-[260px] xl:h-[280px]",
        active ? "basis-1/2 md:basis-[65%]" : "basis-1/2 md:basis-[35%]",
      )}
    >
      {/* Card Background Glow */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-700",
          active ? "opacity-100" : "opacity-30",
        )}
        style={{
          background: `radial-gradient(circle at top right, ${service.glow}22 0%, transparent 70%)`,
        }}
      />

      {/* Border Glow */}
      <div
        className={cn(
          "absolute inset-0 rounded-[32px] transition-opacity duration-700",
          active ? "opacity-100" : "opacity-0",
        )}
        style={{
          boxShadow: `inset 0 0 0 1px ${service.glow}55`,
        }}
      />

      {active ? (
        <>
          {/* Appliance Glow */}
          <div
            className="
              absolute
              top-2
              right-2
              md:right-6
              w-[220px]
              h-[160px]
              md:w-[280px]
              md:h-[200px]
              rounded-full
              blur-3xl
              opacity-80
              transition-all
              duration-700
              pointer-events-none
            "
            style={{
              background: `radial-gradient(circle, ${service.glow}55 0%, transparent 70%)`,
            }}
          />

          {/* Image */}
          <div
            className="
              absolute

              top-1/2
              left-1/2
              -translate-x-1/2 
              -translate-y-1/2

              w-[200px]
              h-[150px]

              md:top-5
              md:left-auto
              md:right-4
              md:translate-x-0
              md:translate-y-0  

              md:w-70
              md:h-[190px]

              transition-all
              duration-700
              ease-out
              group-hover:scale-105
              group-hover:-translate-y-2
            "
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="
                object-contain
                transition-transform
                duration-700
              "
            />
          </div>

          {/* Content */}
          <div
            className="
              absolute
              left-4
              bottom-4
              md:left-8
              md:bottom-8
              max-w-[320px]
              md:max-w-[340px]
            "
          >
            <h3 className="text-lg md:text-3xl text-foreground font-semibold leading-tight">
              {service.title}
            </h3>

            <p className="hidden md:block mt-3 md:mt-4 pr-2 text-sm md:text-base text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            <Link
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-0 md:mt-6
                inline-flex
                items-center
                gap-2
                font-semibold
                text-primary
                group/button
              "
            >
              Book Service
              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-1
                "
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Appliance Glow */}
          <div
            className="
              absolute
              top-10
              left-1/2
              -translate-x-1/2
              w-[170px]
              h-[120px]
              md:w-[220px]
              md:h-[150px]
              xl:w-[250px]
              xl:h-[170px]
              rounded-full
              blur-3xl
              opacity-50
              transition-all
              duration-700
              pointer-events-none
            "
            style={{
              background: `radial-gradient(circle, ${service.glow}45 0%, transparent 70%)`,
            }}
          />

          {/* Image */}
          <div
            className="
              absolute

              top-1/2
              left-1/2
              -translate-x-1/2 
              -translate-y-1/2

              md:top-10
              md:left-1/2
              md:-translate-x-1/2
              md:translate-y-0

              w-[170px]
              h-[120px]

              md:w-[220px]
              md:h-[150px]

              transition-all
              duration-700
              ease-out
              
              group-hover:scale-105
            "
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Title */}
          <div
            className="
              absolute
              left-4
              right-4
              bottom-4
              md:left-8
              md:right-8
              md:bottom-8
            "
          >
            <h3 className="text-sm md:text-2xl text-foreground font-semibold leading-tight">
              {service.title}
            </h3>
          </div>
        </>
      )}

      {/* Hover Overlay */}
      <div
        className="
          absolute
          inset-0
          rounded-[32px]
          bg-white/5
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          pointer-events-none
        "
      />
    </article>
  );
}
