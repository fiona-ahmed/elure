import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy, Share2, Gift } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-background-warm.jpg";

const WaitlistThankYou = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const shareUrl = "https://elure.lovable.app";
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "Share it with friends to earn rewards",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Luxury skincare background" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto space-y-8">
          
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-luxury/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-luxury/30">
              <Check size={40} className="text-luxury" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-foreground tracking-wide">
              Yay, you're on the waitlist!
            </h1>
            <div className="h-px bg-luxury-gradient w-24 mx-auto"></div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Welcome to the exclusive elure family. You'll be the first to experience our luxury Korean skincare collection.
            </p>
            <p className="text-lg text-muted-foreground">
              Watch your inbox for early access and your exclusive 25% discount.
            </p>
          </div>

          {/* Share Section */}
          <Card className="bg-card/80 backdrop-blur-sm border-luxury/20 p-8 shadow-luxury">
            <div className="space-y-6">
              {/* Share Header */}
              <div className="flex items-center justify-center gap-3">
                <Gift className="text-luxury" size={24} />
                <h2 className="text-2xl font-serif font-medium text-foreground">
                  Share Waitlist for More Rewards
                </h2>
              </div>
              
              <p className="text-muted-foreground">
                Refer friends to unlock additional perks and early access benefits
              </p>

              {/* Copy Link Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg border border-luxury/20">
                  <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="flex-1 bg-transparent text-sm text-muted-foreground border-none outline-none"
                  />
                  <Button
                    onClick={handleCopyLink}
                    variant="luxury-outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
                
                <Button
                  onClick={handleCopyLink}
                  variant="hero"
                  size="lg"
                  className="w-full font-semibold flex items-center gap-2"
                >
                  <Share2 size={20} />
                  Share with Friends
                </Button>
              </div>
            </div>
          </Card>

          {/* Back to Home */}
          <div className="pt-4">
            <Button variant="luxury-outline" size="lg" asChild>
              <a href="/" className="font-medium">
                Back to elure
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistThankYou;