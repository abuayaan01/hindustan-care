import { MessageCircle, Phone, Zap } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Footer() {
  return (
    <div>
      {/* Mobile Sticky CTA */}
      <div className="md:hidden z-10 fixed bottom-0 left-0 right-0 bg-white border-t border-border p-3 flex gap-3">
        <Button
          size="sm"
          className="flex-1 bg-primary hover:bg-primary/90"
          asChild
        >
          <a href="tel:+917488606493">
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
            href="https://wa.me/+917488606493"
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
                  <Image
                    alt="hindustan-care"
                    width={45}
                    height={45}
                    className="logo"
                    src={"/hindustan-care-logo.png"}
                  />
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
                  <a href="/services" className="hover:opacity-100 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/why-us" className="hover:opacity-100 transition">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:opacity-100 transition">
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
                    href="tel:+917488606493"
                    className="hover:opacity-100 transition"
                  >
                    +91-7488-606-493
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@hindustancare.in"
                    className="hover:opacity-100 transition"
                  >
                    info@hindustancare.in
                  </a>
                </li>
                <li>Ranchi, Jharkhand, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 pb-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2024 Hindustan Care. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/privacy-policy" className="hover:opacity-100 transition">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:opacity-100 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
