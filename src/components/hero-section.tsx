import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll notify you when Connectee launches.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden gradient-mesh">
      {/* Navigation Header */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-6">
          <img src="/logo-connectee.png" alt="Connectee Logo" className="h-12 w-auto object-contain" />
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="/about" className="text-muted-foreground hover:text-primary">About Us</a>
            <a href="/careers" className="text-muted-foreground hover:text-primary">Careers</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary">Contact</a>
            <a href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="bg-transparent border-border/50 text-foreground hover:bg-foreground/10"
          onClick={() => {
            const ctaSection = document.getElementById('cta-section');
            if (ctaSection) {
              ctaSection.scrollIntoView({ behavior: 'smooth' });
              // Focus on email input after scrolling
              setTimeout(() => {
                const emailInput = document.querySelector('#cta-section input[type="email"]') as HTMLInputElement;
                if (emailInput) {
                  emailInput.focus();
                }
              }, 500);
            }
          }}
        >
          Join the Waitlist
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </nav>

      {/* Dark background base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-glow" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center flex-1 flex items-center justify-center">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Featured badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-md border border-border rounded-full text-foreground text-sm mb-8 shadow-card">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium">Featured on LinkedIn</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span className="text-muted-foreground">#1 AI Engagement Tool</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            <span className="text-gradient">Connect, Comment, Convert</span>{" "}
            — with Connectee
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            AI-powered LinkedIn engagement for solopreneurs and sales teams
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-foreground">
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="font-medium">AI-First Outreach</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 bg-primary rounded-full" />
              <span className="font-medium">Smart Comment Generation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 bg-secondary rounded-full" />
              <span className="font-medium">Built For Scale</span>
            </div>
          </div>
          
          {/* CTA */}
          <Button 
            className="bg-foreground text-background hover:bg-foreground/90 px-6 py-4 h-auto text-base font-semibold rounded-2xl shadow-primary group transition-all duration-300"
            onClick={() => {
              const ctaSection = document.getElementById('cta-section');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
                // Focus on email input after scrolling
                setTimeout(() => {
                  const emailInput = document.querySelector('#cta-section input[type="email"]') as HTMLInputElement;
                  if (emailInput) {
                    emailInput.focus();
                  }
                }, 500);
              }
            }}
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;