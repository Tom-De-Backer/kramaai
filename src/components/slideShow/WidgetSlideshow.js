import React from "react";
import { Slide } from "react-slideshow-image";
import "./WidgetSlideshow.css";
import "react-slideshow-image/dist/styles.css";

import { hoofdSponsors, platinumSponsors, goldenSponsors } from "../../images/sponsors/index.js";

let slideImages = hoofdSponsors;
if (new Date(2024, 8, 25, 0, 0, 0, 0) > new Date()) slideImages = slideImages.concat(platinumSponsors);
if (new Date(2024, 5, 25, 0, 0, 0, 0) > new Date()) slideImages = slideImages.concat(goldenSponsors);

const properties = {
    duration: 0,
    transitionDuration: 3000,
    infinite: true,
    indicators: false,
    arrows: false,
};

const WidgetSlideshow = () => {
    return (
        <div className="slide-containerSponsor">
            <Slide {...properties}>
                {slideImages.map((image, index) => (
                    <div className="each-slideSponsor" key={index}>
                        <a target="_blank" rel="noopener noreferrer" href={image.site}>
                            <img src={image.logo} alt={image.alt} className="imageSponsor" />
                        </a>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default WidgetSlideshow;
