import React, { useState, useEffect } from "react";

const BLandingPage = () => {
  const [stockData, setStockData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/retrieve"
        );
        const data = await response.json();
        console.log("Fetched data:", data);

        // Ensure data is an array before setting it
        if (Array.isArray(data)) {
          setStockData(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStockData = Array.isArray(stockData)
    ? stockData.filter((stockItem) =>
        stockItem.NameOfProduct.toLowerCase().includes(
          searchQuery.toLowerCase()
        )
      )
    : [];

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
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
              >
                <img
                  src={stockItem.image}
                  alt={stockItem.NameOfProduct}
                  className="w-32 h-32 object-cover mb-4"
                />
                <span className="text-xl font-medium">
                  {stockItem.NameOfProduct}
                </span>
                <span className="text-gray-600">{stockItem.description}</span>
                <span className="text-xl font-medium">
                  {stockItem.PricePerTon}
                </span>
                <span className="text-xl font-medium">
                  {stockItem.quantity}
                </span>
                <span className="text-gray-600">{stockItem.totalPrice}</span>
                <span className="text-xl font-medium">
                  {stockItem.typeOfProduct}
                </span>
              </div>
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