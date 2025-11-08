import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-xl md:text-2xl mb-14 opacity-90 leading-relaxed font-light animate-fade-in-up">
            Let's discuss how we can optimize your cloud strategy and drive your business forward with our UK-based expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-primary-foreground/90 animate-fade-in-up backdrop-blur-sm bg-primary-foreground/5 p-6 rounded-2xl border border-primary-foreground/20" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <span className="font-medium">hello@cloudconsult.co.uk</span>
            </div>
            <div className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <span className="font-medium">+44 20 7946 0958</span>
            </div>
            <div className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="font-medium">London, UK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
