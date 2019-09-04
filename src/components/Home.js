import React, { Component } from "react";

import SlideEffect from "../components/slideShow/slideEffect";
import CalendarItem from "./CalendarItem";
import NewsItem from "./NewsItem";

import "../styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <SlideEffect className="slideEffect" />
        <section className="info">
          <div className="news">
            <NewsItem
              title="Leidersvoorstelling"
              text=" "
              imageUrl="https://kramaaiblog.files.wordpress.com/2019/09/img_3425.jpg?w=676"
            />
          </div>

          <div className="calender">
            <h2 className="titleCalendar">Kalender</h2>
            <CalendarItem
              date="17 sep"
              event="Leidersvoorstelling @ GBS Mollem"
            />
            <CalendarItem date="22 sep" event="Eerste vergadering" />
            <CalendarItem date="6 okt" event="Ouderavond" />
            <CalendarItem
              date="20 okt"
              event="Geen vergadering (leidersweekend)"
            />
            <CalendarItem date="9 nov" event="Italiaans etentje" />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
