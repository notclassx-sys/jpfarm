import React from 'react';
import { Button } from './ui/button';
import { Phone, Calendar, Star } from 'lucide-react';
import { hotelData } from '../data/mock';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={hotelData.images.resort}
          alt="Hotel J P Farm Resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {/* Rating Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-2" />
          <span className="text-lg font-semibold">{hotelData.rating} Rating</span>
          <span className="mx-3 text-white/60">|</span>
          <span className="text-sm">{hotelData.reviewCount} Reviews</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Experience Luxury & Comfort
          <br />
          <span className="text-yellow-400">at Hotel J P Farm, Jhansi</span>
        </h1>

        <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
          A peaceful resort perfect for families, couples, weddings & vacations
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Check Availability
          </Button>
          <a href={`tel:${hotelData.phoneFormatted}`}>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-emerald-800 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Info Bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm sm:text-base">
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4">
            <p className="text-gray-300 mb-1">Check-in</p>
            <p className="font-semibold text-lg">{hotelData.checkIn}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4">
            <p className="text-gray-300 mb-1">Check-out</p>
            <p className="font-semibold text-lg">{hotelData.checkOut}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4">
            <p className="text-gray-300 mb-1">Starting From</p>
            <p className="font-semibold text-lg text-yellow-400">₹1,774/night</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;