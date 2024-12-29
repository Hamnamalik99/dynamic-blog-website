"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Updated for Next.js 13+ routing

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route dynamically

  // Helper function to check active link
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          Blogify
        </h1>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`hover:text-yellow-400 transition ${
              isActive('/') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/explore"
            className={`hover:text-yellow-400 transition ${
              isActive('/categories') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Categories
          </Link>
          <Link
            href="/addpost"
            className={`hover:text-yellow-400 transition ${
              isActive('/new-post') ? 'text-yellow-400 font-semibold' : ''
            }`}
          >
            Add Post
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none text-yellow-400"
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <Link
            href="/"
            className={`block py-2 px-4 ${
              isActive('/') ? 'bg-yellow-500 text-black' : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            href="/explore"
            className={`block py-2 px-4 ${
              isActive('/categories')
                ? 'bg-yellow-500 text-black'
                : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Categories
          </Link>
          <Link
            href="/addpost"
            className={`block py-2 px-4 ${
              isActive('/new-post')
                ? 'bg-yellow-500 text-black'
                : 'hover:bg-yellow-500'
            }`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            Add Post
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;