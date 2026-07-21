"use client";
import { fireCallConversion } from "@/lib/gtag";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Button } from "../button";

function BookButton() {
  return (
    <Button
      size="lg"
      asChild
      className="bg-slate-700/50 h-10 md:h-12 w-90 md:w-full text-accent rounded-full hover:bg-primary"
      onClick={fireCallConversion}
    >
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfxUe06nbktS-tsgtbIo9NTuJ4bk8jAuiUdaW3DQ7RZm1AgGg/viewform?usp=header"
        className="flex"
      >
        <CalendarDays />
        <div>
          <p>Book Service Now</p>
        </div>
        <ChevronRight />
      </a>
    </Button>
  );
}

export default BookButton;
