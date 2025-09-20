import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FinalCtaSection = () => {
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
      title: "You're on the list!",
      description: "We'll keep you updated on Connectee's launch.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-32 relative overflow-hidden gradient-mesh">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 bg-primary/20 blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center scroll-fade-in">
          <p className="text-muted-foreground text-lg mb-8">
            Stop wasting time outside of your LinkedIn networking.
          </p>
          
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-12 leading-tight">
            AI Agents for LinkedIn
          </h2>
          
          <div id="waitlist-form" className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 bg-card/50 backdrop-blur-sm border-border text-foreground placeholder:text-muted-foreground rounded-2xl text-lg focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-foreground text-background hover:bg-foreground/90 px-8 h-14 text-lg font-semibold rounded-2xl shadow-primary group transition-all duration-300"
                >
                  {isSubmitting ? "Joining..." : "Join the Waitlist"}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;