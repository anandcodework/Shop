import React, { useState, useRef, useEffect } from 'react';
import { MdManageAccounts } from 'react-icons/md';
import { ProfileData } from '../../mockData/data';
import { Link } from 'react-router-dom';

const ProfileBtn = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Profile icon button */}
      <div className="text-3xl cursor-pointer" onClick={() => setIsMenuActive(prev => !prev)}>
        <MdManageAccounts />
      </div>

      {/* Dropdown menu */}
      <div
        ref={menuRef}
        className={`absolute right-0 w-48 mt-2 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out transform ${
          isMenuActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        style={{ zIndex: 1000 }}
      >
        <ul className="list-none p-0 m-0">
          {ProfileData.map((item, index) => (
            <li key={index} className="hover:bg-black rounded-md">
              <Link to={item.link} className="flex items-center p-3 text-[17px] hover:text-white text-black">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileBtn;
