import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cloud.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={heroImage}
          alt="Cloud technology infrastructure"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/90 to-primary/95 bg-[length:200%_200%] animate-gradient-shift" />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-accent/30 animate-pulse-glow" />
      </div>

      {/* Floating elements - More dynamic */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-[32rem] h-[32rem] bg-primary/25 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-cyan/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/30 to-primary/30 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-accent/40 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300">
            <Sparkles className="h-5 w-5 text-accent-foreground animate-pulse" />
            <span className="text-sm font-semibold text-primary-foreground tracking-wide">Elite Cloud Innovation Partner</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-primary-foreground mb-8 leading-[1.05] tracking-tighter">
            Elevate Your Enterprise with{" "}
            <span className="bg-gradient-to-r from-accent via-accent-cyan to-accent bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
              eAcroCloud
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/95 mb-12 leading-relaxed font-light max-w-4xl">
            Harness the power of <span className="font-semibold text-accent-foreground">AWS, Azure, and Google Cloud</span> with our cutting-edge multi-cloud solutions. We architect, migrate, and optimize your infrastructure for unprecedented performance, innovation, and ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-7 group shadow-2xl shadow-accent/30 hover:shadow-accent/60 transition-all hover:scale-105 font-semibold">
              Start Your Cloud Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-7 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/15 hover:border-accent backdrop-blur-md hover:shadow-lg transition-all hover:scale-105 font-semibold">
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
