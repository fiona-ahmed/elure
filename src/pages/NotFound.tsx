import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-gradient px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-luxury border border-luxury/20">
          <h1 className="mb-4 text-6xl font-serif font-semibold text-foreground">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Page not found</p>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/" className="inline-flex items-center gap-2">
              <Home size={20} />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
