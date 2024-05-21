import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, TextField, Button, Typography } from "@mui/material";

const BuyerProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    address1: "",
    address2: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://agrisokoconnect-wly4.onrender.com/AgriSoko/profile/info"
      );
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userData.fullName || !userData.email || !userData.phoneNumber) {
      console.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      console.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(
        "https://agrisokoconnect-wly4.onrender.com/AgriSoko/profile/update",
        {
          fullName: userData.fullName,
          email: userData.email,
          address1: userData.address1,
          address2: userData.address2,
          phoneNumber: userData.phoneNumber,
        }
      );
      if (response.ok) {
        console.log("Buyer updated successfully");
        navigate("/dashboard");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <div className=" justify-center">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={userData.fullName}
            onChange={(e) =>
              setUserData({ ...userData, fullName: e.target.value })
            }
            variant="outlined"
            className="mb-4"
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            variant="outlined"
            className="mb-4"
          />
          <div className="flex gap-2">
            {/* Address 1 */}
            <TextField
              fullWidth
              label="Address 1"
              name="address1"
              value={userData.address1}
              onChange={(e) =>
                setUserData({ ...userData, address1: e.target.value })
              }
              variant="outlined"
              className="mb-4"
            />

            {/* Address 2 */}
            <TextField
              fullWidth
              label="Address 2"
              name="address2"
              value={userData.address2}
              onChange={(e) =>
                setUserData({ ...userData, address2: e.target.value })
              }
              variant="outlined"
              className="mb-4"
            />
          </div>
          {/* Phone Number */}
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
            variant="outlined"
            className="mb-4"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ bgcolor: "#006400", "&:hover": { bgcolor: "#008000" } }}
          >
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BuyerProfile;
