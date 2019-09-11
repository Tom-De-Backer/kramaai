import React from "react";
import { Slide } from "react-slideshow-image";
import "./slideEffect.css";

import image0 from "../../images/slideShow/Bullingen2019-1.jpg";
import image1 from "../../images/slideShow/Bullingen2019-38.jpg";
import image2 from "../../images/slideShow/IMG_20190803_201342.jpg";

const slideImages = [image0, image1, image2];

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((each, index) => (
          <div className="each-slide" key={index}>
            <img src={slideImages[index]} alt="Kamp" className="image" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
