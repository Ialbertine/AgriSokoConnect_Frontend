import React from 'react'
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PreFooter = () => {
  return (
    <>
      <div className=' flex items-start justify-evenly p-20 bg-[#334b35] text-white'>
        <div className='flex flex-col'>
          <div>
            <img src='logo2.png' className=' w-48'></img>
            <p className='text-gray-400'>AgriSupply Chain Community</p>
          </div>
          <div className='border border-r-1 border-gray-500 my-10'></div>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <MdCall className='bg-yellow-400 text-black ' />
              <p>+250 788 888 888</p>
            </div>
            <div className='flex items-center gap-2'>
              <MdEmail className='text-yellow-400' />
              <p>agrisoko@connect.com</p>
            </div>
            <div className='flex items-center gap-2'>
              <IoLocationOutline className='text-yellow-400' />
              <p>KG 549 Street, Impact Center, Kacyiru</p>
            </div>
          </div>
        </div>

        {/* News */}

        <div className='flex flex-col gap-8'>
          <p className='text-2xl'>News</p>
          <div className='flex items-center gap-5'>
            <img src='news1.jpg' className='w-20 h-20 rounded-full' ></img>
            <div className='w-96flex flex-col gap-3'>
              <p className=' text-yellow-400 text-sm'><b>8 May, 2024</b></p>
              <Link to='https://allafrica.com/stories/202405080048.html' className='text-lg hover:text-yellow-400'><p>How Will Government Finance the 2024-2025 Budget?</p></Link>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <img src='news2.jpeg' className='w-20 h-20 rounded-full' ></img>
            <div className='w-96  flex flex-col gap-3'>
              <p className=' text-yellow-400 text-sm'><b>26 April, 2024</b></p>
              <Link to='https://fao.org/rwanda/news/detail-events/en/c/1681307/'><p className='text-lg hover:text-yellow-400'>Rwanda’s $502m agricultural investment opportunities ‘offer prosperity prospects’.</p></Link>
            </div>
          </div>
        </div>

        {/* Explore */}

        <div className='flex flex-col gap-8'>
          <p className='text-2xl'>Explore</p>
          <div className='flex flex-col gap-10'>
            <Link to=''><p className='text-gray-400 hover:underline hover:decoration-yellow-400'>Our Services</p></Link>
            <Link to=''><p className='text-gray-400 hover:underline hover:decoration-yellow-400'>About us</p></Link>
            <Link to=''><p className='text-gray-400 hover:underline hover:decoration-yellow-400'>Get in touch</p></Link>
            <Link to=''><p className='text-gray-400 hover:underline hover:decoration-yellow-400'>Farmers</p></Link>
          </div>
        </div>

      </div>
    </>


  )
}

export default PreFooter