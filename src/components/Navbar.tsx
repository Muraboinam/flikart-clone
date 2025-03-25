import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#2874f0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="Flipkart"
              />
            </Link>
            <div className="ml-4 flex-1 max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-white text-gray-900 pl-10 pr-4 py-2 rounded-sm"
                  placeholder="Search for products, brands and more"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-1 hover:text-gray-200">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link to="/cart" className="flex items-center space-x-1 hover:text-gray-200">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;