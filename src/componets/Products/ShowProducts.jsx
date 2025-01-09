import React, { useState } from 'react';
import { productData } from '../../mockData/data';

function EcommerceSearch({ searchQuery }) {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]); // Default price range
  const [sortOption, setSortOption] = useState('');

  const searchFilteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const filteredProducts = searchFilteredProducts
    .filter((product) => {
      const matchesCategory = categoryFilter === '' || product.category === categoryFilter;
      const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPriceRange;
    })
    .sort((a, b) => {
      if (sortOption === 'priceLowToHigh') return a.price - b.price;
      if (sortOption === 'priceHighToLow') return b.price - a.price;
      if (sortOption === 'nameAZ') return a.name.localeCompare(b.name);
      if (sortOption === 'nameZA') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="ecommerce-search">
      <section className="my-6 container">
        {/* Advanced Filters */}
        <div className="filters flex flex-wrap justify-between mb-6 bg-gray-100 p-4 rounded-lg shadow-md">
          {/* Category Filter */}
          <div className="filter-category flex flex-col w-full sm:w-auto mb-4 sm:mb-0 mr-4">
            <label htmlFor="category" className="block mb-2 font-semibold">Category</label>
            <select
              id="category"
              className="border border-gray-300 p-2 rounded-lg w-full sm:w-auto"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Laptops">Laptops</option>
              <option value="Accessories">Accessories</option>
              <option value="Monitors">Monitors</option>
              <option value="Components">Components</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="filter-price flex flex-col w-full sm:w-auto mb-4 sm:mb-0 mr-4">
            <label htmlFor="priceRange" className="block mb-2 font-semibold">Price Range</label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                id="priceRange"
                min="0"
                max="2000"
                step="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-full sm:w-auto"
              />
              <span className="text-gray-600">Up to ${priceRange[1]}</span>
            </div>
          </div>

          {/* Sort Options */}
          <div className="filter-sort flex flex-col w-full sm:w-auto">
            <label htmlFor="sort" className="block mb-2 font-semibold">Sort By</label>
            <select
              id="sort"
              className="border border-gray-300 p-2 rounded-lg w-full sm:w-auto"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="nameAZ">Name: A to Z</option>
              <option value="nameZA">Name: Z to A</option>
            </select>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-md">
                <div className="flex justify-center mb-4 h-40">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="flex  object-cover h-full w-full rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-third font-bold mt-2">${product.price}</p>
                {/* <button className="w-full mt-4 p-2 btn-color">Add to Favorite</button> */}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products found for "{searchQuery}".</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default EcommerceSearch;
