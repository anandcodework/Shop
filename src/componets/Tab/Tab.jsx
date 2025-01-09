import React, { useState } from 'react';
import { ProductsData } from '../../mockData/data';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

function Tab() {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate(); // Hook to navigate
  const tabs = ["All", "Laptop", "Computer", "Accessories"];

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  // Function to handle adding to favorites
  const addToFavorites = (card) => {
    const token = localStorage.getItem('token'); // Check for token
    if (!token) {
      // If not logged in, redirect to login
      navigate('/login');
      return;
    }
    // Logic to add the card to favorites
    console.log(`Added to favorites: ${card.name}`);
    // You can add logic to store the card in a context or state here
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Tabs button section */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 p-4 sm:p-6 font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-3 sm:px-4 rounded ${
              activeTab === tab
                ? "bg-secondary/90 text-primary shadow-fourth shadow-md"
                : "bg-primary/50 shadow-fourth shadow-md border-[1.4px] border-primary text-secondary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div key={card.id} className="relative group">
            <Link to={card.id}>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-4 shadow-third rounded shadow-md space-y-2 bg-gradient-to-t- -[#FCFAEE]"
              >
                <img
                  src={card.image}
                  alt={card.category}
                  className="h-64 w-full object-contain rounded"
                />
                <p className="text-third text-2xl font-semibold">{card.info}</p>
                <p className="font-semibold text-2xl text-fourth">₹ {card.price}</p>
                <p className="text-fourth font-semibold">{card.category}</p>
              </motion.div>
            </Link>

            {/* Add to Favorites button */}
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevents link navigation
                addToFavorites(card);
              }}
              className="absolute flex justify-center items-center inset-0 bg-secondary text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-auto"
              style={{ width: '40%', height: '40px', transform: 'translateY(-50%)' }}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab;
