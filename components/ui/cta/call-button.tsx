"use client";

import { Button } from "../button";
import { fireCallConversion } from "@/lib/gtag";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight, Phone } from "lucide-react";
import { useRef } from "react";

function CallButton() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      x: 5,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      yoyoEase: true,
    });
  }, []);

  return (
    <Button
      asChild
      variant={"call"}
      size="lg"
      onClick={fireCallConversion}
      className="group relative h-10! md:h-12! w-90 md:w-full overflow-hidden rounded-full"
    >
      <a
        href="tel:+919117770110"
        className="relative flex h-full items-center justify-between"
      >
        {/* Expanding Background */}
        <span
          className="
            absolute
            hidden
            md:inline-block
            right-1
            top-1
            bottom-1
            w-10
            rounded-full
            origin-right
            bg-accent
            transition-width
            duration-200
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:w-[calc(100%-9px)]
          "
        />

        {/* Smaler Screen */}
        <span className="md:hidden">
          <Phone />
        </span>
        {/* Smaler Screen end*/}

        {/* Text */}
        <span
          className="
            relative
            mr-0
            md:mr-8
            z-10
            text-sm
            font-semibold
            tracking-wide
            transition-colors
            duration-300
          "
        >
          Call Now
        </span>

        {/* Smaller screen icon */}
        <span ref={ref} className="md:hidden">
          <ChevronRight />
        </span>

        {/* Icon Circle */}
        <span
          className="
            absolute
            right-1
            top-1
            hidden
            md:flex
            z-20
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-accent
          "
        >
          <Phone
            className="
              h-5
              w-5
              text-primary
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:rotate-12
              group-hover:scale-110
            "
            fill="currentColor"
            strokeWidth={0}
          />
        </span>
      </a>
    </Button>
  );
}

export default CallButton;

// "use client";
// import { Button } from "../button";
// import { fireCallConversion } from "@/lib/gtag";
// import { ChevronRight, Phone } from "lucide-react";

// function CallButton() {
//   return (
//     <Button
//       className="rounded-full"
//       size="lg"
//       variant="call"
//       asChild
//       onClick={fireCallConversion}
//     >
//       <a href="tel:+919117770110" className="flex items-center">
//         <Phone className="w-5 h-5 mr-2" />
//         Call Now
//         <ChevronRight />
//       </a>
//     </Button>
//   );
// }

// export default CallButton;
