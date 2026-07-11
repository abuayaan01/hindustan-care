import { ChevronRight } from "lucide-react";

function HowItWorks() {
  return (
    <div>
      <section id="how-it-works" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple 4-step process to get your appliances fixed
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Book Service",
                desc: "Call, WhatsApp, or book online in minutes",
              },
              {
                step: 2,
                title: "Technician Visit",
                desc: "Expert arrives at your preferred time",
              },
              {
                step: 3,
                title: "Professional Repair",
                desc: "Quick diagnosis and efficient fixing",
              },
              {
                step: 4,
                title: "Payment",
                desc: "Hassle-free payment with service guarantee",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-secondary hover:bg-muted rounded-xl p-6 text-center transition-all h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-12 -right-4 text-primary">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
