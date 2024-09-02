import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';

function ProductComp() {
  const state = useSelector((state) => state.allProducts.cardItems);

  return (
    <>
      {Array.isArray(state) && state.length > 0 ? (
        state.map((item) => (
          <div className="card" >
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} style={{ width: "40%" }} />
              <h5>{item.title}</h5>
              <h5 className="price">${item.price}</h5>
              <p>{item.category}</p>
            </Link>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </>
  );
}

export default ProductComp;
