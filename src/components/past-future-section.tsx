import { Clock, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PastFutureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without Connectee */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-card/50 border border-border/50 rounded-3xl p-12 h-full backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-foreground mb-4">Without Connectee</h3>
              <p className="text-muted-foreground mb-8 text-lg">The slow grind of manual LinkedIn</p>
              <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
                <div className="flex items-center gap-4 text-foreground font-mono">
                  <Clock className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                  <span className="text-lg">Hours Crafting Each Comment, Guessing What Posts Work, Manual Follow-Up Hell</span>
                </div>
              </div>
            </div>
          </div>

          {/* With Connectee */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl p-12 h-full backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-foreground mb-4">With Connectee</h3>
              <p className="text-muted-foreground mb-8 text-lg">Fast, unified, AI-powered</p>
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 text-foreground font-mono">
                  <Brain className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-lg">AI Handles Your Comments, Data Shows What Works, Focus On Building Relationships</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastFutureSection;