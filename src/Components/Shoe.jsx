
import React from "react";
import "../styles/Shoe.css";
import {FaShoppingCart} from "react-icons/fa"
import { item } from "../helpers/framerMotion";
import {motion} from "framer-motion"



const Shoe = ({ product }) => {
  const { name, price, rating, image } = product;

  return (
    <motion.div variants={item} className="card">
      <img src={image} alt="" />
      <div className="card-details">
        <h2> {name} </h2>
       <h1>${price} </h1>
      </div>
      <motion.button  whileHover={{ scale: 1.07 }}
               whileTap={{ scale: 0.9 }} >
        <FaShoppingCart />
        <p>ADD TO CART</p>
        </motion.button>
    </motion.div>
  );
};

export default Shoe;
