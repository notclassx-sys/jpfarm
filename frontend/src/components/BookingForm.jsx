import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, User, Mail, Phone as PhoneIcon, Users, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { rooms } from '../data/mock';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    roomType: rooms[0]?.id || '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          guests: '1',
          roomType: rooms[0]?.id || '',
          specialRequests: ''
        });
        setCheckInDate(undefined);
        setCheckOutDate(undefined);
      }, 3000);
    }, 1500);
  };

  const selectedRoom = rooms.find(r => r.id === formData.roomType);
  const nights = checkInDate && checkOutDate 
    ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
    : 0;
  const totalPrice = selectedRoom && nights > 0 ? selectedRoom.price * nights : 0;

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-4">
            Book Your Stay
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600">
            Reserve your perfect room today
          </p>
        </div>

        <Card className="p-8 shadow-2xl border-2 border-emerald-100">
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Booking Request Submitted!
              </h3>
              <p className="text-gray-600">
                We'll contact you shortly to confirm your reservation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-base font-semibold text-gray-700 mb-2 block">
                    Check-in Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-12 border-2"
                      >
                        <CalendarIcon className="mr-2 h-5 w-5" />
                        {checkInDate ? format(checkInDate, 'PPP') : 'Select date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkInDate}
                        onSelect={setCheckInDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label className="text-base font-semibold text-gray-700 mb-2 block">
                    Check-out Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal h-12 border-2"
                      >
                        <CalendarIcon className="mr-2 h-5 w-5" />
                        {checkOutDate ? format(checkOutDate, 'PPP') : 'Select date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={checkOutDate}
                        onSelect={setCheckOutDate}
                        disabled={(date) => date < (checkInDate || new Date())}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Room Selection */}
              <div>
                <Label htmlFor="roomType" className="text-base font-semibold text-gray-700 mb-2 block">
                  Room Type
                </Label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-md focus:border-emerald-500 focus:outline-none"
                  required
                >
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} - ₹{room.price}/night
                    </option>
                  ))}
                </select>
              </div>

              {/* Guest Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold text-gray-700 mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="h-12 border-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-semibold text-gray-700 mb-2 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="h-12 border-2"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-base font-semibold text-gray-700 mb-2 flex items-center">
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="h-12 border-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="guests" className="text-base font-semibold text-gray-700 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Number of Guests
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="h-12 border-2"
                    required
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <Label htmlFor="specialRequests" className="text-base font-semibold text-gray-700 mb-2 flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Special Requests (Optional)
                </Label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any special requirements or preferences..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {/* Price Summary */}
              {totalPrice > 0 && (
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-2 border-emerald-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Booking Summary</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Room:</span>
                      <span className="font-semibold">{selectedRoom?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nights:</span>
                      <span className="font-semibold">{nights}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price per night:</span>
                      <span className="font-semibold">₹{selectedRoom?.price}</span>
                    </div>
                    <div className="border-t-2 border-emerald-300 pt-2 mt-2 flex justify-between text-lg">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-emerald-700">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !checkInDate || !checkOutDate}
                className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Submit Booking Request'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Note: This is a booking request. We'll contact you to confirm availability and payment details.
              </p>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;