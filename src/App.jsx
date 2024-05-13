import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import SignIn from './Authentication/SignIn'
import SignUp from './Authentication/SignUp'
import Forget from './Authentication/Forget'
import Reset from './Authentication/Reset'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Route>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/forget' element= {<Forget />} />
          <Route path='/reset' element= {<Reset />} />
        </Routes>
      </Router>
    </>
  );
}

export default App