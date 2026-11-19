import BrandMarquee from "@/components/sections/brand-marquee/brand-marquee";
import ContactSection from "@/components/sections/contact/contact-section";
import HowItWorks from "@/components/sections/guide/how-it-works";
import HeroSection from "@/components/sections/hero/hero-section";
import SeoSection from "@/components/sections/seo/seo-section";
import ServiceSection from "@/components/sections/services/service-section";
import Testimonials from "@/components/sections/testimonials/testimonials";
import WhyUs from "@/components/sections/why-us/why-us";
import ServicesLink from "@/components/service-links";
import Services from "@/components/ui/services/services";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Brand Marquee Section */}
      <BrandMarquee />

      {/* Services Section */}
      {/* <ServiceSection /> */}
      <Services />

      {/* SEO SECTION */}
      {/* <SeoSection /> */}

      {/* Why Choose Us Section */}
      <WhyUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact & CTA Section */}
      <ContactSection />

      {/* Also Check */}
      <ServicesLink />
    </div>
  );
}
