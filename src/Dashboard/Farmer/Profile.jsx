import React from 'react'

const Profile = () => {
  return (
    <div className=''>
      <div className='p-5 bg-[#f2f2f2] flex flex-col gap-10 '>
        <div className="flex justify-center">
          <strong className='text-xl'>Upload My Harvest</strong>
        </div>
        <div>
          <p className='text-xl'>Coperative name</p>
        </div>
      </div>
      <div>
        <button>Update cooperative</button>
      </div>
    </div>
  )
}

export default Profile