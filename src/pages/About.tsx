import React from 'react';
import { Heart, Shield, Users, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl">Dedicated to making a difference in the lives of India's street animals since 2020.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Paws of India is committed to creating a world where every street animal has access to care, 
              shelter, and the chance to find a loving home. We work tirelessly to rescue, rehabilitate, 
              and rehome abandoned animals while educating communities about animal welfare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
              <p className="text-gray-600">Providing medical treatment and rehabilitation to injured and sick animals</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Animal Protection</h3>
              <p className="text-gray-600">Advocating for stronger animal welfare laws and enforcement</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
              <p className="text-gray-600">Building a network of volunteers and supporters</p>
            </div>
            <div className="text-center p-6">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Impact</h3>
              <p className="text-gray-600">Creating lasting change through education and awareness</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;