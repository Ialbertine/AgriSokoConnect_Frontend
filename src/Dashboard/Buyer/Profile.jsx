import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    address1: "",
    address2: "",
    PhoneNumber: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token missing from local storage");
          return;
        }

        const response = await fetch(
          `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/profile/info`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUserData({ ...data, PhoneNumber: data.PhoneNumber || "" });
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

 const handleSubmit = async (event) => {
   event.preventDefault();

   try {
     const token = localStorage.getItem("token");
     if (!token) {
       console.error("Token missing from local storage");
       return;
     }

     const response = await fetch(
       `https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/profile/update`,
       {
         method: "PUT",
         headers: {
           Authorization: `Bearer ${token}`,
           "Content-Type": "application/json",
         },
         body: JSON.stringify(userData),
       }
     );

     if (response.ok) {
       console.log("Profile updated successfully");
     } else {
       const errorMessage = await response.text(); // Get error message from response body
       console.error("Failed to update profile:", errorMessage);
     }
   } catch (error) {
     console.error("Error updating profile:", error);
   }
 };


  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <div className="justify-center">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-lg font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={userData.fullName}
              onChange={(e) =>
                setUserData({ ...userData, fullName: e.target.value })
              }
              className="w-full border border-gray-300 px-3 py-3 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              disabled
              className="w-full border border-gray-300 px-3 py-3 rounded"
            />
          </div>

          <div className="flex gap-2">
            <div className="mb-4 w-full">
              <label
                htmlFor="address1"
                className="block text-lg font-medium mb-2"
              >
                District
              </label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={userData.address1}
                onChange={(e) =>
                  setUserData({ ...userData, address1: e.target.value })
                }
                className="w-full border border-gray-300 px-3 py-3 rounded"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="address2"
                className="block text-lg font-medium mb-2"
              >
                Province
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={userData.address2}
                onChange={(e) =>
                  setUserData({ ...userData, address2: e.target.value })
                }
                className="w-full border border-gray-300 px-3 py-3 rounded"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={userData.PhoneNumber}
              onChange={(e) =>
                setUserData({ ...userData, PhoneNumber: e.target.value })
              }
              className="w-full border border-gray-300 px-3 py-3 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
