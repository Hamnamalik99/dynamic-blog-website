import Link from 'next/link';
import { FaCode, FaPlane, FaCoffee, FaLaptop, FaTree, FaTshirt, FaSpa } from 'react-icons/fa'; // Import additional icons

type CategoryCardProps = {
  category: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Function to return icons based on category
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return <FaCode className="text-4xl text-yellow-400" />;
      case 'travel':
        return <FaPlane className="text-4xl text-blue-400" />;
      case 'food':
        return <FaCoffee className="text-4xl text-red-400" />;
      case 'technology':
        return <FaLaptop className="text-4xl text-green-400" />;
      case 'nature':
        return <FaTree className="text-4xl text-teal-400" />;
      case 'clothes':
        return <FaTshirt className="text-4xl text-purple-400" />;
      case 'beauty':
        return <FaSpa className="text-4xl text-pink-400" />;
      default:
        return <FaCode className="text-4xl text-gray-400" />;
    }
  };

  return (
    <div className="container mx-auto p-4">  
    {/* Categories Section */}
    <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide">
      Explore Categories
    </h2>
  
    <Link href={`/categories/${category}`}>
      <div className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        {/* Category Icon */}
        <div className="mb-4">{getCategoryIcon(category)}</div>
        {/* Category Heading */}
        <h3 className="text-xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 bg-clip-text text-transparent capitalize tracking-wider">
          {category}
        </h3>
      </div>
    
    </Link>
    </div>
  );
};

export default CategoryCard;