import FadeIn from "@/components/animations/fade-in";
import Reveal from "@/components/animations/reveal";
import SplitText from "@/components/animations/split-text";
import { Clock, Package, Shield, Star } from "lucide-react";
import React from "react";

function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 pb-10 md:py-32 md:pb-16 bg-linear-to-b from-secondary to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SplitText
            delay={0.1}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Why Choose Us
          </SplitText>
          <FadeIn
            delay={0.2}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Quality you can trust, service you can depend on
          </FadeIn>
        </div>
        <Reveal delay={0.25}>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Technicians",
                description:
                  "All our technicians are experienced and background-verified for your safety and peace of mind.",
              },
              {
                icon: Clock,
                title: "Same-Day Service",
                description:
                  "Emergency repairs available with quick response times in your area.",
              },
              {
                icon: Package,
                title: "Genuine Spare Parts",
                description:
                  "We only use original and genuine spare parts for all repairs.",
              },
              {
                icon: Star,
                title: "No Hidden Charges",
                description:
                  "Transparent pricing with detailed quotation before starting any work.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex gap-4 bg-white p-6 rounded-xl border border-border hover:border-primary/30 transition"
                >
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhyUs;
