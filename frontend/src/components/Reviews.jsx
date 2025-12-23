import React from 'react';
import { Card } from './ui/card';
import { Star } from 'lucide-react';
import { reviews, hotelData } from '../data/mock';

const Reviews = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-4">
            Guest Reviews
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          
          {/* Overall Rating */}
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-50 to-green-50 rounded-full px-8 py-4 mt-4">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 mr-3" />
            <div className="text-left">
              <p className="text-4xl font-bold text-emerald-800">{hotelData.rating}</p>
              <p className="text-sm text-gray-600">{hotelData.reviewCount} Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-emerald-200">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.comment}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;