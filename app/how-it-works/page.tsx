import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Zap, Home, Clock, CheckCircle, Wrench, CreditCard } from 'lucide-react'

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'Book Your Service',
      description: 'Call us or send a message via WhatsApp with your appliance details. We\'ll confirm the appointment and provide a time slot that works for you.',
      details: ['Quick booking process', 'Flexible scheduling', 'Instant confirmation']
    },
    {
      number: 2,
      icon: Clock,
      title: 'Technician Arrives',
      description: 'Our certified technician arrives at your doorstep with all necessary tools and equipment. They\'ll diagnose the problem and provide a quote.',
      details: ['Punctual arrival', 'Professional assessment', 'Transparent quote']
    },
    {
      number: 3,
      icon: Wrench,
      title: 'Expert Repair',
      description: 'We repair your appliance using genuine spare parts and industry-best practices. Most repairs are completed on the same day.',
      details: ['Genuine parts used', 'Expert workmanship', 'Quick turnaround']
    },
    {
      number: 4,
      icon: CreditCard,
      title: 'Payment & Warranty',
      description: 'Pay only after the repair is complete and you\'re satisfied. We provide warranty on all parts and labor.',
      details: ['Payment after service', 'Warranty coverage', 'Itemized bill']
    }
  ]

  const faqs = [
    {
      question: 'How quickly can you provide a service appointment?',
      answer: 'We typically provide same-day or next-day appointments depending on demand. Emergency repairs can often be scheduled within a few hours.'
    },
    {
      question: 'What is your service area coverage?',
      answer: 'We serve the entire city and surrounding areas. Contact us with your location to confirm service availability.'
    },
    {
      question: 'Do you provide warranty on repairs?',
      answer: 'Yes, we provide warranty on all repairs and genuine spare parts used. The warranty period varies based on the service type.'
    },
    {
      question: 'What if the repair cannot be completed on the same day?',
      answer: 'We\'ll inform you upfront and provide a timeline. We always ensure minimal disruption to your daily routine.'
    },
    {
      question: 'Can I pay online or through a digital method?',
      answer: 'Yes, we accept all major payment methods including UPI, cards, and digital wallets. You can also pay cash on service completion.'
    },
    {
      question: 'What brands of appliances do you service?',
      answer: 'We service all major brands including Daikin, LG, Samsung, Whirlpool, Godrej, Voltas, IFB, Bosch, and many others.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Hindustan Care</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and efficient process to get your appliances fixed
          </p>
        </div>

        {/* Steps Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const IconComponent = step.icon
              return (
                <div key={step.number} className="relative">
                  {/* Connecting line */}
                  {step.number < 4 && (
                    <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                  
                  <div className="bg-white rounded-lg border border-border p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="text-sm text-foreground flex items-center">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-border p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Appliances Fixed?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Follow our simple process and get expert repair services delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="tel:+919876543210" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2024 Hindustan Care. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:opacity-100 transition">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:opacity-100 transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
