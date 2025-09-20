import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg" />
                <span className="text-xl font-bold text-foreground">CONNECTEE</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Connectee is an agentic LinkedIn networking tool that automates your outreach, 
                engagement, and relationship building across all your professional connections.
              </p>
            </div>
            
            {/* Use Cases */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Use Cases</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Outreach</li>
                <li>Comment Generation</li>
                <li>Competitor Analysis</li>
                <li>Post Creation</li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2025 StarSling. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;