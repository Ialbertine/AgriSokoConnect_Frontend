import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://agrisokoconnect-wly4.onrender.com/AgriSoko/user/signin",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.success) {
        const { role } = response.data;

        setIsLoggedIn(true);

        switch (role) {
          case "farmer":
            navigate("/dashboard/farmer");
            break;
          case "buyer":
            navigate("/dashboard/buyer");
            break;
          case "government":
            navigate("/dashboard/government");
            break;
          default:
            navigate("/dashboard");
        }
      } else {
        setErrorMessage("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    if (!formData.rememberMe) {
      newErrors.rememberMe = "Please agree to the terms and conditions";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="bg-cover bg-no-repeat min-h-screen flex items-center justify-center object-cover bg-opacity-95"
      style={{ backgroundImage: "url('harvest5.jpg')" }}
    >
      <div className="w-[60%]  bg-[#bfc0bf] opacity-70 max-w-md py-8 px-8 rounded-lg">
        <h1 className="text-3xl font-bold pt-3 text-green-800 ">
          Welcome Back
        </h1>
        {isLoggedIn && (
          <span className="text-green-600 ml-2 text-xl">Login Successful!</span>
        )}

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="usernameOrEmail" className="block mb-1">
              Username/Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border-[1px] border-[#9e9e9e] hover:shadow-sm hover:shadow-black rounded-md focus:outline-none focus:border-black ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md border-[1px] border-[#9e9e9e] hover:shadow-sm hover:shadow-black focus:outline-none focus:ring-1 focus:ring-black"
            />
            <span
              onClick={passwordVisibility}
              className="absolute top-[69%] right-3 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
          <div className="mb-4 flex items-center pt-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm font-medium">
              Remember me
            </label>
          </div>

          {errors.rememberMe && (
            <p className="text-red-500 text-xs mb-2">{errors.rememberMe}</p>
          )}
          <div className="mb-4 text-sm">
            <span>
              <Link
                to="/forget"
                className="text-green-900 hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </span>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-xs mb-2">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full  bg-green-900 text-white py-2 rounded-md hover:bg-[#378000] transition duration-300 mb-3"
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>

          <div className="flex items-center justify-center pb-3">
            <hr className="w-[40%] border-[1px]" />
            <span className="mx-2">Or</span>
            <hr className="w-[40%] border-[1px]" />
          </div>
          <div className="flex items-center justify-center pb-2">
            <button
              type="button"
              className="px-[1.5rem] border flex justify-center items-center gap-2 text-black shadow-sm shadow-slate-800 hover:text-white hover:border-[#526152] py-2 rounded-md hover:bg-[#555855]  transition duration-300"
            >
              <img src="google.png" alt="" className="w-7" />
              <p>Log in with Google</p>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="">Don't have an account?</span>
            <span>
              <Link
                to="/signup"
                className="text-green-900 hover:underline ml-1 font-medium"
              >
                Register
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
