import React from 'react';
import { MdAirplay } from 'react-icons/md';
import { Link } from 'react-router-dom';



function Hero() {
  return (
    <>
      <section className='hero-container bg-blend-lighten md:bg-blend-darken  bg-fixed'>
        <div className="container">
          {/* {Brand info} */}
          <div className="flex  py-14 md:py-0 font-playfair">
            <div className="text-left mt-26 max-[768px]:mt-16 md:text-left items-end">
              <h1 className=" md:mt-20  text-3xl lg:text-6xl font-bold text-primary leading-relaxed xl:leading-normal">
                Discover Your Perfect
                <span className="text-secondary m-0 p-0"> Tech Partner </span>
              </h1>
              <h3 className='text-xl lg:text-4xl mt-8 font-semibold text-primary/90 leading-relaxed'>Find the Latest Computers, Accessories, and More</h3>
              <p className="text-primary mt-3 xl:max-xl-w-[500px]">
                Whether you're a gamer, a professional, or just looking to upgrade, we have the right solution for you. Explore our extensive range of cutting-edge computers, high-performance accessories, and unbeatable deals—all backed by expert advice and support.
              </p>
              {/* {Button section} */}
              <div className="flex justify-center mt-8 gap-8">
                {/* <button className="btn-color flex items-center gap-2">
                  Order Now
                </button> */}
                <button className="btn-color flex items-center gap-1">
                  
                  <Link to='/contact' className='flex items-center gap-2 '>
                  <MdAirplay /> Visit Store</Link>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;
