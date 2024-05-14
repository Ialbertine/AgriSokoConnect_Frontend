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
      setShowSuccessModal(true); // Show the success modal
    } catch (error) {
      console.error("Error:", error.response.data);
      setErrorMessage(
        error.response.data.message || "OTP verification failed."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    window.location.href = "/sign-in"; // Redirect to sign-in page
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

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">
              Verification Successful
            </h3>
            <p className="mb-4">
              You have successfully verified your account. Go to the sign-in
              page.
            </p>
            <button
              className="bg-green-900 text-white px-6 py-2 rounded-md"
              onClick={handleCloseModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OTP;
