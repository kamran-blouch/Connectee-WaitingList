const appScreens = [
  { src: "/linkedin-ai-comments.png", alt: "LinkedIn AI Comments" },
  { src: "/competitor-analysis.png", alt: "Competitor Analysis" },
  { src: "/create-alternative-post.png", alt: "Create Alternative Post" },
  { src: "/ai-outreach-generator.png", alt: "AI Outreach Generator" },
];

export default function AppScreensSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gradient">
          See Connectee in Action
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {appScreens.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-card">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
