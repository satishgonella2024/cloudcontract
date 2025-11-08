import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-40 bg-hero-gradient bg-[length:200%_200%] animate-gradient-shift text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-accent-foreground rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-foreground rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-tight animate-fade-in tracking-tight">
            Ready to <span className="bg-gradient-to-r from-accent-foreground via-accent-cyan to-accent-foreground bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">Elevate</span> Your Cloud Infrastructure?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl mb-16 opacity-95 leading-relaxed font-light animate-fade-in-up">
            Let's architect your cloud transformation and propel your enterprise to new heights with eAcroCloud's elite solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Button size="lg" variant="secondary" className="text-xl px-10 py-8 group shadow-2xl shadow-accent/30 hover:shadow-accent/60 transition-all hover:scale-110 font-bold">
              Schedule Free Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center text-primary-foreground animate-fade-in-up backdrop-blur-md bg-primary-foreground/10 p-8 rounded-3xl border-2 border-primary-foreground/30 shadow-2xl" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-foreground/20 to-accent-foreground/10 flex items-center justify-center shadow-lg">
                <Mail className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg">hello@eacrocloud.com</span>
            </div>
            <div className="flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-foreground/20 to-accent-foreground/10 flex items-center justify-center shadow-lg">
                <Phone className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg">+44 20 7946 0958</span>
            </div>
            <div className="flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-foreground/20 to-accent-foreground/10 flex items-center justify-center shadow-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="font-bold text-lg">London, UK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
