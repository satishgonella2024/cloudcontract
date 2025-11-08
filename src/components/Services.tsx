import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Server, Shield, Zap } from "lucide-react";

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
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Cloud Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cloud consulting across all major platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
