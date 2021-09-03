import React, { Component } from "react";

import ReactGA from "react-ga";

import "../styles/Etentje.css";
// import EnrollForm from "./enroll/EnrollForm";

import SideWidget from "./SideWidget";
import SideSpace from "./SideSpace";

class Etentje extends Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    var date = new Date(2020, 9, 4, 18, 0, 0, 0);
    console.log(date);
    return (
      <div className="etentje">
        <SideSpace />
        <div className="uitlegDiv">
          
            {date > new Date() && (
            <center>
                <h1>
                    Hier kan u binnenkort reserveren voor ons Italiaans Etentje 2020!
                </h1> 
            </center> )}

            {/*  Dit gedeelte is voor het tonen van de Google form */}       
            {date < new Date() && (
                <div>
                    <h1>
                        Maak hier uw bestelling voor Italiaans etentje 2020:
                    </h1>
                    <br />
                    <center>
                        <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSe3pF5Dl2Dk9qvIn9Qm2zrmW89ROy8weR64C87U3XyzwCWwIg/viewform?usp=sf_link"
                        width="90%"
                        height="2100"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Take Away"
                        >
                        Laden…
                        </iframe>
                    </center>
                    <br />
                    <br />
                    <br />
{/*                     
                    <h1>
                        Italiaans etentje:
                    </h1>
                    <br />
                    <center>
                        <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdIVEDX5r4eNuw5UpZNSiuwGfiDMdXlzi3Lh152-h71DqDGKg/viewform?usp=sf_link"
                        width="90%"
                        height="1406"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Italiaans etentje"
                        >
                        Laden…
                        </iframe>
                    </center> */}
                </div>

            
          )} 
        </div>
        <SideWidget />
        <SideSpace />
      </div>
    );
  }
}

export default Etentje;
