
import { Link } from "react-router-dom";
import { Bike, Camera, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-forest-900 text-white py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bike className="h-5 w-5 text-forest-300" />
            <span className="text-lg font-heading font-bold">TrailTales</span>
          </div>
          <p className="text-forest-200 text-sm">
            Chronicling adventures on two wheels, one trail at a time. Join us as we explore the world's most beautiful bikepacking routes.
          </p>
        </div>
        
        <div>
          <h3 className="font-heading text-forest-300 mb-4">Explore</h3>
          <div className="grid gap-2">
            <Link to="/" className="text-forest-100 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link to="/posts" className="text-forest-100 hover:text-white transition-colors text-sm">
              Journal
            </Link>
            <Link to="/routes" className="text-forest-100 hover:text-white transition-colors text-sm">
              Routes
            </Link>
            <Link to="/about" className="text-forest-100 hover:text-white transition-colors text-sm">
              About
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="font-heading text-forest-300 mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="text-forest-100 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-forest-100 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-forest-100 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-forest-100 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Currently riding: Great Divide Mountain Bike Route</span>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 pt-6 border-t border-forest-800 text-sm text-forest-400">
        <p>&copy; {currentYear} TrailTales. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
