import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import FeaturesSection from "@/components/features-section";
import AppScreensSection from "@/components/app-screens-section";
import CtaSection from "@/components/cta-section";
import ComingSoonSection from "@/components/coming-soon-section";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <AppScreensSection />
      <CtaSection />
      <ComingSoonSection />
      <Footer />
    </div>
  );
};

export default Index;