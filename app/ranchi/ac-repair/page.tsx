import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Shield, Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AC Repair Ranchi | AC Service Ranchi | AC Installation Ranchi | Hindustan Care",
  description:
    "Hindustan Care provides professional AC repair in Ranchi. Same day AC service in Ranchi including AC installation, AC gas filling, AC maintenance and AC repair across Lalpur, Harmu, Kanke, Doranda and all Ranchi areas.",
  keywords: [
    "ac repair ranchi",
    "ac service ranchi",
    "ac technician ranchi",
    "ac installation ranchi",
    "ac gas filling ranchi",
    "split ac repair ranchi",
    "window ac repair ranchi",
    "ac maintenance ranchi",
  ],
};

const phone = "+919117770110";
const whatsapp = "https://wa.me/919117770110";

const serviceAreas = [
  "Kadru",
  "Ashok Nagar",
  "Sail City",
  "Masibari",
  "Kantatoli",
  "Lalpur",
  "Booty More",
  "Tangar",
  "Itki",
  "Kanke",
  "Harmu",
  "Khunti",
  "Kokar",
  "Argora",
  "Pundag",
  "Bariatu",
  "Doranda",
  "Ormanjhi",
  "Morabadi",
  "Tatisilwai",
  "Ratu",
  "Dhurwa",
  "Jamshedpur",
  "Ranchi & Nearby Areas",
];

const brands = [
  "Daikin",
  "LG",
  "Samsung",
  "Voltas",
  "Blue Star",
  "Hitachi",
  "Godrej",
  "Carrier",
  "Panasonic",
  "Haier",
  "Whirlpool",
  "IFB",
];

const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Best AC repair in Ranchi. Technician fixed my AC cooling issue quickly.",
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "Professional AC service in Ranchi. My AC gas filling and servicing was done perfectly.",
  },
  {
    name: "Amit Sharma",
    rating: 5,
    text: "Very reliable AC technician in Ranchi. Highly recommended.",
  },
  {
    name: "Eco Mind",
    rating: 4,
    text: "Quick response and honest work. Problem solved efficiently at reasonable charges. Totally satisfied. Best service provider in Ranchi 👍🏻",
  },
  {
    name: "Nikhat Sayyed",
    rating: 5,
    text: "Hindustan Care is the best fridge service centre in Ranchi. Very professional",
  },
  {
    name: "Juhi Chaurasia",
    rating: 5,
    text: "Hindustan Care is the best service centre in Ranchi. Very fast and professional. Washing machine working like a new.",
  },
  {
    name: "Ajay Pradhan",
    rating: 5,
    text: "Nice service.",
  },
  {
    name: "Md Sharique",
    rating: 5,
    text: "They serviced my heater, washing machine, and geyser at a very reasonable price.",
  },
  {
    name: "Abu Ayaan",
    rating: 5,
    text: "Good technician, my ac is working good.",
  },
];

const faqs = [
  {
    q: "Do you provide AC repair in Ranchi?",
    a: "Yes Hindustan Care provides AC repair in Ranchi for split AC, window AC and inverter AC.",
  },

  {
    q: "How much does AC service cost in Ranchi?",
    a: "AC service in Ranchi usually starts from ₹399 depending on the issue.",
  },

  {
    q: "Do you repair split AC in Ranchi?",
    a: "Yes we repair split AC in Ranchi for all major brands.",
  },

  {
    q: "Do you repair window AC in Ranchi?",
    a: "Yes we provide window AC repair in Ranchi.",
  },

  {
    q: "Do you provide AC gas filling in Ranchi?",
    a: "Yes we provide AC gas refill service in Ranchi.",
  },

  {
    q: "How long does AC repair take?",
    a: "Most AC repairs in Ranchi take 30-90 minutes.",
  },

  {
    q: "Do you repair inverter AC in Ranchi?",
    a: "Yes our technicians repair inverter AC in Ranchi.",
  },

  {
    q: "Do you provide AC installation in Ranchi?",
    a: "Yes we provide AC installation in Ranchi for split and window AC.",
  },

  {
    q: "Do you provide AC maintenance in Ranchi?",
    a: "Yes we provide regular AC maintenance in Ranchi.",
  },

  {
    q: "Which AC brands do you repair in Ranchi?",
    a: "We repair LG, Samsung, Daikin, Voltas, Blue Star and all major AC brands.",
  },

  // add more variations

  {
    q: "Do you repair AC compressor?",
    a: "Yes we repair AC compressor issues in Ranchi.",
  },

  {
    q: "Do you fix AC not cooling?",
    a: "Yes we fix AC cooling problems in Ranchi.",
  },

  {
    q: "Do you fix AC water leakage?",
    a: "Yes we repair AC water leakage issues.",
  },

  {
    q: "Do you provide AC cleaning in Ranchi?",
    a: "Yes we provide AC deep cleaning service in Ranchi.",
  },

  {
    q: "Do you provide AC service near me in Ranchi?",
    a: "Yes we provide AC service across all Ranchi areas.",
  },

  {
    q: "Do you service AC in Lalpur Ranchi?",
    a: "Yes we provide AC repair in Lalpur Ranchi.",
  },

  {
    q: "Do you service AC in Harmu Ranchi?",
    a: "Yes we provide AC service in Harmu Ranchi.",
  },

  {
    q: "Do you service AC in Kanke Ranchi?",
    a: "Yes we provide AC repair in Kanke Ranchi.",
  },

  {
    q: "Do you service AC in Doranda Ranchi?",
    a: "Yes we provide AC service in Doranda Ranchi.",
  },

  {
    q: "Do you provide emergency AC repair?",
    a: "Yes we provide emergency AC repair in Ranchi.",
  },

  {
    q: "Do you provide AC technician at home?",
    a: "Yes our AC technicians visit your home.",
  },

  {
    q: "Do you repair commercial AC?",
    a: "Yes we repair commercial AC systems.",
  },

  {
    q: "Do you repair office AC?",
    a: "Yes we provide office AC repair services.",
  },

  {
    q: "Do you provide AC AMC service?",
    a: "Yes we offer annual AC maintenance contracts.",
  },

  {
    q: "Do you provide AC inspection?",
    a: "Yes we inspect AC cooling problems.",
  },

  {
    q: "Do you repair AC fan issues?",
    a: "Yes we repair AC fan motor issues.",
  },

  {
    q: "Do you repair AC PCB issues?",
    a: "Yes we repair AC PCB board problems.",
  },

  {
    q: "Do you repair AC remote issues?",
    a: "Yes we fix AC remote and sensor issues.",
  },

  {
    q: "Do you repair AC noise issues?",
    a: "Yes we fix AC noise problems.",
  },

  {
    q: "Do you repair AC thermostat issues?",
    a: "Yes we repair thermostat problems.",
  },

  {
    q: "Do you provide AC duct cleaning?",
    a: "Yes we provide AC duct cleaning service.",
  },

  {
    q: "Do you provide AC relocation?",
    a: "Yes we relocate AC units safely.",
  },

  {
    q: "Do you install new AC units?",
    a: "Yes we install new air conditioners.",
  },

  {
    q: "Do you uninstall AC units?",
    a: "Yes we uninstall AC units safely.",
  },

  {
    q: "Do you provide AC service for apartments?",
    a: "Yes we service AC in apartments.",
  },

  {
    q: "Do you provide AC service for offices?",
    a: "Yes we service AC in office buildings.",
  },

  {
    q: "Do you provide AC service for shops?",
    a: "Yes we repair AC in retail stores.",
  },

  {
    q: "Do you repair AC capacitor issues?",
    a: "Yes we repair capacitor failures.",
  },

  {
    q: "Do you repair AC gas leakage?",
    a: "Yes we repair refrigerant leaks.",
  },

  {
    q: "Do you repair AC sensor issues?",
    a: "Yes we repair AC temperature sensors.",
  },

  {
    q: "Do you repair AC compressor relay?",
    a: "Yes we repair compressor relay faults.",
  },

  {
    q: "Do you provide AC inspection before summer?",
    a: "Yes we provide seasonal AC inspection.",
  },

  {
    q: "Do you provide AC cleaning before summer?",
    a: "Yes we recommend cleaning before summer.",
  },

  {
    q: "Do you provide AC maintenance contracts?",
    a: "Yes we offer AMC for AC service.",
  },

  {
    q: "Do you provide AC repair warranty?",
    a: "Yes we provide warranty on repairs.",
  },

  {
    q: "Do you repair AC electrical issues?",
    a: "Yes we repair AC electrical faults.",
  },

  {
    q: "Do you repair AC cooling coil issues?",
    a: "Yes we repair evaporator coil problems.",
  },

  {
    q: "Do you repair AC outdoor unit?",
    a: "Yes we repair AC outdoor unit issues.",
  },

  {
    q: "Do you repair AC indoor unit?",
    a: "Yes we repair indoor unit problems.",
  },

  {
    q: "Do you repair AC drainage problems?",
    a: "Yes we repair AC water drainage issues.",
  },

  {
    q: "Do you repair AC airflow problems?",
    a: "Yes we repair airflow issues.",
  },
];

export default function ACServiceRanchi() {
  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Hindustan Care",
            url: "https://www.hindustancare.in/ranchi/ac-repair",
            telephone: "+919117770110",
            areaServed: "Ranchi",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ranchi",
              addressRegion: "Jharkhand",
              postalCode: "834001",
              addressCountry: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "57",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-linear-to-b from-secondary to-background py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-semibold">
                Professional AC Service in Ranchi
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              AC Service & Repair in Ranchi, Jharkhand
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              Get expert AC repair and AC service in Ranchi from certified
              technicians. We provide same-day AC service, maintenance,
              installation, and repair for all AC brands in Ranchi. Call our AC
              service center in Ranchi now for reliable AC solutions.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button asChild size="lg">
                <a href={`tel:${phone}`}>Call Now</a>
              </Button>

              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90"
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxUe06nbktS-tsgtbIo9NTuJ4bk8jAuiUdaW3DQ7RZm1AgGg/viewform?usp=header">
                  Book Service Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12 md:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">
                AC Service Reviews in Ranchi
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4.8★</p>
              <p className="text-sm text-muted-foreground">
                AC Repair Rating in Ranchi
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">
                AC Service in Ranchi Available
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">1-2 Hrs</p>
              <p className="text-sm text-muted-foreground">
                AC Service Response in Ranchi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AC Service Types in Ranchi */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            AC Services We Offer in Ranchi
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                AC Repair in Ranchi
              </h3>
              <p className="text-muted-foreground mb-4">
                Our AC repair service in Ranchi handles all types of AC
                problems. Whether your AC is not cooling, making noise, or
                leaking water, our AC technicians in Ranchi provide quick and
                reliable repair. We diagnose AC issues in Ranchi and fix them
                using genuine parts.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ AC compressor repair in Ranchi</li>
                <li>✓ AC refrigerant filling in Ranchi</li>
                <li>✓ AC capacitor replacement in Ranchi</li>
                <li>✓ AC electrical issues in Ranchi</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                AC Maintenance in Ranchi
              </h3>
              <p className="text-muted-foreground mb-4">
                Regular AC maintenance in Ranchi prevents breakdowns and
                improves cooling efficiency. Our AC service package in Ranchi
                includes cleaning, filter replacement, and performance check.
                Schedule monthly AC service in Ranchi to keep your AC running
                smoothly.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ AC cleaning service in Ranchi</li>
                <li>✓ AC filter replacement in Ranchi</li>
                <li>✓ AC coil washing in Ranchi</li>
                <li>✓ AC gas refill in Ranchi</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                AC Installation in Ranchi
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional AC installation service in Ranchi for all brands.
                Our AC installation experts in Ranchi ensure proper positioning,
                electrical connections, and ventilation. Get your new AC
                installed in Ranchi safely and efficiently.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ AC unit installation in Ranchi</li>
                <li>✓ AC ductwork in Ranchi</li>
                <li>✓ AC electrical setup in Ranchi</li>
                <li>✓ AC warranty registration in Ranchi</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                AC Uninstallation in Ranchi
              </h3>
              <p className="text-muted-foreground mb-4">
                Need to remove or relocate your AC in Ranchi? Our AC
                uninstallation service in Ranchi is safe and professional. We
                carefully disconnect your AC unit for resale, recycling, or
                relocation within Ranchi.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ AC uninstallation in Ranchi</li>
                <li>✓ AC relocation service in Ranchi</li>
                <li>✓ AC gas recovery in Ranchi</li>
                <li>✓ Safe AC removal in Ranchi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}

      <section className="max-w-5xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Professional AC Repair Ranchi
        </h2>

        <p className="mb-4">
          If you are searching for professional AC repair in Ranchi, Hindustan
          Care provides reliable AC service in Ranchi with certified AC
          technicians. Our AC repair Ranchi services include split AC repair,
          window AC repair, inverter AC repair and commercial AC service in
          Ranchi.
        </p>

        <p className="mb-4">
          We provide AC repair and AC service in Ranchi across Lalpur, Harmu,
          Bariatu, Kokar, Morabadi, Doranda and Kanke. Customers choose our AC
          repair Ranchi service because we provide fast AC repair with genuine
          parts and affordable pricing.
        </p>

        <p>
          Whether your AC is not cooling, leaking water, making noise or not
          turning on, our AC technician in Ranchi can diagnose the problem and
          provide quick AC repair and AC service in Ranchi.
        </p>
      </section>

      {/* Why Choose Our AC Service in Ranchi */}
      <section className="py-16 md:py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose Our AC Service in Ranchi?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Certified AC Technicians
                </h3>
                <p className="text-muted-foreground text-sm">
                  All our AC service professionals in Ranchi are certified and
                  trained in AC repair and installation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Same-Day AC Service
                </h3>
                <p className="text-muted-foreground text-sm">
                  Get AC repair and service in Ranchi on the same day. Our AC
                  technicians respond within 1-2 hours in Ranchi.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  All Areas of Ranchi
                </h3>
                <p className="text-muted-foreground text-sm">
                  We provide AC service across all localities and areas of
                  Ranchi city and suburbs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Star className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  Genuine Parts
                </h3>
                <p className="text-muted-foreground text-sm">
                  All AC repair parts used in our service are genuine and come
                  with warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="border bg-white p-6 rounded">
                <div className="flex mb-2">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm">{r.text}</p>

                <p className="text-xs mt-3 text-muted-foreground">
                  {r.name} - Ranchi
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC Service Areas in Ranchi */}
      <section className="py-16 md:py-24 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            AC Service Coverage Areas in Ranchi
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We provide comprehensive AC repair, AC service, and AC maintenance
            across all areas of Ranchi. Whether you're in central Ranchi or
            suburbs, our AC technicians can reach you quickly.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 bg-secondary rounded-lg"
              >
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground text-sm font-medium">
                  {area} - AC Service Available
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            AC Brands We Repair in Ranchi
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((b, i) => (
              <div key={i} className="border p-4 rounded text-center">
                {b} AC Repair Ranchi
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Need AC Repair or Service in Ranchi?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our AC service center in Ranchi today for professional AC
            repair, maintenance, and installation. Book your AC service
            appointment now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90"
            >
              <a href="/contact">Book AC Service in Ranchi Now</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+919117770110">
                <Phone className="w-5 h-5 mr-2" />
                Call Our AC Service Team
              </a>
            </Button>
          </div>

          <section className="py-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0171724732613!2d85.31593977768493!3d23.35139240397305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7e5675b65b875df%3A0x9be161e925f32c30!2sHindustan%20Care%20-%20Appliance%20Repair%20Service!5e0!3m2!1sen!2sin!4v1773453773602!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </section>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>

          {faqs.map((faq, i) => (
            <details key={i} className="border rounded mb-4 p-4">
              <summary className="font-semibold cursor-pointer">
                {faq.q}
              </summary>

              <p className="mt-2 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
