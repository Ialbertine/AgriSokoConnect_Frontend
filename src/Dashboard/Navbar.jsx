import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Navbar = (props) => {
  return (
    <div className='flex '>
      <div >
        <SideBar />
      </div>
      <section className='w-full'>
        <Outlet/>
        {props.children}
      </section>
    </div>
  )
}

export default Navbar