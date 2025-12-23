import React from 'react';
import { Card } from './ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';
import { hotelData } from '../data/mock';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-4">
            Location & Contact
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600">
            Find us in the heart of Jhansi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 border-2 border-emerald-100">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">{hotelData.address}</p>
                  <p className="text-sm text-gray-500 mt-2">Plus Code: {hotelData.plusCode}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-emerald-100">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                  <a
                    href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
                    className="text-emerald-600 hover:text-emerald-800 text-lg font-semibold"
                  >
                    {hotelData.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-emerald-100">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Check-in & Check-out</h3>
                  <p className="text-gray-600">Check-in: {hotelData.checkIn}</p>
                  <p className="text-gray-600">Check-out: {hotelData.checkOut}</p>
                </div>
              </div>
            </Card>

            {/* Nearby Info */}
            <Card className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-800 mb-3">Nearby Area</h3>
              <p className="text-gray-700">
                Located in Ansal Colony, near Gwalior Road Police Chowki and Polytechnic. 
                Easily accessible from major landmarks in Jhansi.
              </p>
            </Card>
          </div>

          {/* Google Map */}
          <Card className="overflow-hidden h-full min-h-[500px] border-2 border-emerald-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.234567890123!2d78.5611234!3d25.4733333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI4JzI0LjAiTiA3OMKwMzMnNDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel J P Farm Location"
            ></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Location;