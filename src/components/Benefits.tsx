import { CheckCircle2 } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { useEffect, useRef, useState } from "react";

const benefits = [
  "Certified cloud architects with 10+ years experience",
  "Cost optimization strategies that reduce spending by 30-50%",
  "24/7 support and monitoring for mission-critical systems",
  "Proven migration methodologies with zero downtime",
  "Security-first approach with compliance expertise",
  "Vendor-agnostic recommendations for your specific needs"
];

const Benefits = () => {
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
    <section ref={ref} id="benefits" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Why Choose eAcroCloud?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We deliver unparalleled expertise and a proven track record of transformative cloud solutions across industries worldwide.
            </p>
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-foreground text-lg leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-hero-gradient p-12 rounded-3xl text-primary-foreground shadow-2xl relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground rounded-full blur-2xl animate-pulse-glow" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-foreground rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>
              
              <div className="space-y-10 relative z-10">
                <div className="border-b border-primary-foreground/20 pb-8">
                  <AnimatedCounter end={500} suffix="+" />
                  <div className="text-lg mt-2 text-primary-foreground/90 font-light">Successful Migrations</div>
                </div>
                <div className="border-b border-primary-foreground/20 pb-8">
                  <AnimatedCounter end={98} suffix="%" />
                  <div className="text-lg mt-2 text-primary-foreground/90 font-light">Client Satisfaction Rate</div>
                </div>
                <div>
                  <AnimatedCounter end={50} prefix="£" suffix="M+" />
                  <div className="text-lg mt-2 text-primary-foreground/90 font-light">In Client Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
