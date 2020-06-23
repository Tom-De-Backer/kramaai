import React from "react";
import { Slide } from "react-slideshow-image";
import "./WidgetSlideshow.css";

import image0 from "../../images/sponsors/cornet_logo_black.png";
import image1 from "../../images/sponsors/goudenfritje.jpg";
import image2 from "../../images/sponsors/ki-music.jpg";
import image3 from "../../images/sponsors/elbo.jpg";

const slideImages = [image0, image1, image2, image3];

const properties = {
  duration: 0,
  transitionDuration: 3500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
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
