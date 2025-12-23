import React, { useState } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { hotelData } from '../data/mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-emerald-800">
              {hotelData.name}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('rooms')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              Rooms
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              Amenities
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('location')} className="text-gray-700 hover:text-emerald-700 font-medium transition-colors">
              Location
            </button>
            <a href={`tel:${hotelData.phoneFormatted}`}>
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('rooms')} className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2">
              Rooms
            </button>
            <button onClick={() => scrollToSection('amenities')} className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2">
              Amenities
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2">
              Gallery
            </button>
            <button onClick={() => scrollToSection('location')} className="block w-full text-left text-gray-700 hover:text-emerald-700 font-medium py-2">
              Location
            </button>
            <a href={`tel:${hotelData.phoneFormatted}`} className="block">
              <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;