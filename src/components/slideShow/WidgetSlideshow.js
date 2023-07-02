import React from "react";
import { Slide } from "react-slideshow-image";
import "./WidgetSlideshow.css";
import "react-slideshow-image/dist/styles.css";

import {
    hoofdSponsors,
    goldenSponsors,
    empty,
} from "../../images/sponsors/index.js";

let slideImages = hoofdSponsors;
if (new Date(2024, 1, 2, 0, 0, 0, 0) > new Date())
    slideImages = slideImages.concat(goldenSponsors);

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
                {slideImages.map((_, index) => (
                    <div className="each-slideSponsor" key={index}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={slideImages[index].site}
                        >
                            <img
                                src={slideImages[index].logo}
                                alt="Sponsor"
                                className="imageSponsor"
                            />
                        </a>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default WidgetSlideshow;
