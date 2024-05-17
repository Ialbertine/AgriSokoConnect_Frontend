import React from 'react'

const Cooperatives = () => {
  return (
    <>
      <div className='p-10 flex flex-col gap-5 bg-[#f2f2f2]'>
        <div className='mb-5'>
          <strong className='text-xl'>MANAGE FARMERS (Cooperative)</strong>
        </div>
        <div className='flex flex-wrap gap-4'>
          <div className='w-[20rem] flex flex-col gap-5'>
            <img src='../Tuzamurane.jpg' className='rounded-lg w-[19rem] h-[12rem]'></img>
            <div>
              <p>Name: <strong>Tuzamurane cooperative</strong></p>
              <p>location: <strong>Musanze District</strong></p>
              <p>Crops type: <strong>Ananas</strong></p>
              <p>Land size: <strong>20 ha</strong></p>
            </div>
            <div className='flex gap-5 text-lg'>
              <button className='text-white rounded-lg px-3 bg-[#db5050] hover:bg-[#ad3e3e] p-1'>Block</button>
              <button className='text-white rounded-lg px-3 bg-[#269553] hover:bg-[#2d7a4a] p-1'>Suspend</button>
            </div>
          </div>
          <div className='w-[20rem] flex flex-col gap-5'>
            <img src='../harvest.jpg' className='rounded-lg w-[19rem] h-[12rem]'></img>
            <div>
              <p>Name: <strong>Bikorimana Boniface</strong></p>
              <p>location: <strong>Rusizi District</strong></p>
              <p>Crops type: <strong>Rice</strong></p>
              <p>Land size: <strong>12 ha</strong></p>
            </div>
            <div className='flex gap-5 text-lg'>
              <button className='text-white rounded-lg px-3 bg-[#db5050] hover:bg-[#ad3e3e] p-1'>Block</button>
              <button className='text-white rounded-lg px-3 bg-[#269553] hover:bg-[#2d7a4a] p-1'>Suspend</button>
            </div>
          </div>
          <div className='w-[20rem] flex flex-col gap-5'>
            <img src='../KopenyaruCooperative.jpg' className='rounded-lg w-[19rem] h-[12rem]'></img>
            <div>
              <p>Name: <strong>Kopenyaru cooperative</strong></p>
              <p>location: <strong>Gatsibo District</strong></p>
              <p>Crops type: <strong>Coffee</strong></p>
              <p>Land size: <strong>63 ha</strong></p>
            </div>
            <div className='flex gap-5 text-lg'>
              <button className='text-white rounded-lg px-3 bg-[#db5050] hover:bg-[#ad3e3e] p-1'>Block</button>
              <button className='text-white rounded-lg px-3 bg-[#269553] hover:bg-[#2d7a4a] p-1'>Suspend</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cooperatives