import lipBalmImage from "@/assets/lip-balm-new.jpg";
import eyeCreamImage from "@/assets/eye-cream-new.jpg";
import { Sparkles } from "lucide-react";
const products = [{
  name: "Plumping Lip Treatment",
  description: "Volumizing lip treatment with clinically-proven peptides to gradually enhance natural lip volume and provide lasting hydration.",
  image: lipBalmImage,
  size: "15ml",
  benefits: ["Gradually enhances lip volume and fullness", "Provides deep, long-lasting hydration", "Smooths and softens lip texture"]
}, {
  name: "Nourishing Eye Treatment",
  description: "Premium anti-aging eye treatment combining powerful peptides with botanical extracts to rejuvenate and restore the eye contour.",
  image: eyeCreamImage,
  size: "20ml",
  benefits: ["Reduces fine lines", "Brightens dark circles", "Firms skin"]
}];
export const ProductShowcase = () => {
  return <section className="py-20 px-4 bg-hero-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold text-foreground mb-6">Signature Duo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Discover our exclusive range of essentials. Formulated with Volufiline and Adifyline to nourish, enhance, and elevate your everyday skincare ritual.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => <div key={product.name} className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-luxury border border-luxury/20 hover:shadow-elegant transform transition-luxury hover:-translate-y-1">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-luxury-muted">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-luxury" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <span className="text-sm font-medium text-luxury bg-luxury-muted px-3 py-1 rounded-full">
                    {product.size}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground ml-4">
                    Benefits
                  </h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury"></div>
                        {benefit}
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};