import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Star,
  Gift,
  CreditCard,
  HelpCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#172337] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/press" className="hover:underline">Press</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/payments" className="hover:underline">Payments</Link></li>
              <li><Link to="/shipping" className="hover:underline">Shipping</Link></li>
              <li><Link to="/returns" className="hover:underline">Returns</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">POLICY</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/return-policy" className="hover:underline">Return Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="/security" className="hover:underline">Security</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-gray-400 font-medium mb-4">SOCIAL</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-400" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-400" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="hover:text-red-400" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-gray-400 font-medium mb-2">Contact Us</h4>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@flipkart.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm mt-2">
                <Phone className="h-4 w-4" />
                <span>1800-123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm">Become a Seller</span>
              </span>
              <span className="flex items-center">
                <Gift className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm">Gift Cards</span>
              </span>
              <span className="flex items-center">
                <HelpCircle className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm">Help Center</span>
              </span>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <CreditCard className="h-4 w-4 mr-2" />
              <span className="text-sm">© 2025 Flipkart Clone</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;