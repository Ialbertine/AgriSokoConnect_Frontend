import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className='flex items-center justify-between text-lg text-gray-500 py-[1vh] fixed z-10 w-full bg-white px-[1.6rem] lg:px-[10rem]'>
        <div>
          <img src='logo.png' className='lg:w-40 md:w-32 sm:w-32' alt='Logo' />
        </div>
        <div className='hidden md:flex lg:gap-10 md:gap-4 sm:gap-0'>
          <Link to='/' className='hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Home</Link>
          <Link to='/about' className='hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> About</Link>
          <Link to='/allfarmers' className='hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Farmers</Link>
          <Link to='/services' className='hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Services</Link>
          <Link to='/contact' className='hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Contact</Link>
          <div className='pl-3'>
            <Link to='/login' className='bg-green-900 px-5 py-2 rounded-md text-white hover:text-black hover:bg-yellow-200 transition duration-300 ease-in-out'>Sign In</Link>
          </div>
        </div>
        <div className='md:hidden flex'>
          <button onClick={toggleMenu} className='text-3xl focus:outline-none'>
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>
      <div className={`fixed top-[10.6vh] right-0 z-10 md:hidden sm:w-[60%] h-[78%] bg-[#eff2ef] transition-transform duration-700 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='text-xl flex flex-col items-center gap-4 py-4'>
          <Link to='/' className='py-2 hover:underline hover:decoration-yellow-400 underline-offset-[1vh]' onClick={closeMenu}>Home</Link>
          <Link to='/about' className='py-2 hover:underline hover:decoration-yellow-400 underline-offset-[1vh]' onClick={closeMenu}>About</Link>
          <Link to='/allfarmers' className='py-2 hover:underline hover:decoration-yellow-400 underline-offset-[1vh]' onClick={closeMenu}>Farmers</Link>
          <Link to='/services' className='py-2 hover:underline hover:decoration-yellow-400 underline-offset-[1vh]' onClick={closeMenu}>Services</Link>
          <Link to='/contact' className='py-2 hover:underline hover:decoration-yellow-400 underline-offset-[1vh]' onClick={closeMenu}>Contact</Link>
          <Link to='/login' className='py-2 bg-green-900 px-5 rounded-md text-white hover:text-black hover:bg-yellow-200 transition duration-300 ease-in-out' onClick={closeMenu}>Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
