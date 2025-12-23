import React from 'react';
import { Card } from './ui/card';
import { Leaf, Heart, PartyPopper, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Peaceful Resort Stay",
      description: "Surrounded by nature, offering a tranquil escape from city life"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Family & Couple Friendly",
      description: "Perfect for romantic getaways and memorable family vacations"
    },
    {
      icon: <PartyPopper className="w-8 h-8" />,
      title: "Events & Weddings",
      description: "Elegant venues for weddings, celebrations, and corporate events"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Exceptional Service",
      description: "Dedicated staff ensuring your comfort and satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-4">
            About Hotel J P Farm
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Hotel J P Farm, your premier resort destination in Jhansi, Uttar Pradesh. 
            We offer a perfect blend of luxury, comfort, and natural beauty, making us the ideal 
            choice for families, couples, and event celebrations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-emerald-100 hover:border-emerald-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-800 mb-6 text-center">
              Your Perfect Resort Experience Awaits
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Located conveniently near Gwalior Road in Jhansi, Hotel J P Farm offers modern amenities 
              within a serene farm-resort setting. Our spacious rooms, elegant banquet halls, and 
              beautiful outdoor spaces make us the perfect venue for weddings, corporate events, and 
              leisure stays.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a 4.1-star rating from over 543 satisfied guests, we pride ourselves on delivering 
              exceptional hospitality. Whether you're planning a romantic weekend, a family vacation, 
              or a grand celebration, our dedicated team ensures every moment is memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;