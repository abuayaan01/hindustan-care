import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

function ContactSection() {
  return (
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
              href="tel:+919117770110"
              className="flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 9117770110
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-white text-primary hover:bg-secondary hover:text-primary border-white"
          >
            <a
              href="https://wa.me/919117770110?text=Hi%20Hindustan%20Care%2C%20I%20need%20assistance."
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
            <p>Ranchi & Nearby Areas in Jharkhand</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">Hours</p>
            <p>Monday - Sunday, 8 AM - 8 PM</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">Response Time</p>
            <p>Within 30 minutes in Ranchi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
