import React from 'react'
import { PiHandsClappingThin } from "react-icons/pi";

const About = () => {
    return (
        <>
            <div>
                <div className='relative'>
                    <img src='AboutUs.png' className='h-[50vh] w-full object-cover'></img>
                    <div className='absolute lg:top-48 md:top-44 sm:top-44 lg:left-[92vh] md:left-[42vh] sm:left-[8vh] text-white'>
                        <p className='text-5xl'><b>About Us</b></p>
                    </div>
                </div>
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
                            <p className=''><i>It is marvelous seeing farmers benefiting from what they have made </i></p><PiHandsClappingThin />
                        </div>
                        <div>
                            <img src='Growth.jpg' className='lg:w-[66vh] md:w-[56vh] sm:w-[66vh] rounded-lg'></img>
                        </div>
                    </div>
                </div>
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
            </div>
        </>
    )
}

export default About