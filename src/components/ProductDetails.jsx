import React, { useEffect } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux'
import { purchaseproduct, removeproduct } from '../services/actions/action';
import { selectedproduct } from '../services/actions/action';
import axios from 'axios'
import { useParams } from "react-router-dom";
function ProductDetails() {

  const state=useSelector(state=>state.product)
  const { productId } = useParams();
  console.log("params",useParams())
  const dispatch=useDispatch()
  const fetchapidetail = async (id) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (response && response.data) {
        dispatch(selectedproduct(response.data));
        console.log(response.data);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  const viewdetail = async (id) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (response && response.data) {
      dispatch(purchaseproduct(response.data));
        console.log(response.data);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  useEffect(()=>{
  if(productId && productId!=='') fetchapidetail(productId)
    return ()=>{
     dispatch(removeproduct())
  }
  },[])
  return (
    <div className="product-details">
      <div className="wrapper">
        <div className="product-img">
          <img src={state.image} alt="Harvest Vase" height="420" width="327" />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h4>{state.title}</h4>
            <p><span>${state.price}</span></p>
            <p>
            {state.description}
            </p>
        
          </div>
          <div className="product-price-btn">

            <button type="button" onClick={()=>{viewdetail(productId)}}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
