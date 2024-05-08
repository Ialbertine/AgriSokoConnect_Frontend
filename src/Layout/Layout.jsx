import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import PreFooter from '../Component/PreFooter'
import Footer from '../Component/Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <PreFooter/>
        <Footer/>
    </>


  )
}

export default Layout