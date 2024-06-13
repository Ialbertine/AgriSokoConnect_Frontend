import React, { useEffect, useState } from "react";
import axios from "axios";

const GLandingPage = () => {
  const [farmersWithStock, setFarmersWithStock] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleFetch = async () => {
    let token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    try {
      const response = await axios({
        method: "GET",
        url: "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/transaction/allFarmers",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setFarmersWithStock(response.data.farmersWithStock);
    } catch (error) {
      console.error("Fetch error: ", error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized access. Please check your token.");
      } else {
        setError("Failed to fetch farmer and their stock data");
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const filteredFarmers = farmersWithStock.filter((farmerData) =>
    farmerData.farmer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="relative">
        <img
          src="/AboutUs.png"
          alt="Agri-Connect Banner"
          className="h-[20vh] w-[100%] object-cover"
        />
        <div className="absolute lg:top-10 md:top-24 sm:top-5 lg:left-[70vh] md:left-[42vh] sm:left-[8vh] text-[#cbcaca]">
          <p className="text-4xl font-bold">Government Dashboard</p>
        </div>
      </div>

      <div className='bg-[#f2f2f2] flex flex-col gap-5 p-5 px-8'>
        <strong>Most asked question</strong>
        <div className=' flex flex-col gap-5'>

          <p className='flex flex-col'>"A clariffication was requested on the innovation fund and the target group, climate resilience
            technology, who will be the target group?"<span className='text-sm text-gray-500'>~ <span className='text-lg'>Ingabire Tina</span> (Farmer)</span>
          </p>

          {/* <p>"Innovation and technology target youth and women. Details will be developed during
            the implementation phase with support of stakeholders" <span className='text-sm text-gray-500'>~Minagri</span>
          </p> */}
        </div>
        <strong>Provide answer</strong>
        <div>
          <form className='flex flex-col gap-3 items-start'>
            {/* <input type='text' placeholder='Names' className='px-5 py-3 border-2 rounded-lg w-[48vh]'></input>
            <input type='text' placeholder='Cooperative (optional)' className='px-5 py-3 border-2 rounded-lg w-[48vh]'></input>
            <input type='email' placeholder='Email' className='px-5 py-3 border-2 rounded-lg w-[48vh]'></input> */}
            <textarea className='h-[20vh] px-5 py-3 border-2 rounded-lg w-[78vh]' placeholder="Provide the answer for this farmer's question"></textarea>
            <button className='text-white rounded-lg px-4 bg-[#269553] hover:bg-[#2d7a4a] p-1'>Post</button>
          </form>
        </div>
      </div>
      <div className="pt-10 pl-3">
        <input
          type="text"
          placeholder="Search farmers..."
          className="p-2 mb-4 border rounded"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="stock-container px-4 py-8 bg-white rounded-md shadow-md">
  <h2 className="text-2xl font-semibold mb-4">
    List of the Farmer and their stock
  </h2>
  {error && (
    <div className="text-red-500 mb-4">
      <p>{error}</p>
    </div>
  )}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {filteredFarmers.length > 0 ? (
      filteredFarmers.map((farmerData, index) => (
        <div key={index} className="border p-4 rounded shadow">
          <h3 className="text-xl font-bold">{farmerData.farmer}</h3>
          {farmerData.stock.length > 0 && ( // Check if farmer has any stock
            <div className="border p-4 rounded shadow mb-4">
              <div className="flex justify-center">
                <img
                  src={farmerData.stock[0].image}
                  alt={farmerData.stock[0].NameOfProduct}
                  className="w-[75%] h-[10rem] object-cover mb-4"
                />
              </div>
              <span className="text-xl font-medium">
                Product Name: {farmerData.stock[0].NameOfProduct}
              </span>
              <p className="text-gray-600">
                Description: {farmerData.stock[0].description}
              </p>
              <div className="flex gap-2 text-xl font-medium">
                <span>Price Per Ton: {farmerData.stock[0].pricePerTon}</span>
                <span>RWF</span>
              </div>
              <div className="flex gap-2 text-xl font-medium">
                <span>Quantity: {farmerData.stock[0].quantity}</span>
                <span>Ton</span>
              </div>
              <span className="text-xl font-medium">
                Type of Product: {farmerData.stock[0].typeOfProduct}
              </span>
            </div>
          )}
        </div>
      ))
    ) : (
      <div className="pl-4">
        <p>No stock data available</p>
      </div>
    )}
  </div>
</div>

    </div>
  );
};

export default GLandingPage;
