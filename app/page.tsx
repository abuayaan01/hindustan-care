"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Zap,
  Shield,
  Package,
  Clock,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BrandMarquee } from "@/components/brand-marquee";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div> */}
            <Image
              alt="hindustan-care"
              width={45}
              height={45}
              className="mr-2 logo"
              src={"/hindustan-care-logo.png"}
            />
            <span className="text-xl font-bold text-primary">
              Hindustan Care
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-foreground hover:text-primary transition"
            >
              Why Us
            </a>
            <a
              href="#how-it-works"
              className="text-foreground hover:text-primary transition"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition"
            >
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+919876543210">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="sm" asChild>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-semibold">
                ✓ Verified & Certified
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
                <a href="#contact">Book Service Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+919876543210" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50K+</p>
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
        className="py-20 md:py-32 bg-gradient-to-b from-secondary to-white"
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
                  <div className="flex-shrink-0">
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
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-white">
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
                city: "Delhi",
                feedback:
                  "Excellent service! Technician was professional and fixed my AC within an hour. Highly recommended.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                city: "Mumbai",
                feedback:
                  "Very transparent pricing and no hidden charges. My refrigerator is working perfectly now. Great value!",
                rating: 5,
              },
              {
                name: "Amit Patel",
                city: "Bangalore",
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
                href="tel:+919876543210"
                className="flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91-9876-543-210
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white text-primary hover:bg-secondary hover:text-primary border-white"
            >
              <a
                href="https://wa.me/919876543210"
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
              <p>Delhi, NCR & surrounding areas</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">Hours</p>
              <p>Monday - Sunday, 6 AM - 11 PM</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">Response Time</p>
              <p>Within 30 minutes in Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-3 flex gap-3">
        <Button
          size="sm"
          className="flex-1 bg-primary hover:bg-primary/90"
          asChild
        >
          <a href="tel:+919876543210">
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </a>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 bg-transparent"
          asChild
        >
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            WhatsApp
          </a>
        </Button>
      </div>

      {/* Add padding to prevent content overlap with mobile CTA */}
      <div className="md:hidden h-20" />

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-bold">Hindustan Care</span>
              </div>
              <p className="text-sm opacity-75">
                Your trusted partner for home appliance repairs
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#services" className="hover:opacity-100 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:opacity-100 transition">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:opacity-100 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Mon - Fri: 6 AM - 11 PM</li>
                <li>Sat - Sun: 6 AM - 11 PM</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a
                    href="tel:+919876543210"
                    className="hover:opacity-100 transition"
                  >
                    +91-9876-543-210
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@hindustancare.com"
                    className="hover:opacity-100 transition"
                  >
                    info@hindustancare.com
                  </a>
                </li>
                <li>Delhi, NCR, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2024 Hindustan Care. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
