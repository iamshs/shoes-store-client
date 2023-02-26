import React from "react";
import "../styles/NewArrival.css";
import {BsArrowRight} from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

//import css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";

const Slider = () => {
  const { isLoading, data: images } = useQuery({
    queryKey: ["sliderData"],
    queryFn: () =>
      fetch("http://localhost:5000/slider").then((res) => res.json()),
  });
  if (isLoading) {
    return <Spinner />;
  }
  console.log(images);
  return (
    <div className="s-container">
        <div className="arrival-header">
            <BsArrowRight size={60} />
            <h1>New Arrival</h1>
        </div>
      <Swiper
        navigation={true}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {images.map((slide) => (
          <SwiperSlide key={slide._id}>
            <img src={slide.slider} className="image-p" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
