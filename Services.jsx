import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/ryan-moreno-w1_4YH5IhDg-unsplash.jpg";
import img2 from "../assets/domenico-loia-hGV2TfOh0ns-unsplash.jpg";
// import "../style/Services.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Services = () => {
  return (
    <div className="services">
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false}>
        <div>
          <img src={img1} alt="Img" />
          <p className="legend">
            Lorem, ipsum dolor sit amet
          </p>
        </div>

        <div>
          <img src={img2} alt="Img" />
          <p className="legend">
            Lorem, ipsum dolor et
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
