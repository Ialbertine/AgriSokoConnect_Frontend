import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-md shadow-md h-[20%] mt-6">
      <div className="flex flex-col text-center">
        <p className="text-green-600 mb-4 text-xl">
          Password reset instructions sent to your email.
        </p>
        <Link
          to="https://mail.google.com/"
          className="text-green-900 hover:underline"
        >
          check you email to verify
        </Link>
      </div>
      <button onClick={onClose} className="absolute top-0 right-0 p-2"></button>
    </div>
  </div>
);

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://agrisokoconnect-wly4.onrender.com/AgriSoko/user/forgotPassword",
        { email }
      );
      if (response.status === 200) {
        setLoading(false);
        setSuccess(true);
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred. Please try again later.");
    }
  };

  const closeModal = () => {
    setSuccess(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#000000c6]">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md ">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Forgot Password
        </h2>
        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#d3d3d372] shadow-md border-[1px] mt-1 px-4 py-2 block w-full rounded-md border-gray-300 focus:ring-black"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`bg-green-700 text-white px-4 py-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Reset Password"}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        ) : (
          <SuccessPopup onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Forgot;
