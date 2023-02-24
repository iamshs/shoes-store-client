import React from "react";
import useShoes from "../hooks/useShoes";
import Shoe from "./Shoe";
import plane from "../assets/plane.png"
import '../styles/Shoes.css'

const Shoes = () => {
  const [products, isLoading] = useShoes();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="shoes-container">
      <div className="feature-header">
      <img src={plane} alt="plane-logo" />
      <h3>Our Feature</h3>
      </div>
      <div className="card-container">
        {products.map((product) => (
          <Shoe key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shoes;
