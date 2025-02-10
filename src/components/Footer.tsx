import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +91 98765 43210</p>
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> help@pawsofindia.org</p>
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Mumbai, India</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-emerald-300">About Us</a></li>
              <li><a href="/success-stories" className="hover:text-emerald-300">Success Stories</a></li>
              <li><a href="/faq" className="hover:text-emerald-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l text-gray-800 w-full"
              />
              <button className="bg-emerald-600 px-4 py-2 rounded-r hover:bg-emerald-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;