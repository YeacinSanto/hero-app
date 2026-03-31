import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* HERO.IO Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">HERO.IO</h2>
          <p className="text-gray-300 text-sm">
            We build innovative apps that simplify life, boost productivity, and bring your ideas to life.
          </p>
          <div className="flex gap-4 mt-2 text-sm text-gray-400 uppercase">
            
            <span className="hover:text-white cursor-pointer transition">Twitter</span>
            <span className="hover:text-white cursor-pointer transition">Instagram</span>
            <span className="hover:text-white cursor-pointer transition">LinkedIn</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="/app" className="text-gray-300 hover:text-white transition">Apps</a>
          <a href="/installation" className="text-gray-300 hover:text-white transition">Installation</a>
         
        </div>

        {/* Trending Apps */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Trending Apps</h3>
    
          <Link to="/app/appDetails/1" className="text-gray-300 hover:text-white transition">TaskMaster</Link>
          <a href="/app/appDetails/2" className="text-gray-300 hover:text-white transition">FitTrack</a>
          <a href="/app/appDetails/3" className="text-gray-300 hover:text-white transition">Foodie</a>
          <a href="/app/appDetails/4" className="text-gray-300 hover:text-white transition">Budget Buddy</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Contact</h3>
          <p className="text-gray-300 text-sm">Email: support@hero.io</p>
          <p className="text-gray-300 text-sm">Phone: +39 123 456 789</p>
          <p className="text-gray-300 text-sm">Address: Milan, Italy</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="bg-purple-950 text-gray-400 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} HERO.IO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;