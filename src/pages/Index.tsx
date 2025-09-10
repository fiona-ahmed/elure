import { HeroSection } from "@/components/HeroSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { VoluflineSection } from "@/components/VoluflineSection";
import { WaitlistForm } from "@/components/WaitlistForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div data-section="waitlist">
        <WaitlistForm />
      </div>
      <ProductShowcase />
      <VoluflineSection />
    </div>
  );
};

export default Index;