import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Server, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Cloud,
    title: "AWS Consulting",
    description: "Comprehensive AWS solutions from architecture design to migration and optimization. Leverage the full power of Amazon Web Services."
  },
  {
    icon: Server,
    title: "Azure Solutions",
    description: "Microsoft Azure expertise for enterprise applications. Seamless integration with your existing Microsoft ecosystem."
  },
  {
    icon: Shield,
    title: "Google Cloud",
    description: "Harness Google Cloud's innovation for data analytics, machine learning, and modern application development."
  },
  {
    icon: Zap,
    title: "Multi-Cloud Strategy",
    description: "Optimize across multiple cloud providers. Avoid vendor lock-in while maximizing performance and cost efficiency."
  }
];

const Services = () => {
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
    <section ref={ref} id="services" className="py-32 bg-gradient-to-b from-secondary/30 via-background to-secondary/30 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Elite Cloud <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            World-class multi-cloud consulting across all major platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-border/50 bg-gradient-to-br from-card via-card to-accent/5 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-3 hover:border-accent/50 group relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/30 via-primary/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent/10">
                  <service.icon className="h-10 w-10 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed text-base">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
