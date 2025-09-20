import { MessageSquare, Users, BarChart3, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "One Inbox",
    description: "Just connect your LinkedIn, for a personalized networking homepage.",
    gradient: "gradient-primary"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Actions",
    description: "From crafting messages to analyzing engagement, our agentic workflows have you covered.",
    gradient: "gradient-secondary"
  },
  {
    icon: BarChart3,
    title: "Unified LinkedIn View",
    description: "All your networking tasks, connections, and analytics connected in one central hub.",
    gradient: "gradient-primary"
  }
];

const FeaturesShowcase = () => {
  return (
    <section className="py-32 gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 scroll-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Designed for{" "}
              <span className="text-gradient">Professionals</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Blow through your personal LinkedIn networking tasks
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group p-8 bg-card/30 backdrop-blur-sm border border-border rounded-3xl shadow-card hover:shadow-glow transition-all duration-500 scroll-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <div className={`inline-flex p-4 ${feature.gradient} rounded-2xl shadow-primary group-hover:shadow-glow transition-all duration-300`}>
                    <feature.icon className="h-8 w-8 text-background" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;