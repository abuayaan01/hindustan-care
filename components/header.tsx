import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { MessageCircle, Phone } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <a href='/' className="flex items-center">
        <Image
          alt="hindustan-care"
          width={40}
          height={40}
          className="mr-2 logo bg-primary rounded-lg"
          src={"/hindustan-care-logo.png"}
        />
        <span className="text-xl font-bold text-primary">
          Hindustan Care
        </span>
      </a>
      {/* <nav className="hidden md:flex items-center gap-8">
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
      </nav> */}
      <div className="hidden md:flex items-center gap-3">
        <Button variant="outline" size="sm" asChild>
          <a href="tel:+917488606493">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </Button>
        <Button size="sm" asChild>
          <a
            href="https://wa.me/+917488606493"
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
  )
}

export default Header