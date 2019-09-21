import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import ReactGA from "react-ga";

import Home from "./components/Home.js";
import Inschrijven from "./components/Inschrijven.js";
import Leiding from "./components/Leiding.js";
import Navbar from "./components/navigation/Navbar";
import Navlinks from "./components/navigation/Navlinks";
import Photos from "./components/Photos";
import Album from "./components/Album";
import Kramaai from "./components/Kramaai";
import Faq from "./components/Faq.js";

import "./App.css";
import Verhuur from "./components/Verhuur.js";
import Videos from "./components/Videos.js";

function App() {
  ReactGA.initialize("UA-147726960-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <HashRouter>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/inschrijven" component={Inschrijven} exact />
        <Route path="/leiding" component={Leiding} exact />
        <Route path="/fotos" component={Photos} exact />
        <Route path="/fotos/:id" component={Album} />
        <Route path="/kramaai" component={Kramaai} />
        <Route path="/videos" component={Videos} />
        <Route path="/faq" component={Faq} />
        <Route path="/verhuur" component={Verhuur} />
        {/* Dit is voor een pad dat niet bestaat. Hier kan een speciale Error component voor gemaakt worden */}
        <Route component={Home} exact />
      </Switch>
      <footer>
        <div className="data">
          <Navlinks />
          <p>
            © Website made by{" "}
            <a href="mailto: tom_debacker@msn.com">Tom De Backer</a>
          </p>
        </div>
      </footer>
    </HashRouter>
  );
}

export default App;
