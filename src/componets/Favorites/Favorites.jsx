import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  // State to manage favorite items
  const [favorites, setFavorites] = useState([
    // Example favorite items
   
    // Add or remove items as per your logic
  ]);

  // Function to remove an item from favorites
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Favorites Header */}
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">Your Favorite Items</h1>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                <p className="text-lg text-gray-600 mb-4">Price: ${item.price}</p>
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-semibold text-gray-800">You have no favorite items</h2>
            <p className="text-gray-600 mt-4">Browse through our shop and add items to your favorites!</p>
            <button className="mt-6 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-third transition duration-300">
              <Link to='/category'>
                Go to Shop
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
