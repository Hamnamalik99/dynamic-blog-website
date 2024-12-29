import React from 'react'

function Hero() {
  return (
    <div
    className="relative bg-gray-800 text-white text-center py-20 flex flex-col items-center justify-center"
    style={{
      backgroundImage: 'url(/blog.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className="relative z-10">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gradient tracking-wide">
        Welcome to <span className="text-yellow-400">Blogify</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
        Discover, Share, and Learn from a curated collection of inspiring blogs.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="/explore"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Explore Posts
        </a>
        <a
          href="/addpost"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          Create New Post
        </a>
      </div>
    </div>
  </div>
);
};

export default Hero
