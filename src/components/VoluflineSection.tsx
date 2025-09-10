import { Atom, Beaker, TrendingUp } from "lucide-react";
const features = [{
  icon: Atom,
  title: "Volufiline for Lips",
  description: "Scientifically validated to enhance lip volume naturally and provide deep hydration for fuller-looking lips."
}, {
  icon: Beaker,
  title: "Adifyline for Eyes",
  description: "Advanced peptide complex that firms, rejuvenates, and reduces signs of aging around the delicate eye area."
}, {
  icon: TrendingUp,
  title: "Proven Ingredients",
  description: "Experience noticeable improvement in lip fullness and hydration within weeks of consistent use."
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
                <feature.icon className="text-primary" size={24} />
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