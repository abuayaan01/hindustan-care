"use client"
import { Button } from "../button";
import { fireCallConversion } from "@/lib/gtag";
import { Phone } from "lucide-react";

function CallButton() {
  return (
    <Button size="lg" variant="outline" asChild onClick={fireCallConversion}>
      <a href="tel:+919117770110" className="flex items-center">
        <Phone className="w-5 h-5 mr-2" />
        Call Now
      </a>
    </Button>
  );
}

export default CallButton;
