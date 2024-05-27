import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { VscLoading } from "react-icons/vsc";

const Operation = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   Fetcing total farmers 

  useEffect(() => {
      const fetchBuyerOrders = async () => {
          try {
              const token = localStorage.getItem("token");
              if (!token) {
                  setError('No token found, please log in');
                  setLoading(false);
                  return;
              }

              const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/admin/buyers', {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              });

              if (!response.ok) {
                  throw new Error(`Network response was not ok: ${response.statusText}`);
              }

              const contentType = response.headers.get('content-type') || '';
              if (!contentType.includes('application/json')) {
                  //   throw new Error(`Unexpected response format: ${contentType}`);
              }

              const data = await response.json();
              console.log('Fetched data:', data); // Debug log
              setOrders(data);
        
          } catch (error) {
              console.error('Error fetching farmers:', error); // Debug log
              setError(error.message);
          } finally {
              setLoading(false);
          }
      };

      fetchBuyerOrders();
    }, []);

    return (
    <div className='p-10 flex flex-col gap-5 bg-[#f2f2f2]'>
      <strong className='text-xl'>MANAGE ORDERS</strong>
      <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 p-5'>
        <strong>Reccent order</strong>
        <div className='mt-3'>
        </div>
      </div>

    </div>
  )
}


export default Operation