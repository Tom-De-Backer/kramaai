import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ReactGA from "react-ga";

import Home from "./components/Home.js";
import Inschrijven from "./components/Inschrijven.js";
import Leiding from "./components/Leiding.js";
import Navbar from "./components/navigation/Navbar";
import Navlinks from "./components/navigation/Navlinks";
import Photos from "./components/Photos";
import Album from "./components/Album";

import "./App.css";

function App() {
  ReactGA.initialize("UA-147726960-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/inschrijven" component={Inschrijven} exact />
        <Route path="/leiding" component={Leiding} exact />
        <Route path="/fotos" component={Photos} exact />
        <Route path="/fotos/:id" component={Album} />
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
    </BrowserRouter>
  );
}

export default App;
