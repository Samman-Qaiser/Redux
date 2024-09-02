import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
function Header() {
const state=useSelector((state) =>state.purchased.array)
  return (
    <div className='nav'>
       <h1>Shopping Store</h1>
       <Link to="/viewdetails">
       <img style={{width:"50px",marginRight:"20px"}}
        src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
       </Link>
         <span className="cart-count" style={{backgroundColor:"white",color:"black",padding:"0.3rem",borderRadius:"50%",position:"absolute",right:"30px",top:"0px",fontSize:"0.9rem",width:"20px",height:"20px",textAlign:"center"}}>{state.length}</span>
    </div>
  )
}

export default Header