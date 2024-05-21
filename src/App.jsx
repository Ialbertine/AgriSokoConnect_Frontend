import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import SignIn from './Authentication/SignIn'
import SignUp from './Authentication/SignUp'
import Forget from './Authentication/Forget'
import Reset from './Authentication/Reset'
import Otp from './Authentication/Otp'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Farmers from './Pages/Farmers'
import Navbar from './Dashboard/Navbar'

import FirstPage from './Dashboard/Admin/FirstPage'
import Cooperatives from './Dashboard/Admin/Cooperatives'
import Operation from './Dashboard/Admin/Operation'
import Setting from './Dashboard/Admin/Setting'
import OneOrderDetails from './Dashboard/Admin/OneOrderDetails'

import LandingPage from './Dashboard/Farmer/LandingPage'
import ReceivedOrders from './Dashboard/Farmer/ReceivedOrders'
import UploadProduct from './Dashboard/Farmer/UploadProduct'
import Profile from './Dashboard/Farmer/Profile'
import FarmerLayout from './Dashboard/Farmer/FarmerLayout'
import Stock from './Dashboard/Farmer/Stock'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/services" element={<Services />} />
          </Route>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/forget' element= {<Forget />} />
          <Route path='/reset' element= {<Reset />} />
          <Route path='/otp' element= {<Otp />} />
        
          <Route path='/dashboard' element={<Navbar></Navbar>}>
            <Route path='/dashboard/admin' element={<FirstPage/>}/>
            <Route path='/dashboard/Cooperatives' element={<Cooperatives/>}/>
            <Route path='/dashboard/operations' element={<Operation/>}/>
            <Route path='/dashboard/operations/orderDetails' element={<OneOrderDetails/>}/>
            <Route path='/dashboard/setting' element={<Setting/>}/>
          </Route>

          <Route path='/dashboard' element={<FarmerLayout></FarmerLayout>}>
            <Route path='/dashboard/farmer' element={<LandingPage/>}/>
            <Route path='/dashboard/orders' element={<ReceivedOrders/>}/>
            <Route path='/dashboard/uploadproduct' element={<UploadProduct/>}/>
            <Route path='/dashboard/profile' element={<Profile/>}/>
            <Route path='/dashboard/stock' element={<Stock/>}/>
          </Route>
          

        </Routes>

        
      </Router>
    </>
  );
}

export default App