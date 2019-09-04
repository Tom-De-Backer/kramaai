import React, { Component } from "react";

import SlideEffect from "../components/slideShow/slideEffect";

import "../styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <SlideEffect className="slideEffect" />
        <section className="calendar">
          <div>
            <img
              src="https://images.unsplash.com/photo-1506703248799-a1b1896290e8?auto=format&fit=crop&w=634&q=80"
              alt="test"
            />
          </div>
          <div>
            <p className="titleCalendar">Kalender</p>
            <p>17 september: Leidersvoorstelling @ GBS Mollem</p>
            <p>22 september: Eerste vergadering</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
