import React from 'react'
import { Link } from 'react-router-dom'
import { PiArrowBendDownLeftThin } from "react-icons/pi";


const Home = () => {
  return (
    <>
    <div>
      <div className='relative'>
        <img src='logincp.jpg' className=' lg:h-auto md:h-[70vh] sm:h-[80vh] w-full'></img>
        <div className='text-white absolute top-14 lg:left-48 md:left-20 sm:left-10 flex flex-col lg:gap-10 md:gap-7 sm:gap-5'>
          <p className='underline underline-offset-8'>WE'RE AGRISUPPLY CHAIN COMMUNITY</p>
          <p className='lg:text-7xl md:text-6xl sm:text-4xl lg:w-[80vh] md:w-[80vh] sm:w-[40vh]'>Welcome to AgriSoko Connect</p>
          <p className='lg:w-[70vh] md:w-[70vh] sm:w-[40vh]'>Empowering farmers, bridging markets, revolutionizing agriculture through seamless market connections</p>
          <div className='flex gap-8 relative'>
            <Link to=''><button className='bg-yellow-300 rounded-2xl text-black p-3 px-5 hover:text-white hover:bg-green-900'>DISCOVER MORE</button></Link>
            <div className=' absolute bottom-0 left-56'>
              <PiArrowBendDownLeftThin className='text-yellow-300 text-8xl lg:block md:block sm:hidden'/>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO */}
      
      <div>
        <video>

        </video>
      </div>

      {/* TESTIMONIAL */}

      <div>
        <div className='flex lg:flex-row md:flex-col sm:flex-col lg:items-start md:items-center sm:items-center justify-evenly py-24 bg-[#6d8c54]'>
          <div className=' flex flex-col gap-3'>
            <p>OUR TESTINOMIALS</p>
            <p className='text-4xl lg:w-80 md:w-[96vh] sm:w-[40vh]'> What did AgriSoko Connect change to your harvest sale?</p>
          </div>
          <div className='lg:w-80 md:w-[96vh] sm:w-[40vh] lg:h-80 md:h-60 sm:h-[60vh] p-10 flex flex-col gap-5 border bg-white'>
            <p>"With AgriSoko Connect, I sold my extra bags of potatoes effortlessly. The platform connected me with buyers in no time, 
              making the whole process smooth and stress-free."
            </p>
            <div className='flex items-center gap-5'>
              <img src='Testimonial1.jpg' className='w-20 h-20 rounded-full'></img>
              <div className='flex flex-col gap-1 items-center'>
                <p className='text-2xl text-green-900 font-bold'>Marc</p>
                <p>Farmer</p>
              </div>
            </div>
          </div>
          
          <div className='lg:w-80 md:w-[96vh] sm:w-[40vh] lg:h-80 md:h-60 sm:h-[60vh] p-10 flex flex-col gap-5 border bg-white'>
            <p>"I never thought selling our surplus onions could be so easy until we tried AgriSoko Connect. Listing them on the platform was a breeze, 
              and we had interested buyers reaching out to us within hours!"
            </p>
            <div className='flex items-center gap-5'>
              <img src='Testimonial2.jpg' className='w-20 h-20 rounded-full'></img>
              <div className='flex flex-col gap-1'>
                <p className='text-2xl text-green-900 font-bold'>Tarisa</p>
                <p>Cooperative manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEWS */}

      <div>
        <div>
          <p>News</p>
        </div>
      </div>

      {/* COOPERATIVES */}

      <div className='flex lg:flex-row md:flex-row sm:flex-col justify-evenly md:items-start sm:items-center lg:items-start py-10 border border-t-2'>
        <div className='flex lg:flex-col md:flex-col sm:flex-row lg:gap-3 md:gap-3 sm:gap-5 items-center'>
          <img src='KangukaCooperative.webp' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full'></img>
          <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Kanguka Association</p>
        </div>
        <div className='flex lg:flex-col md:flex-col sm:flex-row items-center  lg:gap-3 md:gap-3 sm:gap-5'>
          <img src='KopenyaruCooperative.jpg' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full'></img>
          <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Kopenyaru Cooperative</p>
        </div>
        <div className='flex lg:flex-col md:flex-col sm:flex-row items-center lg:gap-3 md:gap-3 sm:gap-5'>
          <img src='KarabaCoffee.png' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full'></img>
          <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Karaba Coffee Cooperative</p>
        </div>
        <div className='flex lg:flex-col md:flex-col sm:flex-row items-center lg:gap-3 md:gap-3 sm:gap-5 '>
          <img src='MilleniumCooperative.jpg' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full'></img>
          <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Millenium Village Tour</p>
        </div>
      </div>

    </div> 
    </>    
  )
}

export default Home