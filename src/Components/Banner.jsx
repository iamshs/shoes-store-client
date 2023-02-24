import React from "react";
import "../styles/Banner.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner-home">
      <motion.h1
        whileInView={{ x: -60 }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
      >
        Start Your Day
      </motion.h1>
      <motion.h2
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          type: "ease-in-out",
          stiffness: 260,
          duration: .5,
        }}
      >
        with your Brand
      </motion.h2>
    </div>
  );
};

export default Banner;
