import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Cloud className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">CloudConsult</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#benefits" className="text-foreground hover:text-accent transition-colors">
              Why Us
            </a>
            <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">
              Testimonials
            </a>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
