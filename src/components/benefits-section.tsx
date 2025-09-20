import { Clock, Target, TrendingUp, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Stop Wasting Time on Manual LinkedIn Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your LinkedIn strategy from time-consuming manual work to intelligent automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Without Connectee */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}> 
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-secondary mb-4">Without Connectee</h3>
                <p className="text-muted-foreground mb-8">
                  Manual, time-consuming, and ineffective
                </p>
              </div>
              <div className="p-8 bg-destructive/5 border border-destructive/20 rounded-xl space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-destructive h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-foreground">Hours of Manual Commenting:</span>
                  <span className="text-muted-foreground">Spending endless time thinking up relevant comments for every post</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-destructive h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-foreground">Guessing What Works:</span>
                  <span className="text-muted-foreground">No insights into competitor strategies or trending content</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-destructive h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-foreground">Generic Follow-ups:</span>
                  <span className="text-muted-foreground">Mass sending the same connection requests and messages</span>
                </div>
              </div>
            </div>
            {/* With Connectee */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}> 
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-4">With Connectee</h3>
                <p className="text-muted-foreground mb-8">
                  Intelligent, automated, and highly effective
                </p>
              </div>
              <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl space-y-6 shadow-subtle">
                <div className="flex items-center gap-3">
                  <Zap className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-foreground">AI-Powered Comments:</span>
                  <span className="text-muted-foreground">Generate high-quality, relevant comments instantly in your unique voice</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-foreground">Competitor Intelligence:</span>
                  <span className="text-muted-foreground">Analyze what's working in your industry with detailed engagement insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="font-semibold text-foreground">Personalized Outreach:</span>
                  <span className="text-muted-foreground">Custom icebreakers using recipient's experience and interests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;