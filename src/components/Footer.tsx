import { Cloud } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="h-8 w-8" />
              <span className="text-xl font-bold">CloudConsult</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Expert multi-cloud consulting services to help businesses leverage the full potential of AWS, Azure, and Google Cloud.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>AWS Consulting</li>
              <li>Azure Solutions</li>
              <li>Google Cloud</li>
              <li>Cloud Migration</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 CloudConsult. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
