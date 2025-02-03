import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint as Paw } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-emerald-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Paw className="h-8 w-8" />
            <span className="text-xl font-bold">Paws of India</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/animals" className="hover:text-emerald-200">Our Animals</Link>
            <Link to="/donate" className="hover:text-emerald-200">Donate</Link>
            <Link to="/volunteer" className="hover:text-emerald-200">Volunteer</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;