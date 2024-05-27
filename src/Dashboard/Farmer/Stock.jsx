import React, { useEffect, useState } from 'react';
import { VscLoading } from "react-icons/vsc";
import { TbMoodSad } from "react-icons/tb";
// Import useHistory if needed
// import { useHistory } from 'react-router-dom';

const Stock = () => {
  // const history = useHistory();
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          // Uncomment the following line if using useHistory
          // history.push('/login');
          return;
        }

        const response = await fetch('https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/retrieve/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log('Fetched data:', data); // Debug log

          // Check if data contains the array of stocks directly
          if (data && Array.isArray(data.data)) {
            setStock(data.data);
          } else {
            throw new Error('Response data does not contain stocks');
          }
        } else {
          throw new Error('Response is not in JSON format');
        }
      } catch (error) {
        console.error('Error fetching stock:', error); // Debug log
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStock();
  }, []);

  if (loading) {
    return (
      <div className='pt-20 flex justify-center items-center gap-5 text-xl h-[80vh] text-black font-semibold'>
        <VscLoading className='animate-spin' />
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='pt-20 flex justify-center items-center gap-5 text-xl h-[80vh] text-black font-semibold'>
        <TbMoodSad />
        <p>{error}</p>
      </div>
    );
  }

  if (!Array.isArray(stock) || stock.length === 0) {
    return (
      <div className='pt-20 flex justify-center items-center gap-5 text-xl h-[80vh] text-black font-semibold'>
        <p>No stock available.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col px-10'>
      <div className='py-10 flex justify-center gap-5'>
        <strong>My Stock</strong>
      </div>
      <div>
        <p className='text-xl'>This is what you have in stock:</p>
      </div>
      <div className='px-5 flex gap-5'>
         <ul>
          {stock.map((item) => (
            <li key={item._id} className='border-b flex gap-5 items-center border-gray-200 py-4'>
                <strong className='pr-5 w-[15vh]'>{item.NameOfProduct}</strong>
               {/* <img src={item.image} alt={item.NameOfProduct} className='w-32 h-32 object-cover rounded-sm' />  */}
              <div className='w-[30vh]'>{item.typeOfProduct}</div>
              <div className='w-[35vh]'>{item.description}</div>
              <div className='w-[15vh]'>{item.quantity} tons</div>
              <div className='w-[15vh]'>{item.pricePerTon} RWF</div>
               {/* <div>Stock worth: {item.totalPrice}</div>  */}
              <div>
                <button className=' text-white rounded-lg px-3 hover:bg-[#269553] bg-[#2d7a4a] py-1 text-lg w-[18vh] mt-3'>Update stock</button>
              </div>
            </li>
          ))}
        </ul> 

        {/* <table className=' items-start table-column'>
          <thead>
            <tr className=''>
              <th >
                Type
              </th>
              <th className=''>
                Description
              </th>
              <th className=''>
                Quantity
              </th>
              <th className=''>
                Price per ton
              </th>
            </tr>
          </thead>
          {stock.map((item) => (
            <tr key={item._id}>
              <td>{item.typeOfProduct}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.pricePerTon}</td>
            </tr>
          ))}



        </table> */}
      </div>
    </div>
  );
};

export default Stock;
