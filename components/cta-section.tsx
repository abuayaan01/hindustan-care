import { MessageCircle, Phone } from 'lucide-react'
import { Button } from './ui/button'

function CTASection() {
  return (
    <div className="bg-linear-to-r from-primary to-primary/80 rounded-lg p-12 text-center text-white">
    <h2 className="text-3xl font-bold mb-4">Need Any Service?</h2>
    <p className="text-lg mb-8 max-w-2xl mx-auto">
      Book our expert technicians today for reliable and affordable
      appliance repair services.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="bg-white text-primary hover:bg-white/90"
        asChild
      >
        <a href="tel:+917488606493" className="flex items-center">
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </a>
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-white text-white hover:bg-white/10 bg-transparent"
        asChild
      >
        <a
          href="https://wa.me/+917488606493"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp Us
        </a>
      </Button>
    </div>
  </div>
  )
}

export default CTASection