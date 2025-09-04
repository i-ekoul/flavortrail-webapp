import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
              <div className="h-14 w-14 bg-gradient-to-br from-flavor-spice to-flavor-berry rounded-xl flex items-center justify-center">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">FlavorTrail</span>
                <span className="text-sm text-white/70">Cook. Curiously.</span>
              </div>
            </Link>
            <p className="text-white/70">
              Making cooking an adventure, one quest at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Pricing</Link></li>
              <li><Link to="/premium" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Premium</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/about" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/help" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          <p>&copy; 2024 FlavorTrail. All rights reserved. Made with ❤️ for food adventurers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
