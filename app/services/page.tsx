import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Zap, Home } from "lucide-react";
import Image from "next/image";
import CTASection from "@/components/cta-section";

export default function ServicesPage() {
  const services = [
    {
      name: "Air Conditioner",
      icon: "❄️",
      imgUrl: "/images/aircondition.png",
      description:
        "Professional AC repair, maintenance, and installation services including split units, window ACs, and central cooling systems.",
      details: [
        "Repair & Maintenance",
        "Gas Refilling",
        "PCB Repair",
        "Compressor Replacement",
      ],
    },
    {
      name: "Refrigerator",
      icon: "🧊",
      imgUrl: "/images/refrigerator.png",
      description:
        "Complete refrigerator repair solutions covering cooling issues, ice maker problems, and electrical repairs.",
      details: [
        "Temperature Control Issues",
        "Compressor Repair",
        "Door Seal Replacement",
        "Water Leakage Fixes",
      ],
    },
    {
      name: "Washing Machine",
      icon: "🌊",
      imgUrl: "/images/washingmachine.png",
      description:
        "Expert washing machine servicing for both front-load and top-load models with genuine spare parts.",
      details: [
        "Drum Replacement",
        "Motor Repair",
        "Water Inlet Issues",
        "Drainage Problems",
      ],
    },
    {
      name: "Microwave Oven",
      icon: "🔥",
      imgUrl: "/images/microwaveoven.png",
      description:
        "Specialized microwave repair including magnetron replacement and electrical component fixes.",
      details: [
        "Heating Issues",
        "Display Problems",
        "Turntable Repair",
        "Door Lock Service",
      ],
    },
    {
      name: "Dishwasher",
      icon: "🍽️",
      imgUrl: "/images/dishwasher.png",
      description:
        "Professional dishwasher maintenance and repair services with quick turnaround times.",
      details: [
        "Spray Arm Repair",
        "Filter Cleaning",
        "Pump Issues",
        "Electrical Diagnostics",
      ],
    },
    {
      name: "Water Heater",
      icon: "🌡️",
      imgUrl: "/images/water.png",
      description:
        "Comprehensive water heater services including both electric and gas variants.",
      details: [
        "Thermostat Repair",
        "Element Replacement",
        "Temperature Adjustment",
        "Leak Fixes",
      ],
    },
    {
      name: "Television",
      icon: "📺",
      imgUrl: "/images/tv.png",
      description:
        "TV repair services for LCD, LED, and other formats with expert technician support.",
      details: [
        "Screen Repair",
        "Power Issues",
        "Audio Problems",
        "Software Updates",
      ],
    },
    {
      name: "Oven & Cooktop",
      icon: "🍳",
      imgUrl: "/images/oven.png",
      description:
        "Kitchen appliance repairs for ovens, cooktops, and related gas and electrical equipment.",
      details: [
        "Heating Element Repair",
        "Gas Leakage Fix",
        "Ignition Issues",
        "Thermostat Service",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive repair and maintenance services for all major home
            appliances
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg border border-border p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">
                {service.imgUrl ? (
                  <Image
                    src={service.imgUrl}
                    width={100}
                    height={100}
                    className=""
                    alt="hindustancare"
                  />
                ) : (
                  <p className="text-4xl mb-3">{service.icon}</p>
                )}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm text-foreground flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
       <CTASection />
      </main>
    </div>
  );
}
