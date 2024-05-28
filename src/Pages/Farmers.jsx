import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { VscLoading } from "react-icons/vsc";
import Accordion from './Accordion';

const Farmers = () => {


  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/user/getAllFarmers');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.farmersWithStock && Array.isArray(data.farmersWithStock)) {
          setFarmers(data.farmersWithStock);
        } else {
          throw new Error('Expected an array but received a different type of response');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFarmers();
  }, []);

  if (loading) {
    return (
      <div>
        <div className='relative'>
          <img src='farmerlogin.webp' className='h-[50vh] w-full object-cover'></img>
          <div className='absolute lg:top-48 md:top-44 sm:top-44 lg:left-[92vh] md:left-[42vh] sm:left-[8vh] text-white'>
            <p className='text-5xl'><b>Our Farmers</b></p>
          </div>
        </div>
        <div className='pt-20 flex justify-center gap-5 text-xl h-[80vh] text-black font-semibold'>
          <VscLoading className='animate-spin' />
          <p>Loading</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='relative'>
        <img src='farmerlogin.webp' className='h-[50vh] w-full object-cover'></img>
        <div className='absolute lg:top-48 md:top-44 sm:top-44 lg:left-[92vh] md:left-[42vh] sm:left-[8vh] text-white'>
          <p className='text-5xl'><b>Our Farmers</b></p>
        </div>
        <div className=' pt-10 px-10 text-xl font-semibold'>Some error occured!</div>
      </div>
    )
  }

  return (
    <>
      <div>
        <div className='relative'>
          <img src='farmerlogin.webp' className='h-[50vh] w-full object-cover'></img>
          <div className='absolute lg:top-48 md:top-44 sm:top-44 lg:left-[92vh] md:left-[42vh] sm:left-[8vh] text-white'>
            <p className='text-5xl'><b>Our Farmers</b></p>
          </div>
        </div>
        <strong className='text-xl pt-10 flex lg:items-center md:items-center sm:items-start justify-center'>Our Farmers List:</strong>
        <div className='flex pl-44 justify-center py-10'>
          <div>
            {farmers.length === 0 ? (
              <p>No farmers available</p>
            ) : (
              <ul className='flex lg:flex-row flex-wrap md:flex-row sm:flex-col gap-10'>
                {farmers.map((farmer, index) => (
                  <li key={index} className=' lg:w-[50vh] md:w-[40vh] sm:w-[39vh] border shadow-md shadow-slate-400 py-3 px-5 flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold'>{farmer.farmer.toUpperCase()}</h2>
                    <p className='text-lg font-thin'>My farming efforts focus on growing:</p>
                    <ul className='flex flex-col'>
                      {farmer.stock.map((product) => (
                        <div>
                          <li key={product._id} className='list'>
                            <img src={product.image} className='h-[25vh] w-full object-cover pb-3'></img>
                            <Accordion title={product.NameOfProduct.toUpperCase()}
                              answer={' Specification: ' + product.typeOfProduct}
                              answer1={' Quantity: ' + product.quantity + ' ton'}
                              answer2={' Price per ton: ' + product.pricePerTon + ' RWF'}
                              answer3={' Description: ' + product.description}
                            />
                          </li>
                        </div>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Farmers