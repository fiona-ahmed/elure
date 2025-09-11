import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background-warm.jpg";
import { ArrowDown } from "lucide-react";
export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.querySelector('[data-section="waitlist"]');
    waitlistSection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient">
        <img src={heroBackground} alt="Luxury skincare background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Brand Logo/Name */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-serif font-light text-foreground tracking-wider">
              elure
            </h1>
            <div className="h-px bg-luxury-gradient w-32 mx-auto"></div>
          </div>

          {/* Tagline */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">Korean Skincare</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-foreground leading-tight">
              Launching soon...
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Kiss dullness goodbye - introducing elure's plumping signature duo</p>

          {/* CTA */}
          <div className="space-y-4 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" onClick={scrollToWaitlist} className="font-semibold text-lg px-12">
                Join Exclusive Waitlist
              </Button>
              <Button variant="luxury-outline" size="lg" className="font-medium" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
            <p className="text-sm text-primary font-semibold text-center">Exclusive 25% off for waitlist members</p>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <button onClick={scrollToWaitlist} className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown size={24} className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};