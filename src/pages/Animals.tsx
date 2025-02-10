import React, { useEffect, useState } from 'react';
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

const Animals = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const { data, error } = await supabase
          .from('animals')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setAnimals(data || []);
      } catch (error) {
        console.error('Error fetching animals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">Loading animals...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Animals</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {animals.map((animal) => (
          <div key={animal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={animal.image_url || 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80'} 
              alt={animal.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{animal.name}</h2>
              <div className="flex gap-4 mb-4 text-sm text-gray-600">
                <span>{animal.species}</span>
                <span>{animal.age} years old</span>
                <span>{animal.health_status}</span>
              </div>
              <p className="text-gray-700 mb-4">{animal.description}</p>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition duration-300">
                Adopt Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animals;