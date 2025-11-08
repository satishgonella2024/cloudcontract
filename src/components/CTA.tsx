import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Cloud Infrastructure?
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Let's discuss how we can optimize your cloud strategy and drive your business forward.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="secondary" className="text-lg group">
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-primary-foreground/90">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>contact@cloudconsult.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
