import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.usernameOrEmail.trim()) {
      errors.usernameOrEmail = "Username/Email is required";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }
    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    if (!formData.rememberMe) {
      errors.rememberMe = "Please agree to the terms and conditions";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      
      console.log(formData);
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat min-h-screen flex items-center justify-center object-cover bg-opacity-95"
      style={{ backgroundImage: "url('bgphoto1.jpg')" }}
    >
      <div className="w-[60%]  bg-[#898888] opacity-70 max-w-md py-8 px-8 rounded-lg">
        <h1 className="text-3xl font-bold pt-3 text-[#475e35de]">
          Welcome Back
        </h1>
        <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-8">
          <div className="mb-4">
            <label htmlFor="usernameOrEmail" className="block mb-1">
              Username/Email:
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              name="usernameOrEmail"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                errors.usernameOrEmail ? "border-red-500" : ""
              }`}
            />
            {errors.usernameOrEmail && (
              <p className="text-red-500 text-xs mt-1">
                {errors.usernameOrEmail}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-4 flex items-center">
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
          {errors && (
            <p className="text-red-500 text-xs mb-2">{errors.rememberMe}</p>
          )}
          <div className="mb-4 text-sm">
            <span>
            <Link to="/forget" className="text-green-900 hover:underline font-medium">
              Forgot password?
            </Link>
            </span>
          </div>
          <button
            type="submit"
            className="w-full  bg-green-900 text-white py-2 rounded-md hover:bg-[#378000] transition duration-300 mb-3"
          >
            Login
          </button>
          <div className="flex items-center justify-center pb-3">
            <hr className="w-[40%] border-[1px]" />
            <span className="mx-2">Or</span>
            <hr className="w-[40%] border-[1px]" />
          </div>
          <div className="flex items-center justify-center pb-2">
            <button className="px-[3rem] border flex justify-center items-center gap-2  text-white py-2 rounded-md hover:bg-[#586958] transition duration-300">
              <img src="google.png" alt="" className="w-9" />
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
