import React from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
        <div className='flex items-center justify-around text-lg text-gray-500 py-[1vh] fixed z-10 w-full bg-white'>
            <div>
                <img src='logo.png' className=' lg:w-40 md:w-32 sm:w-32'></img>
            </div>
            <div className='hidden md:block'>
                <div className='flex lg:gap-10 md:gap-4 sm:gap-0 '>
                    <Link to='/' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Home</Link>
                    <Link to='/about' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> About</Link>
                    <Link to='/farmers' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Farmers</Link>
                    <Link to='/services' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Services</Link>
                    <Link to='/contact' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Contact</Link>
                    <Link to='/login' className=' bg-green-900 px-5 py-1 rounded-xl text-white hover:text-black hover:bg-yellow-300'> Login</Link>
                </div>
                <div>
                    <Link to={'/'} className='block md:hidden text-2xl'><IoMenu /></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header