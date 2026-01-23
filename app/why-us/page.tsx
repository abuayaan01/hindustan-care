import CTASection from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Zap, Home, CheckCircle, Award, Shield, Users, Clock, TrendingUp } from 'lucide-react'

export default function WhyUsPage() {
  const reasons = [
    {
      icon: Users,
      title: 'Certified Technicians',
      description: 'All our technicians are certified, trained, and verified with years of experience in appliance repair.'
    },
    {
      icon: Clock,
      title: 'Same-Day Service',
      description: 'Quick response times and same-day service availability for urgent repairs across the city.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'We use only genuine spare parts and provide warranty on all repairs and parts used.'
    },
    {
      icon: TrendingUp,
      title: 'Transparent Pricing',
      description: 'No hidden charges. We provide upfront quotes and itemized bills for complete transparency.'
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'A decade of trusted service with thousands of satisfied customers across the region.'
    },
    {
      icon: CheckCircle,
      title: 'Professional Support',
      description: '24/7 customer support to answer your questions and resolve concerns promptly.'
    }
  ]

  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '7+', label: 'Years of Service' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Customer Support' }
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Hindustan Care?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by over 10,000 customers for reliable, affordable, and professional appliance repair services
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg border border-border p-6 text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason) => {
            const IconComponent = reason.icon
            return (
              <div key={reason.title} className="bg-white rounded-lg border border-border p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Commitment Section */}
        <div className="bg-secondary rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">Expert Care</h3>
              <p className="text-muted-foreground">
                Every technician undergoes rigorous training to ensure they deliver the highest standard of service.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We go the extra mile to ensure your appliances work perfectly.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-3">Honest Pricing</h3>
              <p className="text-muted-foreground">
                We believe in transparent pricing with no hidden charges or surprises in your final bill.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection />
      </main>

    </div>
  )
}
