import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";


const Contact = () => {
    return (
        <>
            <div>
                <div className='relative'>
                    <img src='harvest5.jpg' className='h-[50vh] w-full object-cover'></img>
                    <div className='absolute lg:top-48 md:top-44 sm:top-44 lg:left-[92vh] md:left-[42vh] sm:left-[8vh] text-white'>
                        <p className='text-5xl'><b>Conatct US</b></p>
                    </div>
                </div>
                <div className='flex lg:flex-row md:flex-col sm:flex-col justify-evenly py-28  bg-[#f2f2f2]'>
                    <div className='lg:w-[44vh] md:w-[80vh] mb-10 sm:w-[44vh] flex flex-col lg:p-0 md:p-0 sm:p-3 gap-3  lg:ml-0 md:ml-20 sm:ml-7'>
                        <p className=''>Contact now</p>
                        <p className='text-5xl text-green-900'>Get in touch with us</p>
                        <p className=''>our contact information reflects our commitment to providing excellent
                            customer service and support to all users of our AgriSoko connect platform. Feel free to
                            reach out to us with any questions or needs you may have.
                        </p>
                        <div className='flex gap-3'>
                            <div className='rounded-full bg-[#eae5cb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl'><FaTwitter /></div>
                            <div className='rounded-full bg-[#eae5cb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl'><MdOutlineFacebook /></div>
                            <div className='rounded-full bg-[#eae5cb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl'><FaPinterestP /></div>
                            <div className='rounded-full bg-[#eae5cb] flex items-center justify-center w-11 h-11 opacity-60 text-2xl'><FaInstagram /></div>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5 lg:ml-0 md:ml-20 sm:ml-7'>
                        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-5'>
                            <input type='text' placeholder='Names' className='bg-[#eceae0] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
                            <input type='email' placeholder='Email' className='bg-[#eceae0] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
                        </div>
                        <div className='flex lg:flex-row md:flex-col sm:flex-col gap-5 '>
                            <input type='phone' placeholder='Phone number' className='bg-[#eceae0] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
                            <input type='text' placeholder='Subject' className='bg-[#eceae0] rounded-xl p-5 lg:w-[40vh] md:w-[80vh] sm:w-[40vh]'></input>
                        </div>
                        <div>
                            <textarea placeholder='Write message' className='bg-[#eceae0] rounded-xl p-2 lg:w-[83vh] md:w-[80vh] sm:w-[40vh] h-[30vh]'></textarea>
                        </div>
                        <Link to='/login' className=' bg-yellow-200 px-5 py-3 lg:w-[23vh] md:w-[27vh] sm:w-[27vh] text-xl rounded-xl text-black hover:text-white hover:bg-green-900'> Send message</Link>

                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Contact