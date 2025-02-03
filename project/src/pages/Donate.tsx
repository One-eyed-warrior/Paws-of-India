import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Heart } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = supabase.auth.getUser();
      if (!user) throw new Error('Please sign in to donate');

      const { error } = await supabase
        .from('donations')
        .insert([
          {
            amount: parseFloat(amount),
            message,
          }
        ]);

      if (error) throw error;

      setAmount('');
      setMessage('');
      alert('Thank you for your donation!');
    } catch (error) {
      console.error('Error processing donation:', error);
      alert('Failed to process donation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Make a Difference</h1>
          <p className="text-gray-600">Your donation helps us rescue and care for animals in need</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleDonate}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Donation Amount (₹)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Enter amount"
                required
                min="1"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Leave a message..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Donate Now'}
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold text-emerald-600 mb-2">₹500</h3>
            <p className="text-gray-600">Feeds a dog for a month</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-emerald-600 mb-2">₹2000</h3>
            <p className="text-gray-600">Provides medical care</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-emerald-600 mb-2">₹5000</h3>
            <p className="text-gray-600">Sponsors a rescue mission</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;