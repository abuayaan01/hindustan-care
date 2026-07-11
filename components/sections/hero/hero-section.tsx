import BookButton from "@/components/ui/cta/book-button";
import CallButton from "@/components/ui/cta/call-button";
import { BadgeCheck } from "lucide-react";
import Reveal from "@/components/animations/reveal";
import SplitText from "@/components/animations/split-text";
import FadeIn from "@/components/animations/fade-in";
import HeroBadge from "@/components/ui/hero-badge";

function HeroSection() {
  return (
    <section className="bg-linear-to-b from-secondary to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HeroBadge />
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Trusted Home Appliance
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              Repair in Ranchi
            </h2>
          </Reveal>
          <SplitText
            delay={0.2}
            className="text-lg md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
          >
            Same-day appliance repair in Ranchi by experienced technicians with
            transparent pricing.
          </SplitText>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div>
              <BookButton />
            </div>
            <div>
              <CallButton />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">7+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">10K+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
