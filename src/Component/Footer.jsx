import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>
    <div className='flex items-center justify-between bg-[#6d8c54] px-40 p-8 text-white'>
      <div className=''>
        <p className='flex items-center gap-2'><MdOutlineCopyright/> Copyrights 2024 by ...</p>
      </div>
      <div className='flex gap-6'>
        <RiTwitterXLine />
        <IoLogoFacebook className='text-white' />
        <GrInstagram />
      </div>
    </div>
    </>
  )
}

export default Footer