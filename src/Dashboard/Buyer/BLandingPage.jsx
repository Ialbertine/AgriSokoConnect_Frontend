import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BLandingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);
  const [fetch, setFetch] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStockData = Array.isArray(fetch)
    ? fetch.filter((stockItem) =>
        stockItem.NameOfProduct.toLowerCase().includes(
          searchQuery.toLowerCase()
        )
      )
    : [];

  const handleFetch = async () => {
    let token = localStorage.getItem("token");
    try {
      const response = await axios({
        method: "GET",
        url: "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/retrieve",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setFetch(response.data.stocks);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch stock data");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="landing-page bg-gray-100">
      <div className="relative">
        <img
          src="../AboutUs.png"
          alt="Agri-Connect Banner"
          className="h-[20vh] w-[100%] object-cover"
        />
        <div className="absolute lg:top-10 md:top-24 sm:top-5 lg:left-[70vh] md:left-[42vh] sm:left-[8vh] text-[#cbcaca]">
          <p className="text-4xl font-bold">Buyer Dashboard</p>
        </div>
      </div>
      {error && <div>Error: {error}</div>}
      <div>{/* description content of the page here */}</div>
      <div className="m-4">
        <input
          type="text"
          placeholder="Search for a product"
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-md"
        />
        <h1 className="text-xl font-bold my-3">
          Choose what you can order from these
        </h1>
      </div>
      {filteredStockData.length > 0 ? (
        <div className="stock-container px-4 py-8 bg-white rounded-md shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">Available Stock</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStockData.map((stockItem, index) => (
              <Link
                key={index}
                to={`/dashboard/buyer/create/${
                  stockItem._id
                }/${encodeURIComponent(stockItem.NameOfProduct.trim())}`}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center no-underline"
              >
                <img
                  src={stockItem.image}
                  alt={stockItem.NameOfProduct}
                  className="w-32 h-32 object-cover mb-4"
                />
                <span className="text-xl font-medium">
                  Product Name: {stockItem.NameOfProduct}
                </span>
                <span className="text-gray-600">
                  Des: {stockItem.description}
                </span>
                <div className="flex gap-2 text-xl font-medium">
                  <span>Price PerTon: {stockItem.pricePerTon}</span>
                  <span>RWF</span>
                </div>
                <div className="flex gap-2 text-xl font-medium">
                  <span>Quantity: {stockItem.quantity}</span>
                  <span>Ton</span>
                </div>
                <span className="text-xl font-medium">
                  Type of Product: {stockItem.typeOfProduct}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="pl-4">
          <p>No stock data available</p>
        </div>
      )}
    </div>
  );
};

export default BLandingPage;
