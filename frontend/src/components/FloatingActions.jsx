import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { hotelData } from '../data/mock';

const FloatingActions = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Show buttons after a short delay
    const timer = setTimeout(() => setShowButtons(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello! I would like to inquire about booking a room at Hotel J P Farm.`
    );
    window.open(`https://wa.me/${hotelData.whatsapp}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${hotelData.phone.replace(/\s/g, '')}`;
  };

  if (!showButtons) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="group relative w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Call Now"
      >
        <Phone className="w-7 h-7" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;