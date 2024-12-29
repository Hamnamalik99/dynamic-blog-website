"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Define the Post interface
interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string; // Base64 encoded string
}

const CreateNewPost = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]); // Specify type for posts

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(storedPosts);
  }, []);

  // Image Change Handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !content || !image) {
      setError("All fields are required!");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      // Ensure reader.result is cast to a string, or handle null case
      const imageUrl = reader.result as string;

      const newPost: Post = {
        id: Date.now(),
        title,
        description,
        content,
        imageUrl, // Ensure imageUrl is a string here
      };

      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts)); // Save to localStorage

      // Reset form fields
      setTitle("");
      setDescription("");
      setContent("");
      setImage(null);
      setError("");
    };

    if (image) {
      reader.readAsDataURL(image); // Convert image to Base64
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-gray-800 to-blue-950 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-white mb-6">Create New Post</h1>

      {/* Error Message */}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-lg font-semibold text-white mb-2">Title</label>
          <input
            type="text"
            className="w-full p-3 bg-white text-black rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-white mb-2">Description</label>
          <input
            type="text"
            className="w-full p-3 bg-white text-black rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter post description"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-white mb-2">Content</label>
          <textarea
            rows={6}
            className="w-full p-3 bg-white text-black rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your content here"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold text-white mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 bg-white text-black rounded-md"
            onChange={handleImageChange}
          />
          {image && (
            <div className="mt-4">
              <p className="text-white">Image Preview:</p>
              <div className="relative w-32 h-32 mt-2">
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Submit Post
        </button>
      </form>

      {/* Display Posts */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">All Posts</h2>
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className="bg-white p-4 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">{post.title}</h3>
                <p className="text-lg text-gray-700">{post.description}</p>
                <p className="text-sm text-gray-500">{post.content}</p>
                {post.imageUrl && (
                  <div className="relative w-full max-w-sm h-64 mt-4">
                    <Image
                      src={post.imageUrl}
                      alt="Post image"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-white">No posts available. Create a new post to see it here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
