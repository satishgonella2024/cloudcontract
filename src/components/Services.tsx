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
    <section ref={ref} id="services" className="py-24 bg-secondary/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Cloud Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cloud consulting across all major platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border-border hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
