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
    return <div className='text-xl h-[30vh] text-black font-semibold'><VscLoading className='animate-spin' />Loading</div>;
  }

  if (error) {
    return <div className='text-xl font-semibold'>Error: {error}</div>;
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
        <div className='px-44 py-10'>
          <strong className='text-xl flex items-center justify-center pb-7'>Our Farmers List:</strong>
          <div>
            {farmers.length === 0 ? (
              <p>No farmers available</p>
            ) : (
              <ul className=' flex gap-10'>
                {farmers.map((farmer, index) => (
                  <li key={index} className=' w-[60vh] border shadow-md shadow-slate-400 py-3 px-5 flex flex-col gap-3'>
                    <h2 className='text-2xl font-bold'>{farmer.farmer.toUpperCase()}</h2>
                    <p className='text-lg font-thin'>My farming efforts focus on growing:</p>
                    <ul className='flex flex-col'>
                      {farmer.stock.map((product) => (
                        <div>
                          {/* <ReadMore text={product} maxLength={70} /> */}
                          <li key={product._id} className='list'>
                            <Accordion title={product.NameOfProduct.toUpperCase()} answer={'Specification: ' + product.typeOfProduct + ' Quantity: ' + product.quantity + ' ton Price per ton: ' + product.pricePerTon + 'RWF' }/>
                            {/* <h3 className='text-lg text-[#6d8c54] font-semibold'>{product.NameOfProduct}</h3>
                            <img className='w-[40vh] pb-5' src={product.image} alt={product.NameOfProduct}></img>
                            <p><span className='font-bold'>Specification: </span>{product.typeOfProduct}</p>
                            <p><span className='font-bold'>Description: </span>{product.description}</p>
                            <p><span className='font-bold'>Quantity: </span>{product.quantity} tones</p>
                            <p><span className='font-bold'>Price per Tone: </span>{product.pricePerTon} RWF</p> */}
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