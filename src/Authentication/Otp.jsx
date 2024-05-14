import React, { useState } from "react";
import axios from "axios";

const OTP = ({ onSubmit }) => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (index, value) => {
    if (value.length <= 1 && value.match(/[0-9]/)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      if (index < otp.length - 1) {
        setActiveIndex(index + 1);
      }
    }
  };

  const handleKeyPress = (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          setActiveIndex(index - 1);
        }
      } else {
        const newOTP = [...otp];
        newOTP[index] = "";
        setOTP(newOTP);
      }
    } else if (e.key.match(/[0-9]/)) {
      const newOTP = [...otp];
      newOTP[index] = e.key;
      setOTP(newOTP);

      if (index < otp.length - 1) {
        setActiveIndex(index + 1);
      }
    }
  };

  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const otpValue = otp.join("");
    try {
      const response = await axios.post(
        "https://agrisokoconnect-wly4.onrender.com/AgriSoko/user/verify",
        { otp: otpValue }
      );

      console.log(response);

      onSubmit(response.data);
      setShowSuccessModal(true); // Show success modal on successful verification
    } catch (error) {
      console.error("Error:", error.response.data);
      setErrorMessage(
        error.response.data.message || "OTP verification failed."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#000000a7]">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                className={`w-12 h-12 border border-[#0000005f] rounded-md text-center ${
                  activeIndex === index
                    ? "border-blue-500 focus:border-blue-700"
                    : ""
                }`}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyPress(index, e)}
                onFocus={() => handleFocus(index)}
                autoFocus={index === activeIndex}
              />
            ))}
          </div>
          {errorMessage && (
            <div className="text-red-500 text-center mt-2">{errorMessage}</div>
          )}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-green-900 text-white px-6 py-2 rounded-md"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-4">
              Verification Successful!
            </p>
            <p className="mb-4">Your account has been successfully verified.</p>
            <p
              className="text-blue-500 cursor-pointer"
              onClick={() => setShowSuccessModal(false)}
            >
              Click here to sign in.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OTP;
