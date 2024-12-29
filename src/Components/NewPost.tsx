"use client";
import { useState } from "react";
import { FaCode, FaPlane, FaCoffee, FaLaptop, FaTree, FaPaintBrush, FaTshirt } from "react-icons/fa";
import PostCard from "./PostCard";

const NewPost = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Next.js Tips",
      description: "Learn essential Next.js tips.",
      category: "Programming Languages",
      imageUrl: "/next.png",
    },
    {
      id: 2,
      title: "Traveling to Japan",
      description: "Explore Japan like never before.",
      category: "Travel",
      imageUrl: "/japan.png",
    },
    {
      id: 3,
      title: "Social Media Growth",
      description: "Grow your social presence.",
      category: "Social Media",
      imageUrl: "/social.png",
    },
    {
      id: 4,
      title: "Delicious Recipes to Try",
      description: "Explore mouthwatering dishes from around the world.",
      category: "Food",
      imageUrl: "/food.png",
    },
    {
      id: 5,
      title: "The Latest Tech Trends",
      description: "Discover what's new in the world of technology.",
      category: "Technology",
      imageUrl: "/tech.png",
    },
    {
      id: 6,
      title: "Beauty Secrets for Glowing Skin",
      description: "Discover top beauty tips and tricks for flawless skin.",
      category: "Beauty",
      imageUrl: "/beauty.png",
    },
    {
      id: 7,
      title: "Best Clothing Brands for Every Season",
      description: "Discover the top clothing brands for every season.",
      category: "Clothes",
      imageUrl: "/cloth.png",
    },
  ];

  // Icons for each category
  const categoryIcons: { [key: string]: JSX.Element } = {
    All: <div className="p-2 bg-blue-700 rounded-full"><FaCode className="text-white text-xl" /></div>,
    "Programming Languages": <div className="p-2 bg-yellow-500 rounded-full"><FaCode className="text-white text-xl" /></div>,
    Travel: <div className="p-2 bg-blue-400 rounded-full"><FaPlane className="text-white text-xl" /></div>,
    Food: <div className="p-2 bg-red-400 rounded-full"><FaCoffee className="text-white text-xl" /></div>,
    Technology: <div className="p-2 bg-green-400 rounded-full"><FaLaptop className="text-white text-xl" /></div>,
    Nature: <div className="p-2 bg-teal-400 rounded-full"><FaTree className="text-white text-xl" /></div>,
    Beauty: <div className="p-2 bg-pink-400 rounded-full"><FaPaintBrush className="text-white text-xl" /></div>,
    Clothes: <div className="p-2 bg-purple-400 rounded-full"><FaTshirt className="text-white text-xl" /></div>,
  };

  // Extract unique categories using Array.from()
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on the selected category
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div id="posts" className="relative bg-slate-100 text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Section */}
        <section className="flex flex-wrap justify-center mb-8 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold tracking-wide transition ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryIcons[category] || <FaCode className="text-xl" />}
              <span>{category}</span>
            </button>
          ))}
        </section>

        {/* Posts Section */}
        <section id="home">
          <h2 className="text-4xl font-bold text-center text-black mb-12">Explore Posts</h2>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  category={post.category}
                  imageUrl={post.imageUrl}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No posts found for this category.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NewPost;