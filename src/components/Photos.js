import React, { Component } from "react";

import ReactGA from "react-ga";

import { NavLink } from "react-router-dom";

import "../styles/Photos.css";

// Photos react: http://neptunian.github.io/react-photo-gallery/

class Photos extends Component {
    render() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div>
                <div className="photosTextDiv">
                    <div className="titlePhotos">
                        Foto's van de afgelopen kampen:
                    </div>
                    <div className="photosTextDiv2">
                        <div className="yearPhotos">
                            {" "}
                            <a
                                href="https://photos.app.goo.gl/ukm1MCSjzQvtgcdY7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Kamp 2023
                            </a>{" "}
                        </div>
                        <div className="yearPhotos">
                            {" "}
                            <a
                                href="https://photos.app.goo.gl/iPpWPCeNvj8Ew8dH6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Kamp 2022
                            </a>{" "}
                        </div>
                        <div className="yearPhotos">
                            {" "}
                            <a
                                href="https://photos.app.goo.gl/LdUKBFExDFBQeTCa8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Kamp 2021
                            </a>{" "}
                        </div>
                        <div className="yearPhotos">
                            {" "}
                            <a
                                href="https://photos.app.goo.gl/Y2YRduK9mKTBF66L6"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Kamp 2020
                            </a>{" "}
                        </div>
                        <div className="yearPhotos">
                            {" "}
                            <a
                                href="https://photos.app.goo.gl/bJoayEJ1DuZJqZmP7"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Kamp 2019
                            </a>{" "}
                        </div>
                        <div className="yearPhotos">
                            {" "}
                            <a
                                href="https://photos.app.goo.gl/1DeTtBUqbpsZUCd36"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Kamp 2018
                            </a>{" "}
                        </div>
                        <div className="yearPhotos">
                            {" "}
                            <a
                                href="https://goo.gl/photos/TwQUEufTCw4YvBmJ8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Kamp 2017
                            </a>{" "}
                        </div>
                    </div>
                </div>
                <div className="photosButtonsDiv">
                    {/* <NavLink to="/fotos/unknown" className="button">
            Album onbekend jaar
          </NavLink> */}
                    <NavLink to="/fotos/album2007" className="button">
                        Album 2007
                    </NavLink>
                    <NavLink to="/fotos/album2008" className="button">
                        Album 2008
                    </NavLink>
                    <NavLink to="/fotos/albumKamp2016" className="button">
                        Album kamp 2016
                    </NavLink>
                </div>
                <div className="photosButtonsDiv">
                    <NavLink
                        to="/fotos/albumLaatsteVergadering2017"
                        className="button"
                    >
                        Laatste vergadering 2017
                    </NavLink>
                    <NavLink to="/fotos/album2019" className="button">
                        Album 2019
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Photos;
