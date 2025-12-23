import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Users, Wifi, Tv, Wind, ExternalLink } from 'lucide-react';
import { rooms, bookingPlatforms } from '../data/mock';

const Rooms = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-4">
            Rooms & Pricing
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600">
            Comfortable, spacious rooms designed for your perfect stay
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                {room.available && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available
                  </div>
                )}
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {room.type} • Up to {room.maxGuests} guests
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                      +{room.amenities.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-3xl font-bold text-emerald-700">
                      ₹{room.price.toLocaleString()}
                      <span className="text-sm text-gray-500 font-normal">/night</span>
                    </p>
                  </div>
                </div>

                <Button
                  onClick={scrollToBooking}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Booking Platforms */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-emerald-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Also Available On
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {bookingPlatforms.map((platform, index) => (
              <div
                key={index}
                className="flex items-center bg-gradient-to-r from-emerald-50 to-green-50 px-6 py-3 rounded-lg border border-emerald-200"
              >
                <ExternalLink className="w-5 h-5 text-emerald-600 mr-2" />
                <span className="font-semibold text-gray-800">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;