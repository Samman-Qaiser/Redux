import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'
function View() {
    const state=useSelector((state)=>state.purchased.array)
    const uniqueItems = state.reduce((acc, item) => {
        if (acc[item.id]) {
            acc[item.id].quantity += 1;
        } else {
            acc[item.id] = { ...item, quantity: 1 };
        }
        return acc;
    }, {});

    const uniqueItemsArray = Object.values(uniqueItems);
  return (
    <> 
    <div style={{textAlign:"center"}}>
    <h1>Items in the cart</h1>
    <div className='view-cont'>
     {uniqueItemsArray.map((item)=>{
        return(
            <>
                <div className='view-card'>
                <div style={{display:'flex',width:"100%",alignItems:"center",justifyContent:"space-evenly"}}>
                <img src={item.image}  style={{width:"80px",}}/>
                 <p>{item.title}</p>
             
                </div>
                <h3> Price:<span style={{fontSize:"1.3rem"}}>${item.price}</span></h3> 
                <h3>Quantity:<span style={{fontSize:"1.3rem"}}>{item.quantity}</span></h3> 
                  
                </div>
            </>
        )
     })}
    </div>
    </div>
    
    </>
  
  )
}

export default View