import React, { useEffect } from 'react'
import { LiaCameraRetroSolid } from "react-icons/lia";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const UploadProduct = () => {

  // uploading harvest image

  const [image, setImage] = useState([]);

  // function deleteImage(index) {
  //   setImage((prevImage) =>
  //     prevImage.filter((_, i) => i !== index)
  //   );
  // }

  // Submitting to storage

  const submitStock = () => {
    axios({
      method: 'POST',
      url: 'https://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/add',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => {
        console.log(response.data);
        setUploads(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // Handle uploaded stock 
  

  const [message, setMessage] = useState({
    type: '',
    content: ''
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploads, setUploads] = useState({
    NameOfProduct: '',
    description: '',
    pricePerTon: '',
    quantity: '',
    typeOfProduct: '',
    image: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
 
    try {
      const token = localStorage.getItem("token");
      console.log(token);
 
      const response = await fetch(`http://agrisokoconnect-backend-ipza.onrender.com/AgriSoko/stock/add`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
 
    } catch (error) {
      console.error("Error uploading to stock:", error);
    } finally {
     setLoading(false)
    }
  };
     useEffect(() => {
       let timeout;
       if (message) {
         timeout = setTimeout(() => {
           setMessage("");
         }, 20000);
       }
       return () => {
         if (timeout) clearTimeout(timeout);
       };
     }, [message]);
 
  return (
    <div className='p-5 bg-[#f2f2f2] flex flex-col gap-10 pb-20'>
      <div className="flex justify-center">
        <strong className='text-xl'>Upload My Harvest</strong>
      </div>
      <div className=' flex items-end gap-5 pl-40 pt-5'>
        <TbInfoTriangleFilled className='text-6xl text-red-800 animate-pulse' />
        <p className='text-2xl w-[55%]'> Please upload your products only when you have a new, unstocked harvest!</p>
      </div>
      <div className='flex gap-10 justify-center items-start pt-5'>
        <div className=''>
          
          <form onSubmit={handleSubmit} className='flex gap-10 pt-4'>
            <div className='flex flex-col gap-3 w-[70vh]'>
              <strong>Harvest information</strong>
              <input type='text' placeholder='Product name' value={uploads.NameOfProduct} 
              onChange={(e) =>
                setUploads({...uploads, NameOfProduct: e.target.value})
              }
                className='px-5 py-3 border-2 rounded-lg'>
              </input>

              <input type='text' placeholder="Type of product (ubwoko bw'igihingwa wahinze)" value={uploads.typeOfProduct}
              onChange={(e) =>
                setUploads({...uploads, typeOfProduct: e.target.value})
              } 
                className='px-5 py-3 border-2 rounded-lg'>
              </input>

              <input type='text' placeholder='Description' value={uploads.description}
              onChange={(e) =>
                setUploads({...uploads, description: e.target.value})
              }
                className='px-5 py-3 border-2 rounded-lg'>
              </input>

              <input type='number' placeholder='Quantinty' value={uploads.quantity}
              onChange={(e) =>
                setUploads({...uploads, quantity: e.target.value})
              }
                className='px-5 py-3 border-2 rounded-lg'>
              </input>

              <input type='number' placeholder='Price per tone' value={uploads.pricePerTon}
              onChange={(e) =>
                setUploads({...uploads, pricePerTon: e.target.value})
              }
                className='px-5 py-3 border-2 rounded-lg'>
              </input>
              <button className='text-white rounded-lg px-3 hover:bg-[#269553] bg-[#2d7a4a] p-1 py-2 text-lg w-[23vh]' type='submit' disabled={loading}>
                {!loading && "Upload to stock"}
                {loading && "Loading ..."}
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <strong>Harvest image</strong>

              {/* UPLOADING IMAGE  */}

              <LiaCameraRetroSolid className='text-4xl' />
              <input
                type='file'
                name='file'
                multiple>

              </input>
            </div>
            <div>
              {/* image preview */}
            </div>

          </form>
        </div>


      </div>
    </div >
  )
}

export default UploadProduct