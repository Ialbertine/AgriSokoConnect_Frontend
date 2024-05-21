import React from 'react'
import { LiaCameraRetroSolid } from "react-icons/lia";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { useState, useRef } from 'react';

const UploadProduct = () => {

  // uploading harvest image

  const [image, setImage] = useState([]);
  const [isBrowsed, setIsBrowsed] = useState(false);
  const fileInputRef = useRef(null);

  function selectFile() {
    fileInputRef.current.click();
  }

  function deleteImage (index) {
    setImage((prevImage) =>
      prevImage.filter((_, i) => i !== index)
    );
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < file.length; i++) {
      if (files[i].type.split('/')[0] !== 'image') continue;
      if (!image.some((e) => e.name === file[i].name)) {
        setImage((prevImage) => [
          ...prevImage,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]
        )
      }
    }
  }

  return (
    <div className='p-5 bg-[#f2f2f2] flex flex-col gap-10 h-[100vh]'>
      <div className="flex justify-center">
        <strong className='text-xl'>Upload My Harvest</strong>
      </div>
      <div className=' flex items-center gap-5 justify-center pt-10'>
        <TbInfoTriangleFilled className='text-6xl text-red-800' />
        <p className='text-2xl w-[40%]'> Please upload your products only when you have a new, unstocked harvest!</p>
      </div>
      <div className='flex gap-10 justify-center items-start pt-5'>
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
            <button className='text-white rounded-lg px-3 hover:bg-[#269553] bg-[#2d7a4a] p-1 py-2 text-lg w-[23vh]'>Upload to stock</button>
          </form>
        </div>
        <div className='flex flex-col gap-4'>
          {isDragging ? (
            <span>drop image here</span>
          ) : (
            <>
              Drag & drop image
              <span onClick={selectFile}>
                Browse
              </span>
            </>
          )}
          <strong>Harvest image</strong>
          {/* <div className='border-2 border-separate w-[60vh] h-[33vh] rounded-sm p-5 bg-white flex flex-col justify-center items-center'> */}

          <LiaCameraRetroSolid className='text-4xl' />
          <input type='file' name='file' multiple ref={fileInputRef} onChange={onFileSelect}></input>
        </div>
        <div>
          {image.map((images, index) => (
            <div>
              <span onClick={() => deleteImage()}>&times;</span>
              <img src={images.url} alt={images.name}></img>
            </div>
          ))}
        </div>
        <button className='underline underline-offset-4 text-blue-500 hover:text-blue-700'>
          Uplpoad
        </button>
      </div>
    </div >
  )
}

export default UploadProduct