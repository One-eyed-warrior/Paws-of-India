import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Animal {
  id: string;
  name: string;
  species: string;
  age: number;
  health_status: string;
  description: string;
  image_url: string;
}

const Home = () => {
  const [featuredAnimals, setFeaturedAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchFeaturedAnimals = async () => {
      try {
        const { data: animals, error } = await supabase
          .from('animals')
          .select('*')
          .limit(3);
        
        if (error) throw error;
        setFeaturedAnimals(animals || []);
      } catch (error) {
        console.error('Error fetching featured animals:', error);
      }
    };

    fetchFeaturedAnimals();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Giving Hope to India's Street Animals</h1>
            <p className="text-xl mb-8">Join us in our mission to rescue, rehabilitate, and rehome abandoned animals across India.</p>
            <Link 
              to="/donate"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition duration-300"
            >
              Make a Difference Today
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">1000+</h3>
              <p className="text-gray-600">Animals Rescued</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">500+</h3>
              <p className="text-gray-600">Successful Adoptions</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">200+</h3>
              <p className="text-gray-600">Active Volunteers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Animals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAnimals.map((animal) => (
              <div key={animal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={animal.image_url}
                  alt={animal.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{animal.name}</h3>
                  <p className="text-gray-600 mb-4">{animal.description}</p>
                  <Link 
                    to="/animals"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/animals"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
            >
              View all animals <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;