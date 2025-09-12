import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Plumping Lip Treatment",
    description: "Volumizing lip treatment with clinically-proven peptides to gradually enhance natural lip volume and provide lasting hydration.",
    image: `${import.meta.env.BASE_URL}lovable-uploads/4963e39b-9203-42e0-9b10-80f7562b2db2.png`,
    size: "15ml",
    price: "$89",
    originalPrice: "$120",
    rating: 4.8,
    reviews: 234,
    benefits: [
      "Gradually enhances lip volume and fullness",
      "Provides deep, long-lasting hydration", 
      "Smooths and softens lip texture"
    ],
    ingredients: "Volufiline, Adifyline, Hyaluronic Acid, Peptide Complex",
    inStock: true
  },
  {
    id: 2,
    name: "Nourishing Eye Treatment",
    description: "Premium anti-aging eye treatment combining powerful peptides with botanical extracts to rejuvenate and restore the eye contour.",
    image: `${import.meta.env.BASE_URL}lovable-uploads/be499a90-4643-487d-977b-8105a331515d.png`,
    size: "20ml",
    price: "$125",
    originalPrice: "$160",
    rating: 4.9,
    reviews: 187,
    benefits: [
      "Reduces appearance of fine lines and wrinkles",
      "Diminishes dark circles and puffiness",
      "Firms and tightens delicate eye area skin"
    ],
    ingredients: "Adifyline, Volufiline, Botanical Extracts",
    inStock: true
  }
];

const Shop = () => {
  const handleAddToCart = (productName: string) => {
    // For now, just show an alert - in a real app this would add to cart
    alert(`Added ${productName} to cart!`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-serif font-semibold text-foreground">elure Shop</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-luxury/5 to-accent/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Premium Korean Skincare
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive collection of scientifically-proven treatments for radiant, youthful skin.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-luxury-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl font-serif mb-2">{product.name}</CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-luxury text-luxury' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-luxury bg-luxury/10">
                      {product.size}
                    </Badge>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-semibold text-foreground">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    <Badge variant="destructive" className="text-xs">Save 26%</Badge>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-luxury flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Active Ingredients</h4>
                    <p className="text-sm text-muted-foreground">{product.ingredients}</p>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="pt-4">
                    <Button 
                      onClick={() => handleAddToCart(product.name)}
                      className="w-full gap-2"
                      size="lg"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-16 px-4 bg-gradient-to-r from-luxury/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Complete Skincare Bundle
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Get both treatments together and save even more. Perfect for a complete anti-aging routine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <span className="text-2xl font-semibold text-foreground">Bundle Price: $189</span>
            <span className="text-lg text-muted-foreground line-through">$280</span>
            <Badge variant="destructive">Save $91</Badge>
          </div>
          <Button size="lg" className="gap-2">
            <ShoppingCart className="w-5 h-5" />
            Buy Bundle Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Shop;