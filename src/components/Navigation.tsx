
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bike, Map, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <Bike className="h-6 w-6 text-forest-600" />
          <span className="text-lg font-heading font-bold">TrailTales</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-forest-600 transition-colors">
            Home
          </Link>
          <Link to="/posts" className="text-foreground hover:text-forest-600 transition-colors">
            Journal
          </Link>
          <Link to="/routes" className="text-foreground hover:text-forest-600 transition-colors">
            Routes
          </Link>
          <Link to="/about" className="text-foreground hover:text-forest-600 transition-colors">
            About
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${isMobileMenuOpen ? "hidden" : "block"}`}
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${isMobileMenuOpen ? "block" : "hidden"}`}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "max-h-60" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="container py-4 flex flex-col gap-4">
          <Link
            to="/"
            className="text-foreground hover:text-forest-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/posts"
            className="text-foreground hover:text-forest-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Journal
          </Link>
          <Link
            to="/routes"
            className="text-foreground hover:text-forest-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Routes
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-forest-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
