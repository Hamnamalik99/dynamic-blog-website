import Link from 'next/link';
import { FaCode, FaPlane, FaCoffee, FaLaptop, FaTree, FaPaintBrush } from 'react-icons/fa';
import Image from 'next/image';

type PostCardProps = {
  id: number;
  title: string;
  description: string;
  category?: string; // Allow optional category for safety
  imageUrl: string; // New property for the image URL
};

const PostCard: React.FC<PostCardProps> = ({ id, title, description, category = 'unknown', imageUrl }) => {
  // Function to return an icon based on the category
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return <FaCode className="text-3xl text-yellow-400" />;
      case 'travel':
        return <FaPlane className="text-3xl text-blue-400" />;
      case 'food':
        return <FaCoffee className="text-3xl text-red-400" />;
      case 'technology':
        return <FaLaptop className="text-3xl text-green-400" />;
      case 'nature':
        return <FaTree className="text-3xl text-teal-400" />;
      case 'beauty':
        return <FaPaintBrush className="text-3xl text-pink-500" />;
      default:
        return <FaCode className="text-3xl text-gray-400" />;
    }
  };

  // Function to return a border color based on the category
  const getBorderColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return 'border-yellow-400';
      case 'travel':
        return 'border-blue-400';
      case 'food':
        return 'border-red-400';
      case 'technology':
        return 'border-green-400';
      case 'nature':
        return 'border-teal-400';
      case 'beauty':
        return 'border-pink-500';
      default:
        return 'border-gray-400';
    }
  };

  return (
    <div>
      <div
        className={`bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out border-2 ${getBorderColor(
          category || 'unknown' // Fallback to avoid errors
        )} hover:scale-105 transform`}
      >
        {/* Image Section */}
        <div className="h-40 bg-gray-300 flex items-center justify-center overflow-hidden">
          {/* Render image or fallback icon */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={400} // Replace with desired width
              height={160} // Replace with desired height
              className="object-cover w-full h-full"
            />
          ) : (
            getCategoryIcon(category || 'unknown') // Fallback to avoid errors
          )}
        </div>
      </div>
      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-xl font-extrabold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-sm text-blue-500 mt-1 capitalize">Category: {category || 'Unknown'}</p>
        <Link href={`/post/${id}`}>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-4 px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition transform hover:scale-105">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;