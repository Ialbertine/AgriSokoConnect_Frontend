import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [quality, setQuality] = useState("");
  const [unit, setUnit] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation for the order
    let isValid = true;
    setErrorMessage("");

    if (quantity < 1 || !Number.isInteger(quantity)) {
      isValid = false;
      setErrorMessage("Please enter a valid quantity (positive integer).");
    }

    if (quality.trim() === "") {
      isValid = false;
      setErrorMessage("Please enter the product quality.");
    }

    if (phoneNumber.trim() === "") {
      isValid = false;
      setErrorMessage("Please enter your phone number.");
    }

    if (shippingAddress.trim() === "") {
      isValid = false;
      setErrorMessage("Please enter your shipping address.");
    }

    if (!unit) {
      isValid = false;
      setErrorMessage("Please select a unit.");
    }

    //  this next line says if validation is successful, create the order
    if (isValid) {
      try {
        const response = await axios.post(
          "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/order/create",
          {
            quantity,
            quality,
            phoneNumber,
            shippingAddress,
          }
        );

       
        setSuccessMessage("Order created successfully!");
        navigate("/payment"); 
      } catch (error) {
        console.error("Error creating order:", error);
        setErrorMessage("Failed to create order. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-4">Create New Order</h1>

      {errorMessage && (
        <div className="text-red-500 font-bold mb-4">{errorMessage}</div>
      )}

      {successMessage && (
        <div className="text-green-500 font-bold mb-4">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="w-[80%] lg:w-[50%]">
        <div className="mb-3 w-full">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-bold mb-1"
          >
            Quantity
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="shadow appearance-none border rounded w-[50%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
            <select
              id="unit"
              name="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="shadow appearance-none border rounded w-[50%] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black ml-3"
              required
            >
              <option value="" disabled>
                Select Unit
              </option>
              <option value="kg">Kg</option>
              <option value="Ton">Ton</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="quality"
            className="block text-gray-700 font-bold mb-1"
          >
            Quality
          </label>
          <input
            type="text"
            id="quality"
            name="quality"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-bold mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="shippingAddress"
            className="block text-gray-700 font-bold mb-1"
          >
            Shipping Address
          </label>
          <textarea
            id="shippingAddress"
            name="shippingAddress"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
        </div>
        <div className="flex gap-5">
          <button
            type="submit"
            className="bg-green-900 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-2"
          >
            Proceed for Payment
          </button>

          <Link to="/">
            <button
              type="button"
              className="bg-green-900 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-offset-2"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
