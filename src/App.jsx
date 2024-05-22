import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import Forget from "./Authentication/Forget";
import Reset from "./Authentication/Reset";
import Otp from "./Authentication/Otp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Farmers from "./Pages/Farmers";
import Navbar from "./Dashboard/Navbar";

import FirstPage from "./Dashboard/Admin/FirstPage";
import Cooperatives from "./Dashboard/Admin/Cooperatives";
import Operation from "./Dashboard/Admin/Operation";
import Setting from "./Dashboard/Admin/Setting";
import OneOrderDetails from "./Dashboard/Admin/OneOrderDetails";

import LandingPage from "./Dashboard/Farmer/LandingPage";
import ReceivedOrders from "./Dashboard/Farmer/ReceivedOrders";
import UploadProduct from "./Dashboard/Farmer/UploadProduct";
import Profile from "./Dashboard/Farmer/Profile";
import FarmerLayout from "./Dashboard/Farmer/FarmerLayout";
import Stock from "./Dashboard/Farmer/Stock";

import BuyerLayout from "./Dashboard/Buyer/BuyerLayout";
import BLandingPage from "./Dashboard/Buyer/BLandingPage";
import AllOrders from "./Dashboard/Buyer/AllOrders";
import Create from "./Dashboard/Buyer/Create";
import ViewOrder from "./Dashboard/Buyer/ViewOrder";
import Support from "./Dashboard/Buyer/Support";
import BuyerProfile from "./Dashboard/Buyer/Profile";

import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="farmers" element={<Farmers />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/otp" element={<Otp />} />

        <Route path="dashboard">
          <Route
            path="admin"
            element={<ProtectedRoute allowedRoles={["admin"]} />}
          >
            <Route element={<Navbar />}>
              <Route path="" element={<FirstPage />} />
              <Route path="cooperatives" element={<Cooperatives />} />
              <Route path="operations" element={<Operation />} />
              <Route
                path="operations/orderDetails"
                element={<OneOrderDetails />}
              />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Route>

          <Route
            path="farmer"
            element={<ProtectedRoute allowedRoles={["farmer"]} />}
          >
            <Route element={<FarmerLayout />}>
              <Route path="" element={<LandingPage />} />
              <Route path="orders" element={<ReceivedOrders />} />
              <Route path="uploadproduct" element={<UploadProduct />} />
              <Route path="profile" element={<Profile />} />
              <Route path="stock" element={<Stock />} />
            </Route>
          </Route>

          <Route
            path="buyer"
            element={<ProtectedRoute allowedRoles={["buyer"]} />}
          >
            <Route path="" element={<BuyerLayout />}>
              <Route path="" element={<BLandingPage />} />
              <Route path="allorders" element={<AllOrders />} />
              <Route path="create" element={<Create />} />
              <Route path="profile" element={<BuyerProfile />} />
              <Route path="view" element={<ViewOrder />} />
              <Route path="support" element={<Support />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
