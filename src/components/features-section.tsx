import { MessageSquare, Users, BarChart3, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Users,
    title: "AI Outreach",
    description: "Automate personalized follow-ups and connection requests using recipient's About and Experience sections.",
    size: "large"
  },
  {
    icon: MessageSquare,
    title: "AI Comment Generation", 
    description: "Generate high-quality, relevant comments instantly, tailored to your unique tone and style.",
    size: "small"
  },
  {
    icon: PenTool,
    title: "AI Post Creation",
    description: "Generate LinkedIn post alternatives inspired by competitor content using your own context.",
    size: "small"
  },
  {
    icon: BarChart3,
    title: "Competitor Post Analyzer",
    description: "Analyze competitor posts for engagement trends and discover top-performing content in your industry.",
    size: "medium"
  },
  
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Features for{" "}
              <span className="text-gradient">LinkedIn Success</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to automate and optimize your LinkedIn presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-min">
            {features.map((feature, index) => (
              <Link 
                key={index}
                className={`
                  group p-6 bg-gray-900/50 border border-teal-500/20 rounded-2xl 
                  hover:border-teal-400/40 transition-all duration-700 
                  backdrop-blur-sm relative overflow-hidden flex flex-col
                  ${feature.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}
                  ${feature.size === 'medium' ? 'lg:col-span-2' : ''}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
                to={
                  feature.title === 'AI Outreach' ? '/ai-outreach' :
                  feature.title === 'AI Comment Generation' ? '/comment-generation' :
                  feature.title === 'Competitor Post Analyzer' ? '/competitor-analysis' :
                  feature.title === 'AI Post Creation' ? '/post-creation' : '#'
                }
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg border border-teal-500/30 flex items-center justify-center mb-4 group-hover:border-teal-400/50 transition-colors">
                      <feature.icon className="h-6 w-6 text-teal-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <div className="w-20 h-20 border border-teal-500/20 rounded-full" />
                  </div>
                  <div className="absolute bottom-4 right-6 opacity-10">
                    <div className="w-8 h-8 border border-teal-500/30 rotate-45" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;