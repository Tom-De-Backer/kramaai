import React, { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import "./WidgetSlideshow.css";
import "react-slideshow-image/dist/styles.css";

import { hoofdSponsors, platinumSponsors, goldenSponsors } from "../../images/sponsors/index.js";

let slideImages = hoofdSponsors;
if (new Date(2026, 9, 3, 0, 0, 0, 0) > new Date()) slideImages = slideImages.concat(platinumSponsors);
if (new Date(2026, 6, 3, 0, 0, 0, 0) > new Date()) slideImages = slideImages.concat(goldenSponsors);

const properties = {
    duration: 0,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    arrows: false,
    slidesToScroll: 1,
    slidesShow: 1,
    pauseOnHover: true,
    wrapperWidth: 100,
};

const WidgetSlideshow = () => {
    const imageComponents = slideImages.map((image, index) => {
        let img = (
            <img
                src={image.logo}
                alt={image.alt}
                className="imageSponsor"
            />
        );
        return (
            <div className="each-slideSponsor" key={index}>
                <a target="_blank" rel="noopener noreferrer" href={image.site}>
                    {img}
                </a>
            </div>
        );
    });

    const component = (
        <div className="slide-containerSponsor">
            <Slide {...properties}> {imageComponents} </Slide>
        </div>
    );
    //if (width == 0) setWidth(100);
    return component;
};

export default WidgetSlideshow;
