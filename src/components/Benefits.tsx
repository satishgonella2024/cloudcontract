import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Certified cloud architects with 10+ years experience",
  "Cost optimization strategies that reduce spending by 30-50%",
  "24/7 support and monitoring for mission-critical systems",
  "Proven migration methodologies with zero downtime",
  "Security-first approach with compliance expertise",
  "Vendor-agnostic recommendations for your specific needs"
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose CloudConsult?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We bring unparalleled expertise and a track record of successful cloud transformations across industries.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-hero-gradient p-12 rounded-2xl text-primary-foreground">
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg">Successful Migrations</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-lg">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$50M+</div>
                <div className="text-lg">In Client Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
