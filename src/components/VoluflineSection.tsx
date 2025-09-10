import { Syringe, Ban, Check, TrendingUp } from "lucide-react";

const NoInjectionIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <div className="relative">
    <Syringe className={className} size={size * 0.7} />
    <Ban className={`absolute inset-0 ${className}`} size={size * 1.2} />
  </div>
);

const features = [{
  icon: NoInjectionIcon,
  title: "Safe Alternative",
  description: "Safe, non-invasive alternative to injectable treatments for natural enhancement"
}, {
  icon: Check,
  title: "Fast Results",
  description: "Visible results within 4-8 weeks of consistent daily application"
}, {
  icon: TrendingUp,
  title: "Proven Ingredients",
  description: "Clinically-studied peptides proven to enhance volume and skin texture"
}];
export const VoluflineSection = () => {
  return <section className="py-20 px-4 bg-luxury-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold text-foreground mb-6">Our Research Backed Formula</h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Our treatments feature clinically-proven active ingredients: Volufiline and Adifyline peptides, scientifically formulated to work synergistically for enhanced efficacy and visible results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={feature.title} className="text-center group hover:transform hover:-translate-y-2 transition-luxury">
              <div className="w-16 h-16 mx-auto mb-6 bg-luxury-gradient rounded-2xl flex items-center justify-center group-hover:shadow-luxury transition-luxury">
                <feature.icon className={feature.title === "Fast Results" ? "text-amber-700" : "text-primary"} size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>

      </div>
    </section>;
};