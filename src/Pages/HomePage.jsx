import React, { useState } from 'react';
import Navbar from '../componets/Navbar/Navbar';
import Products from '../componets/Products/Products';
import Menu from '../componets/Navbar/Menu';
import Footer from '../componets/Footer/Footer';
function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handler for updating search query
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {/* Pass search query and handler to SearchNavbar */}
      <Navbar handleInputChange={handleInputChange} query={searchQuery} />
      <Menu/>

      {/* Pass search query to EcommerceSearch */}
      <Products searchQuery={searchQuery} />
      <Footer/>
    </div>
  );
}

export default HomePage;
