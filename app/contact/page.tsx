import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Zap, Home, Clock, MapPin, Mail } from 'lucide-react'
import CTASection from '@/components/cta-section'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team for immediate assistance.',
      value: '+91 7488-606-493',
      action: 'tel:+917488606493',
      label: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with us on WhatsApp for quick responses.',
      value: '+91 7488-606-493',
      action: 'https://wa.me/917488606493',
      label: 'Message on WhatsApp',
      external: true
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us your queries and we\'ll respond promptly.',
      value: 'info@hindustancare.in',
      action: 'mailto:info@hindustancare.in',
      label: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Book an Appointment',
      description: 'Submit your service request and we’ll call you back shortly.',
      value: '24/7 Available',
      action: 'https://docs.google.com/forms/d/e/1FAIpQLSfxUe06nbktS-tsgtbIo9NTuJ4bk8jAuiUdaW3DQ7RZm1AgGg/viewform?usp=header',
      label: 'Book Now'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 9:00 PM' },
    { day: 'Holidays', time: '10:00 AM - 8:00 PM' },
    { day: 'Emergency', time: '24/7 Available' }
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Get in Touch with Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Reach out to us through any of the following channels.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method) => {
            const IconComponent = method.icon
            return (
              <div key={method.title} className="bg-white rounded-lg border border-border p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                {method.value && <p className="font-semibold text-foreground mb-4">{method.value}</p>}
                {method.action && (
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="w-full bg-transparent"
                  >
                    <a
                      href={method.action}
                      {...(method.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {method.label}
                    </a>
                  </Button>
                )}
              </div>
            )
          })}
        </div>

        {/* Business Hours */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Business Hours</h2>
          <div className="bg-white rounded-lg border border-border p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {businessHours.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="font-bold text-foreground mb-2">{item.day}</p>
                  <p className="text-primary font-semibold">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Info */}
        <div className="bg-secondary rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Quick Booking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1</div>
              <h3 className="font-bold text-foreground mb-2">Call or Message</h3>
              <p className="text-muted-foreground">Contact us via phone, WhatsApp, or email with your appliance issue.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <h3 className="font-bold text-foreground mb-2">Confirm Details</h3>
              <p className="text-muted-foreground">We'll confirm your location, appliance type, and schedule an appointment.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <h3 className="font-bold text-foreground mb-2">Get Expert Service</h3>
              <p className="text-muted-foreground">Our certified technician arrives and provides expert repair services.</p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Service Areas</h2>
          <div className="bg-white rounded-lg border border-border p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {[
                'Ranchi',
                'Bokaro',
                'Jamshedpur',
                'Dhanbad',
              ].map((area) => (
                <div key={area} className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold text-foreground">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              Not in our service area? Contact us anyway, we might be able to help!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />
      </main>

    </div>
  )
}
