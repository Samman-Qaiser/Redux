import React, { useEffect } from 'react'
import './style.css'
import axios from "axios";
import ProductComp from './ProductComp'
import { useDispatch } from 'react-redux'
import { setproducts } from '../services/actions/action';
function ProductListing() {
  const dispatch=useDispatch()
  const fetchapi = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response && response.data) {
        dispatch(setproducts(response.data));
        console.log(response.data);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  
  useEffect(()=>{
     fetchapi()
  
  },[])
 
 
 
  return (
    <div className='listing' >
    <ProductComp />
    </div>
  )
}

export default ProductListing