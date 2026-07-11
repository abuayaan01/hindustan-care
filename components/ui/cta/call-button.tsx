"use client";

import { Button } from "../button";
import { fireCallConversion } from "@/lib/gtag";
import { Phone } from "lucide-react";

function CallButton() {
  return (
    <Button
      asChild
      variant={"call"}
      size="lg"
      onClick={fireCallConversion}
      className="group relative h-12 overflow-hidden rounded-full p-1"
    >
      <a
        href="tel:+919117770110"
        className="relative flex h-full items-center justify-between pl-5 pr-1"
      >
        {/* Expanding Background */}
        <span
          className="
            absolute
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
            group-hover:w-35
          "
        />

        {/* Text */}
        <span
          className="
            relative
            z-10
            text-sm
            font-semibold
            tracking-wide
            transition-colors
            duration-300
          "
        >
          CALL NOW
        </span>

        {/* Icon Circle */}
        <span
          className="
            relative
            z-20
            flex
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
