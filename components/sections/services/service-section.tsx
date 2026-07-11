import Image from "next/image";
import React from "react";

function ServiceSection() {
  return (
    <section id="services" className="py-20 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert AC, refrigerator, washing machine & microwave repair services
            across Ranchi.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Air Conditioner",
              icon: "❄️",
              imgUrl: "/images/aircondition.png",
            },
            {
              name: "Refrigerator",
              icon: "🧊",
              imgUrl: "/images/refrigerator.png",
            },
            {
              name: "Washing Machine",
              icon: "🌊",
              imgUrl: "/images/washingmachine.png",
            },
            {
              name: "Microwave",
              icon: "🍽️",
              imgUrl: "/images/microwaveoven.png",
            },
            { name: "Television", icon: "📺", imgUrl: "/images/tv.png" },
            { name: "Oven", icon: "🔥", imgUrl: "/images/oven.png" },
            { name: "Water Heater", icon: "💧", imgUrl: "/images/water.png" },
            {
              name: "Dishwasher",
              icon: "🍴",
              imgUrl: "/images/dishwasher.png",
            },
          ].map((service) => (
            <div
              key={service.name}
              className="bg-secondary flex flex-col justify-end hover:bg-muted rounded-xl p-6 text-center transition-all hover:shadow-md cursor-pointer"
            >
              {service.imgUrl ? (
                <Image
                  src={service.imgUrl}
                  width={100}
                  height={100}
                  className="mx-auto "
                  alt={`${service.name} repair service in Ranchi`}
                />
              ) : (
                <p className="text-4xl mb-3">{service.icon}</p>
              )}
              <h3 className="font-semibold text-foreground mt-2">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Professional repair & maintenance
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
