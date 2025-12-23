import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { galleryCategories, hotelData } from '../data/mock';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Rooms');

  const activeImages = galleryCategories.find(cat => cat.name === activeCategory)?.images || [];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-4">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600">
            Explore our beautiful resort and facilities
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => (
            <Button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              variant={activeCategory === category.name ? "default" : "outline"}
              className={`${
                activeCategory === category.name
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
              } px-8 py-3 text-lg`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={`${activeCategory} ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;