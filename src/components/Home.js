import React, { Component } from "react";

import ReactGA from "react-ga";

import SlideEffect from "../components/slideShow/slideEffect";
import CalendarItem from "./CalendarItem";
import NewsItem from "./NewsItem";

import "../styles/Home.css";
import SideWidget from "./SideWidget";
import WidgetSlideshow from "./slideShow/WidgetSlideshow";

let calendarPromise = new Promise((resolve) => {
    fetch("https://kramaai.be/public/calendar.json").then((calendar) =>
        resolve(calendar.json())
    );
});
let newsPromise = new Promise((resolve) => {
    fetch("https://kramaai.be/public/news.json").then((news) => {
        resolve(news.json());
    });
});

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            calendarItems: undefined,
            newsItems: undefined,
        };
        this.getCalendarItems = this.getCalendarItems.bind(this);
        this.getCalendarItems();
        this.getNewsItems = this.getNewsItems.bind(this);
        this.getNewsItems();
    }

    getCalendarItems() {
        calendarPromise.then((items) => {
            let t = [];
            this.setState(
                (state) =>
                    (state.calendarItems = items.filter(
                        (item) => Date.parse(item.until) > new Date()
                    ))
            );
        });
    }

    getNewsItems() {
        newsPromise.then((items) => {
            this.setState(
                (state) =>
                    (state.newsItems = items.filter(
                        (item) => Date.parse(item.until) > new Date()
                    ))
            );
            console.log(this.state.newsItems.length);
        });
    }

    render() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div className="home">
                <SlideEffect className="slideEffect" />
                <section className="info">
                    <div className="news">
                        {(this.state.newsItems &&
                            ((this.state.newsItems.length == 0 && (
                                <p>
                                    Er is momenteel geen nieuws, kom later nog
                                    eens terug.
                                </p>
                            )) ||
                                this.state.newsItems.map((item) => (
                                    <NewsItem
                                        key={item.title}
                                        title={item.title}
                                        text={item.text}
                                        imageUrl={item.imageURL}
                                        imageLink={item.imageLink}
                                        until={Date.parse(item.until)}
                                    />
                                )))) || <p>laden...</p>}
                    </div>

                    <div className="sideSpace">
                        <div className="calender">
                            <h2 className="titleCalendar">Kalender</h2>
                            {(this.state.calendarItems &&
                                ((this.state.calendarItems.length == 0 && (
                                    <p>
                                        Er is momenteel niets gepland, kom later
                                        nog eens terug.
                                        <br />
                                    </p>
                                )) ||
                                    this.state.calendarItems.map((item) => (
                                        <CalendarItem
                                            key={item.event}
                                            date={item.date}
                                            event={item.event}
                                            until={new Date(item.until)}
                                        />
                                    )))) || <p>laden...</p>}
                        </div>
                        <br />
                        <div className="slideShow">
                            <WidgetSlideshow />
                        </div>
                        <SideWidget />
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
