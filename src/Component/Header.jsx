import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='flex items-center justify-around text-lg text-gray-500 py-3'>
            <div>
                <img src='logo.png' className='w-32'></img>
            </div>
            <div className='flex gap-10'>
                <Link to='/' className=' hover:underline hover:decoration-yellow-600'> Home</Link>
                <Link to='/' className=' hover:underline hover:decoration-yellow-600'> About</Link>
                <Link to='/' className=' hover:underline hover:decoration-yellow-600'> Farmers</Link>
                <Link to='/' className=' hover:underline hover:decoration-yellow-600'> Services</Link>
                <Link to='/' className=' hover:underline hover:decoration-yellow-600'> Contact</Link>
            </div>
            <div>
                <Link to='/' className=' bg-green-900 px-3 py-1 rounded-xl text-white'> Login</Link>
            </div>
        </div>
    </>
  )
}

export default Header