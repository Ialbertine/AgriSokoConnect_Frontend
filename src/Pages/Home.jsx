import React from 'react'
import { Link } from 'react-router-dom'
import { PiArrowBendDownLeftThin } from "react-icons/pi";
import About from './About';


const Home = () => {
  return (
    <>
      <div>
        <div className='relative'>
          <img src='logincp.jpg' className=' lg:h-[90vh] md:h-[85vh] sm:h-[88vh] w-full object-cover'></img>
          <div className='text-white mt-24 absolute top-14 lg:left-48 md:left-20 sm:left-10 flex flex-col lg:gap-10 md:gap-7 sm:gap-5'>
            <p className='underline underline-offset-8'>WE'RE AGRISUPPLY CHAIN COMMUNITY</p>
            <p className='lg:text-7xl md:text-6xl sm:text-4xl lg:w-[80vh] md:w-[80vh] sm:w-[40vh]'>Welcome to AgriSoko Connect</p>
            <p className='lg:w-[70vh] md:w-[70vh] sm:w-[40vh]'>Empowering farmers, bridging markets, revolutionizing agriculture through seamless market connections</p>
            <div className='flex gap-8 relative'>
              <Link to=''><button className='bg-yellow-300 rounded-2xl text-black p-3 px-5 hover:text-white hover:bg-green-900'>DISCOVER MORE</button></Link>
              <div className=' absolute bottom-0 left-56'>
                <PiArrowBendDownLeftThin className='text-yellow-300 text-8xl lg:block md:block sm:hidden' />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='bg-[#eaeaf1] relative'>
            <div className='absolute bottom-0 left-60'>
            </div>
            <div className=' w-20 h-40 bg-[#5f766f] opacity-60 absolute rounded-r-xl top-32 left-0'></div>
            <div className='w-14 h-12 bg-yellow-300 opacity-90 absolute  rounded-2xl top-[36vh] left-12'></div>
            <div className='py-32 flex lg:flex-row md:flex-row sm:flex-col items-center justify-center gap-10'>
              <div className='lg:w-[69vh] md:w-[44vh] sm:w-[44vh] flex flex-col lg:p-0 md:p-0 sm:p-3 gap-3'>
                <p className='text-lg'>Get to know our priority:</p>
                <p className='text-4xl text-green-900'>Harvest Showcasing</p>
                <p className='text-lg text-justify'>Cooperatives celebrating the food they grow, proudly show them off to everyone
                  and throughout the day, they engage with the distributors and vendors for increasing MARKET ACCESS
                  bridge the gap between farmers and buyers, promote agricultural development, and empower farmers through technology.
                </p>
                <p className=''><i>It is marvelous seeing farmers benefiting from what they have made </i></p>
              </div>
              <div>
                <img src='Growth.jpg' className='lg:w-[66vh] md:w-[56vh] sm:w-[66vh] rounded-lg'></img>
              </div>
            </div>
          </div>

        </div>

        {/* VIDEO */}

        <div>
          
        </div>


        {/* MISSION, VISION & VALUES */}

        <div className='flex items-center justify-center gap-20 text-white px-40 py-20 bg-cover bg-no-repeat'
          style={{ backgroundImage: "url('Mission.jpg')" }}
        >
          <div className='flex flex-col gap-7'>
            <p className='text-2xl'>MISSION</p>
            <div>
              <p className='border-r-2 border-gray-400 w-[50vh] text-lg pr-5'>create a transparent, efficient, and inclusive agricultural marketplace that connects farmers, buyers,
                and other stakeholders, enabling fair and profitable transactions while promoting sustainability
                and economic growth in rural communities.
              </p>
            </div>

          </div>
          <div className='flex flex-col gap-7'>
            <p className='text-2xl'>VISION</p>
            <p className='border-r-2 border-gray-400 w-[50vh] text-lg pr-5'>
              revolutionize agricultural trade by leveraging technology to bridge the gap
              between producers and consumers, ensuring food security, empowering farmers, and fostering prosperity
              across the agricultural value chain.
            </p>
          </div>
          <div className='flex flex-col gap-7'>
            <p className='text-2xl'>VALUES</p>
            <div>
              <ol className=' text-lg'>
                <li>Transparency</li>
                <li>Empowerment</li>
                <li>Sustainability</li>
                <li>Community collaboration</li>
              </ol>
            </div>
          </div>
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
            <p className='text-xl p-3'></p>
          </div>
        </div>

        {/* COOPERATIVES */}

        <div className='flex lg:flex-row md:flex-row sm:flex-col justify-evenly md:items-start sm:items-center lg:items-start py-10 border border-t-2'>
          <div className='flex lg:flex-col md:flex-col sm:flex-row lg:gap-3 md:gap-3 sm:gap-5 items-center'>
            <img src='Tuzamurane.jpg' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full object-cover '></img>
            <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Tuzamurane cooperative</p>
          </div>
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
            <img src='MilleniumCooperative.jpg' className='lg:w-32 md:w-20 sm:w-24 lg:h-32 md:h-20 sm:h-24 rounded-full object-cover'></img>
            <p className='lg:w-32 md:w-20 sm:w-20 lg:text-xl md:text-xl sm:text-lg'>Millenium Village Tour</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home