import React, { useState, useEffect, useRef } from 'react';
import { MdComputer, MdMenu, MdSearch } from 'react-icons/md';
import { PiHeart } from 'react-icons/pi';
import ResponsiveMenu from '../Navbar/ResponsiveMenu';
import ProfileBtn from '../Navbar/ProfileBtn';
import { Link } from "react-router-dom";

function SearchNavbar({ handleInputChange, query }) {
  const [open, setOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const searchRef = useRef(null);

  // Function to handle search when pressing Enter
  const handleSearch = () => {
    if (query.trim() !== '') {
      console.log('Searching for:', query); // Implement your search logic
      setShowSearchModal(false); // Close the search modal after searching
    }
  };

  // Handle key press to trigger search on Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle outside click to close modal
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearchModal(false); // Close modal if click is outside the search bar
    }
  };

  // Effect to detect outside clicks
  useEffect(() => {
    if (showSearchModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchModal]);

  return (
    <nav className='bg-secondary fixed top-0 z-10 w-full mb-0 px-8'>
      <div>
        <div className="container flex justify-between items-center p-2 ml-5">
          {/* Logo section */}
          <div className="text-2xl md:ml-10 flex items-center gap-2 font-bold uppercase">
            <Link to='*' className='flex flex-row justify-center items-center gap-2'>
              <MdComputer className='text-primary' />
              <p className='text-primary'>JBR</p>
              <p className="text-third">Shop</p>
            </Link>
          </div>

          <div className="relative w-full flex items-center justify-end gap-2 p-4">
            {/* Search section */}
            <div>
              {/* Search Icon */}
              <button
                onClick={() => setShowSearchModal(true)} // Show search modal on click
                className="text-2xl hover:bg-primary hover:text-black text-primary font-bold rounded-full p-2 duration-200"
              >
                <MdSearch />
              </button>
            </div>

            {/* Fullscreen Search Modal */}
            {showSearchModal && (
              <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-80">
                {/* Search Bar positioned 80px from the top */}
                <div
                  ref={searchRef} // Attach ref to search bar div
                  className="relative w-full max-w-2xl p-4 mt-2" // Add margin-top for 80px (20 units = 80px)
                >
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full px-4 h-9 py-3 text-gray-700 rounded-full bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Trigger search on Enter
                    autoFocus // Automatically focus the input when the modal opens
                  />
                </div>
              </div>
            )}

            {/* Shopping Cart Button
            <button className="text-2xl hover:bg-primary hover:text-black hover:rounded-full text-primary font-bold rounded-full p-2 duration-200 hidden sm:flex">
              <Link to='/favorite'><PiHeart /></Link>
            </button> */}

            {/* Profile Button */}
            <button className="text-xl hover:bg-primary hover:text-black text-primary font-bold rounded-full p-2 duration-200">
              <ProfileBtn />
            </button>
          </div>

          {/* Mobile hamburger Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl text-primary" />
          </div>
        </div>
      </div>

      {/* Mobile slidebar section */}
      <ResponsiveMenu open={open} />
    </nav>
  );
}

export default SearchNavbar;
