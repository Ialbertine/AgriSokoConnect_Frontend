import React from 'react'
import { LiaCameraRetroSolid } from "react-icons/lia";

const UploadProduct = () => {
  return (
    <div className='p-5 bg-[#f2f2f2] flex flex-col gap-10'>
      <div className="flex justify-center">
        <strong className='text-xl'>Upload My Harvest</strong>
      </div>
      <div className='flex gap-10 '>
        <div className=' w-[40%]'>
          <strong>Harvest information</strong>
          <form className='flex flex-col gap-3 pt-4'>
            <input type='text' placeholder='Product name' className='px-5 py-3 border-2 rounded-lg'></input>
            <input type='text' placeholder='Product type' className='px-5 py-3 border-2 rounded-lg'></input>
            <input type='number' placeholder='Quantity' className='px-5 py-3 border-2 rounded-lg'></input>
            <div className='flex gap-5'>
              <input type='text' placeholder='Expected price' className='px-5 py-3 w-[40vh] border-2 rounded-lg'></input>
              <input type='text' placeholder='units' className='px-5 py-3 border-2 rounded-lg'></input>
            </div> 
            <button>Upload to stock</button>
          </form>
        </div>
        <div className='flex flex-col gap-4'>
          <strong>Harvest image</strong>
          <div className='border-2 border-separate w-[30vh] h-[25vh] bg-white flex flex-col justify-center items-center'>
            <LiaCameraRetroSolid className='text-4xl'/>
            <button className='underline underline-offset-4 text-blue-500 hover:text-blue-700'>Upload photo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadProduct