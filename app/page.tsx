import {
  Phone,
  MessageCircle,
  Shield,
  Package,
  Clock,
  ChevronRight,
  Star,
  BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BrandMarquee } from "@/components/brand-marquee";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-linear-to-b from-secondary to-background py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary flex items-center gap-2 text-sm font-semibold">
              <BadgeCheck /> Verified & Certified
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Trusted Home Appliance Repair Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Certified technicians, same-day service, and transparent pricing.
              Get your appliances fixed by experts you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxUe06nbktS-tsgtbIo9NTuJ4bk8jAuiUdaW3DQ7RZm1AgGg/viewform?usp=header">Book Service Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+917488606493" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">7+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">
                  Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee Section */}
      <BrandMarquee />

      {/* Services Section */}
      <section id="services" className="py-20 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert repair services for all major home appliances
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Air Conditioner",
                icon: "❄️",
                imgUrl: "/images/aircondition.png",
              },
              {
                name: "Refrigerator",
                icon: "🧊",
                imgUrl: "/images/refrigerator.png",
              },
              {
                name: "Washing Machine",
                icon: "🌊",
                imgUrl: "/images/washingmachine.png",
              },
              {
                name: "Microwave",
                icon: "🍽️",
                imgUrl: "/images/microwaveoven.png",
              },
              { name: "Television", icon: "📺", imgUrl: "/images/tv.png" },
              { name: "Oven", icon: "🔥", imgUrl: "/images/oven.png" },
              { name: "Water Heater", icon: "💧", imgUrl: "/images/water.png" },
              {
                name: "Dishwasher",
                icon: "🍴",
                imgUrl: "/images/dishwasher.png",
              },
            ].map((service) => (
              <div
                key={service.name}
                className="bg-secondary flex flex-col justify-end hover:bg-muted rounded-xl p-6 text-center transition-all hover:shadow-md cursor-pointer"
              >
                {service.imgUrl ? (
                  <Image
                    src={service.imgUrl}
                    width={100}
                    height={100}
                    className="mx-auto "
                    alt="hindustancare"
                  />
                ) : (
                  <p className="text-4xl mb-3">{service.icon}</p>
                )}
                <h3 className="font-semibold text-foreground mt-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Professional repair & maintenance
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        className="py-20 md:py-32 bg-linear-to-b from-secondary to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality you can trust, service you can depend on
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Technicians",
                description:
                  "All our technicians are certified and background-verified for your safety and peace of mind.",
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
                  "We only use original and certified spare parts for all repairs.",
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
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple 4-step process to get your appliances fixed
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Book Service",
                desc: "Call, WhatsApp, or book online in minutes",
              },
              {
                step: 2,
                title: "Technician Visit",
                desc: "Expert arrives at your preferred time",
              },
              {
                step: 3,
                title: "Professional Repair",
                desc: "Quick diagnosis and efficient fixing",
              },
              {
                step: 4,
                title: "Payment & Warranty",
                desc: "1-year warranty on all repairs",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-secondary hover:bg-muted rounded-xl p-6 text-center transition-all h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-12 -right-4 text-primary">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-linear-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customer Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our happy customers say about us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Kumar",
                city: "Ranchi",
                feedback:
                  "Excellent service! Technician was professional and fixed my AC within an hour. Highly recommended.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                city: "Ranchi",
                feedback:
                  "Very transparent pricing and no hidden charges. My refrigerator is working perfectly now. Great value!",
                rating: 5,
              },
              {
                name: "Amit Patel",
                city: "Ranchi",
                feedback:
                  "Same-day service was amazing! They arrived exactly on time and fixed my washing machine beautifully.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4">{testimonial.feedback}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Appliances Fixed?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for professional, reliable, and affordable repair
            services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white text-primary hover:bg-secondary hover:text-primary border-white"
            >
              <a
                href="tel:+917488606493"
                className="flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91-7488-606-493
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white text-primary hover:bg-secondary hover:text-primary border-white"
            >
              <a
                href="https://wa.me/+917488606493"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center bg-primary-foreground/10 rounded-xl p-6">
            <div>
              <p className="text-2xl font-bold mb-2">Service Area</p>
              <p>Ranchi, Bokaro & surrounding areas</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">Hours</p>
              <p>Monday - Sunday, 6 AM - 11 PM</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">Response Time</p>
              <p>Within 30 minutes in Ranchi</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
