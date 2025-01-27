import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-xl font-bold">
          FoodieExpress
        </Link>
        
        <form 
          className="flex items-center bg-gray-700 rounded-md px-3 py-1" 
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search for dishes..."
            className="bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="ml-2">
            <Search className="text-white" size={20} />
          </button>
        </form>

        <div className="space-x-4">
          <Link to="/menu" className="hover:text-gray-300">Menu</Link>
          <Link to="/orders" className="hover:text-gray-300">My Orders</Link>
          <button className="bg-red-600 px-3 py-1 rounded-md hover:bg-red-500">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
