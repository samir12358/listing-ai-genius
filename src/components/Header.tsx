
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-indiahub-blue">
              AllIndia<span className="text-indiahub-teal">Hub.ai</span>
            </h1>
            <span className="hidden md:block ml-3 text-xs text-gray-500 font-medium">
              India's Smart B2B Supplier Platform
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium hover:text-indiahub-teal transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-indiahub-teal transition-colors">
              About
            </a>
            <a href="#ai-tools" className="text-sm font-medium hover:text-indiahub-teal transition-colors">
              AI Tools
            </a>
            <a href="#become-supplier" className="text-sm font-medium hover:text-indiahub-teal transition-colors">
              Become a Supplier
            </a>
            <a href="#partner" className="text-sm font-medium hover:text-indiahub-teal transition-colors">
              Partner With Us
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-indiahub-teal transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-indiahub-blue hover:text-indiahub-teal">
              Login
            </Button>
            <Button className="bg-indiahub-teal hover:bg-indiahub-blue transition-colors">
              Upload Product
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-indiahub-teal"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2 bg-white border-t">
            <a
              href="#"
              className="block py-2 text-base font-medium hover:text-indiahub-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 text-base font-medium hover:text-indiahub-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#ai-tools"
              className="block py-2 text-base font-medium hover:text-indiahub-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Tools
            </a>
            <a
              href="#become-supplier"
              className="block py-2 text-base font-medium hover:text-indiahub-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Supplier
            </a>
            <a
              href="#partner"
              className="block py-2 text-base font-medium hover:text-indiahub-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Partner With Us
            </a>
            <a
              href="#pricing"
              className="block py-2 text-base font-medium hover:text-indiahub-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#login"
              className="block py-2 text-base font-medium hover:text-indiahub-teal"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
            <Button 
              className="w-full mt-2 bg-indiahub-teal hover:bg-indiahub-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Upload Product
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
