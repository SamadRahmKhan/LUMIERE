import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl font-bold mb-4 tracking-wider">LUMIÈRE</h3>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs">
              Luxury skincare crafted with nature's finest ingredients for radiant, healthy skin.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 opacity-90">Shop</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/store" className="hover:opacity-100 transition-opacity">All Products</Link></li>
              <li><Link to="/store" className="hover:opacity-100 transition-opacity">Serums</Link></li>
              <li><Link to="/store" className="hover:opacity-100 transition-opacity">Moisturizers</Link></li>
              <li><Link to="/store" className="hover:opacity-100 transition-opacity">Cleansers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 opacity-90">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">Our Story</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Sustainability</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 opacity-90">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Lumière Beauty. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
