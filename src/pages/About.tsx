import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="relative min-h-screen gradient-mesh">
      <nav className="relative z-20 flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-6">
          <Link to="/" aria-label="Go to home">
            <img src="/logo-connectee.png" alt="Connectee Logo" className="h-12 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
            <Link to="/careers" className="text-muted-foreground hover:text-primary">Careers</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </nav>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-30" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-glow" />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            We’re building AI-powered tools to help professionals connect, comment, and convert on LinkedIn.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {[
            { src: "/ai-outreach-generator.png", title: "Our Mission", lines: ["Authentic connections at scale.", "Reduce manual effort.", "Respect personal tone.", "Drive meaningful outcomes."] },
            { src: "/linkedin-ai-comments.png", title: "What We Build", lines: ["AI-assisted comments.", "On-brand post drafts.", "Smart tone presets.", "Fast iteration."] },
            { src: "/competitor-analysis.png", title: "How We Help", lines: ["Analyze competitors.", "Spot trends fast.", "Find winning topics.", "Plan content."] },
            { src: "/create-alternative-post.png", title: "The Vision", lines: ["Agentic workflows.", "End-to-end automation.", "Insight-driven actions.", "Ethical by design."] },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-6 bg-gray-900/50 border border-teal-500/20 rounded-2xl hover:border-teal-400/40 transition-all duration-700 backdrop-blur-sm relative overflow-hidden min-h-72 animate-fade-in-up"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden ring-1 ring-teal-500/30 shadow-subtle">
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{item.title}</h3>
                <ul className="text-gray-400 text-sm leading-relaxed space-y-1 flex-1">
                  {item.lines.map((line, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400/70" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


