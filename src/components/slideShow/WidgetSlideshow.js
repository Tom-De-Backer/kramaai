import React from "react";
import { Slide } from "react-slideshow-image";
import "./WidgetSlideshow.css";

import image0 from "../../images/sponsors/palm_logo.jpg";
import image1 from "../../images/sponsors/goudenfritje.jpg";
import image2 from "../../images/sponsors/ki-music.jpg";

const slideImages = [image0, image1, image2];

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const WidgetSlideshow = () => {
  return (
    <div className="slide-containerSponsor">
      <Slide {...properties}>
        {slideImages.map((each, index) => (
          <div className="each-slideSponsor" key={index}>
            <img
              src={slideImages[index]}
              alt="Sponsor"
              className="imageSponsor"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default WidgetSlideshow;
