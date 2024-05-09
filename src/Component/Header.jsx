import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='flex items-center justify-around text-lg text-gray-500 py-6'>
            <div>
                <img src='logo.png' className='w-40'></img>
            </div>
            <div className='flex gap-10'>
                <Link to='/' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Home</Link>
                <Link to='/about' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> About</Link>
                <Link to='/farmers' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Farmers</Link>
                <Link to='/services' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Services</Link>
                <Link to='/contact' className=' hover:underline hover:decoration-yellow-400 underline-offset-[1vh]'> Contact</Link>
            </div>
            <div>
                <Link to='/login' className=' bg-green-900 px-3 py-1 rounded-xl text-white'> Login</Link>
            </div>
        </div>
    </>
  )
}

export default Header