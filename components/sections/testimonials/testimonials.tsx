import { Star } from "lucide-react";

function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-linear-to-b from-secondary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Customer Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our happy customers say about us
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Rajesh Kumar",
              city: "Ranchi",
              feedback:
                "Excellent service! Technician was professional and fixed my AC within an hour. Highly recommended.",
              rating: 5,
            },
            {
              name: "Priya Sharma",
              city: "Ranchi",
              feedback:
                "Very transparent pricing and no hidden charges. My refrigerator is working perfectly now. Great value!",
              rating: 5,
            },
            {
              name: "Amit Patel",
              city: "Ranchi",
              feedback:
                "Same-day service was amazing! They arrived exactly on time and fixed my washing machine beautifully.",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4">{testimonial.feedback}</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
