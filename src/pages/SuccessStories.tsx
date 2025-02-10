import React from 'react';
import { Calendar, MapPin, Heart } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "Luna's Journey to Recovery",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80",
      date: "January 2024",
      location: "Mumbai",
      story: "Found injured on the streets, Luna made a miraculous recovery and found her forever home with the Sharma family.",
      quote: "Luna has brought so much joy to our lives. She's not just a pet, she's family.",
      family: "The Sharma Family"
    },
    {
      id: 2,
      title: "Max's Second Chance",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80",
      date: "December 2023",
      location: "Delhi",
      story: "Max was rescued from a construction site, severely malnourished. Today, he's a happy, healthy dog living his best life.",
      quote: "Max's transformation is incredible. His spirit never broke, and now he's thriving.",
      family: "The Patel Family"
    },
    {
      id: 3,
      title: "Bella's Happy Ending",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80",
      date: "February 2024",
      location: "Bangalore",
      story: "Bella was found abandoned in a box. Now she's bringing joy and laughter to her new family.",
      quote: "Adopting Bella was the best decision we ever made. She completes our family.",
      family: "The Kumar Family"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Every rescue has a story. Here are some of our heartwarming success stories 
            that showcase the impact of our work and the power of adoption.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
                    <div className="flex items-center space-x-4 text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {story.date}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {story.location}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{story.story}</p>
                    <blockquote className="border-l-4 border-emerald-500 pl-4 italic mb-4">
                      "{story.quote}"
                    </blockquote>
                    <p className="text-emerald-600 font-semibold flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      {story.family}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Write Your Own Success Story</h2>
          <p className="text-xl mb-8">Give a loving home to one of our rescued animals and create your own success story.</p>
          <a 
            href="/animals" 
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Adopt Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;