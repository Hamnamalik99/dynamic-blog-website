"use client";

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSuccessMessage('Subscription successful! Thank you for joining.');
      setEmail('');
      setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-indigo-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">About Blogify</h3>
            <p className="text-gray-200">
              Blogify is your go-to blog for the latest articles, news, and reviews on technology, lifestyle, and much more. Join us and stay updated!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-200 transition-colors">Home</a></li>
              <li><a href="/explore" className="hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="/addpost" className="hover:text-gray-200 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://web.facebook.com/alishbah.rajput.12/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/_alishbaaa_majeed/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/alishba-majeed-5099b8310/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-200 mb-4">Stay updated with the latest posts and updates from Blogify.</p>
            <form onSubmit={handleSubscribe} className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-l-lg text-black outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button type="submit" className="bg-blue-500 px-6 py-2 rounded-r-lg text-white hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </form>
            {successMessage && <p className="mt-4 text-green-400">{successMessage}</p>}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} Hamna Blogify. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;