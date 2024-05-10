import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";


const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userRole: "",
    agreeTerms: false,
    showPassword: false,
    errors: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      userRole: "",
      agreeTerms: "",
    },
  });

  const [isLoading, setLoading] = useState(false);
  const [isSuccessMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: inputValue });
  };

  const passwordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

    

  const validateForm = () => {
      const errors = {};
    

    if (!formData.fullName) {
      errors.fullName = "Full Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,16}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.userRole) {
      errors.userRole = "User role is required";
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = "Please agree to terms and conditions";
    }
    
    setFormData({ ...formData, errors: errors });
    return Object.keys(errors).length === 0;

  }; 
   
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const signUpData = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
      userRole: userRole,
    };

    try {
      const response = await axios.post(
        "http://agrisokoconnect-wly4.onrender.com/AgriSoko/user/signup",
        signUpData
      );
      setSuccessMessage("You have registered successfully!");
      setErrorMessage("");
      console.log(response.data); 
    } catch (error) {
      setErrorMessage("An error occurred while registering");
      setSuccessMessage("");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const isSignUpDisabled = () => {
    return Object.values(formData).some((val) => val === "" || val === false);
  };

 return (
   <div
     className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat bg-opacity-50 object-cover"
     style={{ backgroundImage: "url('harvest5.jpg')" }}
   >
     <div className="w-[80%] flex flex-col lg:flex-row lg:w-[70%] rounded-2lg">
       <div className="flex-grow lg:w-[40%] p-8 overflow-hidden">
         <div className="flex flex-col justify-center lg:pt-[10rem] text-[#cccbcb]">
           <span className="text-center lg:text-left text-4xl lg:text-6xl font-bold lg:pb-[1rem] font-serif">
             AgriSoko
             <br />
             <span className="text-green-900 pl-[3rem]">-Connect</span>
           </span>
           <p className="text-lg lg:text-xl mb-4 w-full">
             Connecting farmers, innovators, and enthusiasts to cultivate a
             sustainable future. Join us on this journey to nurture the earth
             and feed the world.
           </p>
           {/* Optional: Add an image if needed */}
           {/* <img src="logo2.png" alt="AgriSoko-Connect Logo" className="w-40 mx-auto mb-4" /> */}
         </div>
       </div>
       <div className="bg-white opacity-70 shadow-2xl rounded-xl p-8 w-[100%] lg:w-[40%] h-[70%]">
         <h1 className="text-center text-3xl font-bold mb-4 text-green-900">
           Register Here
         </h1>
         <span>
           {errorMessage && (
             <p className="text-red-500 text-sm ml-2">{errorMessage}</p>
           )}
         </span>
         <form onSubmit={handleSubmit} className="flex flex-col">
           <label htmlFor="fullName">Full Name</label>
           <input
             type="text"
             id="fullName"
             name="fullName"
             value={formData.fullName}
             onChange={handleChange}
             required
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
           />
           {formData.errors.fullName && (
             <p className="">{formData.errors.fullName}</p>
           )}

           <label htmlFor="email">Email</label>
           <input
             type="email"
             id="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             required
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
           />
           {formData.errors.email && (
             <p className="">{formData.errors.email}</p>
           )}

           <label htmlFor="phoneNumber" className="">
             Phone Number
           </label>
           <input
             type="text"
             id="phoneNumber"
             name="phoneNumber"
             value={formData.phoneNumber}
             onChange={handleChange}
             required
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
           />
           {formData.errors.phoneNumber && (
             <p className="">{formData.errors.phoneNumber}</p>
           )}

           <label htmlFor="password" className="">
             Password
           </label>
           <div className="relative">
             <input
               type={formData.showPassword ? "text" : "password"}
               id="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               required
               className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
             />
             <span
               onClick={passwordVisibility}
               className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
             >
               {formData.showPassword ? <FaEyeSlash /> : <FaEye />}
             </span>
           </div>
           {formData.errors.password && (
             <p className="text-red-500 text-sm">{formData.errors.password}</p>
           )}

           <label htmlFor="confirmPassword" className="">
             Confirm Password
           </label>
           <input
             type="password"
             id="confirmPassword"
             name="confirmPassword"
             value={formData.confirmPassword}
             onChange={handleChange}
             required
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
           />
           {formData.errors.confirmPassword && (
             <p className="text-red-500 text-sm">
               {formData.errors.confirmPassword}
             </p>
           )}

           <label htmlFor="userRole" className="">
             User Role
           </label>
           <select
             id="userRole"
             name="userRole"
             value={formData.userRole}
             onChange={handleChange}
             required
             className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2"
           >
             <option value="" disabled>
               Select User Role
             </option>
             <option value="admin">Farmer</option>
             <option value="user">Buyer</option>
           </select>

           {formData.errors.userRole && (
             <p className="">{formData.errors.userRole}</p>
           )}

           <div className="flex gap-1 pb-2">
             <input
               type="checkbox"
               id="agreeTerms"
               name="agreeTerms"
               checked={formData.agreeTerms}
               onChange={handleChange}
               required
             />
             <label htmlFor="agreeTerms" className="text-sm">
               I agree to the Terms and Conditions
             </label>
             {formData.errors.agreeTerms && (
               <p className="text-xs text-red-500">
                 {formData.errors.agreeTerms}
               </p>
             )}
           </div>

           <div className="mt-4 flex justify-center pb-3">
             <button
               type="submit"
               className={`bg-green-900 hover:bg-[#378000] text-white font-bold py-2 px-4 rounded-md w-[50%] ${
                 isSignUpDisabled() || isLoading ? "cursor-pointer" : ""
               }`}
               disabled={isLoading}
               onClick={() => {
                 setLoading(true);
               }}
             >
               {isLoading ? "Loading..." : "Sign Up"}
             </button>
             {errorMessage && <p className="text-red-500">{errorMessage}</p>}
           </div>
           {isSuccessMessage && (
             <p className="text-green-900 text-center">{isSuccessMessage}</p>
           )}
         </form>
         <span className="flex justify-center gap-1">
           Already have an account?{" "}
           <Link to="/login" className="text-green-900">
             Sign In
           </Link>
         </span>
       </div>
     </div>
   </div>
 );
};

export default SignUp;
