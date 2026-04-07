"use client";
import { Button } from "../button";
import { fireCallConversion } from "@/lib/gtag";

function BookButton() {
  return (
    <Button
      size="lg"
      asChild
      className="bg-primary hover:bg-primary/90"
      onClick={fireCallConversion}
    >
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxUe06nbktS-tsgtbIo9NTuJ4bk8jAuiUdaW3DQ7RZm1AgGg/viewform?usp=header">
        Book Service Now
      </a>
    </Button>
  );
}

export default BookButton;
