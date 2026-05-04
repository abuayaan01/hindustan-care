import Link from "next/link";

export default function ServicesSection() {
  const services = [
    { name: "AC Repair in Ranchi", href: "/ranchi/ac-repair" },
    // {
    //   name: "Refrigerator Repair in Ranchi",
    //   href: "/ranchi/refrigerator-repair",
    // },
    // {
    //   name: "Washing Machine Repair in Ranchi",
    //   href: "/ranchi/washing-machine-repair",
    // },
    // {
    //   name: "Microwave Oven Repair in Ranchi",
    //   href: "/ranchi/microwave-repair",
    // },
    // { name: "RO Water Purifier Repair in Ranchi", href: "/ranchi/ro-repair" },
    // { name: "Geyser Repair in Ranchi", href: "/ranchi/geyser-repair" },
    // { name: "LED TV Repair in Ranchi", href: "/ranchi/tv-repair" },
    // { name: "Chimney Repair in Ranchi", href: "/ranchi/chimney-repair" },
  ];

  return (
    <section className="pt-12 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Also Explore Our Services
        </h2>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-500 justify-center">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="hover:text-blue-600 underline transition-colors duration-200"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
