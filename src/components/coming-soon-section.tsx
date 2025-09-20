import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ComingSoonSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20">
      {/* Gradient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/50 to-secondary/30" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Connectee - Coming Soon!
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            A LinkedIn Networking Hub That Helps You Connect Faster
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;