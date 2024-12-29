"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Top 10 Next.js Tips to Supercharge Your Development",
    description: "Discover how to elevate your Next.js projects with these must-know tips and tricks.",
    imageUrl: "/next.js.png",
    content: `
      <div>
        <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">Introduction</h2>
       <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Next.js has taken the development world by storm with its seamless integration of 
        server-side rendering, static site generation, and dynamic routing. If you're 
        looking to make the most of your Next.js projects, these tips will guide you 
        through the best practices and hidden gems of the framework.
      </p>
      
      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        1. Optimize Image Loading with Next.js <code>&lt;Image&gt;</code>
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Next.js provides the powerful <code>&lt;Image&gt;</code> component, which handles image 
        optimization, resizing, and lazy loading out of the box. Say goodbye to manual 
        configurations and let Next.js do the heavy lifting for a faster, more efficient 
        web experience.
      </p>
      
      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        2. Embrace Static Site Generation (SSG) for Performance
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Static Site Generation is a game-changer for performance. By pre-rendering pages 
        at build time, you can deliver lightning-fast experiences to users while leveraging 
        APIs like <code>getStaticProps</code> and <code>getStaticPaths</code>. SSG is perfect 
        for blogs, portfolios, and e-commerce sites.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        3. Dynamically Fetch Data with Server-Side Rendering (SSR)
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        When you need to fetch real-time data at request time, Server-Side Rendering is your 
        best friend. By using <code>getServerSideProps</code>, you can ensure that users always 
        see up-to-date content without compromising performance.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        4. Use API Routes for Backend Logic
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Forget about setting up a separate backend. Next.js allows you to create API routes 
        within your app to handle server-side logic, such as authentication, data fetching, 
        or form submissions. With API routes, you can streamline your development process 
        and keep everything in one place.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        5. Leverage the Power of Middleware
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Next.js middleware lets you run logic between a request and response, enabling use 
        cases like authentication, user role management, and custom redirects. Use middleware 
        to enhance security and personalize user experiences without adding complexity.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        6. Enhance Styling with CSS Modules or Tailwind CSS
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Whether you prefer CSS Modules for modular styles or Tailwind CSS for utility-first 
        design, Next.js integrates seamlessly with your favorite styling tools. Create beautiful 
        and maintainable UIs with minimal effort.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        7. Implement Incremental Static Regeneration (ISR)
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Need to update static content without rebuilding your entire site? Incremental Static 
        Regeneration lets you revalidate specific pages on-demand, ensuring your content stays 
        fresh without compromising performance.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        8. Optimize Bundle Sizes
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Reduce load times by analyzing and optimizing your bundle sizes. Use tools like 
        <code>next-bundle-analyzer</code> to identify unused code and tree-shaking to remove 
        unnecessary imports.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        9. Utilize Next.js Plugins and Libraries
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        The Next.js ecosystem is rich with plugins and libraries that extend its functionality. 
        Explore options like Preact for smaller bundles or Framer Motion for stunning animations.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-bottom: 1rem;">
        10. Deploy Effortlessly with Vercel
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Vercel, the creators of Next.js, offer seamless deployment options. Enjoy features like 
        instant rollbacks, serverless functions, and global CDN distribution for the ultimate 
        production experience.
      </p>

      <h2 style="font-size: 1.8rem; font-weight: bold; margin-top: 2rem;">
        Conclusion
      </h2>
      <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Whether you're a seasoned developer or just starting with Next.js, these tips will help 
        you maximize its potential. Start building faster, more dynamic web applications today!
      </p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Exploring Japan",
    description: "A detailed guide for traveling to Japan.",
    imageUrl: "/ex.png",
    content: `
    <div style="font-family: 'Merriweather', serif; line-height: 1.8; color: #2c3e50;">
      <h2 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem;">Introduction</h2>
      <p>
        Japan, often referred to as the "Land of the Rising Sun," is a nation of contrasts, where
        centuries-old traditions harmonize with cutting-edge technology. From bustling cities to serene
        countryside, Japan offers something unique for every traveler. In this guide, we'll journey
        through its vibrant culture, exquisite cuisine, and breathtaking landscapes.
      </p>
      
      <h2 style="font-size: 1.8rem; font-weight: bold; margin: 2rem 0 1rem;">1. Discovering Tokyo</h2>
      <p>
        The capital city of Japan, Tokyo, is a bustling metropolis that seamlessly blends the ultramodern
        with the traditional. Explore the towering skyscrapers of Shinjuku, enjoy the iconic Shibuya
        Crossing, and find peace at the Meiji Shrine amidst lush greenery.
      </p>
      <ul style="margin-left: 1.5rem; list-style-type: square; color: #34495e;">
        <li><strong>Top Spot:</strong> Tokyo Skytree for panoramic city views.</li>
        <li><strong>Must Try:</strong> Fresh sushi at Tsukiji Fish Market.</li>
      </ul>
      
      <h2 style="font-size: 1.8rem; font-weight: bold; margin: 2rem 0 1rem;">2. Kyoto's Timeless Beauty</h2>
      <p>
        Kyoto, the cultural heart of Japan, is home to over 1,600 temples and shrines. Wander through
        the iconic bamboo forest of Arashiyama, marvel at the golden splendor of Kinkaku-ji (Golden
        Pavilion), and participate in a traditional tea ceremony.
      </p>
      <blockquote style="border-left: 4px solid #e74c3c; padding-left: 1rem; font-style: italic; color: #7f8c8d;">
        "Walking through Kyoto is like stepping back in time, with every corner telling a story of ancient Japan."
      </blockquote>
      
      <h2 style="font-size: 1.8rem; font-weight: bold; margin: 2rem 0 1rem;">3. Savoring Japanese Cuisine</h2>
      <p>
        Japanese cuisine is a culinary adventure. From the delicate flavors of sushi and sashimi to the
        comforting bowls of ramen and udon, every meal is an art form. Don't miss out on trying okonomiyaki
        in Osaka or kaiseki in Kyoto.
      </p>
      <ul style="margin-left: 1.5rem; list-style-type: disc; color: #34495e;">
        <li><strong>Sushi:</strong> A bite of fresh fish and seasoned rice that embodies simplicity.</li>
        <li><strong>Ramen:</strong> Rich, flavorful broths served with perfectly cooked noodles.</li>
      </ul>
      
      <h2 style="font-size: 1.8rem; font-weight: bold; margin: 2rem 0 1rem;">4. Nature's Majesty</h2>
      <p>
        Japan's landscapes are as diverse as its cities. Experience the breathtaking beauty of Mount Fuji,
        wander through the flower fields of Hokkaido, or soak in an onsen (hot spring) in Hakone while
        enjoying views of snow-capped mountains.
      </p>
      
      <h2 style="font-size: 1.8rem; font-weight: bold; margin: 2rem 0 1rem;">5. Festivals and Traditions</h2>
      <p>
        Japan's festivals, or "matsuri," are vibrant celebrations of its culture. Witness the grandeur
        of the Gion Matsuri in Kyoto, the enchanting lanterns of Obon, or the snow sculptures of the Sapporo
        Snow Festival.
      </p>
      <p style="font-style: italic; color: #7f8c8d;">
        Tip: Plan your visit during cherry blossom season for unforgettable views and cultural festivities.
      </p>
      
      <h2 style="font-size: 2rem; font-weight: bold; margin: 2rem 0 1rem;">Conclusion</h2>
      <p>
        Whether you're a history enthusiast, a foodie, or a nature lover, Japan promises an adventure of a
        lifetime. Its rich tapestry of experiences will leave you mesmerized and yearning for more. Pack your
        bags and prepare to embark on this unforgettable journey.
      </p>
    </div>
  `,
  },
  {
    id: 3,
    title: "Social Media Growth",
    description: "Grow your social presence.",
    imageUrl: "/social.png",
    content: `
      <div>
        <h2 style="font-size: 2rem; font-weight: bold; margin-top: 2rem;">Growing Your Social Media Presence</h2>
        <p>
          Social media is one of the most powerful tools for building an online presence. Learn strategies for 
          growing your followers, improving engagement, and expanding your influence across different platforms.
        </p>
        <ul style="margin-left: 1.5rem; list-style-type: square; color: #34495e;">
          <li><strong>Top Tip:</strong> Consistent posting is key to engagement.</li>
          <li><strong>Tools to Use:</strong> Buffer, Hootsuite, and Instagram Insights.</li>
        </ul>
      </div>
    `,
  },
  {
    id: 4,
    title: "Delicious Recipes to Try",
    description: "Explore mouthwatering dishes from around the world.",
    imageUrl: "/food.png",
    content: `
      <div>
        <h2 style="font-size: 2rem; font-weight: bold; margin-top: 2rem;">Global Cuisine Delights</h2>
        <p>
          From Italian pastas to Japanese sushi, food is an essential part of experiencing different cultures.
          In this post, we share some of the most popular and easy-to-make recipes from around the world that you must try.
        </p>
        <ul style="margin-left: 1.5rem; list-style-type: square; color: #34495e;">
          <li><strong>Try:</strong> Spaghetti Carbonara from Italy.</li>
          <li><strong>Must Have:</strong> Tacos from Mexico.</li>
        </ul>
      </div>
    `,
  },
  {
    id: 5,
    title: "The Latest Tech Trends",
    description: "Discover what's new in the world of technology.",
    imageUrl: "/tech.png",
    content: `
      <div>
        <h2 style="font-size: 2rem; font-weight: bold; margin-top: 2rem;">The Rise of Artificial Intelligence</h2>
        <p>
          Artificial Intelligence is revolutionizing industries from healthcare to finance. Learn about the latest
          advancements in AI, machine learning, and how it's shaping the future.
        </p>
        <ul style="margin-left: 1.5rem; list-style-type: square; color: #34495e;">
          <li><strong>Top Development:</strong> GPT-4 and beyond.</li>
          <li><strong>AI in Use:</strong> AI-powered chatbots and virtual assistants.</li>
        </ul>
      </div>
    `,
  },
  {
    id: 6,
    title: "Beauty Secrets for Glowing Skin",
    description: "Discover top beauty tips and tricks for flawless skin.",
    imageUrl: "/beauty.png",
    content: `
      <div>
        <h2 style="font-size: 2rem; font-weight: bold; margin-top: 2rem;">Achieving Radiant Skin</h2>
        <p>
          Beauty is not just about makeup; it's about maintaining healthy skin. Explore skincare routines,
          natural remedies, and tips to keep your skin glowing all year round.
        </p>
        <ul style="margin-left: 1.5rem; list-style-type: square; color: #34495e;">
          <li><strong>Must Try:</strong> Vitamin C serums.</li>
          <li><strong>Best Practice:</strong> Always wear sunscreen.</li>
        </ul>
      </div>
    `,
  },
  {
    id: 7,
    title: "Best Clothing Brands for Every Season",
    description: "Discover the top clothing brands for every season.",
    imageUrl: "/cloth.png",
    content: `
      <div>
        <h2 style="font-size: 2rem; font-weight: bold; margin-top: 2rem;">Seasonal Fashion Tips</h2>
        <p>
          Whether it's winter jackets or summer dresses, finding the right clothing for the season can enhance your style.
          Here are some of the best brands to shop for all seasons.
        </p>
        <ul style="margin-left: 1.5rem; list-style-type: square; color: #34495e;">
          <li><strong>Winter Wear:</strong> Patagonia, North Face.</li>
          <li><strong>Summer Vibes:</strong> Zara, H&M.</li>
        </ul>
      </div>
    `,
  },
];

export default function PostDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  const post = posts.find((p) => p.id === parseInt(id, 10));

  const [comment, setComment] = useState("");
  const [name, setName] = useState(""); // For user's name
  const [emoji, setEmoji] = useState("😊"); // Default emoji, can be customized
  const [comments, setComments] = useState<{ name: string; comment: string; emoji: string }[]>([]); // Store comments with name, emoji, and content

  // Handle submitting the comment
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim() && name.trim()) {
      setComments((prev) => [
        ...prev,
        { name: name.trim(), comment: comment.trim(), emoji: emoji }, // Save comment with name and emoji
      ]);
      setComment(""); // Clear comment field
      setName(""); // Clear name field
    }
  };

  if (!post) {
    return <p className="text-center text-xl text-red-600">Post not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Post Details */}
      <div className="mb-8">
      <Image
  src={post.imageUrl as string} // Ensure the imageUrl is a valid string
  alt={post.title}
  width={600} // Adjust width based on your design
  height={288} // Adjust height based on your design
  className="w-full h-72 object-cover rounded-lg mb-6"
/>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg mb-6">{post.description}</p>
        {/* Render HTML Content */}
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="text-base leading-relaxed space-y-4"
        />
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((cmt, index) => (
              <div key={index} className="bg-gray-800 text-white p-4 rounded-lg">
                <p><strong>{cmt.name}</strong> {cmt.emoji}</p>
                <p>{cmt.comment}</p>
              </div>
            ))
          )}
        </div>

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mt-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-4 rounded-md bg-gray-700 text-white mb-4"
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-700 text-white mb-4"
            placeholder="Add your comment"
            rows={4}
          />
          <div className="flex gap-2 mb-4">
            {/* Emoji Picker (you can replace this with an emoji picker component) */}
            <button
              type="button"
              onClick={() => setEmoji("😊")}
              className="p-2 rounded bg-yellow-500 text-white"
            >
              😊
            </button>
            <button
              type="button"
              onClick={() => setEmoji("😍")}
              className="p-2 rounded bg-pink-500 text-white"
            >
              😍
            </button>
            <button
              type="button"
              onClick={() => setEmoji("😎")}
              className="p-2 rounded bg-blue-500 text-white"
            >
              😎
            </button>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            <FaPaperPlane />
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}