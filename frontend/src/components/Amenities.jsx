import React from 'react';
import { Card } from './ui/card';
import * as Icons from 'lucide-react';
import { amenities } from '../data/mock';

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-4">
            Hotel Amenities
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600">
            Modern facilities for your comfort and convenience
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = Icons[amenity.icon];
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 border-2 border-gray-100 hover:border-emerald-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-700 rounded-full mb-4">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{amenity.name}</h3>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">
            Everything You Need for a Perfect Stay
          </h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            From complimentary Wi-Fi to our refreshing swimming pool, we ensure all your needs are met. 
            Our restaurant serves delicious local and international cuisine, while our fitness center 
            helps you maintain your wellness routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;