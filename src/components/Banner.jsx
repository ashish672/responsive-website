import React from "react";
// import Carousel from "react-multi-carousel";
// const c = Carousel.default ? Carousel.default : Carousel
// import Carousel from "nuka-carousel"
// import "react-multi-carousel/lib/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Swiper
      className="carousel"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="slider-img">
          <div className="info">
            <h1 className="text">We need the tonic of wildness</h1>
            <button>Read More</button>
          </div>
          <div className="img"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-img">
          <div className="info">
            <h1 className="text">We need the tonic of wildness</h1>
            <button>Read More</button>
          </div>
          <div className="img"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-img">
          <div className="info">
            <h1 className="text">We need the tonic of wildness</h1>
            <button>Read More</button>
          </div>
          <div className="img"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
