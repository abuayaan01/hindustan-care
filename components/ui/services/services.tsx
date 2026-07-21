import FadeIn from "@/components/animations/fade-in";
import SplitText from "@/components/animations/split-text";

import ServiceRow from "./service-row";
import { rowOne, rowTwo } from "./service";
import Reveal from "@/components/animations/reveal";

export default function Services() {
  return (
    <section className="relative py-20 pt-0 md:pb-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <SplitText
            delay={0.1}
            className="text-center text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Our Services
          </SplitText>

          <FadeIn delay={0.2}>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional doorstep repair for all major home appliances.
              Trusted technicians. Genuine spare parts. Same-day service.
            </p>
          </FadeIn>
        </div>

        {/* Rows */}

        <Reveal delay={0.25}>
          <div className="space-y-6">
            <ServiceRow
              left={rowOne[0]}
              right={rowOne[1]}
              defaultActive="left"
            />

            <ServiceRow
              left={rowTwo[0]}
              right={rowTwo[1]}
              defaultActive="right"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
