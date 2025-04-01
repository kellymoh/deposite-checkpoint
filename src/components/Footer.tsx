
import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background pt-16 pb-10 border-t border-white/10">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Vertex Trading</h3>
            <p className="text-white/60 mb-6">
              Advanced cryptocurrency trading platform with powerful tools for both beginners and professional traders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Spot Trading</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Margin Trading</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Futures Trading</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Earn</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Launchpad</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Trading Bots</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Institutional Services</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Account Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Status Page</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">User Guides</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vertex Trading. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
