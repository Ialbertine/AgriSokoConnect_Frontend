import React, { useEffect, useState } from 'react'
import Navbar from '../Dashboard/Navbar'
import axios from 'axios';

const Farmers = () => {

  const [farmers, setFarmers] = useState([]);
  const [token, setToken] =useState();

  const getToken = () =>{
    let Token = localStorage.getItem(token);
    setToken(Token);
  }

  useEffect(() =>{
    getToken();
  }, [])

  const FetchFarmers = () =>{
    axios({
      method:'GET',
      url:'',
      headers:{
        Accept:'application/json',
        Authorization:`Bearer ${token}`
      }
    })
    .then((response) =>{
      console.log(response);
      setFarmers(response);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  useEffect(() =>{
    FetchFarmers();
  })

  return (
    <>
    
    </>
  )
}

export default Farmers