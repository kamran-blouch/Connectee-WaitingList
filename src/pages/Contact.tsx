import { Link } from "react-router-dom";

const Contact = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">Contact</h1>
        <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up">
          Reach us at hello@connectee.app. We’ll get back to you promptly.
        </p>
      </div>
    </section>
  );
};

export default Contact;


