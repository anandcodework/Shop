import React, { useState } from 'react';
import { MdComputer, MdMenu } from 'react-icons/md';
import { PiHeart } from 'react-icons/pi';
import ResponsiveMenu from './ResponsiveMenu';
import ProfileBtn from './ProfileBtn';
import { Link } from 'react-router-dom';

function NoSearchNavbar() {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => setOpen(prevOpen => !prevOpen);

  const handleMenuClose = () => setOpen(false);

  return (
    <>
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

            {/* Fullscreen Search Modal */}
           

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
    </>
  );
}

export default NoSearchNavbar;
