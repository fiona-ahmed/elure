import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const baseUrl = "https://script.google.com/macros/s/AKfycbzABuSPW1O1jLEVC_zWAND6qXtu6McZWI2qEC_Znt_yUfWH0v-pLJYNO6BQHm95pS6w_Q/exec";
      const params = new URLSearchParams({
        email: email.trim(),
        timestamp: new Date().toISOString(),
        source: "waitlist_form",
      });
      const url = `${baseUrl}?${params.toString()}`;

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        credentials: "omit",
        cache: "no-cache",
      });
      
      toast({
        title: "Success!",
        description: "You've been added to the waitlist.",
      });
      navigate("/waitlist-thank-you");

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-luxury border border-luxury/20">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
            Reserve Your Spot
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Get notified when we launch with exclusive early access and member benefits.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 h-14 text-base bg-background/80 border-luxury/30 focus:border-luxury rounded-xl"
              />
            </div>
            
            <Button
              type="submit"
              variant="luxury"
              size="lg"
              disabled={isSubmitting}
              className="w-full font-medium"
            >
              {isSubmitting ? "Adding you to the list..." : "Join Waitlist"}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4 opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};