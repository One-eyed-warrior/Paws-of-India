import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Users } from 'lucide-react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    skills: [] as string[],
    availability: '',
  });
  const [loading, setLoading] = useState(false);

  const skillOptions = [
    'Animal Handling',
    'Veterinary Care',
    'Transportation',
    'Social Media',
    'Photography',
    'Event Management',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = supabase.auth.getUser();
      if (!user) throw new Error('Please sign in to volunteer');

      const { error } = await supabase
        .from('volunteers')
        .insert([{
          full_name: formData.fullName,
          phone: formData.phone,
          skills: formData.skills,
          availability: formData.availability,
        }]);

      if (error) throw error;

      setFormData({
        fullName: '',
        phone: '',
        skills: [],
        availability: '',
      });
      alert('Thank you for volunteering! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
      alert('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSkillChange = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Join Our Volunteer Team</h1>
          <p className="text-gray-600">Help us make a difference in the lives of animals</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Skills
              </label>
              <div className="grid grid-cols-2 gap-4">
                {skillOptions.map((skill) => (
                  <label key={skill} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.skills.includes(skill)}
                      onChange={() => handleSkillChange(skill)}
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>{skill}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Availability
              </label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              >
                <option value="">Select availability</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Both">Both Weekdays and Weekends</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;