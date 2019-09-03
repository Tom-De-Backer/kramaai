import React from "react";
import Navbar from "./components/navigation/Navbar";
import SlideEffect from "./components/slideShow/slideEffect";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SlideEffect />
      <h1>test</h1>
    </BrowserRouter>
  );
}

export default App;
