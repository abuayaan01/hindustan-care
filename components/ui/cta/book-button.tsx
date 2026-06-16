"use client";
import { fireCallConversion } from "@/lib/gtag";
import { CalendarDays, ChevronRight } from "lucide-react";
import { Button } from "../button";

function BookButton() {
  return (
    <Button
      size="lg"
      asChild
      className="bg-primary hover:bg-primary/90"
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
