import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b z-50 transition-all duration-300 ${
      scrolled ? 'border-border shadow-xl shadow-primary/5' : 'border-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Cloud className="h-9 w-9 text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:bg-accent/40 transition-all duration-300 rounded-full" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
              eAcroCloud
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-foreground hover:text-accent transition-all duration-300 font-semibold text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full">
              Services
            </a>
            <a href="#benefits" className="text-foreground hover:text-accent transition-all duration-300 font-semibold text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full">
              Why Us
            </a>
            <a href="#testimonials" className="text-foreground hover:text-accent transition-all duration-300 font-semibold text-base relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all hover:after:w-full">
              Testimonials
            </a>
            <Button variant="default" size="sm" className="shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:scale-105 transition-all duration-300 font-bold px-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
