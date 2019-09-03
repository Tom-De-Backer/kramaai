import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import Inschrijven from "./components/Inschrijven.js";
import Leiding from "./components/Leiding.js";
import Navbar from "./components/navigation/Navbar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/inschrijven" component={Inschrijven} exact />
        <Route path="/leiding" component={Leiding} exact />
        {/* Dit is voor een pad dat niet bestaat. Hier kan een speciale Error component voor gemaakt worden */}
        <Route component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
