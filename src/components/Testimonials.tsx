import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechVenture Ltd",
    content: "eAcroCloud completely transformed our infrastructure. Their AWS migration was flawless and we're now saving 45% on cloud costs while delivering unprecedented performance.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "VP Engineering, DataFlow Systems",
    content: "The multi-cloud strategy they architected gave us unmatched flexibility and resilience. Their expertise across AWS, Azure, and GCP is truly world-class.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "IT Director, GlobalCorp UK",
    content: "eAcroCloud didn't just migrate our systems - they revolutionized our entire cloud infrastructure. Exceptional service, innovative solutions, and outstanding results.",
    rating: 5
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} id="testimonials" className="py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Client <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped enterprises achieve cloud excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-border/50 bg-gradient-to-br from-card via-card to-primary/5 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 group relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute top-4 right-4 text-accent/10 group-hover:text-accent/30 transition-all duration-300 group-hover:scale-110">
                <Quote className="h-16 w-16" />
              </div>
              <CardContent className="pt-8 relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-accent text-accent group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-foreground mb-8 text-lg leading-relaxed font-medium">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="border-t border-border/50 pt-6">
                  <div className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">{testimonial.role}</div>
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
