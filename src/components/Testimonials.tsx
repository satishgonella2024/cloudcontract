import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVenture Inc",
    content: "CloudConsult transformed our infrastructure. Their AWS migration was flawless and we're now saving 40% on cloud costs while improving performance.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "VP Engineering, DataFlow Systems",
    content: "The multi-cloud strategy they designed gave us the flexibility we needed. Their expertise across AWS, Azure, and GCP is truly exceptional.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "IT Director, GlobalCorp",
    content: "Professional, knowledgeable, and always available. They didn't just migrate our systems - they optimized everything. Best investment we've made.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from companies we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
