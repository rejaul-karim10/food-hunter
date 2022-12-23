import React from "react";
import Foods from "./components/Foods";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Foods />
    </div>
  );
}

export default App;
