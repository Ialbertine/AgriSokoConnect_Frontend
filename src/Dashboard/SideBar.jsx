import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
        <div className='flex flex-col px-10 py-20 gap-5 text-2xl text-green-900 w-[30vh] border-r-2 h-[99vh]'>
            <Link to='/dashboard/admin' className='  px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'>Dashboard</Link>
            <Link to='/dashboard/Cooperatives' className='  px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'>Cooperatives</Link>
            <Link to='/dashboard/operations' className='  px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'>Operations</Link>
            <Link to='' className='  px-3 py-1 rounded-xl hover:text-white hover:bg-green-900'>Settings</Link>
        </div>
  )
}

export default SideBar