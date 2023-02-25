
import React from "react";
import "../styles/Shoe.css";
import {FaShoppingCart} from "react-icons/fa"



const Shoe = ({ product }) => {
  const { name, price, rating, image } = product;

  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-details">
        <h2> {name} </h2>
      
       <h1>${price} </h1>
      </div>
      <button>
        <FaShoppingCart />
        <p>ADD TO CART</p>
        </button>
    </div>
  );
};

export default Shoe;
