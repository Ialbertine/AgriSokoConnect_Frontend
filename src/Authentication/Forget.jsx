import React, { useState } from "react";
import { Link } from "react-router-dom";

const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-md shadow-md h-[20%] mt-6 relative">
      <button onClick={onClose} className="absolute top-2 right-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 hover:text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col text-center">
        <p className="text-green-600 mb-4 text-xl pt-3">
          Password reset instructions sent to your email.
        </p>
          <Link
            to="https://mail.google.com/"
            className="text-blue-900 hover:underline"
          >
            Check your Email to Verify
          </Link>
      </div>
    </div>
  </div>
);

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  const closeModal = () => {
    setSuccess(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#9ba09b]">
      <div className="w-full max-w-md p-6 bg-[#f5f4f3] rounded-md shadow-lg">
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
                className="border mt-1 px-4 py-2 block w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`bg-green-900 text-white px-4 py-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Reset Password"}
              </button>
            </div>
          </form>
        ) : (
          <SuccessPopup onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Forgot;
