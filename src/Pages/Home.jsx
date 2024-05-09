import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
      <div className='relative'>
        <img src='logincp.jpg' className='w-full'></img>
        <div className='text-white absolute top-14 left-10 flex flex-col gap-10'>
          <p className='underline underline-offset-8'>WE'RE AGRISUPPLY CHAIN COMMUNITY</p>
          <p className='text-7xl w-[70vh]'>Welcome to AgriSoko Connect</p>
          <p className='w-[70vh]'>Empowering farmers, bridging markets, revolutionizing agriculture through seamless market connections</p>
          <Link to=''><button className='bg-yellow-300 rounded-2xl text-black p-3 px-5'>DISCOVER MORE</button></Link>
        </div>
      </div>
    </div> 
    </>    
  )
}

export default Home