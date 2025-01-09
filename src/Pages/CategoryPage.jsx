import { useState } from "react";
import Navbar from './../componets/Navbar/Navbar';
import Menu from './../componets/Navbar/Menu';
import ShowProducts from '../componets/Products/ShowProducts'
import Footer from '../componets/Footer/Footer'



function CategoryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Handler for updating search query
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <>
      <Navbar handleInputChange={handleInputChange} query={searchQuery} />
      <Menu />
      <ShowProducts searchQuery={searchQuery}/>
      <Footer />
    </>
  );
}

export default CategoryPage;