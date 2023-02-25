import React from "react";
import useShoes from "../hooks/useShoes";
import Shoe from "./Shoe";
import plane from "../assets/plane.png";
import "../styles/Shoes.css";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Spinner from "./Spinner";
import {motion} from "framer-motion"
import { container } from "../helpers/framerMotion";

const Shoes = () => {
  const [products, isLoading] = useShoes();

  if (isLoading) {
    return <Spinner />;
  }



  
  return (
    <section className="shoes-container">
      <div className="feature-header">
        <img src={plane} alt="plane-logo" />
        <h3>Our Feature</h3>
      </div>
      <motion.div variants={container}
    initial="hidden"
    whileInView="visible" className="card-container">
        {products.map((product) => (
          <Shoe key={product._id} product={product} />
        ))}
      </motion.div>
    <div className="See-more-btn">
      <Link>SEE MORE</Link>
      <BsFillArrowRightSquareFill size={25} />
    </div>
    </section>
  );
};

export default Shoes;
