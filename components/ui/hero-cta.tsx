import React from "react";
import BookButton from "./cta/book-button";
import CallButton from "./cta/call-button";
import ScaleIn from "../animations/scale-in";

function HeroCta() {
  return (
    <div className="flex flex-col items-center gap-8 mb-12 md:mb-12">
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center ">
        <ScaleIn delay={0.5}>
          <div>
            <BookButton />
          </div>
        </ScaleIn>
        <ScaleIn delay={0.7}>
          <div>
            <CallButton />
          </div>
        </ScaleIn>
      </div>
    </div>
  );
}

export default HeroCta;
