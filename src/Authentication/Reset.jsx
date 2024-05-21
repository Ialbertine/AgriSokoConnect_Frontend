import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const passwordRegex = /^.{4,10}$/;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (!password.match(passwordRegex)) {
      setError("Password must be at least 4 to 8 characters long");
      setLoading(false);
      return;
    }

    axios
      .post(
        "https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/user/resetPassword",
        {
          password: password,
          confirmPassword: confirmPassword,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setSuccess(true);

          setPassword("");
          setConfirmPassword("");
        } else {
          console.error("Password reset failed.");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setLoading(false);
      });
  };

  const closeModal = () => {
    setSuccess(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#000000c6]">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Reset Password
        </h2>
        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border mt-1 px-4 py-2 block w-full bg-[#c5c7c631] rounded-md shadow-md border-gray-300 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border mt-1 px-4 py-2 block w-full rounded-md shadow-md bg-[#c5c7c631] border-gray-300 focus:ring-black"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`bg-green-800 text-white px-4 py-2 rounded-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Resetting..." : "Reset Password"}
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

const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-md shadow-md h-[20%] mt-6">
      <div className="flex flex-col text-center">
        <p className="text-green-600 mb-4 text-xl">
          Password reset successful!
        </p>
        <Link to="/login" className="text-green-900 hover:underline">
          Return to Sign In
        </Link>
      </div>
      <button onClick={onClose} className="absolute top-0 right-0 p-2"></button>
    </div>
  </div>
);

export default Reset;
