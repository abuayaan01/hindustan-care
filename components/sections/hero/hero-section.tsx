import Reveal from "@/components/animations/reveal";
import SplitText from "@/components/animations/split-text";
import HeroBackground from "@/components/ui/hero-background";
import HeroBadge from "@/components/ui/hero-badge";
import HeroCta from "@/components/ui/hero-cta";
import HeroStats from "@/components/ui/hero-stats";
import HeroTrustPills from "@/components/ui/hero-trust-pills";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white -mt-16 pt-32 pb-16">
      <HeroBackground />
      <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
        <HeroBadge />

        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white text-balance">
            Trusted Home Appliance
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            <span className="text-primary">Repair</span> in Ranchi
          </h2>
        </Reveal>

        <SplitText
          delay={0.2}
          className="text-md md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-balance"
        >
          Same-day appliance repair in Ranchi by experienced technicians with
          transparent pricing.
        </SplitText>

        <HeroCta />

        <HeroStats />

        <HeroTrustPills />
      </div>
    </section>
  );
}

export default HeroSection;
