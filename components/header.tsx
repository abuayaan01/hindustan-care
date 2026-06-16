"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { fireCallConversion } from "@/lib/gtag";

const LINKS = [
  { name: "Contact Us", link: "./contact" },
  { name: "Our Services", link: "./services" },
  { name: "Why Us?", link: "./why-us" },
  { name: "Privacy Policy", link: "./privacy-policy" },
] as const;

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between
      flex-wrap p-4"
      >
        <a href="/" className="flex items-center">
          <Image
            alt="hindustan-care"
            width={35}
            height={35}
            className="mr-2 logo bg-primary rounded-lg"
            src={"/hindustan-care-logo.png"}
          />
          <span className="text-xl font-bold text-primary">Hindustan Care</span>
        </a>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>

        {isOpen && (
          <div className="md:hidden w-full border-t mt-4 border-border bg-linear-to-b from-white to-secondary/50 rounded-3xl animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 sm:px-6 py-6 max-w-7xl mx-auto">
              <nav className="flex flex-col gap-1 mb-8">
                {LINKS.map((link) => {
                  return (
                    <a
                      key={link.name}
                      href={link.link}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 rounded-lg text-slate-700 bg-primary/3 hover:text-primary transition font-medium"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              <div className="border-t border-border pt-6 flex flex-col gap-3">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <a
                    href="tel:+919117770110"
                    onClick={fireCallConversion}
                    className="flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <a
                    href="https://wa.me/919117770110?text=Hi%20Hindustan%20Care%2C%20I%20need%20assistance."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={fireCallConversion}
                    className="flex items-center justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <a href="tel:+919117770110" onClick={fireCallConversion}>
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
          <Button size="sm" asChild>
            <a
              href="https://wa.me/919117770110?text=Hi%20Hindustan%20Care%2C%20I%20need%20assistance."
              onClick={fireCallConversion}
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
  );
}

export default Header;
